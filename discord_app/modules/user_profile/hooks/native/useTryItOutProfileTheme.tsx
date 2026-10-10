// === Module 14908: useTryItOutProfileTheme ===

// Module 14908 (useTryItOutProfileTheme)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useAvatarColor from "useAvatarColor" /* 8268 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8293 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8310 */;
import useProfileThemeDefault from "useProfileTheme" /* 8353 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTryItOutProfileTheme.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTryItOutProfileTheme(id) {
  const cResult = c.c(13);
  const tmp5 = useDisplayProfileDefault(id.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function l() {
      return tryItOutChanges.getTryItOutChanges();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp6, tmp7);
  ({ tryItOutThemeColors, tryItOutAvatar } = stateFromStoresObject);
  if (cResult[2] === id) {
    if (cResult[3] === tmp5) {
      if (cResult[4] === tryItOutThemeColors) {
        let tmp10 = cResult[5];
      }
      ({ primaryColor, secondaryColor } = useProfileThemeDefault(tmp10));
      if (cResult[6] === id) {
        if (cResult[7] === tryItOutAvatar) {
          let tmp12 = cResult[8];
        }
        const avatarColors = useAvatarColor.useAvatarColors(tmp12, nativeDefault.unsafe_rawColors.PRIMARY_530, false);
        if (cResult[9] === avatarColors) {
          if (cResult[10] === primaryColor) {
            if (cResult[11] === secondaryColor) {
              let tmp16 = cResult[12];
            }
            return tmp16;
          }
        }
        const obj2 = { primaryColor, secondaryColor, avatarColors };
        cResult[9] = avatarColors;
        cResult[10] = primaryColor;
        cResult[11] = secondaryColor;
        cResult[12] = obj2;
        tmp16 = obj2;
        const tmpResult3 = useAvatarColor;
      }
      const tmp11 = useProfileThemeDefault(tmp10);
      const obj3 = { userId: id.id, image: tryItOutAvatar };
      let pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc(obj3);
      if (pendingAvatarSrc == null) {
        pendingAvatarSrc = id.getAvatarURL(undefined, 80);
      }
      cResult[6] = id;
      cResult[7] = tryItOutAvatar;
      cResult[8] = pendingAvatarSrc;
      tmp12 = pendingAvatarSrc;
      const tmpResult4 = RecentAvatarUtils;
    }
  }
  const obj4 = { user: id, displayProfile: tmp5, pendingThemeColors: tryItOutThemeColors, isPreview: true };
  cResult[2] = id;
  cResult[3] = tmp5;
  cResult[4] = tryItOutThemeColors;
  cResult[5] = obj4;
  tmp10 = obj4;
  const tmpResult = initialize;
}) : (function useTryItOutProfileTheme(id) {
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
});