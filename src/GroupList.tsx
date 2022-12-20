import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import { Link } from 'react-router-dom';

const GroupList = () => {

    const [list, setList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      fetch('https://tptransversals5ws-production-80ab.up.railway.app/avions')
        .then(data => data.json())
        .then(res => {
          setList(res.data);
          setLoading(false);
        })
    }, []);
    if (loading) {
      return <p>Loading...</p>;
    }
    const groupList = list.map(group => {
      return <tr key={group.idAvion}>
        <td style={{whiteSpace: 'nowrap'}}>{group.nomModele} {group.serie}</td>
        <td>{group.matricule}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/details/"+group.idAvion}>View details</Button>
          </ButtonGroup>
        </td>
      </tr>
    });
    return (
      <div>
        <Container fluid>
          <Table className="mt-4">
            <thead>
            <tr>
              <th >Modele</th>
              <th>Matricule</th>
              <th ></th>
            </tr>
            </thead>
            <tbody>
            {groupList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  };
  
  export default GroupList;