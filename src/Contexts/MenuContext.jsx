import { createContext } from "react";
import { v4 as uuid } from "uuid";

import dish1 from "../assets/greek-salad-compressed.jpg";
import dish2 from "../assets/bruchetta-compressed.svg";
import dish3 from "../assets/lemon-dessert-compressed.jpg";

export const MEALS = [
  {
    id: uuid(),
    imageUrl: dish1,
    dishName: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic.",
    price: "$12.99",
  },
  {
    id: uuid(),
    imageUrl: dish2,
    dishName: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
  },
  {
    id: uuid(),
    imageUrl: dish3,
    dishName: "Lemon desert",
    description:
      " This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
  },
];

export const MenuContext = createContext([]);

export function MenuProvider({ children }) {
  return (
    <MenuContext.Provider value={{ MEALS }}>{children}</MenuContext.Provider>
  );
}
