// discord_app/modules/user_profile/hooks/usePendingAvatarSettings.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

_mod19.useCallback;
let result = size.fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default function usePendingAvatarSettings(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  const tmp2 = guildId(8436)(isTryItOut.analyticsLocations);
  dependencyMap = tmp2;
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = isTryItOut(563).useStateFromStoresObject(items, () => {
    if (isTryItOut) {
      const tryItOutChanges = UserProfileSettingsStore.getTryItOutChanges();
      const obj5 = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
      ({ tryItOutAvatar: obj3.pendingAvatar, tryItOutAvatarDecoration: obj3.pendingAvatarDecoration } =
        tryItOutChanges);
      obj5.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj5;
    } else {
      const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
      const obj6 = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
      ({ pendingAvatar: obj2.pendingAvatar, pendingAvatarDecoration: obj2.pendingAvatarDecoration } = pendingChanges);
      obj6.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj6;
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
  let obj2 = {
    pendingAvatar,
    pendingAvatarDecoration,
    pendingErrors,
    setPendingAvatar: null,
    setPendingAvatarDecoration: null,
  };
  if (isTryItOut) {
    setTryItOutAvatar = tmp3(8440).setTryItOutAvatar;
  }
  obj2.setPendingAvatar = setTryItOutAvatar;
  if (isTryItOut) {
    setTryItOutAvatarDecoration = tmp3(8440).setTryItOutAvatarDecoration;
  }
  obj2.setPendingAvatarDecoration = setTryItOutAvatarDecoration;
  return obj2;
}
