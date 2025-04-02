import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhanceImageApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setloading(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setloading(false);
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please try again later.");
    }
  };

  const downloadImage = () => {
    if (enhancedImage?.image) {
      const link = document.createElement("a");
      link.href = enhancedImage.image;
      link.download = "enhanced-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
      {enhancedImage?.image && (
        <button
          onClick={downloadImage}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600"
        >
          Download Enhanced Image
        </button>
      )}
    </>
  );
};

export default Home;
