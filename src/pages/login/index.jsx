import React, { useEffect, useState } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import ReactJson from "react-json-view";
import { useDispatch } from "react-redux";
import { clearToken, fetchToken } from "redux/actions";
import { useUserTokenData } from "redux/selectorHooks";


const Login = () => {
  const [user, setUser] = useState({ username: "", password: "", remember: false });
  const dispatch = useDispatch();
  const userTD = useUserTokenData();

  const logout = () => {
    setUser({ username: "", password: "", remember: false });
    dispatch(clearToken());
  }

  return (
    <Container>
      { userTD.OK ?
        <Card>
          <Card.Footer>
            <Button variant="primary" onClick={() => logout() }>
              LOGOUT
             </Button>
          </Card.Footer>
        </Card>
        :
        <Card>
          <Card.Title>Enter username and password</Card.Title>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="username or email" onChange={e => setUser({ ...user, username: e.target.value })} />
                <Form.Text className="text-muted">{userTD.message}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" onChange={e => setUser({ ...user, password: e.target.value })} />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  label="Remember me"
                  checked={user.remember}
                  onClick={() => setUser({ ...user, remember: !user.remember })}
                />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => dispatch(fetchToken(user))}>
              LOGIN
            </Button>
          </Card.Footer>
        </Card>
      }
      <ReactJson src={userTD} />
    </Container>
  );

}

export default Login;