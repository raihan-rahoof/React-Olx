import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, authContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(authContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const date = new Date();
  const history = useHistory();
  const [error, setError] = useState('');

  const handleSubmit = () => {
    // Basic form validation
    if (!name || !category || !price || !image) {
      setError('Please enter all details and select an image');
      return;
    }

    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url);
        firebase
          .firestore()
          .collection('products')
          .add({
            name,
            category,
            price,
            url,
            userId: user.uid,
            createdAt: date.toDateString(),
          })
          .then(() => {
            history.push('/');
          });
      });
    });
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          {error && <p className="error-message">{error}</p>}
          <label htmlFor="fname">Name</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="Name"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="category"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input value={price} onChange={(e) => setPrice(e.target.value)} className="input" type="number" id="fname" name="Price" />
          <br />
          <br />
          <img alt="select image" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          <br />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            Upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
