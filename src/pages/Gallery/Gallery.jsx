import React, { useState } from "react";
import UploadForm from "../../components/UploadForm/UploadForm";
import ImageList from "../../components/ImageList/ImageList";

const Gallery = () => {
    const [uploadCompleted, setUploadCompleted] = useState(false);

    const handleUploadComplete = () => {
        setUploadCompleted(!uploadCompleted);
    };
    return (
        <div>
            <h1>Gallery</h1>
            <UploadForm onUploadComplete={handleUploadComplete} />
            <ImageList uploadCompleted={uploadCompleted} />
        </div>
    );
};

export default Gallery;
