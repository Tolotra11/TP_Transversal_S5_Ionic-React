import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AssuranceExpiration from '../components/AssuranceExpiration';

const Assurance: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
            <AssuranceExpiration/>
      </IonContent>
    </IonPage>
  );
};

export default Assurance;