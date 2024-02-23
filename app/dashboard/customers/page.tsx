import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';
import { TableRowSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  return (
    <div className="w-full">
      <Suspense fallback={<TableRowSkeleton />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  );
}
