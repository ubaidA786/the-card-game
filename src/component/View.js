import react from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";

function ViewPlayers() {
    const history = useHistory();
    const queryParams = new URLSearchParams(window.location.search);
    const r_name = queryParams.get('r_name');
    const p_name = queryParams.get('p_name');
    const asset = queryParams.get('asset');
   
    return (
        <>

            <div className="row">
                {
                    <Card style={{ width: '18rem' }}>
                        <Card.Header as="h5">Details</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{r_name}</ListGroup.Item>
                            <ListGroup.Item>{p_name}</ListGroup.Item>
                            <ListGroup.Item>{asset}</ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" onClick={() => history.goBack()}>Go Back</Button>
                    </Card>

                }
            </div>

        </>
    )


}

export default ViewPlayers;