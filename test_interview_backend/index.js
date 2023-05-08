const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 3000;
const secretKey = "secret"; // La clave secreta para JWT

app.use(cors());
app.use(bodyParser.json());

// Datos de prueba
const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 4,
    username: "user4",
    password: "password4",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 5,
    username: "user5",
    password: "password5",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 6,
    username: "user6",
    password: "password6",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 7,
    username: "user7",
    password: "password7",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 8,
    username: "user8",
    password: "password8",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 9,
    username: "user9",
    password: "password9",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 10,
    username: "user10",
    password: "password10",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 11,
    username: "user11",
    password: "password11",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 12,
    username: "user12",
    password: "password12",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 13,
    username: "user13",
    password: "password13",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 14,
    username: "user14",
    password: "password14",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 15,
    username: "user15",
    password: "password15",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 16,
    username: "user16",
    password: "password16",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 17,
    username: "user17",
    password: "password17",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 18,
    username: "user18",
    password: "password18",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 19,
    username: "user19",
    password: "password19",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 20,
    username: "user20",
    password: "password20",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 21,
    username: "user21",
    password: "password21",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 22,
    username: "user22",
    password: "password22",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 23,
    username: "user23",
    password: "password23",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 24,
    username: "user24",
    password: "password24",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 25,
    username: "user25",
    password: "password25",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 26,
    username: "user26",
    password: "password26",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 27,
    username: "user27",
    password: "password27",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 28,
    username: "user28",
    password: "password28",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 29,
    username: "user29",
    password: "password29",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 30,
    username: "user30",
    password: "password30",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 31,
    username: "user31",
    password: "password31",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 32,
    username: "user32",
    password: "password32",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 33,
    username: "user33",
    password: "password33",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 34,
    username: "user34",
    password: "password34",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 35,
    username: "user35",
    password: "password35",
    sessionStartTime: null,
    buttonClicked: null,
    button1Count: 0,
    button2Count: 0,
  },
  {
    id: 36,
    username: "admin",
    password: "admin",
    is_admin: true,
    sessionStartTime: null,
    buttonClicked: null,
  },
];

// Ruta para autenticar usuario
app.post("/api/authenticate", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res
      .status(401)
      .json({ message: "Username or password is incorrect" });
  }
  const token = jwt.sign({ sub: user.id }, secretKey);
  const isAdmin = user.is_admin ? true : false;

  // Guardar tiempo de inicio de sesión y reiniciar el botón clickeado
  user.sessionStartTime = new Date();
  user.buttonClicked = null;

  res.json({ token, is_admin: isAdmin });
});

// Middleware para verificar el token de autenticación
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Missing authorization token" });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = user;
    next();
  });
}

// Ruta para registrar el botón clickeado por el usuario
app.post("/api/buttonClicked", authenticateToken, (req, res) => {
  const { button } = req.body;
  const user = users.find((u) => u.id === req.user.sub);
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  // Guardar el botón clickeado y actualizar el conteo correspondiente
  user.buttonClicked = button;
  if (button === 1) {
    user.button1Count++;
  } else if (button === 2) {
    user.button2Count++;
  }

  console.log("user", user);

  res.json({ message: "Button clicked registered" });
});
// function countButtonClicked(button) {
//     let count = 0;
//     users.forEach(user => {
//         if (user.buttonClicked === button) {
//             count++;
//         }
//     });
//     return count;
// }

// Ruta protegida para admin que requiere autenticación
// app.get('/api/admin', authenticateToken, (req, res) => {
//     const user = users.find(u => u.id === req.user.sub);
//     if (!user.is_admin) {
//         return res.status(403).json({ message: 'Unauthorized access' });
//     }

//     // Calcular la duración de la sesión
//     const sessionDuration = new Date() - user.sessionStartTime;

//     res.json({ message: `Welcome Admin! The user session lasted ${sessionDuration / 1000} seconds and the button clicked was ${user.buttonClicked}` });
// });
// Ruta protegida para admin que requiere autenticación
app.get("/api/admin", authenticateToken, (req, res) => {
  const user = users.find((u) => u.id === req.user.sub);
  if (!user.is_admin) {
    return res.status(403).json({ message: "Unauthorized access" });
  }

  const button1ClickedCount = countButtonClicked(1);
  const button2ClickedCount = countButtonClicked(2);
  res.json({
    message: "Welcome Admin!",
    button1ClickedCount,
    button2ClickedCount,
  });
});

function countButtonClicked(button) {
  let count = 0;
  users.forEach((user) => {
    if (user.buttonClicked === button) {
      count++;
    }
  });
  return count;
}

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Ruta protegida para usuarios que requiere autenticación
app.get("/api/users", authenticateToken, (req, res) => {
  res.json(users);
});
