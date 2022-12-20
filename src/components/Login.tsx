import { IonButton, IonCol, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { useState } from "react";

    //validate inputs code not shown

const Login =() => {
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const [error,setError] = useState("");
    var json;
    const log = async() =>{
        
        console.log(email);
        console.log(pwd);
        await fetch(`https://tptransversals5ws-production-80ab.up.railway.app/utilisateurs`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'email':`${email}`,
              'mdp':`${pwd}`
            }
          })
          .then(response => response.json())
          .then(res => {
            json=res.data;
            if(json == null){
                let newJson = res.error;
                setError(newJson.message);
                //alert(newJson.message);
            }
            else{
                console.log('marina');
                localStorage.setItem('token', json.token);
                window.location.reload();
            }
        });
    };
    return (
                 <><IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader><IonRow>
                <IonCol>
                    <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={personCircle} />
                </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
                <IonItem>
                <IonLabel position="floating"> Email</IonLabel>
                <IonInput
                    type="email"
                    onIonChange={(e :any) => setEmail(e.target.value)}
                />
                </IonItem>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
                <IonItem>
                <IonLabel position="floating"> Password</IonLabel>
                <IonInput
                    type="password"
                    onIonChange={(e :any) => setPwd(e.target.value)}
                />
                </IonItem>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
                <IonButton expand="block" onClick={log}>
                Login
                </IonButton>
                {error}
            </IonCol>
            </IonRow>
            
            </>
    );
};
export default Login;