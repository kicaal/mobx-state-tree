import { observer } from "mobx-react-lite"
import { useStore } from "../stores/ShopStore"

export const Cart = observer(() => {

  const store = useStore()

 return (
    <div>
      {store.cartStore.entries.map((entry, index) => {
        return <p key={index}>{entry.tShirt.model}</p>
      })}
    </div>
  );

})
