// === Module 10968: DismissibleActionSheet ===

// Module 10968 (DismissibleActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import useMountEffectDefault from "useMountEffect" /* 5288 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = function DismissibleActionSheet(arg0) {
  importDefault = arg0;
  useMountEffectDefault(() => {
    const obj2 = {};
    const obj = ActionSheetActionCreatorsDefault;
    const merged = Object.assign(closure_0);
    obj2.markAsDismissed = function markAsDismissed(arg0) {
      closure_0(4794).hideActionSheet(closure_1_0.actionSheetKey);
      closure_1_0.markAsDismissed(arg0);
    };
    obj.openLazy(closure_0.importer(), closure_0.actionSheetKey, obj2);
  });
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = arg0);
  const effect = noop.useEffect(() => () => {
    if (tmp2) {
      closure_0(4794).hideActionSheet(closure_1_0.actionSheetKey);
      const obj = closure_0(4794);
    }
    tmp2 = null != closure_1_0.hideSheetOnUnmount && closure_1_0.hideSheetOnUnmount;
  }, items);
  return null;
};