// === Module 12775: NavigationPathUtils ===

// Module 12775 (NavigationPathUtils)
import Constants from "Constants" /* 1074 */;
import _mod4392 from "module_4392" /* 4392 */;
import size from "module_2" /* 2 */;

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