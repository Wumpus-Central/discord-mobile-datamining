// === Module 16096: useTryItOutProfileTheme ===

// Module 16096 (useTryItOutProfileTheme)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 6131 */;
import useAvatarColor from "useAvatarColor" /* 6338 */;
import useProfileThemeDefault from "useProfileTheme" /* 9443 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 9460 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6345 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTryItOutProfileTheme.tsx");

export default function useTryItOutProfileTheme(id) {
  const tmp3 = useDisplayProfileDefault(id.id);
  items = [UserProfileSettingsStore];
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