// === Module 8722: usePendingAvatarSettings ===

// Module 8722 (usePendingAvatarSettings)
import _mod19 from "module_19" /* 19 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8727 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8729 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
let result = size.fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default function usePendingAvatarSettings(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  const tmp2 = guildId(8726)(isTryItOut.analyticsLocations);
  dependencyMap = tmp2;
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = isTryItOut(563).useStateFromStoresObject(items, () => {
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
    const obj3 = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
    if (isTryItOut) {
      const tryItOutChanges = UserProfileSettingsStore.getTryItOutChanges();
      ({ tryItOutAvatar: obj2.pendingAvatar, tryItOutAvatarDecoration } = tryItOutChanges);
      if (tryItOutAvatarDecoration == null) {
        tryItOutAvatarDecoration = pendingChanges.pendingAvatarDecoration;
      }
      obj3.pendingAvatarDecoration = tryItOutAvatarDecoration;
      obj3.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj3;
    } else {
      ({ pendingAvatar: obj2.pendingAvatar, pendingAvatarDecoration: obj2.pendingAvatarDecoration } = pendingChanges);
      obj3.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj3;
    }
  });
  const items1 = [guildId];
  ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
  let setTryItOutAvatar = useCallback((avatar) => {
    UserProfileSettingsActionCreators.setPendingChanges({ guildId, avatar });
    const obj2 = { guildId, avatar };
    let str = "set";
    if (null == avatar) {
      str = "remove";
    }
    const result = ProfileCustomizationUtils.announcePendingAvatarChange(str);
  }, items1);
  const items2 = [tmp2, guildId];
  let setTryItOutAvatarDecoration = useCallback((avatarDecoration) => {
    UserProfileSettingsActionCreators.setPendingChanges({ guildId, avatarDecoration });
    if (null != avatarDecoration) {
      closure_2(avatarDecoration);
    }
    const obj2 = { guildId, avatarDecoration };
  }, items2);
  let obj2 = { pendingAvatar, pendingAvatarDecoration, pendingErrors, setPendingAvatar: null, setPendingAvatarDecoration: null };
  if (isTryItOut) {
    setTryItOutAvatar = tmp3(8730).setTryItOutAvatar;
  }
  obj2.setPendingAvatar = setTryItOutAvatar;
  if (isTryItOut) {
    setTryItOutAvatarDecoration = tmp3(8730).setTryItOutAvatarDecoration;
  }
  obj2.setPendingAvatarDecoration = setTryItOutAvatarDecoration;
  return obj2;
};