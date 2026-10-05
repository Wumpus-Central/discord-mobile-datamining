// === Module 7850: showUserProfileActionSheet ===

// Module 7850 (showUserProfileActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import UserSettings from "UserSettings" /* 2028 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 5948 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import size from "module_2" /* 2 */;

let authStore, c4, c5;

function showUserProfileActionSheet(ignoreBlockedSpeedBump, arg1) {
  let str3;
  let str = arg1;
  const timestamp = Date.now();
  const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
  if (!ignoreBlockedSpeedBump.ignoreBlockedSpeedBump) {
    const isBlockedResult = RelationshipStore.isBlocked(ignoreBlockedSpeedBump.userId);
    const isIgnoredResult = RelationshipStore.isIgnored(ignoreBlockedSpeedBump.userId);
    if (isIgnoredResult) {
      const tmp8 = asyncRequire(7853, dependencyMap.paths);
      const _HermesInternal = HermesInternal;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const combined = "UserProfileIgnoredSpeedBump" + ignoreBlockedSpeedBump.userId;
      const obj = { speedBumpType: str3, openedAt: timestamp };
      const merged = Object.assign(ignoreBlockedSpeedBump);
      str3 = "ignore";
      if (isBlockedResult) {
        str3 = "block";
      }
      openLazy(tmp8, combined, obj, str);
    }
  }
  const tmp21 = asyncRequire(7871, dependencyMap.paths);
  const openLazy2 = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const combined1 = "UserProfile" + ignoreBlockedSpeedBump.userId;
  const obj2 = { openedAt: timestamp };
  const merged1 = Object.assign(ignoreBlockedSpeedBump);
  if (str == null) {
    str = "replaceAll";
  }
  openLazy2(tmp21, combined1, obj2, str);
}
const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
let closure_6 = new LoggerDefault("showUserProfileActionSheet");
new LoggerDefault("showUserProfileActionSheet");
const result = size.fileFinishedImporting("modules/user_profile/native/showUserProfileActionSheet.tsx");

export default showUserProfileActionSheet;
export const getUserProfileActionSheetKey = function getUserProfileActionSheetKey(userId) {
  return "UserProfile" + userId;
};
export const getUserProfileBlockedSpeedBumpActionSheetKey = function getUserProfileBlockedSpeedBumpActionSheetKey(arg0) {
  return "UserProfileBlockedSpeedBump" + arg0;
};
export const getUserProfileIgnoredSpeedBumpActionSheetKey = function getUserProfileIgnoredSpeedBumpActionSheetKey(arg0) {
  return "UserProfileIgnoredSpeedBump" + arg0;
};
export const showUserProfileActionSheetPostConnection = function showUserProfileActionSheetPostConnection(arg0) {
  let closure_0 = arg0;
  const tmp = addPostConnectionCallback(_asyncToGenerator(async () => {
    let closure_2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let getUser;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            authStore = undefined;
            getUser = undefined;
            c4 = 1;
            c5 = 1;
            const obj5 = { value: authStore(tmp37[5])(tmp37[4], tmp37.paths), done: false };
            return obj5;
          }
        } else {
          if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              authStore = value.default;
              if (null == authStore.getUser(closure_129_0.userId)) {
                const obj4 = authStore(tmp37[6]);
                if (obj4.getIsUserProfileLinkFetchEnabled("showUserProfileActionSheet")) {
                  c3 = 1;
                  c4 = 3;
                  c5 = 1;
                  const obj7 = { value: authStore(tmp37[5])(tmp37[7], tmp37.paths), done: false };
                  return obj7;
                }
              }
            }
          } else if (2 === c4) {
            c3 = 0;
            const _HermesInternal = HermesInternal;
            logger.log("Failed to fetch user " + closure_129_0.userId + ":", tmp37);
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              getUser = value.getUser;
              c4 = 4;
              c5 = 1;
              const obj9 = { value: getUser(closure_129_0.userId), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          if (null != authStore.getUser(closure_129_0.userId)) {
            showUserProfileActionSheet(closure_129_0);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp37) {
        if (0 === c3) {
          c5 = 3;
          throw tmp37;
        } else {
          c4 = 2;
        }
      }
    }
  }));
};