// === Module 9677: DismissibleActionSheet ===

// Module 9677 (DismissibleActionSheet)
import noop from "noop";

const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = function DismissibleActionSheet(arg0) {
  const importDefault = arg0;
  importDefault(4620)(() => {
    let obj = lib(outer1_1[2]);
    obj = {};
    const merged = Object.assign(lib);
    obj.markAsDismissed = function markAsDismissed(arg0) {
      outer1_0(outer1_1[2]).hideActionSheet(closure_0.actionSheetKey);
      closure_0.markAsDismissed(arg0);
    };
    obj.openLazy(lib.importer(), lib.actionSheetKey, obj);
  });
  const items = [, ];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = arg0);
  const effect = React.useEffect(() => () => {
    if (tmp2) {
      outer1_0(outer1_1[2]).hideActionSheet(tmp.actionSheetKey);
      const obj = outer1_0(outer1_1[2]);
    }
  }, items);
  return null;
};