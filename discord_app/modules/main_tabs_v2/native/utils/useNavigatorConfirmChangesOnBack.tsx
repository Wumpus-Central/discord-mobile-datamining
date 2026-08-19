// discord_app/modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { Keyboard } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { NOOP } from "../../../../Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

export default function useNavigatorConfirmChangesOnBack() {
  const ref = React.useRef(null);
  dependencyMap = React.useRef(false);
  { onGoBack: ref(9929)(obj).onGoBack, ref };
  obj = {
    onBeforeGoBack(navigation) {
      if (navigation.preventable) {
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
          navigation.preventDefault();
          Keyboard.dismiss();
          const obj = { hasEdits: true, resetPending: null, onConfirm: null };
          obj[1] = NOOP;
          obj[2] = function onConfirm() {
            closure_1_1.current = true;
            navigation.goBack();
          };
          ref(ref2[4])(obj);
        }
      }
    }
  };
  return obj;
};