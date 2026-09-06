// discord_app/modules/user_profile/native/UserProfileEditBannerButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import showUserProfileActionSheetDefault from "showUserProfileActionSheet.tsx";
import useUserProfileBannerHeightDefault from "../hooks/native/useUserProfileBannerHeight.tsx";
import UserProfileBannerDefault from "UserProfileBanner.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ProfilePreviewButton(userId) {
  userId = userId.userId;
  let analyticsLocations;
  let context;
  analyticsLocations = analyticsLocations(context[5])().analyticsLocations;
  let obj = userId(context[6]);
  context = obj.useUserProfileAnalyticsContext().context;
  const items = [userId, context, analyticsLocations];
  let tmp5 = null;
  if (null != userId) {
    obj = {
      style: tmp.previewButton,
      onPress: tmp4,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl = tmp3(tmp2[9]).intl;
    obj.accessibilityLabel = intl.string(tmp3(tmp2[9]).t["3Qcx6K"]);
    obj = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl2 = tmp3(tmp2[9]).intl;
    obj.children = intl2.string(tmp3(tmp2[9]).t["3Qcx6K"]);
    obj.children = closure_5(tmp3(tmp2[10]).Text, obj);
    tmp5 = closure_5(tmp3(tmp2[8]).PressableOpacity, obj);
  }
  return tmp5;
}
function EditButton(disabled) {
  let flag = disabled.disabled;
  ({ onPress, accessibilityLabel } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  let obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    onPress,
    disabled: flag,
    style: closure_7().editButton,
    children: null,
  };
  obj = { size: "xs", color: nativeDefault.colors.WHITE };
  obj.children = hasOwnProperty(PencilIcon.PencilIcon, obj);
  return hasOwnProperty(Pressables.PressableOpacity, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
const createStyles = { container: { position: "relative" }, editButton: null, previewButton: null };
let size = {
  position: "absolute",
  top: 12,
  right: 12,
  width: 28,
  height: 28,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.round,
};
createStyles.editButton = size;
const rect = {
  position: "absolute",
  justifyContent: "center",
  minHeight: 28,
  top: 12,
  right: 48,
  paddingVertical: 4,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  zIndex: 1,
};
createStyles.previewButton = rect;
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

export default function UserProfileEditBannerButton(arg0) {
  ({ user, showProfilePreviewButton, showEditButton } = arg0);
  ({ displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea } = arg0);
  if (showEditButton === undefined) {
    showEditButton = true;
  }
  ({ editDisabled, onPressEdit, editButtonAccessibilityLabel } = arg0);
  if (editDisabled === undefined) {
    editDisabled = false;
  }
  let obj = { style: closure_7().container, children: null };
  const tmp = closure_7();
  const items = [
    hasOwnProperty(UserProfileBannerDefault, {
      user,
      displayProfile,
      pendingBanner,
      pendingAvatarSrc,
      pendingThemeColors,
      pendingAccentColor,
      bannerHeight: useUserProfileBannerHeightDefault(),
      bannerSafeArea,
    }),
    ,
  ];
  if (showProfilePreviewButton) {
    obj = { userId: user.id };
    showProfilePreviewButton = tmp5(ProfilePreviewButton, obj);
  }
  items[1] = showProfilePreviewButton;
  if (showEditButton) {
    obj = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
    showEditButton = tmp5(EditButton, obj);
  }
  items[2] = showEditButton;
  obj.children = items;
  return timestampProducer(View, obj);
}
