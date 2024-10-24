"use client";
import { useSession } from "next-auth/react";
import { usePosts } from "../context/PostsContext";
import Postitem from "../posts/Postitem";
import { doc, deleteDoc, getFirestore } from "firebase/firestore"; // Import necessary Firestore functions
import app from "../shared/FirebaseConfig";
import Swal from "sweetalert2";

const UserProfile = () => {
  const { data: session } = useSession();
  const db = getFirestore(app);
  const { posts, getPost } = usePosts();

  const handleDelete = async (postId) => {
    try {
      const postRef = doc(db, "posts", postId);
      await deleteDoc(postRef);
      Swal.fire({
        icon: "success",
        title: "Post Deleted!",
        text: "Your post has been successfully deleted.",
        confirmButtonText: "Ok",
      });
      getPost();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Delete!",
        text: error.message,
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto mt-4">
          <div className="flex flex-wrap -m-4">
            {session?.user.email && (
              <>
                {posts.map((post, index) => (
                  <Postitem
                    post={post}
                    val={index}
                    del={
                      <button
                        className="bg-red-400 w-full rounded-md text-white py-4"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </button>
                    }
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
