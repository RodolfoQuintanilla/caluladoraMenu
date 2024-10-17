import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
}

function OrderTotals({ order, tip }: OrderTotalsProps) {


    const subtotalAmount = useMemo(() =>
        order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propinas:</h2>
                <p>
                    Subtotal a pagar: {''}
                    <span className="font-bold text-lg"> {subtotalAmount} </span>
                </p>
                <p>
                    Propina: {''}
                    <span className="font-bold text-lg"> {tipAmount} </span>
                </p>
                <p>
                    Total a Pagar: {''}
                    <span className="font-bold text-lg"> $0</span>
                </p>

            </div>
            <button></button>
        </>
    )
}

export default OrderTotals