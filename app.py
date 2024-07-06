from flask import Flask, request, jsonify
from flask_cors import CORS
from Model import SpellCheckerModule, SummarizerModule

app = Flask(__name__)
CORS(app)
spell_checker_module = SpellCheckerModule()
summarizer_module=SummarizerModule()

@app.route('/spell', methods=['POST'])
def spell():
    if 'text' in request.form:
        text = request.form['text']
        corrected_text = spell_checker_module.correct_spell(text)
        corrected_grammar, _ = spell_checker_module.correct_grammar(text)
        return jsonify({'corrected_text': corrected_text, 'corrected_grammar': corrected_grammar})
    elif 'file' in request.files:
        file = request.files['file']
        readable_file = file.read().decode('utf-8', errors='ignore')
        corrected_file_text = spell_checker_module.correct_spell(readable_file)
        corrected_file_grammar, _ = spell_checker_module.correct_grammar(readable_file)
        return jsonify({'corrected_file_text': corrected_file_text, 'corrected_file_grammar': corrected_file_grammar})
    return jsonify({'error': 'No input provided'}), 400

@app.route('/grammar', methods=['POST'])
def grammar():
    if 'text' in request.form:
        text = request.form['text']
        corrected_grammar, _ = spell_checker_module.correct_grammar(text)
        return jsonify({'corrected_grammar': corrected_grammar})
    elif 'file' in request.files:
        file = request.files['file']
        readable_file = file.read().decode('utf-8', errors='ignore')
        corrected_file_grammar, _ = spell_checker_module.correct_grammar(readable_file)
        return jsonify({'corrected_file_grammar': corrected_file_grammar})
    return jsonify({'error': 'No input provided'}), 400

@app.route('/summarize', methods=['POST'])
def summarize():
    if request.method == 'POST':
        text = request.json.get('text', '')  # Ensure 'text' key is fetched correctly
        summary = summarizer_module.summarize(text)
       
        return jsonify (summary)

if __name__ == "__main__":
    app.run(debug=True)
