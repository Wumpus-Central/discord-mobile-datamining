import handleFormOpen from "handleFormOpen";

require("noop").useCallback;
let result = require("useTrackCollectiblesItemTryOut").fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default function usePendingAvatarSettings(isTryItOut) {
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingErrors;
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  let dependencyMap;
  const tmp2 = guildId(8074)(isTryItOut.analyticsLocations);
  dependencyMap = tmp2;
  let obj = isTryItOut(647);
  const items = [handleFormOpen];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = outer1_4;
    if (isTryItOut) {
      const tryItOutChanges = obj.getTryItOutChanges();
      obj = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
      ({ tryItOutAvatar: obj3[0], tryItOutAvatarDecoration: obj3[1] } = tryItOutChanges);
      obj[2] = outer1_4.getErrors(guildId).avatarDecoration;
      return obj;
    } else {
      const pendingChanges = obj.getPendingChanges(guildId);
      obj = { pendingAvatar: null, pendingAvatarDecoration: null, pendingErrors: null };
      ({ pendingAvatar: obj2[0], pendingAvatarDecoration: obj2[1] } = pendingChanges);
      obj[2] = outer1_4.getErrors(guildId).avatarDecoration;
      return obj;
    }
  });
  const items1 = [guildId];
  ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
  let setTryItOutAvatar = useCallback((avatar) => {
    let obj = isTryItOut(_undefined[4]);
    obj = { guildId, avatar };
    obj.setPendingChanges(obj);
    let str = "set";
    if (null == avatar) {
      str = "remove";
    }
    const result = isTryItOut(_undefined[5]).announcePendingAvatarChange(str);
  }, items1);
  const items2 = [tmp2, guildId];
  let setTryItOutAvatarDecoration = useCallback((avatarDecoration) => {
    let obj = isTryItOut(_undefined[4]);
    obj = { guildId, avatarDecoration };
    obj.setPendingChanges(obj);
    if (null != avatarDecoration) {
      _undefined(avatarDecoration);
    }
  }, items2);
  obj = { pendingAvatar, pendingAvatarDecoration, pendingErrors, setPendingAvatar: null, setPendingAvatarDecoration: null };
  if (isTryItOut) {
    setTryItOutAvatar = tmp3(8078).setTryItOutAvatar;
  }
  obj[3] = setTryItOutAvatar;
  if (isTryItOut) {
    setTryItOutAvatarDecoration = tmp3(8078).setTryItOutAvatarDecoration;
  }
  obj[4] = setTryItOutAvatarDecoration;
  return obj;
};