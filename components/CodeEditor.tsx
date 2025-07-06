"use client";

import { Editor } from "@monaco-editor/react";
import { useState } from "react";

interface CodeEditorProps {
  onSubmit: (code: string, language: string) => void;
}

const SUPPORTED_LANGUAGES = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "go", label: "Go" },
];

export default function CodeEditor() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async() => {
    if (!code.trim()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const characterCount = code.length;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="select select-secondary"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>

        <div className="text-sm text-gray-500">
          {characterCount.toLocaleString()} characters
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="overflow-hidden py-4">
        <Editor
          height="400px"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
          }}
        />
      </div>

      {/* Submit button */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={!code.trim() || isSubmitting}
          className="btn btn-secondary"
        >
          {isSubmitting ? <span className="loading loading-spinner loading-sm">Reviewing...</span> : "Review Code"}
        </button>
      </div>
    </div>
  );
}
