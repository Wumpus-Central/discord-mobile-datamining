// === Module 9287: useNavigatorConfirmChangesOnBack ===

// Module 9287 (useNavigatorConfirmChangesOnBack)
import noop from "noop";
import { Keyboard } from "get ActivityIndicator";
import { NOOP } from "ME";

const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

export default function useNavigatorConfirmChangesOnBack() {
  const ref = React.useRef(null);
  const dependencyMap = React.useRef(false);
  obj = { onGoBack: ref(9288)(obj).onGoBack, ref };
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
          outer1_3.dismiss();
          const obj = { hasEdits: true, resetPending: null, onConfirm: null };
          obj[1] = outer1_4;
          obj[2] = function onConfirm() {
            outer1_1.current = true;
            preventable.goBack();
          };
          ref(ref2[4])(obj);
        }
      }
    }
  };
  return obj;
};