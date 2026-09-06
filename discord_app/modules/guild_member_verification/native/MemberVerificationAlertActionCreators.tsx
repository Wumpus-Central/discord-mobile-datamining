// === Module 5527: MemberVerificationAlertActionCreators ===

// Module 5527 (MemberVerificationAlertActionCreators)
import util from "util" /* 1114 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationAlertActionCreators.tsx");

export const openMemberVerificationSuccessAlert = function openMemberVerificationSuccessAlert(guildId, arg1) {
  closure_0 = guildId;
  importDefault = arg1;
  let obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return asyncRequireImpl(5528, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          obj.handleConfirmAndAck = handleConfirmAndAck;
          return <closure_0 />;
        };
      });
    }
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
};
export const openMemberVerificationPendingAlert = function openMemberVerificationPendingAlert(guildId, arg1) {
  closure_0 = guildId;
  importDefault = arg1;
  let obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return asyncRequireImpl(5536, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          closure_0 = closure_2_1;
          obj.onClose = () => {
            closure_2_1(closure_2_3[3]).close();
            if (closure_0 != null) {
              closure_0();
            }
          };
          return <closure_0 />;
        };
      });
    }
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
};
export const openMemberVerificationCancelPendingAlert = function openMemberVerificationCancelPendingAlert(arg0) {
  ({ guildId: require, confirmText: importDefault, subtitleText: importAll, onClose: dependencyMap } = arg0);
  let obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return guildId(paths[5])(paths[7], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          obj.confirmText = confirmText;
          obj.subtitleText = subtitleText;
          closure_0 = paths;
          obj.onClose = () => {
            closure_2_1(closure_2_3[3]).close();
            if (closure_0 != null) {
              closure_0();
            }
          };
          return closure_3_4(closure_0, obj);
        };
      });
    }
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
};
export const openMemberVerificationRejectedAlert = function openMemberVerificationRejectedAlert(canWithdraw) {
  ({ guildId: require, onClose } = canWithdraw);
  dependencyMap = undefined;
  closure_129_0 = onClose;
  const onPress = () => {
    closure_2_1(closure_2_3[3]).close();
    if (closure_0 != null) {
      closure_0();
    }
  };
  if (canWithdraw.canWithdraw) {
    let obj = { text: null, variant: "destructive", onPress: null };
    const intl2 = util.intl;
    obj.text = intl2.string(util.t.g9tK0o);
    obj.onPress = function onPress() {
      if (typeof fn === "function") {
        let obj = onClose(paths[3]);
        obj.close();
        if (closure_130_0 != null) {
          closure_130_0();
        }
        obj = { guildId };
        ({ guildId: closure_0, confirmText: onClose, subtitleText: fn, onClose: closure_3 } = obj);
        const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
        obj = {
          importer() {
              return guildId(paths[5])(paths[7], paths.paths).then((result) => {
                closure_0 = result.default;
                return (arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj.guildId = guildId;
                  obj.confirmText = confirmText;
                  obj.subtitleText = subtitleText;
                  closure_0 = paths;
                  obj.onClose = function onClose() { ... };
                  return closure_3_4(closure_0, obj);
                };
              });
            }
        };
        actions_AlertActionCreatorsDefault.openLazy(obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
  } else {
    obj = { text: null, onPress: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.BddRzS);
    obj.onPress = onPress;
  }
  dependencyMap = jsx(components_Button_Button.Button, obj);
  let result = onPress(1874).dismissGlobalKeyboard();
  let obj3 = onPress(1874);
  obj = {
    importer() {
      return asyncRequireImpl(5544, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          closure_0 = onClose;
          obj.onClose = () => {
            closure_2_1(closure_2_3[3]).close();
            if (closure_0 != null) {
              closure_0();
            }
          };
          obj.secondaryButton = secondaryButton;
          return <closure_0 />;
        };
      });
    }
  };
  onClose(4905).openLazy(obj);
  let obj4 = onClose(4905);
};
export const openMemberVerificationUpdateAlert = function openMemberVerificationUpdateAlert() {
  let obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return require("asyncRequireImpl")(paths[11], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_2_4(closure_0, {});
        };
      });
    }
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
};
export function closeMemberVerificationAlert(arg0) {
  closure_0 = arg0;
  return () => {
    closure_2_1(closure_2_3[3]).close();
    if (closure_0 != null) {
      closure_0();
    }
  };
}
export const openMemberVerificationIncompleteAlert = function openMemberVerificationIncompleteAlert(guildId, arg1) {
  closure_0 = guildId;
  importDefault = arg1;
  let obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  obj = {
    isDismissable: true,
    importer() {
      return asyncRequireImpl(7092, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          closure_0 = closure_2_1;
          obj.onClose = () => {
            closure_2_1(closure_2_3[3]).close();
            if (closure_0 != null) {
              closure_0();
            }
          };
          return <closure_0 />;
        };
      });
    }
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
};