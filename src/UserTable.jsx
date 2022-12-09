const UserTable = (props) => (
  <>
    <table class="table table-dark table-hover">
      <thead>
        <tr className="text-center">
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">ConfirmPassword</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id} className="text-center">
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.confirmPassword}</td>

              <td>
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  type="button"
                  class="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>
              <h4 className="text-center text-danger">No users</h4>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </>
);

export default UserTable;
