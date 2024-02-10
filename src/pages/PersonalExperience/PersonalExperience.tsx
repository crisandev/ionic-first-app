import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./PersonalExperience.css";

const PersonalExperience: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h2>Experiencia Personal Creando la App</h2>
        <div>
        <iframe width="500" height="500" src="https://www.youtube.com/embed/V1uvtQS8_RI" title="DONATY SE LA MONTA EN SU CARA A PAPERA POR ACUSARLO DE ATRACO" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PersonalExperience;
