import { useState } from "react";

import { EastOutlined } from "@mui/icons-material";
import "./comments.css";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getComments = () => {
    setToggle((prev) => !prev);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div onClick={getComments} className="card-comments">
        <p>Comments...</p>
        <EastOutlined />
      </div>
      <div className={`${toggle ? "show" : "hidden"}`}>
        {comments?.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment?.email}</p>
            <p>{comment?.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
