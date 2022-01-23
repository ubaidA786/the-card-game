import react from 'react';
import { Table } from 'react-bootstrap';
import { card_array } from './Record';
import { useHistory } from "react-router-dom";


function Player() {
    const history = useHistory();
    function viewP(username, p_name, asset) {
        history.push({
            pathname: '/View',
            search: '?r_name=' + username + "&p_name=" + p_name + "&asset=" + asset
        });

    }
    return (
        <>
            <h3>Card Data</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Real Name</th>
                        <th>Player Name</th>
                        <th>Asset</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        card_array.map((res, index) =>
                            <tr key={index}>
                                <td>{res.Real_name}</td>
                                <td>{res.player_name}</td>
                                <td>{res.asset}</td>
                                <td><button onClick={() => { viewP(res.Real_name, res.player_name, res.asset) }} >View</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Player;