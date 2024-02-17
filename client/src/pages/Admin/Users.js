import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import '../../styles/authStyles.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Users = () => {
  const [User, setUser] = useState([]);
  const getAllUser = async () => {
    try {
      const { data } = await axios.get('/api/admin/user/get-product');
      setUser(data.products);
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong');
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <Layout title={'Dashboard - All Users'}>
      <div className='container-fluid m-3 p-3 dashboard'>
        <div className='row'>
          <div className='col-md-11'>
            <AdminMenu />
          </div>
          <div className='col-md-12 ' style={{ width: '100%' }}>
            <h1 className='text-center '>All Users</h1>
            <div className='d-flex flex-wrap'>
              {User?.map((u) => (
                <Link
                  key={u._id}
                  to={`/dashboard/admin/users/${u.email}`}
                  className='product-link'
                >
                  <div className='card m-2' style={{ width: '18rem' }}>
                    <div className='card-body'>
                      <h5 className='card-title'>{u.name}</h5>
                      <p className='card-text'>{u.email}</p>
                      <p className='card-text'>{u.phone}</p>
                      <p className='card-text'>{u.address}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
