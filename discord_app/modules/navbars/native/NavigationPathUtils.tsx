// discord_app/modules/navbars/native/NavigationPathUtils.tsx
import react from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import MemoryRouter from "../../../../_runtime/04710_MemoryRouter.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const SpecialNavigationPath = { FRIENDS: 0, [0]: "FRIENDS" };
function getSelectedSpecialNavigationPath(pathname) {
  if (pathname.pathname === Routes.FRIENDS) {
    return obj.FRIENDS;
  }
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = MemoryRouter;
      const _location = obj2.useLocation();
      if (cResult[0] !== _location) {
        let FRIENDS;
        if (_location.pathname === Routes.FRIENDS) {
          FRIENDS = obj.FRIENDS;
        }
        cResult[0] = _location;
        cResult[1] = FRIENDS;
        tmp3 = FRIENDS;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = MemoryRouter;
      let FRIENDS;
      if (obj.useLocation().pathname === Routes.FRIENDS) {
        FRIENDS = obj.FRIENDS;
      }
      return FRIENDS;
    };
const result = size.fileFinishedImporting("modules/navbars/native/NavigationPathUtils.tsx");

export { SpecialNavigationPath };
export { getSelectedSpecialNavigationPath };
export const useSelectedSpecialNavigationPath = tmp2;
