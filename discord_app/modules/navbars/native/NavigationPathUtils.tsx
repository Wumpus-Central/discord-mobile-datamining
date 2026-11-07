// === Module 14623: NavigationPathUtils ===

// Module 14623 (NavigationPathUtils)
import Constants from "Constants" /* 1072 */;
import _mod5182 from "module_5182" /* 5182 */;
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
  const obj = _mod5182;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
}