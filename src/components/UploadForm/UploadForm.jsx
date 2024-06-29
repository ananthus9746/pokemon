// src/components/UploadForm.js
import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { storage, firestore, ImgDB } from "../../firebase";
import styles from "./UploadForm.module.css";

const UploadForm = ({ onUploadComplete }) => {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");
    const [progress, setProgress] = useState(0);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (file && description) {
            const storageRef = ref(storage, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress);
                },
                (error) => {
                    console.error(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log("url:", url)
                        addDoc(collection(firestore, "images"), {
                            url,
                            description,
                            createdAt: Timestamp.now(),
                        });
                        setProgress(0);
                        setFile(null);
                        setDescription("");
                        onUploadComplete();
                    });
                }
            );
        }
    };

    return (
        <div className={styles.formContainer}>
            <input type="file" onChange={handleFileChange} className={styles.file}/>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleUpload}>Upload</button>
            {progress > 0 && <progress value={progress} max="100" />}
        </div>
    );
};

export default UploadForm;
