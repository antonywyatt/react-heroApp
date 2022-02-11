import React from 'react';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {

  const [formValues, handleInputChange] = useForm({
    searchText: ''
  })

  const {searchText} = formValues;

  const handleSearch = (e) => {
    e.preventDefault()

    console.log(searchText)

  }

  return <div>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr />
          <form action="" onSubmit={handleSearch}>
            <input 
              type="text" 
              className='form-control' 
              placeholder='Buscar heroes' 
              name='searchText'
              value={searchText}
              onChange={handleInputChange}
            />

            <button 
              type='submit' 
              onClick={handleSearch} 
              className='btn btn-outline-primary mt-2 btn-block'>
                Buscar...
            </button>
          </form>
        </div>
      </div>
  </div>;
};
