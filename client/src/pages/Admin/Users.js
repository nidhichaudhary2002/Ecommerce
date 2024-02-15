import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import '../../styles/authStyles.css';
const Users = () => {
  return (
    <Layout title={'Dashboard - All Users'}>
      <div className='container-fluid m-3 p-3 dashboard'>
        <div className='row'>
          <div className='col-md-11'>
            <AdminMenu />
          </div>
          <div className='col-md-12 adminView'>
            <h1>All users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
