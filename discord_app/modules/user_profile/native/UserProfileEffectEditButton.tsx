// discord_app/modules/user_profile/native/UserProfileEffectEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const COLLECTIBLES_PREVIEW_SIZE = fn(7208).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { profileEffectPreviewContainer: null, sampleProfile: null, noneIcon: null };
let size = {
  height: COLLECTIBLES_PREVIEW_SIZE,
  width: COLLECTIBLES_PREVIEW_SIZE,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  overflow: "hidden",
};
createStyles.profileEffectPreviewContainer = size;
createStyles.sampleProfile = { aspectRatio: fn(8798).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
createStyles = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles.noneIcon = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEffectEditButton.tsx");

export default function UserProfileEffectEditButton(isTryItOut) {
  ({ displayProfile, user } = isTryItOut);
  ({ pendingProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  let userProfileEffect;
  const tmp = closure_8();
  user(isTryItOut[8]);
  let obj = { pendingValue: pendingProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  obj.userValue = profileEffect;
  let profileEffect1;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj.guildValue = profileEffect1;
  obj.guildId = guildId;
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
    const obj = { user, currentProfileEffect: userProfileEffect, guildId, isTryItOut };
    obj.openLazy(asyncRequireImpl(14627, dependencyMap.paths), "Profile Effect", obj);
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
      obj = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[13]).t.ep5D4i, obj);
    }
  }
  if (isFetching) {
    const obj1 = {
      label: null,
      buttonText: null,
      onPress: null,
      leading: null,
      loading: true,
      disabled: true,
      hideArrow: true,
    };
    const intl4 = tmp2(tmp3[13]).intl;
    obj1.label = intl4.string(tmp2(tmp3[13]).t.wR5wOo);
    const intl5 = tmp2(tmp3[13]).intl;
    obj1.buttonText = intl5.string(tmp2(tmp3[13]).t.MKDeyL);
    obj1.onPress = NOOP;
    obj1.leading = tmp13(tmp2(tmp3[15]).ActivityIndicator, { animating: true, size: "large" });
    let obj2 = obj1;
  } else {
    obj2 = { label: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp2(tmp3[13]).intl;
    obj2.label = intl3.string(tmp2(tmp3[13]).t.wR5wOo);
    obj2.buttonText = formatToPlainStringResult;
    const obj3 = { text: formatToPlainStringResult };
    obj2.accessibilityValue = obj3;
    obj2.onPress = callback;
    if (null != profilePreviewValue) {
      const obj4 = { style: tmp.profileEffectPreviewContainer, children: null };
      const obj5 = { source: null, style: null, resizeMode: "cover" };
      const obj6 = { uri: guildId(tmp3[17]) };
      obj5.source = obj6;
      obj5.style = tmp.sampleProfile;
      const items1 = [tmp13(guildId(tmp3[16]), obj5)];
      const obj7 = { skuId: profilePreviewValue.skuId, bannerAdjustment: 0, useThumbnail: true };
      items1[1] = tmp13(guildId(tmp3[18]), obj7);
      obj4.children = items1;
      let tmp13Result = closure_7(View, obj4);
      const tmp19 = guildId(tmp3[16]);
    } else {
      const obj8 = { source: guildId(tmp3[20]), style: tmp.noneIcon };
      tmp13Result = tmp13(tmp2(tmp3[19]).Icon, obj8);
    }
    obj2.leading = tmp13Result;
  }
  return closure_6(user(isTryItOut[14]).UserProfileEditFormButton, obj2);
}
