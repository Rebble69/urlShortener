import { NextPage } from "next";
import React from "react";
import styles from "../styles/all.module.scss";

const createShort: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>Create A New Short Link!</h1>

        <form action="/api/createshort" method="post">
          <label htmlFor="url" className={styles.input}>
            URL
          </label>
          <input
            type="text"
            name="url"
            id="url"
            className={styles.input}
            required
          />
          <label htmlFor="slug" className={styles.input}>
            SLUG
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            className={styles.input}
            required
            style={{ marginBottom: "1em" }}
          />
          <button type="submit" className={styles.input}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default createShort;
