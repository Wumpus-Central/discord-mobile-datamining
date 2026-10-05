// === Module 16660: ConjureMessageActionSheet ===

// Module 16660 (ConjureMessageActionSheet)
import intl4 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import CopyIcon from "CopyIcon" /* 4843 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let content;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = "conjure-message-actions";
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  let Icon;
  let Icon2;
  let Icon3;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  let onRestoreVersion;
  let tmp4;
  const tmp = content;
  let obj = content(onRestoreVersion[5]);
  const cResult = obj.c(19);
  content = content.content;
  const userId = content.userId;
  onRestoreVersion = content.onRestoreVersion;
  if (cResult[0] !== content) {
    const fn = function o() {
      let intl;
      const obj = ClipboardUtils;
      obj.copy(content);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet(c6);
      const obj3 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: intl.string(intl4.t.mGZ66D), IconComponent: CopyIcon.CopyIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl4.intl;
      open(obj3);
    };
    cResult[0] = content;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userId) {
    class I {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
    cResult[2] = userId;
    cResult[3] = I;
  } else {
    class I {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
  }
  if (cResult[4] !== onRestoreVersion) {
    class I {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
    cResult[4] = onRestoreVersion;
    cResult[5] = tmp7;
  } else {
    class I {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
  }
  if (cResult[6] === content) {
    class I {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
    if (cResult[9] === I) {
      class I {
        constructor() {
          if (null != userId) {
            const obj = { userId: tmp };
            showUserProfileActionSheetDefault(obj);
          }
        }
      }
      if (cResult[12] === tmp7) {
        class I {
          constructor() {
            if (null != userId) {
              const obj = { userId: tmp };
              showUserProfileActionSheetDefault(obj);
            }
          }
        }
        if (cResult[15] === tmp8) {
          class I {
            constructor() {
              if (null != userId) {
                const obj = { userId: tmp };
                showUserProfileActionSheetDefault(obj);
              }
            }
          }
        }
        let obj2 = { children: closure_5(tmp(tmp2[10]).ActionSheetRow.Group, obj3) };
        const ActionSheet = tmp(tmp2[14]).ActionSheet;
        obj3 = { hasIcons: true, children: items };
        items = [tmp8, tmp10, tmp12];
        cResult[15] = tmp8;
        cResult[16] = tmp10;
        cResult[17] = tmp12;
        cResult[18] = closure_4(ActionSheet, obj2);
        const tmp18 = closure_4(ActionSheet, obj2);
      }
      let tmp13 = null;
      if (null != onRestoreVersion) {
        class I {
          constructor() {
            if (null != userId) {
              const obj = { userId: tmp };
              showUserProfileActionSheetDefault(obj);
            }
          }
        }
        const obj4 = { label: intl2.string(userId(onRestoreVersion[12]).H8Jfhu), icon: closure_4(Icon2, obj5), onPress: tmp7 };
        const ActionSheetRow2 = tmp(tmp2[10]).ActionSheetRow;
        intl2 = tmp(tmp2[8]).intl;
        obj5 = { IconComponent: tmp(onRestoreVersion[13]).UndoIcon };
        Icon2 = tmp(tmp2[10]).ActionSheetRow.Icon;
        tmp13 = closure_4(ActionSheetRow2, obj4);
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
            const obj = { userId: tmp };
            showUserProfileActionSheetDefault(obj);
          }
        }
      }
      const obj6 = { label: intl.string(tmp(onRestoreVersion[8]).t.iXAna6), icon: closure_4(Icon, obj7), onPress: I };
      const ActionSheetRow = tmp(tmp2[10]).ActionSheetRow;
      intl = tmp(tmp2[8]).intl;
      obj7 = { IconComponent: tmp(onRestoreVersion[11]).UserIcon };
      Icon = tmp(tmp2[10]).ActionSheetRow.Icon;
      tmp11 = closure_4(ActionSheetRow, obj6);
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
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
    const obj8 = { label: intl3.string(tmp(onRestoreVersion[8]).t.JrGD7E), icon: closure_4(Icon3, obj9), onPress: tmp4 };
    const ActionSheetRow3 = tmp(tmp2[10]).ActionSheetRow;
    intl3 = tmp(tmp2[8]).intl;
    obj9 = { IconComponent: tmp(onRestoreVersion[9]).CopyIcon };
    Icon3 = tmp(tmp2[10]).ActionSheetRow.Icon;
    tmp9 = closure_4(ActionSheetRow3, obj8);
  }
  cResult[6] = content;
  cResult[7] = tmp4;
  cResult[8] = tmp9;
}) : ((content) => {
  let Icon;
  let Icon2;
  let Icon3;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj4;
  let obj6;
  content = content.content;
  const userId = content.userId;
  const onRestoreVersion = content.onRestoreVersion;
  const items = [content];
  const items1 = [userId];
  const callback = react.useCallback(() => {
    let intl;
    const obj = ClipboardUtils;
    obj.copy(content);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet(c6);
    const obj3 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: intl.string(intl4.t.mGZ66D), IconComponent: CopyIcon.CopyIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl4.intl;
    open(obj3);
  }, items);
  const items2 = [onRestoreVersion];
  const callback1 = react.useCallback(() => {
    if (null != userId) {
      const obj = { userId: tmp };
      showUserProfileActionSheetDefault(obj);
    }
  }, items1);
  const callback2 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(c6);
    if (onRestoreVersion != null) {
      onRestoreVersion();
    }
  }, items2);
  const ActionSheet = content(onRestoreVersion[14]).ActionSheet;
  let tmp4Result = null;
  const Group = content(onRestoreVersion[10]).ActionSheetRow.Group;
  if ("" !== content) {
    let obj2 = { label: intl3.string(content(onRestoreVersion[8]).t.JrGD7E), icon: closure_4(Icon3, obj3), onPress: callback };
    const ActionSheetRow3 = tmp5(tmp6[10]).ActionSheetRow;
    intl3 = tmp5(tmp6[8]).intl;
    obj3 = { IconComponent: content(onRestoreVersion[9]).CopyIcon };
    Icon3 = tmp5(tmp6[10]).ActionSheetRow.Icon;
    tmp4Result = closure_4(ActionSheetRow3, obj2);
  }
  const items3 = [tmp4Result, , ];
  let tmp4Result3 = null;
  if (null != userId) {
    let obj = { label: intl.string(content(onRestoreVersion[8]).t.iXAna6), icon: closure_4(Icon, obj4), onPress: callback1 };
    const ActionSheetRow = tmp5(tmp6[10]).ActionSheetRow;
    intl = tmp5(tmp6[8]).intl;
    obj4 = { IconComponent: content(onRestoreVersion[11]).UserIcon };
    Icon = tmp5(tmp6[10]).ActionSheetRow.Icon;
    tmp4Result3 = closure_4(ActionSheetRow, obj);
  }
  items3[1] = tmp4Result3;
  let tmp4Result4 = null;
  if (null != onRestoreVersion) {
    const obj5 = { label: intl2.string(userId(onRestoreVersion[12]).H8Jfhu), icon: closure_4(Icon2, obj6), onPress: callback2 };
    const ActionSheetRow2 = tmp5(tmp6[10]).ActionSheetRow;
    intl2 = tmp5(tmp6[8]).intl;
    obj6 = { IconComponent: content(onRestoreVersion[13]).UndoIcon };
    Icon2 = tmp5(tmp6[10]).ActionSheetRow.Icon;
    tmp4Result4 = closure_4(ActionSheetRow2, obj5);
  }
  items3[2] = tmp4Result4;
  const obj7 = { children: closure_5(Group, { hasIcons: true, children: items3 }) };
  return closure_4(ActionSheet, obj7);
});
function openMessageAuthorProfile(id) {
  const obj = { userId: id };
  showUserProfileActionSheetDefault(obj);
}
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageActionSheet.tsx");

export const CONJURE_MESSAGE_SHEET_KEY = "conjure-message-actions";
export { openMessageAuthorProfile };
export const showConjureMessageActions = function showConjureMessageActions(arg0) {
  let obj2;
  const obj = { content: React3(closure_7, obj2), key };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};