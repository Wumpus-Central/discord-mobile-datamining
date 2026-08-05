// discord_app/modules/user_profile/native/UserProfileEditBannerButton.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
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
  let accessibilityLabel;
  let onPress;
  let flag = disabled.disabled;
  ({ onPress, accessibilityLabel } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  let obj = { accessibilityRole: "button", accessibilityLabel, onPress, disabled: flag, style: createCacheKey().editButton, children: null };
  obj = { size: "xs", color: null };
  obj[1] = importDefault(712).colors.WHITE;
  obj[5] = callback(require(9591) /* PencilIcon */.PencilIcon, obj);
  return callback(require(4812) /* PressableBase */.PressableOpacity, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { position: "relative" }, editButton: null, previewButton: null };
createCacheKey = { position: "absolute", top: 12, right: 12, width: 28, height: 28, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.round };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { position: "absolute", justifyContent: "center", minHeight: 28, top: 12, right: 48, paddingVertical: 4, paddingHorizontal: 12, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, zIndex: 1 };
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileEditBannerButton.tsx");

export default function UserProfileEditBannerButton(arg0) {
  let bannerSafeArea;
  let displayProfile;
  let editButtonAccessibilityLabel;
  let editDisabled;
  let onPressEdit;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let showEditButton;
  let showProfilePreviewButton;
  let user;
  ({ user, showProfilePreviewButton, showEditButton } = arg0);
  ({ displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea } = arg0);
  if (showEditButton === undefined) {
    showEditButton = true;
  }
  ({ editDisabled, onPressEdit, editButtonAccessibilityLabel } = arg0);
  if (editDisabled === undefined) {
    editDisabled = false;
  }
  let obj = { style: createCacheKey().container, children: null };
  const tmp = createCacheKey();
  const items = [callback(importDefault(8761), { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerHeight: importDefault(8747)(), bannerSafeArea }), , ];
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