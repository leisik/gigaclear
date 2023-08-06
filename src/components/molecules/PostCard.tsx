import React from "react";
import styles from "./PostCard.module.sass";
import Image from "next/image";
import Link from "next/link";

export const PostCard: React.FC = ({ signlePost: post }: any) => {
  const renderTags = () => {
    return post.tags.map((tag: string) => <p>{tag}</p>);
  };
  return (
    <Link href={`/blog/${post.id}`} className={styles.link}>
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
            {renderTags()}
            <div></div>
            <p>{post?.date}</p>
          </div>
          <p className={styles.description}>{post?.description}</p>
          <div className={styles.date}>{post?.date}</div>
        </div>
      </div>
    </Link>
  );
};
