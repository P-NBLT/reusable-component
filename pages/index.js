import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "../component/Button/Button";
import trashPic from "../Media/trash.svg";
import sendPic from "../Media/send.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
          rowGap: "20px",
          padding: "20px",
          backgroundColor: "rgba(35,48,61)",
          marginTop: "10px",
          flexWrap: "wrap",
        }}
      >
        <Button
          text="TEXT"
          variant={["small"]}
          onClick={() => window.alert("small button")}
        />
        <Button text="CONTAINED" variant={["lg--light"]} />
        <Button text="OUTLINED" variant={["lg--dark"]} />
        <Button text="SMALL" variant={["lg--light", "sm"]} />
        <Button text="MEDIUM" variant={["lg--light", "medium"]} />
        <Button text="LARGE" variant={["lg--light", "large"]} />
        <Button
          text="DELETE"
          variant={["lg--dark", "large"]}
          pic={trashPic}
          onClick={() => window.alert("trash")}
          disabled={true}
        />
        <Button text="SEND" variant={["lg--light", "large"]} pic={sendPic} />
        <Button variant={["lg--light", "large"]}>
          <img src={sendPic.src} style={{ height: "20px", width: "20px" }} />
          Click me
        </Button>
        <button disabled={true} onClick={() => window.alert("you clicked me")}>
          <img src={sendPic.src} />
          Click me
        </button>
      </div>
    </div>
  );
}
