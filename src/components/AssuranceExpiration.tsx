import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Login from './Login';



const AssuranceExpiration = () => {
    const [group, setGroup] = useState<any[]>([]);
    useEffect(() => {
          fetch(`https://tptransversals5ws-production-80ab.up.railway.app/expirations`, {
            method: 'GET'
          })
            .then(response => response.json())
            .then(res => setGroup(res.data));
      }, []);
      console.log(group);
     const Unmois = group.map( group => {
        if(group.moisExpiration == 1){
            return <div>
            <p>{group.nomModele} {group.serie}</p>
            <p>n° Matricule:{group.matricule}</p>
            <p>Expiré le : {group.dateExpiration}</p>
            <br/>
        </div>  
        }
     }
     
     );
     const sixmois = group.map( group => {
        if(group.moisExpiration == 3){
            return    <div>
             <p>{group.nomModele} {group.serie}</p>
            <p>n° Matricule:{group.matricule}</p>
            <p>Expiré le : {group.dateExpiration}</p>
            <hr/>
        </div>
    
        }
     });
     return (
        <div>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Assurance</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>1 mois</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                        {Unmois}
                        </IonCardContent>
            </IonCard>
            <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>3 mois</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                        {sixmois}
                        </IonCardContent>
            </IonCard>
        </div>
     )
    };
    
  export default AssuranceExpiration;