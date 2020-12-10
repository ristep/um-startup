import useInterval from "hooks/useInterval";
import React, { useEffect, useState } from "react";
import { Container, Button, Form, Card, Alert } from "react-bootstrap";
import ReactJson from "react-json-view";
import { useDispatch } from "react-redux";
import { clearToken, fetchToken } from "redux/actions";
import { useUserTokenData } from "redux/selectorHooks";


const Login = () => {
  const [alertShow, setAlertShow] = useState(false);
  const [user, setUser] = useState({ username: "", password: "", remember: false });
  const dispatch = useDispatch();
  const userTD = useUserTokenData();

  useEffect(() => {
    setAlertShow(false);
  }, [user]);

  useEffect(() => {
    if(userTD.error) setAlertShow(true);
  }, [userTD]);

  const logout = () => {
    setUser({ username: "", password: "", remember: false });
    dispatch(clearToken());
  }

  const login = () => {
    dispatch(fetchToken(user));
  }

  return (
    <Container>
      { userTD.OK ?
        <Card> {/* Logout Card */}
          <Card.Title>
           <h4>UserName: {userTD.data.name } - { userTD.data.first_name } {userTD.data.second_name} </h4>
          </Card.Title>
          <Card.Body>
            <p>Data from UserToken</p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>email</Form.Label>
                <Form.Control type="text" placeholder={userTD.data.email} disabled />
              </Form.Group>
              <Form.Group controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" placeholder={userTD.data.role} disabled />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => logout() }>
              LOGOUT
             </Button>
          </Card.Footer>
        </Card>
        :
         <Card> {/* Login Card */}
          <Card.Title>Enter username and password</Card.Title>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="username or email" onChange={e => setUser({ ...user, username: e.target.value })} />
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
              <Alert variant="danger" hidden={!alertShow} className="text-muted">{userTD.message}</Alert>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => login()}>
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