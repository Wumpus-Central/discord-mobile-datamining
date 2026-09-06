// discord_app/modules/user_profile/native/EditProfileEffectActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import UserProfileActionCreators from "../UserProfileActionCreators.tsx";
import useShopProductItems from "../../collectibles/hooks/useShopProductItems.tsx";
import maybeFetchUserProfileDefault from "../maybeFetchUserProfile.tsx";
import EditProfileEffectSection from "../../collectibles/profile_effects/native/EditProfileEffectSection.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesPurchaseStore from "../../collectibles/CollectiblesPurchaseStore.tsx";

require = fn;
function EditProfileEffectInner(user) {
  user = user.user;
  ({ selectedProfileEffect, setSelectedProfileEffect } = user);
  const guildId = user.guildId;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let obj = user(guildId[21]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[22]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  const tmp7 = setSelectedProfileEffect(guildId[9])(user.id, guildId);
  let obj2 = user(guildId[24]);
  obj = { pendingValue: selectedProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (tmp7 != null) {
    const _userProfile = tmp7._userProfile;
    if (_userProfile != null) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  obj.userValue = profileEffect;
  let profileEffect1;
  if (tmp7 != null) {
    const _guildMemberProfile = tmp7._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj.guildValue = profileEffect1;
  obj.guildId = guildId;
  const profilePreviewValue = obj2.getProfilePreviewValue(obj);
  const items1 = [user];
  const effect = noop.useEffect(() => {
    if (!tmp) {
      maybeFetchUserProfileDefault(user.id, user.getAvatarURL(null, 80), {
        withMutualGuilds: true,
        dispatchWait: true,
      });
    }
    tmp = null == user || user.isNonUserBot();
  }, items1);
  const items2 = [setSelectedProfileEffect, guildId, flag];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return React7(EditProfileEffectSection.EditProfileEffectRow, {
      items,
      size,
      selectedSkuId,
      setSelectedProfileEffect,
      guildId,
      isTryItOut: flag,
    });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_9(ProfileEffectSectionPreview, { previewSkuId: skuId, user, guildId }), ,];
  obj = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const tmp6 = setSelectedProfileEffect(guildId[23])();
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj.previewSkuId = skuId1;
  const intl = tmp(tmp2[19]).intl;
  obj.nitroJoinCTA = intl.string(user(guildId[19]).t.pertpd);
  const intl2 = tmp(tmp2[19]).intl;
  obj.nitroUpgradeCTA = intl2.string(user(guildId[19]).t["5eotIZ"]);
  items3[1] = closure_9(setSelectedProfileEffect(guildId[27]), obj);
  obj1 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedProfileEffect != null) {
    skuId2 = selectedProfileEffect.skuId;
  }
  obj2 = { children: null };
  obj1.selectedSkuId = skuId2;
  obj1.renderRow = callback;
  obj1.isFetching = stateFromStores;
  items3[2] = closure_9(user(guildId[28]).EditCollectiblesPickerList, obj1);
  obj2.children = items3;
  return closure_10(closure_11, obj2);
}
function ProfileEffectSectionPreview(arg0) {
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_12();
  const tmp2 = purchase(8173)(previewSkuId);
  const product = tmp2.product;
  c0 = product;
  purchase = tmp2.purchase;
  const items = [purchase, product];
  let obj = { style: tmp.previewContainer, children: null };
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
  const items1 = [closure_9(purchase(11108), { user, guildId, profileEffect: memo, maxWidth: 250 })];
  obj = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj.colors = items2;
  items1[1] = closure_9(purchase(4987), obj);
  obj.children = items1;
  return closure_10(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const isProfileEffectRecord = fn(7548).isProfileEffectRecord;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
fn(4560);
let createStyles = { container: null, bounceOffset: null, title: null, previewContainer: null, previewGradient: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.container = createStyles;
createStyles.bounceOffset = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
createStyles.title = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
createStyles.previewContainer = { overflow: "hidden", height: 300, alignItems: "center" };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.bottom = -1;
obj2.color = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
createStyles.previewGradient = obj2;
let closure_12 = createStyles.createStyles(createStyles);
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
  const tmp4Result = isTryItOut(8186)(str);
  dependencyMap = tmp4Result;
  const tmp6 = selectedProfileEffect(memo.useState(currentProfileEffect), 2);
  selectedProfileEffect = tmp6[0];
  guildId(8170);
  let tmp2Result = tmp2(7162);
  const analyticsLocations = tmp2Result(tmp2(7182).EDIT_PROFILE_EFFECT_SHEET).analyticsLocations;
  const items = [guildId, tmp4Result];
  memo = memo.useMemo(() => {
    const obj = {
      type: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET,
      guild_id: guildId,
      profile_has_nitro_customization: null,
    };
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
    const obj = {};
    const merged = Object.assign(memo);
    obj.is_fullscreen = true;
    obj.track(AnalyticEvents.OPEN_POPOUT, obj);
  }, items1);
  const callback1 = memo.useCallback((arg0) => {
    let obj = useShopProductItems;
    let purchasedItem = obj.getPurchasedItem(arg0, "firstProfileEffect");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    if (isTryItOut) {
      let tmpResult = UserProfileActionCreators;
      const result = tmpResult.setTryItOutProfileEffect(purchasedItem);
    } else {
      tmpResult = UserProfileSettingsActionCreators;
      obj = { guildId, profileEffect: purchasedItem };
      tmpResult.setPendingChanges(obj);
    }
  }, items2);
  let obj = { value: analyticsLocations, children: null };
  obj = {
    scrollable: true,
    ref: obj.useBottomSheetRef().bottomSheetRef,
    onExpand: callback,
    startExpanded: true,
    children: null,
  };
  const obj1 = { style: tmp.container, children: null };
  const items3 = [closure_9(closure_5, { style: tmp.bounceOffset }), ,];
  const obj3 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = guildId(1114).intl;
  obj3.children = intl.string(guildId(1114).t["/6nv6N"]);
  items3[1] = closure_9(guildId(4556).Text, obj3);
  items3[2] = closure_9(EditProfileEffectInner, {
    user,
    selectedProfileEffect,
    setSelectedProfileEffect: tmp6[1],
    guildId,
    isTryItOut,
  });
  obj1.children = items3;
  const items4 = [closure_10(closure_5, obj1)];
  const obj4 = {
    user,
    currentSkuId: null,
    selectedSkuId: null,
    isTryItOut: null,
    onApply: null,
    analyticsLocations: null,
    analyticsSource: null,
  };
  let skuId;
  tmp2Result = tmp2(8172);
  if (currentProfileEffect != null) {
    skuId = currentProfileEffect.skuId;
  }
  obj4.currentSkuId = skuId;
  let skuId1;
  if (selectedProfileEffect != null) {
    skuId1 = selectedProfileEffect.skuId;
  }
  obj4.selectedSkuId = skuId1;
  obj4.isTryItOut = isTryItOut;
  obj4.onApply = callback1;
  obj4.analyticsLocations = analyticsLocations;
  obj4.analyticsSource = isTryItOut(7182).EDIT_PROFILE_EFFECT_SHEET;
  items4[1] = closure_9(tmp2Result, obj4);
  obj.children = items4;
  obj.children = closure_10(guildId(7150).BottomSheet, obj);
  return closure_9(guildId(7162).AnalyticsLocationProvider, obj);
}
