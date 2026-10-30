// === Module 16446: EditProfileEffectActionSheet ===

// Module 16446 (EditProfileEffectActionSheet)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8727 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8730 */;
import useShopProductItems from "useShopProductItems" /* 8734 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8750 */;
import EditProfileEffectSection from "EditProfileEffectSection" /* 16448 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7728 */;

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
  const tmp6 = setSelectedProfileEffect(guildId[23])();
  const shouldPinCollectiblesEditPreview = user(guildId[24]).useShouldPinCollectiblesEditPreview();
  const tmp8 = setSelectedProfileEffect(guildId[9])(user.id, guildId);
  const obj3 = user(guildId[24]);
  const obj5 = { pendingValue: selectedProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (tmp8 != null) {
    const _userProfile = tmp8._userProfile;
    if (_userProfile != null) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  obj5.userValue = profileEffect;
  let profileEffect1;
  if (tmp8 != null) {
    const _guildMemberProfile = tmp8._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj5.guildValue = profileEffect1;
  obj5.guildId = guildId;
  const profilePreviewValue = user(guildId[25]).getProfilePreviewValue(obj5);
  const items1 = [user];
  const effect = noop.useEffect(() => {
    if (!tmp) {
      maybeFetchUserProfileDefault(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
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
  const items3 = [closure_9(ProfileEffectSectionPreview, { previewSkuId: skuId, user, guildId }), ];
  const obj6 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj4 = user(guildId[25]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  const obj7 = { children: null };
  obj6.previewSkuId = skuId1;
  const intl = tmp(tmp2[19]).intl;
  obj6.nitroJoinCTA = intl.string(user(guildId[19]).t.pertpd);
  const intl2 = tmp(tmp2[19]).intl;
  obj6.nitroUpgradeCTA = intl2.string(user(guildId[19]).t["5eotIZ"]);
  items3[1] = closure_9(setSelectedProfileEffect(guildId[28]), obj6);
  obj7.children = items3;
  const tmp14Result = closure_10(closure_11, obj7);
  let tmp22 = null;
  if (shouldPinCollectiblesEditPreview) {
    tmp22 = tmp14Result;
  }
  const items4 = [tmp22, ];
  const obj8 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null, ListHeaderComponent: null };
  let skuId2;
  if (selectedProfileEffect != null) {
    skuId2 = selectedProfileEffect.skuId;
  }
  obj8.selectedSkuId = skuId2;
  obj8.renderRow = callback;
  obj8.isFetching = stateFromStores;
  let tmp24 = null;
  if (!shouldPinCollectiblesEditPreview) {
    tmp24 = tmp14Result;
  }
  const obj9 = { children: null };
  obj8.ListHeaderComponent = tmp24;
  items4[1] = closure_9(user(guildId[29]).EditCollectiblesPickerList, obj8);
  obj9.children = items4;
  return closure_10(closure_11, obj9);
}
function ProfileEffectSectionPreview(arg0) {
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_12();
  const tmp2 = purchase(8736)(previewSkuId);
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
  const items1 = [closure_9(purchase(11355), { user, guildId, profileEffect: memo, maxWidth: 250 }), ];
  const obj2 = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj2.colors = items2;
  items1[1] = closure_9(purchase(5582), obj2);
  obj.children = items1;
  return closure_10(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const isProfileEffectRecord = fn(7719).isProfileEffectRecord;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { flex: 1 }, previewContainer: { overflow: "hidden", height: 300, alignItems: "center" }, previewGradient: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.bottom = -1;
obj3.color = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj2.previewGradient = obj3;
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditProfileEffectActionSheet.tsx");

export default function EditProfileEffectActionSheet(isTryItOut) {
  ({ user, currentProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  dependencyMap = undefined;
  let selectedProfileEffect;
  let memo;
  let str = user.id;
  let tmp = closure_12();
  if (str == null) {
    str = "";
  }
  const tmp4Result = isTryItOut(8749)(str);
  dependencyMap = tmp4Result;
  const tmp6 = selectedProfileEffect(memo.useState(currentProfileEffect), 2);
  selectedProfileEffect = tmp6[0];
  const tmp4 = isTryItOut(8749);
  let obj = guildId(8733);
  const analyticsLocations = isTryItOut(7320)(tmp2(7345).EDIT_PROFILE_EFFECT_SHEET).analyticsLocations;
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
  const obj3 = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, header: null, children: null };
  const obj4 = { title: null };
  const intl = guildId(1114).intl;
  obj4.title = intl.string(guildId(1114).t["/6nv6N"]);
  obj3.header = closure_9(guildId(7315).BottomSheetTitleHeader, obj4);
  const tmp2Result = isTryItOut(7320);
  const items3 = [closure_9(closure_5, { style: tmp.container, children: closure_9(EditProfileEffectInner, { user, selectedProfileEffect, setSelectedProfileEffect: tmp6[1], guildId, isTryItOut }) }), ];
  const obj6 = { user, currentSkuId: null, selectedSkuId: null, isTryItOut: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const obj5 = { style: tmp.container, children: closure_9(EditProfileEffectInner, { user, selectedProfileEffect, setSelectedProfileEffect: tmp6[1], guildId, isTryItOut }) };
  if (currentProfileEffect != null) {
    skuId = currentProfileEffect.skuId;
  }
  obj6.currentSkuId = skuId;
  let skuId1;
  if (selectedProfileEffect != null) {
    skuId1 = selectedProfileEffect.skuId;
  }
  obj6.selectedSkuId = skuId1;
  obj6.isTryItOut = isTryItOut;
  obj6.onApply = callback1;
  obj6.analyticsLocations = analyticsLocations;
  obj6.analyticsSource = isTryItOut(7345).EDIT_PROFILE_EFFECT_SHEET;
  items3[1] = closure_9(isTryItOut(8735), obj6);
  obj3.children = items3;
  obj2.children = closure_10(guildId(5267).BottomSheet, obj3);
  return closure_9(guildId(7320).AnalyticsLocationProvider, obj2);
};