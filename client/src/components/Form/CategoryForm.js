import React from 'react';

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <div className='mb-3 forms'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter new category'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input type='form' className='form-control' placeholder='Enter the category image'/>
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
