// discord_app/modules/dismissible_content/native/DismissibleActionSheet.tsx
import useMountLayoutEffectDefault from "../../../hooks/useMountEffect.tsx";
import noop from "../../../../_runtime/00019_noop.js";

const result = require("obj132").fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = function DismissibleActionSheet(arg0) {
  importDefault = arg0;
  useMountLayoutEffectDefault(() => {
    lib(dependencyMap[2]);
    const obj = {};
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
      closure_1_0(closure_1_1[2]).hideActionSheet(hideSheetOnUnmount.actionSheetKey);
      const obj = closure_1_0(closure_1_1[2]);
    }
    tmp2 = null != hideSheetOnUnmount.hideSheetOnUnmount && hideSheetOnUnmount.hideSheetOnUnmount;
  }, items);
  return null;
};