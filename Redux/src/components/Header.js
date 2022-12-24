import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from "react";
import { fetAlluser } from "../actions/actions"
import { useDispatch, useSelector } from "react-redux";
const Header = (props) => {

    const dispatch = useDispatch()



    let listUser = useSelector((state) => state.useReducer.listUser)




    useEffect(() => {
        dispatch(fetAlluser())
    }, [])


    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#home">
                                {listUser.length > 0 ? `(${listUser.length}) User` : "User"}


                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}


export default Header