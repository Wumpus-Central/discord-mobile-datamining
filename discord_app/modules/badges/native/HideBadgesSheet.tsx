// discord_app/modules/badges/native/HideBadgesSheet.tsx
import _slicedToArray from "_slicedToArray";
import getSavedBadgeSettings from "getSavedBadgeSettings";
import { View } from "apexExperiment";
import handleFormOpen from "handleFormOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import initialize from "initialize";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
function HideBadgeTile(badge) {
  let onToggle;
  let size;
  badge = badge.badge;
  ({ size, onToggle } = badge);
  const tmp = createCacheKey();
  const items = [badge, onToggle];
  const callback = React.useCallback(() => {
    onToggle(badge);
  }, items);
  obj = { variant: "secondary", border: "none", radius: 16, style: items1, accessibilityRole: "switch", accessibilityState: obj, accessibilityLabel: badge.name, accessibilityHint: null, onPress: null, children: null };
  items1 = [tmp.tile, { width: size, height: size }];
  obj = { checked: !badge.hidden };
  const intl = badge(1236).intl;
  obj[7] = intl.string(badge(1236).t.TPp3Mq);
  obj[8] = callback;
  obj = { badge, size: null, style: null };
  obj[1] = badge(14043).BADGE_TILE_ICON_SIZE;
  let badgeIconHidden;
  if (badge.hidden) {
    badgeIconHidden = tmp.badgeIconHidden;
  }
  obj[2] = badgeIconHidden;
  const items2 = [closure_9(onToggle(14041), obj), ];
  const obj1 = { style: tmp.indicator, "aria-hidden": true, children: null };
  if (badge.hidden) {
    const obj2 = { size: "sm", color: null };
    obj2[1] = tmp7(712).colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT;
    let tmp6Result = tmp6(tmp4(8605).EyeSlashIcon, obj2);
  } else {
    const obj3 = { size: "sm", color: null };
    obj3[1] = tmp7(712).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
    tmp6Result = tmp6(tmp4(8607).EyeIcon, obj3);
  }
  obj1[2] = tmp6Result;
  items2[1] = closure_9(View, obj1);
  obj[9] = items2;
  return closure_10(badge(6292).Card, obj);
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { grid: null, tile: null, badgeIconHidden: null, indicator: null, message: null, messageText: null };
createCacheKey = { flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", justifyContent: "center", padding: 0 };
createCacheKey[2] = { opacity: 0.3 };
createCacheKey[3] = { position: "absolute", top: require("Themes").space.PX_8, end: require("Themes").space.PX_8, width: 32, height: 32, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
let obj1 = { position: "absolute", top: require("Themes").space.PX_8, end: require("Themes").space.PX_8, width: 32, height: 32, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
createCacheKey[4] = { alignItems: "center", justifyContent: "center", paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_32 };
createCacheKey[5] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { alignItems: "center", justifyContent: "center", paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_32 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/badges/native/HideBadgesSheet.tsx");

export default function HideBadgesSheet() {
  let handleFormOpen;
  let num;
  const tmp = createCacheKey();
  const bottom = stateFromStores(stateFromStoresArray[15])().bottom;
  let obj = stateFromStores(stateFromStoresArray[17]);
  const tenureBadgeHideable = obj.useConfig({ location: "HideBadgesSheet" }).tenureBadgeHideable;
  let obj1 = tenureBadgeHideable(stateFromStoresArray[18]);
  let items = [badgeTileSize];
  stateFromStores = obj1.useStateFromStores(items, () => {
    const currentUser = badgeTileSize.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = tenureBadgeHideable(stateFromStoresArray[18]);
  const items1 = [initialize];
  stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => initialize.getBadges(stateFromStores));
  let obj3 = tenureBadgeHideable(stateFromStoresArray[18]);
  const items2 = [handleFormOpen];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    pendingChanges = pendingChanges.getPendingChanges();
    return { pendingBadgeDisplayOrder: pendingChanges.pendingBadgeDisplayOrder, pendingBadgeHiddenBadges: pendingChanges.pendingBadgeHiddenBadges };
  });
  const pendingBadgeDisplayOrder = stateFromStoresObject.pendingBadgeDisplayOrder;
  const pendingBadgeHiddenBadges = stateFromStoresObject.pendingBadgeHiddenBadges;
  let obj4 = pendingBadgeHiddenBadges;
  const items3 = [stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = pendingBadgeHiddenBadges.useMemo(() => {
    let obj = tenureBadgeHideable(stateFromStoresArray[19]);
    obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettings(stateFromStoresArray, obj);
  }, items3);
  let obj5 = tenureBadgeHideable(stateFromStoresArray[18]);
  const items4 = [initialize];
  const stateFromStores1 = obj5.useStateFromStores(items4, () => {
    let hasCatalogForResult = null != stateFromStores;
    if (hasCatalogForResult) {
      hasCatalogForResult = initialize.hasCatalogFor(tmp);
    }
    return hasCatalogForResult;
  });
  let obj6 = tenureBadgeHideable(stateFromStoresArray[18]);
  const items5 = [initialize];
  const stateFromStores2 = obj6.useStateFromStores(items5, () => initialize.hasCatalogFetchErrorFor(stateFromStores));
  const items6 = [stateFromStores];
  const effect = pendingBadgeHiddenBadges.useEffect(() => {
    if (null != stateFromStores) {
      if (!tmp2) {
        const badgeDirectory = tenureBadgeHideable(stateFromStoresArray[20]).fetchBadgeDirectory(tmp);
        const obj2 = tenureBadgeHideable(stateFromStoresArray[20]);
      }
      const obj = initialize;
      tmp2 = initialize.hasCatalogFor(tmp) && !initialize.isCatalogStaleFor(tmp);
    }
  }, items6);
  const items7 = [memo, tenureBadgeHideable];
  const memo1 = pendingBadgeHiddenBadges.useMemo(() => {
    let obj = tenureBadgeHideable(stateFromStoresArray[21]);
    obj = { tenureBadgeHideable };
    return obj.getHideableBadges(memo, tenureBadgeHideable(stateFromStoresArray[21]).getUnhideableBadgeIds(obj));
  }, items7);
  [num, handleFormOpen] = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges.useState(null), 2);
  const callback = pendingBadgeHiddenBadges.useCallback((nativeEvent) => {
    pendingChanges(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj7 = tenureBadgeHideable(stateFromStoresArray[22]);
  const token = obj7.useToken(stateFromStores(stateFromStoresArray[8]).modules.mobile.SHEET_HANDLE_MARGIN_TOP);
  const tmp12 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges.useState(null), 2);
  const token1 = tenureBadgeHideable(stateFromStoresArray[22]).useToken(stateFromStores(stateFromStoresArray[8]).modules.mobile.SHEET_HANDLE_HEIGHT);
  const obj9 = tenureBadgeHideable(stateFromStoresArray[22]);
  const token2 = tenureBadgeHideable(stateFromStoresArray[22]).useToken(stateFromStores(stateFromStoresArray[8]).modules.mobile.SHEET_HANDLE_MARGIN_BOTTOM);
  const obj10 = tenureBadgeHideable(stateFromStoresArray[22]);
  const tmp17 = stateFromStores(stateFromStoresArray[23])();
  badgeTileSize = tenureBadgeHideable(stateFromStoresArray[12]).getBadgeTileSize(stateFromStores(stateFromStoresArray[16])().width);
  const rounded = Math.ceil(memo1.length / tenureBadgeHideable(stateFromStoresArray[12]).BADGE_GRID_COLUMNS);
  const sum = token + token1 + token2;
  const sum1 = sum + num;
  let result = rounded * badgeTileSize;
  const diff = rounded - 1;
  const sum2 = result + diff * tmp2(tmp3[8]).space.PX_16 + bottom;
  const sum3 = sum1 + (sum2 + tmp2(tmp3[8]).space.PX_16);
  if (rounded > 0) {
    if (sum3 <= tmp17) {
      const tmp26 = sum3;
    }
  }
  const items8 = [memo];
  initialize = obj4.useCallback((hidden) => {
    const found = memo.filter((hidden) => hidden.hidden);
    const set = new Set(found.map((badge_id) => badge_id.badge_id));
    if (hidden.hidden) {
      set.delete(hidden.badge_id);
    } else {
      set.add(hidden.badge_id);
    }
    const items = [...set];
    const result = tenureBadgeHideable(stateFromStoresArray[19]).setPendingBadgeHiddenBadges(items);
  }, items8);
  if (!stateFromStores1) {
    if (!stateFromStores2) {
      obj = { style: null, children: null };
      obj[0] = tmp.message;
      obj[1] = callback(tmp4(tmp3[24]).ActivityIndicator, { animating: true, size: "large" });
      obj = { scrollable: true, contentHeight: null, dismissAccessibilityLabel: null, header: null, children: null };
      obj[1] = tmp26;
      const intl2 = tmp4(tmp3[10]).intl;
      obj[2] = intl2.string(tmp4(tmp3[10]).t["9iIKHh"]);
      obj1 = { onLayout: null, children: null };
      obj1[0] = callback;
      obj2 = { title: null, subtitle: null };
      const intl3 = tmp4(tmp3[10]).intl;
      obj2[0] = intl3.string(tmp4(tmp3[10]).t["9iIKHh"]);
      const intl4 = tmp4(tmp3[10]).intl;
      obj2[1] = intl4.string(tmp4(tmp3[10]).t["Fp+l7E"]);
      obj1[1] = callback(tmp4(tmp3[27]).BottomSheetTitleHeader, obj2);
      obj[3] = callback(memo, obj1);
      obj3 = { contentContainerStyle: null, children: null };
      obj4 = { paddingBottom: null };
      obj4[0] = bottom + tmp2(tmp3[8]).space.PX_16;
      obj3[0] = obj4;
      obj3[1] = callback(memo, obj);
      obj[4] = callback(tmp4(tmp3[28]).BottomSheetScrollView, obj3);
      return callback(tmp4(tmp3[26]).BottomSheet, obj);
    }
  }
  if (0 !== memo1.length) {
    obj5 = { style: null, accessibilityRole: "list", children: null };
    obj5[0] = tmp.grid;
    obj5[2] = memo1.map((badge) => outer1_9(outer1_12, { badge, size: badgeTileSize, onToggle: initialize }, badge.badge_id));
    callback(memo, obj5);
    const tmp32 = callback;
    const tmp33 = memo;
  }
  obj6 = { style: tmp.message, accessibilityRole: "alert", children: null };
  obj7 = { variant: "text-md/normal", color: "text-muted", style: tmp.messageText, children: null };
  const intl = tmp4(tmp3[10]).intl;
  const t = tmp4(tmp3[10]).t;
  obj7[3] = intl.string(stateFromStores2 ? t["rTU7/z"] : t.QVHyhK);
  obj7 = tmp34(tmp4(tmp3[25]).Text, obj7);
  obj6[2] = obj7;
  callback(memo, obj6);
};