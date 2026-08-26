// discord_app/modules/user_profile/native/EditAvatarDecorationActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../collectibles/CollectiblesPurchaseStore.tsx";
import { isAvatarDecorationRecord } from "../../collectibles/records/AvatarDecorationRecord.tsx";
import closure_8 from "../../../stores/GuildMemberStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function EditAvatarDecorationInner(pendingAvatarSrc) {
  const user = pendingAvatarSrc.user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = pendingAvatarSrc);
  const guildId = pendingAvatarSrc.guildId;
  let flag = pendingAvatarSrc.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let obj = user(guildId[21]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  obj1 = user(guildId[22]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  let obj2 = user(guildId[22]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = closure_1_8.getMember(tmp, user.id);
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
    ({ items, size, selectedSkuId } = arg0);
    return closure_1_10(user(guildId[25]).EditAvatarDecorationRow, { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut: flag });
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
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
  let _require;
  let purchase;
  const tmp4 = purchase(8499)(previewSkuId.previewSkuId);
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
    if (closure_1_7(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  let obj = { style: callback4().avatarDisplayContainer, accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
  if (null != memo) {
    const intl2 = require("../../../intl/index.native.tsx").intl;
    obj = { a11y_text: null };
    obj[0] = memo.label;
    let formatToPlainStringResult = intl2.formatToPlainString(require("../../../intl/index.native.tsx").t.Do2lxE, obj);
    let tmp10 = _require;
  } else {
    const intl = require("../../../intl/index.native.tsx").intl;
    formatToPlainStringResult = intl.string(require("../../../intl/index.native.tsx").t["7hRBmC"]);
    tmp10 = _require;
  }
  obj[1] = formatToPlainStringResult;
  obj = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo, size: null };
  const tmp = callback4();
  const tmp6 = closure_11;
  const tmp7 = View;
  obj[4] = tmp10(1297).AvatarSizes.EDIT_AVATAR_DECORATION;
  const items1 = [callback2(purchase(8521), obj), callback2(purchase(8536), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo })];
  obj[4] = items1;
  return tmp6(tmp7, obj);
}
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { container: null, bounceOffset: null, title: null, avatarDisplayContainer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
createCacheKey[2] = { alignSelf: "center", color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
createCacheKey[3] = { flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", paddingVertical: 16 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignSelf: "center", color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default function EditAvatarDecorationActionSheet(arg0) {
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  let setPendingAvatarDecoration;
  let first;
  const tmp = callback4();
  const tmp4 = first(8483)({ analyticsLocations, isTryItOut, guildId });
  setPendingAvatarDecoration = tmp4.setPendingAvatarDecoration;
  let obj = setPendingAvatarDecoration(8496);
  obj = { userId: user.id, image: tmp4.pendingAvatar };
  let obj2 = React;
  const pendingAvatarSrc = obj.getPendingAvatarSrc(obj);
  const tmp7 = callback(React.useState(currentAvatarDecoration), 2);
  first = tmp7[0];
  let obj3 = setPendingAvatarDecoration(7613);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = first(5900)(analyticsLocations, tmp2(5920).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
  const items = [first, setPendingAvatarDecoration];
  callback = obj2.useCallback(() => {
    let obj = first(698);
    obj = { type: first(5920).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
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
  obj1 = { scrollable: true, ref: obj3.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  obj2 = { style: tmp.container, children: null };
  obj3 = { style: tmp.bounceOffset };
  const items1 = [callback2(View, obj3), , ];
  const obj4 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = tmp5(1236).intl;
  obj4[3] = intl.string(setPendingAvatarDecoration(1236).t.HykynS);
  items1[1] = callback2(setPendingAvatarDecoration(4440).Text, obj4);
  items1[2] = callback2(EditAvatarDecorationInner, { user, guildId, pendingAvatarSrc, selectedAvatarDecoration: first, setSelectedAvatarDecoration: tmp7[1], isTryItOut });
  obj2[1] = items1;
  const items2 = [callback3(View, obj2), ];
  const obj5 = { user, currentSkuId: null, selectedSkuId: null, isTryItOut: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const tmp13 = callback3;
  const tmp9 = first(5900);
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
  obj5[6] = first(5920).EDIT_AVATAR_DECORATION_SHEET;
  items2[1] = callback2(first(8498), obj5);
  obj1[4] = items2;
  obj[1] = tmp13(setPendingAvatarDecoration(5569).BottomSheet, obj1);
  obj6[0] = callback2(setPendingAvatarDecoration(5900).AnalyticsLocationProvider, obj);
  return callback2(setPendingAvatarDecoration(4172).ThemeContextProvider, obj6);
};