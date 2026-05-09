export interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'active' | 'upcoming' | 'maintenance';
  tags: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Vehicle Registration',
    description: 'Register a new vehicle or renew your existing vehicle registration online.',
    category: 'Transport',
    status: 'active',
    tags: ['vehicle', 'registration', 'renewal'],
  },
  {
    id: 2,
    title: 'Passport Renewal',
    description: 'Renew your UAE passport quickly and securely through the online portal.',
    category: 'Identity',
    status: 'active',
    tags: ['passport', 'renewal', 'travel'],
  },
  {
    id: 3,
    title: 'Healthcare Appointment',
    description: 'Book an appointment at any government healthcare facility near you.',
    category: 'Health',
    status: 'active',
    tags: ['health', 'appointment', 'medical'],
  },
  {
    id: 4,
    title: 'Business License Renewal',
    description: 'Renew your trade or professional business license online.',
    category: 'Business',
    status: 'active',
    tags: ['license', 'business', 'renewal'],
  },
  {
    id: 5,
    title: 'Utility Connection',
    description: 'Apply for new electricity, water, or gas connections for your property.',
    category: 'Utilities',
    status: 'active',
    tags: ['electricity', 'water', 'connection'],
  },
  {
    id: 6,
    title: 'Driving License Application',
    description: 'Apply for a new driving license or convert your international license.',
    category: 'Transport',
    status: 'active',
    tags: ['driving', 'license', 'application'],
  },
  {
    id: 7,
    title: 'Emirates ID Renewal',
    description: 'Renew your Emirates ID card before it expires to avoid penalties.',
    category: 'Identity',
    status: 'maintenance',
    tags: ['emirates id', 'renewal', 'identity'],
  },
  {
    id: 8,
    title: 'Property Registration',
    description: 'Register property ownership or transfer property titles online.',
    category: 'Housing',
    status: 'active',
    tags: ['property', 'registration', 'ownership'],
  },
  {
    id: 9,
    title: 'Visa Application',
    description: 'Apply for tourist, work, or residency visas through the unified portal.',
    category: 'Identity',
    status: 'active',
    tags: ['visa', 'residency', 'travel'],
  },
  {
    id: 10,
    title: 'School Enrollment',
    description: 'Enroll your child in a public school or transfer between schools.',
    category: 'Education',
    status: 'upcoming',
    tags: ['school', 'enrollment', 'education'],
  },
  {
    id: 11,
    title: 'Traffic Fine Payment',
    description: 'View and pay your traffic fines online with instant confirmation.',
    category: 'Transport',
    status: 'active',
    tags: ['traffic', 'fines', 'payment'],
  },
  {
    id: 12,
    title: 'Housing Assistance',
    description: 'Apply for government housing grants and residential support programs.',
    category: 'Housing',
    status: 'upcoming',
    tags: ['housing', 'grant', 'assistance'],
  },
];

export const categories = [...new Set(services.map((s) => s.category))];

export const statuses: Service['status'][] = ['active', 'upcoming', 'maintenance'];
