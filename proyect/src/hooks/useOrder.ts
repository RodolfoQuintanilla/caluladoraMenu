import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";
import { OrderItem } from '../types/index';

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);


    const addItem = (item: MenuItem) => {
        const existingItem = order.find((orderItem) => orderItem.id === item.id);

        if (existingItem) {
            const updateOrder = order.map(orederItem => orederItem.id === item.id ?
                { ...orederItem, quantity: orederItem.quantity + 1 } : orederItem)
            setOrder(updateOrder)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem]);
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))

    }


    return {
        order,
        addItem,
        removeItem
    }
}
