import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label, Table } from 'reactstrap';
import Login from './Login';



const Details = () => {
    var tok = localStorage.getItem("token");
    if(tok == null){
        tok = "";
    }
    
    const [group, setGroup] = useState<any[]>([]);
    const [group1, setGroup1] = useState<any>([]);
    const    id   = useParams<{id: string}>();
    useEffect(() => {
          fetch(`http://localhost:8082/avions/${id.id}/Details`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'token': `${tok}`
            }
            
          })
            .then(response => response.json())
            .then(res => {setGroup(res.data);
            setGroup1(res.data[0])});
      }, [id, setGroup, setGroup1]);
      if(group == null){
          return (
            <Login/>
          );
      }
      else{
        const tableKilometrage = <thead><tr>
        <th>Date de trajet</th>
        <th>Kilometrage au debut</th>
        <th>Kilometrage à la fin</th>
      </tr></thead>;
        const kilometre = group.map( l =>{
            return (
                    <tr>
                      <td>{l.dateKilometrage}</td>
                      <td>{l.debutKm}</td>
                      <td>{l.finKm}</td>
                    </tr>
              );
          }
        );

      return (
           <div>
            <IonCard>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
              <IonCardTitle>A propos de l'avion</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <b>{group1.nomModele} {group1.serie}</b>
            <p>Matricule: {group1.matricule}</p>
            <p>nombre de place : {group1.nbPlace}</p>
            </IonCardContent>
            </IonCard>
            <Table className="mt-4">
              {tableKilometrage}
              <tbody>
              {kilometre}
              </tbody>
            </Table>
           </div>

      );
      }
      
    };
   //Rehefa body de Json.stringify({}) 
  export default Details;