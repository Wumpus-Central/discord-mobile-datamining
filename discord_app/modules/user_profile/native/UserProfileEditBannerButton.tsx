// discord_app/modules/user_profile/native/UserProfileEditBannerButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import showUserProfileActionSheetDefault from "showUserProfileActionSheet.tsx";
import useUserProfileBannerHeightDefault from "../hooks/native/useUserProfileBannerHeight.tsx";
import UserProfileBannerDefault from "UserProfileBanner.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const EditButtonDefault = tmp(14359);
require = fn;
function ProfilePreviewButton(userId) {
  userId = userId.userId;
  let analyticsLocations;
  let context;
  analyticsLocations = analyticsLocations(context[5])().analyticsLocations;
  const tmp = closure_7();
  context = userId(context[6]).useUserProfileAnalyticsContext().context;
  const items = [userId, context, analyticsLocations];
  let tmp5 = null;
  if (null != userId) {
    const obj2 = {
      style: tmp.previewButton,
      onPress: tmp4,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl = tmp3(tmp2[9]).intl;
    obj2.accessibilityLabel = intl.string(tmp3(tmp2[9]).t["3Qcx6K"]);
    const obj3 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl2 = tmp3(tmp2[9]).intl;
    obj3.children = intl2.string(tmp3(tmp2[9]).t["3Qcx6K"]);
    obj2.children = closure_5(tmp3(tmp2[10]).Text, obj3);
    tmp5 = closure_5(tmp3(tmp2[8]).PressableOpacity, obj2);
  }
  return tmp5;
}
function EditButton(disabled) {
  let flag = disabled.disabled;
  ({ onPress, accessibilityLabel } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    onPress,
    disabled: flag,
    style: closure_7().editButton,
    children: null,
  };
  const tmp = closure_7();
  obj.children = hasOwnProperty(PencilIcon.PencilIcon, { size: "xs", color: nativeDefault.colors.WHITE });
  return hasOwnProperty(Pressables.PressableOpacity, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4845);
let obj2 = {
  container: { position: "relative" },
  editButton: null,
  previewButton: null,
  refreshEditButtonContainer: null,
};
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
obj2.editButton = size;
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
obj2.previewButton = rect;
obj2.refreshEditButtonContainer = { position: "absolute", top: 12, right: 12 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

export default function UserProfileEditBannerButton(isUserProfileEditingRefresh) {
  ({ user, showProfilePreviewButton, showEditButton } = isUserProfileEditingRefresh);
  ({ displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea } =
    isUserProfileEditingRefresh);
  if (showEditButton === undefined) {
    showEditButton = true;
  }
  ({ onPressEdit, editButtonAccessibilityLabel, editDisabled } = isUserProfileEditingRefresh);
  if (editDisabled === undefined) {
    editDisabled = false;
  }
  let refreshEditButtonContainer = closure_7();
  let tmp = importDefault;
  let obj = dependencyMap;
  const obj2 = { style: refreshEditButtonContainer.container, children: null };
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
    const obj3 = { userId: user.id };
    showProfilePreviewButton = hasOwnProperty(ProfilePreviewButton, obj3);
  }
  items[1] = showProfilePreviewButton;
  if (!showEditButton) {
    items[2] = showEditButton;
    obj2.children = items;
    return timestampProducer(View, obj2);
  } else if (isUserProfileEditingRefresh.isUserProfileEditingRefresh) {
    tmp = EditButtonDefault;
    obj = { style: null, onPress: null, accessibilityLabel: null, disabled: null, variant: "secondary-overlay" };
    refreshEditButtonContainer = refreshEditButtonContainer.refreshEditButtonContainer;
    obj.style = refreshEditButtonContainer;
    obj.onPress = onPressEdit;
    obj.accessibilityLabel = editButtonAccessibilityLabel;
    obj.disabled = editDisabled;
    let tmp5Result = hasOwnProperty(tmp, obj);
  } else {
    const obj4 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
    tmp5Result = hasOwnProperty(EditButton, obj4);
  }
  const tmp2 = useUserProfileBannerHeightDefault();
}
