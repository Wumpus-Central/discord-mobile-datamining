// === Module 11873: useAnimationDelayedAutoFocus ===

// Module 11873 (useAnimationDelayedAutoFocus)
import c from "c" /* 576 */;
import useAwaitAnimationComplete from "useAwaitAnimationComplete" /* 11874 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export const useAnimationDelayedAutoFocus = ReactCompilerGating.isReactCompilerEnabled() ? (function useAnimationDelayedAutoFocus(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const cResult = c.c(5);
  const awaitAnimationCompletion = useAwaitAnimationComplete.useAwaitAnimationCompletion();
  noop.useRef(false);
  if (cResult[0] === awaitAnimationCompletion) {
    if (cResult[1] === arg0) {
      if (cResult[2] === arg1) {
        let tmp3 = cResult[3];
        let tmp4 = cResult[4];
      }
      const effect = noop.useEffect(tmp3, tmp4);
    }
  }
  const fn = function o() {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !ref.current;
    }
    if (tmp) {
      awaitAnimationCompletion(() => {
        closure_1_1();
      });
    }
    ref.current = true;
  };
  const items = [arg0, arg1, awaitAnimationCompletion];
  cResult[0] = awaitAnimationCompletion;
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items;
  tmp4 = items;
  tmp3 = fn;
}) : (function useAnimationDelayedAutoFocus(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const awaitAnimationCompletion = useAwaitAnimationComplete.useAwaitAnimationCompletion();
  noop.useRef(false);
  const items = [arg0, arg1, awaitAnimationCompletion];
  const effect = noop.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !ref.current;
    }
    if (tmp) {
      awaitAnimationCompletion(() => {
        closure_1_1();
      });
    }
    ref.current = true;
  }, items);
});