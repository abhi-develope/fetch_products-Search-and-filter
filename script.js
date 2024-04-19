(async ()=>{
   
    const productContainerEl = document.getElementById("productContainer")
    const searchInputEl = document.getElementById("searchInput")


 const url = "https://fakestoreapi.com/products"
 const fetchProducts = async () =>{
    try{
        const res = await fetch (url);
        return await res.json();
    } catch(error){
        return error;
    }
 };
const products = await fetchProducts();


const generateProducts = (product) =>{
    return `<div class="product_card " >
    <div class="image_side">
        <img src=${product.image}>
    </div>
    <div class="content_side">
        <h1>${product.title}</h1>
        <p>${product.description.split(" ").slice(0,20).join(" ")}</p>
        <button>${product.price} $</button>
    </div>
</div> `
}


const renderProducts = (products) => {
    productContainerEl.innerHTML = "";
    products.forEach((product) =>{
        productContainerEl.innerHTML +=  generateProducts(product);
    });
    };
    renderProducts(products);

    const checkTextContain = (text, searchText) =>{
        console.log(text);
    return text.toString().toLowerCase().includes(searchText)
    }

   const filterHandler = (event)=>{
    const searchText = event.target.value.toLowerCase();

    const filterProducts = products.filter((product)=>{
        return(
            checkTextContain(product.title, searchText) ||
            checkTextContain(product.description, searchText) ||
            checkTextContain(product.price, searchText) 
            

            )
    })
    renderProducts(filterProducts);
   }

   searchInputEl.addEventListener("keyup", filterHandler) 






 
})();