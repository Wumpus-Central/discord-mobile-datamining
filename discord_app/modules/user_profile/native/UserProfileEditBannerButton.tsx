// === Module 14208: ProfilePreviewButton ===

// Module 14208 (ProfilePreviewButton)
import ThemesDefault from "Themes" /* 712 */;
import PressableBase from "PressableBase" /* 5020 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8484 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 8831 */;
import PencilIcon from "PencilIcon" /* 10246 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
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
    obj = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    obj[0] = tmp.previewButton;
    obj[1] = tmp4;
    const intl = tmp3(tmp2[9]).intl;
    obj[3] = intl.string(tmp3(tmp2[9]).t["3Qcx6K"]);
    obj = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl2 = tmp3(tmp2[9]).intl;
    obj[2] = intl2.string(tmp3(tmp2[9]).t["3Qcx6K"]);
    obj[4] = callback(tmp3(tmp2[10]).Text, obj);
    tmp5 = callback(tmp3(tmp2[8]).PressableOpacity, obj);
  }
  return tmp5;
}
function EditButton(disabled) {
  let flag = disabled.disabled;
  ({ onPress, accessibilityLabel } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  let obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: callback2().editButton, children: null };
  obj = { size: "xs", color: ThemesDefault.colors.WHITE };
  obj[5] = callback(PencilIcon.PencilIcon, obj);
  return callback(PressableBase.PressableOpacity, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { position: "relative" }, editButton: null, previewButton: null };
createCacheKey = { position: "absolute", top: 12, right: 12, width: 28, height: 28, alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj1 = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

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
  let obj = { style: callback2().container, children: null };
  const tmp = callback2();
  const items = [callback(UserProfileBannerDefault, { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: useUserProfileBannerHeightDefault(), bannerSafeArea }), , ];
  if (showProfilePreviewButton) {
    obj = { userId: null };
    obj[0] = user.id;
    showProfilePreviewButton = tmp5(ProfilePreviewButton, obj);
  }
  items[1] = showProfilePreviewButton;
  if (showEditButton) {
    obj = { onPress: null, accessibilityLabel: null, disabled: null };
    obj[0] = onPressEdit;
    obj[1] = editButtonAccessibilityLabel;
    obj[2] = editDisabled;
    showEditButton = tmp5(EditButton, obj);
  }
  items[2] = showEditButton;
  obj[1] = items;
  return closure_6(View, obj);
};