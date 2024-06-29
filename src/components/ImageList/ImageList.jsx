import React, { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";

const ImageList = ({ uploadCompleted }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(firestore, "images"), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(q);

                // console.log("Firestore snapshot:", snapshot);
                // console.log("Docs array:", snapshot.docs);

                const imagesData = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    // console.log(`Document ID: ${doc.id}`, data);
                    return { id: doc.id, ...data };
                });

                // console.log("Fetched imagesData:", imagesData);
                setImages(imagesData);
            } catch (err) {
                console.error("Error fetching images:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [uploadCompleted]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {images.length > 0 ? (
                images.map((image) => (
                    <div key={image.id}>
                        <img src={image.url} alt={image.description} width="100" />
                        <p>{image.description}</p>
                    </div>
                ))
            ) : (
                <p>No images to display</p>
            )}
        </div>
    );
};

export default ImageList;
