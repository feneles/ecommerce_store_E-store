import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Mark Benson",
    email: "markb@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Novak",
    email: "johnn@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
