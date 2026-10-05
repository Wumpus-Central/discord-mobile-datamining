// discord_app/modules/user_profile/hooks/usePendingAvatarSettings.tsx
import react from "../../../../_runtime/00019_react.js";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, isTryItOut;

const useCallback = react.useCallback;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isTryItOut) => {
      let closure_2;
      let first;
      let pendingAvatar;
      let pendingAvatarDecoration;
      let pendingErrors;
      let obj = isTryItOut(576);
      const cResult = obj.c(15);
      isTryItOut = isTryItOut.isTryItOut;
      const guildId = isTryItOut.guildId;
      const tmp4 = guildId(7834)(isTryItOut.analyticsLocations);
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileSettingsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        let tmp7;
        let setTryItOutAvatar;
        if (cResult[2] === isTryItOut) {
          tmp7 = cResult[3];
        }
        const tmpResult = isTryItOut(573);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
        ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
        if (cResult[4] !== guildId) {
          const fn2 = function l(avatar) {
            const obj = UserProfileSettingsActionCreators;
            const obj2 = { guildId, avatar };
            obj.setPendingChanges(obj2);
            let str = "set";
            const announcePendingAvatarChange = ProfileCustomizationUtils.announcePendingAvatarChange;
            ProfileCustomizationUtils;
            if (null == avatar) {
              str = "remove";
            }
            const result = announcePendingAvatarChange(str);
          };
          cResult[4] = guildId;
          cResult[5] = fn2;
          setTryItOutAvatar = fn2;
        } else {
          setTryItOutAvatar = cResult[5];
        }
        if (cResult[6] === guildId) {
          let setTryItOutAvatarDecoration;
          if (cResult[7] === tmp4) {
            setTryItOutAvatarDecoration = cResult[8];
          }
          if (isTryItOut) {
            setTryItOutAvatar = tmp(7838).setTryItOutAvatar;
          }
          if (isTryItOut) {
            setTryItOutAvatarDecoration = tmp(7838).setTryItOutAvatarDecoration;
          }
          if (cResult[9] === pendingAvatar) {
            if (cResult[10] === pendingAvatarDecoration) {
              if (cResult[11] === pendingErrors) {
                if (cResult[12] === setTryItOutAvatar) {
                  let tmp9;
                  if (cResult[13] === setTryItOutAvatarDecoration) {
                    tmp9 = cResult[14];
                  }
                  return tmp9;
                }
              }
            }
          }
          let obj2 = {
            pendingAvatar,
            pendingAvatarDecoration,
            pendingErrors,
            setPendingAvatar: null,
            setPendingAvatarDecoration: setTryItOutAvatarDecoration,
          };
          class P {
            constructor(avatarDecoration) {
              const obj = UserProfileSettingsActionCreators;
              const obj2 = { guildId, avatarDecoration };
              obj.setPendingChanges(obj2);
              if (null != avatarDecoration) {
                closure_2(avatarDecoration);
              }
            }
          }
          cResult[9] = pendingAvatar;
          cResult[10] = pendingAvatarDecoration;
          cResult[11] = pendingErrors;
          cResult[12] = setTryItOutAvatar;
          cResult[13] = setTryItOutAvatarDecoration;
          cResult[14] = obj2;
          tmp9 = obj2;
        }
        class P {
          constructor(avatarDecoration) {
            const obj = UserProfileSettingsActionCreators;
            const obj2 = { guildId, avatarDecoration };
            obj.setPendingChanges(obj2);
            if (null != avatarDecoration) {
              closure_2(avatarDecoration);
            }
          }
        }
        cResult[6] = guildId;
        cResult[7] = tmp4;
        cResult[8] = P;
        setTryItOutAvatarDecoration = P;
      }
      const fn = function s() {
        if (isTryItOut) {
          const tryItOutChanges = UserProfileSettingsStore.getTryItOutChanges();
          ({ tryItOutAvatar: obj3.pendingAvatar, tryItOutAvatarDecoration: obj3.pendingAvatarDecoration } =
            tryItOutChanges);
          const obj5 = {
            pendingAvatar: null,
            pendingAvatarDecoration: null,
            pendingErrors: UserProfileSettingsStore.getErrors(guildId).avatarDecoration,
          };
          return obj5;
        } else {
          const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
          ({ pendingAvatar: obj2.pendingAvatar, pendingAvatarDecoration: obj2.pendingAvatarDecoration } =
            pendingChanges);
          const obj6 = {
            pendingAvatar: null,
            pendingAvatarDecoration: null,
            pendingErrors: UserProfileSettingsStore.getErrors(guildId).avatarDecoration,
          };
          return obj6;
        }
      };
      cResult[1] = guildId;
      cResult[2] = isTryItOut;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : (isTryItOut) => {
      let closure_2;
      let pendingAvatar;
      let pendingAvatarDecoration;
      let pendingErrors;
      isTryItOut = isTryItOut.isTryItOut;
      const guildId = isTryItOut.guildId;
      const tmp2 = guildId(7834)(isTryItOut.analyticsLocations);
      dependencyMap = tmp2;
      let obj = isTryItOut(573);
      const items = [UserProfileSettingsStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        if (isTryItOut) {
          const tryItOutChanges = UserProfileSettingsStore.getTryItOutChanges();
          ({ tryItOutAvatar: obj3.pendingAvatar, tryItOutAvatarDecoration: obj3.pendingAvatarDecoration } =
            tryItOutChanges);
          const obj5 = {
            pendingAvatar: null,
            pendingAvatarDecoration: null,
            pendingErrors: UserProfileSettingsStore.getErrors(guildId).avatarDecoration,
          };
          return obj5;
        } else {
          const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
          ({ pendingAvatar: obj2.pendingAvatar, pendingAvatarDecoration: obj2.pendingAvatarDecoration } =
            pendingChanges);
          const obj6 = {
            pendingAvatar: null,
            pendingAvatarDecoration: null,
            pendingErrors: UserProfileSettingsStore.getErrors(guildId).avatarDecoration,
          };
          return obj6;
        }
      });
      const items1 = [guildId];
      ({ pendingAvatar, pendingAvatarDecoration, pendingErrors } = stateFromStoresObject);
      let setTryItOutAvatar = useCallback((avatar) => {
        const obj = UserProfileSettingsActionCreators;
        const obj2 = { guildId, avatar };
        obj.setPendingChanges(obj2);
        let str = "set";
        const announcePendingAvatarChange = ProfileCustomizationUtils.announcePendingAvatarChange;
        ProfileCustomizationUtils;
        if (null == avatar) {
          str = "remove";
        }
        const result = announcePendingAvatarChange(str);
      }, items1);
      const items2 = [tmp2, guildId];
      let setTryItOutAvatarDecoration = useCallback((avatarDecoration) => {
        const obj = UserProfileSettingsActionCreators;
        const obj2 = { guildId, avatarDecoration };
        obj.setPendingChanges(obj2);
        if (null != avatarDecoration) {
          closure_2(avatarDecoration);
        }
      }, items2);
      let obj2 = {
        pendingAvatar,
        pendingAvatarDecoration,
        pendingErrors,
        setPendingAvatar: setTryItOutAvatar,
        setPendingAvatarDecoration: setTryItOutAvatarDecoration,
      };
      if (isTryItOut) {
        setTryItOutAvatar = tmp3(7838).setTryItOutAvatar;
      }
      if (isTryItOut) {
        setTryItOutAvatarDecoration = tmp3(7838).setTryItOutAvatarDecoration;
      }
      return obj2;
    };
let result = size.fileFinishedImporting("modules/user_profile/hooks/usePendingAvatarSettings.tsx");

export default tmp2;
