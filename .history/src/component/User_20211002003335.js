import React, { useState, useEffect } from "react";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  });
  return (
    <div className="user">
      <h2>User</h2>
      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
        </div>
      )}
    </div>
  );
};

export default User;
