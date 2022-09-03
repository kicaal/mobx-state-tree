import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useStore } from "../stores/ShopStore"

export const Cart = observer(() => {

  const store = useStore()


  console.log(store.cart.allEntries)

  return <p>rfgrfg</p>

})
