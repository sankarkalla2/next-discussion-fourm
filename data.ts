import {
  DollarSign,
  MessageCircle,
  MessageCircleDashed,
  MessageSquare,
  icons,
} from "lucide-react";

export const discussionForms = [
  {
    id: 1,
    name: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem",
    imgUrl: "/profile-img.png",
    sector: 3,
    likes: 2000,
    comments: 1500,
    views: 5000,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem",
    imgUrl: "/profile-img.png",
    sector: 3,
    likes: 2000,
    comments: 1500,
    views: 5000,
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem",
    imgUrl: "/profile-img.png",
    sector: 3,
    likes: 2000,
    comments: 1500,
    views: 5000,
    createdAt: new Date(),
  },
  {
    id: 4,
    name: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem",
    imgUrl: "/profile-img.png",
    sector: 3,
    likes: 2000,
    comments: 1500,
    views: 5000,
    createdAt: new Date(),
  },
  {
    id: 5,
    name: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem",
    imgUrl: "/profile-img.png",
    sector: 3,
    likes: 2000,
    comments: 1500,
    views: 5000,
    createdAt: new Date(),
  },
];

export const stories = [
  {
    id: 1,
    title: "Market Today",
    imgUrl: "/stocks-market.jpg",
    story:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  },
  {
    id: 2,
    title: "Market Today",
    imgUrl: "/stocks-market.jpg",
    story:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  },
  {
    id: 3,
    title: "Market Today",
    imgUrl: "/stocks-market.jpg",
    story:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
  },
];

export const sidebarRoutes = [
  {
    icon: MessageSquare,
    label: "Discussion Fourm",
    href: "/",
  },
  {
    icon: DollarSign,
    label: "Merket Stories",
    href: "/stories",
  },
  {
    icon: MessageCircle,
    label: "Market Sentiment",
    href: "/sentiments",
  },
  {
    label: "Market",
    href: "/market",
  },
  {
    label: "Sector",
    href: "/sector",
  },
  {
    label: "Watchlist",
    href: "/watchlist",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "News/Interview",
    href: "/news",
  },
];
