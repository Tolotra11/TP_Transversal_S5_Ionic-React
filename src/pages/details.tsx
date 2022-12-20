import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Details from '../components/Details';
import ExploreContainer from '../components/ExploreContainer';
import GroupList from '../GroupList';

const Vdetails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
            <Details />
      </IonContent>
    </IonPage>
  );
};

export default Vdetails;