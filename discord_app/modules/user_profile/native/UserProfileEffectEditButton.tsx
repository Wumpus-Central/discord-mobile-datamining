// discord_app/modules/user_profile/native/UserProfileEffectEditButton.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Constants2 from "Constants.tsx";
import CollectiblesPreviewConstants from "../../collectibles/native/CollectiblesPreviewConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
const COLLECTIBLES_PREVIEW_SIZE = Constants2.COLLECTIBLES_PREVIEW_SIZE;
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
const NOOP = Constants.NOOP;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  profileEffectPreviewContainer: size,
  sampleProfile: { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" },
  noneIcon: obj2,
};
size = {
  height: COLLECTIBLES_PREVIEW_SIZE,
  width: COLLECTIBLES_PREVIEW_SIZE,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEffectEditButton.tsx");

export default function UserProfileEffectEditButton(isTryItOut) {
  let displayProfile;
  let guildId;
  let intl3;
  let intl4;
  let intl5;
  let isFetching;
  let items1;
  let obj4;
  let obj5;
  let obj8;
  let pendingProfileEffect;
  let product;
  let profileEffect;
  let profileEffect1;
  let tmp15Result;
  let user;
  ({ displayProfile, user } = isTryItOut);
  ({ pendingProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  let userProfileEffect;
  const tmp = closure_8();
  let obj = { pendingValue: pendingProfileEffect, userValue: profileEffect, guildValue: profileEffect1, guildId };
  profileEffect = undefined;
  const getProfilePreviewValue = user(isTryItOut[8]).getProfilePreviewValue;
  user(isTryItOut[8]);
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  profileEffect1 = undefined;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj);
  let skuId;
  const useFetchCollectiblesProduct = user(isTryItOut[9]).useFetchCollectiblesProduct;
  user(isTryItOut[9]);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = useFetchCollectiblesProduct(skuId);
  ({ product, isFetching } = fetchCollectiblesProduct);
  const tmp2Result2 = user(isTryItOut[8]);
  userProfileEffect = tmp2Result2.useUserProfileEffect({ user, guildId });
  if (undefined !== pendingProfileEffect) {
    userProfileEffect = pendingProfileEffect;
  }
  const items = [userProfileEffect, guildId, user, isTryItOut];
  let name;
  const callback = userProfileEffect.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { user, currentProfileEffect: userProfileEffect, guildId, isTryItOut };
    obj.openLazy(asyncRequire(14472, dependencyMap.paths), "Profile Effect", obj2);
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
      let obj2 = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(user(tmp3[13]).t.ep5D4i, obj2);
    }
  }
  const UserProfileEditFormButton = user(tmp3[14]).UserProfileEditFormButton;
  if (isFetching) {
    const obj3 = {
      label: intl4.string(user(isTryItOut[13]).t.wR5wOo),
      buttonText: intl5.string(user(isTryItOut[13]).t.MKDeyL),
      onPress: NOOP,
      leading: closure_6(user(isTryItOut[15]).ActivityIndicator, { animating: true, size: "large" }),
      loading: true,
      disabled: true,
      hideArrow: true,
    };
    intl4 = user(tmp3[13]).intl;
    intl5 = user(tmp3[13]).intl;
    obj4 = obj3;
  } else {
    obj4 = {
      label: intl3.string(user(isTryItOut[13]).t.wR5wOo),
      buttonText: formatToPlainStringResult,
      accessibilityValue: obj5,
      onPress: callback,
      leading: tmp15Result,
    };
    intl3 = user(tmp3[13]).intl;
    obj5 = { text: formatToPlainStringResult };
    if (null != profilePreviewValue) {
      const obj6 = { style: tmp.profileEffectPreviewContainer, children: items1 };
      const obj7 = { source: obj8, style: tmp.sampleProfile, resizeMode: "cover" };
      obj8 = { uri: guildId(isTryItOut[17]) };
      const tmp21 = guildId(isTryItOut[16]);
      items1 = [closure_6(tmp21, obj7)];
      const obj9 = { skuId: profilePreviewValue.skuId, bannerAdjustment: 0, useThumbnail: true };
      items1[1] = closure_6(guildId(isTryItOut[18]), obj9);
      tmp15Result = closure_7(View, obj6);
    } else {
      const obj10 = { source: guildId(isTryItOut[20]), style: tmp.noneIcon };
      const Icon = user(tmp3[19]).Icon;
      tmp15Result = closure_6(Icon, obj10);
    }
  }
  return closure_6(UserProfileEditFormButton, obj4);
}
