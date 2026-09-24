// === Module 14998: EditProfileEffectActionSheet ===

// Module 14998 (EditProfileEffectActionSheet)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7515 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8512 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8515 */;
import useShopProductItems from "useShopProductItems" /* 8519 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8535 */;
import EditProfileEffectSection from "EditProfileEffectSection" /* 15000 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7887 */;

require = fn;
function EditProfileEffectInner(user) {
  user = user.user;
  ({ selectedProfileEffect, setSelectedProfileEffect } = user);
  const guildId = user.guildId;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const getOrFetchCollectiblesCategoriesAndPurchases = user(guildId[21]).useGetOrFetchCollectiblesCategoriesAndPurchases();
  const obj = user(guildId[21]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = user(guildId[22]).useStateFromStores(items, () => isFetching.isFetching);
  const obj2 = user(guildId[22]);
  const tmp7 = setSelectedProfileEffect(guildId[9])(user.id, guildId);
  const tmp6 = setSelectedProfileEffect(guildId[23])();
  const obj4 = { pendingValue: selectedProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (tmp7 != null) {
    const _userProfile = tmp7._userProfile;
    if (_userProfile != null) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  obj4.userValue = profileEffect;
  let profileEffect1;
  if (tmp7 != null) {
    const _guildMemberProfile = tmp7._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj4.guildValue = profileEffect1;
  obj4.guildId = guildId;
  const profilePreviewValue = user(guildId[24]).getProfilePreviewValue(obj4);
  const items1 = [user];
  const effect = noop.useEffect(() => {
    if (!tmp) {
      maybeFetchUserProfileDefault(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true, dispatchWait: true });
    }
    tmp = null == user || user.isNonUserBot();
  }, items1);
  const items2 = [setSelectedProfileEffect, guildId, flag];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return React7(EditProfileEffectSection.EditProfileEffectRow, { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut: flag });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_9(ProfileEffectSectionPreview, { previewSkuId: skuId, user, guildId }), , ];
  const obj5 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj3 = user(guildId[24]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj5.previewSkuId = skuId1;
  const intl = tmp(tmp2[19]).intl;
  obj5.nitroJoinCTA = intl.string(user(guildId[19]).t.pertpd);
  const intl2 = tmp(tmp2[19]).intl;
  obj5.nitroUpgradeCTA = intl2.string(user(guildId[19]).t["5eotIZ"]);
  items3[1] = closure_9(setSelectedProfileEffect(guildId[27]), obj5);
  const obj6 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedProfileEffect != null) {
    skuId2 = selectedProfileEffect.skuId;
  }
  const obj7 = { children: null };
  obj6.selectedSkuId = skuId2;
  obj6.renderRow = callback;
  obj6.isFetching = stateFromStores;
  items3[2] = closure_9(user(guildId[28]).EditCollectiblesPickerList, obj6);
  obj7.children = items3;
  return closure_10(closure_11, obj7);
}
function ProfileEffectSectionPreview(arg0) {
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_12();
  const tmp2 = purchase(8521)(previewSkuId);
  const product = tmp2.product;
  c0 = product;
  purchase = tmp2.purchase;
  const items = [purchase, product];
  const obj = { style: tmp.previewContainer, children: null };
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
    if (isProfileEffectRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  const items1 = [closure_9(purchase(11462), { user, guildId, profileEffect: memo, maxWidth: 250 }), ];
  const obj2 = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj2.colors = items2;
  items1[1] = closure_9(purchase(5285), obj2);
  obj.children = items1;
  return closure_10(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const isProfileEffectRecord = fn(7878).isProfileEffectRecord;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: null, previewContainer: null, previewGradient: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.title = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
obj2.previewContainer = { overflow: "hidden", height: 300, alignItems: "center" };
let obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.bottom = -1;
obj5.color = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj2.previewGradient = obj5;
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditProfileEffectActionSheet.tsx");

export default function EditProfileEffectActionSheet(isTryItOut) {
  ({ user, currentProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  dependencyMap = undefined;
  let selectedProfileEffect;
  let memo;
  let tmp = closure_12();
  let str = user.id;
  if (str == null) {
    str = "";
  }
  const tmp4Result = isTryItOut(8534)(str);
  dependencyMap = tmp4Result;
  const tmp6 = selectedProfileEffect(memo.useState(currentProfileEffect), 2);
  selectedProfileEffect = tmp6[0];
  const tmp4 = isTryItOut(8534);
  let obj = guildId(8518);
  const analyticsLocations = isTryItOut(7495)(tmp2(7515).EDIT_PROFILE_EFFECT_SHEET).analyticsLocations;
  const items = [guildId, tmp4Result];
  memo = memo.useMemo(() => {
    const obj = { type: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET, guild_id: guildId, profile_has_nitro_customization: null };
    let tmp = null != closure_2;
    if (tmp) {
      let result;
      if (closure_2 != null) {
        result = closure_2.hasPremiumCustomization();
      }
      tmp = result;
    }
    obj.profile_has_nitro_customization = tmp;
    return obj;
  }, items);
  const items1 = [memo];
  const items2 = [selectedProfileEffect, guildId, isTryItOut];
  const callback = memo.useCallback(() => {
    const obj2 = {};
    const merged = Object.assign(memo);
    obj2.is_fullscreen = true;
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj2);
  }, items1);
  const callback1 = memo.useCallback((arg0) => {
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstProfileEffect");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    if (isTryItOut) {
      const result = UserProfileActionCreators.setTryItOutProfileEffect(purchasedItem);
      const tmpResult = UserProfileActionCreators;
    } else {
      const obj2 = { guildId, profileEffect: purchasedItem };
      UserProfileSettingsActionCreators.setPendingChanges(obj2);
      const tmpResult2 = UserProfileSettingsActionCreators;
    }
  }, items2);
  let obj2 = { value: analyticsLocations, children: null };
  const obj3 = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  const obj4 = { style: tmp.container, children: null };
  const items3 = [closure_9(closure_5, { style: tmp.bounceOffset }), , ];
  const obj6 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = guildId(1115).intl;
  obj6.children = intl.string(guildId(1115).t["/6nv6N"]);
  items3[1] = closure_9(guildId(4825).Text, obj6);
  items3[2] = closure_9(EditProfileEffectInner, { user, selectedProfileEffect, setSelectedProfileEffect: tmp6[1], guildId, isTryItOut });
  obj4.children = items3;
  const items4 = [closure_10(closure_5, obj4), ];
  const obj7 = { user, currentSkuId: null, selectedSkuId: null, isTryItOut: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const obj5 = { style: tmp.bounceOffset };
  const tmp2Result = isTryItOut(7495);
  if (currentProfileEffect != null) {
    skuId = currentProfileEffect.skuId;
  }
  obj7.currentSkuId = skuId;
  let skuId1;
  if (selectedProfileEffect != null) {
    skuId1 = selectedProfileEffect.skuId;
  }
  obj7.selectedSkuId = skuId1;
  obj7.isTryItOut = isTryItOut;
  obj7.onApply = callback1;
  obj7.analyticsLocations = analyticsLocations;
  obj7.analyticsSource = isTryItOut(7515).EDIT_PROFILE_EFFECT_SHEET;
  items4[1] = closure_9(isTryItOut(8520), obj7);
  obj3.children = items4;
  obj2.children = closure_10(guildId(7483).BottomSheet, obj3);
  return closure_9(guildId(7495).AnalyticsLocationProvider, obj2);
};