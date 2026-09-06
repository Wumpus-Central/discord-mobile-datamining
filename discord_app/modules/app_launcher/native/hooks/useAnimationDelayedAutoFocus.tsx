// === Module 12169: useAnimationDelayedAutoFocus ===

// Module 12169 (useAnimationDelayedAutoFocus)
import useAwaitAnimationComplete from "useAwaitAnimationComplete" /* 12162 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export const useAnimationDelayedAutoFocus = function useAnimationDelayedAutoFocus(autoFocus, onPress) {
  closure_0 = autoFocus;
  closure_1 = onPress;
  const awaitAnimationCompletion = useAwaitAnimationComplete.useAwaitAnimationCompletion();
  noop.useRef(false);
  const items = [autoFocus, onPress, awaitAnimationCompletion];
  const effect = noop.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !ref.current;
    }
    if (tmp) {
      awaitAnimationCompletion(() => {
        onPress();
      });
    }
    ref.current = true;
  }, items);
};