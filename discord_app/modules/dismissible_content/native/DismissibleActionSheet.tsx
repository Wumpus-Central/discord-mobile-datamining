// === Module 10644: DismissibleActionSheet ===

// Module 10644 (DismissibleActionSheet)
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4946 */;
import closure_2 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = function DismissibleActionSheet(arg0) {
  importDefault = arg0;
  useMountLayoutEffectDefault(() => {
    let obj = lib(closure_1_1[2]);
    obj = {};
    const merged = Object.assign(lib);
    obj.markAsDismissed = function markAsDismissed(arg0) {
      closure_1_0(closure_1_1[2]).hideActionSheet(closure_0.actionSheetKey);
      closure_0.markAsDismissed(arg0);
    };
    obj.openLazy(lib.importer(), lib.actionSheetKey, obj);
  });
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = arg0);
  const effect = React.useEffect(() => () => {
    if (tmp2) {
      closure_1_0(closure_1_1[2]).hideActionSheet(tmp.actionSheetKey);
      const obj = closure_1_0(closure_1_1[2]);
    }
  }, items);
  return null;
};