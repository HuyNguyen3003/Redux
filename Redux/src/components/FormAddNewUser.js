import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { Createuser } from "../actions/actions"
import { useDispatch } from "react-redux";


const AddNewUser = (props) => {


    const dispatch = useDispatch()

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")




    let HandleCreat = async (email, password, username) => {
        if (!email || !password || !username) {
            alert("missing")
            return
        } else {
            await dispatch(Createuser(email, password, username))
            setemail('')
            setpassword('')
            setusername('')

        }


    }
















    useEffect(() => {

    }, [])


    return (
        <Container>
            <br />
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        value={email}
                        onChange={(event) => setemail(event.target.value)}
                    />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        value={password}
                        onChange={(event) => setpassword(event.target.value)}
                    />


                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="User Name"
                        value={username}
                        onChange={(event) => setusername(event.target.value)}
                    />
                </Form.Group>

            </Form>
            <Button variant="primary"
                onClick={() => HandleCreat(email, password, username)}
            >Create</Button>{' '}
        </Container>

    )

}


export default AddNewUser