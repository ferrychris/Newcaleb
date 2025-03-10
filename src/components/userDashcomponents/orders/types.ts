export interface Service {
  type: 'carpooling' | 'shopping' | 'large_item';
  title: string;
  description: string;
  icon: React.ReactNode;
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

export interface ToastStyles {
  background: string;
  color: string;
  borderRadius: string;
  border?: string;
}

export interface ToastConfig {
  style: ToastStyles;
  duration: number;
  iconTheme: {
    primary: string;
    secondary: string;
  };
}