// discord_app/modules/user_profile/native/showUserProfileActionSheet.tsx
import explicitContentFromProto from "explicitContentFromProto";
import upsertRelationship from "upsertRelationship";

const require = arg1;
function showUserProfileActionSheet(ignoreBlockedSpeedBump, arg1) {
  const timestamp = Date.now();
  const IgnoreProfileSpeedbumpDisabled = require("../../user_settings/UserSettings.tsx") /* explicitContentFromProto */.IgnoreProfileSpeedbumpDisabled;
  if (!ignoreBlockedSpeedBump.ignoreBlockedSpeedBump) {
    const isBlockedResult = upsertRelationship.isBlocked(ignoreBlockedSpeedBump.userId);
    const isIgnoredResult = upsertRelationship.isIgnored(ignoreBlockedSpeedBump.userId);
    if (isIgnoredResult) {
      let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
      const _HermesInternal = HermesInternal;
      obj = {};
      const combined = "UserProfileIgnoredSpeedBump" + ignoreBlockedSpeedBump.userId;
      const merged = Object.assign(ignoreBlockedSpeedBump);
      let str2 = "ignore";
      if (isBlockedResult) {
        str2 = "block";
      }
      obj.speedBumpType = str2;
      obj.openedAt = timestamp;
      obj.openLazy(tmp2(1959)(8706, tmp3.paths), combined, obj);
    }
  }
  const tmp15 = require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(8718, dependencyMap.paths);
  const combined1 = "UserProfile" + ignoreBlockedSpeedBump.userId;
  obj = {};
  const merged1 = Object.assign(ignoreBlockedSpeedBump);
  obj.openedAt = timestamp;
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(tmp15, combined1, obj, "replaceAll");
}
require("processCallbacks").addPostConnectionCallback;
const result = require("upsertRelationship").fileFinishedImporting("modules/user_profile/native/showUserProfileActionSheet.tsx");

export default showUserProfileActionSheet;
export const getUserProfileActionSheetKey = function getUserProfileActionSheetKey(id) {
  return "UserProfile" + id;
};
export const getUserProfileBlockedSpeedBumpActionSheetKey = function getUserProfileBlockedSpeedBumpActionSheetKey(arg0) {
  return "UserProfileBlockedSpeedBump" + arg0;
};
export const getUserProfileIgnoredSpeedBumpActionSheetKey = function getUserProfileIgnoredSpeedBumpActionSheetKey(arg0) {
  return "UserProfileIgnoredSpeedBump" + arg0;
};
export const showUserProfileActionSheetPostConnection = function showUserProfileActionSheetPostConnection(arg0) {
  let closure_0 = arg0;
  addPostConnectionCallback(callback(function*() {
    if (paths === 2) {
      paths = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        paths = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            paths = 3;
            throw arg1;
          } else if (arg0 === 2) {
            paths = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const userId = tmp4;
            c1 = 1;
            paths = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(paths[4])(paths[3], paths.paths);
            return obj1;
          }
        } else if (arg0 === 1) {
          paths = 3;
          throw arg1;
        } else if (arg0 === 2) {
          paths = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          if (null != _default.getUser(userId.userId)) {
            outer1_6(userId);
          }
          paths = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        paths = tmp;
        throw tmp14;
      }
    }
  }));
};