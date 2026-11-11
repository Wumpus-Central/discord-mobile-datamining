// === Module 18886: useWaterwheelsDiscoverAnalytics ===

// Module 18886 (useWaterwheelsDiscoverAnalytics)
import DispatcherDefault from "Dispatcher" /* 572 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10158 */;
import WaterwheelsDiscoverJoinAttribution from "WaterwheelsDiscoverJoinAttribution" /* 18879 */;
import WaterwheelsDiscoverFeedState from "WaterwheelsDiscoverFeedState" /* 18885 */;
import WaterwheelsDiscoverAnalytics from "WaterwheelsDiscoverAnalytics" /* 18888 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;

const require = globalThis.__r;

require = fn;
function toAnalyticsItems(viewableItems) {
  items = [];
  const iter = viewableItems[Symbol.iterator]();
  while (iter !== undefined) {
    let item = iter.next().item;
    if (null != item) {
      let obj = WaterwheelsDiscoverFeedState;
      let arr = items.push(obj.toDiscoverAnalyticsItem(tmp));
    }
    continue;
  }
  return items;
}
const AppState = fn(17).AppState;
const WATERWHEELS = fn(1072).WATERWHEELS;
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/useWaterwheelsDiscoverAnalytics.tsx");

export default function useWaterwheelsDiscoverAnalytics(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  navigation = require("Link").useNavigation();
  first = first(noop.useState(() => {
    const waterwheelsDiscoverAnalyticsSession = new closure_0(navigation[8]).WaterwheelsDiscoverAnalyticsSession(closure_0(navigation[9]).discoverAnalyticsTracker);
    return waterwheelsDiscoverAnalyticsSession;
  }), 1)[0];
  const tmp3 = first(noop.useState(false), 2);
  noop = tmp3[1];
  items = [navigation, first];
  const effect = noop.useEffect(() => {
    function update() {
      let tmp = c0;
      if (c0) {
        tmp = closure_1;
      }
      if (tmp) {
        tmp = SelectedGuildStore.getGuildId() === WATERWHEELS;
      }
      first.setVisible(tmp);
      closure_4(tmp);
    }
    c0 = update.isFocused();
    closure_1 = "active" === memo.currentState;
    visible = update.addListener("focus", () => {
      c0 = true;
      let tmp = closure_1;
      if (closure_1) {
        tmp = SelectedGuildStore.getGuildId() === WATERWHEELS;
      }
      first.setVisible(tmp);
      closure_4(tmp);
    });
    closure_4 = update.addListener("blur", () => {
      c0 = false;
      first.setVisible(false);
      closure_4(false);
    });
    closure_5 = memo.addEventListener("change", (event) => {
      closure_1 = tmp;
      let tmp2 = c0;
      if (c0) {
        tmp2 = tmp;
      }
      if (tmp2) {
        tmp2 = SelectedGuildStore.getGuildId() === WATERWHEELS;
      }
      first.setVisible(tmp2);
      closure_4(tmp2);
    });
    SelectedGuildStore.addChangeListener(update);
    let tmp2 = c0;
    if (c0) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      tmp2 = SelectedGuildStore.getGuildId() === WATERWHEELS;
    }
    visible.setVisible(tmp2);
    closure_4(tmp2);
    return () => {
      closure_3();
      closure_4();
      closure_5.remove();
      SelectedGuildStore.removeChangeListener(update);
      first.dispose();
    };
  }, items);
  const items1 = [arg1];
  const memo = noop.useMemo(() => closure_1.map(WaterwheelsDiscoverFeedState.toDiscoverAnalyticsItem), items1);
  const items2 = [first, arg0, memo];
  const layoutEffect = noop.useLayoutEffect(() => {
    first.setFeed(closure_0, memo);
  }, items2);
  let obj2 = { visible: tmp3[0], viewabilityConfigCallbackPairs: null, trackAction: null };
  const items3 = [first];
  obj2.viewabilityConfigCallbackPairs = noop.useMemo(() => {
    items = [
      {
        viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 50 },
        onViewableItemsChanged(viewableItems) {
          return visible.trackSeenBatch(toAnalyticsItems(viewableItems.viewableItems));
        }
      },
      {
        viewabilityConfig: { waitForInteraction: false, viewAreaCoveragePercentThreshold: 50, minimumViewTime: 50 },
        onViewableItemsChanged(viewableItems) {
          return visible.updateDwellItems(toAnalyticsItems(viewableItems.viewableItems));
        }
      }
    ];
    return items;
  }, items3);
  const items4 = [first];
  obj2.trackAction = noop.useCallback((itemId, type, arg2) => {
    const result = WaterwheelsDiscoverFeedState.toDiscoverAnalyticsItem(itemId);
    const discoverActionParameters = WaterwheelsDiscoverAnalytics.getDiscoverActionParameters(type, arg2);
    let tmp6 = type.type === WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD;
    if (!tmp6) {
      tmp6 = type.type === WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME;
    }
    const trackActionResult = first.trackAction(result, discoverActionParameters, tmp6);
    if (null != trackActionResult) {
      return WaterwheelsDiscoverJoinAttribution.captureDiscoverJoinAttribution(AuthenticationStore, trackActionResult, DispatcherDefault);
    }
  }, items4);
  return obj2;
};