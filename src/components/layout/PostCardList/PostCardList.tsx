import { PostCard } from "@/molecules/PostCard";
import { Post } from "src/types/post";
import styles from "./PostCardList.module.sass";

interface Props {
  posts: Post[];
}

export const PostCardList = ({ posts }: Props) => {
  const correctPost = posts.posts;
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Check our latest Posts</h1>
      <div className={styles.postsList}>
        {correctPost.map((signlePost: Post) => {
          return <PostCard key={signlePost.id} signlePost={signlePost} />;
        })}
      </div>
    </main>
  );
};
