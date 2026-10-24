// === Module 8648: usePendingAvatarSettings ===

// Module 8648 (usePendingAvatarSettings)
import _mod19 from "module_19" /* 19 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8653 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8655 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8649 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
let result = size.fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingAvatarSettings(isTryItOut) {
  const cResult = isTryItOut(576).c(15);
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  const tmp4 = guildId(8652)(isTryItOut.analyticsLocations);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === isTryItOut) {
      let tmp7 = cResult[3];
    }
    const stateFromStoresObject = tmp(573).useStateFromStoresObject(first, tmp7);
    ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
    if (cResult[4] !== guildId) {
      const fn2 = function l(avatar) {
        UserProfileSettingsActionCreators.setPendingChanges({ guildId, avatar });
        const obj2 = { guildId, avatar };
        let str = "set";
        if (null == avatar) {
          str = "remove";
        }
        const result = ProfileCustomizationUtils.announcePendingAvatarChange(str);
      };
      cResult[4] = guildId;
      cResult[5] = fn2;
      let setTryItOutAvatar = fn2;
    } else {
      setTryItOutAvatar = cResult[5];
    }
    if (cResult[6] === guildId) {
      if (cResult[7] === tmp4) {
        let setTryItOutAvatarDecoration = cResult[8];
      }
      if (isTryItOut) {
        setTryItOutAvatar = tmp(8656).setTryItOutAvatar;
      }
      if (isTryItOut) {
        setTryItOutAvatarDecoration = tmp(8656).setTryItOutAvatarDecoration;
      }
      if (cResult[9] === pendingAvatar) {
        if (cResult[10] === pendingAvatarDecoration) {
          if (cResult[11] === pendingErrors) {
            if (cResult[12] === setTryItOutAvatar) {
              if (cResult[13] === setTryItOutAvatarDecoration) {
                let tmp9 = cResult[14];
              }
              return tmp9;
            }
          }
        }
      }
      let obj2 = { pendingAvatar, pendingAvatarDecoration, pendingErrors, setPendingAvatar: null, setPendingAvatarDecoration: null };
      class O {
        constructor(arg0) {
          obj = closure_0(closure_2[6]);
          obj1 = { guildId, avatarDecoration: isTryItOut };
          setPendingChangesResult = obj.setPendingChanges(obj1);
          if (null != isTryItOut) {
            tmp2 = closure_2;
            tmp3 = closure_2(isTryItOut);
          }
          return;
        }
      }
      obj2.setPendingAvatarDecoration = setTryItOutAvatarDecoration;
      cResult[9] = pendingAvatar;
      cResult[10] = pendingAvatarDecoration;
      cResult[11] = pendingErrors;
      cResult[12] = setTryItOutAvatar;
      cResult[13] = setTryItOutAvatarDecoration;
      cResult[14] = obj2;
      tmp9 = obj2;
    }
    class O {
      constructor(arg0) {
        obj = closure_0(closure_2[6]);
        obj1 = { guildId, avatarDecoration: isTryItOut };
        setPendingChangesResult = obj.setPendingChanges(obj1);
        if (null != isTryItOut) {
          tmp2 = closure_2;
          tmp3 = closure_2(isTryItOut);
        }
        return;
      }
    }
    cResult[6] = guildId;
    cResult[7] = tmp4;
    cResult[8] = O;
    setTryItOutAvatarDecoration = O;
    const tmpResult = tmp(573);
  }
  const fn = function s() {
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
  };
  cResult[1] = guildId;
  cResult[2] = isTryItOut;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = isTryItOut(576);
}) : (function usePendingAvatarSettings(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  const guildId = isTryItOut.guildId;
  const tmp2 = guildId(8652)(isTryItOut.analyticsLocations);
  dependencyMap = tmp2;
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = isTryItOut(573).useStateFromStoresObject(items, () => {
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
    setTryItOutAvatar = tmp3(8656).setTryItOutAvatar;
  }
  obj2.setPendingAvatar = setTryItOutAvatar;
  if (isTryItOut) {
    setTryItOutAvatarDecoration = tmp3(8656).setTryItOutAvatarDecoration;
  }
  obj2.setPendingAvatarDecoration = setTryItOutAvatarDecoration;
  return obj2;
});