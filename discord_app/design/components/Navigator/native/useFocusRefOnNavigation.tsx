// === Module 15964: useFocusRefOnNavigation ===

// Module 15964 (useFocusRefOnNavigation)
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useFocusRefOnNavigation.tsx");

export default function useFocusRefOnNavigation(inputRef) {
  inputRef = inputRef.inputRef;
  let flag = inputRef.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const isFocused = inputRef(flag[1]).useIsFocused();
  const items = [flag, inputRef, isFocused];
  const effect = isFocused.useEffect(() => {
    inputRef(flag[2]).runAfterInteractions(() => {
      let tmp = flag;
      if (flag) {
        tmp = isFocused;
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