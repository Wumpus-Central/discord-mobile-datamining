// discord_app/modules/user_profile/native/showUserProfileActionSheet.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import asyncRequireImpl from "../../../../_runtime/02120_asyncRequireImpl.js";
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
      const tmp8 = asyncRequireImpl(6136, dependencyMap.paths);
      const obj = ActionSheetActionCreatorsDefault;
      const _HermesInternal = HermesInternal;
      const combined = "" + UserProfile + "IgnoredSpeedBump" + ignoreBlockedSpeedBump.userId;
      const obj2 = {};
      const merged = Object.assign(ignoreBlockedSpeedBump);
      let str4 = "ignore";
      if (isBlockedResult) {
        str4 = "block";
      }
      obj2.speedBumpType = str4;
      obj2.openedAt = timestamp;
      return obj.openLazy(tmp8, combined, obj2, str);
    }
    isIgnoredResult = RelationshipStore.isIgnored(ignoreBlockedSpeedBump.userId);
  }
  const tmp20 = asyncRequireImpl(14846, dependencyMap.paths);
  const combined1 = "" + UserProfile + ignoreBlockedSpeedBump.userId;
  const obj4 = {};
  const merged1 = Object.assign(ignoreBlockedSpeedBump);
  obj4.openedAt = timestamp;
  if (str == null) {
    str = "replaceAll";
  }
  return ActionSheetActionCreatorsDefault.openLazy(tmp20, combined1, obj4, str);
}
fn(5847).addPostConnectionCallback;
const UserProfile = "UserProfile";
let closure_7 = new LoggerDefault("showUserProfileActionSheet");
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/showUserProfileActionSheet.tsx");

export default showUserProfileActionSheet;
export const USER_PROFILE_ACTION_SHEET_KEY_PREFIX = "UserProfile";
export function getUserProfileActionSheetKey(userId) {
  return "" + UserProfile + userId;
}
export function getUserProfileBlockedSpeedBumpActionSheetKey(arg0) {
  return "" + UserProfile + "BlockedSpeedBump" + arg0;
}
export function getUserProfileIgnoredSpeedBumpActionSheetKey(arg0) {
  return "" + UserProfile + "IgnoredSpeedBump" + arg0;
}
export function showUserProfileActionSheetPostConnection(arg0) {
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
          return { value: "HermesInternal", done: "+95" };
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
              const obj4 = { value: closure_0(tmp37[5])(tmp37[4], tmp37.paths), done: false };
              return obj4;
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_128_0 = value.default;
                if (null == closure_128_0.getUser(closure_129_0.userId)) {
                  c3 = 1;
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: closure_0(tmp37[5])(tmp37[6], tmp37.paths), done: false };
                  return obj6;
                }
              }
            } else if (2 === tmp7) {
              c3 = 0;
              closure_128_2 = tmp37;
              const _HermesInternal = HermesInternal;
              logger.log("Failed to fetch user " + closure_129_0.userId + ":", closure_128_2);
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                getUser = value.getUser;
                c4 = 4;
                c5 = 1;
                const obj8 = { value: getUser(closure_129_0.userId), done: false };
                return obj8;
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
            return { value: "HermesInternal", done: "+95" };
          }
        } catch (tmp37) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp37;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
  );
}
