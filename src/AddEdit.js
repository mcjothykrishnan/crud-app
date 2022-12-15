import { useState, useEffect } from "react";
import "./app.css";
import "./formInput.css";
function MyForm(props) {
  const initialFormState = {
    id: null,
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(initialFormState);

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

  const [focused, setFocused] = useState(false);
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleFocus = (e) => {
    setFocused(true);
  };
  function handleSubmit(e) {
    e.preventDefault();

    if (user.id) {
      if (
        !user.username ||
        !user.email ||
        !user.password ||
        !user.confirmPassword
      )
        return;
      props.updateUser(user.id, user);
      setFocused(false);
    } else {
      if (
        !user.username ||
        !user.email ||
        !user.password ||
        !user.confirmPassword
      )
        return;
      props.addUser(user);
      setUser(initialFormState);
      setFocused(false);
    }
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <div className="formInput">
            <label>{input.label}</label>
            <input
              {...input}
              key={input.id}
              value={user[input.name]}
              onChange={onChange}
              onBlur={handleFocus}
              onFocus={() =>
                input.name === "confirmPassword" && setFocused(true)
              }
              focused={focused.toString()}
            />
            <span>{input.errorMessage}</span>
          </div>
        ))}
        <button>{props.btn}</button>
      </form>
    </div>
  );
}
export default MyForm;
