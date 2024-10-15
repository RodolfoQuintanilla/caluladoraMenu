import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";
import { OrderItem } from '../types/index';

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);


    const addItem = (item: MenuItem) => {
        const existingItem = order.find((orderItem) => orderItem.id === item.id);

        if (existingItem) {
           console.log( existingItem );

           

        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem]);
        }



    }

    console.log(order);


    return {
        addItem
    }
}
