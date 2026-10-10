// discord_app/modules/conjure/chat/native/ConjureMessageActionSheet.tsx
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = "conjure-message-actions";
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureMessageActionSheet(content) {
      const cResult = content(onQueuedAction[5]).c(31);
      content = content.content;
      const userId = content.userId;
      onQueuedAction = content.onQueuedAction;
      const onRestoreVersion = content.onRestoreVersion;
      const onViewTrace = content.onViewTrace;
      if (cResult[0] !== content) {
        const fn = function o() {
          ClipboardUtils.copy(content);
          ActionSheetActionCreatorsDefault.hideActionSheet(c7);
          const obj4 = { text: null, icon: null };
          const intl = util.intl;
          obj4.text = intl.string(util.t.mGZ66D);
          obj4.icon = CopyIcon.CopyIcon;
          ToastActionCreatorsDefault.open("VIBEGRATIONS_MESSAGE_COPIED", obj4);
        };
        cResult[0] = content;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== userId) {
        class R {
          constructor() {
            if (null != userId) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = { userId: null };
              obj.userId = tmp;
              tmp4 = closure_1(closure_2[2])(obj);
            }
            return;
          }
        }
        cResult[2] = userId;
        cResult[3] = R;
      } else {
        class R {
          constructor() {
            if (null != userId) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = { userId: null };
              obj.userId = tmp;
              tmp4 = closure_1(closure_2[2])(obj);
            }
            return;
          }
        }
      }
      if (cResult[4] !== onQueuedAction) {
        class R {
          constructor() {
            if (null != userId) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = { userId: null };
              obj.userId = tmp;
              tmp4 = closure_1(closure_2[2])(obj);
            }
            return;
          }
        }
        cResult[4] = onQueuedAction;
        cResult[5] = tmp7;
      } else {
        class R {
          constructor() {
            if (null != userId) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = { userId: null };
              obj.userId = tmp;
              tmp4 = closure_1(closure_2[2])(obj);
            }
            return;
          }
        }
      }
      if (cResult[6] !== onRestoreVersion) {
        class P {
          constructor() {
            obj = closure_1(closure_2[3]);
            hideActionSheetResult = obj.hideActionSheet(c7);
            if (onRestoreVersion != null) {
              tmp2 = onRestoreVersion();
            }
            return;
          }
        }
        cResult[6] = onRestoreVersion;
        cResult[7] = P;
      } else {
        class P {
          constructor() {
            obj = closure_1(closure_2[3]);
            hideActionSheetResult = obj.hideActionSheet(c7);
            if (onRestoreVersion != null) {
              tmp2 = onRestoreVersion();
            }
            return;
          }
        }
      }
      if (cResult[8] !== onViewTrace) {
        class P {
          constructor() {
            obj = closure_1(closure_2[3]);
            hideActionSheetResult = obj.hideActionSheet(c7);
            if (onRestoreVersion != null) {
              tmp2 = onRestoreVersion();
            }
            return;
          }
        }
        cResult[8] = onViewTrace;
        cResult[9] = tmp10;
      } else {
        class P {
          constructor() {
            obj = closure_1(closure_2[3]);
            hideActionSheetResult = obj.hideActionSheet(c7);
            if (onRestoreVersion != null) {
              tmp2 = onRestoreVersion();
            }
            return;
          }
        }
      }
      if (cResult[10] === tmp6) {
        class P {
          constructor() {
            obj = closure_1(closure_2[3]);
            hideActionSheetResult = obj.hideActionSheet(c7);
            if (onRestoreVersion != null) {
              tmp2 = onRestoreVersion();
            }
            return;
          }
        }
        if (cResult[13] === content) {
          class P {
            constructor() {
              obj = closure_1(closure_2[3]);
              hideActionSheetResult = obj.hideActionSheet(c7);
              if (onRestoreVersion != null) {
                tmp2 = onRestoreVersion();
              }
              return;
            }
          }
          if (cResult[16] === R) {
            class P {
              constructor() {
                obj = closure_1(closure_2[3]);
                hideActionSheetResult = obj.hideActionSheet(c7);
                if (onRestoreVersion != null) {
                  tmp2 = onRestoreVersion();
                }
                return;
              }
            }
            if (cResult[19] === P) {
              class P {
                constructor() {
                  obj = closure_1(closure_2[3]);
                  hideActionSheetResult = obj.hideActionSheet(c7);
                  if (onRestoreVersion != null) {
                    tmp2 = onRestoreVersion();
                  }
                  return;
                }
              }
              if (cResult[22] === tmp10) {
                class P {
                  constructor() {
                    obj = closure_1(closure_2[3]);
                    hideActionSheetResult = obj.hideActionSheet(c7);
                    if (onRestoreVersion != null) {
                      tmp2 = onRestoreVersion();
                    }
                    return;
                  }
                }
                if (cResult[25] === tmp23) {
                  class P {
                    constructor() {
                      obj = closure_1(closure_2[3]);
                      hideActionSheetResult = obj.hideActionSheet(c7);
                      if (onRestoreVersion != null) {
                        tmp2 = onRestoreVersion();
                      }
                      return;
                    }
                  }
                }
                let obj2 = { children: null };
                const obj3 = { hasIcons: true, children: null };
                const items = [tmp11, tmp16, tmp18, tmp20, tmp23];
                obj3.children = items;
                obj2.children = closure_6(tmp(tmp2[10]).ActionSheetRow.Group, obj3);
                const tmp28 = onViewTrace(tmp(tmp2[17]).ActionSheet, obj2);
                cResult[25] = tmp23;
                cResult[26] = tmp11;
                cResult[27] = tmp16;
                cResult[28] = tmp18;
                cResult[29] = tmp20;
                cResult[30] = tmp28;
              }
              let tmp24 = null;
              if (null != onViewTrace) {
                class P {
                  constructor() {
                    obj = closure_1(closure_2[3]);
                    hideActionSheetResult = obj.hideActionSheet(c7);
                    if (onRestoreVersion != null) {
                      tmp2 = onRestoreVersion();
                    }
                    return;
                  }
                }
                let obj4 = { label: "View Trace", icon: null, onPress: null };
                const obj5 = { IconComponent: tmp(tmp2[16]).BugIcon };
                obj4.icon = onViewTrace(tmp(tmp2[10]).ActionSheetRow.Icon, obj5);
                obj4.onPress = tmp10;
                tmp24 = onViewTrace(tmp(tmp2[10]).ActionSheetRow, obj4);
              }
              cResult[22] = tmp10;
              cResult[23] = onViewTrace;
              cResult[24] = tmp24;
            }
            let tmp21 = null;
            if (null != onRestoreVersion) {
              class P {
                constructor() {
                  obj = closure_1(closure_2[3]);
                  hideActionSheetResult = obj.hideActionSheet(c7);
                  if (onRestoreVersion != null) {
                    tmp2 = onRestoreVersion();
                  }
                  return;
                }
              }
              const obj6 = { label: null, icon: null, onPress: null };
              const intl4 = tmp(tmp2[8]).intl;
              obj6.label = intl4.string(userId(tmp2[11]).H8Jfhu);
              const obj7 = { IconComponent: tmp(tmp2[15]).UndoIcon };
              obj6.icon = onViewTrace(tmp(tmp2[10]).ActionSheetRow.Icon, obj7);
              obj6.onPress = P;
              tmp21 = onViewTrace(tmp(tmp2[10]).ActionSheetRow, obj6);
            }
            cResult[19] = P;
            cResult[20] = onRestoreVersion;
            cResult[21] = tmp21;
          }
          let tmp19 = null;
          if (null != userId) {
            class P {
              constructor() {
                obj = closure_1(closure_2[3]);
                hideActionSheetResult = obj.hideActionSheet(c7);
                if (onRestoreVersion != null) {
                  tmp2 = onRestoreVersion();
                }
                return;
              }
            }
            const obj8 = { label: null, icon: null, onPress: null };
            const intl3 = tmp(tmp2[8]).intl;
            obj8.label = intl3.string(tmp(tmp2[8]).t.iXAna6);
            const obj9 = { IconComponent: tmp(tmp2[14]).UserIcon };
            obj8.icon = onViewTrace(tmp(tmp2[10]).ActionSheetRow.Icon, obj9);
            obj8.onPress = R;
            tmp19 = onViewTrace(tmp(tmp2[10]).ActionSheetRow, obj8);
          }
          cResult[16] = R;
          cResult[17] = userId;
          cResult[18] = tmp19;
        }
        let tmp17 = null;
        if ("" !== content) {
          class P {
            constructor() {
              obj = closure_1(closure_2[3]);
              hideActionSheetResult = obj.hideActionSheet(c7);
              if (onRestoreVersion != null) {
                tmp2 = onRestoreVersion();
              }
              return;
            }
          }
          const obj10 = { label: null, icon: null, onPress: null };
          const intl5 = tmp(tmp2[8]).intl;
          obj10.label = intl5.string(tmp(tmp2[8]).t.JrGD7E);
          const obj11 = { IconComponent: tmp(tmp2[9]).CopyIcon };
          obj10.icon = onViewTrace(tmp(tmp2[10]).ActionSheetRow.Icon, obj11);
          obj10.onPress = tmp4;
          tmp17 = onViewTrace(tmp(tmp2[10]).ActionSheetRow, obj10);
        }
        cResult[13] = content;
        cResult[14] = tmp4;
        cResult[15] = tmp17;
      }
      let tmp12 = null;
      if (null != onQueuedAction) {
        class P {
          constructor() {
            obj = closure_1(closure_2[3]);
            hideActionSheetResult = obj.hideActionSheet(c7);
            if (onRestoreVersion != null) {
              tmp2 = onRestoreVersion();
            }
            return;
          }
        }
        const obj12 = { children: null };
        const obj13 = { label: null, icon: null, onPress: null };
        let intl = tmp(tmp2[8]).intl;
        obj13.label = intl.string(userId(tmp2[11]).CXtLD2);
        const obj14 = { IconComponent: tmp(tmp2[12]).DoubleChevronSmallRightIcon };
        obj13.icon = onViewTrace(tmp(tmp2[10]).ActionSheetRow.Icon, obj14);
        obj13.onPress = function onPress() {
          return tmp7("steer");
        };
        const items1 = [onViewTrace(tmp(tmp2[10]).ActionSheetRow, obj13)];
        const obj15 = { label: null, icon: null, onPress: null };
        const intl2 = tmp(tmp2[8]).intl;
        obj15.label = intl2.string(userId(tmp2[11]).urZwpN);
        const obj16 = { IconComponent: tmp(tmp2[13]).XSmallIcon };
        obj15.icon = onViewTrace(tmp(tmp2[10]).ActionSheetRow.Icon, obj16);
        obj15.onPress = function onPress() {
          return tmp7("cancel");
        };
        items1[1] = onViewTrace(tmp(tmp2[10]).ActionSheetRow, obj15);
        obj12.children = items1;
        tmp12 = closure_6(tmp7, obj12);
      }
      cResult[10] = tmp6;
      cResult[11] = onQueuedAction;
      cResult[12] = tmp12;
      let obj = content(onQueuedAction[5]);
    }
  : function ConjureMessageActionSheet(content) {
      content = content.content;
      const userId = content.userId;
      const onQueuedAction = content.onQueuedAction;
      const onRestoreVersion = content.onRestoreVersion;
      const onViewTrace = content.onViewTrace;
      const items = [content];
      const items1 = [userId];
      const callback = onRestoreVersion.useCallback(() => {
        ClipboardUtils.copy(content);
        ActionSheetActionCreatorsDefault.hideActionSheet(c7);
        const obj4 = { text: null, icon: null };
        const intl = util.intl;
        obj4.text = intl.string(util.t.mGZ66D);
        obj4.icon = CopyIcon.CopyIcon;
        ToastActionCreatorsDefault.open("VIBEGRATIONS_MESSAGE_COPIED", obj4);
      }, items);
      const items2 = [onRestoreVersion];
      const callback1 = onRestoreVersion.useCallback(() => {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }, items1);
      const items3 = [onViewTrace];
      const callback2 = onRestoreVersion.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet(c7);
        if (onRestoreVersion != null) {
          onRestoreVersion();
        }
      }, items2);
      const callback3 = onRestoreVersion.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet(c7);
        if (onViewTrace != null) {
          onViewTrace();
        }
      }, items3);
      let tmp8Result = null;
      if (null != onQueuedAction) {
        let obj = { children: null };
        let obj2 = { label: null, icon: null, onPress: null };
        let intl = tmp6(tmp7[8]).intl;
        obj2.label = intl.string(userId(tmp7[11]).CXtLD2);
        const obj3 = { IconComponent: tmp6(tmp7[12]).DoubleChevronSmallRightIcon };
        obj2.icon = tmp5(tmp6(tmp7[10]).ActionSheetRow.Icon, obj3);
        obj2.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2("steer");
          }
        };
        const items4 = [tmp5(tmp6(tmp7[10]).ActionSheetRow, obj2)];
        let obj4 = { label: null, icon: null, onPress: null };
        const intl2 = tmp6(tmp7[8]).intl;
        obj4.label = intl2.string(userId(tmp7[11]).urZwpN);
        const obj5 = { IconComponent: tmp6(tmp7[13]).XSmallIcon };
        obj4.icon = tmp5(tmp6(tmp7[10]).ActionSheetRow.Icon, obj5);
        obj4.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2("cancel");
          }
        };
        items4[1] = tmp5(tmp6(tmp7[10]).ActionSheetRow, obj4);
        obj.children = items4;
        tmp8Result = closure_6(closure_5, obj);
      }
      const items5 = [tmp8Result, , , ,];
      let tmp5Result = null;
      if ("" !== content) {
        const obj6 = { label: null, icon: null, onPress: null };
        const intl5 = tmp6(tmp7[8]).intl;
        obj6.label = intl5.string(tmp6(tmp7[8]).t.JrGD7E);
        const obj7 = { IconComponent: tmp6(tmp7[9]).CopyIcon };
        obj6.icon = tmp5(tmp6(tmp7[10]).ActionSheetRow.Icon, obj7);
        obj6.onPress = callback;
        tmp5Result = tmp5(tmp6(tmp7[10]).ActionSheetRow, obj6);
      }
      items5[1] = tmp5Result;
      let tmp5Result4 = null;
      if (null != userId) {
        const obj8 = { label: null, icon: null, onPress: null };
        const intl3 = tmp6(tmp7[8]).intl;
        obj8.label = intl3.string(tmp6(tmp7[8]).t.iXAna6);
        const obj9 = { IconComponent: tmp6(tmp7[14]).UserIcon };
        obj8.icon = tmp5(tmp6(tmp7[10]).ActionSheetRow.Icon, obj9);
        obj8.onPress = callback1;
        tmp5Result4 = tmp5(tmp6(tmp7[10]).ActionSheetRow, obj8);
      }
      items5[2] = tmp5Result4;
      let tmp5Result5 = null;
      if (null != onRestoreVersion) {
        const obj10 = { label: null, icon: null, onPress: null };
        const intl4 = tmp6(tmp7[8]).intl;
        obj10.label = intl4.string(userId(tmp7[11]).H8Jfhu);
        const obj11 = { IconComponent: tmp6(tmp7[15]).UndoIcon };
        obj10.icon = tmp5(tmp6(tmp7[10]).ActionSheetRow.Icon, obj11);
        obj10.onPress = callback2;
        tmp5Result5 = tmp5(tmp6(tmp7[10]).ActionSheetRow, obj10);
      }
      items5[3] = tmp5Result5;
      let tmp5Result6 = null;
      if (null != onViewTrace) {
        const obj12 = { label: "View Trace", icon: null, onPress: null };
        const obj13 = { IconComponent: tmp6(tmp7[16]).BugIcon };
        obj12.icon = tmp5(tmp6(tmp7[10]).ActionSheetRow.Icon, obj13);
        obj12.onPress = callback3;
        tmp5Result6 = tmp5(tmp6(tmp7[10]).ActionSheetRow, obj12);
      }
      items5[4] = tmp5Result6;
      return onViewTrace(content(onQueuedAction[17]).ActionSheet, {
        children: closure_6(content(onQueuedAction[10]).ActionSheetRow.Group, { hasIcons: true, children: items5 }),
      });
    };
function openMessageAuthorProfile(id) {
  showUserProfileActionSheetDefault({ userId: id });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageActionSheet.tsx");

export const CONJURE_MESSAGE_SHEET_KEY = "conjure-message-actions";
export { openMessageAuthorProfile };
export const showConjureMessageActions = function showConjureMessageActions(arg0) {
  const obj2 = { content: null, key: null };
  const merged = Object.assign(arg0);
  obj2.content = React4(closure_8, {});
  obj2.key = key;
  ActionSheetActionCreators.showActionSheet(obj2);
};
