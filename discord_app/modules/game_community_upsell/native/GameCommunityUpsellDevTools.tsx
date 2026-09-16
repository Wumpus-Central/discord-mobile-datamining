// discord_app/modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocalAppDetectionStore from "../../local_app_detection/native/LocalAppDetectionStore.tsx";
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore.tsx";

const require = fn;
function MultiGuildDevTools() {
  const tmp = closure_9();
  const items = [LocalAppDetectionStore];
  _require = require("initialize").useStateFromStores(items, () => LocalAppDetectionStore.getUserAgnosticState());
  let obj = require("initialize");
  const items1 = [MobileGameCommunitiesStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({
    guildsCount: MobileGameCommunitiesStore.getPresentableUpsellGuilds().length,
    dismissedCount: MobileGameCommunitiesStore.getDismissedGuildIds().size,
    lastFetchedAt: MobileGameCommunitiesStore.getLastFetchedAt(),
  }));
  const lastFetchedAt = stateFromStoresObject.lastFetchedAt;
  ({ guildsCount, dismissedCount } = stateFromStoresObject);
  const entries = Object.entries(require("GameCommunityConfig").DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
  const mapped = entries.map((item) => {
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
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.scrollView, children: null };
  const obj5 = { style: tmp.section, children: null };
  if (0 === mapped.length) {
    let mapped1 = closure_7(tmp2(tmp3[12]).TableRow, {
      label: "No games configured",
      subLabel: "MULTI_GUILD_GAME_CONFIGS is empty",
      disabled: true,
    });
  } else {
    mapped1 = mapped.map((detectableAppName) => {
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
  obj5.children = closure_7(require("TableRowGroup").TableRowGroup, {
    title: "Detected Apps",
    hasIcons: false,
    children: mapped1,
  });
  const items2 = [closure_7(closure_3, obj5), ,];
  const obj6 = { style: tmp.section, children: null };
  const obj7 = { title: "Store State", hasIcons: false, children: null };
  const obj2 = require("initialize");
  const items3 = [
    closure_7(require("TableRow").TableRow, {
      label: "Presentable Guilds",
      subLabel: String(guildsCount),
      disabled: true,
    }),
    ,
  ];
  const obj8 = { label: "Presentable Guilds", subLabel: String(guildsCount), disabled: true };
  items3[1] = closure_7(require("TableRow").TableRow, {
    label: "Dismissed Guilds",
    subLabel: String(dismissedCount),
    disabled: true,
  });
  items3[2] = closure_7(require("TableRow").TableRow, { label: "Last Fetched", subLabel: str, disabled: true });
  obj7.children = items3;
  obj6.children = closure_8(require("TableRowGroup").TableRowGroup, obj7);
  items2[1] = closure_7(closure_3, obj6);
  const obj10 = { style: tmp.section, children: null };
  const obj11 = { title: "Actions", hasIcons: true, children: null };
  const obj9 = { label: "Dismissed Guilds", subLabel: String(dismissedCount), disabled: true };
  const items4 = [
    closure_7(require("TableRow").TableRow, {
      label: "Refresh Upsell Guilds",
      subLabel: "Redects games and suggested guilds",
      onPress,
      icon: closure_7(require("RefreshIcon").RefreshIcon, {}),
      trailing: closure_7(require("TableRowArrow").TableRowArrow, {}),
    }),
    ,
  ];
  const obj12 = {
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
  const obj13 = {
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
  obj11.children = items4;
  obj10.children = closure_8(require("TableRowGroup").TableRowGroup, obj11);
  items2[2] = closure_7(closure_3, obj10);
  obj4.children = items2;
  obj3.children = closure_8(closure_4, obj4);
  return closure_7(closure_3, obj3);
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  scrollView: { flex: 1 },
  section: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.section = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx");

export default function GameCommunityUpsellDevTools() {
  return React5(MultiGuildDevTools, {});
}
