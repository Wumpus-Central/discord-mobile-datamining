// === Module 11833: useNavigationTransitionEnded ===

// Module 11833 (useNavigationTransitionEnded)
import c from "c" /* 576 */;
import Link from "Link" /* 1503 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const useAppLauncherNavigation = fn(1501).useAppLauncherNavigation;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigationTransitionEnded() {
  const cResult = c.c(4);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp3;
  const tmp4 = useAppLauncherNavigation();
  closure_1 = tmp4;
  const route = Link.useRoute();
  if (cResult[0] === tmp4) {
    if (cResult[1] === route) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    return tmp2[0];
  }
  const fn = function u() {
    return state.addListener("transitionEnd", () => {
      state = state.getState();
      if (state.routes[state.index].key === key.key) {
        closure_1_0(true);
      }
    });
  };
  const items = [tmp4, route, tmp2[1]];
  cResult[0] = tmp4;
  cResult[1] = route;
  cResult[2] = fn;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn;
}) : (function useNavigationTransitionEnded() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp2;
  const tmp3 = useAppLauncherNavigation();
  closure_1 = tmp3;
  const route = Link.useRoute();
  const items = [tmp3, route, tmp[1]];
  const effect = noop.useEffect(() => state.addListener("transitionEnd", () => {
    state = state.getState();
    if (state.routes[state.index].key === key.key) {
      closure_1_0(true);
    }
  }), items);
  return tmp[0];
});