import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";

const ColumnForm = () => {
    return(
        <Form>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="select">Select the column</Form.Label>
                <Form.Select id="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Select>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}
export default ColumnForm
