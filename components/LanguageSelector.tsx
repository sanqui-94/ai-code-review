"use cliet";

const LANGUAGE_OPTIONS = [
  "TypeScript",
  "JavaScript",
  "CSS",
  "LESS",
  "SCSS",
  "JSON",
  "HTML",
];

export default function LanguageSelector() {


  return (
    <select defaultValue="Pick a text editor" className="select select-primary">
      <option disabled={true}>Pick a text editor</option>
      {LANGUAGE_OPTIONS.map((option) => (<option key={option} value={option}>{option}</option>))}
    </select>
  );
}
