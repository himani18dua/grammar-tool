import React, { useState } from 'react';
import TextForm from '../components/TextForm';
import FileForm from '../components/FileForm';

function GrammarChecker() {
  const [response, setResponse] = useState(null);

  const handleTextSubmit = (data) => {
    setResponse(data);
  };

  const handleFileSubmit = (data) => {
    setResponse(data);
  };

  return (
    <div>
      <h1 className="text-center">Grammar Checker</h1>
      <TextForm onSubmit={handleTextSubmit} endpoint="grammar" />
      <FileForm onSubmit={handleFileSubmit} endpoint="grammar" />
      {response && (
        <div className="container">
          {response.corrected_grammar && (
            <h5>
              Grammar Mistakes: <br />
              {response.corrected_grammar}
            </h5>
          )}
          {response.corrected_file_grammar && (
            <h5>
              Grammar Mistakes: <br />
              {response.corrected_file_grammar}
            </h5>
          )}
        </div>
      )}
    </div>
  );
}

export default GrammarChecker;
