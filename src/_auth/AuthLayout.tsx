import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const isAuthentocated = false;

  return (
    <>
      {isAuthentocated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className=" flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/sideImage.svg"
            alt="signup/signin image"
            className=" hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}

export default AuthLayout;
