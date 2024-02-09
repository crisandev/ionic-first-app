import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Adding.css";
import { useState } from "react";

const Adding: React.FC = () => {
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState('0');
  const [addResult, setAddResult] = useState('0');

  const handleValueChangeNum1 = (e: CustomEvent) => {
    setNum1(e.detail.value);
  };

  const handleValueChangeNum2 = (e: CustomEvent) => {
    setNum2(e.detail.value);
  };
  const handleClickSumar = () => {
    setAddResult('Working ' + num1 + " " +  num2);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <>
          <div>
            <IonInput value={num1} onIonChange={handleValueChangeNum1} label="Outline input" labelPlacement="floating" fill="outline" placeholder="Enter text" style={{ maxWidth: "140px" }}></IonInput>
            <IonInput value={num2} onIonChange={handleValueChangeNum2} label="Outline input" labelPlacement="floating" fill="outline" placeholder="Enter text" style={{ maxWidth: "140px" }}></IonInput>
          </div>
          <IonButton color="tertiary" onClick={handleClickSumar}>
            Sumar
          </IonButton>
          <div>
            <p>
              Result <span>{addResult}</span>
            </p>
          </div>
        </>
      </IonContent>
    </IonPage>
  );
};

export default Adding;
