import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let users = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    lastName: "Nasser",
    firstName: "Ahmad",
    email: "nasser@gmail.com",
    phone: "050 452 4729",
    createdAt: "05.07.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Mohammed",
    firstName: "Saleh",
    email: "saleh@gmail.com",
    phone: "050 426 5715",
    createdAt: "03.07.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Osama",
    firstName: "Othman",
    email: "osama@hottmail.com",
    phone: "050 426 5715",
    createdAt: "02.07.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dania",
    firstName: "Ahmad",
    email: "dania@gmail.com",
    phone: "055 522 5125",
    createdAt: "12.06.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Amir",
    firstName: "Nasser",
    email: "amir@gmail.com",
    phone: "054 252 6924",
    createdAt: "10.06.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sead",
    firstName: "Saleh",
    email: "sead@gmail.com",
    phone: "054 523 5643",
    createdAt: "11.05.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Omar",
    firstName: "Mohammed",
    email: "omar@gmail.com",
    phone: "053 734 5734",
    createdAt: "04.05.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Tmim",
    firstName: "Ahmad",
    email: "tmim@mail.com",
    phone: "051 346 8534",
    createdAt: "08.04.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Mohammed",
    firstName: "Salem",
    email: "mohammed@gmail.com",
    phone: "057 677 3445",
    createdAt: "04.04.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Raid",
    firstName: "Amad",
    email: "raid@gmail.com",
    phone: "053 345 3476",
    createdAt: "01.04.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Khaled",
    firstName: "Osama",
    email: "khaled@gmail.com",
    phone: "056 456 7859",
    createdAt: "05.04.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Nasser",
    firstName: "Khaled",
    email: "Nasser@hotmail.com",
    phone: "053 235 3745",
    createdAt: "01.03.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Salem",
    firstName: "Nasser",
    email: "salem@gmail.com",
    phone: "055 547 3423",
    createdAt: "03.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Afnan",
    firstName: "Sara",
    email: "Afnan@hotmail.com",
    phone: "054 234 2344",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Asia",
    firstName: "Mohammed",
    email: "Asia@gmail.com",
    phone: "053 234 4235",
    createdAt: "01.01.2023",
  },
];

let products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

// GET USERS
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET USER
app.get("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.json(user);
});

// ADD USER
app.post("/api/users", (req, res) => {
  users.unshift(req.body)
  res.json(users);
});

// DELETE USER
app.delete("/api/users/:id", (req, res) => {
  users = users.filter((user) => user.id !== parseInt(req.params.id));
  res.json("User deleted!");
});

// GET PRODUCTS
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET PRODUCT
app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === parseInt(req.params.id));
  res.json(product);
});

// ADD PRODUCT
app.post("/api/products", (req, res) => {
  products.unshift(req.body)
  res.json(products);
});

// DELETE PRODUCT
app.delete("/api/products/:id", (req, res) => {
  products = products.filter((product) => product.id !== parseInt(req.params.id));
  res.json("Product deleted!");
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});