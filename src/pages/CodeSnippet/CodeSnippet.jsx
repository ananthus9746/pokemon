import React, { useState } from "react";
import CodeSnippetList from "../../components/CodeSnippetList/CodeSnippetList";
import CodeUploadForm from "../../components/CodeUploadForm/CodeUploadForm";

const CodeSnippet = () => {
    const [uploadCompleted, setUploadCompleted] = useState(false);

    const handleUploadComplete = () => {
        setUploadCompleted(!uploadCompleted);
    };
    return (
        <div>
            <h1>Code Snippet</h1>
            <CodeUploadForm onUploadComplete={handleUploadComplete} />
            <CodeSnippetList uploadCompleted={uploadCompleted} />
        </div>
    );
};

export default CodeSnippet;
