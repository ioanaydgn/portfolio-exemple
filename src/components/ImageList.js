import React from "react";
import database from "./database";

const ImageList = () => {
    return (
        <div className="flex w-full flex-row flex-wrap">
            {database.images.map(image => (
                <div className="w-1/2" key={image.id}>
                    <img className="rounded-xl object-cover p-2"
                    width="644px" height="644px" src={image.src} alt={image.alt} />
                    </div>
            ))}
        </div>
    );
};

export default ImageList;