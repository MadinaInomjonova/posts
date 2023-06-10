import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Container, Spinner } from "react-bootstrap";
import {
  ApartmentOutlined,
  MailOutline,
  PersonOutline,
  PhoneOutlined,
} from "@mui/icons-material";
import "./user.css";

const User = ({ posts }) => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(true);
      })
      .catch((err) => console.log(err.message));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(true);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const result = posts?.posts?.reduce((accumulator, current) => {
    let exists = accumulator.find((post) => {
      return post.userId === current.userId;
    });
    if (!exists) {
      accumulator = accumulator.concat(current);
    }
    return accumulator;
  }, []);

  return (
    <div className="user-page">
      {loading ? (
        <>
          <Container>
            <Link to="/">
              <p className="back">Back</p>
            </Link>
            <div className="posts">
              {result?.map((post) => {
                if (post?.userId == id) {
                  return (
                    <div key={post?.id} className="post">
                      <p>
                        <span>Title:</span> {post?.title}
                      </p>
                      <p>
                        <span>Description:</span> {post?.body}
                      </p>
                    </div>
                  );
                } else return null;
              })}
            </div>
            <div className="comments">
              <p>Comments:</p>
              {comments?.map((comment) => (
                <div key={comment?.id} className="comment">
                  <p>{comment?.email}</p>
                  <p>{comment?.body}</p>
                </div>
              ))}
            </div>
          </Container>
          <div className="users">
            {users?.map((user) => {
              if (user?.id == id) {
                return (
                  <Container key={user?.id} className="user">
                    <p>
                      <PersonOutline /> {user?.name}
                    </p>
                    <p>
                      <MailOutline /> {user?.email}
                    </p>
                    <p>
                      <PhoneOutlined /> {user?.phone}
                    </p>
                    <p>
                      <ApartmentOutlined /> {user?.company?.name}
                    </p>
                  </Container>
                );
              } else return null;
            })}
          </div>
        </>
      ) : (
        <div className="loader">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </div>
  );
};

export default User;
