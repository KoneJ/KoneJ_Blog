import { Post } from "@/api/posts"


type Props = { posts: Post[]};

export default function PostGrid({ posts }: Props) {
    return (
    <ul>
        {posts.map((post) => (
        <li key={post.path}> {post.title} </li>
        ))}
    </ul>
    )
}
