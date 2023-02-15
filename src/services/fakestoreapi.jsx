const FAKESTORE_ENDPOINT = 'https://fakestoreapi.com/products'

export const getFakestore= async () =>{
    const res= await fetch (FAKESTORE_ENDPOINT)
    const data = await res.json()
    const { store } = data
    return store
}