import React, { useEffect, useState } from 'react';
import Layout from './../../components/Layout/Layout';
import AdminMenu from './../../components/Layout/AdminMenu';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Modal } from 'antd';

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [photo, setPhoto] = useState('');
  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append('name', name);
      productData.append('photo', photo);
      const { data } = await axios.post(
        '/api/v1/category/create-category',
        productData
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category');
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong in getting catgeory');
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName('');
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Somtihing went wrong');
    }
  };
  return (
    <Layout title={'Dashboard - Create Category'}>
      <div className='container-fluid m-3 p-3 dashboard'>
        <div className='row'>
          <div className='col-md-11'>
            <AdminMenu />
          </div>
          <div className='col-md-12 adminView'>
            <h1>Manage Category</h1>
            <div className='p-3 w-50'>
              <form onSubmit={handleSubmit}>
                <div className='mb-3 forms'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter new category'
                    name={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='btn btn-outline-secondary col-md-12 '>
                    {photo ? photo.name : 'Upload Photo'}
                    <input
                      type='file'
                      name='photo'
                      accept='image/*'
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <div className='mb-3'>
                  {photo && (
                    <div className='text-center'>
                      <img
                        src={URL.createObjectURL(photo)}
                        alt='product_photo'
                        height={'200px'}
                        className='img img-responsive'
                      />
                    </div>
                  )}
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
            <div className='w-75'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Actions</th>
                    <th scope='col'>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td> 
                          <div className='mb-3'>
                            <img
                              src={`/api/v1/category/category-photo/${c._id}`}
                              className='card-img-top'
                              style={{'height':'100px','width':'150px'}}
                              alt={c.name}
                            />
                          </div>
                        </td>
                        <td> 
                          <button
                            className='btn btn-primary ms-2'
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className='btn btn-danger ms-2'
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <form onSubmit={handleUpdate}>
                <div className='mb-3 forms'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter new category'
                    name={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='btn btn-outline-secondary col-md-12 '>
                    {photo ? photo.name : 'Upload Photo'}
                    <input
                      type='file'
                      name='photo'
                      accept='image/*'
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <div className='mb-3'>
                  {photo && (
                    <div className='text-center'>
                      <img
                        src={URL.createObjectURL(photo)}
                        alt='product_photo'
                        height={'200px'}
                        className='img img-responsive'
                      />
                    </div>
                  )}
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
