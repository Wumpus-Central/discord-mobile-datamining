// === Module 15802: useFocusRefOnNavigation ===

// Module 15802 (useFocusRefOnNavigation)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useFocusRefOnNavigation.tsx");

export default function useFocusRefOnNavigation(inputRef) {
  inputRef = inputRef.inputRef;
  let flag = inputRef.enabled;
  if (flag === undefined) {
    flag = true;
  }
  let isFocused;
  isFocused = inputRef(flag[1]).useIsFocused();
  const items = [flag, inputRef, isFocused];
  const effect = isFocused.useEffect(() => {
    closure_0 = inputRef(flag[2]).runAfterInteractions(() => {
      let tmp = closure_1;
      if (closure_1) {
        tmp = closure_2;
      }
      if (tmp) {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      }
    });
    return () => {
      ref.cancel();
    };
  }, items);
};