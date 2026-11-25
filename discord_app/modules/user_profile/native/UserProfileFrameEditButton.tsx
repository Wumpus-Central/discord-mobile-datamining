// discord_app/modules/user_profile/native/UserProfileFrameEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/02119_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const COLLECTIBLES_PREVIEW_SIZE = fn(7526).COLLECTIBLES_PREVIEW_SIZE;
const ContentDismissActionType = fn(4858).ContentDismissActionType;
const NOOP = fn(1082).NOOP;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(5012);
let obj2 = { previewContainer: null, noneIcon: null };
let size = {
  height: COLLECTIBLES_PREVIEW_SIZE,
  width: COLLECTIBLES_PREVIEW_SIZE,
  paddingVertical: PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
obj2.previewContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFrameEditButton.tsx");

export default function UserProfileFrameEditButton(arg0) {
  ({ displayProfile, user } = arg0);
  ({ pendingProfileFrame, guildId } = arg0);
  let userProfileFrame;
  const tmp = closure_11();
  items = [user(4845).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE];
  const tmp4 = userProfileFrame(user(9519).useSelectedDismissibleContent(items), 2);
  dependencyMap = tmp5;
  const obj = user(9519);
  const obj3 = { pendingValue: pendingProfileFrame, userValue: null, guildValue: null, guildId: null };
  let profileFrame;
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  obj3.userValue = profileFrame;
  let profileFrame1;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  obj3.guildValue = profileFrame1;
  obj3.guildId = guildId;
  const profilePreviewValue = user(6344).getProfilePreviewValue(obj3);
  const obj2 = user(6344);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = user(11563).useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  if (product != null) {
    const first = product.items[0];
    if (first != null) {
      type = first.type;
    }
  }
  if (type === user(2112).CollectiblesItemType.PROFILE_FRAME) {
    const first1 = product.items[0];
  }
  const tmp2Result = user(11563);
  userProfileFrame = user(6344).useUserProfileFrame({ user, guildId });
  if (undefined !== pendingProfileFrame) {
    userProfileFrame = pendingProfileFrame;
  }
  const items1 = [userProfileFrame, guildId, user, tmp4[1]];
  let name;
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16058, dependencyMap.paths), "Profile Frame", {
      user,
      currentProfileFrame: userProfileFrame,
      guildId,
    });
    closure_2(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = user(1112).intl;
    name = intl.string(user(1112).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userProfileFrame) {
      const intl2 = user(1112).intl;
      const obj4 = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(user(1112).t.ep5D4i, obj4);
    }
  }
  if (fetchCollectiblesProduct.isFetching) {
    const obj5 = {
      label: null,
      buttonText: null,
      onPress: null,
      leading: null,
      loading: true,
      disabled: true,
      hideArrow: true,
    };
    const intl4 = user(1112).intl;
    obj5.label = intl4.string(user(1112).t.GWrZOd);
    const intl5 = user(1112).intl;
    obj5.buttonText = intl5.string(user(1112).t.MKDeyL);
    obj5.onPress = NOOP;
    obj5.leading = jsx(user(7016).ActivityIndicator, { animating: true, size: "large" });
    let obj6 = obj5;
  } else {
    obj6 = {
      label: null,
      labelTrailing: null,
      buttonText: null,
      accessibilityValue: null,
      onPress: null,
      leading: null,
    };
    const intl3 = user(1112).intl;
    obj6.label = intl3.string(user(1112).t.GWrZOd);
    const obj7 = { showNewBadge: tmp4[0] === user(4845).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE };
    obj6.labelTrailing = jsx(user(16031).UserProfileEditFormLabelBadges, {
      showNewBadge: tmp4[0] === user(4845).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE,
    });
    obj6.buttonText = formatToPlainStringResult;
    const obj8 = { text: formatToPlainStringResult };
    obj6.accessibilityValue = obj8;
    obj6.onPress = callback;
    if (null != first1) {
      const obj9 = { style: tmp.previewContainer, children: null };
      const obj10 = {
        profileFrame: first1,
        previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(575).space.PX_8,
        previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4,
        profileBackgroundColor: guildId(575).colors.BACKGROUND_SURFACE_HIGH,
      };
      obj9.children = jsx(guildId(11123), {
        profileFrame: first1,
        previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(575).space.PX_8,
        previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4,
        profileBackgroundColor: guildId(575).colors.BACKGROUND_SURFACE_HIGH,
      });
      let tmp18Result = <View style={tmp.previewContainer}>{null}</View>;
      const tmp23 = guildId(11123);
    } else {
      const obj11 = { source: guildId(14416), style: tmp.noneIcon };
      tmp18Result = jsx(user(1186).Icon, { source: guildId(14416), style: tmp.noneIcon });
    }
    obj6.leading = tmp18Result;
  }
  return jsx(user(16031).UserProfileEditFormButton, obj6);
}
