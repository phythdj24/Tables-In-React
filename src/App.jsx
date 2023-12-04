/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);


  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=100');
      const resData = await res.json();
      setProducts(resData.products);
      console.log(resData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectPageHandler = (selectedPage)=>{
    setPage(selectedPage)
  }

  return (
    <div>
      {
        products.length>0 && <div className='products'>
            {
              products.slice(page*10 - 10,page * 10).map((prod)=>{
            return ( <span className='products_single' key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </span>
            )
              })
  
            }
        </div>
      }
{
  products.length >0 && ( <div className='pagination'>
    <span>◀</span>
    {
     [...Array(products.length / 10)].map((_,i)=>{
          return <span onClick={()=>selectPageHandler(i + 1)} key={i}>{i + 1}</span>
     })
    }
    
    <span>▶</span>
  </div>
  )
}

    </div>
  );
};

export default App;
