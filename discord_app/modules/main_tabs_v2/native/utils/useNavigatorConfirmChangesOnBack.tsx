// discord_app/modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";
import { Keyboard } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { NOOP } from "../../../../Constants.tsx";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

export default function useNavigatorConfirmChangesOnBack() {
  const ref = React.useRef(null);
  dependencyMap = React.useRef(false);
  obj = { onGoBack: ref(10580)(obj).onGoBack, ref };
  obj = {
    onBeforeGoBack(preventable) {
      if (preventable.preventable) {
        let current = ref2.current;
        if (!current) {
          const current2 = ref.current;
          let hasUnsavedChangesResult;
          if (current2 != null) {
            hasUnsavedChangesResult = current2.hasUnsavedChanges();
          }
          current = true !== hasUnsavedChangesResult;
        }
        if (!current) {
          preventable.preventDefault();
          closure_1_3.dismiss();
          const obj = { hasEdits: true, resetPending: null, onConfirm: null };
          obj[1] = closure_1_4;
          obj[2] = function onConfirm() {
            closure_1_1.current = true;
            preventable.goBack();
          };
          ref(ref2[4])(obj);
        }
      }
    }
  };
  return obj;
};