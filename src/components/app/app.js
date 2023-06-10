import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import { About, Header, Posts, User } from "../";

import "./app.css";

const App = () => {
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);

  // Getting data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}`
        );
        setPosts({ posts: res.data, totalPage: 5 });
        setLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page]);

  // Search
  useEffect(() => {
    function searchHandler() {
      if (term.length === 0) {
        return posts;
      } else if (term.length > 0) {
        let postsCopy = { ...posts };
        postsCopy.posts = posts.posts?.filter((post) =>
          post.title.includes(term)
        );
        return setPosts(postsCopy);
      } else return posts;
    }
    searchHandler();
  }, [term]);

  const updateTermHandler = (term) => setTerm(term);

  return (
    <div className="app">
      <Header updateTermHandler={updateTermHandler} />
      <Routes>
        <Route
          path="/"
          element={
            <Posts
              posts={posts}
              page={page}
              setPage={setPage}
              loading={loading}
            />
          }
        />

        <Route path="/user/:id" element={<User posts={posts} />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
