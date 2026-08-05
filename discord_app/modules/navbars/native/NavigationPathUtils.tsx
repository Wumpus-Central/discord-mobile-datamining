// discord_app/modules/navbars/native/NavigationPathUtils.tsx
import { Routes } from "ME";

let obj = { FRIENDS: 0, [0]: "FRIENDS" };
const result = require("set").fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export const SpecialNavigationPath = obj;
export const getSelectedSpecialNavigationPath = function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
};
export const useSelectedSpecialNavigationPath = function useSelectedSpecialNavigationPath() {
  const obj = require("../../../../_runtime/metro/04113__extends.js") /* _extends */;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
};