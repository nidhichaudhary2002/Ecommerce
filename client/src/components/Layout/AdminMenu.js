import React from 'react';
import { NavLink } from 'react-router-dom';
const AdminMenu = () => {
  return (
    <>
      <div className='text-center'>
        <div className='list-group dashboard-menu'>
          <h4 style={{ 'background-color': 'black' }}>Admin Panel</h4>
          <NavLink
            to='/dashboard/admin/create-category'
            className='list-group-item list-group-item-action'
          >
            Create Category
          </NavLink>
          <NavLink
            to='/dashboard/admin/create-product'
            className='list-group-item list-group-item-action'
          >
            Create Product
          </NavLink>
          <NavLink
            to='/dashboard/admin/products'
            className='list-group-item list-group-item-action'
          >
            Update Products
          </NavLink>
          <NavLink
            to='/dashboard/admin/users'
            className='list-group-item list-group-item-action'
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
