// === Module 15073: MultiGuildDevTools ===

// Module 15073 (MultiGuildDevTools)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import initialize from "initialize" /* 13258 */;
import set from "set" /* 15074 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function MultiGuildDevTools() {
  const tmp = callback2();
  let obj = _require(callback[7]);
  const items = [closure_5];
  _require = obj.useStateFromStores(items, () => closure_5.getUserAgnosticState());
  obj1 = _require(callback[7]);
  const items1 = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ guildsCount: store.getPresentableUpsellGuilds().length, dismissedCount: store.getDismissedGuildIds().size, lastFetchedAt: store.getLastFetchedAt() }));
  const lastFetchedAt = stateFromStoresObject.lastFetchedAt;
  ({ guildsCount, dismissedCount } = stateFromStoresObject);
  const entries = Object.entries(_require(callback[8]).DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
  let mapped = entries.map((item, index) => {
    [tmp, tmp2] = item;
    const obj = { detectableAppName: tmp, gameId: tmp2, detected: null, lastScannedAt: null };
    let flag;
    if (lib.apps[tmp] != null) {
      flag = tmp3.detected;
    }
    if (flag == null) {
      flag = false;
    }
    obj[2] = flag;
    let lastScannedAt;
    if (lib.apps[tmp] != null) {
      lastScannedAt = tmp3.lastScannedAt;
    }
    obj[3] = lastScannedAt;
    return obj;
  });
  let str = "Never";
  if (lastFetchedAt > 0) {
    let _Date = Date;
    let date = new Date(lastFetchedAt);
    let _HermesInternal = HermesInternal;
    str = "" + date.toLocaleTimeString();
  }
  callback = React.useCallback(() => {
    closure_5.DEV_resetState();
    store.DEV_clearFetchCache();
    lib(callback[9]).detectLocalApps(lib(callback[10]).ALL_DETECTABLE_APP_NAMES);
  }, []);
  obj = { style: tmp.scrollView, children: null };
  obj1 = { style: tmp.section, children: null };
  if (0 === mapped.length) {
    mapped = callback(tmp2(tmp3[12]).TableRow, { label: "No games configured", subLabel: "MULTI_GUILD_GAME_CONFIGS is empty", disabled: true });
  } else {
    mapped = mapped.map((item, index) => {
      const obj = { label: item.detectableAppName, subLabel: null, disabled: true };
      let str = "Not detected";
      if (item.detected) {
        str = "Detected";
      }
      let str2 = "";
      if (null != item.lastScannedAt) {
        const _Date = Date;
        const date = new Date(item.lastScannedAt);
        const _HermesInternal = HermesInternal;
        str2 = " (scanned " + date.toLocaleTimeString() + ")";
      }
      obj[1] = "Game ID: " + item.gameId + " \u2014 " + str + str2;
      return callback(lib(callback[12]).TableRow, obj, item.detectableAppName);
    });
  }
  obj1[1] = callback(_require(callback[11]).TableRowGroup, { title: "Detected Apps", hasIcons: false, children: mapped });
  const items2 = [callback(closure_3, obj1), , ];
  const obj2 = { style: tmp.section, children: null };
  const obj3 = { title: "Store State", hasIcons: false, children: null };
  const items3 = [callback(_require(callback[12]).TableRow, { label: "Presentable Guilds", subLabel: String(guildsCount), disabled: true }), , ];
  const obj4 = { label: "Presentable Guilds", subLabel: String(guildsCount), disabled: true };
  items3[1] = callback(_require(callback[12]).TableRow, { label: "Dismissed Guilds", subLabel: String(dismissedCount), disabled: true });
  items3[2] = callback(_require(callback[12]).TableRow, { label: "Last Fetched", subLabel: str, disabled: true });
  obj3[2] = items3;
  obj2[1] = callback2(_require(callback[11]).TableRowGroup, obj3);
  items2[1] = callback(closure_3, obj2);
  const obj6 = { style: tmp.section, children: null };
  const obj7 = { title: "Actions", hasIcons: true, children: null };
  const obj5 = { label: "Dismissed Guilds", subLabel: String(dismissedCount), disabled: true };
  const items4 = [callback(_require(callback[12]).TableRow, { label: "Refresh Upsell Guilds", subLabel: "Redects games and suggested guilds", onPress: callback, icon: callback(_require(callback[13]).RefreshIcon, {}), trailing: callback(_require(callback[14]).TableRowArrow, {}) }), , , ];
  const obj8 = { label: "Refresh Upsell Guilds", subLabel: "Redects games and suggested guilds", onPress: callback, icon: callback(_require(callback[13]).RefreshIcon, {}), trailing: callback(_require(callback[14]).TableRowArrow, {}) };
  items4[1] = callback(_require(callback[12]).TableRow, {
    label: "Clear Dismissed Guilds",
    subLabel: "Reset dismissed guild IDs so all guilds show again",
    onPress() {
      const result = closure_1_6.DEV_clearDismissedGuilds();
      callback();
    },
    icon: callback(_require(callback[13]).RefreshIcon, {}),
    trailing: callback(_require(callback[14]).TableRowArrow, {})
  });
  const obj9 = {
    label: "Clear Dismissed Guilds",
    subLabel: "Reset dismissed guild IDs so all guilds show again",
    onPress() {
      const result = closure_1_6.DEV_clearDismissedGuilds();
      callback();
    },
    icon: callback(_require(callback[13]).RefreshIcon, {}),
    trailing: callback(_require(callback[14]).TableRowArrow, {})
  };
  items4[2] = callback(_require(callback[12]).TableRow, {
    label: "Clear All Store State",
    subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
    onPress() {
      store.DEV_clearState();
    },
    icon: callback(_require(callback[13]).RefreshIcon, {}),
    trailing: callback(_require(callback[14]).TableRowArrow, {})
  });
  const obj10 = {
    label: "Clear All Store State",
    subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
    onPress() {
      store.DEV_clearState();
    },
    icon: callback(_require(callback[13]).RefreshIcon, {}),
    trailing: callback(_require(callback[14]).TableRowArrow, {})
  };
  items4[3] = callback(_require(callback[12]).TableRow, {
    label: "Reset Upsell Animation",
    subLabel: "Clear the dismissed state for the create button NUX animation so it can replay",
    onPress() {
      const result = lib(callback[15]).removeDismissedContent(lib(callback[16]).DismissibleContent.MOBILE_MULTI_GUILD_CREATE_UPSELL_ANIMATION);
      const obj = lib(callback[15]);
      const result1 = lib(callback[17]).resetDismissibleContentFrameworkStore();
    },
    icon: callback(_require(callback[13]).RefreshIcon, {}),
    trailing: callback(_require(callback[14]).TableRowArrow, {})
  });
  obj7[2] = items4;
  obj6[1] = callback2(_require(callback[11]).TableRowGroup, obj7);
  items2[2] = callback(closure_3, obj6);
  obj[1] = items2;
  obj[1] = callback2(closure_4, obj);
  return callback(closure_3, obj);
}
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx");

export default function GameCommunityUpsellDevTools() {
  return callback(MultiGuildDevTools, {});
};