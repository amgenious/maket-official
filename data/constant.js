const navlinks = [
    {
        id:'1',
        name:'All',
        url:'/'
    },
    // {
    //     id:'2',
    //     name:'Bag',
    //     url:'/products/bags'
    // },
    // {
    //     id:'3',
    //     name:'Drinkware',
    //     url:'/products/drinkware'
    // },
    {
        id:'4',
        name:'Electronics',
        url:'/electronics'
    },
    {
        id:'5',
        name:'Footware',
        url:'/footwares'
    },
    // {
    //     id:'6',
    //     name:'Headwear',
    //     url:'/products/headwear'
    // },
    // {
    //     id:'7',
    //     name:'Hoodies',
    //     url:'/products/hoodies'
    // },
    // {
    //     id:'8',
    //     name:'Jackets',
    //     url:'/products/jackets'
    // },
    // {
    //     id:'9',
    //     name:'Kids',
    //     url:'/products/kids'
    // },
    {
        id:'10',
        name:'Shirts',
        url:'/shirts'
    },
]
const products =[
    {
        id:'1',
        name:'White Shirt',
        price:'Ghc 50',
        catergory:'shirt',
        vendor:'',
        url:'products/1',
        image:'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhzfGVufDB8fDB8fHww'
    },
    {
        id:'4',
        name:'Red Converse Shoe',
        price:'Ghc 50',
        catergory:'footware',
        vendor:'',
        url:"products/4",
        image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
        id:'7',
        catergory:'electronics',
        vendor:"",
        name:'Black Keyboard',
        price:'Ghc 40',
        url:'products/7',
        image:'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleWJvYXJkfGVufDB8fDB8fHww'
    },
    {
        id:'2',
        name:'Black Shirt',
        price:'Ghc 20',
        catergory:'shirt',
        vendor:'',
        url:'products/2',
        image:'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id:'3',
        name:'Customized t-shirt',
        price:'Ghc 60',
        catergory:'shirt',
        vendor:'',
        url:'products/3',
        image:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoaXJ0fGVufDB8fDB8fHww'
    },
    {
        id:'5',
        name:'Multi-colored Nike Shoe',
        price:'Ghc 50',
        catergory:'footware',
        vendor:'',
        url:'products/5',
        image:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
        id:'6',
        name:'Brown Nike Shoe',
        price:'Ghc 50',
        catergory:'footware',
        vendor:'',
        url:'products/6',
        image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
        id:'8',
        name:'Optical Mouse',
        price:'Ghc 60',
        catergory:'electronics',
        vendor:'',
        url:'products/8',
        image:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91c2V8ZW58MHx8MHx8fDA%3D'
    },
    {
        id:'9',
        name:'Mac Book',
        price:'Ghc 1000',
        catergory:'electronics',
        vendor:'',
        url:'products/9',
        image:'https://images.unsplash.com/photo-1575024357670-2b5164f470c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
    }

];
const shops =[
    {
        id:'1',
        name:"TJ's Collection",
        description:"This shop sells mens, womens and kids wear. They are all affordable",
        logo:'https://images.unsplash.com/photo-1573801897147-d0a5820bc38d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGxvZ29zfGVufDB8fDB8fHww',
        products:'',
    },
    {
        id:'1',
        name:"IKEA Collection",
        description:"This shop sells mens, womens and kids wear. They are all affordable",
        logo:'https://images.unsplash.com/photo-1603352525945-bb62a311295b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvZ298ZW58MHx8MHx8fDA%3D',
        products:'',
    },
]

export {navlinks,products, shops}


