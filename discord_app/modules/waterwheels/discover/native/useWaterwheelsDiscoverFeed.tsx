// discord_app/modules/waterwheels/discover/native/useWaterwheelsDiscoverFeed.tsx
import ICYMIActionCreatorsDefault from "../../../icymi/ICYMIActionCreators.tsx";
import useWaterwheelsCardEligibilityDefault from "../../cards/native/useWaterwheelsCardEligibility.tsx";
import WaterwheelsDiscoverFeedState from "../WaterwheelsDiscoverFeedState.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApexExperimentStore from "../../../experiments/apex/ApexExperimentStore.tsx";
import ICYMIStore from "../../../icymi/ICYMIStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import InterestPickerSessionStore from "../../interest/InterestPickerSessionStore.tsx";

const require = globalThis.__r;

require = fn;
function requestWaterwheelsDiscover() {
  let isPickerOpenResult = InterestPickerSessionStore.isPickerOpen();
  if (!isPickerOpenResult) {
    isPickerOpenResult = ICYMIActionCreatorsDefault.hasDiscoverRequestInFlight();
  }
  if (!isPickerOpenResult) {
    const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated();
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/useWaterwheelsDiscoverFeed.tsx");

export default function useWaterwheelsDiscoverFeed(arg0) {
  items = [ICYMIStore, ApexExperimentStore, AuthenticationStore, UserStore];
  EMPTY_DISCOVER_SNAPSHOT = EMPTY_DISCOVER_SNAPSHOT(504).useStateFromStores(items, () =>
    discoverSnapshot.getDiscoverSnapshot(),
  );
  if (!arg0) {
    EMPTY_DISCOVER_SNAPSHOT = tmp(10214).EMPTY_DISCOVER_SNAPSHOT;
  }
  const tmp3 = useWaterwheelsCardEligibilityDefault();
  importDefault = tmp3;
  const items1 = [EMPTY_DISCOVER_SNAPSHOT, tmp3];
  const memo = noop.useMemo(
    () => WaterwheelsDiscoverFeedState.selectWaterwheelsDiscoverEntries(EMPTY_DISCOVER_SNAPSHOT, closure_1),
    items1,
  );
  const obj = EMPTY_DISCOVER_SNAPSHOT(504);
  const tmpResult = EMPTY_DISCOVER_SNAPSHOT(19010);
  return {
    snapshot: EMPTY_DISCOVER_SNAPSHOT,
    entries: memo,
    status: EMPTY_DISCOVER_SNAPSHOT(19010).getWaterwheelsDiscoverFeedStatus(EMPTY_DISCOVER_SNAPSHOT, memo.length),
    retry: requestWaterwheelsDiscover,
  };
}
export function useWaterwheelsDiscoverInitialRequest(enabled, visible, snapshot) {
  _require = enabled;
  closure_1 = visible;
  dependencyMap = snapshot;
  items = [InterestPickerSessionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    InterestPickerSessionStore.isPickerOpen(),
  );
  noop = noop.useRef(false);
  const items1 = [enabled, visible];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      if (closure_0) {
        if (!ref.current) {
          tmp3.current = true;
          discoverSnapshot = ICYMIStore.getDiscoverSnapshot();
          const _Date = Date;
          const timestamp = Date.now();
          let hasSnapshot = discoverSnapshot.hasSnapshot;
          if (hasSnapshot) {
            hasSnapshot = "success" === discoverSnapshot.status;
          }
          if (hasSnapshot) {
            let tmp9 = null == discoverSnapshot.loadedAt;
            if (!tmp9) {
              tmp9 = timestamp - discoverSnapshot.loadedAt >= 1800000;
            }
            hasSnapshot = tmp9;
          }
          if (hasSnapshot) {
            hasSnapshot = null == discoverSnapshot.retryAfterAt || timestamp >= discoverSnapshot.retryAfterAt;
            const tmp11 = null == discoverSnapshot.retryAfterAt || timestamp >= discoverSnapshot.retryAfterAt;
          }
          if (hasSnapshot) {
            hasSnapshot = !InterestPickerSessionStore.isPickerOpen();
          }
          if (hasSnapshot) {
            hasSnapshot = !ICYMIActionCreatorsDefault.hasDiscoverRequestInFlight();
          }
          if (hasSnapshot) {
            const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated();
          }
        }
      }
    } else {
      ref.current = false;
    }
  }, items1);
  const items2 = [enabled, visible, snapshot, stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (enabled) {
      if (visible) {
        if ("idle" === snapshot.status) {
          if (!InterestPickerSessionStore.isPickerOpen()) {
            function requestWhenReady() {
              const obj2 = {
                enabled,
                visible,
                snapshot: discoverSnapshot.getDiscoverSnapshot(),
                hasRequestInFlight: null,
                isPickerOpen: null,
              };
              const obj = enabled(19010);
              obj2.hasRequestInFlight = visible(10217).hasDiscoverRequestInFlight();
              obj2.isPickerOpen = InterestPickerSessionStore.isPickerOpen();
              if (obj.shouldRequestWaterwheelsDiscover(obj2)) {
                const dehydrated = visible(10217).fetchDehydrated();
                const tmp2Result = visible(10217);
              }
              const obj3 = visible(10217);
            }
            const result = ICYMIActionCreatorsDefault.subscribeDiscoverRequests(requestWhenReady);
            let obj3 = {
              enabled: tmp,
              visible: tmp2,
              snapshot: ICYMIStore.getDiscoverSnapshot(),
              hasRequestInFlight: null,
              isPickerOpen: null,
            };
            let obj2 = WaterwheelsDiscoverFeedState;
            obj3.hasRequestInFlight = ICYMIActionCreatorsDefault.hasDiscoverRequestInFlight();
            obj3.isPickerOpen = InterestPickerSessionStore.isPickerOpen();
            if (obj2.shouldRequestWaterwheelsDiscover(obj3)) {
              let dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated();
              const tmp4Result = ICYMIActionCreatorsDefault;
            }
            return result;
          }
        }
      }
    }
  }, items2);
}
