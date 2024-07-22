import { UserButton, useUser } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

const Userprofile = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div className="flex overflow-x-auto">
      <UserButton />
      <div className="pl-3 truncate">
        {user?.emailAddresses[0].emailAddress}
      </div>
    </div>
  );
};

export default Userprofile;
