// === Module 16649: VibegrationsMessageActionSheet ===

// Module 16649 (VibegrationsMessageActionSheet)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import CopyIcon from "CopyIcon" /* 4843 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "vibegrations-message-actions";
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  const cResult = content(onRestoreVersion[5]).c(19);
  content = content.content;
  const userId = content.userId;
  onRestoreVersion = content.onRestoreVersion;
  if (cResult[0] !== content) {
    const fn = function o() {
      ClipboardUtils.copy(content);
      ActionSheetActionCreatorsDefault.hideActionSheet(c6);
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
    class I {
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
    cResult[3] = I;
  } else {
    class I {
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
  if (cResult[4] !== onRestoreVersion) {
    class I {
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
    cResult[4] = onRestoreVersion;
    cResult[5] = tmp7;
  } else {
    class I {
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
  if (cResult[6] === content) {
    class I {
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
    if (cResult[9] === I) {
      class I {
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
      if (cResult[12] === tmp7) {
        class I {
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
        if (cResult[15] === tmp8) {
          class I {
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
        let obj2 = { children: null };
        const obj3 = { hasIcons: true, children: null };
        const items = [tmp8, tmp10, tmp12];
        obj3.children = items;
        obj2.children = closure_5(tmp(tmp2[10]).ActionSheetRow.Group, obj3);
        const tmp18 = closure_4(tmp(tmp2[14]).ActionSheet, obj2);
        cResult[15] = tmp8;
        cResult[16] = tmp10;
        cResult[17] = tmp12;
        cResult[18] = tmp18;
      }
      let tmp13 = null;
      if (null != onRestoreVersion) {
        class I {
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
        let obj4 = { label: null, icon: null, onPress: null };
        const intl2 = tmp(tmp2[8]).intl;
        obj4.label = intl2.string(userId(tmp2[12]).eSDVDt);
        const obj5 = { IconComponent: tmp(tmp2[13]).UndoIcon };
        obj4.icon = closure_4(tmp(tmp2[10]).ActionSheetRow.Icon, obj5);
        obj4.onPress = tmp7;
        tmp13 = closure_4(tmp(tmp2[10]).ActionSheetRow, obj4);
      }
      cResult[12] = tmp7;
      cResult[13] = onRestoreVersion;
      cResult[14] = tmp13;
    }
    let tmp11 = null;
    if (null != userId) {
      class I {
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
      const obj6 = { label: null, icon: null, onPress: null };
      let intl = tmp(tmp2[8]).intl;
      obj6.label = intl.string(tmp(tmp2[8]).t.iXAna6);
      const obj7 = { IconComponent: tmp(tmp2[11]).UserIcon };
      obj6.icon = closure_4(tmp(tmp2[10]).ActionSheetRow.Icon, obj7);
      obj6.onPress = I;
      tmp11 = closure_4(tmp(tmp2[10]).ActionSheetRow, obj6);
    }
    cResult[9] = I;
    cResult[10] = userId;
    cResult[11] = tmp11;
  }
  let tmp9 = null;
  if ("" !== content) {
    class I {
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
    const obj8 = { label: null, icon: null, onPress: null };
    const intl3 = tmp(tmp2[8]).intl;
    obj8.label = intl3.string(tmp(tmp2[8]).t.JrGD7E);
    const obj9 = { IconComponent: tmp(tmp2[9]).CopyIcon };
    obj8.icon = closure_4(tmp(tmp2[10]).ActionSheetRow.Icon, obj9);
    obj8.onPress = tmp4;
    tmp9 = closure_4(tmp(tmp2[10]).ActionSheetRow, obj8);
  }
  cResult[6] = content;
  cResult[7] = tmp4;
  cResult[8] = tmp9;
  let obj = content(onRestoreVersion[5]);
}) : ((content) => {
  content = content.content;
  const userId = content.userId;
  const onRestoreVersion = content.onRestoreVersion;
  const items = [content];
  const items1 = [userId];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(content);
    ActionSheetActionCreatorsDefault.hideActionSheet(c6);
    const obj4 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: null, IconComponent: null };
    const intl = util.intl;
    obj4.content = intl.string(util.t.mGZ66D);
    obj4.IconComponent = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open(obj4);
  }, items);
  const items2 = [onRestoreVersion];
  const callback1 = noop.useCallback(() => {
    if (null != userId) {
      const obj = { userId: tmp };
      showUserProfileActionSheetDefault(obj);
    }
  }, items1);
  const callback2 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(c6);
    if (onRestoreVersion != null) {
      onRestoreVersion();
    }
  }, items2);
  let tmp4Result = null;
  if ("" !== content) {
    let obj2 = { label: null, icon: null, onPress: null };
    const intl3 = tmp5(tmp6[8]).intl;
    obj2.label = intl3.string(tmp5(tmp6[8]).t.JrGD7E);
    const obj3 = { IconComponent: tmp5(tmp6[9]).CopyIcon };
    obj2.icon = closure_4(tmp5(tmp6[10]).ActionSheetRow.Icon, obj3);
    obj2.onPress = callback;
    tmp4Result = closure_4(tmp5(tmp6[10]).ActionSheetRow, obj2);
  }
  const items3 = [tmp4Result, , ];
  let tmp4Result3 = null;
  if (null != userId) {
    let obj = { label: null, icon: null, onPress: null };
    let intl = tmp5(tmp6[8]).intl;
    obj.label = intl.string(tmp5(tmp6[8]).t.iXAna6);
    let obj4 = { IconComponent: tmp5(tmp6[11]).UserIcon };
    obj.icon = closure_4(tmp5(tmp6[10]).ActionSheetRow.Icon, obj4);
    obj.onPress = callback1;
    tmp4Result3 = closure_4(tmp5(tmp6[10]).ActionSheetRow, obj);
  }
  items3[1] = tmp4Result3;
  let tmp4Result4 = null;
  if (null != onRestoreVersion) {
    const obj5 = { label: null, icon: null, onPress: null };
    const intl2 = tmp5(tmp6[8]).intl;
    obj5.label = intl2.string(userId(tmp6[12]).eSDVDt);
    const obj6 = { IconComponent: tmp5(tmp6[13]).UndoIcon };
    obj5.icon = closure_4(tmp5(tmp6[10]).ActionSheetRow.Icon, obj6);
    obj5.onPress = callback2;
    tmp4Result4 = closure_4(tmp5(tmp6[10]).ActionSheetRow, obj5);
  }
  items3[2] = tmp4Result4;
  return closure_4(content(onRestoreVersion[14]).ActionSheet, { children: closure_5(content(onRestoreVersion[10]).ActionSheetRow.Group, { hasIcons: true, children: items3 }) });
});
function openMessageAuthorProfile(id) {
  showUserProfileActionSheetDefault({ userId: id });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageActionSheet.tsx");

export const VIBEGRATIONS_MESSAGE_SHEET_KEY = "vibegrations-message-actions";
export { openMessageAuthorProfile };
export const showVibegrationsMessageActions = function showVibegrationsMessageActions(arg0) {
  const obj2 = { content: null, key: null };
  const merged = Object.assign(arg0);
  obj2.content = React4(closure_7, {});
  obj2.key = key;
  ActionSheetActionCreators.showActionSheet(obj2);
};