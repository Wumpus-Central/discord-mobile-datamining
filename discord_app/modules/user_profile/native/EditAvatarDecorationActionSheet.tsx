import set from "set";
import getSystemLocale from "getSystemLocale";
import { View } from "Background";
import map from "map";
import { isAvatarDecorationRecord } from "fromServer";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import { AnalyticEvents } from "ME";
import jsxProd from "useFetchPurchases";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let unpackModuleId;
const require = arg1;
function EditAvatarDecorationInner(pendingAvatarSrc) {
  let selectedAvatarDecoration;
  let setSelectedAvatarDecoration;
  const user = pendingAvatarSrc.user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = pendingAvatarSrc);
  const guildId = pendingAvatarSrc.guildId;
  let flag = pendingAvatarSrc.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let obj = user(guildId[21]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[22]);
  const items = [map];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  let obj2 = user(guildId[22]);
  const items1 = [trackCommunicationDisabled];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = outer1_8.getMember(tmp, user.id);
    }
    return member;
  });
  const tmp5 = setSelectedAvatarDecoration;
  const tmp6 = setSelectedAvatarDecoration(guildId[23])();
  obj = { pendingValue: selectedAvatarDecoration, userValue: null, guildValue: null, guildId: null };
  let avatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  obj[1] = avatarDecoration;
  let avatarDecoration1;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj[2] = avatarDecoration1;
  obj[3] = guildId;
  const profilePreviewValue = user(guildId[24]).getProfilePreviewValue(obj);
  const items2 = [setSelectedAvatarDecoration, guildId, flag];
  let skuId;
  const callback = React.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    let size;
    ({ items, size, selectedSkuId } = arg0);
    return outer1_10(user(guildId[25]).EditAvatarDecorationRow, { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut: flag });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(AvatarDecorationSectionPreview, { previewSkuId: skuId, user, guildId, pendingAvatarSrc: pendingAvatarSrc.pendingAvatarSrc }), , ];
  obj = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj4 = user(guildId[24]);
  const tmp12 = closure_11;
  const tmp13 = closure_12;
  const tmp15 = AvatarDecorationSectionPreview;
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj[1] = skuId1;
  const intl = tmp(tmp2[19]).intl;
  obj[2] = intl.string(user(guildId[19]).t.FyBDiY);
  const intl2 = tmp(tmp2[19]).intl;
  obj[3] = intl2.string(user(guildId[19]).t.e1UiOa);
  items3[1] = closure_10(tmp5(guildId[26]), obj);
  obj1 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedAvatarDecoration != null) {
    skuId2 = selectedAvatarDecoration.skuId;
  }
  obj2 = { children: null };
  obj1[1] = skuId2;
  obj1[2] = callback;
  obj1[3] = stateFromStores;
  items3[2] = closure_10(user(guildId[27]).EditCollectiblesPickerList, obj1);
  obj2[0] = items3;
  return tmp12(tmp13, obj2);
}
function AvatarDecorationSectionPreview(previewSkuId) {
  let guildId;
  let pendingAvatarSrc;
  let user;
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
  let _require;
  let purchase;
  const tmp4 = purchase(8088)(previewSkuId.previewSkuId);
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
  let obj = { style: createCacheKey().avatarDisplayContainer, accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
  if (null != memo) {
    const intl2 = _require(1236).intl;
    obj = { a11y_text: null };
    obj[0] = memo.label;
    let formatToPlainStringResult = intl2.formatToPlainString(_require(1236).t.Do2lxE, obj);
    let tmp10 = _require;
  } else {
    const intl = _require(1236).intl;
    formatToPlainStringResult = intl.string(_require(1236).t["7hRBmC"]);
    tmp10 = _require;
  }
  obj[1] = formatToPlainStringResult;
  obj = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo, size: null };
  const tmp = createCacheKey();
  const tmp6 = closure_11;
  const tmp7 = View;
  obj[4] = tmp10(1297).AvatarSizes.EDIT_AVATAR_DECORATION;
  const items1 = [callback2(purchase(8110), obj), callback2(purchase(8124), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo })];
  obj[4] = items1;
  return tmp6(tmp7, obj);
}
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { container: null, bounceOffset: null, title: null, avatarDisplayContainer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
createCacheKey[2] = { alignSelf: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
createCacheKey[3] = { flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", paddingVertical: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignSelf: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default function EditAvatarDecorationActionSheet(arg0) {
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let isTryItOut;
  let user;
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  let setPendingAvatarDecoration;
  let first;
  const tmp = createCacheKey();
  const tmp4 = first(8071)({ analyticsLocations, isTryItOut, guildId });
  setPendingAvatarDecoration = tmp4.setPendingAvatarDecoration;
  let obj = setPendingAvatarDecoration(8085);
  obj = { userId: user.id, image: tmp4.pendingAvatar };
  let obj2 = React;
  const pendingAvatarSrc = obj.getPendingAvatarSrc(obj);
  const tmp7 = callback(React.useState(currentAvatarDecoration), 2);
  first = tmp7[0];
  let obj3 = setPendingAvatarDecoration(7325);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = first(5610)(analyticsLocations, tmp2(5630).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
  const items = [first, setPendingAvatarDecoration];
  callback = obj2.useCallback(() => {
    let obj = first(698);
    obj = { type: first(5630).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  const callback1 = obj2.useCallback(() => {
    let tmp2 = first;
    if (first == null) {
      tmp2 = null;
    }
    setPendingAvatarDecoration(tmp2);
  }, items);
  obj = { value: analyticsLocations2, children: null };
  const obj1 = { scrollable: true, ref: obj3.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  obj2 = { style: tmp.container, children: null };
  obj3 = { style: tmp.bounceOffset };
  const items1 = [callback2(View, obj3), , ];
  const obj4 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = tmp5(1236).intl;
  obj4[3] = intl.string(setPendingAvatarDecoration(1236).t.HykynS);
  items1[1] = callback2(setPendingAvatarDecoration(4281).Text, obj4);
  items1[2] = callback2(EditAvatarDecorationInner, { user, guildId, pendingAvatarSrc, selectedAvatarDecoration: first, setSelectedAvatarDecoration: tmp7[1], isTryItOut });
  obj2[1] = items1;
  const items2 = [callback3(View, obj2), ];
  const obj5 = { user, currentSkuId: null, selectedSkuId: null, isTryItOut: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const tmp13 = callback3;
  const tmp9 = first(5610);
  if (currentAvatarDecoration != null) {
    skuId = currentAvatarDecoration.skuId;
  }
  obj5[1] = skuId;
  let skuId1;
  if (first != null) {
    skuId1 = first.skuId;
  }
  const obj6 = { children: null };
  obj5[2] = skuId1;
  obj5[3] = isTryItOut;
  obj5[4] = callback1;
  obj5[5] = analyticsLocations2;
  obj5[6] = first(5630).EDIT_AVATAR_DECORATION_SHEET;
  items2[1] = callback2(first(8087), obj5);
  obj1[4] = items2;
  obj[1] = tmp13(setPendingAvatarDecoration(5338).BottomSheet, obj1);
  obj6[0] = callback2(setPendingAvatarDecoration(5610).AnalyticsLocationProvider, obj);
  return callback2(setPendingAvatarDecoration(3997).ThemeContextProvider, obj6);
};