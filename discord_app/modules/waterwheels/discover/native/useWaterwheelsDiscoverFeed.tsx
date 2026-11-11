// === Module 18881: useWaterwheelsDiscoverFeed ===

// Module 18881 (useWaterwheelsDiscoverFeed)
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 10150 */;
import useWaterwheelsCardEligibilityDefault from "useWaterwheelsCardEligibility" /* 18882 */;
import WaterwheelsDiscoverFeedState from "WaterwheelsDiscoverFeedState" /* 18885 */;
import noop from "module_19" /* 19 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ICYMIStore from "ICYMIStore" /* 10137 */;
import LabFeatureStore from "LabFeatureStore" /* 9280 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10151 */;

const require = globalThis.__r;

require = fn;
function requestWaterwheelsDiscover() {
  if (!obj.hasDiscoverRequestInFlight()) {
    const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated();
    const tmpResult = ICYMIActionCreatorsDefault;
  }
  obj = ICYMIActionCreatorsDefault;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/useWaterwheelsDiscoverFeed.tsx");

export default function useWaterwheelsDiscoverFeed(arg0) {
  items = [ICYMIStore, ApexExperimentStore, AuthenticationStore, LabFeatureStore, UserStore];
  EMPTY_DISCOVER_SNAPSHOT = EMPTY_DISCOVER_SNAPSHOT(504).useStateFromStores(items, () => discoverSnapshot.getDiscoverSnapshot());
  if (!arg0) {
    EMPTY_DISCOVER_SNAPSHOT = tmp(10146).EMPTY_DISCOVER_SNAPSHOT;
  }
  const tmp3 = useWaterwheelsCardEligibilityDefault();
  importDefault = tmp3;
  const items1 = [EMPTY_DISCOVER_SNAPSHOT, tmp3];
  const memo = noop.useMemo(() => WaterwheelsDiscoverFeedState.selectWaterwheelsDiscoverEntries(EMPTY_DISCOVER_SNAPSHOT, closure_1), items1);
  const obj = EMPTY_DISCOVER_SNAPSHOT(504);
  const tmpResult = EMPTY_DISCOVER_SNAPSHOT(18885);
  return { snapshot: EMPTY_DISCOVER_SNAPSHOT, entries: memo, status: EMPTY_DISCOVER_SNAPSHOT(18885).getWaterwheelsDiscoverFeedStatus(EMPTY_DISCOVER_SNAPSHOT, memo.length), retry: requestWaterwheelsDiscover };
};
export function useWaterwheelsDiscoverInitialRequest(enabled, visible, snapshot) {
  _require = enabled;
  dependencyMap = snapshot;
  items = [InterestPickerSessionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => pickerOpen.isPickerOpen());
  const items1 = [enabled, visible, snapshot, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    const obj2 = { enabled, visible, snapshot, hasRequestInFlight: null, isPickerOpen: null };
    const obj = WaterwheelsDiscoverFeedState;
    obj2.hasRequestInFlight = ICYMIActionCreatorsDefault.hasDiscoverRequestInFlight();
    obj2.isPickerOpen = stateFromStores;
    if (obj.shouldRequestWaterwheelsDiscover(obj2)) {
      const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated();
      const tmp2Result = ICYMIActionCreatorsDefault;
    }
  }, items1);
}