// === Module 5839: MemberVerificationAlertActionCreators ===

// Module 5839 (MemberVerificationAlertActionCreators)
import util from "util" /* 1115 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1876 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationAlertActionCreators.tsx");

export const openMemberVerificationSuccessAlert = function openMemberVerificationSuccessAlert(guildId, arg1) {
  closure_0 = guildId;
  importDefault = arg1;
  const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(5840, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          obj.handleConfirmAndAck = handleConfirmAndAck;
          return <closure_0 />;
        };
      });
    },
    isDismissable: false
  });
};
export const openMemberVerificationPendingAlert = function openMemberVerificationPendingAlert(guildId, arg1) {
  closure_0 = guildId;
  importDefault = arg1;
  const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(5848, dependencyMap.paths).then((result) => {
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
    },
    isDismissable: false
  });
};
export const openMemberVerificationCancelPendingAlert = function openMemberVerificationCancelPendingAlert(arg0) {
  ({ guildId: require, confirmText: importDefault, subtitleText: importAll, onClose: dependencyMap } = arg0);
  const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
  actions_AlertActionCreatorsDefault.openLazy({
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
    },
    isDismissable: false
  });
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
    let obj2 = { text: null, variant: "destructive", onPress: null };
    const intl2 = util.intl;
    obj2.text = intl2.string(util.t.g9tK0o);
    obj2.onPress = function onPress() {
      if (typeof fn === "function") {
        onClose(paths[3]).close();
        if (closure_130_0 != null) {
          closure_130_0();
        }
        const obj2 = { guildId };
        ({ guildId: closure_0, confirmText: onClose, subtitleText: fn, onClose: closure_3 } = obj2);
        let obj = onClose(paths[3]);
        const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
        const obj5 = {
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
            },
          isDismissable: false
        };
        actions_AlertActionCreatorsDefault.openLazy(obj5);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let obj = obj2;
  } else {
    obj = { text: null, onPress: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.BddRzS);
    obj.onPress = onPress;
  }
  dependencyMap = jsx(components_Button_Button.Button, obj);
  let result = onPress(1876).dismissGlobalKeyboard();
  let obj3 = onPress(1876);
  onClose(5204).openLazy({
    importer() {
      return asyncRequireImpl(5856, dependencyMap.paths).then((result) => {
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
    },
    isDismissable: false
  });
  let obj4 = onClose(5204);
  let obj5 = {
    importer() {
      return asyncRequireImpl(5856, dependencyMap.paths).then((result) => {
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
    },
    isDismissable: false
  };
};
export const openMemberVerificationUpdateAlert = function openMemberVerificationUpdateAlert() {
  const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return require("asyncRequireImpl")(paths[11], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_2_4(closure_0, {});
        };
      });
    },
    isDismissable: false
  });
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
  const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
  actions_AlertActionCreatorsDefault.openLazy({
    isDismissable: true,
    importer() {
      return asyncRequireImpl(6513, dependencyMap.paths).then((result) => {
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
  });
};