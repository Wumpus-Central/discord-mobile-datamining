// === Module 11806: useAnimationDelayedAutoFocus ===

// Module 11806 (useAnimationDelayedAutoFocus)
import react2 from "react" /* 576 */;
import useAwaitAnimationComplete from "useAwaitAnimationComplete" /* 11807 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = useAwaitAnimationComplete;
  const awaitAnimationCompletion = obj2.useAwaitAnimationCompletion();
  let closure_3 = react.useRef(false);
  if (cResult[0] === awaitAnimationCompletion) {
    if (cResult[1] === arg0) {
      let tmp3;
      let tmp4;
      if (cResult[2] === arg1) {
        tmp3 = cResult[3];
        tmp4 = cResult[4];
      }
      const effect = react.useEffect(tmp3, tmp4);
    }
  }
  const fn = function o() {
    const tmp = closure_0 && !ref.current;
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
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = useAwaitAnimationComplete;
  const awaitAnimationCompletion = obj.useAwaitAnimationCompletion();
  let closure_3 = react.useRef(false);
  const items = [arg0, arg1, awaitAnimationCompletion];
  const effect = react.useEffect(() => {
    const tmp = closure_0 && !ref.current;
    if (tmp) {
      awaitAnimationCompletion(() => {
        closure_1_1();
      });
    }
    ref.current = true;
  }, items);
});
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export const useAnimationDelayedAutoFocus = tmp2;