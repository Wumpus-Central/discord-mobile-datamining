// === Module 10501: DismissibleActionSheet ===

// Module 10501 (DismissibleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import useMountEffectDefault from "useMountEffect" /* 5588 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export function DismissibleActionSheet(arg0) {
  importDefault = arg0;
  useMountEffectDefault(() => {
    const obj2 = {};
    const obj = ActionSheetActionCreatorsDefault;
    const merged = Object.assign(closure_0);
    obj2.markAsDismissed = function _markAsDismissed(arg0) {
      closure_0(5253).hideActionSheet(closure_1_0.actionSheetKey);
      closure_1_0.markAsDismissed(arg0);
    };
    obj.openLazy(closure_0.importer(), closure_0.actionSheetKey, obj2);
  });
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = arg0);
  const effect = noop.useEffect(() => () => {
    if (tmp2) {
      closure_0(5253).hideActionSheet(closure_1_0.actionSheetKey);
      const obj = closure_0(5253);
    }
    tmp2 = null != closure_1_0.hideSheetOnUnmount && closure_1_0.hideSheetOnUnmount;
  }, items);
  return null;
}