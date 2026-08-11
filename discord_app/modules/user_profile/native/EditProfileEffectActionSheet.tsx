// discord_app/modules/user_profile/native/EditProfileEffectActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import EditCollectiblesCTAButton from "EditCollectiblesCTAButton.tsx";
import get_ActivityIndicator from "Text";
import map from "map";
import { isProfileEffectRecord } from "fromServer";
import { AnalyticEvents } from "ME";
import jsxProd from "initialize";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c10;
let c5;
let c9;
let unpackModuleId;
const require = arg1;
function EditProfileEffectInner(user) {
  let selectedProfileEffect;
  let setSelectedProfileEffect;
  user = user.user;
  ({ selectedProfileEffect, setSelectedProfileEffect } = user);
  const guildId = user.guildId;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let obj = user(guildId[20]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[21]);
  const items = [map];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  const tmp7 = setSelectedProfileEffect(guildId[9])(user.id, guildId);
  let obj2 = user(guildId[23]);
  obj = { pendingValue: selectedProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (tmp7 != null) {
    const _userProfile = tmp7._userProfile;
    if (_userProfile != null) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  obj[1] = profileEffect;
  let profileEffect1;
  if (tmp7 != null) {
    const _guildMemberProfile = tmp7._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj[2] = profileEffect1;
  obj[3] = guildId;
  const profilePreviewValue = obj2.getProfilePreviewValue(obj);
  const items1 = [user];
  const effect = React.useEffect(() => {
    if (!tmp) {
      setSelectedProfileEffect(guildId[24])(obj.id, obj.getAvatarURL(null, 80), { withMutualGuilds: true, dispatchWait: true });
      const tmp4 = setSelectedProfileEffect(guildId[24]);
    }
  }, items1);
  const items2 = [setSelectedProfileEffect, guildId, flag];
  let skuId;
  const callback = React.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    let size;
    ({ items, size, selectedSkuId } = arg0);
    return outer1_9(user(guildId[25]).EditProfileEffectRow, { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut: flag });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_9(ProfileEffectSectionPreview, { previewSkuId: skuId, user, guildId }), , ];
  obj = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const tmp13 = closure_10;
  const tmp14 = closure_11;
  const tmp16 = ProfileEffectSectionPreview;
  const tmp5 = setSelectedProfileEffect;
  const tmp6 = setSelectedProfileEffect(guildId[22])();
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj[1] = skuId1;
  const intl = tmp(tmp2[18]).intl;
  obj[2] = intl.string(user(guildId[18]).t.pertpd);
  const intl2 = tmp(tmp2[18]).intl;
  obj[3] = intl2.string(user(guildId[18]).t["5eotIZ"]);
  items3[1] = closure_9(setSelectedProfileEffect(guildId[26]), obj);
  obj1 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedProfileEffect != null) {
    skuId2 = selectedProfileEffect.skuId;
  }
  obj2 = { children: null };
  obj1[1] = skuId2;
  obj1[2] = callback;
  obj1[3] = stateFromStores;
  items3[2] = closure_9(user(guildId[27]).EditCollectiblesPickerList, obj1);
  obj2[0] = items3;
  return tmp13(tmp14, obj2);
}
function ProfileEffectSectionPreview(arg0) {
  let guildId;
  let previewSkuId;
  let user;
  let c0;
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = createCacheKey();
  const tmp2 = purchase(8283)(previewSkuId);
  const product = tmp2.product;
  c0 = product;
  purchase = tmp2.purchase;
  const items = [purchase, product];
  let obj = { style: tmp.previewContainer, children: null };
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
  const items1 = [callback(purchase(9452), { user, guildId, profileEffect: memo, maxWidth: 250 }), ];
  obj = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj[3] = items2;
  items1[1] = callback(purchase(4725), obj);
  obj[1] = items1;
  return callback2(closure_5, obj);
}
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
createCacheKey = { container: null, bounceOffset: null, title: null, previewContainer: null, previewGradient: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
createCacheKey[2] = { alignSelf: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
createCacheKey[3] = { overflow: "hidden", height: 300, alignItems: "center" };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.bottom = -1;
obj2.color = require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND;
createCacheKey[4] = obj2;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignSelf: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/EditProfileEffectActionSheet.tsx");

export default function EditProfileEffectActionSheet(isTryItOut) {
  let currentProfileEffect;
  let guildId;
  let user;
  ({ user, currentProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  let dependencyMap;
  let first;
  let memo;
  let tmp = createCacheKey();
  let str = user.id;
  if (str == null) {
    str = "";
  }
  const tmp4Result = isTryItOut(8312)(str);
  dependencyMap = tmp4Result;
  const tmp6 = first(memo.useState(currentProfileEffect), 2);
  first = tmp6[0];
  let obj = guildId(7406);
  let tmp2Result = tmp2(5728);
  const analyticsLocations = tmp2Result(tmp2(5748).EDIT_PROFILE_EFFECT_SHEET).analyticsLocations;
  const items = [guildId, tmp4Result];
  memo = memo.useMemo(() => {
    const obj = { type: isTryItOut(_undefined[12]).EDIT_PROFILE_EFFECT_SHEET, guild_id: guildId, profile_has_nitro_customization: null };
    let tmp = null != _undefined;
    if (tmp) {
      let result;
      if (obj2 != null) {
        result = obj2.hasPremiumCustomization();
      }
      tmp = result;
    }
    obj[2] = tmp;
    return obj;
  }, items);
  const items1 = [memo];
  const items2 = [first, guildId, isTryItOut];
  const callback = memo.useCallback(() => {
    let obj = isTryItOut(_undefined[13]);
    obj = {};
    const merged = Object.assign(memo);
    obj.is_fullscreen = true;
    obj.track(outer1_8.OPEN_POPOUT, obj);
  }, items1);
  const callback1 = memo.useCallback(() => {
    if (isTryItOut) {
      let tmpResult = tmp(tmp2[14]);
      let tmp7 = first;
      if (first == null) {
        tmp7 = null;
      }
      const result = tmpResult.setTryItOutProfileEffect(tmp7);
    } else {
      tmpResult = tmp(tmp2[15]);
      const obj = { guildId: null, profileEffect: null };
      obj[0] = guildId;
      let tmp4 = first;
      if (first == null) {
        tmp4 = null;
      }
      obj[1] = tmp4;
      tmpResult.setPendingChanges(obj);
    }
  }, items2);
  obj = { value: analyticsLocations, children: null };
  obj = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  const obj1 = { style: tmp.container, children: null };
  const items3 = [callback(closure_5, { style: tmp.bounceOffset }), , ];
  const obj3 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = guildId(1236).intl;
  obj3[3] = intl.string(guildId(1236).t["/6nv6N"]);
  items3[1] = callback(guildId(4299).Text, obj3);
  items3[2] = callback(EditProfileEffectInner, { user, selectedProfileEffect: first, setSelectedProfileEffect: tmp6[1], guildId, isTryItOut });
  obj1[1] = items3;
  const items4 = [callback2(closure_5, obj1), ];
  const obj4 = { user, currentSkuId: null, selectedSkuId: null, isTryItOut: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  tmp2Result = tmp2(8282);
  if (currentProfileEffect != null) {
    skuId = currentProfileEffect.skuId;
  }
  obj4[1] = skuId;
  let skuId1;
  if (first != null) {
    skuId1 = first.skuId;
  }
  obj4[2] = skuId1;
  obj4[3] = isTryItOut;
  obj4[4] = callback1;
  obj4[5] = analyticsLocations;
  obj4[6] = isTryItOut(5748).EDIT_PROFILE_EFFECT_SHEET;
  items4[1] = callback(tmp2Result, obj4);
  obj[4] = items4;
  obj[1] = callback2(guildId(5397).BottomSheet, obj);
  return callback(guildId(5728).AnalyticsLocationProvider, obj);
};