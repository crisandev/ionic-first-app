import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./PersonalExperience.css";

const PersonalExperience: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ textAlign: "center" }}>Experiencia Personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="videoContainer">
          <h2>Experiencia Personal Creando la App</h2>
          <div>
            <iframe width="704" height="396" src="https://www.youtube.com/embed/vaGlVJCoy9E" title="EXPERIENCIA UTILIZANDO IONIC POR PRIMERA VEZ - CRISTIAN SANCHEZ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PersonalExperience;
