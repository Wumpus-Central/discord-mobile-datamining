// discord_app/modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ReportModals from "../../../in_app_reports/ReportModals.tsx";
import RelationshipActionCreatorsDefault from "../../../../actions/RelationshipActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const LOCATION_CONTEXT_MOBILE = fn(9797).LOCATION_CONTEXT_MOBILE;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  header: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" },
  text: null,
  buttonsContainer: null,
};
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, textAlign: "center" };
obj2.text = {
  color: nativeDefault.colors.TEXT_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_4,
  textAlign: "center",
};
let obj4 = {
  color: nativeDefault.colors.TEXT_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_4,
  textAlign: "center",
};
obj2.buttonsContainer = { gap: nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/shared/native/ConfirmBlockUserAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      const cResult = userId(onCancel[8]).c(47);
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
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        const fn = function p() {
          return UserStore.getUser(userId);
        };
        cResult[1] = userId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = userId(onCancel[8]);
      const stateFromStores = userId(onCancel[9]).useStateFromStores(first, tmp7);
      const tmpResult = userId(onCancel[9]);
      const lastChannelMessage = userId(onCancel[10]).useLastChannelMessage(channelId);
      const tmpResult2 = userId(onCancel[10]);
      const name = channelId(onCancel[11]).useName(stateFromStores);
      if (cResult[3] === channelId) {
        if (cResult[4] === userId) {
          let tmp11 = cResult[5];
        }
        closure_7 = tmp11;
        if (cResult[6] === onCancel) {
          if (cResult[7] === onClose) {
            let tmp12 = cResult[8];
          }
          onPress = tmp12;
          if (cResult[9] === tmp11) {
            if (cResult[10] === onBlock) {
              if (cResult[11] === onClose) {
                let tmp13 = cResult[12];
              }
              if (cResult[13] === tmp11) {
                if (cResult[14] === lastChannelMessage) {
                  if (cResult[15] === onBlockAndReport) {
                    if (cResult[16] === onClose) {
                      let tmp14 = cResult[17];
                    }
                    if (cResult[18] !== tmp12) {
                      class R {
                        constructor() {
                          obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                          intl = closure_0(closure_2[16]).intl;
                          obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                          return jsx(closure_0(closure_2[15]).Button, obj);
                        }
                      }
                      cResult[18] = tmp12;
                      class M {
                        constructor() {
                          tmp = onClose();
                          tmp2 = closure_7();
                          tmp3 = onBlock();
                          return;
                        }
                      }
                      cResult[19] = R;
                    } else {
                      class R {
                        constructor() {
                          obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                          intl = closure_0(closure_2[16]).intl;
                          obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                          return jsx(closure_0(closure_2[15]).Button, obj);
                        }
                      }
                    }
                    class M {
                      constructor() {
                        tmp = onClose();
                        tmp2 = closure_7();
                        tmp3 = onBlock();
                        return;
                      }
                    }
                    if (cResult[22] === tmp4.header) {
                      class R {
                        constructor() {
                          obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                          intl = closure_0(closure_2[16]).intl;
                          obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                          return jsx(closure_0(closure_2[15]).Button, obj);
                        }
                      }
                      if (cResult[25] === description) {
                        class R {
                          constructor() {
                            obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                            intl = closure_0(closure_2[16]).intl;
                            obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                            return jsx(closure_0(closure_2[15]).Button, obj);
                          }
                        }
                        if (cResult[28] === tmp4.text) {
                          class R {
                            constructor() {
                              obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                              intl = closure_0(closure_2[16]).intl;
                              obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                              return jsx(closure_0(closure_2[15]).Button, obj);
                            }
                          }
                          const _Symbol = Symbol;
                          class M {
                            constructor() {
                              tmp = onClose();
                              tmp2 = closure_7();
                              tmp3 = onBlock();
                              return;
                            }
                          }
                          if (tmp27 === Symbol.for("react.memo_cache_sentinel")) {
                            class R {
                              constructor() {
                                obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                                intl = closure_0(closure_2[16]).intl;
                                obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                                return jsx(closure_0(closure_2[15]).Button, obj);
                              }
                            }
                            const stringResult = obj8.string(tmp(onCancel[16]).t.l4Emac);
                            class M {
                              constructor() {
                                tmp = onClose();
                                tmp2 = closure_7();
                                tmp3 = onBlock();
                                return;
                              }
                            }
                            cResult[31] = stringResult;
                            const tmp28 = stringResult;
                          } else {
                            class R {
                              constructor() {
                                obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                                intl = closure_0(closure_2[16]).intl;
                                obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                                return jsx(closure_0(closure_2[15]).Button, obj);
                              }
                            }
                          }
                          if (blockButtonVariant == null) {
                            class R {
                              constructor() {
                                obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                                intl = closure_0(closure_2[16]).intl;
                                obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                                return jsx(closure_0(closure_2[15]).Button, obj);
                              }
                            }
                          }
                          if (cResult[32] === tmp13) {
                            class R {
                              constructor() {
                                obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                                intl = closure_0(closure_2[16]).intl;
                                obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                                return jsx(closure_0(closure_2[15]).Button, obj);
                              }
                            }
                            if (cResult[35] === tmp14) {
                              class R {
                                constructor() {
                                  obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                                  intl = closure_0(closure_2[16]).intl;
                                  obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                                  return jsx(closure_0(closure_2[15]).Button, obj);
                                }
                              }
                              if (cResult[38] === tmp4.buttonsContainer) {
                                class R {
                                  constructor() {
                                    obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                                    intl = closure_0(closure_2[16]).intl;
                                    obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                                    return jsx(closure_0(closure_2[15]).Button, obj);
                                  }
                                }
                              }
                              class M {
                                constructor() {
                                  tmp = onClose();
                                  tmp2 = closure_7();
                                  tmp3 = onBlock();
                                  return;
                                }
                              }
                              let obj2 = { style: tmp4.buttonsContainer, children: null };
                              const items1 = [tmp31, tmp34];
                              obj2.children = items1;
                              const tmp38 = onPress(onBlockAndReport, obj2);
                              cResult[38] = tmp4.buttonsContainer;
                              cResult[39] = tmp31;
                              cResult[40] = tmp34;
                              cResult[41] = tmp38;
                            }
                            class M {
                              constructor() {
                                tmp = onClose();
                                tmp2 = closure_7();
                                tmp3 = onBlock();
                                return;
                              }
                            }
                            cResult[35] = tmp14;
                            cResult[36] = onBlockAndReport;
                            cResult[37] = null != onBlockAndReport;
                          }
                          const obj3 = { size: "lg", onPress: tmp13, text: tmp28, variant: blockButtonVariant };
                          const tmp33 = closure_7(tmp(onCancel[15]).Button, obj3);
                          cResult[32] = tmp13;
                          cResult[33] = blockButtonVariant;
                          cResult[34] = tmp33;
                        }
                        class M {
                          constructor() {
                            tmp = onClose();
                            tmp2 = closure_7();
                            tmp3 = onBlock();
                            return;
                          }
                        }
                        tmp25[0] = tmp4.text;
                        tmp25[2] = tmp20;
                        const tmp26 = closure_7(tmp(onCancel[17]).Text, tmp25);
                        cResult[28] = tmp4.text;
                        cResult[29] = tmp20;
                        cResult[30] = tmp26;
                      }
                      class M {
                        constructor() {
                          tmp = onClose();
                          tmp2 = closure_7();
                          tmp3 = onBlock();
                          return;
                        }
                      }
                      if (description == null) {
                        class R {
                          constructor() {
                            obj = { size: "lg", onPress: closure_8, text: null, variant: "secondary" };
                            intl = closure_0(closure_2[16]).intl;
                            obj.text = intl.string(closure_0(closure_2[16]).t["ETE/oC"]);
                            return jsx(closure_0(closure_2[15]).Button, obj);
                          }
                        }
                        class M {
                          constructor() {
                            tmp = onClose();
                            tmp2 = closure_7();
                            tmp3 = onBlock();
                            return;
                          }
                        }
                        const formatResult = obj6.format(tmp(onCancel[16]).t.pegItC, { name: null });
                        const obj5 = { name: null };
                      }
                      cResult[25] = description;
                      cResult[26] = name;
                      cResult[27] = formatResult;
                    }
                    const obj7 = {
                      style: tmp4.header,
                      variant: "heading-lg/bold",
                      color: "mobile-text-heading-primary",
                      children: tmp16,
                    };
                    const tmp19 = closure_7(tmp(onCancel[17]).Text, obj7);
                    cResult[22] = tmp4.header;
                    cResult[23] = tmp16;
                    cResult[24] = tmp19;
                  }
                }
              }
              const fn2 = function z() {
                onClose();
                closure_7();
                const result = ReportModals.showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
                if (onBlockAndReport != null) {
                  onBlockAndReport();
                }
              };
              class M {
                constructor() {
                  tmp = onClose();
                  tmp2 = closure_7();
                  tmp3 = onBlock();
                  return;
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
              tmp = onClose();
              tmp2 = closure_7();
              tmp3 = onBlock();
              return;
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
            tmp = onClose();
            tmp2 = onCancel();
            return;
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
            const result = channelId(onCancel[13]).showBlockSuccessToast(userId, closure_1_1);
          });
          return;
        }
      }
      cResult[3] = channelId;
      cResult[4] = userId;
      cResult[5] = E;
      tmp11 = E;
      const obj4 = channelId(onCancel[11]);
    }
  : (userId) => {
      userId = userId.userId;
      const channelId = userId.channelId;
      ({ description, onCancel } = userId);
      const onClose = userId.onClose;
      const onBlockAndReport = userId.onBlockAndReport;
      const onBlock = userId.onBlock;
      let str = userId.blockButtonVariant;
      const tmp = closure_9();
      const items = [onBlock];
      const stateFromStores = userId(onCancel[9]).useStateFromStores(items, () => UserStore.getUser(userId));
      let obj = userId(onCancel[9]);
      const lastChannelMessage = userId(onCancel[10]).useLastChannelMessage(channelId);
      let obj2 = userId(onCancel[10]);
      const name = channelId(onCancel[11]).useName(stateFromStores);
      const items1 = [userId, channelId];
      const callback = onClose.useCallback(() => {
        const obj2 = { location: LOCATION_CONTEXT_MOBILE };
        RelationshipActionCreatorsDefault.blockUser(userId, { location: LOCATION_CONTEXT_MOBILE }).then(() => {
          const result = channelId(onCancel[13]).showBlockSuccessToast(userId, closure_1_1);
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
        const result = ReportModals.showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage);
        if (onBlockAndReport != null) {
          onBlockAndReport();
        }
      }, items4);
      const obj4 = {
        renderConfirmButton() {
          const obj = { size: "lg", onPress, text: null, variant: "secondary" };
          const intl = util.intl;
          obj.text = intl.string(util.t["ETE/oC"]);
          return React5(components_Button_Button.Button, obj);
        },
        children: null,
      };
      const obj3 = channelId(onCancel[11]);
      const obj5 = {
        style: tmp.header,
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      let intl = userId(onCancel[16]).intl;
      obj5.children = intl.format(userId(onCancel[16]).t.x5pOn9, { name });
      const items5 = [callback(userId(onCancel[17]).Text, obj5), ,];
      const obj6 = { style: tmp.text, variant: "text-md/medium", children: null };
      if (description == null) {
        const intl2 = tmp2(tmp3[16]).intl;
        const obj7 = { name };
        description = intl2.format(tmp2(tmp3[16]).t.pegItC, obj7);
      }
      obj6.children = description;
      items5[1] = callback(userId(onCancel[17]).Text, obj6);
      const obj8 = { style: tmp.buttonsContainer, children: null };
      const obj9 = { size: "lg", onPress: callback1, text: null, variant: null };
      const intl3 = tmp2(tmp3[16]).intl;
      obj9.text = intl3.string(userId(onCancel[16]).t.l4Emac);
      if (str == null) {
        str = "destructive";
      }
      obj9.variant = str;
      const items6 = [callback(userId(onCancel[15]).Button, obj9)];
      let tmp12Result = null != onBlockAndReport;
      if (tmp12Result) {
        const obj10 = { size: "lg", onPress: callback2, text: null, variant: "secondary" };
        const intl4 = tmp2(tmp3[16]).intl;
        obj10.text = intl4.string(tmp2(tmp3[16]).t["39O+8F"]);
        tmp12Result = tmp12(tmp2(tmp3[15]).Button, obj10);
      }
      items6[1] = tmp12Result;
      obj8.children = items6;
      items5[2] = onPress(onBlockAndReport, obj8);
      obj4.children = items5;
      return onPress(channelId(onCancel[18]), obj4);
    };
