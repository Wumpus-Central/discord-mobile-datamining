// discord_app/modules/user_profile/native/UserProfileFrameEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const COLLECTIBLES_PREVIEW_SIZE = fn(7208).COLLECTIBLES_PREVIEW_SIZE;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
fn(4560);
let createStyles = { previewContainer: null, noneIcon: null };
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
createStyles.previewContainer = size;
createStyles = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles.noneIcon = createStyles;
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFrameEditButton.tsx");

export default function UserProfileFrameEditButton(arg0) {
  ({ displayProfile, user } = arg0);
  ({ pendingProfileFrame, guildId } = arg0);
  let userProfileFrame;
  const tmp = closure_11();
  let obj = user(8830);
  const canViewProfileFramesInCollectiblesShop =
    obj.useCanViewProfileFramesInCollectiblesShop("UserProfileFrameEditButton");
  let obj1 = user(7388);
  const items = [user(1943).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE];
  const tmp5 = userProfileFrame(obj1.useSelectedDismissibleContent(items), 2);
  dependencyMap = tmp6;
  let obj2 = user(8166);
  obj = { pendingValue: pendingProfileFrame, userValue: null, guildValue: null, guildId: null };
  let profileFrame;
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  obj.userValue = profileFrame;
  let profileFrame1;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  obj.guildValue = profileFrame1;
  obj.guildId = guildId;
  const profilePreviewValue = obj2.getProfilePreviewValue(obj);
  let tmp2Result = tmp2(11042);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = tmp2Result.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  if (product != null) {
    const first = product.items[0];
    if (first != null) {
      type = first.type;
    }
  }
  if (type === user(1889).CollectiblesItemType.PROFILE_FRAME) {
    const first1 = product.items[0];
  }
  tmp2Result = tmp2(8166);
  userProfileFrame = tmp2Result.useUserProfileFrame({ user, guildId });
  if (undefined !== pendingProfileFrame) {
    userProfileFrame = pendingProfileFrame;
  }
  const items1 = [userProfileFrame, guildId, user, tmp5[1]];
  if (canViewProfileFramesInCollectiblesShop) {
    let name;
    if (product != null) {
      name = product.name;
    }
    if (name == null) {
      const intl = tmp2(1114).intl;
      name = intl.string(tmp2(1114).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (null != guildId) {
      formatToPlainStringResult = name;
      if (null == userProfileFrame) {
        const intl2 = tmp2(1114).intl;
        obj = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.ep5D4i, obj);
      }
    }
    if (fetchCollectiblesProduct.isFetching) {
      obj1 = {
        label: null,
        buttonText: null,
        onPress: null,
        leading: null,
        loading: true,
        disabled: true,
        hideArrow: true,
      };
      const intl4 = tmp2(1114).intl;
      obj1.label = intl4.string(tmp2(1114).t.GWrZOd);
      const intl5 = tmp2(1114).intl;
      obj1.buttonText = intl5.string(tmp2(1114).t.MKDeyL);
      obj1.onPress = NOOP;
      obj1.leading = tmp19(tmp2(5577).ActivityIndicator, { animating: true, size: "large" });
      obj2 = obj1;
    } else {
      obj2 = {
        label: null,
        labelTrailing: null,
        buttonText: null,
        accessibilityValue: null,
        onPress: null,
        leading: null,
      };
      const intl3 = tmp2(1114).intl;
      obj2.label = intl3.string(tmp2(1114).t.GWrZOd);
      const obj3 = { showNewBadge: tmp5[0] === tmp2(1943).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE };
      obj2.labelTrailing = tmp19(tmp2(14618).UserProfileEditFormLabelBadges, obj3);
      obj2.buttonText = formatToPlainStringResult;
      const obj4 = { text: formatToPlainStringResult };
      obj2.accessibilityValue = obj4;
      obj2.onPress = tmp16;
      if (null != first1) {
        const obj5 = { style: tmp.previewContainer, children: null };
        const obj6 = {
          profileFrame: first1,
          previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(576).space.PX_8,
          previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4,
          profileBackgroundColor: guildId(576).colors.BACKGROUND_SURFACE_HIGH,
        };
        obj5.children = tmp19(guildId(8822), obj6);
        let tmp19Result = tmp19(View, obj5);
        const tmp24 = guildId(8822);
      } else {
        const obj7 = { source: guildId(13172), style: tmp.noneIcon };
        tmp19Result = tmp19(tmp2(1178).Icon, obj7);
      }
      obj2.leading = tmp19Result;
    }
    return jsx(tmp2(14618).UserProfileEditFormButton, obj2);
  } else {
    return null;
  }
}
