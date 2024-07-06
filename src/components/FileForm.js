import React, { useState } from 'react';
import axios from 'axios';

const FileForm = ({ onSubmit, endpoint }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      setLoading(true); // Start loading indicator

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post(`http://localhost:5000/${endpoint}`, formData);
        onSubmit(response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setLoading(false); // Stop loading indicator
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="text-center">
        <div className="form-group">
          <label htmlFor="file">Upload File</label>
          <input
            type="file"
            name="file"
            className="form-control-file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="button-black-white">
          Correct
        </button>
      </form>
      {loading && <p>Loading...</p>} {/* Display loading text when loading is true */}
    </div>
  );
};

export default FileForm;
