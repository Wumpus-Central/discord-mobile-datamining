// discord_app/modules/badges/native/BadgeDirectoryView.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import openBadgeDetailsSheet from "openBadgeDetailsSheet.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ProfileCustomizationNavigationStore from "../../profile_customization/ProfileCustomizationNavigationStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

require = fn;
function BadgeSection(children) {
  ({ badges, tileSize: require, emptyText, onPressBadge: importDefault, badgeIndicatorIds: dependencyMap } = children);
  let map = closure_12();
  if (0 === badges.length) {
    if (null == emptyText) {
      return null;
    }
  }
  let obj = { style: map.section, children: null };
  items = [
    closure_10(Text_Text.Heading, { variant: "body-md/medium", color: "text-strong", children: children.title }),
  ];
  if (badges.length > 0) {
    const obj2 = { style: map.grid, children: null };
    map = badges.map;
    obj2.children = map((badge) => {
      const height = badge;
      let hasItem = set.has(badge.badge_id);
      const obj = { style: null, accessibilityLabel: null, onPress: null, children: null };
      items = [map.tile];
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
      const items1 = [closure_1_10(require("BadgeCatalogIcon"), { badge, size: 44 })];
      if (hasItem) {
        const obj3 = { style: map.badgeIndicator, "aria-hidden": true };
        hasItem = closure_1_10(closure_1_5, obj3);
      }
      items1[1] = hasItem;
      obj.children = items1;
      return closure_1_11(require("native").PressableScale, obj, badge.badge_id);
    });
    let tmp4Result = closure_10(closure_5, obj2);
  } else {
    let obj3 = { variant: "body-md/medium", color: "text-muted", children: emptyText };
    tmp4Result = closure_10(Text_Text.Text, obj3);
  }
  items[1] = tmp4Result;
  obj.children = items;
  closure_11(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const UserSettingsSections = fn(1072).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  content: null,
  centered: null,
  section: null,
  grid: null,
  tile: null,
  badgeIndicator: null,
  footer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
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
let obj6 = { gap: nativeDefault.space.PX_16 };
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
  backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND,
};
obj2.badgeIndicator = size;
const obj8 = {
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryView.tsx");

export default function BadgeDirectoryView(arg0) {
  ({ targetUserId, targetUsername } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  targetUserId = undefined;
  let stateFromStoresArray;
  let isBadgeUnreadStateEnabled;
  let badgeIndicatorIds;
  let stringResult1 = dependencyMap;
  let isBadgeManagementEnabled = targetUsername(10011).useIsBadgeManagementEnabled({ location: "BadgeDirectoryView" });
  const tmp4 = closure_12();
  const diff = stateFromStores(1493)().width - 2 * stateFromStores(575).space.PX_16;
  let result = 3 * stateFromStores(575).space.PX_12;
  items = [tmp4.footer];
  let obj = targetUsername(10011);
  items[1] = { paddingBottom: stateFromStores(1627)().bottom + stateFromStores(575).space.PX_16 };
  let obj2 = { paddingBottom: stateFromStores(1627)().bottom + stateFromStores(575).space.PX_16 };
  const items1 = [UserStore];
  stateFromStores = targetUsername(504).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  dependencyMap = tmp8;
  let tmp9 = stateFromStores;
  if (null != targetUserId && targetUserId !== stateFromStores) {
    tmp9 = targetUserId;
  }
  targetUserId = tmp9;
  const obj3 = targetUsername(504);
  const items2 = [BadgeDirectoryStore];
  const items3 = [tmp9];
  stateFromStoresArray = targetUsername(504).useStateFromStoresArray(
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
  const tmpResult = targetUsername(504);
  const items4 = [BadgeDirectoryStore];
  const items5 = [tmp9];
  const stateFromStores1 = targetUsername(504).useStateFromStores(
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
  const tmpResult5 = targetUsername(504);
  const items6 = [BadgeDirectoryStore];
  const items7 = [tmp9];
  const items8 = [tmp9];
  const stateFromStores2 = targetUsername(504).useStateFromStores(
    items6,
    () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId),
    items7,
  );
  const effect = targetUserId.useEffect(() => {
    if (null != targetUserId) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(targetUserId);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
    }
  }, items8);
  const items9 = [stateFromStores, null != targetUserId && targetUserId !== stateFromStores];
  const effect1 = targetUserId.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(stateFromStores);
      }
    }
  }, items9);
  const items10 = [stateFromStoresArray];
  const memo = targetUserId.useMemo(() => BadgeUtils.getDirectoryBadges(stateFromStoresArray), items10);
  ({ owned, earnable } = memo);
  const tmpResult6 = targetUsername(504);
  let tmp32Result = !tmp8;
  let someResult = tmp32Result;
  if (!(null != targetUserId && targetUserId !== stateFromStores)) {
    someResult = stateFromStoresArray.some((has_updates) => true === has_updates.has_updates);
  }
  isBadgeUnreadStateEnabled = targetUsername(11753).useIsBadgeUnreadStateEnabled({
    location: "BadgeDirectoryView",
    hasUnread: someResult,
  });
  const tmpResult7 = targetUsername(11753);
  badgeIndicatorIds = targetUsername(15164).useBadgeDirectoryBadgeIndicators({
    badges: stateFromStoresArray,
    enabled: tmp32Result,
  }).badgeIndicatorIds;
  const items11 = [
    stateFromStoresArray,
    isBadgeUnreadStateEnabled,
    null != targetUserId && targetUserId !== stateFromStores,
    badgeIndicatorIds,
  ];
  const memo1 = obj8.useMemo(() => {
    if (!closure_2) {
      if (isBadgeUnreadStateEnabled) {
        const found = stateFromStoresArray.filter((has_updates) => true === has_updates.has_updates);
        const mapped = found.map((badge_id) => badge_id.badge_id);
        const _Set = Set;
        items = [];
        HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(badgeIndicatorIds, 0));
        const set = new Set(items);
        return set;
      }
    }
    return badgeIndicatorIds;
  }, items11);
  if (null != targetUserId && targetUserId !== stateFromStores) {
    if (null != targetUsername) {
      const intl2 = targetUsername(1113).intl;
      const obj4 = { username: targetUsername };
      let formatToPlainStringResult = intl2.formatToPlainString(targetUsername(1113).t.EIcwoe, obj4);
    }
    const items12 = [tmp9];
    const callback = obj8.useCallback(() => {
      if (null != targetUserId) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp, { isRetry: true });
      }
    }, items12);
    const items13 = [tmp9, tmp8, targetUsername];
    const callback1 = obj8.useCallback(() => {
      const result = targetUsername(isViewingOtherUser[21]).closeBadgeDirectoryScreen();
      badgeIndicatorIds.setState({ pendingCustomizeBadgesSheet: true });
      const obj = targetUsername(isViewingOtherUser[21]);
      targetUsername(isViewingOtherUser[22]).openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION });
    }, []);
    const callback2 = obj8.useCallback((badge_id) => {
      if (null != targetUserId) {
        const obj2 = {
          badgeId: badge_id.badge_id,
          displayedUserId: tmp,
          isViewingOtherUser,
          targetUsername,
          source: "directory",
        };
        const result = openBadgeDetailsSheet.openBadgeDetailsSheet(obj2);
      }
    }, items13);
    let string = obj8.useCallback(() => {
      const result = targetUsername(isViewingOtherUser[21]).closeBadgeDirectoryScreen();
      const obj = targetUsername(isViewingOtherUser[21]);
      const result1 = targetUsername(isViewingOtherUser[21]).openBadgeDirectoryScreen();
    }, []);
    if (!stateFromStores1) {
      if (stateFromStores2) {
        const obj5 = { style: tmp4.centered, children: null };
        const obj6 = { variant: "body-md/semibold", children: null };
        const intl3 = targetUsername(1113).intl;
        obj6.children = intl3.string(targetUsername(1113).t.iufib1);
        const items14 = [closure_10(targetUsername(5866).Text, obj6), ,];
        const obj7 = { variant: "body-md/normal", color: "text-subtle", children: null };
        const intl4 = targetUsername(1113).intl;
        obj7.children = intl4.string(targetUsername(1113).t.eAn6z2);
        items14[1] = closure_10(targetUsername(5866).Text, obj7);
        const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: null };
        const intl5 = targetUsername(1113).intl;
        obj9.text = intl5.string(targetUsername(1113).t["7NqTJn"]);
        items14[2] = closure_10(targetUsername(5873).Button, obj9);
        obj5.children = items14;
        return closure_11(isBadgeUnreadStateEnabled, obj5);
      }
    }
    if (!stateFromStores1) {
      const obj10 = { style: tmp4.centered, children: closure_10(targetUsername(7354).ActivityIndicator, {}) };
      closure_10(isBadgeUnreadStateEnabled, obj10);
    }
    let result1 = (diff - result) / 4;
    const obj11 = { style: tmp4.container, children: null };
    const obj12 = { alwaysBounceVertical: false, contentContainerStyle: tmp4.content, children: null };
    const obj13 = {
      title: formatToPlainStringResult,
      badges: owned,
      tileSize: result1,
      emptyText: null,
      onPressBadge: null,
      badgeIndicatorIds: null,
    };
    let stringResult;
    if (!tmp8) {
      const intl6 = targetUsername(1113).intl;
      stringResult = intl6.string(targetUsername(1113).t.Qno0jg);
    }
    obj13.emptyText = stringResult;
    obj13.onPressBadge = callback2;
    obj13.badgeIndicatorIds = memo1;
    const items15 = [closure_10(BadgeSection, obj13)];
    if (!tmp8) {
      const obj14 = { title: null, badges: null, tileSize: null, onPressBadge: null, badgeIndicatorIds: null };
      const intl7 = targetUsername(1113).intl;
      obj14.title = intl7.string(targetUsername(1113).t["0YzU//"]);
      obj14.badges = earnable;
      obj14.tileSize = result1;
      obj14.onPressBadge = callback2;
      obj14.badgeIndicatorIds = memo1;
      tmp32Result = closure_10(BadgeSection, obj14);
    }
    items15[1] = tmp32Result;
    obj12.children = items15;
    const items16 = [closure_11(stateFromStoresArray, obj12)];
    if (tmp8) {
      const obj15 = { style: items, children: null };
      const obj16 = { variant: "secondary", onPress: string, text: null };
      const intl9 = targetUsername(1113).intl;
      string = intl9.string;
      stringResult1 = string(targetUsername(1113).t.msyp90);
      obj16.text = stringResult1;
      items = closure_10(targetUsername(5873).Button, obj16);
      obj15.children = items;
      isBadgeManagementEnabled = closure_10(tmp30, obj15);
    } else {
      if (isBadgeManagementEnabled) {
        isBadgeManagementEnabled = owned.length > 0;
      }
      if (isBadgeManagementEnabled) {
        const obj17 = { style: items, children: null };
        const obj18 = { variant: "secondary", onPress: callback1, text: null };
        const intl8 = targetUsername(1113).intl;
        obj18.text = intl8.string(targetUsername(1113).t["6CLLyH"]);
        obj17.children = closure_10(targetUsername(5873).Button, obj18);
        isBadgeManagementEnabled = closure_10(tmp30, obj17);
      }
    }
    items16[1] = isBadgeManagementEnabled;
    obj11.children = items16;
    closure_11(isBadgeUnreadStateEnabled, obj11);
  }
  const intl = targetUsername(1113).intl;
  formatToPlainStringResult = intl.string(targetUsername(1113).t.UqnlQF);
  const tmpResult8 = targetUsername(15164);
}
