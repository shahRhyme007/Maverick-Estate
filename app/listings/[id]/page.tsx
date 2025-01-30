import ListingPageClient from './ListingPageClient';

// This is required for static export
export function generateStaticParams() {
  // Generate params for the listings we want to pre-render
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

export default function ListingPage() {
  return <ListingPageClient />;
}