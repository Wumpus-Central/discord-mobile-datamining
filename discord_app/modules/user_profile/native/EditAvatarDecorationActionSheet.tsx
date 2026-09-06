// === Module 8158: EditAvatarDecorationActionSheet ===

// Module 8158 (EditAvatarDecorationActionSheet)
import nativeDefault from "native" /* 576 */;
import useShopProductItems from "useShopProductItems" /* 8171 */;
import EditAvatarDecorationSection from "EditAvatarDecorationSection" /* 13169 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

require = fn;
function EditAvatarDecorationInner(pendingAvatarSrc) {
  const user = pendingAvatarSrc.user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = pendingAvatarSrc);
  const guildId = pendingAvatarSrc.guildId;
  let flag = pendingAvatarSrc.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let obj = user(guildId[22]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[23]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  let obj2 = user(guildId[23]);
  const items1 = [GuildMemberStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const tmp6 = setSelectedAvatarDecoration(guildId[24])();
  obj = { pendingValue: selectedAvatarDecoration, userValue: null, guildValue: null, guildId: null };
  let avatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  obj.userValue = avatarDecoration;
  let avatarDecoration1;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj.guildValue = avatarDecoration1;
  obj.guildId = guildId;
  const profilePreviewValue = user(guildId[25]).getProfilePreviewValue(obj);
  const items2 = [setSelectedAvatarDecoration, guildId, flag];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return closure_2_10(EditAvatarDecorationSection.EditAvatarDecorationRow, { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut: flag });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(AvatarDecorationSectionPreview, { previewSkuId: skuId, user, guildId, pendingAvatarSrc: pendingAvatarSrc.pendingAvatarSrc }), , ];
  obj = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj4 = user(guildId[25]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj.previewSkuId = skuId1;
  const intl = tmp(tmp2[20]).intl;
  obj.nitroJoinCTA = intl.string(user(guildId[20]).t.FyBDiY);
  const intl2 = tmp(tmp2[20]).intl;
  obj.nitroUpgradeCTA = intl2.string(user(guildId[20]).t.e1UiOa);
  items3[1] = closure_10(setSelectedAvatarDecoration(guildId[27]), obj);
  obj1 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedAvatarDecoration != null) {
    skuId2 = selectedAvatarDecoration.skuId;
  }
  obj2 = { children: null };
  obj1.selectedSkuId = skuId2;
  obj1.renderRow = callback;
  obj1.isFetching = stateFromStores;
  items3[2] = closure_10(user(guildId[28]).EditCollectiblesPickerList, obj1);
  obj2.children = items3;
  return closure_11(closure_12, obj2);
}
function AvatarDecorationSectionPreview(previewSkuId) {
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
  let purchase;
  const tmp4 = purchase(8173)(previewSkuId.previewSkuId);
  const product = tmp4.product;
  _require = product;
  purchase = tmp4.purchase;
  const items = [purchase, product];
  const memo = noop.useMemo(() => {
    let first;
    if (_undefined != null) {
      first = _undefined.items[0];
    }
    if (first == null) {
      let first1;
      if (purchase != null) {
        first1 = purchase.items[0];
      }
      first = first1;
    }
    let tmp3 = null;
    if (isAvatarDecorationRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  let obj = { style: closure_13().avatarDisplayContainer, accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
  if (null != memo) {
    const intl2 = require("util").intl;
    obj = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.Do2lxE, obj);
    let tmp10 = _require;
  } else {
    const intl = require("util").intl;
    formatToPlainStringResult = intl.string(require("util").t["7hRBmC"]);
    tmp10 = _require;
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo, size: null };
  const tmp = closure_13();
  obj.size = tmp10(1178).AvatarSizes.EDIT_AVATAR_DECORATION;
  const items1 = [closure_10(purchase(8257), obj), closure_10(purchase(13176), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo })];
  obj.children = items1;
  return closure_11(View, obj);
}
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7547).isAvatarDecorationRecord;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: null, bounceOffset: null, title: null, avatarDisplayContainer: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.container = createStyles;
createStyles.bounceOffset = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
createStyles.title = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
createStyles.avatarDisplayContainer = { flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", paddingVertical: 16 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default function EditAvatarDecorationActionSheet(arg0) {
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  let selectedAvatarDecoration;
  const tmp = closure_13();
  const tmp4 = selectedAvatarDecoration(8159)({ analyticsLocations, isTryItOut, guildId });
  const setPendingAvatarDecoration = tmp4.setPendingAvatarDecoration;
  setPendingAvatarDecoration(8169);
  let obj = { userId: user.id, image: tmp4.pendingAvatar };
  let obj2 = noop;
  const pendingAvatarSrc = obj.getPendingAvatarSrc(obj);
  const tmp7 = _slicedToArray(noop.useState(currentAvatarDecoration), 2);
  selectedAvatarDecoration = tmp7[0];
  let obj3 = setPendingAvatarDecoration(8170);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = selectedAvatarDecoration(7162)(analyticsLocations, tmp2(7182).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
  const items = [selectedAvatarDecoration, setPendingAvatarDecoration];
  const callback = obj2.useCallback(() => {
    first(1242);
    const obj = { type: first(7182).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  const callback1 = obj2.useCallback((arg0) => {
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstAvatarDecoration");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    setPendingAvatarDecoration(purchasedItem);
  }, items);
  obj = { value: analyticsLocations2, children: null };
  const obj1 = { scrollable: true, ref: obj3.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  obj2 = { style: tmp.container, children: null };
  obj3 = { style: tmp.bounceOffset };
  const items1 = [closure_10(View, obj3), , ];
  const obj4 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = tmp5(1114).intl;
  obj4.children = intl.string(setPendingAvatarDecoration(1114).t.HykynS);
  items1[1] = closure_10(setPendingAvatarDecoration(4556).Text, obj4);
  items1[2] = closure_10(EditAvatarDecorationInner, { user, guildId, pendingAvatarSrc, selectedAvatarDecoration, setSelectedAvatarDecoration: tmp7[1], isTryItOut });
  obj2.children = items1;
  const items2 = [closure_11(View, obj2), ];
  const obj5 = { user, currentSkuId: null, selectedSkuId: null, isTryItOut: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const tmp9 = selectedAvatarDecoration(7162);
  if (currentAvatarDecoration != null) {
    skuId = currentAvatarDecoration.skuId;
  }
  obj5.currentSkuId = skuId;
  let skuId1;
  if (selectedAvatarDecoration != null) {
    skuId1 = selectedAvatarDecoration.skuId;
  }
  const obj6 = { children: null };
  obj5.selectedSkuId = skuId1;
  obj5.isTryItOut = isTryItOut;
  obj5.onApply = callback1;
  obj5.analyticsLocations = analyticsLocations2;
  obj5.analyticsSource = selectedAvatarDecoration(7182).EDIT_AVATAR_DECORATION_SHEET;
  items2[1] = closure_10(selectedAvatarDecoration(8172), obj5);
  obj1.children = items2;
  obj.children = closure_11(setPendingAvatarDecoration(7150).BottomSheet, obj1);
  obj6.children = closure_10(setPendingAvatarDecoration(7162).AnalyticsLocationProvider, obj);
  return closure_10(setPendingAvatarDecoration(4271).ThemeContextProvider, obj6);
};