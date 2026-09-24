// === Module 17072: VibegrationsDesignRemarkSheet ===

// Module 17072 (VibegrationsDesignRemarkSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 17024 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const sendUserMessage = fn(13457).sendUserMessage;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const VibegrationsDesignRemarkSheet = "VibegrationsDesignRemarkSheet";
const createStyles = fn(4829);
let obj2 = { content: { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, actions: null };
let obj3 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDesignRemarkSheet.tsx");

export default function VibegrationsDesignRemarkSheet(projectId) {
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
    ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsDesignRemarkSheet);
    onClose();
  }, items);
  const result = projectId(onClose[8]).isVibegrationsDesignCommentUsable(value);
  c5 = result;
  const items1 = [result, projectId, target, value, onPress];
  const callback1 = onPress.useCallback(() => {
    if (c5) {
      sendUserMessage(projectId, VibegrationsDesignFeedback.formatVibegrationsDesignRemark(target, first));
      callback();
    }
  }, items1);
  let obj = projectId(onClose[8]);
  const kind = projectId(onClose[8]).labelVibegrationsDesignTarget(target).kind;
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: onClose, header: null, children: null };
  const obj4 = { title: null };
  const obj2 = projectId(onClose[8]);
  obj4.title = projectId(onClose[8]).describeVibegrationsDesignTarget(target);
  obj3.header = closure_7(projectId(onClose[10]).BottomSheetTitleHeader, obj4);
  const obj6 = { style: tmp.content, children: null };
  const obj7 = { autoFocus: true, label: null, placeholder: null, maxLength: null, value: null, onChange: null };
  const intl = projectId(onClose[12]).intl;
  obj7.label = intl.string(target(onClose[13])["qR+sGX"]);
  if ("" === kind) {
    const intl2 = tmp5(tmp6[12]).intl;
    let stringResult = intl2.string(tmp12(tmp6[13]).FK09JH);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = "Edit " + kind;
  }
  obj7.placeholder = stringResult;
  obj7.maxLength = projectId(onClose[8]).VIBEGRATIONS_DESIGN_COMMENT_MAX;
  obj7.value = value;
  obj7.onChange = tmp2[1];
  const items2 = [closure_7(projectId(onClose[11]).TextArea, obj7), ];
  const obj8 = { style: tmp.actions, children: null };
  const obj9 = { variant: "tertiary", grow: true, text: null, onPress: null };
  const intl3 = tmp5(tmp6[12]).intl;
  obj9.text = intl3.string(target(onClose[13]).cLsnYH);
  obj9.onPress = onPress;
  const items3 = [closure_7(projectId(onClose[14]).Button, obj9), ];
  const obj10 = { variant: "primary", grow: true, text: null, disabled: null, onPress: null };
  const intl4 = tmp5(tmp6[12]).intl;
  obj10.text = intl4.string(projectId(onClose[12]).t.TXNS7S);
  obj10.disabled = !result;
  obj10.onPress = callback1;
  items3[1] = closure_7(projectId(onClose[14]).Button, obj10);
  obj8.children = items3;
  items2[1] = closure_8(c5, obj8);
  obj6.children = items2;
  obj3.children = closure_8(c5, obj6);
  return closure_7(projectId(onClose[9]).ActionSheet, obj3);
};
export const VIBEGRATIONS_DESIGN_REMARK_SHEET_KEY = "VibegrationsDesignRemarkSheet";