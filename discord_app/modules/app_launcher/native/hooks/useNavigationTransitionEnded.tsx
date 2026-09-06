// discord_app/modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx
import Link from "../../../../../_runtime/01484_Link.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const effect = noop.useEffect(
    () =>
      state.addListener("transitionEnd", () => {
        state = state.getState();
        if (state.routes[state.index].key === key.key) {
          closure_1_0(true);
        }
      }),
    items,
  );
  return tmp[0];
}
