import MenuItem from "./components/MenuItem"
import { OredeContents } from "./components/OredeContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotals from './components/OrderTotals';
import { TipPerecetageForm } from "./components/TipPerecetageForm";




function App() {

  const { order, addItem, removeItem } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Consumos</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        <div className="p-5">
          <h2 className="text-4xl font-bold">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 ">
          <h2 >Consumo</h2>
          <OredeContents
            order={order}
            removeItem={removeItem}
          />

          <TipPerecetageForm 
          
          />

          <OrderTotals
            order={order}
          />
        </div>

      </main>
    </>
  )
}

export default App
