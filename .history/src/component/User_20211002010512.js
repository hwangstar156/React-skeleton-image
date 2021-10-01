import React, { useState, useEffect } from "react";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <div className="user">
      <h2>User</h2>
      {profile && (
        <div className="profile" key={profile.id}>
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <div>Loading...</div>}
    </div>
  );
};

export default User;