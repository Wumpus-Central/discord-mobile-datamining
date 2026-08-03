// === Module 11426: useNavigationTransitionEnded ===

// Module 11426 (useNavigationTransitionEnded)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { useAppLauncherNavigation } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";

let require = arg1;
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx");

export default function useNavigationTransitionEnded() {
  const tmp = route(React.useState(false), 2);
  const require = tmp2;
  const tmp3 = useAppLauncherNavigation();
  const dependencyMap = tmp3;
  route = require(1481) /* Link */.useRoute();
  const items = [tmp3, route, tmp[1]];
  const effect = React.useEffect(() => tmp3.addListener("transitionEnd", () => {
    state = state.getState();
    if (state.routes[state.index].key === key.key) {
      callback(true);
    }
  }), items);
  return tmp[0];
};