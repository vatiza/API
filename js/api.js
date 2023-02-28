// const user = { id: 1, name: 'Gorib Aamir', job: 'Model' }
// // JavaScript Object Notation (JSON)
// const stringified = JSON.stringify(user);
// // console.log(stringified)
// // console.log(user)

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kalabagan',
        city: 'Dhaka',
        country:'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 450000,
    isOpen: true,
    isNew:false,
}
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
