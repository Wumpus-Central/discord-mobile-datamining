// discord_app/modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import AppLauncherNativeConstants from "../AppLauncherNativeConstants.tsx";
import Link from "../../../../../_runtime/01491_Link.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useAppLauncherNavigation = AppLauncherNativeConstants.useAppLauncherNavigation;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react2;
      const cResult = obj.c(4);
      const tmp2 = _slicedToArray(react.useState(false), 2);
      let closure_0 = tmp4;
      const first = tmp2[0];
      const tmp5 = useAppLauncherNavigation();
      let closure_1 = tmp5;
      const obj3 = Link;
      const route = obj3.useRoute();
      if (cResult[0] === tmp5) {
        let tmp7;
        let tmp8;
        if (cResult[1] === route) {
          tmp7 = cResult[2];
          tmp8 = cResult[3];
        }
        const effect = react.useEffect(tmp7, tmp8);
        return first;
      }
      const fn = function s() {
        let key;
        let state;
        return state.addListener("transitionEnd", () => {
          state = state.getState();
          if (state.routes[state.index].key === key.key) {
            closure_1_0(true);
          }
        });
      };
      const items = [tmp5, route, tmp2[1]];
      cResult[0] = tmp5;
      cResult[1] = route;
      cResult[2] = fn;
      cResult[3] = items;
      tmp8 = items;
      tmp7 = fn;
    }
  : () => {
      let first;
      let tmp3;
      [first, tmp3] = react.useState(false);
      let closure_0 = tmp3;
      const tmp4 = useAppLauncherNavigation();
      let closure_1 = tmp4;
      const obj = Link;
      const route = obj.useRoute();
      const items = [tmp4, route, tmp3];
      const effect = react.useEffect(() => {
        let key;
        let state;
        return state.addListener("transitionEnd", () => {
          state = state.getState();
          if (state.routes[state.index].key === key.key) {
            closure_1_0(true);
          }
        });
      }, items);
      return first;
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx");

export default tmp2;
