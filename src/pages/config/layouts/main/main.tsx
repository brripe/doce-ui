import { Outlet } from "react-router";
import scss from "./main.module.scss";

export function MainLayoutWrapper() {
  return (
    <div className={scss.container}>
      <main className={scss.main}>
        <Outlet />
      </main>
    </div>
  );
}
