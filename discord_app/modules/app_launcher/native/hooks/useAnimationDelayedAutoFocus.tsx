// === Module 12361: useAnimationDelayedAutoFocus ===

// Module 12361 (useAnimationDelayedAutoFocus)
import useAwaitAnimationComplete from "useAwaitAnimationComplete" /* 12354 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export function useAnimationDelayedAutoFocus(autoFocus, onPress) {
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
}