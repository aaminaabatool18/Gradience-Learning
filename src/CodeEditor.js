import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ onBack }) => {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: Arial; padding: 20px; }
      h1 { color: #f97438; }
    </style>
  </head>
  <body>
    <h1>Hello from Monaco!</h1>
    <p>This is live output rendering.</p>
    <script>
      console.log("Hello from script!");
    </script>
  </body>
</html>`);

  const iframeRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const iframeDoc = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <h3>HAPPY CODING!</h3>
        <button onClick={onBack} style={{
          background: '#f97438',
          border: 'none',
          color: '#fff',
          padding: '8px 14px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          ← Back to Dashboard
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1, height: '500px', border: '1px solid #ccc', borderRadius: '12px', overflow: 'hidden' }}>
          <Editor
            height="100%"
            defaultLanguage="html"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
          />
        </div>
        <div style={{ flex: 1, height: '500px', border: '1px solid #ccc', borderRadius: '12px', background: '#fff' }}>
          <iframe
            ref={iframeRef}
            title="Live Output"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
