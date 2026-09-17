// discord_app/modules/user_profile/native/EditNameplateActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import useShopProductItems from "../../collectibles/hooks/useShopProductItems.tsx";
import EditNameplateSection from "../../collectibles/nameplates/native/EditNameplateSection.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesPurchaseStore from "../../collectibles/CollectiblesPurchaseStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
function EditNameplateInner(user) {
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const guildId = user.guildId;
  const getOrFetchCollectiblesCategoriesAndPurchases = user(
    guildId[20],
  ).useGetOrFetchCollectiblesCategoriesAndPurchases();
  const obj = user(guildId[20]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = user(guildId[21]).useStateFromStores(items, () => isFetching.isFetching);
  const obj2 = user(guildId[21]);
  const tmp6 = setSelectedNameplate(guildId[22])();
  const items1 = [GuildMemberStore];
  const stateFromStores1 = user(guildId[21]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj3 = user(guildId[21]);
  const obj5 = { pendingValue: selectedNameplate, userValue: null, guildValue: null, guildId: null };
  let nameplate;
  if (user != null) {
    const collectibles = user.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  obj5.userValue = nameplate;
  let nameplate1;
  if (stateFromStores1 != null) {
    const collectibles2 = stateFromStores1.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj5.guildValue = nameplate1;
  obj5.guildId = guildId;
  const profilePreviewValue = user(guildId[23]).getProfilePreviewValue(obj5);
  const items2 = [setSelectedNameplate, guildId];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return closure_2_10(EditNameplateSection.EditNameplateRow, {
      items,
      size,
      selectedSkuId,
      setSelectedNameplate,
      guildId,
    });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(NameplateActionSheetPreview, { previewSkuId: skuId, user, guildId }), ,];
  const obj6 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj4 = user(guildId[23]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj6.previewSkuId = skuId1;
  const intl = tmp(tmp2[18]).intl;
  obj6.nitroJoinCTA = intl.string(user(guildId[18]).t["V+IE93"]);
  const intl2 = tmp(tmp2[18]).intl;
  obj6.nitroUpgradeCTA = intl2.string(user(guildId[18]).t.a6SrkR);
  items3[1] = closure_10(setSelectedNameplate(guildId[25]), obj6);
  const obj7 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedNameplate != null) {
    skuId2 = selectedNameplate.skuId;
  }
  const obj8 = { children: null };
  obj7.selectedSkuId = skuId2;
  obj7.renderRow = callback;
  obj7.isFetching = stateFromStores;
  items3[2] = closure_10(user(guildId[26]).EditCollectiblesPickerList, obj7);
  obj8.children = items3;
  return closure_11(closure_12, obj8);
}
function NameplateActionSheetPreview(arg0) {
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_13();
  const tmp4 = purchase(8321)(previewSkuId);
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
  const obj = {
    style: tmp.nameplatePreviewContainer,
    accessibilityLabel: null,
    accessibilityRole: "image",
    accessible: true,
    children: null,
  };
  if (null != memo) {
    const intl2 = require("util").intl;
    const obj2 = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.YJig7C, obj2);
    let tmp10 = _require;
  } else {
    const intl = require("util").intl;
    formatToPlainStringResult = intl.string(require("util").t.aqlsGS);
    tmp10 = _require;
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const obj3 = { style: tmp.nameplateGradientContainer, children: null };
  const items1 = [
    closure_10(tmp10(8974).NameplateDummyUserPreview, { width: 100 }),
    closure_10(tmp10(8974).NameplateDummyUserPreview, { width: 140 }),
  ];
  const obj4 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.1 }, end: { x: 0, y: 0.8 }, colors: null };
  const items2 = [tmp.nameplatePreviewGradient.color, "" + tmp.nameplatePreviewGradient.color + "00"];
  obj4.colors = items2;
  items1[2] = closure_10(purchase(5074), obj4);
  obj3.children = items1;
  const items3 = [
    closure_11(View, obj3),
    closure_10(tmp10(11374).NameplatePreview, { nameplate: memo, user, guildId, animate: true, "aria-hidden": true }),
  ];
  const obj5 = { style: tmp.nameplateGradientContainer, children: null };
  const items4 = [
    closure_10(tmp10(8974).NameplateDummyUserPreview, { width: 140 }),
    closure_10(tmp10(8974).NameplateDummyUserPreview, { width: 100 }),
  ];
  const obj6 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.2 }, end: { x: 0, y: 0.9 }, colors: null };
  const tmp2Result = purchase(5074);
  const items5 = ["" + tmp.nameplatePreviewGradient.color + "00", tmp.nameplatePreviewGradient.color];
  obj6.colors = items5;
  items4[2] = closure_10(purchase(5074), obj6);
  obj5.children = items4;
  items3[2] = closure_11(View, obj5);
  obj.children = items3;
  return closure_11(View, obj);
}
const View = fn(17).View;
const isNameplateRecord = fn(1888).isNameplateRecord;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 },
  title: null,
  nameplatePreviewContainer: null,
  nameplateGradientContainer: null,
  nameplatePreviewGradient: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.title = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
obj2.nameplatePreviewContainer = { width: "80%", alignSelf: "center", justifyContent: "center", alignItems: "center" };
obj2.nameplateGradientContainer = { width: "100%" };
let size = {
  position: "absolute",
  width: "100%",
  height: "100%",
  color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj2.nameplatePreviewGradient = size;
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default function EditNameplateActionSheet(arg0) {
  ({ user, currentNameplate, guildId } = arg0);
  const tmp = closure_13();
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
  const first = tmp4[0];
  let tmp6 = currentNameplate;
  if (undefined !== first) {
    tmp6 = first;
  }
  let obj = guildId(8318);
  const tmp7 = first;
  const analyticsLocations = first(7276)(first(7296).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  const items = [first, guildId];
  const callback = noop.useCallback(() => {
    const obj = first(1241);
    obj.track(constants.OPEN_POPOUT, { type: first(7296).EDIT_NAMEPLATE_SHEET, is_fullscreen: true });
  }, []);
  const callback1 = noop.useCallback((arg0) => {
    const obj2 = { guildId, nameplate: null };
    const obj = UserProfileSettingsActionCreators;
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstNameplate");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    obj2.nameplate = purchasedItem;
    obj.setPendingChanges(obj2);
  }, items);
  const obj3 = { value: analyticsLocations, children: null };
  const obj4 = {
    scrollable: true,
    ref: obj.useBottomSheetRef().bottomSheetRef,
    onExpand: callback,
    startExpanded: true,
    children: null,
  };
  const obj5 = { style: tmp.container, children: null };
  const items1 = [closure_10(View, { style: tmp.bounceOffset }), ,];
  const obj7 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = guildId(1115).intl;
  obj7.children = intl.string(guildId(1115).t.BwdeM1);
  items1[1] = closure_10(guildId(4636).Text, obj7);
  items1[2] = closure_10(EditNameplateInner, { user, selectedNameplate: tmp6, setSelectedNameplate: tmp4[1], guildId });
  obj5.children = items1;
  const items2 = [closure_11(View, obj5)];
  const obj8 = {
    user,
    currentSkuId: null,
    selectedSkuId: null,
    onApply: null,
    analyticsLocations: null,
    analyticsSource: null,
  };
  let skuId;
  const obj6 = { style: tmp.bounceOffset };
  const tmp8 = first(7276);
  if (currentNameplate != null) {
    skuId = currentNameplate.skuId;
  }
  obj8.currentSkuId = skuId;
  let skuId1;
  if (tmp6 != null) {
    skuId1 = tmp6.skuId;
  }
  obj8.selectedSkuId = skuId1;
  obj8.onApply = callback1;
  obj8.analyticsLocations = analyticsLocations;
  obj8.analyticsSource = tmp7(7296).EDIT_NAMEPLATE_SHEET;
  items2[1] = closure_10(first(8320), obj8);
  obj4.children = items2;
  obj3.children = closure_11(guildId(7264).BottomSheet, obj4);
  return closure_10(guildId(7276).AnalyticsLocationProvider, obj3);
}
