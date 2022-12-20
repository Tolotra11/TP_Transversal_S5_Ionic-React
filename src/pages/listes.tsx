import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import GroupList from '../GroupList';

const Listes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>listes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
            <GroupList />
      </IonContent>
    </IonPage>
  );
};

export default Listes;
