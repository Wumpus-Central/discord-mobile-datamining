// === Module 11421: BadgeDirectoryView ===

// Module 11421 (BadgeDirectoryView)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8760 */;
import BadgeUtils from "BadgeUtils" /* 11423 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 11426 */;
import noop from "module_19" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11422 */;
import UserStore from "UserStore" /* 1384 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8755 */;

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
  let items = [closure_10(Text_Text.Heading, { variant: "text-md/medium", color: "text-strong", children: children.title }), ];
  if (badges.length > 0) {
    const obj2 = { style: map.grid, children: null };
    map = badges.map;
    obj2.children = map((badge) => {
      const height = badge;
      let hasItem = set.has(badge.badge_id);
      const obj = { style: null, accessibilityLabel: null, onPress: null, children: null };
      const items = [map.tile, ];
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
      const items1 = [closure_1_10(require("BadgeCatalogIcon"), { badge, size: 44 }), ];
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
    let obj3 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
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
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null, centered: null, section: null, grid: null, tile: null, badgeIndicator: null, footer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_48 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_48 };
obj2.centered = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_32 };
let obj5 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_32 };
obj2.section = { gap: nativeDefault.space.PX_16 };
let obj6 = { gap: nativeDefault.space.PX_16 };
obj2.grid = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
const obj7 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
obj2.tile = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let size = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND };
obj2.badgeIndicator = size;
let obj8 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
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
  let stringResult1 = dependencyMap;
  let isBadgeManagementEnabled = targetUsername(11416).useIsBadgeManagementEnabled({ location: "BadgeDirectoryView" });
  const tmp4 = closure_12();
  const diff = stateFromStores(1492)().width - 2 * stateFromStores(575).space.PX_16;
  let result = 3 * stateFromStores(575).space.PX_12;
  let items = [tmp4.footer, ];
  let obj = targetUsername(11416);
  items[1] = { paddingBottom: stateFromStores(1626)().bottom + stateFromStores(575).space.PX_16 };
  let obj2 = { paddingBottom: stateFromStores(1626)().bottom + stateFromStores(575).space.PX_16 };
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
  stateFromStoresArray = targetUsername(504).useStateFromStoresArray(items2, () => {
    if (null != targetUserId) {
      let badges = BadgeDirectoryStore.getBadges(tmp);
    } else {
      badges = [];
    }
    return badges;
  }, items3);
  const tmpResult = targetUsername(504);
  const items4 = [BadgeDirectoryStore];
  const items5 = [tmp9];
  const stateFromStores1 = targetUsername(504).useStateFromStores(items4, () => {
    let hasCatalogForResult = null != targetUserId;
    if (hasCatalogForResult) {
      hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp);
    }
    return hasCatalogForResult;
  }, items5);
  const tmpResult4 = targetUsername(504);
  const items6 = [BadgeDirectoryStore];
  const items7 = [tmp9];
  const items8 = [tmp9];
  const stateFromStores2 = targetUsername(504).useStateFromStores(items6, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId), items7);
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
  const tmpResult5 = targetUsername(504);
  const obj4 = { badges: stateFromStoresArray, enabled: null };
  let tmp30Result = !tmp8;
  obj4.enabled = tmp30Result;
  const badgeIndicatorIds = targetUsername(11424).useBadgeDirectoryBadgeIndicators(obj4).badgeIndicatorIds;
  if (null != targetUserId && targetUserId !== stateFromStores) {
    if (null != targetUsername) {
      const intl2 = targetUsername(1114).intl;
      const obj5 = { username: targetUsername };
      let formatToPlainStringResult = intl2.formatToPlainString(targetUsername(1114).t.EIcwoe, obj5);
    }
    const items11 = [tmp9];
    const callback = obj7.useCallback(() => {
      if (null != targetUserId) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp, { isRetry: true });
      }
    }, items11);
    const items12 = [tmp9, tmp8, targetUsername];
    const callback1 = obj7.useCallback(() => {
      const result = targetUsername(isViewingOtherUser[20]).closeBadgeDirectoryScreen();
      state.setState({ pendingCustomizeBadgesSheet: true });
      const obj = targetUsername(isViewingOtherUser[20]);
      targetUsername(isViewingOtherUser[21]).openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION });
    }, []);
    const callback2 = obj7.useCallback((badge_id) => {
      if (null != targetUserId) {
        const obj2 = { badgeId: badge_id.badge_id, displayedUserId: tmp, isViewingOtherUser, targetUsername };
        const result = openBadgeDetailsSheet.openBadgeDetailsSheet(obj2);
      }
    }, items12);
    let string = obj7.useCallback(() => {
      const result = targetUsername(isViewingOtherUser[20]).closeBadgeDirectoryScreen();
      const obj = targetUsername(isViewingOtherUser[20]);
      const result1 = targetUsername(isViewingOtherUser[20]).openBadgeDirectoryScreen();
    }, []);
    if (!stateFromStores1) {
      if (stateFromStores2) {
        const obj6 = { style: tmp4.centered, children: null };
        const obj8 = { variant: "text-md/semibold", children: null };
        const intl3 = targetUsername(1114).intl;
        obj8.children = intl3.string(targetUsername(1114).t.iufib1);
        const items13 = [closure_10(targetUsername(5619).Text, obj8), , ];
        const obj9 = { variant: "text-md/normal", color: "text-subtle", children: null };
        const intl4 = targetUsername(1114).intl;
        obj9.children = intl4.string(targetUsername(1114).t.eAn6z2);
        items13[1] = closure_10(targetUsername(5619).Text, obj9);
        const obj10 = { variant: "secondary", size: "sm", onPress: callback, text: null };
        const intl5 = targetUsername(1114).intl;
        obj10.text = intl5.string(targetUsername(1114).t["7NqTJn"]);
        items13[2] = closure_10(targetUsername(5629).Button, obj10);
        obj6.children = items13;
        return closure_11(closure_5, obj6);
      }
    }
    if (!stateFromStores1) {
      const obj11 = { style: tmp4.centered, children: closure_10(targetUsername(6947).ActivityIndicator, {}) };
      closure_10(closure_5, obj11);
    }
    let result1 = (diff - result) / 4;
    const obj12 = { style: tmp4.container, children: null };
    const obj13 = { alwaysBounceVertical: false, contentContainerStyle: tmp4.content, children: null };
    const obj14 = { title: formatToPlainStringResult, badges: owned, tileSize: result1, emptyText: null, onPressBadge: null, badgeIndicatorIds: null };
    let stringResult;
    if (!tmp8) {
      const intl6 = targetUsername(1114).intl;
      stringResult = intl6.string(targetUsername(1114).t.Qno0jg);
    }
    obj14.emptyText = stringResult;
    obj14.onPressBadge = callback2;
    obj14.badgeIndicatorIds = badgeIndicatorIds;
    const items14 = [closure_10(BadgeSection, obj14), ];
    if (!tmp8) {
      const obj15 = { title: null, badges: null, tileSize: null, onPressBadge: null, badgeIndicatorIds: null };
      const intl7 = targetUsername(1114).intl;
      obj15.title = intl7.string(targetUsername(1114).t["0YzU//"]);
      obj15.badges = earnable;
      obj15.tileSize = result1;
      obj15.onPressBadge = callback2;
      obj15.badgeIndicatorIds = badgeIndicatorIds;
      tmp30Result = closure_10(BadgeSection, obj15);
    }
    items14[1] = tmp30Result;
    obj13.children = items14;
    const items15 = [closure_11(stateFromStoresArray, obj13), ];
    if (tmp8) {
      const obj16 = { style: items, children: null };
      const obj17 = { variant: "secondary", onPress: string, text: null };
      const intl9 = targetUsername(1114).intl;
      string = intl9.string;
      stringResult1 = string(targetUsername(1114).t.msyp90);
      obj17.text = stringResult1;
      items = closure_10(targetUsername(5629).Button, obj17);
      obj16.children = items;
      isBadgeManagementEnabled = closure_10(closure_5, obj16);
    } else {
      if (isBadgeManagementEnabled) {
        isBadgeManagementEnabled = owned.length > 0;
      }
      if (isBadgeManagementEnabled) {
        const obj18 = { style: items, children: null };
        const obj19 = { variant: "secondary", onPress: callback1, text: null };
        const intl8 = targetUsername(1114).intl;
        obj19.text = intl8.string(targetUsername(1114).t["6CLLyH"]);
        obj18.children = closure_10(targetUsername(5629).Button, obj19);
        isBadgeManagementEnabled = closure_10(closure_5, obj18);
      }
    }
    items15[1] = isBadgeManagementEnabled;
    obj12.children = items15;
    closure_11(closure_5, obj12);
  }
  const intl = targetUsername(1114).intl;
  formatToPlainStringResult = intl.string(targetUsername(1114).t.UqnlQF);
  const tmpResult6 = targetUsername(11424);
};