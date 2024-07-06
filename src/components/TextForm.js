import React, { useState } from 'react';
import axios from 'axios';

const TextForm = ({ onSubmit, endpoint }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading indicator

    try {
      const formData = new FormData();
      formData.append('text', text);

      const response = await axios.post(`http://localhost:5000/${endpoint}`, formData);
      onSubmit(response.data);
    } catch (error) {
      console.error('Error correcting text:', error);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Type your text here</label>
          <textarea
            className="form-control"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="button-black-white">
          Correct
        </button>
      </form>
      {loading && <p>Loading...</p>} {/* Display loading text when loading is true */}
    </div>
  );
};

export default TextForm;
