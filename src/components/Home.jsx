import React,{useState,useEffect} from 'react'
import axios from 'axios';


const Home = () => {
  const [products, setProducts] = useState();
  const [category,setcategory] = useState("");
  const [search,setsearch] = useState("");
  useEffect(()=>{
    const handle = async ()=>{
      const url = category == "" ? 'https://fakestoreapi.com/products' : 
      `https://fakestoreapi.com/products/category/${category}`;
      const data = await axios.get(url);
      setProducts(data.data);
      console.log(products);
    };
    handle();
  },[category]);

  const handleSubmit = (e)=>{
    e.preventDefault()
    const item =  products.filter(item => item.title == search);
    setProducts(item);
  }

  return (
    <div className='home-container p-3 container'>
        <div className='filters mb-3'>
          <div className='category'>
            <select className="form-select select-tab" onChange={(e)=>setcategory(e.target.value)}>
              <option value="">Categories</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>  
          </div>
          <div className='search'>
              <form className="d-flex">
                <input className="form-control me-2 search-cat" type="search" placeholder="Search product" aria-label="Search Product"
                value={search} onChange={e=>setsearch(e.target.value)}/>
                <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>Search</button>
              </form>
          </div>
        </div>
        <div className='products mt-3 pt-2'>
        {products && 
          <div className='main-container container'>
            {products.map((item)=>(
              <div className='card-container p-2 m-2' key={item.id}>
                <img src={item.image} alt='..' className='img-fluid'/>
                <h6 className='text-center pt-2'>{item.title}</h6>
                <div className='info mt-2'>  
                  <p><b>Price : </b>$ {item.price}</p>
                  <p><b>Rating : </b>{item.rating.rate}</p>
                  <p><b>Category:</b>{item.category}</p>
                </div>
              </div> 
            ))}
          </div>}
        </div>
    </div>
  )
}

export default Home