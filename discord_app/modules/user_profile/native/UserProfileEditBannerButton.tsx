// discord_app/modules/user_profile/native/UserProfileEditBannerButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import showUserProfileActionSheetDefault from "showUserProfileActionSheet.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import useMeasuredLayoutDefault from "../../screen/native/useMeasuredLayout.tsx";
import UserProfileBannerDefault from "UserProfileBanner.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import useUserProfileBannerHeightDefault from "../hooks/native/useUserProfileBannerHeight.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ProfileCustomizationNavigationStore from "../../profile_customization/ProfileCustomizationNavigationStore.tsx";

const EditButtonDefault = tmp(16048);
require = fn;
function ProfilePreviewButton(userId) {
  userId = userId.userId;
  let analyticsLocations;
  let context;
  analyticsLocations = analyticsLocations(context[7])().analyticsLocations;
  const tmp = closure_9();
  context = userId(context[8]).useUserProfileAnalyticsContext().context;
  items = [userId, context, analyticsLocations];
  let tmp5 = null;
  if (null != userId) {
    let obj2 = {
      style: tmp.previewButton,
      onPress: tmp4,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl = tmp3(tmp2[12]).intl;
    obj2.accessibilityLabel = intl.string(tmp3(tmp2[12]).t["3Qcx6K"]);
    let obj3 = { variant: "body-sm/semibold", color: "text-overlay-light", children: null };
    const intl2 = tmp3(tmp2[12]).intl;
    obj3.children = intl2.string(tmp3(tmp2[12]).t["3Qcx6K"]);
    obj2.children = closure_7(tmp3(tmp2[13]).Text, obj3);
    tmp5 = closure_7(tmp3(tmp2[11]).PressableOpacity, obj2);
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
    style: closure_9().editButton,
    children: null,
  };
  const tmp = closure_9();
  obj.children = metroImportDefault(PencilIcon.PencilIcon, { size: "xs", color: nativeDefault.colors.WHITE });
  return metroImportDefault(Pressables.PressableOpacity, obj);
}
const View = fn(17).View;
let closure_6 = fn(6137).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5043);
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
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

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
  let refreshEditButtonContainer = closure_9();
  let tmp = importDefault;
  let obj = dependencyMap;
  ({ ref, onLayout, width } = useMeasuredLayoutDefault());
  const obj2 = { ref, style: refreshEditButtonContainer.container, onLayout, children: null };
  const tmp2 = useMeasuredLayoutDefault();
  items = [
    metroImportDefault(UserProfileBannerDefault, {
      user,
      displayProfile,
      pendingBanner,
      pendingAvatarSrc,
      pendingThemeColors,
      pendingAccentColor,
      bannerHeight: useUserProfileBannerHeightDefault(width),
      bannerSafeArea,
    }),
    ,
  ];
  if (showProfilePreviewButton) {
    const obj3 = { userId: user.id };
    showProfilePreviewButton = metroImportDefault(ProfilePreviewButton, obj3);
  }
  items[1] = showProfilePreviewButton;
  if (!showEditButton) {
    items[2] = showEditButton;
    obj2.children = items;
    return React5(View, obj2);
  } else if (isUserProfileEditingRefresh.isUserProfileEditingRefresh) {
    tmp = EditButtonDefault;
    obj = { style: null, onPress: null, accessibilityLabel: null, disabled: null, variant: "secondary-overlay" };
    refreshEditButtonContainer = refreshEditButtonContainer.refreshEditButtonContainer;
    obj.style = refreshEditButtonContainer;
    obj.onPress = onPressEdit;
    obj.accessibilityLabel = editButtonAccessibilityLabel;
    obj.disabled = editDisabled;
    let tmp6Result = metroImportDefault(tmp, obj);
  } else {
    const obj4 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
    tmp6Result = metroImportDefault(EditButton, obj4);
  }
  const tmp3 = useUserProfileBannerHeightDefault(width);
}
