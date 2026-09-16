// === Module 14740: UserProfileEffectEditButton ===

// Module 14740 (UserProfileEffectEditButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const COLLECTIBLES_PREVIEW_SIZE = fn(7318).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { profileEffectPreviewContainer: null, sampleProfile: null, noneIcon: null };
let size = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, overflow: "hidden" };
obj2.profileEffectPreviewContainer = size;
obj2.sampleProfile = { aspectRatio: fn(8939).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEffectEditButton.tsx");

export default function UserProfileEffectEditButton(isTryItOut) {
  ({ displayProfile, user } = isTryItOut);
  ({ pendingProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  let userProfileEffect;
  const tmp = closure_8();
  const obj2 = { pendingValue: pendingProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  obj2.userValue = profileEffect;
  let profileEffect1;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj2.guildValue = profileEffect1;
  obj2.guildId = guildId;
  const profilePreviewValue = user(isTryItOut[8]).getProfilePreviewValue(obj2);
  const obj = user(isTryItOut[8]);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = user(isTryItOut[9]).useFetchCollectiblesProduct(skuId);
  ({ product, isFetching } = fetchCollectiblesProduct);
  const tmp2Result = user(isTryItOut[9]);
  userProfileEffect = user(isTryItOut[8]).useUserProfileEffect({ user, guildId });
  if (undefined !== pendingProfileEffect) {
    userProfileEffect = pendingProfileEffect;
  }
  const items = [userProfileEffect, guildId, user, isTryItOut];
  let name;
  const callback = userProfileEffect.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14741, dependencyMap.paths), "Profile Effect", { user, currentProfileEffect: userProfileEffect, guildId, isTryItOut });
  }, items);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = user(tmp3[13]).intl;
    name = intl.string(user(tmp3[13]).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userProfileEffect) {
      const intl2 = user(tmp3[13]).intl;
      const obj3 = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(user(tmp3[13]).t.ep5D4i, obj3);
    }
  }
  if (isFetching) {
    const obj4 = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
    const intl4 = user(tmp3[13]).intl;
    obj4.label = intl4.string(user(tmp3[13]).t.wR5wOo);
    const intl5 = user(tmp3[13]).intl;
    obj4.buttonText = intl5.string(user(tmp3[13]).t.MKDeyL);
    obj4.onPress = NOOP;
    obj4.leading = closure_6(user(tmp3[15]).ActivityIndicator, { animating: true, size: "large" });
    let obj5 = obj4;
  } else {
    obj5 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = user(tmp3[13]).intl;
    obj5.label = intl3.string(user(tmp3[13]).t.wR5wOo);
    obj5.buttonText = formatToPlainStringResult;
    const obj6 = { text: formatToPlainStringResult };
    obj5.accessibilityValue = obj6;
    obj5.onPress = callback;
    if (null != profilePreviewValue) {
      const obj7 = { style: tmp.profileEffectPreviewContainer, children: null };
      const obj8 = { source: null, style: null, resizeMode: "cover" };
      const obj9 = { uri: guildId(tmp3[17]) };
      obj8.source = obj9;
      obj8.style = tmp.sampleProfile;
      const items1 = [closure_6(guildId(tmp3[16]), obj8), ];
      const obj10 = { skuId: profilePreviewValue.skuId, bannerAdjustment: 0, useThumbnail: true };
      items1[1] = closure_6(guildId(tmp3[18]), obj10);
      obj7.children = items1;
      let tmp13Result = closure_7(View, obj7);
      const tmp19 = guildId(tmp3[16]);
    } else {
      const obj11 = { source: guildId(tmp3[20]), style: tmp.noneIcon };
      tmp13Result = closure_6(user(tmp3[19]).Icon, obj11);
    }
    obj5.leading = tmp13Result;
  }
  return closure_6(user(isTryItOut[14]).UserProfileEditFormButton, obj5);
};