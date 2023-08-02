import React from "react";
import styles from "./PostCard.module.sass";
import Image from "next/image";

export const PostCard: React.FC = ({ signlePost: post }: any) => {
  return (
    <div>
      {/* post image */}
      <Image
        className={styles.image}
        src={post?.img}
        alt={"post image"}
        width={120}
        height={120}
        sizes="100vh"
      />
      {/* post title */}
      <p className={styles.title}>{post?.title}</p>
      {/* post tags and date */}
      <div className={styles.image}>
        <p>{post?.tags[0]}</p>
        <p>{post?.tags[1]}</p>
        <div className={styles.break}></div>
        <p>{post?.date}</p>
      </div>
      {/* post description */}
      <p className={styles.description}>{post?.description}</p>
    </div>
  );
};
