import React, { useState } from 'react';
import TextForm from '../components/TextForm';
import FileForm from '../components/FileForm';

function SpellChecker() {
  const [response, setResponse] = useState(null);

  const handleTextSubmit = (data) => {
    setResponse(data);
  };

  const handleFileSubmit = (data) => {
    setResponse(data);
  };

  return (
    <div>
      <h1 className="text-center">Spell Checker</h1>
      <TextForm onSubmit={handleTextSubmit} endpoint="spell" />
      <FileForm onSubmit={handleFileSubmit} endpoint="spell" />
      {response && (
        <div className="container">
          {response.corrected_text && (
            <h5>
              Corrected Word: <br />
              {response.corrected_text}
            </h5>
          )}
          {response.corrected_file_text && (
            <h5>
              Corrected Word: <br />
              {response.corrected_file_text}
            </h5>
          )}
        </div>
      )}
    </div>
  );
}

export default SpellChecker;
