import Image from "next/image";
import { UpdateCustomer } from "./buttons";
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {/* Mobile */}
          <div className="md:hidden">
            {customers?.map((customer) => (
              <div
                key={customer.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Image
                        src={customer.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${customer.name}'s profile picture`}
                      />
                      <p>{customer.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{customer.email}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-500">Pending</p>
                      <p className="font-medium">{customer.total_pending}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-500">Paid</p>
                      <p className="font-medium">{customer.total_paid}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <UpdateCustomer id={customer.id} />
                  </div>
                </div>
                <div className="pt-4 text-sm text-gray-500">
                  <p>{customer.total_invoices} invoices</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr className="bg-gray-50">
                <th scope="col" className="px-6 py-5 font-medium">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Invoices
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Pending
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Paid
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {customers?.map((customer, idx) => (
                <tr
                  key={customer.id}
                  className={`
                    border-b last:border-none text-sm
                    [&:first-child>td:first-child]:rounded-tl-lg
                    [&:first-child>td:last-child]:rounded-tr-lg
                    [&:last-child>td:first-child]:rounded-bl-lg
                    [&:last-child>td:last-child]:rounded-br-lg
                  `}
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src={customer.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${customer.name}'s profile picture`}
                      />
                      <p>{customer.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.total_invoices}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.total_pending}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.total_paid}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end">
                      <UpdateCustomer id={customer.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
