// discord_app/modules/user_profile/native/showUserProfileActionSheet.tsx
import timestampDefault from "../../debug/Logger.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../stores/RelationshipStore.tsx";

require = arg1;
function showUserProfileActionSheet(ignoreBlockedSpeedBump, arg1) {
  let str = arg1;
  const timestamp = Date.now();
  const IgnoreProfileSpeedbumpDisabled = explicitContentFromProto.IgnoreProfileSpeedbumpDisabled;
  if (!ignoreBlockedSpeedBump.ignoreBlockedSpeedBump) {
    const isBlockedResult = closure_5.isBlocked(ignoreBlockedSpeedBump.userId);
    const isIgnoredResult = closure_5.isIgnored(ignoreBlockedSpeedBump.userId);
    if (isIgnoredResult) {
      const tmp8 = tmp2(1896)(8182, tmp3.paths);
      let obj = ACTION_SHEET_HEIGHT_HALFDefault;
      const _HermesInternal = HermesInternal;
      const combined = "UserProfileIgnoredSpeedBump" + ignoreBlockedSpeedBump.userId;
      obj = {};
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
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(tmp20, combined1, obj, str);
}
require("processCallbacks").addPostConnectionCallback;
let closure_6 = new timestampDefault("showUserProfileActionSheet");
const tmp2 = new timestampDefault("showUserProfileActionSheet");
const result = require("set").fileFinishedImporting("modules/user_profile/native/showUserProfileActionSheet.tsx");

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
    callback(function* () {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let getUser = tmp3;
              let authStore = tmp7;
              authStore = undefined;
              getUser = undefined;
              c4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(closure_1_2[5])(closure_1_2[4], closure_1_2.paths);
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                authStore = arg1.default;
                if (null == authStore.getUser(authStore.userId)) {
                  let obj3 = closure_1_0(closure_1_2[6]);
                  if (obj3.getIsUserProfileLinkFetchEnabled("showUserProfileActionSheet")) {
                    c3 = 1;
                    c4 = 3;
                    c5 = 1;
                    obj3 = { value: null, done: false };
                    obj3[0] = closure_1_0(closure_1_2[5])(closure_1_2[7], closure_1_2.paths);
                    return obj3;
                  }
                }
              }
            } else if (2 === tmp7) {
              c3 = 0;
              const _HermesInternal = HermesInternal;
              closure_1_6.log("Failed to fetch user " + authStore.userId + ":", closure_2);
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                getUser = arg1.getUser;
                c4 = 4;
                c5 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = getUser(authStore.userId);
                return obj5;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = 0;
            }
            if (null != authStore.getUser(closure_1_0.userId)) {
              closure_1_7(closure_1_0);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp40) {
          closure_2 = tmp40;
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
