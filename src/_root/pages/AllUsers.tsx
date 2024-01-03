import UserCard from "@/components/shared/UserCard";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { Loader } from "lucide-react";
import React from "react";

const AllUsers = () => {
  const {
    data: users,
    isPending: isGetUserLoading,
    isError: isGetUserError,
  } = useGetUsers(10);
  return (
    <div className=" allUsers">
      <h3 className=" h3-bold">All Users</h3>

      {isGetUserLoading && !users ? (
        <Loader />
      ) : (
        <ul className="grid grid-cols-5 mt-7 items-center gap-5 max-xl:grid-cols-3 max-lg:grid-cols-2 ">
          {users?.documents.map((user: Models.Document) => (
            <UserCard key={user.$id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllUsers;
