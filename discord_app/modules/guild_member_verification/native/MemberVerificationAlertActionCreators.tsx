// === Module 8529: openMemberVerificationSuccessAlert ===

// Module 8529 (openMemberVerificationSuccessAlert)
import noopAll from "noop" /* 19 */;
import dismissGlobalKeyboardAll from "dismissGlobalKeyboard" /* 1892 */;
import _modDef4656 from "module_4656" /* 4656 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationAlertActionCreators.tsx");

export const openMemberVerificationSuccessAlert = function openMemberVerificationSuccessAlert(guildId, arg1) {
  closure_0 = guildId;
  importDefault = arg1;
  let obj = dismissGlobalKeyboardAll;
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return guildId(dependencyMap[5])(dependencyMap[4], dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          obj.handleConfirmAndAck = closure_1_1;
          return closure_2_4(closure_0, obj);
        };
      });
    }
  };
  _modDef4656.openLazy(obj);
};
export const openMemberVerificationPendingAlert = function openMemberVerificationPendingAlert(guildId) {
  closure_0 = guildId;
  importDefault = arg1;
  let obj = dismissGlobalKeyboardAll;
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return guildId(dependencyMap[5])(dependencyMap[6], dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          closure_0 = closure_1_1;
          obj.onClose = (closure_3) => {
            closure_1_1(closure_1_3[3]).close();
            if (callback != null) {
              callback();
            }
          };
          return closure_2_4(closure_0, obj);
        };
      });
    }
  };
  _modDef4656.openLazy(obj);
};
export const openMemberVerificationCancelPendingAlert = function openMemberVerificationCancelPendingAlert(arg0) {
  ({ guildId: require, confirmText: importDefault, subtitleText: importAll, onClose: dependencyMap } = arg0);
  let obj = dismissGlobalKeyboardAll;
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return onClose(closure_1_3[5])(closure_1_3[7], closure_1_3.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          obj.confirmText = closure_1_1;
          obj.subtitleText = closure_1_2;
          closure_0 = closure_1_3;
          obj.onClose = (closure_3) => {
            closure_1_1(closure_1_3[3]).close();
            if (callback != null) {
              callback();
            }
          };
          return closure_2_4(closure_0, obj);
        };
      });
    }
  };
  _modDef4656.openLazy(obj);
};
export const openMemberVerificationRejectedAlert = function openMemberVerificationRejectedAlert(canWithdraw) {
  ({ guildId: onClose, onClose } = canWithdraw);
  dependencyMap = undefined;
  const fn = (closure_3) => {
    closure_1_1(closure_1_3[3]).close();
    if (callback != null) {
      callback();
    }
  };
  if (canWithdraw.canWithdraw) {
    let obj = { text: null, variant: "destructive", onPress: null };
    const intl2 = onClose(1236).intl;
    obj[0] = intl2.string(onClose(1236).t.g9tK0o);
    obj[2] = function onPress() {
      if (typeof fn !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let obj = onClose(paths[3]);
      obj.close();
      if (onClose != null) {
        onClose();
      }
      obj = { guildId: onClose };
      ({ guildId: onClose, confirmText: onClose, subtitleText: fn, onClose: closure_3 } = obj);
      const result = fn(paths[2]).dismissGlobalKeyboard();
      const obj3 = fn(paths[2]);
      obj = {
        importer() {
          return onClose(closure_1_3[5])(closure_1_3[7], closure_1_3.paths).then((result) => {
            closure_0 = result.default;
            return (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.guildId = closure_0;
              obj.confirmText = closure_1_1;
              obj.subtitleText = closure_1_2;
              closure_0 = closure_1_3;
              obj.onClose = function onClose() { ... };
              return closure_2_4(closure_0, obj);
            };
          });
        }
      };
      onClose(paths[3]).openLazy(obj);
    };
  } else {
    obj = { text: null, onPress: null };
    const intl = onClose(1236).intl;
    obj[0] = intl.string(onClose(1236).t.BddRzS);
    obj[1] = fn;
  }
  dependencyMap = jsx(onClose(4745).Button, obj);
  let result = fn(1892).dismissGlobalKeyboard();
  let obj3 = fn(1892);
  obj = {
    importer() {
      return onClose(paths[5])(paths[10], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          closure_0 = closure_1_1;
          obj.onClose = (closure_3) => {
            closure_1_1(closure_1_3[3]).close();
            if (callback != null) {
              callback();
            }
          };
          obj.secondaryButton = closure_1_3;
          return closure_2_4(closure_0, obj);
        };
      });
    }
  };
  onClose(4656).openLazy(obj);
  const obj4 = onClose(4656);
};
export const openMemberVerificationUpdateAlert = function openMemberVerificationUpdateAlert() {
  let obj = dismissGlobalKeyboardAll;
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return callback(paths[5])(paths[11], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_1_4(closure_0, {});
        };
      });
    }
  };
  _modDef4656.openLazy(obj);
};
export function closeMemberVerificationAlert(arg0) {
  closure_0 = arg0;
  return (closure_3) => {
    closure_1_1(closure_1_3[3]).close();
    if (callback != null) {
      callback();
    }
  };
}
export const openMemberVerificationIncompleteAlert = function openMemberVerificationIncompleteAlert(closure_0) {
  importDefault = arg1;
  let obj = dismissGlobalKeyboardAll;
  const result = obj.dismissGlobalKeyboard();
  obj = {
    isDismissable: true,
    importer() {
      return callback(dependencyMap[5])(dependencyMap[12], dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          closure_0 = closure_1_1;
          obj.onClose = (closure_3) => {
            closure_1_1(closure_1_3[3]).close();
            if (callback != null) {
              callback();
            }
          };
          return closure_2_4(closure_0, obj);
        };
      });
    }
  };
  _modDef4656.openLazy(obj);
};