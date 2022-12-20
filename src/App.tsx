import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { airplane, calendar, camera, images, square, triangle } from 'ionicons/icons';
import Tab2 from './pages/Tab2';
import Listes from './pages/listes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vdetails from './pages/details';
import Assurance from './pages/Assurance';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/details/:id" >
            <Vdetails />
          </Route>
          <Route exact path="/listes" >
            <Listes/>
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/assurance">
            <Assurance/>
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={camera} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="listes" href="/listes">
          <IonIcon icon={airplane} />
            <IonLabel>liste</IonLabel>
          </IonTabButton>
          <IonTabButton tab="assurance" href="/assurance">
          <IonIcon icon={calendar} />
            <IonLabel>assurance</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
