// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const customers = [
  // original 6
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },

  // 13 new customers with pseudo-random UUIDs
  {
    id: "a1f3c9d2-7f42-4c58-9b61-1d2e6a3b8c01",
    name: "Alice Monroe",
    email: "alice.monroe@example.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "b7d8e3f1-2c45-4f2d-8a2f-3b9c6d7a4e02",
    name: "Brian Chen",
    email: "brian.chen@example.com",
    image_url: "/customers/balazs-orban.png",
  },
  {
    id: "c5a2d7b8-1f23-4e6a-9b33-2d4e7f1c9a03",
    name: "Carla Espinoza",
    email: "carla.espinoza@example.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "d9e3f4a2-5b61-4c7d-8a91-6e3f2d5b0b04",
    name: "David Kim",
    email: "david.kim@example.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "e2f4b7c9-3a52-4d1e-9c71-5f6a4d3b1c05",
    name: "Elena Rossi",
    email: "elena.rossi@example.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "f1c7e2d3-6b42-4f8a-9d33-7b2c5a4e6f06",
    name: "Frank Li",
    email: "frank.li@example.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "a9b6d3f1-8c52-4a7e-9b14-2e7f3c5d0a07",
    name: "Grace Patel",
    email: "grace.patel@example.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "b3d9e4f2-1c72-4d3b-8a25-3f6e1d4c9b08",
    name: "Hector Gonzalez",
    email: "hector.gonzalez@example.com",
    image_url: "/customers/balazs-orban.png",
  },
  {
    id: "c1f2b8d3-4a62-4e9c-8d11-1a3b5e7f2c09",
    name: "Isabel Nguyen",
    email: "isabel.nguyen@example.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "d7e3f1c2-5b12-4a8d-9b67-6d2f4c1e3a10",
    name: "Jack Thompson",
    email: "jack.thompson@example.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "e5f1c9a7-2d32-4b6e-8c71-5a3d6f4b1b11",
    name: "Karen Murphy",
    email: "karen.murphy@example.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "f3c8d2b1-6a52-4f7c-9e31-3c5b2d6a4c12",
    name: "Leo Anders",
    email: "leo.anders@example.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "a2d4e7c3-1b42-4c5f-8a29-2f6d3e1b5d13",
    name: "Mia Johansson",
    email: "mia.johansson@example.com",
    image_url: "/customers/amy-burns.png",
  },
];

const invoices = [
  // original invoices kept as-is...
  /* ... */

  // invoices for new customers
  {
    customer_id: customers[6].id,
    amount: 12500,
    status: "pending",
    date: "2023-01-12",
  },
  {
    customer_id: customers[6].id,
    amount: 3200,
    status: "paid",
    date: "2023-02-10",
  },
  {
    customer_id: customers[7].id,
    amount: 9800,
    status: "paid",
    date: "2023-03-05",
  },
  {
    customer_id: customers[7].id,
    amount: 4500,
    status: "pending",
    date: "2023-04-01",
  },
  {
    customer_id: customers[8].id,
    amount: 13400,
    status: "pending",
    date: "2023-01-20",
  },
  {
    customer_id: customers[8].id,
    amount: 5400,
    status: "paid",
    date: "2023-02-18",
  },
  {
    customer_id: customers[9].id,
    amount: 22000,
    status: "paid",
    date: "2023-03-22",
  },
  {
    customer_id: customers[9].id,
    amount: 3100,
    status: "pending",
    date: "2023-04-10",
  },
  {
    customer_id: customers[10].id,
    amount: 14500,
    status: "pending",
    date: "2023-01-15",
  },
  {
    customer_id: customers[10].id,
    amount: 7200,
    status: "paid",
    date: "2023-02-19",
  },
  {
    customer_id: customers[11].id,
    amount: 8800,
    status: "paid",
    date: "2023-03-11",
  },
  {
    customer_id: customers[11].id,
    amount: 3300,
    status: "pending",
    date: "2023-04-05",
  },
  {
    customer_id: customers[12].id,
    amount: 19500,
    status: "pending",
    date: "2023-01-08",
  },
  {
    customer_id: customers[12].id,
    amount: 6400,
    status: "paid",
    date: "2023-02-14",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

export { users, customers, invoices, revenue };
