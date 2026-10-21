// === Module 11758: useConjureModelSettingsDraft ===

// Module 11758 (useConjureModelSettingsDraft)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/model_settings/useConjureModelSettingsDraft.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureModelSettingsDraft(arg0, arg1) {
  closure_0 = arg1;
  const cResult = c.c(5);
  [tmp3, tmp4] = noop.useState(null);
  dependencyMap = tmp4;
  const tmp5 = _slicedToArray(noop.useState(arg0), 2);
  if (arg0 !== tmp5[0]) {
    tmp5[1](arg0);
    tmp4(null);
  }
  if (cResult[0] !== arg1) {
    const fn = function s(arg0) {
      tmp4(arg0);
      closure_0(arg0);
    };
    cResult[0] = arg1;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    if (cResult[3] === tmp8) {
      let tmp9 = cResult[4];
    }
    return tmp9;
  }
  const items = [tmp3, tmp8];
  cResult[2] = tmp3;
  cResult[3] = tmp8;
  cResult[4] = items;
  tmp9 = items;
}) : (function useConjureModelSettingsDraft(arg0, arg1) {
  closure_0 = arg1;
  [tmp2, tmp3] = noop.useState(null);
  dependencyMap = tmp3;
  const tmp4 = _slicedToArray(noop.useState(arg0), 2);
  if (arg0 !== tmp4[0]) {
    tmp4[1](arg0);
    tmp3(null);
  }
  const items = [tmp2, ];
  const items1 = [arg1];
  items[1] = noop.useCallback((arg0) => {
    tmp3(arg0);
    closure_0(arg0);
  }, items1);
  return items;
});