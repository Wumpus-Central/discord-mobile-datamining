// discord_app/modules/user_profile/hooks/usePendingAvatarSettings.tsx
import set from "../../../../_runtime/00002_set.js";
import noop from "../../../../_runtime/00019_noop.js";
import closure_4 from "../UserProfileSettingsStore.tsx";

noop.useCallback;
let result = set.fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default function usePendingAvatarSettings(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  dependencyMap = undefined;
  const tmp2 = guildId(8005)(isTryItOut.analyticsLocations);
  dependencyMap = tmp2;
  let obj = isTryItOut(647);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = closure_1_4;
    if (isTryItOut) {
      const tryItOutChanges = obj.getTryItOutChanges();
      obj = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
      ({ tryItOutAvatar: obj3[0], tryItOutAvatarDecoration: obj3[1] } = tryItOutChanges);
      obj[2] = closure_1_4.getErrors(guildId).avatarDecoration;
      return obj;
    } else {
      const pendingChanges = obj.getPendingChanges(guildId);
      obj = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
      ({ pendingAvatar: obj2[0], pendingAvatarDecoration: obj2[1] } = pendingChanges);
      obj[2] = closure_1_4.getErrors(guildId).avatarDecoration;
      return obj;
    }
  });
  const items1 = [guildId];
  ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
  let setTryItOutAvatar = useCallback((avatar) => {
    let obj = isTryItOut(8006);
    obj = { guildId, avatar };
    obj.setPendingChanges(obj);
    let str = "set";
    if (null == avatar) {
      str = "remove";
    }
    const result = isTryItOut(8008).announcePendingAvatarChange(str);
  }, items1);
  const items2 = [tmp2, guildId];
  let setTryItOutAvatarDecoration = useCallback((avatarDecoration) => {
    let obj = isTryItOut(8006);
    obj = { guildId, avatarDecoration };
    obj.setPendingChanges(obj);
    if (null != avatarDecoration) {
      dependencyMap(avatarDecoration);
    }
  }, items2);
  obj = { pendingAvatar, pendingAvatarDecoration, pendingErrors, setPendingAvatar: null, setPendingAvatarDecoration: null };
  if (isTryItOut) {
    setTryItOutAvatar = tmp3(8009).setTryItOutAvatar;
  }
  obj[3] = setTryItOutAvatar;
  if (isTryItOut) {
    setTryItOutAvatarDecoration = tmp3(8009).setTryItOutAvatarDecoration;
  }
  obj[4] = setTryItOutAvatarDecoration;
  return obj;
};