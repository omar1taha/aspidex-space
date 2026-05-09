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
    { label: 'All Categories', value: 'all' },
    ...categories.map((cat) => ({ label: cat, value: cat })),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header & Content */}
      <div className="max-w-7xl mx-auto px-6">
        <header className="border-b border-gray-200 pt-10 pb-6 mb-8">
          <h1 className="text-h3 md:text-h2 font-bold text-primary-900">
            UAE Government Services
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Explore and access government services quickly and easily.
          </p>
        </header>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
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
          <div className="w-full md:w-64">
            <Select
              id="category"
              label="Category"
              options={categoryOptions}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </div>

        {/* Results count */}
        <p className="mt-6 text-sm text-gray-500">
          Showing {filteredServices.length} of {services.length} services
        </p>

        {/* Service Cards Grid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="text-h5 text-gray-400">No services found</p>
            <p className="text-sm text-gray-400 mt-2">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
