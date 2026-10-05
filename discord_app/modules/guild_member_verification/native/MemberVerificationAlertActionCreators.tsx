// === Module 5917: MemberVerificationAlertActionCreators ===

// Module 5917 (MemberVerificationAlertActionCreators)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1126 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationAlertActionCreators.tsx");

export const openMemberVerificationSuccessAlert = function openMemberVerificationSuccessAlert(guildId, arg1) {
  let closure_1;
  let closure_0 = guildId;
  importDefault = arg1;
  const obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = actions_AlertActionCreatorsDefault;
  const obj3 = {
    importer() {
      let handleConfirmAndAck;
      const promise = asyncRequire(5918, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <closure_0 guildId={guildId} handleConfirmAndAck={handleConfirmAndAck} />;
        };
      });
    },
    isDismissable: false
  };
  obj2.openLazy(obj3);
};
export const openMemberVerificationPendingAlert = function openMemberVerificationPendingAlert(guildId, arg1) {
  let closure_1;
  let closure_0 = guildId;
  importDefault = arg1;
  const obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = actions_AlertActionCreatorsDefault;
  const obj3 = {
    importer() {
      const promise = asyncRequire(5926, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          closure_0 = closure_2_1;
          return <closure_0 guildId={guildId} onClose={() => {
            const obj = closure_2_1(closure_2_3[3]);
            obj.close();
            if (closure_0 != null) {
              closure_0();
            }
          }} />;
        };
      });
    },
    isDismissable: false
  };
  obj2.openLazy(obj3);
};
export const openMemberVerificationCancelPendingAlert = function openMemberVerificationCancelPendingAlert(arg0) {
  ({ guildId: require, confirmText: importDefault, subtitleText: importAll, onClose: dependencyMap } = arg0);
  const obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = actions_AlertActionCreatorsDefault;
  const obj3 = {
    importer() {
      let confirmText;
      let subtitleText;
      const promise = guildId(paths[5])(paths[7], paths.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const obj = {
            guildId,
            confirmText,
            subtitleText,
            onClose: () => {
              const obj = closure_2_1(closure_2_3[3]);
              obj.close();
              if (closure_0 != null) {
                closure_0();
              }
            }
          };
          const merged = Object.assign(arg0);
          closure_0 = closure_2_3;
          return closure_3_4(closure_0, obj);
        };
      });
    },
    isDismissable: false
  };
  obj2.openLazy(obj3);
};
export const openMemberVerificationRejectedAlert = function openMemberVerificationRejectedAlert(canWithdraw) {
  let closure_3;
  let guildId;
  let intl;
  let intl2;
  let obj;
  let onClose;
  ({ guildId: require, onClose } = canWithdraw);
  dependencyMap = undefined;
  const onPress = () => {
    const obj = closure_2_1(closure_2_3[3]);
    obj.close();
    if (closure_0 != null) {
      closure_0();
    }
  };
  canWithdraw = canWithdraw.canWithdraw;
  const Button = components_Button_Button.Button;
  if (canWithdraw) {
    let obj2 = {
      text: intl2.string(intl3.t.g9tK0o),
      variant: "destructive",
      onPress() {
          let closure_129_0;
          let closure_129_1;
          let closure_129_2;
          let closure_129_3;
          if (typeof fn === "function") {
            let obj = onClose(paths[3]);
            obj.close();
            if (closure_130_0 != null) {
              closure_130_0();
            }
            const obj2 = { guildId: require };
            ({ guildId: closure_129_0, confirmText: closure_129_1, subtitleText: closure_129_2, onClose: closure_129_3 } = obj2);
            const obj3 = KeyboardManagerUtilsAll;
            const result = obj3.dismissGlobalKeyboard();
            const obj5 = {
              importer() {
                  let confirmText;
                  let subtitleText;
                  const promise = guildId(paths[5])(paths[7], paths.paths);
                  return promise.then((result) => {
                    let closure_0 = result.default;
                    return (arg0) => {
                      const obj = {
                        guildId,
                        confirmText,
                        subtitleText,
                        onClose: () => {
                          const obj = closure_2_1(closure_2_3[3]);
                          obj.close();
                          if (closure_0 != null) {
                            closure_0();
                          }
                        }
                      };
                      const merged = Object.assign(arg0);
                      closure_0 = closure_2_3;
                      return closure_3_4(closure_0, obj);
                    };
                  });
                },
              isDismissable: false
            };
            const obj4 = actions_AlertActionCreatorsDefault;
            obj4.openLazy(obj5);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
    };
    intl2 = intl3.intl;
    obj = obj2;
  } else {
    obj = { text: intl.string(intl3.t.BddRzS), onPress };
    intl = intl3.intl;
  }
  dependencyMap = <Button {...obj} />;
  let obj3 = onPress(1881);
  let result = obj3.dismissGlobalKeyboard();
  let obj4 = onClose(5708);
  let obj5 = {
    importer() {
      let secondaryButton;
      const promise = asyncRequire(5934, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          closure_0 = onClose;
          return <closure_0 guildId={guildId} onClose={() => {
            const obj = closure_2_1(closure_2_3[3]);
            obj.close();
            if (closure_0 != null) {
              closure_0();
            }
          }} secondaryButton={secondaryButton} />;
        };
      });
    },
    isDismissable: false
  };
  obj4.openLazy(obj5);
};
export const openMemberVerificationUpdateAlert = function openMemberVerificationUpdateAlert() {
  let paths;
  let obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = actions_AlertActionCreatorsDefault;
  const obj3 = {
    importer() {
      const promise = require("asyncRequire")(paths[11], paths.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          return closure_2_4(closure_0, obj);
        };
      });
    },
    isDismissable: false
  };
  obj2.openLazy(obj3);
};
export function closeMemberVerificationAlert(arg0) {
  let closure_0 = arg0;
  return () => {
    const obj = closure_2_1(closure_2_3[3]);
    obj.close();
    if (closure_0 != null) {
      closure_0();
    }
  };
}
export const openMemberVerificationIncompleteAlert = function openMemberVerificationIncompleteAlert(guildId, arg1) {
  let closure_1;
  let closure_0 = guildId;
  importDefault = arg1;
  let obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = actions_AlertActionCreatorsDefault;
  const obj3 = {
    isDismissable: true,
    importer() {
      const promise = asyncRequire(6587, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          closure_0 = closure_2_1;
          return <closure_0 guildId={guildId} onClose={() => {
            const obj = closure_2_1(closure_2_3[3]);
            obj.close();
            if (closure_0 != null) {
              closure_0();
            }
          }} />;
        };
      });
    }
  };
  obj2.openLazy(obj3);
};