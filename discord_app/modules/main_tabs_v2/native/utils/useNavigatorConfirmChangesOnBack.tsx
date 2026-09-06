// discord_app/modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const Keyboard = fn(17).Keyboard;
const NOOP = fn(1074).NOOP;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

export default function useNavigatorConfirmChangesOnBack() {
  const ref = noop.useRef(null);
  dependencyMap = noop.useRef(false);
  let obj = { onGoBack: null, ref };
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
          const obj = {
            hasEdits: true,
            resetPending,
            onConfirm() {
              closure_1.current = true;
              navigation.goBack();
            },
          };
          ref(ref2[4])(obj);
        }
      }
    },
  };
  obj.onGoBack = ref(10922)(obj).onGoBack;
  return obj;
}
