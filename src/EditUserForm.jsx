import { useEffect, useState } from "react";
import "./app.css";
import EditFormInput from "./components/editFormInput";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);
  const initialFormState = {
    id: null,
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [values, setValues] = useState(initialFormState);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: user.password,
      required: true,
    },
  ];
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !user.username ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    )
      return;
    props.updateUser(user.id, user);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Edit Form</h1>
        {inputs.map((input) => (
          <EditFormInput
            key={input.id}
            {...input}
            value={user[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Update user</button>
        <button
          className="button muted-button"
          onClick={() => {
            props.setEditing(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;