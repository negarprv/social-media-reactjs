import { Models } from "appwrite";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }: { user: Models.Document }) => {
  const navigate = useNavigate();

  return (
    <div className=" rounded-3xl border border-dark-4 w-[190px]   py-6 px-9">
      <div className=" flex flex-col gap-2  items-center">
        <img
          src={user ? user.imageUrl : "/assets/icons/profile-placeholder.svg"}
          alt="user profile image"
          className=" rounded-full "
          width={54}
          height={54}
        />
        <p className="small-semibold ">{user.name}</p>
        <p className=" text-light-3 tiny-medium">Followed by test</p>
        <Button
          onClick={() => navigate(`/profile/${user.$id}`)}
          className="shad-button_primary py-2 px-5"
        >
          Follow
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
