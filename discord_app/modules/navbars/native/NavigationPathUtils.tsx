// discord_app/modules/navbars/native/NavigationPathUtils.tsx
import c from "../../../../_runtime/00576_c.js";
import Constants from "../../../Constants.tsx";
import _mod4716 from "../../../../_runtime/metro/04716__.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
export const useSelectedSpecialNavigationPath = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = c;
      const cResult = obj.c(2);
      const _location = _mod4716.useLocation();
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
    }
  : () => {
      const obj = _mod4716;
      let FRIENDS;
      if (obj.useLocation().pathname === Routes.FRIENDS) {
        FRIENDS = obj.FRIENDS;
      }
      return FRIENDS;
    };
