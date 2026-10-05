// === Module 9823: ConfirmBlockUserAlert ===

// Module 9823 (ConfirmBlockUserAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import ReportModals from "ReportModals" /* 8279 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9434 */;
import Constants from "Constants" /* 9784 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let nextPromise, obj1, onPress, userId;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const LOCATION_CONTEXT_MOBILE = Constants.LOCATION_CONTEXT_MOBILE;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, text: obj3, buttonsContainer: obj4 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_4, textAlign: "center" };
obj4 = { gap: nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let description;
  let first;
  let items1;
  let onCancel;
  let tmp7;
  let obj = userId(onCancel[8]);
  const cResult = obj.c(47);
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ description, onCancel } = userId);
  const onClose = userId.onClose;
  const onBlockAndReport = userId.onBlockAndReport;
  const onBlock = userId.onBlock;
  const blockButtonVariant = userId.blockButtonVariant;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [onBlock];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function p() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = userId(onCancel[9]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmpResult2 = userId(onCancel[10]);
  const lastChannelMessage = tmpResult2.useLastChannelMessage(channelId);
  const obj4 = channelId(onCancel[11]);
  const name = obj4.useName(stateFromStores);
  if (cResult[3] === channelId) {
    let tmp11;
    if (cResult[4] === userId) {
      tmp11 = cResult[5];
    }
    let closure_7 = tmp11;
    if (cResult[6] === onCancel) {
      let tmp12;
      if (cResult[7] === onClose) {
        tmp12 = cResult[8];
      }
      onPress = tmp12;
      if (cResult[9] === tmp11) {
        if (cResult[10] === onBlock) {
          let tmp13;
          if (cResult[11] === onClose) {
            tmp13 = cResult[12];
          }
          if (cResult[13] === tmp11) {
            if (cResult[14] === lastChannelMessage) {
              if (cResult[15] === onBlockAndReport) {
                let tmp14;
                if (cResult[16] === onClose) {
                  tmp14 = cResult[17];
                }
                if (cResult[18] !== tmp12) {
                  class R {
                    constructor() {
                      let intl;
                      const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                      const Button = components_Button_Button.Button;
                      intl = intl5.intl;
                      return metroImportDefault(Button, obj);
                    }
                  }
                  cResult[18] = tmp12;
                  class M {
                    constructor() {
                      onClose();
                      closure_7();
                      onBlock();
                    }
                  }
                  cResult[19] = R;
                } else {
                  class R {
                    constructor() {
                      let intl;
                      const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                      const Button = components_Button_Button.Button;
                      intl = intl5.intl;
                      return metroImportDefault(Button, obj);
                    }
                  }
                }
                const header = tmp4.header;
                class M {
                  constructor() {
                    onClose();
                    closure_7();
                    onBlock();
                  }
                }
                if (cResult[22] === tmp4.header) {
                  let formatResult;
                  class R {
                    constructor() {
                      let intl;
                      const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                      const Button = components_Button_Button.Button;
                      intl = intl5.intl;
                      return metroImportDefault(Button, obj);
                    }
                  }
                  if (cResult[25] === description) {
                    class R {
                      constructor() {
                        let intl;
                        const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                        const Button = components_Button_Button.Button;
                        intl = intl5.intl;
                        return metroImportDefault(Button, obj);
                      }
                    }
                    if (cResult[28] === tmp4.text) {
                      let tmp29;
                      class R {
                        constructor() {
                          let intl;
                          const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                          const Button = components_Button_Button.Button;
                          intl = intl5.intl;
                          return metroImportDefault(Button, obj);
                        }
                      }
                      const _Symbol = Symbol;
                      const buttonsContainer = tmp4.buttonsContainer;
                      class M {
                        constructor() {
                          onClose();
                          closure_7();
                          onBlock();
                        }
                      }
                      if (tmp28 === Symbol.for("react.memo_cache_sentinel")) {
                        class R {
                          constructor() {
                            let intl;
                            const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                            const Button = components_Button_Button.Button;
                            intl = intl5.intl;
                            return metroImportDefault(Button, obj);
                          }
                        }
                        const stringResult = obj7.string(userId(onCancel[16]).t.l4Emac);
                        class M {
                          constructor() {
                            onClose();
                            closure_7();
                            onBlock();
                          }
                        }
                        cResult[31] = stringResult;
                        tmp29 = stringResult;
                      } else {
                        class R {
                          constructor() {
                            let intl;
                            const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                            const Button = components_Button_Button.Button;
                            intl = intl5.intl;
                            return metroImportDefault(Button, obj);
                          }
                        }
                      }
                      if (blockButtonVariant == null) {
                        class R {
                          constructor() {
                            let intl;
                            const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                            const Button = components_Button_Button.Button;
                            intl = intl5.intl;
                            return metroImportDefault(Button, obj);
                          }
                        }
                      }
                      if (cResult[32] === tmp13) {
                        class R {
                          constructor() {
                            let intl;
                            const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                            const Button = components_Button_Button.Button;
                            intl = intl5.intl;
                            return metroImportDefault(Button, obj);
                          }
                        }
                        if (cResult[35] === tmp14) {
                          class R {
                            constructor() {
                              let intl;
                              const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                              const Button = components_Button_Button.Button;
                              intl = intl5.intl;
                              return metroImportDefault(Button, obj);
                            }
                          }
                          if (cResult[38] === tmp4.buttonsContainer) {
                            class R {
                              constructor() {
                                let intl;
                                const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                                const Button = components_Button_Button.Button;
                                intl = intl5.intl;
                                return metroImportDefault(Button, obj);
                              }
                            }
                          }
                          class M {
                            constructor() {
                              onClose();
                              closure_7();
                              onBlock();
                            }
                          }
                          let obj2 = { style: buttonsContainer, children: items1 };
                          items1 = [tmp32, tmp35];
                          cResult[38] = tmp4.buttonsContainer;
                          cResult[39] = tmp32;
                          cResult[40] = tmp35;
                          cResult[41] = onPress(onBlockAndReport, obj2);
                          const tmp39 = onPress(onBlockAndReport, obj2);
                        }
                        class M {
                          constructor() {
                            onClose();
                            closure_7();
                            onBlock();
                          }
                        }
                        cResult[35] = tmp14;
                        cResult[36] = onBlockAndReport;
                        cResult[37] = null != onBlockAndReport;
                      }
                      const obj3 = { size: "lg", onPress: tmp13, text: tmp29, variant: blockButtonVariant };
                      cResult[32] = tmp13;
                      cResult[33] = blockButtonVariant;
                      cResult[34] = closure_7(userId(onCancel[15]).Button, obj3);
                      const tmp34 = closure_7(userId(onCancel[15]).Button, obj3);
                    }
                    class M {
                      constructor() {
                        onClose();
                        closure_7();
                        onBlock();
                      }
                    }
                    tmp26[0] = tmp4.text;
                    tmp26[2] = tmp20;
                    cResult[28] = tmp4.text;
                    cResult[29] = tmp20;
                    cResult[30] = closure_7(userId(onCancel[17]).Text, tmp26);
                    const tmp27 = closure_7(userId(onCancel[17]).Text, tmp26);
                  }
                  class M {
                    constructor() {
                      onClose();
                      closure_7();
                      onBlock();
                    }
                  }
                  if (description == null) {
                    class R {
                      constructor() {
                        let intl;
                        const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
                        const Button = components_Button_Button.Button;
                        intl = intl5.intl;
                        return metroImportDefault(Button, obj);
                      }
                    }
                    const format = tmp23.format;
                    const obj5 = { name: null };
                    class M {
                      constructor() {
                        onClose();
                        closure_7();
                        onBlock();
                      }
                    }
                    formatResult = format(userId(onCancel[16]).t.pegItC, obj5);
                  }
                  cResult[25] = description;
                  cResult[26] = name;
                  cResult[27] = formatResult;
                }
                const obj6 = { style: header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: tmp16 };
                cResult[22] = tmp4.header;
                cResult[23] = tmp16;
                cResult[24] = closure_7(userId(onCancel[17]).Text, obj6);
                const tmp19 = closure_7(userId(onCancel[17]).Text, obj6);
              }
            }
          }
          const fn2 = function z() {
            onClose();
            closure_7();
            const obj = ReportModals;
            const result = obj.showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
            if (onBlockAndReport != null) {
              onBlockAndReport();
            }
          };
          class M {
            constructor() {
              onClose();
              closure_7();
              onBlock();
            }
          }
          cResult[13] = tmp11;
          cResult[14] = lastChannelMessage;
          cResult[15] = onBlockAndReport;
          cResult[16] = onClose;
          cResult[17] = fn2;
          tmp14 = fn2;
        }
      }
      class M {
        constructor() {
          onClose();
          closure_7();
          onBlock();
        }
      }
      cResult[9] = tmp11;
      cResult[10] = onBlock;
      cResult[11] = onClose;
      cResult[12] = M;
      tmp13 = M;
    }
    class A {
      constructor() {
        onClose();
        onCancel();
      }
    }
    cResult[6] = onCancel;
    cResult[7] = onClose;
    cResult[8] = A;
    tmp12 = A;
  }
  class E {
    constructor() {
      obj = closure_1(closure_2[12]);
      obj1 = { location: LOCATION_CONTEXT_MOBILE };
      blockUserResult = obj.blockUser(userId, obj1);
      nextPromise = blockUserResult.then(() => {
        const obj = channelId(onCancel[13]);
        const result = obj.showBlockSuccessToast(userId, closure_1_1);
      });
      return;
    }
  }
  cResult[3] = channelId;
  cResult[4] = userId;
  cResult[5] = E;
  tmp11 = E;
}) : ((userId) => {
  let description;
  let intl;
  let intl3;
  let intl4;
  let items5;
  let items6;
  let onCancel;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ description, onCancel } = userId);
  const onClose = userId.onClose;
  const onBlockAndReport = userId.onBlockAndReport;
  const onBlock = userId.onBlock;
  let str = userId.blockButtonVariant;
  const tmp = closure_9();
  let obj = userId(onCancel[9]);
  const items = [onBlock];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj2 = userId(onCancel[10]);
  const lastChannelMessage = obj2.useLastChannelMessage(channelId);
  const obj3 = channelId(onCancel[11]);
  const name = obj3.useName(stateFromStores);
  const items1 = [userId, channelId];
  const callback = onClose.useCallback(() => {
    let obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: LOCATION_CONTEXT_MOBILE };
    const blockUserResult = obj.blockUser(userId, obj2);
    blockUserResult.then(() => {
      const obj = channelId(onCancel[13]);
      const result = obj.showBlockSuccessToast(userId, closure_1_1);
    });
  }, items1);
  const items2 = [onClose, onCancel];
  onPress = onClose.useCallback(() => {
    onClose();
    onCancel();
  }, items2);
  const items3 = [onClose, callback, onBlock];
  const items4 = [lastChannelMessage, onClose, callback, onBlockAndReport];
  const callback1 = onClose.useCallback(() => {
    onClose();
    callback();
    onBlock();
  }, items3);
  const callback2 = onClose.useCallback(() => {
    onClose();
    callback();
    const obj = ReportModals;
    const result = obj.showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
    if (onBlockAndReport != null) {
      onBlockAndReport();
    }
  }, items4);
  const obj4 = {
    renderConfirmButton() {
      let intl;
      const obj = { size: "lg", onPress, text: intl.string(intl5.t["ETE/oC"]), variant: "secondary" };
      const Button = components_Button_Button.Button;
      intl = intl5.intl;
      return metroImportDefault(Button, obj);
    },
    children: items5
  };
  const obj5 = { style: tmp.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl.format(userId(onCancel[16]).t.x5pOn9, { name }) };
  const tmp11 = channelId(onCancel[18]);
  const Text = userId(onCancel[17]).Text;
  intl = userId(onCancel[16]).intl;
  items5 = [callback(Text, obj5), , ];
  const obj6 = { style: tmp.text, variant: "text-md/medium", children: description };
  const Text2 = userId(onCancel[17]).Text;
  if (description == null) {
    const intl2 = tmp2(tmp3[16]).intl;
    const obj7 = { name };
    description = intl2.format(tmp2(tmp3[16]).t.pegItC, obj7);
  }
  items5[1] = callback(Text2, obj6);
  const obj8 = { style: tmp.buttonsContainer, children: items6 };
  const obj9 = { size: "lg", onPress: callback1, text: intl3.string(userId(onCancel[16]).t.l4Emac), variant: str };
  let Button = tmp2(tmp3[15]).Button;
  intl3 = tmp2(tmp3[16]).intl;
  const tmp13 = onBlockAndReport;
  if (str == null) {
    str = "destructive";
  }
  items6 = [callback(Button, obj9), ];
  let tmp12Result = null != onBlockAndReport;
  if (tmp12Result) {
    const obj10 = { size: "lg", onPress: callback2, text: intl4.string(userId(onCancel[16]).t["39O+8F"]), variant: "secondary" };
    const Button2 = tmp2(tmp3[15]).Button;
    intl4 = tmp2(tmp3[16]).intl;
    tmp12Result = tmp12(Button2, obj10);
  }
  items6[1] = tmp12Result;
  items5[2] = onPress(tmp13, obj8);
  return onPress(tmp11, obj4);
});
let result = size.fileFinishedImporting("modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx");

export default tmp4;