import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Multiply.css";
import { useState } from "react";
import { isElement } from "react-dom/test-utils";

const Multiply: React.FC = () => {
  const [number, setNumber] = useState("1");
  let values: number[] = [];

  function isValidNumericString(input: string): boolean {
    const numericRegex: RegExp = /^[0-9]+$/;
    return numericRegex.test(input);
  }

  const handleNumberChange = (e: CustomEvent) => {
    if (isValidNumericString(e.detail.value)) {
      setNumber(e.detail.value);
      return;
    }

    setNumber("0");
  };
    
  const handleTablaMultiplicar = () => {
    if (isValidNumericString(number)) {
      const num = Number(number);
      for (let i = 1; i <= 13; i++) {
        values.push(num);
      }
    } else {
      alert("Solo se aceptan valores Númericos");
      setNumber("1");
    }
  };

  handleTablaMultiplicar();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{textAlign: "center"}}>Multiplicadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="containerMultiply">
          <div className="generateTable">
            <IonInput className="input" value={number} onIonChange={handleNumberChange} label="Outline input" labelPlacement="floating" fill="outline" placeholder="Enter text" style={{ maxWidth: "140px" }}></IonInput>
            <IonButton onClick={handleTablaMultiplicar} color="tertiary">
              Generar Tabla de Multiplicar
            </IonButton>
          </div>
          <div className="table">
            <h4>Tabla Del {number}</h4>
            <div>
              {values.map((value: number, index: number) => {
                return (
                  <p key={index}>
                    {index + 1} x {number} = {(index + 1) * value}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Multiply;
