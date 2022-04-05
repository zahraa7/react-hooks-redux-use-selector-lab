import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.users);

  console.log(users);

  return (
    <div>
      <ul>
        Users!
        {users.map((user, i) => {
          return (
            <div key={i}>
              <h1>{user.username}</h1>
            </div>
          );
        })}
        <h1>Total Users: {users.length}</h1>
      </ul>
    </div>
  );
}

export default Users;