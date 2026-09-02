// === Module 11923: useNavigationTransitionEnded ===

// Module 11923 (useNavigationTransitionEnded)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { useAppLauncherNavigation } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1497 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx");

export default function useNavigationTransitionEnded() {
  const tmp = route(React.useState(false), 2);
  const _require = tmp2;
  const tmp3 = useAppLauncherNavigation();
  dependencyMap = tmp3;
  route = _require(1499).useRoute();
  const items = [tmp3, route, tmp[1]];
  const effect = React.useEffect(() => closure_1.addListener("transitionEnd", () => {
    state = state.getState();
    if (state.routes[state.index].key === key.key) {
      callback(true);
    }
  }), items);
  return tmp[0];
};