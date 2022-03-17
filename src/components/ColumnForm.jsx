import Form from "react-bootstrap/Form";
import {Button, Table} from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from 'react';

const ColumnForm = () => {

    const [table, setTable] = useState(null);

    useEffect(() => {
        axios.get('https://java-project-server.herokuapp.com/api/rows/repeating')
            .then(res => {
                setTable(res.data);
            })
    },[]);

    function handleChange(e){
        console.log(e.target.value)
        if(e.target.value === 'distinct'){
            axios.get('https://java-project-server.herokuapp.com/api/rows/distinct')
                .then(res => {
                    setTable(res.data);
                })
        }
        if(e.target.value === 'repetitive'){
            axios.get('https://java-project-server.herokuapp.com/api/rows/repeating')
                .then(res => {
                    setTable(res.data);
                })
        } else
        if(e.target.value === 'all'){
            axios.get('https://java-project-server.herokuapp.com/api/rows/')
                .then(res => {
                    setTable(res.data);
                })
        }
    }

    return(
        <div className={'root'}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="select">Select the column</Form.Label>
                    <Form.Select id="select" onChange={handleChange}>
                        <option value={"all"}>All</option>
                        <option value={"distinct"}>Distinct</option>
                        <option value={"repetitive"}>Repetitive</option>
                    </Form.Select>
                </Form.Group>
            </Form>

            <Table striped bordered hover size="sm" className={'table'}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Kolumna1</th>
                    <th>Kolumna2</th>
                    <th>Kolumna3</th>
                    <th>Kolumna4</th>
                </tr>
                </thead>
                <tbody>
                {table !== null && table.map(row => { return(
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.kolumna1}</td>
                        <td>{row.kolumna2}</td>
                        <td>{row.kolumna3}</td>
                        <td>{row.kolumna4}</td>
                    </tr>
                )
                })}
                </tbody>
            </Table>
        </div>
    )
}
export default ColumnForm
