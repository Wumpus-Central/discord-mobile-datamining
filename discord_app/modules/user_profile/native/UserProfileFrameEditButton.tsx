// === Module 14683: UserProfileFrameEditButton ===

// Module 14683 (UserProfileFrameEditButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const COLLECTIBLES_PREVIEW_SIZE = fn(7281).COLLECTIBLES_PREVIEW_SIZE;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
fn(4606);
let createStyles = { previewContainer: null, noneIcon: null };
let size = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, paddingVertical: PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
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
  let obj = user(7461);
  const items = [user(1943).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE];
  const tmp4 = userProfileFrame(obj.useSelectedDismissibleContent(items), 2);
  dependencyMap = tmp5;
  let obj1 = user(8251);
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
  const profilePreviewValue = obj1.getProfilePreviewValue(obj);
  let tmp2Result = user(11137);
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
  tmp2Result = user(8251);
  userProfileFrame = tmp2Result.useUserProfileFrame({ user, guildId });
  if (undefined !== pendingProfileFrame) {
    userProfileFrame = pendingProfileFrame;
  }
  const items1 = [userProfileFrame, guildId, user, tmp4[1]];
  let name;
  const callback = noop.useCallback(() => {
    const obj = { user, currentProfileFrame: userProfileFrame, guildId };
    obj.openLazy(asyncRequireImpl(14684, dependencyMap.paths), "Profile Frame", obj);
    closure_2(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = user(1114).intl;
    name = intl.string(user(1114).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userProfileFrame) {
      const intl2 = user(1114).intl;
      obj = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(user(1114).t.ep5D4i, obj);
    }
  }
  if (fetchCollectiblesProduct.isFetching) {
    obj1 = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
    const intl4 = user(1114).intl;
    obj1.label = intl4.string(user(1114).t.GWrZOd);
    const intl5 = user(1114).intl;
    obj1.buttonText = intl5.string(user(1114).t.MKDeyL);
    obj1.onPress = NOOP;
    obj1.leading = jsx(user(5628).ActivityIndicator, { animating: true, size: "large" });
    let obj2 = obj1;
  } else {
    obj2 = { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = user(1114).intl;
    obj2.label = intl3.string(user(1114).t.GWrZOd);
    const obj3 = { showNewBadge: tmp4[0] === user(1943).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE };
    obj2.labelTrailing = jsx(user(14671).UserProfileEditFormLabelBadges, { showNewBadge: tmp4[0] === user(1943).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE });
    obj2.buttonText = formatToPlainStringResult;
    const obj4 = { text: formatToPlainStringResult };
    obj2.accessibilityValue = obj4;
    obj2.onPress = callback;
    if (null != first1) {
      const obj5 = { style: tmp.previewContainer, children: null };
      const obj6 = { profileFrame: first1, previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(576).space.PX_8, previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4, profileBackgroundColor: guildId(576).colors.BACKGROUND_SURFACE_HIGH };
      obj5.children = jsx(guildId(8914), { profileFrame: first1, previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(576).space.PX_8, previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4, profileBackgroundColor: guildId(576).colors.BACKGROUND_SURFACE_HIGH });
      let tmp18Result = <View style={tmp.previewContainer}>{null}</View>;
      const tmp23 = guildId(8914);
    } else {
      const obj7 = { source: guildId(13269), style: tmp.noneIcon };
      tmp18Result = jsx(user(1178).Icon, { source: guildId(13269), style: tmp.noneIcon });
    }
    obj2.leading = tmp18Result;
  }
  return jsx(user(14671).UserProfileEditFormButton, obj2);
};