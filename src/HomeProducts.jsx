/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  const [cartValue, setCartValue] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const FetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      console.log('API Response:', data);

      
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products with all products
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm);

    // Filter products based on the search term
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const AddCartHandler = (productId) => {
    const productToAdd = products.find((product)=> product.id === productId)
    setCartValue((prevCart)=> [...prevCart, productToAdd])
  };

  return (
    <div>
      <div className="Nav">
        <input
          type="text"
          placeholder="Search"
          value={searchItem}
          onChange={handleSearchChange}
        />
        <button className="btn-cart">Cart {cartValue.length}</button>
      </div>

      <div className="productsWrapper">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" />
            <h3>{product.price}</h3>
            <button onClick={AddCartHandler} className="btn">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
