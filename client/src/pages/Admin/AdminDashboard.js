import React from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from './../../components/Layout/Layout';
import { useAuth } from '../../context/auth';
import '../../styles/authStyles.css';

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={'Admin Dashboard'}>
      <div className='container-fluid m-3 p-3 dashboard'>
        <div className='row'>
          <div className='col-md-11'>
            <AdminMenu />
          </div>
          <div className='col-md-12'>
            <div className='card w-75 p-3'>
              <h4> Admin Name : {auth?.user?.name}</h4>
              <h4> Admin Email : {auth?.user?.email}</h4>
              <h4> Admin Contact : {auth?.user?.phone}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
