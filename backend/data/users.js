import bcryps from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Mark Benson",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Novak",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
