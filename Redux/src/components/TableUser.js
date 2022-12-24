import { Container } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";
import { fetAlluser, Deleteuser } from "../actions/actions"
import { useDispatch, useSelector } from "react-redux";




const TableUser = (props) => {
    const dispatch = useDispatch()



    let listUser = useSelector((state) => state.useReducer.listUser)


    let handeDelete = async (id) => {

        await dispatch(Deleteuser(id))
        await dispatch(fetAlluser())
    }










    useEffect(() => {
        dispatch(fetAlluser())
    }, [])

    return (
        <>
            <hr />
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>User Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser && listUser.length > 0 &&
                            listUser.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.username}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handeDelete(item.id)}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </Table>
            </Container>
        </>
    )

}


export default TableUser