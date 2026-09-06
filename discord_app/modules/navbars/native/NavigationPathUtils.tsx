// discord_app/modules/navbars/native/NavigationPathUtils.tsx
import Constants from "../../../Constants.tsx";
import _mod4392 from "../../../../_runtime/metro/04392__.js";
import size from "../../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const SpecialNavigationPath = { FRIENDS: 0, [0]: "FRIENDS" };
const result = size.fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export { SpecialNavigationPath };
export const getSelectedSpecialNavigationPath = function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
};
export const useSelectedSpecialNavigationPath = function useSelectedSpecialNavigationPath() {
  const obj = _mod4392;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
};
