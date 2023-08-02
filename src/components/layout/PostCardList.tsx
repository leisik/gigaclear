import { PostCard } from "@/molecules/PostCard";
import { Post } from "src/types/post";

interface Props {
  posts: Post[];
}

export const PostCardList = ({ posts }: Props) => {
  const correctPost = posts.posts;
  return (
    <main>
      {correctPost.map((signlePost: Post) => {
        return <PostCard key={signlePost.id} signlePost={signlePost} />;
      })}
    </main>
  );
};
