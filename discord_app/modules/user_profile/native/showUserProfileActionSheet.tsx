// discord_app/modules/user_profile/native/showUserProfileActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";

require = fn;
function showUserProfileActionSheet(ignoreBlockedSpeedBump, arg1) {
  const timestamp = Date.now();
  const IgnoreProfileSpeedbumpDisabled = explicitContentFromProto.IgnoreProfileSpeedbumpDisabled;
  if (!ignoreBlockedSpeedBump.ignoreBlockedSpeedBump) {
    const isBlockedResult = closure_5.isBlocked(ignoreBlockedSpeedBump.userId);
    if (isIgnoredResult) {
      const _HermesInternal = HermesInternal;
      let obj = {};
      const combined = "UserProfileIgnoredSpeedBump" + ignoreBlockedSpeedBump.userId;
      const merged = Object.assign(ignoreBlockedSpeedBump);
      let str2 = "ignore";
      if (isBlockedResult) {
        str2 = "block";
      }
      obj.speedBumpType = str2;
      obj.openedAt = timestamp;
      obj.openLazy(asyncRequireImpl(8930, dependencyMap.paths), combined, obj);
      const tmp8 = asyncRequireImpl(8930, dependencyMap.paths);
    }
    isIgnoredResult = closure_5.isIgnored(ignoreBlockedSpeedBump.userId);
  }
  const tmp15 = asyncRequireImpl(8943, dependencyMap.paths);
  const combined1 = "UserProfile" + ignoreBlockedSpeedBump.userId;
  obj = {};
  const merged1 = Object.assign(ignoreBlockedSpeedBump);
  obj.openedAt = timestamp;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(tmp15, combined1, obj, "replaceAll");
}
require("processCallbacks").addPostConnectionCallback;
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/showUserProfileActionSheet.tsx");

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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp14) {
        paths = tmp;
        throw tmp14;
      }
    }
  }));
};