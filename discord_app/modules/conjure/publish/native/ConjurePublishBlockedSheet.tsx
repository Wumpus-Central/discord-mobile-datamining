// === Module 10938: ConjurePublishBlockedSheet ===

// Module 10938 (ConjurePublishBlockedSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function ConjurePublishBlockedSheet(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  ({ reason, message } = onConfirm);
  const tmp = closure_7();
  const tmp2 = onConfirm;
  const conjurePublishBlockedCopy = onConfirm(10939).getConjurePublishBlockedCopy(reason, message);
  const obj2 = { header: closure_4(onConfirm(7315).BottomSheetTitleHeader, { title: conjurePublishBlockedCopy.title }), children: null };
  const obj4 = { style: tmp.content, children: null };
  const items = [
    closure_4(onConfirm(5619).Text, { variant: "text-md/normal", color: "text-muted", children: conjurePublishBlockedCopy.body }),
    closure_4(onConfirm(5629).Button, {
      variant: "primary",
      text: conjurePublishBlockedCopy.action,
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishBlockedSheet);
        if (onConfirm != null) {
          onConfirm();
        }
      }
    }),

  ];
  let tmp5Result = null;
  if (null != conjurePublishBlockedCopy.cancel) {
    function close() {
      ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishBlockedSheet);
    }
    const obj7 = { variant: "secondary", text: conjurePublishBlockedCopy.cancel, onPress: close };
    tmp5Result = closure_4(tmp2(5629).Button, obj7);
  }
  items[2] = tmp5Result;
  obj4.children = items;
  obj2.children = closure_5(View, obj4);
  return closure_4(onConfirm(7360).ActionSheet, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
ConjurePublishBlockedSheet = "ConjurePublishBlockedSheet";
const createStyles = fn(5009);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishBlockedSheet.tsx");

export default function showConjurePublishBlockedSheet(reason, message, onConfirm) {
  const obj2 = { key: ConjurePublishBlockedSheet, content: React4(ConjurePublishBlockedSheet, { reason, message, onConfirm }) };
  ActionSheetActionCreators.showActionSheet(obj2);
};
export const CONJURE_PUBLISH_BLOCKED_SHEET_KEY = "ConjurePublishBlockedSheet";