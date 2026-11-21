// discord_app/modules/waterwheels/discover/native/WaterwheelsDiscoverPanel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import WaterwheelsCardTypes from "../../cards/WaterwheelsCardTypes.tsx";
import WaterwheelsDiscoverCardDefault from "WaterwheelsDiscoverCard.tsx";
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
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
  return refs(View, { style: closure_14().separator });
}
function WaterwheelsDiscoverFeed(enabled) {
  enabled = enabled.enabled;
  _require = undefined;
  entries = undefined;
  let memo;
  let tmp = closure_14();
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  _require = youBarTotalHeight;
  const tmp5 = entries(
    memo.useState(() => new Set()),
    2,
  );
  const joiningGuildIds = tmp5[0];
  dependencyMap = tmp5[1];
  const callback = memo.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    dependencyMap((items) => {
      const set = new Set(items);
      if (closure_1) {
        set.add(closure_0);
      } else {
        set.delete(closure_0);
      }
      return set;
    });
  }, []);
  let obj = require("useYouBarTotalHeight");
  let waterwheelsActions = require("useWaterwheelsActions").useWaterwheelsActions(callback);
  let tmp10 = joiningGuildIds(17803)(enabled);
  ({ snapshot, entries } = tmp10);
  ({ status, retry } = tmp10);
  items = [entries];
  memo = memo.useMemo(() => {
    const set = new Set();
    const item = entries.forEach((card, index) => {
      let tmp = "server_row" === card.card.layout.type;
      if (tmp) {
        let type;
        if (entries[index - 1] != null) {
          type = tmp4.card.layout.type;
        }
        tmp = "server_row" !== type;
      }
      if (tmp) {
        set.add(card.key);
      }
    });
    return set;
  }, items);
  const items1 = [joiningGuildIds, memo];
  const memo1 = memo.useMemo(() => ({ joiningGuildIds, serverRunStartKeys: memo }), items1);
  const tmp13 = joiningGuildIds(17810)(snapshot.loadId, entries);
  const trackAction = tmp13.trackAction;
  ({ visible, viewabilityConfigCallbackPairs } = tmp13);
  let obj2 = require("useWaterwheelsActions");
  const waterwheelsDiscoverInitialRequest = require("useWaterwheelsDiscoverFeed").useWaterwheelsDiscoverInitialRequest(
    enabled,
    visible,
    snapshot,
  );
  _require = waterwheelsActions(function* (arg0, arg1, arg2) {
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
            waterwheelsActions = tmp6;
            closure_131_0 = closure_1;
            closure_131_1 = undefined;
            let v3 = 1;
            closure_131_1 = v3(closure_0, closure_1, closure_2);
            v3 = 0;
          }
        } else if (1 === tmp9) {
          v3 = 0;
        } else if (2 === tmp9) {
          v3 = 0;
          if (closure_131_1 != null) {
            closure_131_1.dispose();
          }
          throw closure_5;
        } else {
          if (3 === tmp9) {
            v3 = 2;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 0;
            if (closure_131_1 != null) {
              closure_131_1.dispose();
            }
            c8 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            v3 = 2;
          }
          v3 = 0;
          if (closure_131_1 != null) {
            closure_131_1.dispose();
          }
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
        v3 = 3;
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
        if (tmp5 === v3) {
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
  const items2 = [waterwheelsActions, trackAction];
  const callback1 = memo.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [callback1, trackAction];
  const callback2 = memo.useCallback((dependencyMap, guildId) => {
    closure_0 = dependencyMap;
    try {
      let obj = { type: "guild_profile", guildId: guildId.guildId };
      trackAction(dependencyMap, obj, "identity");
      sum = sum + 1;
      const text = `WaterwheelsDiscoverProfile:${tmp4}`;
      const first = text;
      const obj3 = { key: text, content: null };
      const obj5 = { guildId: null, guildName: null, footerAction: null };
      ({ guildId: obj4.guildId, name: obj4.guildName } = guildId);
      const obj2 = closure_0(5127);
      const obj8 = {
        server: guildId,
        variant: "primary",
        fullWidth: true,
        onAction: function handleSheetAction(type, arg1) {
          if (type.type === WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD) {
            ActionSheetActionCreatorsDefault.hideActionSheet(text);
          }
          callback1(closure_0, type, arg1);
        },
      };
      obj5.footerAction = closure_1_10(closure_0(17818).ServerActionButton, obj8);
      obj3.content = closure_1_10(first(17813), obj5);
      obj2.showActionSheet(obj3);
      const tmp10 = first(17813);
    } catch (err) {}
  }, items3);
  const items4 = [memo, callback1, callback2, joiningGuildIds];
  const items5 = [youBarTotalHeight];
  const callback3 = memo.useCallback((item) => {
    item = item.item;
    const obj = {
      entry: item,
      showServerSectionLabel: memo.has(item.key),
      joiningGuildIds,
      onAction: callback1,
      onProfileOpen: callback2,
    };
    return refs(WaterwheelsDiscoverCardDefault, obj);
  }, items4);
  const memo2 = memo.useMemo(() => {
    const obj = { contentContainer: { paddingBottom }, scrollIndicator: { bottom: paddingBottom } };
    return obj;
  }, items5);
  if ("cards" !== status) {
    const obj4 = { style: null, children: null };
    const items6 = [tmp.feed, memo2.contentContainer];
    obj4.style = items6;
    let obj5 = { status, onRetry: retry, retryAfterAt: snapshot.retryAfterAt };
    obj4.children = closure_10(tmp9(17825), obj5);
    let obj6 = obj4;
  } else {
    obj6 = { style: tmp.feed, children: null };
    let obj7 = {
      data: entries,
      extraData: memo1,
      renderItem: callback3,
      keyExtractor,
      getItemType,
      ItemSeparatorComponent: RowSeparator,
      ListHeaderComponent: null,
      contentContainerStyle: null,
      scrollIndicatorInsets: null,
      viewabilityConfigCallbackPairs: null,
      accessibilityLabel: null,
    };
    let tmp19Result;
    if ("error" === snapshot.status) {
      const obj13 = { onRetry: retry, retryAfterAt: snapshot.retryAfterAt };
      tmp19Result = closure_10(tmp2(17825).WaterwheelsDiscoverRefreshError, obj13);
    }
    obj7.ListHeaderComponent = tmp19Result;
    ({ contentContainer: obj8.contentContainerStyle, scrollIndicator: obj8.scrollIndicatorInsets } = memo2);
    obj7.viewabilityConfigCallbackPairs = viewabilityConfigCallbackPairs;
    const intl = tmp2(1112).intl;
    obj7.accessibilityLabel = intl.string(tmp9(2643)["EZRv/H"]);
    let loadId = snapshot.loadId;
    if (loadId == null) {
      loadId = WaterwheelsDiscoverPanel;
    }
    obj6.children = closure_10(tmp2(7490).FlashList, obj7, loadId);
  }
  return closure_10(trackAction, obj6);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const WaterwheelsDiscoverPanel = "WaterwheelsDiscoverPanel";
let c13 = 0;
const createStyles = fn(4913);
let obj2 = {
  content: { flex: 1 },
  feed: { flex: 1 },
  separator: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE },
};
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverPanel.tsx");

export default function WaterwheelsDiscoverPanel(style) {
  let waterwheelsDiscoverEnabled;
  let tmp = closure_14();
  waterwheelsDiscoverEnabled =
    waterwheelsDiscoverEnabled(10041).useWaterwheelsDiscoverEnabled(WaterwheelsDiscoverPanel);
  let obj = waterwheelsDiscoverEnabled(10041);
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
  let tmp9 = null;
  const obj2 = waterwheelsDiscoverEnabled(504);
  const tmp7 = gateReady;
  if (waterwheelsDiscoverEnabled) {
    const obj4 = { style: tmp.content, children: null };
    const items2 = [closure_10(tmp7(17828), {})];
    const obj5 = { enabled: waterwheelsDiscoverEnabled };
    items2[1] = closure_10(WaterwheelsDiscoverFeed, obj5, stateFromStoresObject.userId);
    obj4.children = items2;
    tmp9 = closure_11(View, obj4);
  }
  obj3.children = tmp9;
  return closure_10(gateReady(17570), obj3);
}
