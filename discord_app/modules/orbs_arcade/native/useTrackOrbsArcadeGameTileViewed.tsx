// discord_app/modules/orbs_arcade/native/useTrackOrbsArcadeGameTileViewed.tsx
import useTimeoutDefault from "../../../hooks/useTimeout.tsx";
import OrbsArcadeAnalytics from "../OrbsArcadeAnalytics.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const require = globalThis.__r;

require = fn;
const AppStates = fn(1072).AppStates;
let closure_5 = fn(10137).MIN_QUEST_VIEW_TIME_SECONDS;
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/useTrackOrbsArcadeGameTileViewed.tsx");

export default function useTrackOrbsArcadeGameTileViewed(arg0, arg1, arg2) {
  _require = arg0;
  importDefault = arg1;
  items = [AppStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => state.getState() === constants.ACTIVE);
  let result = null;
  const obj = require("initialize");
  if (arg2) {
    result = null;
    if (stateFromStores) {
      result = 1000 * closure_5;
    }
  }
  useTimeoutDefault(() => OrbsArcadeAnalytics.trackOrbsArcadeGameTileViewed(closure_0, closure_1), result);
}
