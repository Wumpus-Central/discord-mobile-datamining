// discord_app/modules/guild_member_verification/native/MemberVerificationAlertActionCreators.tsx
import "noop";
import { jsx } from "jsxProd";
import { AlertActionCreators } from "../../../actions/native/AlertActionCreators.tsx";

const require = arg1;
let result = require("dismissGlobalKeyboard").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationAlertActionCreators.tsx");

export const openMemberVerificationSuccessAlert = function openMemberVerificationSuccessAlert(guildId, arg1) {
  let closure_0 = guildId;
  const importDefault = arg1;
  let obj = importAll(1872);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return guildId(outer1_3[5])(outer1_3[4], outer1_3.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          obj.handleConfirmAndAck = outer1_1;
          return outer2_4(closure_0, obj);
        };
      });
    }
  };
  AlertActionCreators.openLazy(obj);
};
export const openMemberVerificationPendingAlert = function openMemberVerificationPendingAlert(guildId) {
  let closure_0 = guildId;
  const importDefault = arg1;
  let obj = importAll(1872);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return guildId(outer1_3[5])(outer1_3[6], outer1_3.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          closure_0 = outer1_1;
          obj.onClose = (arg0) => {
            outer1_1(outer1_3[3]).close();
            if (callback != null) {
              callback();
            }
          };
          return outer2_4(closure_0, obj);
        };
      });
    }
  };
  AlertActionCreators.openLazy(obj);
};
export const openMemberVerificationCancelPendingAlert = function openMemberVerificationCancelPendingAlert(arg0) {
  let dependencyMap;
  let importAll;
  let importDefault;
  let require;
  ({ guildId: require, confirmText: importDefault, subtitleText: importAll, onClose: dependencyMap } = arg0);
  let obj = importAll(1872);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return outer1_0(outer1_3[5])(outer1_3[7], outer1_3.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          obj.confirmText = outer1_1;
          obj.subtitleText = outer1_2;
          closure_0 = outer1_3;
          obj.onClose = (arg0) => {
            outer1_1(outer1_3[3]).close();
            if (callback != null) {
              callback();
            }
          };
          return outer2_4(closure_0, obj);
        };
      });
    }
  };
  AlertActionCreators.openLazy(obj);
};
export const openMemberVerificationRejectedAlert = function openMemberVerificationRejectedAlert(canWithdraw) {
  let onClose;
  ({ guildId: onClose, onClose } = canWithdraw);
  let dependencyMap;
  const fn = (arg0) => {
    outer1_1(outer1_3[3]).close();
    if (callback != null) {
      callback();
    }
  };
  if (canWithdraw.canWithdraw) {
    let obj = { text: null, variant: "destructive", onPress: null };
    const intl2 = tmp2(1236).intl;
    obj[0] = intl2.string(tmp2(1236).t.g9tK0o);
    obj[2] = function onPress() {
      let closure_3;
      let fn;
      let onClose;
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
          return outer1_0(outer1_3[5])(outer1_3[7], outer1_3.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.guildId = closure_0;
              obj.confirmText = outer1_1;
              obj.subtitleText = outer1_2;
              closure_0 = outer1_3;
              obj.onClose = function onClose() { ... };
              return outer2_4(closure_0, obj);
            };
          });
        }
      };
      onClose(paths[3]).openLazy(obj);
    };
  } else {
    obj = { text: null, onPress: null };
    const intl = tmp2(1236).intl;
    obj[0] = intl.string(tmp2(1236).t.BddRzS);
    obj[1] = fn;
  }
  dependencyMap = jsx(onClose(4712).Button, obj);
  let result = fn(1872).dismissGlobalKeyboard();
  let obj3 = fn(1872);
  const tmp = jsx;
  obj = {
    importer() {
      return onClose(paths[5])(paths[10], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          closure_0 = outer1_1;
          obj.onClose = (arg0) => {
            outer1_1(outer1_3[3]).close();
            if (callback != null) {
              callback();
            }
          };
          obj.secondaryButton = outer1_3;
          return outer2_4(closure_0, obj);
        };
      });
    }
  };
  onClose(4641).openLazy(obj);
};
export const openMemberVerificationUpdateAlert = function openMemberVerificationUpdateAlert() {
  let obj = importAll(1872);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return callback(paths[5])(paths[11], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return outer1_4(closure_0, {});
        };
      });
    }
  };
  AlertActionCreators.openLazy(obj);
};
export function closeMemberVerificationAlert(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    outer1_1(outer1_3[3]).close();
    if (callback != null) {
      callback();
    }
  };
}
export const openMemberVerificationIncompleteAlert = function openMemberVerificationIncompleteAlert(closure_0) {
  const importDefault = arg1;
  let obj = importAll(1872);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    isDismissable: true,
    importer() {
      return callback(outer1_3[5])(outer1_3[12], outer1_3.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          closure_0 = outer1_1;
          obj.onClose = (arg0) => {
            outer1_1(outer1_3[3]).close();
            if (callback != null) {
              callback();
            }
          };
          return outer2_4(closure_0, obj);
        };
      });
    }
  };
  AlertActionCreators.openLazy(obj);
};