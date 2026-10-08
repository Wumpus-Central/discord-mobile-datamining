// === Module 4811: REAWorkaroundView ===

// Module 4811 (REAWorkaroundView)
import c from "c" /* 576 */;
import ReanimatedViewNativeComponentDefault from "ReanimatedViewNativeComponent" /* 4812 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import cancelAnimation from "cancelAnimation" /* 1655 */;

require = fn;
let closure_2 = ["ref"];
const jsx = fn(21).jsx;
const ReanimatedViewNativeComponent = cancelAnimation.createAnimatedComponent(ReanimatedViewNativeComponentDefault);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ComponentWrapper(ref) {
  const cResult = c.c(7);
  if (cResult[0] !== ref) {
    const tmp6 = _objectWithoutProperties(ref.ref, closure_2);
    cResult[0] = ref.ref;
    cResult[1] = tmp6;
    cResult[2] = ref.ref;
    let tmp3 = ref;
    let tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[3] === null != tmp2.entering) {
    if (cResult[4] === tmp2) {
      if (cResult[5] === tmp3) {
        let tmp8 = cResult[6];
      }
      return tmp8;
    }
  }
  const obj2 = {};
  const merged = Object.assign(tmp2);
  obj2.hasEnteringAnimation = null != tmp2.entering;
  obj2.ref = tmp3;
  const tmp10 = <ReanimatedViewNativeComponent />;
  cResult[3] = null != tmp2.entering;
  cResult[4] = tmp2;
  cResult[5] = tmp3;
  cResult[6] = tmp10;
  tmp8 = tmp10;
}) : (function ComponentWrapper(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.hasEnteringAnimation = null != merged.entering;
  obj.ref = ref.ref;
  return <ReanimatedViewNativeComponent />;
});
tmp2.displayName = "REAWorkaroundView";
const size = fn(2);
const result = size.fileFinishedImporting("modules/reanimated/native/REAWorkaroundView.tsx");

export default tmp2;