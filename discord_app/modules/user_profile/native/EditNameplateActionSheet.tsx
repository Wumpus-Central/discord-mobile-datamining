// === Module 14636: EditNameplateActionSheet ===

// Module 14636 (EditNameplateActionSheet)
import nativeDefault from "native" /* 576 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8164 */;
import useShopProductItems from "useShopProductItems" /* 8171 */;
import EditNameplateSection from "EditNameplateSection" /* 14638 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

require = fn;
function EditNameplateInner(user) {
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const guildId = user.guildId;
  let obj = user(guildId[20]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[21]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  let obj2 = user(guildId[21]);
  const items1 = [GuildMemberStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const tmp5 = setSelectedNameplate;
  const tmp6 = setSelectedNameplate(guildId[22])();
  obj = { pendingValue: selectedNameplate, userValue: null, guildValue: null, guildId: null };
  let nameplate;
  if (user != null) {
    const collectibles = user.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  obj.userValue = nameplate;
  let nameplate1;
  if (stateFromStores1 != null) {
    const collectibles2 = stateFromStores1.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj.guildValue = nameplate1;
  obj.guildId = guildId;
  const profilePreviewValue = user(guildId[23]).getProfilePreviewValue(obj);
  const items2 = [setSelectedNameplate, guildId];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return closure_2_10(EditNameplateSection.EditNameplateRow, { items, size, selectedSkuId, setSelectedNameplate, guildId });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(NameplateActionSheetPreview, { previewSkuId: skuId, user, guildId }), , ];
  obj = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj4 = user(guildId[23]);
  const tmp12 = closure_11;
  const tmp13 = closure_12;
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj.previewSkuId = skuId1;
  const intl = tmp(tmp2[18]).intl;
  obj.nitroJoinCTA = intl.string(user(guildId[18]).t["V+IE93"]);
  const intl2 = tmp(tmp2[18]).intl;
  obj.nitroUpgradeCTA = intl2.string(user(guildId[18]).t.a6SrkR);
  items3[1] = closure_10(tmp5(guildId[25]), obj);
  obj1 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedNameplate != null) {
    skuId2 = selectedNameplate.skuId;
  }
  obj2 = { children: null };
  obj1.selectedSkuId = skuId2;
  obj1.renderRow = callback;
  obj1.isFetching = stateFromStores;
  items3[2] = closure_10(user(guildId[26]).EditCollectiblesPickerList, obj1);
  obj2.children = items3;
  return tmp12(tmp13, obj2);
}
function NameplateActionSheetPreview(arg0) {
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_13();
  const tmp4 = purchase(8173)(previewSkuId);
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
    if (isNameplateRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  let obj = { style: tmp.nameplatePreviewContainer, accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
  if (null != memo) {
    const intl2 = require("util").intl;
    obj = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.YJig7C, obj);
    let tmp10 = _require;
  } else {
    const intl = require("util").intl;
    formatToPlainStringResult = intl.string(require("util").t.aqlsGS);
    tmp10 = _require;
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj = { style: tmp.nameplateGradientContainer, children: null };
  const items1 = [closure_10(tmp10(8817).NameplateDummyUserPreview, { width: 100 }), closure_10(tmp10(8817).NameplateDummyUserPreview, { width: 140 }), ];
  const obj1 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.1 }, end: { x: 0, y: 0.8 }, colors: null };
  const items2 = [tmp.nameplatePreviewGradient.color, ];
  let tmp2Result = tmp2(4987);
  items2[1] = "" + tmp.nameplatePreviewGradient.color + "00";
  obj1.colors = items2;
  items1[2] = closure_10(tmp2Result, obj1);
  obj.children = items1;
  const items3 = [closure_11(View, obj), closure_10(tmp10(11220).NameplatePreview, { nameplate: memo, user, guildId, animate: true, "aria-hidden": true }), ];
  const obj2 = { style: tmp.nameplateGradientContainer, children: null };
  const items4 = [closure_10(tmp10(8817).NameplateDummyUserPreview, { width: 140 }), closure_10(tmp10(8817).NameplateDummyUserPreview, { width: 100 }), ];
  const obj3 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.2 }, end: { x: 0, y: 0.9 }, colors: null };
  tmp2Result = tmp2(4987);
  const items5 = ["" + tmp.nameplatePreviewGradient.color + "00", tmp.nameplatePreviewGradient.color];
  obj3.colors = items5;
  items4[2] = closure_10(tmp2Result, obj3);
  obj2.children = items4;
  items3[2] = closure_11(View, obj2);
  obj.children = items3;
  return closure_11(View, obj);
}
const View = fn(17).View;
const isNameplateRecord = fn(1887).isNameplateRecord;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: null, bounceOffset: null, title: null, nameplatePreviewContainer: null, nameplateGradientContainer: null, nameplatePreviewGradient: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.container = createStyles;
createStyles.bounceOffset = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
createStyles.title = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
createStyles.nameplatePreviewContainer = { width: "80%", alignSelf: "center", justifyContent: "center", alignItems: "center" };
createStyles.nameplateGradientContainer = { width: "100%" };
let size = { position: "absolute", width: "100%", height: "100%", color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.nameplatePreviewGradient = size;
let closure_13 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default function EditNameplateActionSheet(arg0) {
  ({ user, currentNameplate, guildId } = arg0);
  const tmp = closure_13();
  let obj = guildId(8170);
  let obj1 = noop;
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
  const first = tmp4[0];
  let tmp6 = currentNameplate;
  if (undefined !== first) {
    tmp6 = first;
  }
  const analyticsLocations = first(7162)(first(7182).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  const items = [first, guildId];
  const callback = obj1.useCallback(() => {
    first(1242);
    const obj = { type: first(7182).EDIT_NAMEPLATE_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  const callback1 = obj1.useCallback((arg0) => {
    const obj = { guildId, nameplate: null };
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstNameplate");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    obj.nameplate = purchasedItem;
    obj.setPendingChanges(obj);
  }, items);
  obj = { value: analyticsLocations, children: null };
  obj = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  obj1 = { style: tmp.container, children: null };
  const items1 = [closure_10(View, { style: tmp.bounceOffset }), , ];
  const obj3 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = tmp2(1114).intl;
  obj3.children = intl.string(guildId(1114).t.BwdeM1);
  items1[1] = closure_10(guildId(4556).Text, obj3);
  items1[2] = closure_10(EditNameplateInner, { user, selectedNameplate: tmp6, setSelectedNameplate: tmp4[1], guildId });
  obj1.children = items1;
  const items2 = [closure_11(View, obj1), ];
  const obj4 = { user, currentSkuId: null, selectedSkuId: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const obj2 = { style: tmp.bounceOffset };
  const tmp12 = closure_11;
  const tmp7 = first;
  const tmp8 = first(7162);
  if (currentNameplate != null) {
    skuId = currentNameplate.skuId;
  }
  obj4.currentSkuId = skuId;
  let skuId1;
  if (tmp6 != null) {
    skuId1 = tmp6.skuId;
  }
  obj4.selectedSkuId = skuId1;
  obj4.onApply = callback1;
  obj4.analyticsLocations = analyticsLocations;
  obj4.analyticsSource = tmp7(7182).EDIT_NAMEPLATE_SHEET;
  items2[1] = closure_10(first(8172), obj4);
  obj.children = items2;
  obj.children = tmp12(guildId(7150).BottomSheet, obj);
  return closure_10(guildId(7162).AnalyticsLocationProvider, obj);
};