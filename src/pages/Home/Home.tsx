import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <section>
          <div>
            <img src="/images/profile-image.jpg" alt="Profile Photo" width={100} />
          </div>
          <div>
            <h1>Cristian Eulises Sanchez Ramirez</h1>
            <p>scristianeulises@gmail.com</p>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
