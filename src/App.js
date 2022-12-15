import { useState } from "react";
import UserTable from "./UserTable";
import MyForm from "./AddEdit";
function App() {
  const initialFormState = {
    id: null,
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  };
  const usersData = [
    {
      id: 1,
      username: "mcjk",
      email: "mcjothykrishnan@gmail.com",
      password: "1qaz1qaz!",
      confirmPassword: "1qaz1qaz!",
    },
  ];
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [users, setUsers] = useState(usersData);
  const [btn, setBtn] = useState("Submit");

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const editRow = (user) => {
    setBtn("Update");
    setCurrentUser({
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
    });
  };
  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    setCurrentUser(initialFormState);
    setBtn("Submit");
  };
  return (
    <div className="container">
      <div className="flex-row">
        <MyForm
          currentUser={currentUser}
          updateUser={updateUser}
          addUser={addUser}
          btn={btn}
        />
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
