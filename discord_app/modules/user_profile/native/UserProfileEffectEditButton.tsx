// === Module 14280: UserProfileEffectEditButton ===

// Module 14280 (UserProfileEffectEditButton)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { COLLECTIBLES_PREVIEW_SIZE } from "ARBITRARY_LARGE_OFFSET" /* 6001 */;
import { NOOP } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { profileEffectPreviewContainer: null, sampleProfile: null, noneIcon: null };
createCacheKey = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
createCacheKey[2] = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileEffectEditButton.tsx");

export default function UserProfileEffectEditButton(isTryItOut) {
  ({ displayProfile, user } = isTryItOut);
  ({ pendingProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  let userProfileEffect;
  const tmp = callback2();
  let obj = user(isTryItOut[8]);
  obj = { pendingValue: pendingProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  obj[1] = profileEffect;
  let profileEffect1;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj[2] = profileEffect1;
  obj[3] = guildId;
  const profilePreviewValue = obj.getProfilePreviewValue(obj);
  let tmp2Result = tmp2(tmp3[9]);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = tmp2Result.useFetchCollectiblesProduct(skuId);
  ({ product, isFetching } = fetchCollectiblesProduct);
  tmp2Result = tmp2(tmp3[8]);
  userProfileEffect = tmp2Result.useUserProfileEffect({ user, guildId });
  if (undefined !== pendingProfileEffect) {
    userProfileEffect = pendingProfileEffect;
  }
  const items = [userProfileEffect, guildId, user, isTryItOut];
  let name;
  const callback = userProfileEffect.useCallback(() => {
    let obj = guildId(isTryItOut[10]);
    obj = { user, currentProfileEffect: userProfileEffect, guildId, isTryItOut };
    obj.openLazy(user(isTryItOut[12])(isTryItOut[11], isTryItOut.paths), "Profile Effect", obj);
  }, items);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = tmp2(tmp3[13]).intl;
    name = intl.string(tmp2(tmp3[13]).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userProfileEffect) {
      const intl2 = tmp2(tmp3[13]).intl;
      obj = { label: null };
      obj[0] = name;
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[13]).t.ep5D4i, obj);
    }
  }
  if (isFetching) {
    obj1 = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
    const intl4 = tmp2(tmp3[13]).intl;
    obj1[0] = intl4.string(tmp2(tmp3[13]).t.wR5wOo);
    const intl5 = tmp2(tmp3[13]).intl;
    obj1[1] = intl5.string(tmp2(tmp3[13]).t.MKDeyL);
    obj1[2] = NOOP;
    obj1[3] = tmp13(tmp2(tmp3[15]).ActivityIndicator, { animating: true, size: "large" });
    let obj2 = obj1;
  } else {
    obj2 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp2(tmp3[13]).intl;
    obj2[0] = intl3.string(tmp2(tmp3[13]).t.wR5wOo);
    obj2[1] = formatToPlainStringResult;
    const obj3 = { text: null };
    obj3[0] = formatToPlainStringResult;
    obj2[2] = obj3;
    obj2[3] = callback;
    if (null != profilePreviewValue) {
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.profileEffectPreviewContainer;
      const obj5 = { source: null, style: null, resizeMode: "cover" };
      const obj6 = { uri: null };
      obj6[0] = guildId(tmp3[17]);
      obj5[0] = obj6;
      obj5[1] = tmp.sampleProfile;
      const items1 = [tmp13(guildId(tmp3[16]), obj5), ];
      const obj7 = { skuId: null, bannerAdjustment: 0, useThumbnail: true };
      obj7[0] = profilePreviewValue.skuId;
      items1[1] = tmp13(guildId(tmp3[18]), obj7);
      obj4[1] = items1;
      let tmp13Result = callback(View, obj4);
      const tmp19 = guildId(tmp3[16]);
    } else {
      const obj8 = { source: null, style: null };
      obj8[0] = guildId(tmp3[20]);
      obj8[1] = tmp.noneIcon;
      tmp13Result = tmp13(tmp2(tmp3[19]).Icon, obj8);
    }
    obj2[4] = tmp13Result;
  }
  return closure_6(user(isTryItOut[14]).UserProfileEditFormButton, obj2);
};