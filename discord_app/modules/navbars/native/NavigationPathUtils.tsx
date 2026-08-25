// === Module 12327: SpecialNavigationPath ===

// Module 12327 (SpecialNavigationPath)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import _extends from "_extends" /* 4213 */;

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