// discord_app/modules/user_profile/native/showUserProfileActionSheet.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import UserSettings from "../../user_settings/UserSettings.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

require = fn;
function showUserProfileActionSheet(ignoreBlockedSpeedBump, arg1) {
  let str = arg1;
  const timestamp = Date.now();
  const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
  if (!ignoreBlockedSpeedBump.ignoreBlockedSpeedBump) {
    const isBlockedResult = RelationshipStore.isBlocked(ignoreBlockedSpeedBump.userId);
    const isIgnoredResult = RelationshipStore.isIgnored(ignoreBlockedSpeedBump.userId);
    if (isIgnoredResult) {
      const tmp8 = tmp2(1896)(8182, tmp3.paths);
      const _HermesInternal = HermesInternal;
      const combined = "UserProfileIgnoredSpeedBump" + ignoreBlockedSpeedBump.userId;
      let obj = {};
      const merged = Object.assign(ignoreBlockedSpeedBump);
      let str3 = "ignore";
      if (isBlockedResult) {
        str3 = "block";
      }
      obj.speedBumpType = str3;
      obj.openedAt = timestamp;
      obj.openLazy(tmp8, combined, obj, str);
    }
  }
  const tmp20 = asyncRequireImpl(8200, dependencyMap.paths);
  const combined1 = "UserProfile" + ignoreBlockedSpeedBump.userId;
  obj = {};
  const merged1 = Object.assign(ignoreBlockedSpeedBump);
  obj.openedAt = timestamp;
  if (str == null) {
    str = "replaceAll";
  }
  ActionSheetActionCreatorsDefault.openLazy(tmp20, combined1, obj, str);
}
fn(5558).addPostConnectionCallback;
let closure_6 = new LoggerDefault("showUserProfileActionSheet");
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/showUserProfileActionSheet.tsx");

export default showUserProfileActionSheet;
export const getUserProfileActionSheetKey = function getUserProfileActionSheetKey(userId) {
  return "UserProfile" + userId;
};
export const getUserProfileBlockedSpeedBumpActionSheetKey = function getUserProfileBlockedSpeedBumpActionSheetKey(
  arg0,
) {
  return "UserProfileBlockedSpeedBump" + arg0;
};
export const getUserProfileIgnoredSpeedBumpActionSheetKey = function getUserProfileIgnoredSpeedBumpActionSheetKey(
  arg0,
) {
  return "UserProfileIgnoredSpeedBump" + arg0;
};
export const showUserProfileActionSheetPostConnection = function showUserProfileActionSheetPostConnection(arg0) {
  closure_0 = arg0;
  addPostConnectionCallback(
    asyncGeneratorStep(async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              let getUser;
              c4 = 1;
              c5 = 1;
              const obj1 = { value: closure_0(tmp40[5])(tmp40[4], tmp40.paths), done: false };
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else {
                closure_128_0 = value.default;
                if (null == closure_128_0.getUser(closure_129_0.userId)) {
                  let obj3 = closure_0(tmp40[6]);
                  if (obj3.getIsUserProfileLinkFetchEnabled("showUserProfileActionSheet")) {
                    c3 = 1;
                    c4 = 3;
                    c5 = 1;
                    obj3 = { value: closure_0(tmp40[5])(tmp40[7], tmp40.paths), done: false };
                    return obj3;
                  }
                }
              }
            } else if (2 === tmp7) {
              c3 = 0;
              closure_128_2 = tmp40;
              const _HermesInternal = HermesInternal;
              logger.log("Failed to fetch user " + closure_129_0.userId + ":", closure_128_2);
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                getUser = value.getUser;
                c4 = 4;
                c5 = 1;
                const obj5 = { value: getUser(closure_129_0.userId), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
            }
            if (null != closure_128_0.getUser(closure_129_0.userId)) {
              showUserProfileActionSheet(closure_129_0);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp40) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp40;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
  );
};
