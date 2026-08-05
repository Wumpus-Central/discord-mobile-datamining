// discord_app/modules/navbars/native/NavigationPathUtils.tsx
import { Routes } from "ME";
import { _extends } from "../../../../_runtime/metro/04083__extends.js";

let obj = { FRIENDS: 0, [0]: "FRIENDS" };
const result = require("set").fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export const SpecialNavigationPath = obj;
export const getSelectedSpecialNavigationPath = function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
};
export const useSelectedSpecialNavigationPath = function useSelectedSpecialNavigationPath() {
  const obj = _extends;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
};