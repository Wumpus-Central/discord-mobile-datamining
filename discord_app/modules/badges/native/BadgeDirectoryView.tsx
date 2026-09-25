// === Module 10646: BadgeDirectoryView ===

// Module 10646 (BadgeDirectoryView)
import nativeDefault from "native" /* 576 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7635 */;
import BadgeUtils from "BadgeUtils" /* 10648 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 10649 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7630 */;

require = fn;
function BadgeSection(children) {
  ({ badges, tileSize: require, emptyText, onPressBadge: importDefault } = children);
  let map = closure_13();
  if (0 === badges.length) {
    if (null == emptyText) {
      return null;
    }
  }
  let obj = { style: map.section, children: null };
  let items = [closure_11(require("Text/Text").Text, { variant: "text-md/medium", color: "text-strong", children: children.title }), ];
  if (badges.length > 0) {
    const obj2 = { style: map.grid, children: null };
    map = badges.map;
    obj2.children = map((accessibilityLabel) => {
      const height = accessibilityLabel;
      const obj = {
        style: null,
        accessibilityRole: "button",
        accessibilityLabel: accessibilityLabel.name,
        onPress() {
          return importDefault(closure_0);
        },
        children: closure_1_11(require("BadgeCatalogIcon"), { badge: accessibilityLabel, size: 44 })
      };
      const items = [map.tile, ];
      const size = { width: height, height };
      items[1] = size;
      obj.style = items;
      return closure_1_11(closure_1_4, obj, accessibilityLabel.badge_id);
    });
    let tmp4Result = closure_11(closure_6, obj2);
  } else {
    const obj3 = { variant: "text-md/medium", color: "text-muted", children: emptyText };
    tmp4Result = closure_11(require("Text/Text").Text, obj3);
  }
  items[1] = tmp4Result;
  obj.children = items;
  closure_12(closure_6, obj);
  tmp6 = map;
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
let closure_10 = fn(10647).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, content: null, centered: null, section: null, grid: null, tile: null, footer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_48 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_48 };
obj2.centered = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_32 };
let obj5 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_32 };
obj2.section = { gap: nativeDefault.space.PX_16 };
let obj6 = { gap: nativeDefault.space.PX_16 };
obj2.grid = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
const obj7 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12 };
obj2.tile = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj8 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryView.tsx");

export default function BadgeDirectoryView(targetUserId) {
  let stateFromStores;
  let stateFromStores1;
  targetUserId = undefined;
  let stateFromStoresArray;
  let tmp = closure_13();
  let stringResult1 = stateFromStores1;
  const diff = stateFromStores(stateFromStores1[9])().width - 2 * stateFromStores(stateFromStores1[8]).space.PX_16;
  let result = 3 * stateFromStores(stateFromStores1[8]).space.PX_12;
  let items = [tmp.footer, { paddingBottom: stateFromStores(stateFromStores1[12])().bottom + stateFromStores(stateFromStores1[8]).space.PX_16 }];
  let obj = { paddingBottom: stateFromStores(stateFromStores1[12])().bottom + stateFromStores(stateFromStores1[8]).space.PX_16 };
  const items1 = [UserStore];
  stateFromStores = targetUserId(stateFromStores1[13]).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = targetUserId(stateFromStores1[13]);
  const items2 = [UserStore];
  stateFromStores1 = targetUserId(stateFromStores1[13]).useStateFromStores(items2, () => {
    let tmp2;
    if (null != targetUserId) {
      const user = UserStore.getUser(tmp);
      let username;
      if (user != null) {
        username = user.username;
      }
      tmp2 = username;
    }
    return tmp2;
  });
  noop = tmp8;
  let tmp9 = stateFromStores;
  if (null != targetUserId && targetUserId !== stateFromStores) {
    tmp9 = targetUserId;
  }
  targetUserId = tmp9;
  let obj3 = targetUserId(stateFromStores1[13]);
  const items3 = [BadgeDirectoryStore];
  const items4 = [tmp9];
  stateFromStoresArray = targetUserId(stringResult1[13]).useStateFromStoresArray(items3, () => {
    if (null != targetUserId) {
      let badges = BadgeDirectoryStore.getBadges(tmp);
    } else {
      badges = [];
    }
    return badges;
  }, items4);
  const tmp5Result = targetUserId(stringResult1[13]);
  const items5 = [BadgeDirectoryStore];
  const items6 = [tmp9];
  const stateFromStores2 = targetUserId(stringResult1[13]).useStateFromStores(items5, () => {
    let hasCatalogForResult = null != targetUserId;
    if (hasCatalogForResult) {
      hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp);
    }
    return hasCatalogForResult;
  }, items6);
  const tmp5Result3 = targetUserId(stringResult1[13]);
  const items7 = [BadgeDirectoryStore];
  const items8 = [tmp9];
  const items9 = [tmp9];
  const stateFromStores3 = targetUserId(stringResult1[13]).useStateFromStores(items7, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(targetUserId), items8);
  const effect = noop.useEffect(() => {
    if (null != targetUserId) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(targetUserId);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(targetUserId) && !BadgeDirectoryStore.isCatalogStaleFor(targetUserId);
    }
  }, items9);
  const items10 = [stateFromStores, null != targetUserId && targetUserId !== stateFromStores];
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
  }, items10);
  const items11 = [stateFromStoresArray];
  const memo = noop.useMemo(() => BadgeUtils.getDirectoryBadges(stateFromStoresArray), items11);
  const owned = memo.owned;
  if (null != targetUserId && targetUserId !== stateFromStores) {
    if (null != stateFromStores1) {
      const intl2 = tmp5(stringResult1[16]).intl;
      const obj4 = { username: stateFromStores1 };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp5(stringResult1[16]).t.EIcwoe, obj4);
    }
    const items12 = [tmp9];
    const callback = obj7.useCallback(() => {
      if (null != targetUserId) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp, { isRetry: true });
      }
    }, items12);
    const items13 = [tmp9, tmp8, stateFromStores1];
    const callback1 = obj7.useCallback(() => {
      const result = targetUserId(stateFromStores1[17]).closeBadgeDirectoryScreen();
      const obj = targetUserId(stateFromStores1[17]);
      const obj3 = { screen: constants.PROFILE_CUSTOMIZATION, params: { autoFocusElement: constants2.BADGES } };
      targetUserId(stateFromStores1[18]).openUserSettings(obj3);
    }, []);
    const callback2 = obj7.useCallback((badge_id) => {
      if (null != targetUserId) {
        const obj2 = { badgeId: badge_id.badge_id, displayedUserId: tmp, isViewingOtherUser, targetUsername: stateFromStores1 };
        const result = openBadgeDetailsSheet.openBadgeDetailsSheet(obj2);
      }
    }, items13);
    let string = obj7.useCallback(() => {
      const result = targetUserId(stateFromStores1[17]).closeBadgeDirectoryScreen();
      const obj = targetUserId(stateFromStores1[17]);
      const result1 = targetUserId(stateFromStores1[17]).openBadgeDirectoryScreen();
    }, []);
    if (!stateFromStores2) {
      if (stateFromStores3) {
        const obj5 = { style: tmp.centered, children: null };
        const obj6 = { variant: "text-md/semibold", children: null };
        const intl3 = tmp5(stringResult1[16]).intl;
        obj6.children = intl3.string(tmp5(stringResult1[16]).t.iufib1);
        const items14 = [closure_11(tmp5(stringResult1[10]).Text, obj6), , ];
        const obj8 = { variant: "text-md/normal", color: "text-subtle", children: null };
        const intl4 = tmp5(stringResult1[16]).intl;
        obj8.children = intl4.string(tmp5(stringResult1[16]).t.eAn6z2);
        items14[1] = closure_11(tmp5(stringResult1[10]).Text, obj8);
        const obj9 = { variant: "secondary", size: "sm", onPress: callback, text: null };
        const intl5 = tmp5(stringResult1[16]).intl;
        obj9.text = intl5.string(tmp5(stringResult1[16]).t["7NqTJn"]);
        items14[2] = closure_11(tmp5(stringResult1[20]).Button, obj9);
        obj5.children = items14;
        return closure_12(closure_6, obj5);
      }
    }
    if (!stateFromStores2) {
      const obj10 = { style: tmp.centered, children: closure_11(tmp5(stringResult1[21]).ActivityIndicator, {}) };
      closure_11(closure_6, obj10);
    }
    let result1 = (diff - result) / 4;
    const obj11 = { style: tmp.container, children: null };
    const obj12 = { contentContainerStyle: tmp.content, children: null };
    const obj13 = { title: formatToPlainStringResult, badges: owned, tileSize: result1, emptyText: null, onPressBadge: null };
    let stringResult;
    if (!tmp8) {
      const intl6 = tmp5(stringResult1[16]).intl;
      stringResult = intl6.string(tmp5(stringResult1[16]).t.Qno0jg);
    }
    obj13.emptyText = stringResult;
    obj13.onPressBadge = callback2;
    const items15 = [closure_11(BadgeSection, obj13), ];
    let tmp30Result = !tmp8;
    if (!tmp8) {
      const obj14 = { title: null, badges: null, tileSize: null, onPressBadge: null };
      const intl7 = tmp5(stringResult1[16]).intl;
      obj14.title = intl7.string(tmp5(stringResult1[16]).t["0YzU//"]);
      obj14.badges = tmp16;
      obj14.tileSize = result1;
      obj14.onPressBadge = callback2;
      tmp30Result = closure_11(BadgeSection, obj14);
    }
    items15[1] = tmp30Result;
    obj12.children = items15;
    const items16 = [closure_12(stateFromStoresArray, obj12), ];
    if (tmp8) {
      const obj15 = { style: items, children: null };
      const obj16 = { variant: "secondary", onPress: string, text: null };
      const intl9 = tmp5(stringResult1[16]).intl;
      string = intl9.string;
      stringResult1 = string(tmp5(stringResult1[16]).t.msyp90);
      obj16.text = stringResult1;
      items = closure_11(tmp5(stringResult1[20]).Button, obj16);
      obj15.children = items;
      let tmp30Result2 = closure_11(closure_6, obj15);
    } else {
      tmp30Result2 = owned.length > 0;
      if (tmp30Result2) {
        const obj17 = { style: items, children: null };
        const obj18 = { variant: "secondary", onPress: callback1, text: null };
        const intl8 = tmp5(stringResult1[16]).intl;
        obj18.text = intl8.string(tmp5(stringResult1[16]).t["6CLLyH"]);
        obj17.children = closure_11(tmp5(stringResult1[20]).Button, obj18);
        tmp30Result2 = closure_11(closure_6, obj17);
      }
    }
    items16[1] = tmp30Result2;
    obj11.children = items16;
    closure_12(closure_6, obj11);
  }
  const intl = tmp5(stringResult1[16]).intl;
  formatToPlainStringResult = intl.string(tmp5(stringResult1[16]).t.UqnlQF);
  const tmp5Result4 = targetUserId(stringResult1[13]);
};