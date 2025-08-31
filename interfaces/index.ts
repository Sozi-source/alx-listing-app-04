
export interface PropertyProps{
  id: number
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  description?: string
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
    
export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export interface ReviewsProps{
propertyId: number,
    name: string,
    avatar: string,
    rating: number,
    comment: string
    id: string|number
}