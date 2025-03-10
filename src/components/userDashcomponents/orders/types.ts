import { ReactNode } from 'react';

export interface Service {
  type: 'carpooling' | 'shopping' | 'large_item';
  title: string;
  description: string;
  icon: ReactNode;
  baseRate: number;
  minPrice: number;
  theme: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface Order {
  id: string;
  user_id: string;
  service_type: Service['type'];
  pickup_location: string;
  destination: string;
  price: number;
  status: OrderStatus;
  scheduled_date: string;
  created_at: string;
}

export type OrderStatus = 'pending' | 'active' | 'in-transit' | 'completed';

export interface DistanceResult {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
}

export interface OrderFormData {
  pickup_location: string;
  destination: string;
  scheduled_date: string;
  price: number;
  service_type: 'carpooling' | 'shopping' | 'large_item';
}

export interface OrderFormErrors {
  pickup_location: string;
  destination: string;
  scheduled_date: string;
  price: string;
  distance: string;
}

export interface LocationInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

export interface PriceInfoCardProps {
  distanceResult: DistanceResult;
  service: Service;
  price: number;
}

export interface ServiceSelectionDialogProps {
  onClose: () => void;
  onSelectService: (service: Service) => void;
  services: Service[];
}

export interface OrderDetailsDialogProps {
  service: Service;
  onClose: () => void;
  onSubmit: (data: OrderFormData) => Promise<void>;
  isCreating: boolean;
}