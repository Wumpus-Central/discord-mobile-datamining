// === Module 13622: NavigationPathUtils ===

// Module 13622 (NavigationPathUtils)
import c from "c" /* 576 */;
import Constants from "Constants" /* 1087 */;
import _mod5003 from "module_5003" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const SpecialNavigationPath = { FRIENDS: 0, [0]: "FRIENDS" };
function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
}
const result = size.fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export { SpecialNavigationPath };
export { getSelectedSpecialNavigationPath };
export const useSelectedSpecialNavigationPath = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedSpecialNavigationPath() {
  const obj = c;
  const cResult = obj.c(2);
  const _location = _mod5003.useLocation();
  if (cResult[0] !== _location) {
    let FRIENDS;
    if (_location.pathname === Routes.FRIENDS) {
      FRIENDS = obj.FRIENDS;
    }
    cResult[0] = _location;
    cResult[1] = FRIENDS;
    let tmp3 = FRIENDS;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useSelectedSpecialNavigationPath() {
  const obj = _mod5003;
  let FRIENDS;
  if (obj.useLocation().pathname === Routes.FRIENDS) {
    FRIENDS = obj.FRIENDS;
  }
  return FRIENDS;
});