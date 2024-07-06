import React, { useState } from 'react';
import axios from 'axios';

function Summarizer() {
  const [inputText, setInputText] = useState('');
  const [summaryText, setSummaryText] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading indicator

    try {
      const response = await axios.post('http://localhost:5000/summarize', {
        text: inputText,
      });
      const { summary_text } = response.data; // Destructure summary_text from response.data
      setSummaryText(summary_text);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="container">
      <h1>Summarizer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows="10"
          cols="50"
          className="form-control"
        ></textarea>
        <br />
        <button className="button-black-white" type="submit">
          Summarize
        </button>
      </form>
      {loading && <p>Loading...</p>} {/* Display loading text when loading is true */}
      {summaryText && (
        <div className="summary-container">
          <h2>Summary</h2>
          <p>{summaryText}</p> {/* Render summaryText as a paragraph */}
        </div>
      )}
    </div>
  );
}

export default Summarizer;
