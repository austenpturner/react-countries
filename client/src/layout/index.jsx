import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <p>layout</p>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
