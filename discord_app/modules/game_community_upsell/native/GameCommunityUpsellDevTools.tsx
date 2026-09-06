// discord_app/modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocalAppDetectionStore from "../../local_app_detection/native/LocalAppDetectionStore.tsx";
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore.tsx";

const require = fn;
function MultiGuildDevTools() {
  const tmp = closure_9();
  let obj = require("initialize");
  const items = [LocalAppDetectionStore];
  _require = obj.useStateFromStores(items, () => LocalAppDetectionStore.getUserAgnosticState());
  let obj1 = require("initialize");
  const items1 = [MobileGameCommunitiesStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({
    guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length,
    dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size,
    lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt(),
  }));
  const lastFetchedAt = stateFromStoresObject.lastFetchedAt;
  ({ guildsCount, dismissedCount } = stateFromStoresObject);
  const entries = Object.entries(require("GameCommunityConfig").DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
  let mapped = entries.map((item) => {
    [tmp, tmp2] = item;
    const obj = { detectableAppName: tmp, gameId: tmp2, detected: null, lastScannedAt: null };
    let flag;
    if (closure_0.apps[tmp] != null) {
      flag = tmp3.detected;
    }
    if (flag == null) {
      flag = false;
    }
    obj.detected = flag;
    let lastScannedAt;
    if (closure_0.apps[tmp] != null) {
      lastScannedAt = tmp3.lastScannedAt;
    }
    obj.lastScannedAt = lastScannedAt;
    return obj;
  });
  let str = "Never";
  if (lastFetchedAt > 0) {
    let _Date = Date;
    let date = new Date(lastFetchedAt);
    let _HermesInternal = HermesInternal;
    str = "" + date.toLocaleTimeString();
  }
  onPress = noop.useCallback(() => {
    LocalAppDetectionStore.DEV_resetState();
    MobileGameCommunitiesStore.DEV_clearFetchCache();
    closure_0(callback[9]).detectLocalApps(closure_0(callback[10]).ALL_DETECTABLE_APP_NAMES);
  }, []);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.scrollView, children: null };
  obj1 = { style: tmp.section, children: null };
  if (0 === mapped.length) {
    mapped = closure_7(tmp2(tmp3[12]).TableRow, {
      label: "No games configured",
      subLabel: "MULTI_GUILD_GAME_CONFIGS is empty",
      disabled: true,
    });
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
      obj.subLabel = "Game ID: " + detectableAppName.gameId + " \u2014 " + str + str2;
      return closure_1_7(closure_0(callback[12]).TableRow, obj, detectableAppName.detectableAppName);
    });
  }
  obj1.children = closure_7(require("TableRowGroup").TableRowGroup, {
    title: "Detected Apps",
    hasIcons: false,
    children: mapped,
  });
  const items2 = [closure_7(closure_3, obj1), ,];
  const obj2 = { style: tmp.section, children: null };
  const obj3 = { title: "Store State", hasIcons: false, children: null };
  const items3 = [
    closure_7(require("TableRow").TableRow, {
      label: "Presentable Guilds",
      subLabel: String(guildsCount),
      disabled: true,
    }),
    ,
  ];
  const obj4 = { label: "Presentable Guilds", subLabel: String(guildsCount), disabled: true };
  items3[1] = closure_7(require("TableRow").TableRow, {
    label: "Dismissed Guilds",
    subLabel: String(dismissedCount),
    disabled: true,
  });
  items3[2] = closure_7(require("TableRow").TableRow, { label: "Last Fetched", subLabel: str, disabled: true });
  obj3.children = items3;
  obj2.children = closure_8(require("TableRowGroup").TableRowGroup, obj3);
  items2[1] = closure_7(closure_3, obj2);
  const obj6 = { style: tmp.section, children: null };
  const obj7 = { title: "Actions", hasIcons: true, children: null };
  const obj5 = { label: "Dismissed Guilds", subLabel: String(dismissedCount), disabled: true };
  const items4 = [
    closure_7(require("TableRow").TableRow, {
      label: "Refresh Upsell Guilds",
      subLabel: "Redects games and suggested guilds",
      onPress,
      icon: closure_7(require("RefreshIcon").RefreshIcon, {}),
      trailing: closure_7(require("TableRowArrow").TableRowArrow, {}),
    }),
    ,
    ,
  ];
  const obj8 = {
    label: "Refresh Upsell Guilds",
    subLabel: "Redects games and suggested guilds",
    onPress,
    icon: closure_7(require("RefreshIcon").RefreshIcon, {}),
    trailing: closure_7(require("TableRowArrow").TableRowArrow, {}),
  };
  items4[1] = closure_7(require("TableRow").TableRow, {
    label: "Clear Dismissed Guilds",
    subLabel: "Reset dismissed guild IDs so all guilds show again",
    onPress() {
      const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
      callback();
    },
    icon: closure_7(require("RefreshIcon").RefreshIcon, {}),
    trailing: closure_7(require("TableRowArrow").TableRowArrow, {}),
  });
  const obj9 = {
    label: "Clear Dismissed Guilds",
    subLabel: "Reset dismissed guild IDs so all guilds show again",
    onPress() {
      const result = MobileGameCommunitiesStore.DEV_clearDismissedGuilds();
      callback();
    },
    icon: closure_7(require("RefreshIcon").RefreshIcon, {}),
    trailing: closure_7(require("TableRowArrow").TableRowArrow, {}),
  };
  items4[2] = closure_7(require("TableRow").TableRow, {
    label: "Clear All Store State",
    subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
    onPress() {
      MobileGameCommunitiesStore.DEV_clearState();
    },
    icon: closure_7(require("RefreshIcon").RefreshIcon, {}),
    trailing: closure_7(require("TableRowArrow").TableRowArrow, {}),
  });
  const obj10 = {
    label: "Clear All Store State",
    subLabel: "Reset all MobileGameCommunitiesStore state (guilds, dismissed, fetch cache)",
    onPress() {
      MobileGameCommunitiesStore.DEV_clearState();
    },
    icon: closure_7(require("RefreshIcon").RefreshIcon, {}),
    trailing: closure_7(require("TableRowArrow").TableRowArrow, {}),
  };
  items4[3] = closure_7(require("TableRow").TableRow, {
    label: "Reset Upsell Animation",
    subLabel: "Clear the dismissed state for the create button NUX animation so it can replay",
    onPress() {
      const result = closure_0(callback[15]).removeDismissedContent(
        closure_0(callback[16]).DismissibleContent.MOBILE_MULTI_GUILD_CREATE_UPSELL_ANIMATION,
      );
      const obj = closure_0(callback[15]);
      const result1 = closure_0(callback[17]).resetDismissibleContentFrameworkStore();
    },
    icon: closure_7(require("RefreshIcon").RefreshIcon, {}),
    trailing: closure_7(require("TableRowArrow").TableRowArrow, {}),
  });
  obj7.children = items4;
  obj6.children = closure_8(require("TableRowGroup").TableRowGroup, obj7);
  items2[2] = closure_7(closure_3, obj6);
  obj.children = items2;
  obj.children = closure_8(closure_4, obj);
  return closure_7(closure_3, obj);
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, scrollView: null, section: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.container = createStyles;
createStyles.scrollView = { flex: 1 };
createStyles.section = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
};
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx");

export default function GameCommunityUpsellDevTools() {
  return React5(MultiGuildDevTools, {});
}
