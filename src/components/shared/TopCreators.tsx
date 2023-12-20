import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import UserCard from "./UserCard";
import Loader from "./Loader";
import { Models } from "appwrite";

const TopCreators = () => {
  const {
    data: users,
    isPending: isGetUserLoading,
    isError: isGetUserError,
  } = useGetUsers(10);

  console.log(users?.documents);

  return (
    <div className=" topCreators">
      <h3 className=" h3-bold">Top Creators</h3>

      {isGetUserLoading && !users ? (
        <Loader />
      ) : (
        <ul className="grid grid-cols-2  gap-7 ">
          {users?.documents.map((user: Models.Document) => (
            <UserCard key={user.$id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopCreators;
