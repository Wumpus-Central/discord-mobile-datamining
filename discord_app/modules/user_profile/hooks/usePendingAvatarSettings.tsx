// discord_app/modules/user_profile/hooks/usePendingAvatarSettings.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import handleFormOpen from "../UserProfileSettingsStore.tsx";

noop.useCallback;
let result = obj132.fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default function usePendingAvatarSettings(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  const tmp2 = guildId(8373)(isTryItOut.analyticsLocations);
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
    isTryItOut(8374);
    const obj = { guildId, avatar };
    obj.setPendingChanges(obj);
    let str = "set";
    if (null == avatar) {
      str = "remove";
    }
    const result = isTryItOut(8376).announcePendingAvatarChange(str);
  }, items1);
  const items2 = [tmp2, guildId];
  let setTryItOutAvatarDecoration = useCallback((avatarDecoration) => {
    isTryItOut(8374);
    const obj = { guildId, avatarDecoration };
    obj.setPendingChanges(obj);
    if (null != avatarDecoration) {
      dependencyMap(avatarDecoration);
    }
  }, items2);
  obj = { pendingAvatar, pendingAvatarDecoration, pendingErrors, setPendingAvatar: null, setPendingAvatarDecoration: null };
  if (isTryItOut) {
    setTryItOutAvatar = tmp3(8377).setTryItOutAvatar;
  }
  obj[3] = setTryItOutAvatar;
  if (isTryItOut) {
    setTryItOutAvatarDecoration = tmp3(8377).setTryItOutAvatarDecoration;
  }
  obj[4] = setTryItOutAvatarDecoration;
  return obj;
};