// discord_app/modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { useAppLauncherNavigation } from "../AppLauncherNativeConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx");

export default function useNavigationTransitionEnded() {
  const tmp = route(React.useState(false), 2);
  const _require = tmp2;
  const tmp3 = useAppLauncherNavigation();
  dependencyMap = tmp3;
  route = require("../../../../../_runtime/01501_createStandardNavigationFactories.js").useRoute();
  const items = [tmp3, route, tmp[1]];
  const effect = React.useEffect(() => closure_1.addListener("transitionEnd", () => {
    state = state.getState();
    if (state.routes[state.index].key === key.key) {
      callback(true);
    }
  }), items);
  return tmp[0];
};