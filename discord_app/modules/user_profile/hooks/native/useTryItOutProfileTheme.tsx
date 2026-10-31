// === Module 16530: useTryItOutProfileTheme ===

// Module 16530 (useTryItOutProfileTheme)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import useAvatarColor from "useAvatarColor" /* 8715 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8740 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8757 */;
import useProfileThemeDefault from "useProfileTheme" /* 8800 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8731 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTryItOutProfileTheme.tsx");

export default function useTryItOutProfileTheme(id) {
  const tmp3 = useDisplayProfileDefault(id.id);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => tryItOutChanges.getTryItOutChanges());
  ({ tryItOutThemeColors, tryItOutAvatar } = stateFromStoresObject);
  const obj2 = { user: id, displayProfile: tmp3, pendingThemeColors: tryItOutThemeColors, isPreview: true };
  ({ primaryColor, secondaryColor } = useProfileThemeDefault({ user: id, displayProfile: tmp3, pendingThemeColors: tryItOutThemeColors, isPreview: true }));
  const tmp6 = useProfileThemeDefault({ user: id, displayProfile: tmp3, pendingThemeColors: tryItOutThemeColors, isPreview: true });
  let pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: id.id, image: tryItOutAvatar });
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = id.getAvatarURL(undefined, 80);
  }
  const obj5 = { primaryColor, secondaryColor, avatarColors: null };
  const obj4 = { userId: id.id, image: tryItOutAvatar };
  obj5.avatarColors = useAvatarColor.useAvatarColors(pendingAvatarSrc, nativeDefault.unsafe_rawColors.PRIMARY_530, false);
  return obj5;
};