// discord_app/modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx
import closure_2 from "noop" /* 19 */;
import { AwaitAnimationContext } from "useAwaitAnimationComplete.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export const useAnimationDelayedAutoFocus = function useAnimationDelayedAutoFocus(autoFocus, onPress) {
  const _require = autoFocus;
  dependencyMap = onPress;
  const awaitAnimationCompletion = _AwaitAnimationContext.useAwaitAnimationCompletion();
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