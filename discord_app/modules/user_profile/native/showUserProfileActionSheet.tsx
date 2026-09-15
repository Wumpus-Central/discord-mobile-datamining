// discord_app/modules/user_profile/native/showUserProfileActionSheet.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
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
    if (isIgnoredResult) {
      const tmp8 = asyncRequireImpl(8302, dependencyMap.paths);
      const obj = ActionSheetActionCreatorsDefault;
      const _HermesInternal = HermesInternal;
      const combined = "UserProfileIgnoredSpeedBump" + ignoreBlockedSpeedBump.userId;
      const obj2 = {};
      const merged = Object.assign(ignoreBlockedSpeedBump);
      let str3 = "ignore";
      if (isBlockedResult) {
        str3 = "block";
      }
      obj2.speedBumpType = str3;
      obj2.openedAt = timestamp;
      obj.openLazy(tmp8, combined, obj2, str);
    }
    isIgnoredResult = RelationshipStore.isIgnored(ignoreBlockedSpeedBump.userId);
  }
  const tmp20 = asyncRequireImpl(8320, dependencyMap.paths);
  const combined1 = "UserProfile" + ignoreBlockedSpeedBump.userId;
  const obj4 = {};
  const merged1 = Object.assign(ignoreBlockedSpeedBump);
  obj4.openedAt = timestamp;
  if (str == null) {
    str = "replaceAll";
  }
  ActionSheetActionCreatorsDefault.openLazy(tmp20, combined1, obj4, str);
}
fn(5643).addPostConnectionCallback;
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
    asyncGeneratorStep(async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              let getUser;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: closure_0(tmp40[5])(tmp40[4], tmp40.paths), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_128_0 = value.default;
                if (null == closure_128_0.getUser(closure_129_0.userId)) {
                  if (obj4.getIsUserProfileLinkFetchEnabled("showUserProfileActionSheet")) {
                    c3 = 1;
                    c4 = 3;
                    c5 = 1;
                    const obj7 = { value: closure_0(tmp40[5])(tmp40[7], tmp40.paths), done: false };
                    return obj7;
                  }
                  obj4 = closure_0(tmp40[6]);
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
