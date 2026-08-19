// discord_app/modules/navbars/native/NavigationPathUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import _extends from "../../../../_runtime/metro/04208__extends.js";

const Routes = ME.Routes;
let obj = { FRIENDS: 0, [0]: "FRIENDS" };
const result = obj132.fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

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