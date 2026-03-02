import React from "react";  
import Image from "next/image";
import { photos } from "@/data/photos";

export default function PhotoDetail({ params }: { params: { id: string } }) {
  const {id} = React.use(params);
  const photo = photos.find((p) => p.id === id);

  if (!photo) return <h1>Photo not found</h1>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{photo.id}</h1>
      <Image src={photo.src} alt={photo.desc} width={600} height={400} />
      <p>{photo.desc}</p>
    </div>
  );
}
