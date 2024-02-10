import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./PersonalExperience.css";

const PersonalExperience: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{textAlign: "center"}}>Experiencia Personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="videoContainer">
          <h2>Experiencia Personal Creando la App</h2>
          <div>
            <iframe width="720" height="400" src="https://www.youtube.com/embed/noVideo" title="DONATY SE LA MONTA EN SU CARA A PAPERA POR ACUSARLO DE ATRACO" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PersonalExperience;
