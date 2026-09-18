// === Module 14807: UserProfileEditBannerButton ===

// Module 14807 (UserProfileEditBannerButton)
import nativeDefault from "native" /* 576 */;
import Pressables from "Pressables" /* 5292 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8409 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 8460 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8476 */;
import PencilIcon from "PencilIcon" /* 10491 */;
import noop from "module_19" /* 19 */;

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
    const obj2 = { style: tmp.previewButton, onPress: tmp4, accessibilityRole: "button", accessibilityLabel: null, children: null };
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
  const obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: closure_7().editButton, children: null };
  const tmp = closure_7();
  obj.children = hasOwnProperty(PencilIcon.PencilIcon, { size: "xs", color: nativeDefault.colors.WHITE });
  return hasOwnProperty(Pressables.PressableOpacity, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { position: "relative" }, editButton: null, previewButton: null };
let size = { position: "absolute", top: 12, right: 12, width: 28, height: 28, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round };
obj2.editButton = size;
const rect = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
obj2.previewButton = rect;
let closure_7 = createStyles.createStyles(obj2);
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
  const obj = { style: closure_7().container, children: null };
  const tmp = closure_7();
  const items = [hasOwnProperty(UserProfileBannerDefault, { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: useUserProfileBannerHeightDefault(), bannerSafeArea }), , ];
  if (showProfilePreviewButton) {
    const obj2 = { userId: user.id };
    showProfilePreviewButton = hasOwnProperty(ProfilePreviewButton, obj2);
  }
  items[1] = showProfilePreviewButton;
  if (showEditButton) {
    const obj3 = { onPress: onPressEdit, accessibilityLabel: editButtonAccessibilityLabel, disabled: editDisabled };
    showEditButton = hasOwnProperty(EditButton, obj3);
  }
  items[2] = showEditButton;
  obj.children = items;
  return timestampProducer(View, obj);
};