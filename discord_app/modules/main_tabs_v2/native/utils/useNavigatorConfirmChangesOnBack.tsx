// === Module 9603: useNavigatorConfirmChangesOnBack ===

// Module 9603 (useNavigatorConfirmChangesOnBack)
import useNavigatorBackHandlerDefault from "useNavigatorBackHandler" /* 9605 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Keyboard = fn(17).Keyboard;
const NOOP = fn(1085).NOOP;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useNavigatorConfirmChangesOnBack() {
  const cResult = ref(576).c(4);
  ref = noop.useRef(null);
  importDefault = noop.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onBeforeGoBack(preventable) {
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
          Keyboard.dismiss();
          const obj = {
            hasEdits: true,
            resetPending,
            onConfirm() {
                  closure_1.current = true;
                  preventable.goBack();
                }
          };
          ref2(dependencyMap[5])(obj);
        }
      }
    }
    cResult[0] = onBeforeGoBack;
    let first = onBeforeGoBack;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { onBeforeGoBack: first };
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const onGoBack = useNavigatorBackHandlerDefault(tmp5).onGoBack;
  if (cResult[2] !== onGoBack) {
    const obj3 = { onGoBack, ref };
    cResult[2] = onGoBack;
    cResult[3] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (function useNavigatorConfirmChangesOnBack() {
  const ref = noop.useRef(null);
  importDefault = noop.useRef(false);
  let obj = {
    onGoBack: useNavigatorBackHandlerDefault({
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
            Keyboard.dismiss();
            const obj = {
              hasEdits: true,
              resetPending,
              onConfirm() {
                    closure_1.current = true;
                    preventable.goBack();
                  }
            };
            ref2(dependencyMap[5])(obj);
          }
        }
      }
    }).onGoBack,
    ref
  };
  return obj;
});