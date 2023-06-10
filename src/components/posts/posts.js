import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Comments, PostsPagination } from "..";

import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Avatar } from "@mui/material";
import "./posts.css";

const Posts = ({ posts, page, setPage, loading }) => {
  const [seed, setSeed] = useState("");

  // Avatar image
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const handleChangePage = useCallback((page) => {
    setPage(page);
  }, []);

  return (
    <Container className="posts">
      {loading ? (
        <>
          <Row>
            {posts.posts?.slice(0, 50).map((post) => (
              <Col
                xs={6}
                md={4}
                xl={3}
                style={{ marginBottom: "30px" }}
                key={post.id}
              >
                <Card className="card">
                  <Card.Header>
                    <Link to={`/user/${post?.userId}`}>
                      <Avatar
                        src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                      />
                    </Link>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{post?.title.slice(0, 20)}</Card.Title>
                    <Card.Text>{post?.body.slice(0, 50)}</Card.Text>
                    <Comments id={post?.id} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <PostsPagination
            total={posts?.totalPage}
            current={page}
            onChangePage={handleChangePage}
          />
        </>
      ) : (
        <div className="loader">
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </Container>
  );
};

export default Posts;
