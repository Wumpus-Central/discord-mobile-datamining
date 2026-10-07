// === Module 16638: ConjureDesignRemarkSheet ===

// Module 16638 (ConjureDesignRemarkSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 16584 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let View = fn(17).View;
const sendUserMessage = fn(12923).sendUserMessage;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ConjureDesignRemarkSheet = "ConjureDesignRemarkSheet";
const createStyles = fn(4896);
let obj2 = { content: { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, actions: null };
let obj3 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/design_feedback/native/ConjureDesignRemarkSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(onClose[8]).c(41);
  projectId = projectId.projectId;
  const target = projectId.target;
  onClose = projectId.onClose;
  closure_10();
  let obj = projectId(onClose[8]);
  first = first(noop.useState(""), 2)[0];
  if (cResult[0] !== onClose) {
    class S {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet(ConjureDesignRemarkSheet);
        tmp2 = onClose();
        return;
      }
    }
    cResult[0] = onClose;
    cResult[1] = S;
  } else {
    class S {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet(ConjureDesignRemarkSheet);
        tmp2 = onClose();
        return;
      }
    }
  }
  noop = S;
  if (cResult[2] !== first) {
    class S {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet(ConjureDesignRemarkSheet);
        tmp2 = onClose();
        return;
      }
    }
    const result = obj2.isConjureDesignCommentUsable(first);
    cResult[2] = first;
    cResult[3] = result;
  } else {
    class S {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet(ConjureDesignRemarkSheet);
        tmp2 = onClose();
        return;
      }
    }
  }
  View = tmp6;
  if (cResult[4] === S) {
    class S {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet(ConjureDesignRemarkSheet);
        tmp2 = onClose();
        return;
      }
    }
  }
  const fn = function f() {
    if (result) {
      sendUserMessage(projectId, ConjureDesignFeedback.formatConjureDesignRemark(target, first));
      S();
    }
  };
  cResult[4] = S;
  cResult[5] = first;
  cResult[6] = projectId;
  cResult[7] = target;
  cResult[8] = tmp6;
  cResult[9] = fn;
  const tmp3 = first(noop.useState(""), 2);
}) : ((projectId) => {
  projectId = projectId.projectId;
  const target = projectId.target;
  const onClose = projectId.onClose;
  value = undefined;
  let onPress;
  const tmp = closure_10();
  const tmp2 = value(onPress.useState(""), 2);
  value = tmp2[0];
  const items = [onClose];
  onPress = onPress.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureDesignRemarkSheet);
    onClose();
  }, items);
  const result = projectId(onClose[10]).isConjureDesignCommentUsable(value);
  c5 = result;
  const items1 = [result, projectId, target, value, onPress];
  const callback1 = onPress.useCallback(() => {
    if (c5) {
      sendUserMessage(projectId, ConjureDesignFeedback.formatConjureDesignRemark(target, first));
      callback();
    }
  }, items1);
  let obj = projectId(onClose[10]);
  const kind = projectId(onClose[10]).labelConjureDesignTarget(target).kind;
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: onClose, header: null, children: null };
  const obj4 = { title: null };
  const obj2 = projectId(onClose[10]);
  obj4.title = projectId(onClose[10]).describeConjureDesignTarget(target);
  obj3.header = closure_7(projectId(onClose[11]).BottomSheetTitleHeader, obj4);
  const obj6 = { style: tmp.content, children: null };
  const obj7 = { autoFocus: true, label: null, placeholder: null, maxLength: null, value: null, onChange: null };
  const intl = projectId(onClose[12]).intl;
  obj7.label = intl.string(target(onClose[13]).KCYqWL);
  if ("" === kind) {
    const intl2 = tmp5(tmp6[12]).intl;
    let stringResult = intl2.string(tmp12(tmp6[13]).MPPV1Q);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = "Edit " + kind;
  }
  obj7.placeholder = stringResult;
  obj7.maxLength = projectId(onClose[10]).CONJURE_DESIGN_COMMENT_MAX;
  obj7.value = value;
  obj7.onChange = tmp2[1];
  const items2 = [closure_7(projectId(onClose[14]).TextArea, obj7), ];
  const obj8 = { style: tmp.actions, children: null };
  const obj9 = { variant: "tertiary", grow: true, text: null, onPress: null };
  const intl3 = tmp5(tmp6[12]).intl;
  obj9.text = intl3.string(target(onClose[13])["W/HWvP"]);
  obj9.onPress = onPress;
  const items3 = [closure_7(projectId(onClose[15]).Button, obj9), ];
  const obj10 = { variant: "primary", grow: true, text: null, disabled: null, onPress: null };
  const intl4 = tmp5(tmp6[12]).intl;
  obj10.text = intl4.string(projectId(onClose[12]).t.TXNS7S);
  obj10.disabled = !result;
  obj10.onPress = callback1;
  items3[1] = closure_7(projectId(onClose[15]).Button, obj10);
  obj8.children = items3;
  items2[1] = closure_8(c5, obj8);
  obj6.children = items2;
  obj3.children = closure_8(c5, obj6);
  return closure_7(projectId(onClose[16]).ActionSheet, obj3);
});
export const CONJURE_DESIGN_REMARK_SHEET_KEY = "ConjureDesignRemarkSheet";