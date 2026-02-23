import jsonServer from "json-server";
import { v4 as uuid } from "uuid";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// ------------------ LOGIN API ------------------
server.post("/login", (req, res) => {
  const { username, password } = req.body;

  const users = router.db.get("users").value();
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = uuid(); // fake token

  return res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      role: user.role
    }
  });
});

// ------------------ MIDDLEWARE BẢO VỆ API ------------------
server.use((req, res, next) => {
  // Chặn API nếu không có header Authorization
  const protectedRoutes = ["/categories", "/users"]; // routes cần login
  if (protectedRoutes.some(path => req.path.startsWith(path))) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Missing token" });
    }
  }
  next();
});

// ------------------ ROUTER JSON SERVER ------------------
server.use(router);

// ------------------ LẮNG NGHE PORT ------------------
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🔥 JSON Server + Auth running on port ${PORT}`);
});
