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
      const cResult = content(onQueuedAction[5]).c(25);
      content = content.content;
      const userId = content.userId;
      onQueuedAction = content.onQueuedAction;
      const onRestoreVersion = content.onRestoreVersion;
      if (cResult[0] !== content) {
        const fn = function o() {
          ClipboardUtils.copy(content);
          ActionSheetActionCreatorsDefault.hideActionSheet(c7);
          const obj4 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: null, IconComponent: null };
          const intl = util.intl;
          obj4.content = intl.string(util.t.mGZ66D);
          obj4.IconComponent = CopyIcon.CopyIcon;
          ToastActionCreatorsDefault.open(obj4);
        };
        cResult[0] = content;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== userId) {
        const fn2 = function p() {
          if (null != userId) {
            const obj = { userId: tmp };
            showUserProfileActionSheetDefault(obj);
          }
        };
        cResult[2] = userId;
        cResult[3] = fn2;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== onQueuedAction) {
        function handleQueuedAction(arg0) {
          ActionSheetActionCreatorsDefault.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2(arg0);
          }
        }
        cResult[4] = onQueuedAction;
        cResult[5] = handleQueuedAction;
        let tmp6 = handleQueuedAction;
      } else {
        tmp6 = cResult[5];
      }
      closure_4 = tmp6;
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
      if (cResult[8] === tmp6) {
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
        if (cResult[11] === content) {
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
          if (cResult[14] === tmp5) {
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
            if (cResult[17] === P) {
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
              if (cResult[20] === tmp8) {
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
              const items = [tmp8, tmp13, tmp15, tmp17];
              obj3.children = items;
              obj2.children = closure_6(tmp(tmp2[10]).ActionSheetRow.Group, obj3);
              const tmp23 = closure_4(tmp(tmp2[16]).ActionSheet, obj2);
              cResult[20] = tmp8;
              cResult[21] = tmp13;
              cResult[22] = tmp15;
              cResult[23] = tmp17;
              cResult[24] = tmp23;
            }
            let tmp18 = null;
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
              let obj4 = { label: null, icon: null, onPress: null };
              const intl4 = tmp(tmp2[8]).intl;
              obj4.label = intl4.string(userId(tmp2[11]).H8Jfhu);
              const obj5 = { IconComponent: tmp(tmp2[15]).UndoIcon };
              obj4.icon = closure_4(tmp(tmp2[10]).ActionSheetRow.Icon, obj5);
              obj4.onPress = P;
              tmp18 = closure_4(tmp(tmp2[10]).ActionSheetRow, obj4);
            }
            cResult[17] = P;
            cResult[18] = onRestoreVersion;
            cResult[19] = tmp18;
          }
          let tmp16 = null;
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
            const obj6 = { label: null, icon: null, onPress: null };
            const intl3 = tmp(tmp2[8]).intl;
            obj6.label = intl3.string(tmp(tmp2[8]).t.iXAna6);
            const obj7 = { IconComponent: tmp(tmp2[14]).UserIcon };
            obj6.icon = closure_4(tmp(tmp2[10]).ActionSheetRow.Icon, obj7);
            obj6.onPress = tmp5;
            tmp16 = closure_4(tmp(tmp2[10]).ActionSheetRow, obj6);
          }
          cResult[14] = tmp5;
          cResult[15] = userId;
          cResult[16] = tmp16;
        }
        let tmp14 = null;
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
          const obj8 = { label: null, icon: null, onPress: null };
          const intl5 = tmp(tmp2[8]).intl;
          obj8.label = intl5.string(tmp(tmp2[8]).t.JrGD7E);
          const obj9 = { IconComponent: tmp(tmp2[9]).CopyIcon };
          obj8.icon = closure_4(tmp(tmp2[10]).ActionSheetRow.Icon, obj9);
          obj8.onPress = tmp4;
          tmp14 = closure_4(tmp(tmp2[10]).ActionSheetRow, obj8);
        }
        cResult[11] = content;
        cResult[12] = tmp4;
        cResult[13] = tmp14;
      }
      let tmp9 = null;
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
        const obj10 = { children: null };
        const obj11 = { label: null, icon: null, onPress: null };
        let intl = tmp(tmp2[8]).intl;
        obj11.label = intl.string(userId(tmp2[11]).CXtLD2);
        const obj12 = { IconComponent: tmp(tmp2[12]).DoubleChevronSmallRightIcon };
        obj11.icon = closure_4(tmp(tmp2[10]).ActionSheetRow.Icon, obj12);
        obj11.onPress = function onPress() {
          return closure_4("steer");
        };
        const items1 = [closure_4(tmp(tmp2[10]).ActionSheetRow, obj11)];
        const obj13 = { label: null, icon: null, onPress: null };
        const intl2 = tmp(tmp2[8]).intl;
        obj13.label = intl2.string(userId(tmp2[11]).urZwpN);
        const obj14 = { IconComponent: tmp(tmp2[13]).XSmallIcon };
        obj13.icon = closure_4(tmp(tmp2[10]).ActionSheetRow.Icon, obj14);
        obj13.onPress = function onPress() {
          return closure_4("cancel");
        };
        items1[1] = closure_4(tmp(tmp2[10]).ActionSheetRow, obj13);
        obj10.children = items1;
        tmp9 = closure_6(closure_5, obj10);
      }
      cResult[8] = tmp6;
      cResult[9] = onQueuedAction;
      cResult[10] = tmp9;
      let obj = content(onQueuedAction[5]);
    }
  : function ConjureMessageActionSheet(content) {
      content = content.content;
      const userId = content.userId;
      const onQueuedAction = content.onQueuedAction;
      const onRestoreVersion = content.onRestoreVersion;
      const items = [content];
      const items1 = [userId];
      const callback = onRestoreVersion.useCallback(() => {
        ClipboardUtils.copy(content);
        ActionSheetActionCreatorsDefault.hideActionSheet(c7);
        const obj4 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: null, IconComponent: null };
        const intl = util.intl;
        obj4.content = intl.string(util.t.mGZ66D);
        obj4.IconComponent = CopyIcon.CopyIcon;
        ToastActionCreatorsDefault.open(obj4);
      }, items);
      const items2 = [onRestoreVersion];
      const callback1 = onRestoreVersion.useCallback(() => {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }, items1);
      const callback2 = onRestoreVersion.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet(c7);
        if (onRestoreVersion != null) {
          onRestoreVersion();
        }
      }, items2);
      let tmp7Result = null;
      if (null != onQueuedAction) {
        let obj = { children: null };
        let obj2 = { label: null, icon: null, onPress: null };
        let intl = tmp5(tmp6[8]).intl;
        obj2.label = intl.string(userId(tmp6[11]).CXtLD2);
        const obj3 = { IconComponent: tmp5(tmp6[12]).DoubleChevronSmallRightIcon };
        obj2.icon = closure_4(tmp5(tmp6[10]).ActionSheetRow.Icon, obj3);
        obj2.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2("steer");
          }
        };
        const items3 = [closure_4(tmp5(tmp6[10]).ActionSheetRow, obj2)];
        let obj4 = { label: null, icon: null, onPress: null };
        const intl2 = tmp5(tmp6[8]).intl;
        obj4.label = intl2.string(userId(tmp6[11]).urZwpN);
        const obj5 = { IconComponent: tmp5(tmp6[13]).XSmallIcon };
        obj4.icon = closure_4(tmp5(tmp6[10]).ActionSheetRow.Icon, obj5);
        obj4.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2("cancel");
          }
        };
        items3[1] = closure_4(tmp5(tmp6[10]).ActionSheetRow, obj4);
        obj.children = items3;
        tmp7Result = closure_6(closure_5, obj);
      }
      const items4 = [tmp7Result, , ,];
      let tmp4Result = null;
      if ("" !== content) {
        const obj6 = { label: null, icon: null, onPress: null };
        const intl5 = tmp5(tmp6[8]).intl;
        obj6.label = intl5.string(tmp5(tmp6[8]).t.JrGD7E);
        const obj7 = { IconComponent: tmp5(tmp6[9]).CopyIcon };
        obj6.icon = closure_4(tmp5(tmp6[10]).ActionSheetRow.Icon, obj7);
        obj6.onPress = callback;
        tmp4Result = closure_4(tmp5(tmp6[10]).ActionSheetRow, obj6);
      }
      items4[1] = tmp4Result;
      let tmp4Result3 = null;
      if (null != userId) {
        const obj8 = { label: null, icon: null, onPress: null };
        const intl3 = tmp5(tmp6[8]).intl;
        obj8.label = intl3.string(tmp5(tmp6[8]).t.iXAna6);
        const obj9 = { IconComponent: tmp5(tmp6[14]).UserIcon };
        obj8.icon = closure_4(tmp5(tmp6[10]).ActionSheetRow.Icon, obj9);
        obj8.onPress = callback1;
        tmp4Result3 = closure_4(tmp5(tmp6[10]).ActionSheetRow, obj8);
      }
      items4[2] = tmp4Result3;
      let tmp4Result4 = null;
      if (null != onRestoreVersion) {
        const obj10 = { label: null, icon: null, onPress: null };
        const intl4 = tmp5(tmp6[8]).intl;
        obj10.label = intl4.string(userId(tmp6[11]).H8Jfhu);
        const obj11 = { IconComponent: tmp5(tmp6[15]).UndoIcon };
        obj10.icon = closure_4(tmp5(tmp6[10]).ActionSheetRow.Icon, obj11);
        obj10.onPress = callback2;
        tmp4Result4 = closure_4(tmp5(tmp6[10]).ActionSheetRow, obj10);
      }
      items4[3] = tmp4Result4;
      return closure_4(content(onQueuedAction[16]).ActionSheet, {
        children: closure_6(content(onQueuedAction[10]).ActionSheetRow.Group, { hasIcons: true, children: items4 }),
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
