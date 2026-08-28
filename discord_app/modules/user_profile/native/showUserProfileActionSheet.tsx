// === Module 8836: showUserProfileActionSheet ===

// Module 8836 (showUserProfileActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4135 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "markAllUserIdListsStale" /* 4099 */;

require = arg1;
function showUserProfileActionSheet(ignoreBlockedSpeedBump, arg1) {
  let str = arg1;
  const timestamp = Date.now();
  const IgnoreProfileSpeedbumpDisabled = explicitContentFromProto.IgnoreProfileSpeedbumpDisabled;
  if (!ignoreBlockedSpeedBump.ignoreBlockedSpeedBump) {
    const isBlockedResult = closure_5.isBlocked(ignoreBlockedSpeedBump.userId);
    const isIgnoredResult = closure_5.isIgnored(ignoreBlockedSpeedBump.userId);
    if (isIgnoredResult) {
      const tmp8 = tmp2(2010)(8837, tmp3.paths);
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
  const tmp20 = asyncRequireImpl(8840, dependencyMap.paths);
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
const result = require("set").fileFinishedImporting("modules/user_profile/native/showUserProfileActionSheet.tsx");

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
  closure_0 = arg0;
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
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_0(paths[4])(paths[3], paths.paths);
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
            closure_1_6(userId);
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