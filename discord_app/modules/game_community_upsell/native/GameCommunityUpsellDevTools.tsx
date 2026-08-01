// === Module 14736: MultiGuildDevTools ===

// Module 14736 (MultiGuildDevTools)
import noop from "noop";
import get_ActivityIndicator from "handleDCShownToUser";
import initialize from "initialize";
import set from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let error;
let metroImportAll;
const require = arg1;
function MultiGuildDevTools() {
  let dismissedCount;
  let guildsCount;
  const tmp = createCacheKey();
  let obj = _require(callback[7]);
  const items = [initialize];
  _require = obj.useStateFromStores(items, () => initialize.getUserAgnosticState());
  let obj1 = _require(callback[7]);
  const items1 = [set];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ guildsCount: store.getPresentableUpsellGuilds().length, dismissedCount: store.getDismissedGuildIds().size, lastFetchedAt: store.getLastFetchedAt() }));
  const lastFetchedAt = stateFromStoresObject.lastFetchedAt;
  ({ guildsCount, dismissedCount } = stateFromStoresObject);
  const entries = Object.entries(_require(callback[8]).DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
  let mapped = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
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
    initialize.DEV_resetState();
    store.DEV_clearFetchCache();
    lib(callback[9]).detectLocalApps(lib(callback[10]).ALL_DETECTABLE_APP_NAMES);
  }, []);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.scrollView, children: null };
  obj1 = { style: tmp.section, children: null };
  if (0 === mapped.length) {
    mapped = tmp10(tmp2(tmp3[12]).TableRow, { label: "No games configured", subLabel: "MULTI_GUILD_GAME_CONFIGS is empty", disabled: true });
  } else {
    mapped = mapped.map((detectableAppName) => {
      const obj = { label: detectableAppName.detectableAppName, subLabel: null, disabled: true };
      let str = "Not detected";
      if (detectableAppName.detected) {
        str = "Detected";
      }
      let str2 = "";
      if (null != detectableAppName.lastScannedAt) {
        const _Date = Date;
        const date = new Date(detectableAppName.lastScannedAt);
        const _HermesInternal = HermesInternal;
        str2 = " (scanned " + date.toLocaleTimeString() + ")";
      }
      obj[1] = "Game ID: " + detectableAppName.gameId + " \u2014 " + str + str2;
      return closure_7(lib(callback[12]).TableRow, obj, detectableAppName.detectableAppName);
    });
  }
  obj1[1] = closure_7(_require(callback[11]).TableRowGroup, { title: "Detected Apps", hasIcons: false, children: mapped });
  const items2 = [closure_7(closure_3, obj1), , ];
  const obj2 = { style: tmp.section, children: null };
  const obj3 = { title: "Store State", hasIcons: false, children: null };
  const obj4 = { label: "Presentable Guilds", subLabel: null, disabled: true };
  obj4[1] = String(guildsCount);
  const items3 = [closure_7(_require(callback[12]).TableRow, obj4), , ];
  const obj5 = { label: "Dismissed Guilds", subLabel: null, disabled: true };
  obj5[1] = String(dismissedCount);
  items3[1] = closure_7(_require(callback[12]).TableRow, obj5);
  items3[2] = closure_7(_require(callback[12]).TableRow, { label: "Last Fetched", subLabel: str, disabled: true });
  obj3[2] = items3;
  obj2[1] = closure_8(_require(callback[11]).TableRowGroup, obj3);
  items2[1] = closure_7(closure_3, obj2);
  const obj6 = { style: tmp.section, children: null };
  const obj7 = { title: "Actions", hasIcons: true, children: null };
  const obj8 = { label: "Refresh Upsell Guilds", subLabel: "Redects games and suggested guilds", onPress: callback, icon: null, trailing: null };
  obj8[3] = closure_7(_require(callback[13]).RefreshIcon, {});
  obj8[4] = closure_7(_require(callback[14]).TableRowArrow, {});
  const items4 = [closure_7(_require(callback[12]).TableRow, obj8), , , ];
  const obj9 = {
    label: "Clear Dismissed Guilds",
    subLabel: "Reset dismissed guild IDs so all guilds show again",
    onPress() {
      const result = outer1_6.DEV_clearDismissedGuilds();
      callback();
    },
    icon: null,
    trailing: null
  };
  obj9[3] = closure_7(_require(callback[13]).RefreshIcon, {});
  obj9[4] = closure_7(_require(callback[14]).TableRowArrow, {});
  items4[1] = closure_7(_require(callback[12]).TableRow, obj9);
  const obj10 = {
    label: "Clear All Store State",
    subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
    onPress() {
      store.DEV_clearState();
    },
    icon: null,
    trailing: null
  };
  obj10[3] = closure_7(_require(callback[13]).RefreshIcon, {});
  obj10[4] = closure_7(_require(callback[14]).TableRowArrow, {});
  items4[2] = closure_7(_require(callback[12]).TableRow, obj10);
  const obj11 = {
    label: "Reset Upsell Animation",
    subLabel: "Clear the dismissed state for the create button NUX animation so it can replay",
    onPress() {
      const result = lib(callback[15]).removeDismissedContent(lib(callback[16]).DismissibleContent.MOBILE_MULTI_GUILD_CREATE_UPSELL_ANIMATION);
      const obj = lib(callback[15]);
      const result1 = lib(callback[17]).resetDismissibleContentFrameworkStore();
    },
    icon: null,
    trailing: null
  };
  obj11[3] = closure_7(_require(callback[13]).RefreshIcon, {});
  obj11[4] = closure_7(_require(callback[14]).TableRowArrow, {});
  items4[3] = closure_7(_require(callback[12]).TableRow, obj11);
  obj7[2] = items4;
  obj6[1] = closure_8(_require(callback[11]).TableRowGroup, obj7);
  items2[2] = closure_7(closure_3, obj6);
  obj[1] = items2;
  obj[1] = closure_8(closure_4, obj);
  return closure_7(closure_3, obj);
}
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, scrollView: null, section: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_8 };
let result = require("initialize").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx");

export default function GameCommunityUpsellDevTools() {
  return callback(MultiGuildDevTools, {});
};