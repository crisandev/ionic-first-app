import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./NumberToLetters.css";
import { numbers } from "./numbers";
import { useState } from "react";

const NumberToLetters: React.FC = () => {
  const [numberWord, setNumberWord] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeNumber = (e: CustomEvent) => {
    setNumber(e.detail.value);
  };

  const handleClickNumberWord = () => {
    const value = numbers[Number(number)]
    setNumberWord(value)

  }
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput value={number} onIonChange={handleChangeNumber} label="Outline input" labelPlacement="floating" fill="outline" placeholder="Enter text" style={{ maxWidth: "140px" }}></IonInput>
        <p>Nombre del número: {numberWord}</p>

        <IonButton color="tertiary" onClick={handleClickNumberWord}>
          Buscar nombre del número
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default NumberToLetters;
