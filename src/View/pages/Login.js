import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {authLogin} from '../../store/Auth/productAction'
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const user = {
        email,
        password
    }

    const formSubmit = () => {
        dispatch(authLogin(user))
    }

  return (
    <div>
            <div className="login-form-main d-flex align-items-center justify-content-center">
                <Form className="login-form-main-content">                  
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
            
                    <Button className='full' variant="primary" type="button" onClick={formSubmit}>
                        Submit
                    </Button>
            
                </Form>
            </div>            
    </div>
  )
}
