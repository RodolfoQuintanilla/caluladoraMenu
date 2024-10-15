import { OrderItem } from "../types"


type OrderContentsProps = {
    order: OrderItem[]
}

export const OredeContents = ({ order }: OrderContentsProps) => {
    return (
        <>
            <h2 className='font-black text-4xl'></h2>

            <div className="space-y-3 mt-5">
                {order.length === 0 ?
                    <p className="text-center">La orden esta vacia</p>
                    : (
                        order.map(item => (
                            <div key={item.id}>
                                <p>
                                    {item.name} - $ {item.price}
                                </p>
                            </div>
                        ))
                    )}

            </div>
        </>
    )
}
