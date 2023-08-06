import React from "react";
import styles from "./PostCard.module.sass";
import Image from "next/image";

export const PostCard: React.FC = ({ signlePost: post }: any) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={post?.img}
        alt={"post image"}
        width={120}
        height={120}
        sizes="100vh"
      />
      <div className={styles.content}>
        <p className={styles.title}>{post?.title}</p>
        <div className={styles.tags}>
          <p>{post?.tags[0]}</p>
          <p>{post?.tags[1]}</p>
          <div></div>
          <p>{post?.date}</p>
        </div>
        <p className={styles.description}>{post?.description}</p>
      </div>
    </div>
  );
};
