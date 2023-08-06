import { Layout } from "../components/layout";
import type { GetServerSideProps } from "next";
import { Post } from "src/types/post";
import { PostCardList } from "src/components/layout/PostCardList/PostCardList";

interface Props {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps<{
  posts: Props;
}> = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return { props: { posts } };
};

export default function Home({ posts }: Props) {
  return (
    <Layout>
      <PostCardList posts={posts} />
    </Layout>
  );
}
