// === Module 8426: EditAvatarDecorationActionSheet ===

// Module 8426 (EditAvatarDecorationActionSheet)
import nativeDefault from "native" /* 576 */;
import useShopProductItems from "useShopProductItems" /* 8439 */;
import EditAvatarDecorationSection from "EditAvatarDecorationSection" /* 13471 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7797 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;

require = fn;
function EditAvatarDecorationInner(pendingAvatarSrc) {
  const user = pendingAvatarSrc.user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = pendingAvatarSrc);
  const guildId = pendingAvatarSrc.guildId;
  let flag = pendingAvatarSrc.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const getOrFetchCollectiblesCategoriesAndPurchases = user(guildId[22]).useGetOrFetchCollectiblesCategoriesAndPurchases();
  const obj = user(guildId[22]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = user(guildId[23]).useStateFromStores(items, () => isFetching.isFetching);
  const obj2 = user(guildId[23]);
  const tmp6 = setSelectedAvatarDecoration(guildId[24])();
  const items1 = [GuildMemberStore];
  const stateFromStores1 = user(guildId[23]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj3 = user(guildId[23]);
  const obj5 = { pendingValue: selectedAvatarDecoration, userValue: null, guildValue: null, guildId: null };
  let avatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  obj5.userValue = avatarDecoration;
  let avatarDecoration1;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj5.guildValue = avatarDecoration1;
  obj5.guildId = guildId;
  const profilePreviewValue = user(guildId[25]).getProfilePreviewValue(obj5);
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
  const obj6 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj4 = user(guildId[25]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj6.previewSkuId = skuId1;
  const intl = tmp(tmp2[20]).intl;
  obj6.nitroJoinCTA = intl.string(user(guildId[20]).t.FyBDiY);
  const intl2 = tmp(tmp2[20]).intl;
  obj6.nitroUpgradeCTA = intl2.string(user(guildId[20]).t.e1UiOa);
  items3[1] = closure_10(setSelectedAvatarDecoration(guildId[27]), obj6);
  const obj7 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedAvatarDecoration != null) {
    skuId2 = selectedAvatarDecoration.skuId;
  }
  const obj8 = { children: null };
  obj7.selectedSkuId = skuId2;
  obj7.renderRow = callback;
  obj7.isFetching = stateFromStores;
  items3[2] = closure_10(user(guildId[28]).EditCollectiblesPickerList, obj7);
  obj8.children = items3;
  return closure_11(closure_12, obj8);
}
function AvatarDecorationSectionPreview(previewSkuId) {
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
  let purchase;
  const tmp4 = purchase(8441)(previewSkuId.previewSkuId);
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
  const obj = { style: closure_13().avatarDisplayContainer, accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
  if (null != memo) {
    const intl2 = require("util").intl;
    const obj2 = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.Do2lxE, obj2);
    let tmp10 = _require;
  } else {
    const intl = require("util").intl;
    formatToPlainStringResult = intl.string(require("util").t["7hRBmC"]);
    tmp10 = _require;
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const obj3 = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo, size: null };
  const tmp = closure_13();
  obj3.size = tmp10(1177).AvatarSizes.EDIT_AVATAR_DECORATION;
  const items1 = [closure_10(purchase(8525), obj3), closure_10(purchase(13478), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo })];
  obj.children = items1;
  return closure_11(View, obj);
}
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7787).isAvatarDecorationRecord;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: null, avatarDisplayContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.title = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
obj2.avatarDisplayContainer = { flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", paddingVertical: 16 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default function EditAvatarDecorationActionSheet(arg0) {
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  let selectedAvatarDecoration;
  const tmp = closure_13();
  const tmp4 = selectedAvatarDecoration(8427)({ analyticsLocations, isTryItOut, guildId });
  const setPendingAvatarDecoration = tmp4.setPendingAvatarDecoration;
  const pendingAvatarSrc = setPendingAvatarDecoration(8437).getPendingAvatarSrc({ userId: user.id, image: tmp4.pendingAvatar });
  const tmp7 = _slicedToArray(noop.useState(currentAvatarDecoration), 2);
  selectedAvatarDecoration = tmp7[0];
  let obj = setPendingAvatarDecoration(8437);
  const obj2 = { userId: user.id, image: tmp4.pendingAvatar };
  const obj4 = setPendingAvatarDecoration(8438);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = selectedAvatarDecoration(7402)(analyticsLocations, tmp2(7422).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
  const items = [selectedAvatarDecoration, setPendingAvatarDecoration];
  const callback = noop.useCallback(() => {
    const obj = first(1241);
    obj.track(constants.OPEN_POPOUT, { type: first(7422).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true });
  }, []);
  const callback1 = noop.useCallback((arg0) => {
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstAvatarDecoration");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    setPendingAvatarDecoration(purchasedItem);
  }, items);
  const obj5 = { value: analyticsLocations2, children: null };
  const obj6 = { scrollable: true, ref: obj4.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  const obj7 = { style: tmp.container, children: null };
  const items1 = [closure_10(View, { style: tmp.bounceOffset }), , ];
  const obj9 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = tmp5(1115).intl;
  obj9.children = intl.string(setPendingAvatarDecoration(1115).t.HykynS);
  items1[1] = closure_10(setPendingAvatarDecoration(4752).Text, obj9);
  items1[2] = closure_10(EditAvatarDecorationInner, { user, guildId, pendingAvatarSrc, selectedAvatarDecoration, setSelectedAvatarDecoration: tmp7[1], isTryItOut });
  obj7.children = items1;
  const items2 = [closure_11(View, obj7), ];
  const obj10 = { user, currentSkuId: null, selectedSkuId: null, isTryItOut: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const obj8 = { style: tmp.bounceOffset };
  const tmp9 = selectedAvatarDecoration(7402);
  if (currentAvatarDecoration != null) {
    skuId = currentAvatarDecoration.skuId;
  }
  obj10.currentSkuId = skuId;
  let skuId1;
  if (selectedAvatarDecoration != null) {
    skuId1 = selectedAvatarDecoration.skuId;
  }
  const obj11 = { children: null };
  obj10.selectedSkuId = skuId1;
  obj10.isTryItOut = isTryItOut;
  obj10.onApply = callback1;
  obj10.analyticsLocations = analyticsLocations2;
  obj10.analyticsSource = selectedAvatarDecoration(7422).EDIT_AVATAR_DECORATION_SHEET;
  items2[1] = closure_10(selectedAvatarDecoration(8440), obj10);
  obj6.children = items2;
  obj5.children = closure_11(setPendingAvatarDecoration(7390).BottomSheet, obj6);
  obj11.children = closure_10(setPendingAvatarDecoration(7402).AnalyticsLocationProvider, obj5);
  return closure_10(setPendingAvatarDecoration(4466).ThemeContextProvider, obj11);
};