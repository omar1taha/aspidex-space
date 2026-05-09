import { Card, Button } from '@aegov/design-system-react';
import type { Service } from '../data/services';

const statusConfig = {
  active: { label: 'Active', classes: 'aegov-badge badge-success' },
  upcoming: { label: 'Upcoming', classes: 'aegov-badge badge-info' },
  maintenance: { label: 'Maintenance', classes: 'aegov-badge badge-warning' },
} as const;

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const status = statusConfig[service.status];

  return (
    <Card bordered glow variant="service" size="base" className="flex flex-col">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-primary-600">
          {service.category}
        </span>
        <span className={status.classes}>{status.label}</span>
      </div>

      <h5 className="text-h5 font-semibold text-primary-900">
        {service.title}
      </h5>

      <p className="text-sm text-gray-600 line-clamp-2 flex-1">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="aegov-badge badge-base"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 mt-auto pt-2">
        <Card.Link href="#">Start service</Card.Link>
        <Button variant="outline" size="sm">
          Details
        </Button>
      </div>
    </Card>
  );
}
