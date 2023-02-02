import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 gap-6  p-5 py-10 h-min-auto md:h-[90vh] items-center">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
