import { Timestamp } from "firebase/firestore";

export interface Testimonial {
  id: string;
  name: string;
  rating: number; // 1-5 star rating
  message: string;
  imageUrl: string;
  createdAt: Timestamp;
}

export interface Props {
  testimonial: Testimonial;
  onUpdate: (
    id: string,
    data: Partial<Testimonial>,
    imageFile?: File
  ) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}
