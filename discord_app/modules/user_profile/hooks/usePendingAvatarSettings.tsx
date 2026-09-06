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
  const tmp2 = guildId(8163)(isTryItOut.analyticsLocations);
  dependencyMap = tmp2;
  let obj = isTryItOut(563);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = UserProfileSettingsStore;
    if (isTryItOut) {
      const tryItOutChanges = obj.getTryItOutChanges();
      obj = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
      ({ tryItOutAvatar: obj3.pendingAvatar, tryItOutAvatarDecoration: obj3.pendingAvatarDecoration } =
        tryItOutChanges);
      obj.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj;
    } else {
      const pendingChanges = obj.getPendingChanges(guildId);
      obj = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
      ({ pendingAvatar: obj2.pendingAvatar, pendingAvatarDecoration: obj2.pendingAvatarDecoration } = pendingChanges);
      obj.pendingErrors = UserProfileSettingsStore.getErrors(guildId).avatarDecoration;
      return obj;
    }
  });
  const items1 = [guildId];
  ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
  let setTryItOutAvatar = useCallback((avatar) => {
    const obj = { guildId, avatar };
    obj.setPendingChanges(obj);
    let str = "set";
    if (null == avatar) {
      str = "remove";
    }
    const result = ProfileCustomizationUtils.announcePendingAvatarChange(str);
  }, items1);
  const items2 = [tmp2, guildId];
  let setTryItOutAvatarDecoration = useCallback((avatarDecoration) => {
    const obj = { guildId, avatarDecoration };
    obj.setPendingChanges(obj);
    if (null != avatarDecoration) {
      closure_2(avatarDecoration);
    }
  }, items2);
  obj = {
    pendingAvatar,
    pendingAvatarDecoration,
    pendingErrors,
    setPendingAvatar: null,
    setPendingAvatarDecoration: null,
  };
  if (isTryItOut) {
    setTryItOutAvatar = tmp3(8167).setTryItOutAvatar;
  }
  obj.setPendingAvatar = setTryItOutAvatar;
  if (isTryItOut) {
    setTryItOutAvatarDecoration = tmp3(8167).setTryItOutAvatarDecoration;
  }
  obj.setPendingAvatarDecoration = setTryItOutAvatarDecoration;
  return obj;
}
