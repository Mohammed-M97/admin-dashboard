export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "/users/1",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "user.svg",
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: "product.svg",
        },
        {
          id: 3,
          title: "Orders",
          url: "/",
          icon: "order.svg",
        },
        {
          id: 4,
          title: "Posts",
          url: "/",
          icon: "post2.svg",
        },
      ],
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/",
          icon: "element.svg",
        },
        {
          id: 2,
          title: "Notes",
          url: "/",
          icon: "note.svg",
        },
        {
          id: 3,
          title: "Forms",
          url: "/",
          icon: "form.svg",
        },
        {
          id: 4,
          title: "Calendar",
          url: "/",
          icon: "calendar.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: "backup.svg",
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "chart.svg",
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "log.svg",
        },
      ],
    },
  ];
  
  export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Ahmad Nasser",
      email: "ahmad@gmail.com",
      amount: "3.668",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Osama Othman",
      email: "osama@gmail.com",
      amount: "3.256",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Saleh Mohammed",
      email: "saleh@gmail.com",
      amount: "2.998",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/15617517/pexels-photo-15617517/free-photo-of-two-backpackers-hiking-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Adeline Watson",
      email: "adeline@gmail.com",
      amount: "2.512",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/19376929/pexels-photo-19376929/free-photo-of-a-small-cabin-in-the-mountains-with-a-foggy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      amount: "2.134",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/28971351/pexels-photo-28971351/free-photo-of-scenic-view-of-etne-mountains-in-vestland-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Augusta McGee",
      email: "augusta@gmail.com",
      amount: "1.932",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/15617526/pexels-photo-15617526/free-photo-of-looking-across-a-mountain-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Angel Thomas",
      email: "angel@gmail.com",
      amount: "1.560",
    },
  ];
  
  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 450 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 450 },
    ],
  };
  
  export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 4000,
      },
      {
        name: "Mon",
        profit: 3000,
      },
      {
        name: "Tue",
        profit: 2000,
      },
      {
        name: "Wed",
        profit: 2780,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 2390,
      },
      {
        name: "Sat",
        profit: 3490,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 1000,
      },
      {
        name: "Mon",
        visit: 3000,
      },
      {
        name: "Tue",
        visit: 2000,
      },
      {
        name: "Wed",
        visit: 2780,
      },
      {
        name: "Thu",
        visit: 1890,
      },
      {
        name: "Fri",
        visit: 2390,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };
  
  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/30292824/pexels-photo-30292824/free-photo-of-aerial-view-of-trees-and-houses-along-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Nasser",
      firstName: "Ahmad",
      email: "nasser@gmail.com",
      phone: "050 452 4729",
      createdAt: "05.07.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/30326290/pexels-photo-30326290/free-photo-of-traditional-horsemen-in-cultural-costume-near-yurt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Mohammed",
      firstName: "Saleh",
      email: "saleh@gmail.com",
      phone: "050 426 5715",
      createdAt: "03.07.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/30319940/pexels-photo-30319940/free-photo-of-silhouette-of-person-in-desert-at-sunset.jpeg",
      lastName: "Osama",
      firstName: "Othman",
      email: "osama@hottmail.com",
      phone: "050 426 5715",
      createdAt: "02.07.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Dania",
      firstName: "Ahmad",
      email: "dania@gmail.com",
      phone: "055 522 5125",
      createdAt: "12.06.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/30285983/pexels-photo-30285983/free-photo-of-stone-tower-by-the-sea-in-rethimno-greece.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Amir",
      firstName: "Nasser",
      email: "amir@gmail.com",
      phone: "054 252 6924",
      createdAt: "10.06.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/30285052/pexels-photo-30285052/free-photo-of-close-up-image-of-natural-rock-formation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Sead",
      firstName: "Saleh",
      email: "sead@gmail.com",
      phone: "054 523 5643",
      createdAt: "11.05.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/30282101/pexels-photo-30282101/free-photo-of-grazing-horse-in-rustic-village-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Omar",
      firstName: "Mohammed",
      email: "omar@gmail.com",
      phone: "053 734 5734",
      createdAt: "04.05.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/1144690/pexels-photo-1144690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Tmim",
      firstName: "Ahmad",
      email: "tmim@mail.com",
      phone: "051 346 8534",
      createdAt: "08.04.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/25462134/pexels-photo-25462134/free-photo-of-abandoned-cottage-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Mohammed",
      firstName: "Salem",
      email: "mohammed@gmail.com",
      phone: "057 677 3445",
      createdAt: "04.04.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/28206103/pexels-photo-28206103/free-photo-of-an-aerial-view-of-a-soccer-field-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Raid",
      firstName: "Amad",
      email: "raid@gmail.com",
      phone: "053 345 3476",
      createdAt: "01.04.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/6087685/pexels-photo-6087685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Khaled",
      firstName: "Osama",
      email: "khaled@gmail.com",
      phone: "056 456 7859",
      createdAt: "05.04.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/4507967/pexels-photo-4507967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Nasser",
      firstName: "Khaled",
      email: "Nasser@hotmail.com",
      phone: "053 235 3745",
      createdAt: "01.03.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/7841112/pexels-photo-7841112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Salem",
      firstName: "Nasser",
      email: "salem@gmail.com",
      phone: "055 547 3423",
      createdAt: "03.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/4207905/pexels-photo-4207905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Afnan",
      firstName: "Sara",
      email: "Afnan@hotmail.com",
      phone: "054 234 2344",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/4555537/pexels-photo-4555537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      lastName: "Asia",
      firstName: "Mohammed",
      email: "Asia@gmail.com",
      phone: "053 234 4235",
      createdAt: "01.01.2023",
    },
  ];
  
  export const products = [
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
  
  
  
  export const singleUser = {
    id: 1,
    title: "Ahmad Nasser",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      username: "Ahmad",
      fullname: "Ahmad Nasser",
      email: "Ahmed@gmail.com",
      phone: "055 456 7859",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Ahmad Nasser purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Ahmad Nasser added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Ahmad Nasser purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "Ahmad Nasser reviewed a product",
        time: "1 month ago",
      },
      {
        text: "Ahmad Nasser added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Ahmad Nasser reviewed a product",
        time: "2 months ago",
      },
    ],
  };
  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
      productId: "Ps5SDF1156d",
      color: "white",
      price: "$250.99",
      producer: "Sony",
      export: "Japan",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Ahmad Nasser purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Ahmad Nasser added Playstation 5 Digital Edition into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Ahmad Nasser purchased Playstation 5 Digital Edition",
        time: "2 weeks ago",
      },
      {
        text: "Ahmad Nasser reviewed the product",
        time: "1 month ago",
      },
      {
        text: "Ahmad Nasser added Playstation 5 Digital Edition into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Ahmad Nasser reviewed the product",
        time: "2 months ago",
      },
    ],
  };