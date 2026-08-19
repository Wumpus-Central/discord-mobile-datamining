// === Module 11347: useAnimationDelayedAutoFocus ===

// Module 11347 (useAnimationDelayedAutoFocus)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export const useAnimationDelayedAutoFocus = function useAnimationDelayedAutoFocus(autoFocus, onPress) {
  const _require = autoFocus;
  dependencyMap = onPress;
  const awaitAnimationCompletion = _require(11340).useAwaitAnimationCompletion();
  closure_3 = awaitAnimationCompletion.useRef(false);
  const items = [autoFocus, onPress, awaitAnimationCompletion];
  const effect = awaitAnimationCompletion.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !ref.current;
    }
    if (tmp) {
      awaitAnimationCompletion(() => {
        callback();
      });
    }
    ref.current = true;
  }, items);
};