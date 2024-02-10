import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./NumberToLetters.css";
import { numbers } from "./numbers";
import { useState } from "react";

const NumberToLetters: React.FC = () => {
  const [numberWord, setNumberWord] = useState("'Ingrese un valor'");
  const [number, setNumber] = useState("");

  const handleChangeNumber = (e: CustomEvent) => {
    setNumber(e.detail.value);
  };

  const handleClickNumberWord = () => {
    if(Number(number) > 1000){
      setNumberWord("El número debe de estar en el rango 1 - 1000 ")
      return;
    }

    const value = numbers[Number(number)];
    setNumberWord(value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="containerNumToLetters">
          <IonInput className="input" value={number} onIonChange={handleChangeNumber} label="Ingrese un número" labelPlacement="floating" fill="outline" placeholder="Número" style={{ maxWidth: "160px" }}></IonInput>
          <IonButton color="tertiary" onClick={handleClickNumberWord}>
            Buscar nombre del número
          </IonButton>
          <p>Nombre del número</p>
          <p>{numberWord ? numberWord : "'Valor incorrecto'"}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NumberToLetters;
