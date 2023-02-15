import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Link from "next/link";

const Homepage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key= {post.slug} {...post} />
  ));

  return <div>{postPreviews}</div>;
};

export default Homepage;