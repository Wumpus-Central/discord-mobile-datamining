// === Module 16049: useShallowArrayMemo ===

// Module 16049 (useShallowArrayMemo)
import shallowEqual from "shallowEqual" /* 568 */;
import react from "react" /* 576 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 16050 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((current) => {
  let tmp4;
  let closure_0 = current;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== current) {
    const fn = function l() {
      return closure_0;
    };
    cResult[0] = current;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = useMemoWithEqualityFunctionDefault;
  return tmp5(tmp4, current, shallowEqual.areArraysShallowEqual);
}) : ((current) => {
  let closure_0 = current;
  const tmp = useMemoWithEqualityFunctionDefault;
  return tmp(() => closure_0, current, shallowEqual.areArraysShallowEqual);
});
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default tmp2;