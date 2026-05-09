import { useState, useMemo } from 'react';
import { Input, Select } from '@aegov/design-system-react';
import ServiceCard from './components/ServiceCard';
import { services, categories } from './data/services';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return services.filter((service) => {
      const matchesSearch =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query);
      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categoryOptions = [
    { label: 'All categories', value: 'all' },
    ...categories.map((cat) => ({ label: cat, value: cat })),
  ];

  return (
    <div className="min-h-screen bg-whitely-50 font-body text-base 2xl:text-lg text-aeblack-800">
      <div className="mx-auto px-8 md:px-12 lg:px-20 xl:px-24 2xl:px-28">
        <header className="border-b border-aeblack-100 pt-10 pb-6 mb-8">
          <h1 className="text-h4 lg:text-h3 2xl:text-h2 text-aeblack-900">
            UAE Government Services
          </h1>
          <p className="mt-2 text-aeblack-500">
            Search and filter available government services by name or category.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-4">
              <Input
                id="search"
                label="Search services"
                placeholder="Search by title or description..."
                type="search"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
              />
            </div>
            <div className="md:col-span-2">
              <Select
                id="category"
                label="Category"
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>
          </div>

          <p className="mt-6 text-sm text-aeblack-500">
            Showing {filteredServices.length} of {services.length} services
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-h5 text-aeblack-400">No services found</p>
              <p className="text-sm text-aeblack-500 mt-2">
                Try adjusting your search or filter.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
