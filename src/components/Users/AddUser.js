import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [eneteredUsername, setEnteredUsername] = useState("");
  const [eneteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      eneteredUsername.trim().length === 0 ||
      eneteredAge.trim().length === 0
    ) {
      setError({
        title: "invalid Input",
        message: "please enetr a vlid character",
      });
      return;
    }
    if (+eneteredAge < 1) {
      setError({
        title: "invalid age",
        message: "please enetr a vlid character",
      });
      return;
    }
    props.onAddUser(eneteredUsername, eneteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={eneteredUsername}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            value={eneteredAge}
            id="age"
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit">ADD USER</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
