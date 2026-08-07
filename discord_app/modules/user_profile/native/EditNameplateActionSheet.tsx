// discord_app/modules/user_profile/native/EditNameplateActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import useFetchPurchases from "useFetchPurchases";
import { View } from "getSystemLocale";
import map from "map";
import { isNameplateRecord } from "fromServer";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import { AnalyticEvents } from "ME";
import jsxProd from "useNameplateSections";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c10;
let closure_12;
let unpackModuleId;
const require = arg1;
function EditNameplateInner(user) {
  let selectedNameplate;
  let setSelectedNameplate;
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const guildId = user.guildId;
  let obj = user(guildId[19]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[20]);
  const items = [map];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  let obj2 = user(guildId[20]);
  const items1 = [trackCommunicationDisabled];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = outer1_8.getMember(tmp, user.id);
    }
    return member;
  });
  const tmp5 = setSelectedNameplate;
  const tmp6 = setSelectedNameplate(guildId[21])();
  obj = { pendingValue: selectedNameplate, userValue: null, guildValue: null, guildId: null };
  let nameplate;
  if (user != null) {
    const collectibles = user.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  obj[1] = nameplate;
  let nameplate1;
  if (stateFromStores1 != null) {
    const collectibles2 = stateFromStores1.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj[2] = nameplate1;
  obj[3] = guildId;
  const profilePreviewValue = user(guildId[22]).getProfilePreviewValue(obj);
  const items2 = [setSelectedNameplate, guildId];
  let skuId;
  const callback = React.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    let size;
    ({ items, size, selectedSkuId } = arg0);
    return outer1_10(user(guildId[23]).EditNameplateRow, { items, size, selectedSkuId, setSelectedNameplate, guildId });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(NameplateActionSheetPreview, { previewSkuId: skuId, user, guildId }), , ];
  obj = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj4 = user(guildId[22]);
  const tmp12 = closure_11;
  const tmp13 = closure_12;
  const tmp15 = NameplateActionSheetPreview;
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj[1] = skuId1;
  const intl = tmp(tmp2[17]).intl;
  obj[2] = intl.string(user(guildId[17]).t["V+IE93"]);
  const intl2 = tmp(tmp2[17]).intl;
  obj[3] = intl2.string(user(guildId[17]).t.a6SrkR);
  items3[1] = closure_10(tmp5(guildId[24]), obj);
  obj1 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedNameplate != null) {
    skuId2 = selectedNameplate.skuId;
  }
  obj2 = { children: null };
  obj1[1] = skuId2;
  obj1[2] = callback;
  obj1[3] = stateFromStores;
  items3[2] = closure_10(user(guildId[25]).EditCollectiblesPickerList, obj1);
  obj2[0] = items3;
  return tmp12(tmp13, obj2);
}
function NameplateActionSheetPreview(arg0) {
  let guildId;
  let previewSkuId;
  let user;
  let _require;
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = createCacheKey();
  const tmp4 = purchase(8218)(previewSkuId);
  const product = tmp4.product;
  _require = product;
  purchase = tmp4.purchase;
  const items = [purchase, product];
  const memo = React.useMemo(() => {
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
    if (outer1_7(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  let obj = { style: tmp.nameplatePreviewContainer, accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
  if (null != memo) {
    const intl2 = _getSystemLocale.intl;
    obj = { a11y_text: null };
    obj[0] = memo.label;
    let formatToPlainStringResult = intl2.formatToPlainString(_getSystemLocale.t.YJig7C, obj);
    let tmp10 = _require;
  } else {
    const intl = _getSystemLocale.intl;
    formatToPlainStringResult = intl.string(_getSystemLocale.t.aqlsGS);
    tmp10 = _require;
  }
  obj[1] = formatToPlainStringResult;
  obj = { style: tmp.nameplateGradientContainer, children: null };
  const items1 = [callback2(tmp10(9324).NameplateDummyUserPreview, { width: 100 }), callback2(tmp10(9324).NameplateDummyUserPreview, { width: 140 }), ];
  const obj1 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.1 }, end: { x: 0, y: 0.8 }, colors: null };
  const items2 = [tmp.nameplatePreviewGradient.color, ];
  let tmp2Result = tmp2(4723);
  items2[1] = "" + tmp.nameplatePreviewGradient.color + "00";
  obj1[3] = items2;
  items1[2] = callback2(tmp2Result, obj1);
  obj[1] = items1;
  const items3 = [closure_11(View, obj), callback2(tmp10(10091).NameplatePreview, { nameplate: memo, user, guildId, animate: true, "aria-hidden": true }), ];
  const obj2 = { style: tmp.nameplateGradientContainer, children: null };
  const items4 = [callback2(tmp10(9324).NameplateDummyUserPreview, { width: 140 }), callback2(tmp10(9324).NameplateDummyUserPreview, { width: 100 }), ];
  const obj3 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.2 }, end: { x: 0, y: 0.9 }, colors: null };
  tmp2Result = tmp2(4723);
  const items5 = ["" + tmp.nameplatePreviewGradient.color + "00", tmp.nameplatePreviewGradient.color];
  obj3[3] = items5;
  items4[2] = callback2(tmp2Result, obj3);
  obj2[1] = items4;
  items3[2] = closure_11(View, obj2);
  obj[4] = items3;
  return closure_11(View, obj);
}
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { container: null, bounceOffset: null, title: null, nameplatePreviewContainer: null, nameplateGradientContainer: null, nameplatePreviewGradient: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
createCacheKey[2] = { alignSelf: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
createCacheKey[3] = { width: "80%", alignSelf: "center", justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { width: "100%" };
let obj1 = { alignSelf: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
createCacheKey[5] = { position: "absolute", width: "100%", height: "100%", color: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { position: "absolute", width: "100%", height: "100%", color: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default function EditNameplateActionSheet(arg0) {
  let currentNameplate;
  let guildId;
  let user;
  ({ user, currentNameplate, guildId } = arg0);
  let first;
  let tmp = createCacheKey();
  let obj = guildId(7344);
  let obj1 = React;
  const tmp4 = callback(React.useState(undefined), 2);
  first = tmp4[0];
  let tmp6 = currentNameplate;
  if (undefined !== first) {
    tmp6 = first;
  }
  const analyticsLocations = first(5668)(first(5688).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  const items = [first, guildId];
  callback = obj1.useCallback(() => {
    let obj = first(698);
    obj = { type: first(5688).EDIT_NAMEPLATE_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  const callback1 = obj1.useCallback(() => {
    let obj = guildId(outer1_2[14]);
    obj = { guildId, nameplate: null };
    let tmp = first;
    if (first == null) {
      tmp = null;
    }
    obj[1] = tmp;
    obj.setPendingChanges(obj);
  }, items);
  obj = { value: analyticsLocations, children: null };
  obj = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  obj1 = { style: tmp.container, children: null };
  const items1 = [callback2(View, { style: tmp.bounceOffset }), , ];
  const obj3 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = tmp2(1236).intl;
  obj3[3] = intl.string(guildId(1236).t.BwdeM1);
  items1[1] = callback2(guildId(4298).Text, obj3);
  items1[2] = callback2(EditNameplateInner, { user, selectedNameplate: tmp6, setSelectedNameplate: tmp4[1], guildId });
  obj1[1] = items1;
  const items2 = [callback3(View, obj1), ];
  const obj4 = { user, currentSkuId: null, selectedSkuId: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const obj2 = { style: tmp.bounceOffset };
  const tmp12 = callback3;
  const tmp7 = first;
  const tmp8 = first(5668);
  if (currentNameplate != null) {
    skuId = currentNameplate.skuId;
  }
  obj4[1] = skuId;
  let skuId1;
  if (tmp6 != null) {
    skuId1 = tmp6.skuId;
  }
  obj4[2] = skuId1;
  obj4[3] = callback1;
  obj4[4] = analyticsLocations;
  obj4[5] = tmp7(5688).EDIT_NAMEPLATE_SHEET;
  items2[1] = callback2(first(8217), obj4);
  obj[4] = items2;
  obj[1] = tmp12(guildId(5396).BottomSheet, obj);
  return callback2(guildId(5668).AnalyticsLocationProvider, obj);
};