import { useEffect, useState } from "react";

export default function useStore() {
  const [store, setStore] = useState()

  const refreshStore = () => {
    getStore().then((newStore) => setStore(store))
  }

  useEffect(refreshStore, [])
  return { store, setStore }

}