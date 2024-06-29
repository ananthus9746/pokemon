import React, { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippetList = ({ uploadCompleted }) => {
    const [snippets, setSnippets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSnippets = async () => {
            try {
                const q = query(collection(firestore, "codeSnippets"), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(q);
                const snippetsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setSnippets(snippetsData);
            } catch (err) {
                console.error("Error fetching code snippets:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSnippets();
    }, [uploadCompleted]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {snippets.length > 0 ? (
                snippets.map((snippet) => (
                    <div key={snippet.id} >
                        <h3>{snippet.description}</h3>
                        <SyntaxHighlighter wrapLines="true" language="javascript"
                        //  style={dark}
                         >
                            {snippet.code}
                        </SyntaxHighlighter>
                    </div>
                ))
            ) : (
                <p>No code snippets to display</p>
            )}
        </div>
    );
};

export default CodeSnippetList;
