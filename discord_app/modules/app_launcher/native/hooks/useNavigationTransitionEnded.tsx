// === Module 12128: useNavigationTransitionEnded ===

// Module 12128 (useNavigationTransitionEnded)
import Link from "Link" /* 1484 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const useAppLauncherNavigation = fn(1482).useAppLauncherNavigation;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx");

export default function useNavigationTransitionEnded() {
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
};