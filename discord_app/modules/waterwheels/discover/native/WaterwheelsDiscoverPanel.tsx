// discord_app/modules/waterwheels/discover/native/WaterwheelsDiscoverPanel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import WaterwheelsDiscoverCardDefault from "WaterwheelsDiscoverCard.tsx";
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApexExperimentStore from "../../../experiments/apex/ApexExperimentStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function keyExtractor(key) {
  return key.key;
}
function getItemType(card) {
  return card.card.layout.type;
}
function RowSeparator() {
  return React6(View, { style: closure_13().separator });
}
function WaterwheelsDiscoverFeed(enabled) {
  enabled = enabled.enabled;
  _require = undefined;
  let trackAction;
  let onAction;
  const tmp = closure_13();
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  _require = youBarTotalHeight;
  let obj = require("useYouBarTotalHeight");
  const waterwheelsActions = require("useWaterwheelsActions").useWaterwheelsActions();
  let obj2 = require("useWaterwheelsActions");
  ({ snapshot, entries, status, retry } = waterwheelsActions(trackAction[11])(enabled));
  const tmp8 = waterwheelsActions(trackAction[12])(snapshot.loadId, entries);
  trackAction = tmp8.trackAction;
  ({ visible, viewabilityConfigCallbackPairs } = tmp8);
  const tmp7 = waterwheelsActions(trackAction[11])(enabled);
  const waterwheelsDiscoverInitialRequest = require("useWaterwheelsDiscoverFeed").useWaterwheelsDiscoverInitialRequest(
    enabled,
    visible,
    snapshot,
  );
  _require = onAction(function* (arg0, arg1, arg2) {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_4 = tmp4;
            closure_3 = tmp6;
            closure_131_0 = waterwheelsActions;
            closure_131_1 = undefined;
            c6 = 1;
            closure_131_1 = trackAction(closure_0, waterwheelsActions, trackAction);
            c6 = 0;
          }
        } else if (1 === tmp9) {
          c6 = 0;
        } else if (2 === tmp9) {
          c6 = 0;
          if (closure_131_1 != null) {
            closure_131_1.dispose();
          }
          throw closure_5;
        } else {
          if (3 === tmp9) {
            c6 = 2;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            if (closure_131_1 != null) {
              closure_131_1.dispose();
            }
            c8 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c6 = 2;
          }
          c6 = 0;
          if (closure_131_1 != null) {
            closure_131_1.dispose();
          }
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
        c6 = 3;
        let onJoinSettled;
        if (closure_131_1 != null) {
          onJoinSettled = closure_131_1.onJoinSettled;
        }
        c7 = 4;
        c8 = 1;
        const obj7 = { value: waterwheelsActions(closure_131_0, onJoinSettled), done: false };
        return obj7;
      } catch (tmp23) {
        closure_5 = tmp23;
        if (tmp5 === c6) {
          c8 = tmp3;
          throw tmp23;
        } else if (tmp2 === tmp25) {
          c7 = tmp2;
        } else if (tmp === tmp25) {
          c7 = tmp;
        } else {
          c7 = tmp3;
        }
      }
    }
  });
  items = [waterwheelsActions, trackAction];
  onAction = noop.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const items1 = [onAction];
  const items2 = [youBarTotalHeight];
  const callback1 = noop.useCallback(
    (entry) => React6(WaterwheelsDiscoverCardDefault, { entry: entry.item, onAction }),
    items1,
  );
  const memo = noop.useMemo(() => {
    const obj = { contentContainer: { paddingBottom }, scrollIndicator: { bottom: paddingBottom } };
    return obj;
  }, items2);
  if ("cards" !== status) {
    const obj4 = { style: null, children: null };
    const items3 = [tmp.feed, memo.contentContainer];
    obj4.style = items3;
    let obj5 = { status, onRetry: retry };
    obj4.children = closure_9(tmp6(tmp3[14]), obj5);
    let obj6 = obj4;
  } else {
    obj6 = { style: tmp.feed, children: null };
    let obj7 = {
      data: entries,
      renderItem: callback1,
      keyExtractor,
      getItemType,
      ItemSeparatorComponent: RowSeparator,
      ListHeaderComponent: null,
      contentContainerStyle: null,
      scrollIndicatorInsets: null,
      viewabilityConfigCallbackPairs: null,
      accessibilityLabel: null,
    };
    let tmp13Result;
    if ("error" === snapshot.status) {
      const obj13 = { onRetry: retry };
      tmp13Result = closure_9(tmp2(tmp3[14]).WaterwheelsDiscoverRefreshError, obj13);
    }
    obj7.ListHeaderComponent = tmp13Result;
    ({ contentContainer: obj8.contentContainerStyle, scrollIndicator: obj8.scrollIndicatorInsets } = memo);
    obj7.viewabilityConfigCallbackPairs = viewabilityConfigCallbackPairs;
    const intl = tmp2(tmp3[16]).intl;
    obj7.accessibilityLabel = intl.string(tmp6(tmp3[17])["EZRv/H"]);
    let loadId = snapshot.loadId;
    if (loadId == null) {
      loadId = WaterwheelsDiscoverPanel;
    }
    obj6.children = closure_9(tmp2(tmp3[15]).FlashList, obj7, loadId);
  }
  return closure_9(View, obj6);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
const WaterwheelsDiscoverPanel = "WaterwheelsDiscoverPanel";
const createStyles = fn(5243);
let obj2 = {
  feed: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
  separator: { height: 1 },
};
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverPanel.tsx");

export default function WaterwheelsDiscoverPanel(style) {
  let waterwheelsDiscoverEnabled;
  waterwheelsDiscoverEnabled =
    waterwheelsDiscoverEnabled(10147).useWaterwheelsDiscoverEnabled(WaterwheelsDiscoverPanel);
  let obj = waterwheelsDiscoverEnabled(10147);
  items = [AuthenticationStore, UserStore, ApexExperimentStore];
  const stateFromStoresObject = waterwheelsDiscoverEnabled(504).useStateFromStoresObject(items, () => {
    currentUser = currentUser.getCurrentUser();
    const obj = { userId: id.getId(), gateReady: null };
    let hasLoadedResult = null != currentUser;
    if (hasLoadedResult) {
      hasLoadedResult = ApexExperimentStore.hasLoaded(currentUser.id);
    }
    obj.gateReady = hasLoadedResult;
    return obj;
  });
  const gateReady = stateFromStoresObject.gateReady;
  const items1 = [waterwheelsDiscoverEnabled, gateReady];
  const effect = noop.useEffect(() => {
    let tmp = gateReady;
    if (gateReady) {
      tmp = !waterwheelsDiscoverEnabled;
    }
    if (tmp) {
      const result = WaterwheelsDiscoverNavigation.leaveWaterwheelsDiscover();
    }
  }, items1);
  const obj3 = { style: style.style, children: null };
  let tmp8 = null;
  const obj2 = waterwheelsDiscoverEnabled(504);
  const tmp6 = gateReady;
  if (waterwheelsDiscoverEnabled) {
    const obj4 = { children: null };
    const items2 = [closure_9(tmp6(18894), {})];
    const obj5 = { enabled: waterwheelsDiscoverEnabled };
    items2[1] = closure_9(WaterwheelsDiscoverFeed, obj5, stateFromStoresObject.userId);
    obj4.children = items2;
    tmp8 = closure_11(closure_10, obj4);
  }
  obj3.children = tmp8;
  return closure_9(gateReady(18646), obj3);
}
