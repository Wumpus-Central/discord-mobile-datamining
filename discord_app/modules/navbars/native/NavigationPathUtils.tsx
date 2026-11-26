// === Module 13814: NavigationPathUtils ===

// Module 13814 (NavigationPathUtils)
import Constants from "Constants" /* 1071 */;
import _mod5087 from "module_5087" /* 5087 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const SpecialNavigationPath = { FRIENDS: 0, [0]: "FRIENDS" };
const result = size.fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export { SpecialNavigationPath };
export function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
}
export function useSelectedSpecialNavigationPath() {
  const obj = _mod5087;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
}