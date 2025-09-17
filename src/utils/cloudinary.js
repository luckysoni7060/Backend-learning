import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "luckysoni",
  api_key: process.env.CLOUDINARY_API_KEY || "242986123536412", // Click 'View API Keys' above to copy your API key
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null;
    // uploaded file on cloudinary
    const response = cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto",
      folder:"backend_learning",
      use_filename:true,
    })

    // file has been uploaded successfully

    console.log("file has been uploaded successfully",response);
    return response;
    
  }
  catch (error) {
    fs.unlinkSync(localFilePath); 
    // remove the locally saved temporary file as the upload
    return null;
  }
}


// cloudinary.v2.uploader.upload(
//   "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//   {
//     public_id: "shoes",
//   }
// );


export default uploadOnCloudinary;