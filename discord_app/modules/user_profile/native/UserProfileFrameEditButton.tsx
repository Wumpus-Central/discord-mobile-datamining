// discord_app/modules/user_profile/native/UserProfileFrameEditButton.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Constants2 from "Constants.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

let obj2;
let size;
const View = react_native.View;
const COLLECTIBLES_PREVIEW_SIZE = Constants2.COLLECTIBLES_PREVIEW_SIZE;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
let createStyles = createStyles_mod;
let obj = { previewContainer: size, noneIcon: obj2 };
size = {
  height: COLLECTIBLES_PREVIEW_SIZE,
  width: COLLECTIBLES_PREVIEW_SIZE,
  paddingVertical: PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFrameEditButton.tsx");

export default function UserProfileFrameEditButton(arg0) {
  let closure_2;
  let displayProfile;
  let first2;
  let guildId;
  let intl3;
  let intl4;
  let intl5;
  let obj4;
  let obj6;
  let pendingProfileFrame;
  let profileFrame;
  let profileFrame1;
  let tmp22Result;
  let user;
  ({ displayProfile, user } = arg0);
  ({ pendingProfileFrame, guildId } = arg0);
  let userProfileFrame;
  const tmp = closure_11();
  const useSelectedDismissibleContent = user(6891).useSelectedDismissibleContent;
  const items = [];
  user(6891);
  items[0] = user(2036).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
  const tmp5 = userProfileFrame(useSelectedDismissibleContent(items), 2);
  dependencyMap = tmp7;
  const first = tmp5[0];
  let obj = { pendingValue: pendingProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId };
  profileFrame = undefined;
  const getProfilePreviewValue = user(7837).getProfilePreviewValue;
  user(7837);
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  profileFrame1 = undefined;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj);
  let skuId;
  const useFetchCollectiblesProduct = user(10778).useFetchCollectiblesProduct;
  user(10778);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  const isFetching = fetchCollectiblesProduct.isFetching;
  if (product != null) {
    const first1 = product.items[0];
    if (first1 != null) {
      type = first1.type;
    }
  }
  if (type === user(1980).CollectiblesItemType.PROFILE_FRAME) {
    first2 = product.items[0];
  }
  const tmp2Result2 = user(7837);
  userProfileFrame = tmp2Result2.useUserProfileFrame({ user, guildId });
  if (undefined !== pendingProfileFrame) {
    userProfileFrame = pendingProfileFrame;
  }
  const items1 = [userProfileFrame, guildId, user, tmp5[1]];
  let name;
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { user, currentProfileFrame: userProfileFrame, guildId };
    obj.openLazy(asyncRequire(14460, dependencyMap.paths), "Profile Frame", obj2);
    closure_2(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = user(1126).intl;
    name = intl.string(user(1126).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userProfileFrame) {
      const intl2 = user(1126).intl;
      let obj2 = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(user(1126).t.ep5D4i, obj2);
    }
  }
  const UserProfileEditFormButton = user(14445).UserProfileEditFormButton;
  if (isFetching) {
    const obj3 = {
      label: intl4.string(user(1126).t.GWrZOd),
      buttonText: intl5.string(user(1126).t.MKDeyL),
      onPress: NOOP,
      leading: null,
      loading: true,
      disabled: true,
      hideArrow: true,
    };
    intl4 = user(1126).intl;
    intl5 = user(1126).intl;
    obj4 = obj3;
  } else {
    obj4 = {
      label: intl3.string(user(1126).t.GWrZOd),
      labelTrailing: null,
      buttonText: formatToPlainStringResult,
      accessibilityValue: obj6,
      onPress: callback,
      leading: tmp22Result,
    };
    intl3 = user(1126).intl;
    ({ showNewBadge: first === user(2036).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE });
    const UserProfileEditFormLabelBadges = user(14445).UserProfileEditFormLabelBadges;
    obj6 = { text: formatToPlainStringResult };
    if (null != first2) {
      ({
        profileFrame: first2,
        previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(587).space.PX_8,
        previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4,
        profileBackgroundColor: guildId(587).colors.BACKGROUND_SURFACE_HIGH,
      });
      guildId(8478);
      tmp22Result = <View style={tmp.previewContainer}>{null}</View>;
    } else {
      const Icon = user(1188).Icon;
      tmp22Result = <Icon source={guildId(13011)} style={tmp.noneIcon} />;
    }
  }
  return <UserProfileEditFormButton {...obj4} />;
}
