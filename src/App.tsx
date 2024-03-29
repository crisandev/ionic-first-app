import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { calculator, logoYoutube, person, add, text } from "ionicons/icons";
import Home from "./pages/Home/Home";
import Adding from "./pages/Adding/Adding";
import NumbersToLetters from "./pages/NumberToLetters/NumberToLetters";
import Multiply from "./pages/Multiply/Multiply";
import PersonalExperience from "./pages/PersonalExperience/PersonalExperience";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/adding">
            <Adding />
          </Route>
          <Route exact path="/multiply">
            <Multiply />
          </Route>
          <Route path="/number-to-letters">
            <NumbersToLetters />
          </Route>
          <Route path="/personal-experience">
            <PersonalExperience />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="adding" href="/adding">
            <IonIcon aria-hidden="false" icon={add} />
            <IonLabel>Sumadora</IonLabel>
          </IonTabButton>
          <IonTabButton tab="numbers-to-letters" href="/number-to-letters">
            <IonIcon aria-hidden="true" icon={text} />
            <IonLabel>Números a letras</IonLabel>
          </IonTabButton>
          <IonTabButton tab="multiply" href="/multiply">
            <IonIcon aria-hidden="false" icon={calculator} />
            <IonLabel>Multiplicadora</IonLabel>
          </IonTabButton>
          <IonTabButton tab="personal-experience" href="/personal-experience">
            <IonIcon aria-hidden="true" icon={logoYoutube} />
            <IonLabel>Mi Experiencia</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
