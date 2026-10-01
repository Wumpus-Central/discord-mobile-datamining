// discord_app/modules/badges/native/BadgeDirectoryView.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import openCustomizeBadgesSheet from "openCustomizeBadgesSheet.tsx";
import openBadgeDetailsSheet from "openBadgeDetailsSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

require = fn;
function BadgeSection(children) {
  ({ badges, tileSize: require, emptyText, onPressBadge: importDefault, badgeIndicatorIds: dependencyMap } = children);
  let map = closure_11();
  if (0 === badges.length) {
    if (null == emptyText) {
      return null;
    }
  }
  let obj = { style: map.section, children: null };
  let items = [
    closure_9(Text_Text.Text, { variant: "text-md/medium", color: "text-strong", children: children.title }),
  ];
  if (badges.length > 0) {
    const obj2 = { style: map.grid, children: null };
    map = badges.map;
    obj2.children = map((badge) => {
      const height = badge;
      let hasItem = set.has(badge.badge_id);
      const obj = { style: null, accessibilityLabel: null, onPress: null, children: null };
      const items = [map.tile];
      const size = { width: height, height };
      items[1] = size;
      obj.style = items;
      const name = badge.name;
      if (hasItem) {
        const intl = require("util").intl;
        const _HermesInternal = HermesInternal;
        let combined = "" + name + ", " + intl.string(require("util").t.y2b7CA);
      } else {
        combined = name;
      }
      obj.accessibilityLabel = combined;
      obj.onPress = function onPress() {
        return importDefault(closure_0);
      };
      const items1 = [closure_1_9(require("BadgeCatalogIcon"), { badge, size: 44 })];
      if (hasItem) {
        const obj3 = { style: map.badgeIndicator, "aria-hidden": true };
        hasItem = closure_1_9(closure_1_5, obj3);
      }
      items1[1] = hasItem;
      obj.children = items1;
      return closure_1_10(require("native").PressableScale, obj, badge.badge_id);
    });
    let tmp4Result = closure_9(closure_5, obj2);
  } else {
    let obj3 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
    tmp4Result = closure_9(Text_Text.Text, obj3);
  }
  items[1] = tmp4Result;
  obj.children = items;
  closure_10(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4845);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  content: null,
  centered: null,
  section: null,
  grid: null,
  tile: null,
  badgeIndicator: null,
  footer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.content = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_48,
};
let obj4 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_48,
};
obj2.centered = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_32,
};
let obj5 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_32,
};
obj2.section = { gap: nativeDefault.space.PX_16 };
const obj6 = { gap: nativeDefault.space.PX_16 };
obj2.grid = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
let obj7 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
obj2.tile = {
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let size = {
  position: "absolute",
  top: nativeDefault.space.PX_6,
  right: nativeDefault.space.PX_6,
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND,
};
obj2.badgeIndicator = size;
let obj8 = {
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryView.tsx");

export default function BadgeDirectoryView(arg0) {
  ({ targetUserId, targetUsername } = arg0);
  let analyticsLocations;
  let stateFromStores;
  targetUserId = undefined;
  let stateFromStoresArray;
  let tmp = closure_11();
  let stringResult1 = stateFromStores;
  analyticsLocations = analyticsLocations(stateFromStores[13])().analyticsLocations;
  const diff = analyticsLocations(stateFromStores[8])().width - 2 * analyticsLocations(stateFromStores[7]).space.PX_16;
  let result = 3 * analyticsLocations(stateFromStores[7]).space.PX_12;
  let items = [
    tmp.footer,
    {
      paddingBottom:
        analyticsLocations(stateFromStores[14])().bottom + analyticsLocations(stateFromStores[7]).space.PX_16,
    },
  ];
  let obj = {
    paddingBottom:
      analyticsLocations(stateFromStores[14])().bottom + analyticsLocations(stateFromStores[7]).space.PX_16,
  };
  const items1 = [UserStore];
  stateFromStores = targetUsername(stateFromStores[15]).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  noop = tmp7;
  let tmp8 = stateFromStores;
  if (null != targetUserId && targetUserId !== stateFromStores) {
    tmp8 = targetUserId;
  }
  targetUserId = tmp8;
  let obj2 = targetUsername(stateFromStores[15]);
  const items2 = [BadgeDirectoryStore];
  const items3 = [tmp8];
  stateFromStoresArray = targetUsername(stringResult1[15]).useStateFromStoresArray(
    items2,
    () => {
      if (null != targetUserId) {
        let badges = BadgeDirectoryStore.getBadges(tmp);
      } else {
        badges = [];
      }
      return badges;
    },
    items3,
  );
  const tmp5Result = targetUsername(stringResult1[15]);
  const items4 = [BadgeDirectoryStore];
  const items5 = [tmp8];
  const stateFromStores1 = targetUsername(stringResult1[15]).useStateFromStores(
    items4,
    () => {
      let hasCatalogForResult = null != targetUserId;
      if (hasCatalogForResult) {
        hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp);
      }
      return hasCatalogForResult;
    },
    items5,
  );
  const tmp5Result4 = targetUsername(stringResult1[15]);
  const items6 = [BadgeDirectoryStore];
  const items7 = [tmp8];
  const items8 = [tmp8];
  const stateFromStores2 = targetUsername(stringResult1[15]).useStateFromStores(
    items6,
    () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId),
    items7,
  );
  const effect = noop.useEffect(() => {
    if (null != targetUserId) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(targetUserId);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
    }
  }, items8);
  const items9 = [stateFromStores, null != targetUserId && targetUserId !== stateFromStores];
  const effect1 = noop.useEffect(() => {
    let tmp = closure_3;
    if (closure_3) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(stateFromStores);
      }
    }
  }, items9);
  const items10 = [stateFromStoresArray];
  const memo = noop.useMemo(() => BadgeUtils.getDirectoryBadges(stateFromStoresArray), items10);
  ({ owned, earnable } = memo);
  const tmp5Result5 = targetUsername(stringResult1[15]);
  let obj3 = { badges: stateFromStoresArray, enabled: null };
  let tmp29Result = !tmp7;
  obj3.enabled = tmp29Result;
  const badgeIndicatorIds = targetUsername(stringResult1[18]).useBadgeDirectoryBadgeIndicators(obj3).badgeIndicatorIds;
  if (null != targetUserId && targetUserId !== stateFromStores) {
    if (null != targetUsername) {
      const intl2 = targetUsername(stringResult1[11]).intl;
      const obj4 = { username: targetUsername };
      let formatToPlainStringResult = intl2.formatToPlainString(targetUsername(stringResult1[11]).t.EIcwoe, obj4);
    }
    const items11 = [tmp8];
    const items12 = [analyticsLocations];
    const callback = obj6.useCallback(() => {
      if (null != targetUserId) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp, { isRetry: true });
      }
    }, items11);
    const items13 = [tmp8, tmp7, targetUsername];
    const callback1 = obj6.useCallback(() => {
      const result = openBadgeDirectoryScreen.closeBadgeDirectoryScreen();
      openUserSettings.openUserSettings({ screen: UserSettingsSections.PROFILE_CUSTOMIZATION });
      const obj3 = { screen: UserSettingsSections.PROFILE_CUSTOMIZATION };
      const result1 = openCustomizeBadgesSheet.openCustomizeBadgesSheet({ analyticsLocations });
    }, items12);
    const callback2 = obj6.useCallback((badge_id) => {
      if (null != targetUserId) {
        const obj2 = { badgeId: badge_id.badge_id, displayedUserId: tmp, isViewingOtherUser, targetUsername };
        const result = openBadgeDetailsSheet.openBadgeDetailsSheet(obj2);
      }
    }, items13);
    let string = obj6.useCallback(() => {
      const result = targetUsername(stateFromStores[19]).closeBadgeDirectoryScreen();
      const obj = targetUsername(stateFromStores[19]);
      const result1 = targetUsername(stateFromStores[19]).openBadgeDirectoryScreen();
    }, []);
    if (!stateFromStores1) {
      if (stateFromStores2) {
        const obj5 = { style: tmp.centered, children: null };
        const obj7 = { variant: "text-md/semibold", children: null };
        const intl3 = targetUsername(stringResult1[11]).intl;
        obj7.children = intl3.string(targetUsername(stringResult1[11]).t.iufib1);
        const items14 = [closure_9(targetUsername(stringResult1[9]).Text, obj7), ,];
        const obj8 = { variant: "text-md/normal", color: "text-subtle", children: null };
        const intl4 = targetUsername(stringResult1[11]).intl;
        obj8.children = intl4.string(targetUsername(stringResult1[11]).t.eAn6z2);
        items14[1] = closure_9(targetUsername(stringResult1[9]).Text, obj8);
        const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: null };
        const intl5 = targetUsername(stringResult1[11]).intl;
        obj9.text = intl5.string(targetUsername(stringResult1[11]).t["7NqTJn"]);
        items14[2] = closure_9(targetUsername(stringResult1[23]).Button, obj9);
        obj5.children = items14;
        return closure_10(stateFromStoresArray, obj5);
      }
    }
    if (!stateFromStores1) {
      const obj10 = {
        style: tmp.centered,
        children: closure_9(targetUsername(stringResult1[24]).ActivityIndicator, {}),
      };
      closure_9(stateFromStoresArray, obj10);
    }
    let result1 = (diff - result) / 4;
    const obj11 = { style: tmp.container, children: null };
    const obj12 = { contentContainerStyle: tmp.content, children: null };
    const obj13 = {
      title: formatToPlainStringResult,
      badges: owned,
      tileSize: result1,
      emptyText: null,
      onPressBadge: null,
      badgeIndicatorIds: null,
    };
    let stringResult;
    if (!tmp7) {
      const intl6 = targetUsername(stringResult1[11]).intl;
      stringResult = intl6.string(targetUsername(stringResult1[11]).t.Qno0jg);
    }
    obj13.emptyText = stringResult;
    obj13.onPressBadge = callback2;
    obj13.badgeIndicatorIds = badgeIndicatorIds;
    const items15 = [closure_9(BadgeSection, obj13)];
    if (!tmp7) {
      const obj14 = { title: null, badges: null, tileSize: null, onPressBadge: null, badgeIndicatorIds: null };
      const intl7 = targetUsername(stringResult1[11]).intl;
      obj14.title = intl7.string(targetUsername(stringResult1[11]).t["0YzU//"]);
      obj14.badges = earnable;
      obj14.tileSize = result1;
      obj14.onPressBadge = callback2;
      obj14.badgeIndicatorIds = badgeIndicatorIds;
      tmp29Result = closure_9(BadgeSection, obj14);
    }
    items15[1] = tmp29Result;
    obj12.children = items15;
    const items16 = [closure_10(targetUserId, obj12)];
    if (tmp7) {
      const obj15 = { style: items, children: null };
      const obj16 = { variant: "secondary", onPress: string, text: null };
      const intl9 = targetUsername(stringResult1[11]).intl;
      string = intl9.string;
      stringResult1 = string(targetUsername(stringResult1[11]).t.msyp90);
      obj16.text = stringResult1;
      items = closure_9(targetUsername(stringResult1[23]).Button, obj16);
      obj15.children = items;
      let tmp29Result2 = closure_9(tmp27, obj15);
    } else {
      tmp29Result2 = owned.length > 0;
      if (tmp29Result2) {
        const obj17 = { style: items, children: null };
        const obj18 = { variant: "secondary", onPress: callback1, text: null };
        const intl8 = targetUsername(stringResult1[11]).intl;
        obj18.text = intl8.string(targetUsername(stringResult1[11]).t["6CLLyH"]);
        obj17.children = closure_9(targetUsername(stringResult1[23]).Button, obj18);
        tmp29Result2 = closure_9(tmp27, obj17);
      }
    }
    items16[1] = tmp29Result2;
    obj11.children = items16;
    closure_10(stateFromStoresArray, obj11);
  }
  const intl = targetUsername(stringResult1[11]).intl;
  formatToPlainStringResult = intl.string(targetUsername(stringResult1[11]).t.UqnlQF);
  const tmp5Result6 = targetUsername(stringResult1[18]);
}
