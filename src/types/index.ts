export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string[];
  materials?: string[];
  gallery?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}
