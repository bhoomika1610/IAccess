import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Bhoomika",
    email: "bhoomika@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sachin",
    email: "sachin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
