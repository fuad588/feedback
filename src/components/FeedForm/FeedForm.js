import React from 'react'
import './FeedForm.css'
import PropTypes from 'prop-types';
function Form(props){
  let {name, surname, email, comment} = props
    return (
      <div className='form'>
        <form action="submit">
            <label htmlFor="name">{name} </label>
            <input type="text" id="name" />
            <label htmlFor="surname">{surname}</label>
            <input type="text" id="surname" />
            <label htmlFor="email">{email}</label>
            <input type="email" id="email" />
            <label htmlFor="comment">{comment}</label>
            <input type="text" id="comment" />
            <button>Göndər</button>
        </form>
      </div>
    )

}
Form.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  };

  export default Form