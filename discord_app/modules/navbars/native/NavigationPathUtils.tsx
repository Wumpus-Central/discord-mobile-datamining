// === Module 12868: NavigationPathUtils ===

// Module 12868 (NavigationPathUtils)
import Constants from "Constants" /* 1074 */;
import _mod4439 from "module_4439" /* 4439 */;
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
  const obj = _mod4439;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
};