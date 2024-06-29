import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firestore } from "../../firebase";
import styles from "./CodeUploadForm.module.css";

const CodeUploadForm = ({ onUploadComplete }) => {
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        if (code && description) {
            setLoading(true);
            try {
                await addDoc(collection(firestore, "codeSnippets"), {
                    code,
                    description,
                    createdAt: Timestamp.now(),
                });
                setCode("");
                setDescription("");
                onUploadComplete();  // Notify parent component
            } catch (error) {
                console.error("Error uploading code snippet: ", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className={styles.formContainer}>
            <textarea
                placeholder="Paste your code here"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows="10"
                cols="50"
                className={styles.textarea}
            ></textarea>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleUpload} className={styles.button}>
                {loading ? "Uploading..." : "Upload Code Snippet"}
            </button>
        </div>
    );
};

export default CodeUploadForm;
