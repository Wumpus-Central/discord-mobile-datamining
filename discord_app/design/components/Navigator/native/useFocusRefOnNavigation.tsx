// discord_app/design/components/Navigator/native/useFocusRefOnNavigation.tsx
import noop from "noop";

const require = arg1;
const result = require("runAfterInteractions").fileFinishedImporting("design/components/Navigator/native/useFocusRefOnNavigation.tsx");

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
    let closure_0 = inputRef(flag[2]).runAfterInteractions(() => {
      let tmp = closure_1;
      if (closure_1) {
        tmp = noop;
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