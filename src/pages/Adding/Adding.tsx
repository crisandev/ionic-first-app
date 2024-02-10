import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Adding.css";
import Modal from "../../components/Modal";
import { useState } from "react";

const Adding: React.FC = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [addResult, setAddResult] = useState("0");

  function isValidNumericString(input: string): boolean {
    const numericRegex: RegExp = /^[0-9]+$/;
    return numericRegex.test(input);
  }

  const handleValueChangeNum1 = (e: CustomEvent) => {
    let value = e.detail.value;
    if (isValidNumericString(value)) {
      setNum1(value);
    } else {
      alert("Solo se permiten valores númericos");
      setNum1("");
    }
  };

  const handleValueChangeNum2 = (e: CustomEvent) => {
    let value = e.detail.value;
    if (isValidNumericString(value)) {
      setNum2(value);
    } else {
      alert("Solo se permiten valores númericos");
      setNum2("");
    }
    // setNum2(e.detail.value);
  };
  const handleClickSumar = () => {
    if ((isValidNumericString(num1), isValidNumericString(num2))) {
      let result = Number(num1) + Number(num2);
      setAddResult(result.toString());
    } else {
      alert("Solo se permiten valores numericos");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <div>
            <IonInput className="input" value={num1} onIonChange={handleValueChangeNum1} label="Primer Número" labelPlacement="floating" fill="outline" placeholder="Número 1" style={{ maxWidth: "160px" }}></IonInput>
            <IonInput className="input" value={num2} onIonChange={handleValueChangeNum2} label="Segundo Número" labelPlacement="floating" fill="outline" placeholder="Número 2" style={{ maxWidth: "160px" }}></IonInput>
          </div>
          <IonButton color="tertiary" onClick={handleClickSumar}>
            Sumar
          </IonButton>
          <div style={{ textAlign: "center" }}>
            <p>Result</p>
            <p>{addResult}</p>
          </div>
        </div>
        {/* <Modal /> */}
      </IonContent>
    </IonPage>
  );
};

export default Adding;
