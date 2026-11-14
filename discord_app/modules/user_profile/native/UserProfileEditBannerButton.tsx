// === Module 17080: UserProfileEditBannerButton ===

// Module 17080 (UserProfileEditBannerButton)
import nativeDefault from "native" /* 575 */;
import Pressables from "Pressables" /* 7428 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7994 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8476 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8546 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 8593 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8612 */;
import PencilIcon from "PencilIcon" /* 10901 */;
import noop from "module_19" /* 19 */;

const EditButtonDefault = tmp(17081);
require = fn;
function ProfilePreviewButton(userId) {
  userId = userId.userId;
  let analyticsLocations;
  let context;
  analyticsLocations = analyticsLocations(context[6])().analyticsLocations;
  const tmp = closure_8();
  context = userId(context[7]).useUserProfileAnalyticsContext().context;
  items = [userId, context, analyticsLocations];
  let tmp5 = null;
  if (null != userId) {
    let obj2 = { style: tmp.previewButton, onPress: tmp4, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = tmp3(tmp2[11]).intl;
    obj2.accessibilityLabel = intl.string(tmp3(tmp2[11]).t["3Qcx6K"]);
    let obj3 = { variant: "body-sm/semibold", color: "text-overlay-light", children: null };
    const intl2 = tmp3(tmp2[11]).intl;
    obj3.children = intl2.string(tmp3(tmp2[11]).t["3Qcx6K"]);
    obj2.children = closure_6(tmp3(tmp2[12]).Text, obj3);
    tmp5 = closure_6(tmp3(tmp2[10]).PressableOpacity, obj2);
  }
  return tmp5;
}
function EditButton(disabled) {
  let flag = disabled.disabled;
  ({ onPress, accessibilityLabel } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: closure_8().editButton, children: null };
  const tmp = closure_8();
  obj.children = timestampProducer(PencilIcon.PencilIcon, { size: "xs", color: nativeDefault.colors.WHITE });
  return timestampProducer(Pressables.PressableOpacity, obj);
}
const View = fn(17).View;
let closure_5 = fn(8479).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
let obj2 = { container: { position: "relative" }, editButton: null, previewButton: null, refreshEditButtonContainer: null };
let size = { position: "absolute", top: 12, right: 12, width: 28, height: 28, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round };
obj2.editButton = size;
const rect = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
obj2.previewButton = rect;
obj2.refreshEditButtonContainer = { position: "absolute", top: 12, right: 12 };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

export default function UserProfileEditBannerButton(isUserProfileEditingRefresh) {
  ({ user, showProfilePreviewButton, showEditButton } = isUserProfileEditingRefresh);
  ({ displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea } = isUserProfileEditingRefresh);
  if (showEditButton === undefined) {
    showEditButton = true;
  }
  ({ onPressEdit, editButtonAccessibilityLabel, editDisabled } = isUserProfileEditingRefresh);
  if (editDisabled === undefined) {
    editDisabled = false;
  }
  let refreshEditButtonContainer = closure_8();
  let tmp = importDefault;
  let obj = dependencyMap;
  ({ ref, onLayout, width } = useMeasuredLayoutDefault());
  const obj2 = { ref, style: refreshEditButtonContainer.container, onLayout, children: null };
  const tmp2 = useMeasuredLayoutDefault();
  items = [timestampProducer(UserProfileBannerDefault, { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: useUserProfileBannerHeightDefault(width), bannerSafeArea }), , ];
  if (showProfilePreviewButton) {
    const obj3 = { userId: user.id };
    showProfilePreviewButton = timestampProducer(ProfilePreviewButton, obj3);
  }
  items[1] = showProfilePreviewButton;
  if (!showEditButton) {
    items[2] = showEditButton;
    obj2.children = items;
    return metroImportDefault(View, obj2);
  } else if (isUserProfileEditingRefresh.isUserProfileEditingRefresh) {
    tmp = EditButtonDefault;
    obj = { style: null, onPress: null, accessibilityLabel: null, disabled: null, variant: "secondary-overlay" };
    refreshEditButtonContainer = refreshEditButtonContainer.refreshEditButtonContainer;
    obj.style = refreshEditButtonContainer;
    obj.onPress = onPressEdit;
    obj.accessibilityLabel = editButtonAccessibilityLabel;
    obj.disabled = editDisabled;
    let tmp6Result = timestampProducer(tmp, obj);
  } else {
    const obj4 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
    tmp6Result = timestampProducer(EditButton, obj4);
  }
  const tmp3 = useUserProfileBannerHeightDefault(width);
};