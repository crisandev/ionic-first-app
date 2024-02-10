import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Multiply.css";

const Multiply: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <>
          <div>
            <IonInput label="Outline input" labelPlacement="floating" fill="outline" placeholder="Enter text" style={{ maxWidth: "140px" }}></IonInput>
          </div>
          <IonButton color="tertiary">Generar Tabla de Multiplicar</IonButton>
          <div>
            <h4>Tabla</h4>
            <div>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
              <p>1 x 2 = 2</p>
            </div>
          </div>
        </>
      </IonContent>
    </IonPage>
  );
};

export default Multiply;
