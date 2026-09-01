// discord_app/modules/navbars/native/NavigationPathUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import _extends from "../../../../_runtime/metro/04310__extends.js";

const Routes = ME.Routes;
let obj = { FRIENDS: 0, [0]: "FRIENDS" };
const result = set.fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export const SpecialNavigationPath = obj;
export const getSelectedSpecialNavigationPath = function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
};
export const useSelectedSpecialNavigationPath = function useSelectedSpecialNavigationPath() {
  obj = _extends;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
};