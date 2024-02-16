import React from 'react';
import Layout from './../components/Layout/Layout';
import { useSearch } from '../context/search.js';
import '../styles/Homepage.css';

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={'Search results'}>
      <div className='container'>
        <div className='text-center'>
          <h1>Search Results</h1>
          <h5 style={{ backgroundColor: '#58bf88' }}>
            {values?.results.length < 1
              ? 'No Products Found'
              : ` ${values?.results.length} matches found`}
          </h5>
          <div className='d-flex flex-wrap mt-4'>
            {values?.results.map((p) => (
              <div className='card m-2' style={{ width: '18rem' }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className='card-img-top'
                  alt={p.name}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{p.name}</h5>
                  <p className='card-text'>
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className='card-text'> $ {p.price}</p>
                  <button class='btn btn-info ms-1'>More Details</button>
                  <button class='btn btn-dark ms-1'>ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
