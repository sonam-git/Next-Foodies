"use client";
import React, { useRef,useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
    const [pickImage,setPickImage]= useState();
  const imageInput = useRef();
  function handleImagePick() {
    imageInput.current.click();
  };
  function handleImageChange(event){

const file = event.target.files[0];
if(!file){
    setPickImage(null);
    return;
}
const fileReader = new FileReader();
fileReader.onload = () => {
 setPickImage( fileReader.result)  
}
fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {
                !pickImage && <p>No Image picked yet.</p>
            }{
                pickImage && (
                    <Image 
                    src = {pickImage}
                    alt = 'The image selected by the user'
                    fill
                    />
                )
            }
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png,image/jpg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePick}
        >
          {" "}
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
