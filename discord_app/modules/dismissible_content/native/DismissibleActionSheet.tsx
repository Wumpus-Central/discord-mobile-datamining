// discord_app/modules/dismissible_content/native/DismissibleActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useMountEffectDefault from "../../../hooks/useMountEffect.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/native/DismissibleActionSheet.tsx");

export const DismissibleActionSheet = function DismissibleActionSheet(arg0) {
  importDefault = arg0;
  useMountEffectDefault(() => {
    const obj = {};
    const merged = Object.assign(closure_0);
    obj.markAsDismissed = function markAsDismissed(arg0) {
      closure_0(4527).hideActionSheet(closure_1_0.actionSheetKey);
      closure_1_0.markAsDismissed(arg0);
    };
    obj.openLazy(closure_0.importer(), closure_0.actionSheetKey, obj);
  });
  const items = [,];
  ({ actionSheetKey: arr[0], hideSheetOnUnmount: arr[1] } = arg0);
  const effect = noop.useEffect(
    () => () => {
      if (tmp2) {
        closure_0(4527).hideActionSheet(tmp.actionSheetKey);
        const obj = closure_0(4527);
      }
    },
    items,
  );
  return null;
};
