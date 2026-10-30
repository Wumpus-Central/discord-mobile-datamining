// === Module 12471: useConjureModelSettingsDraft ===

// Module 12471 (useConjureModelSettingsDraft)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/model_settings/useConjureModelSettingsDraft.tsx");

export default function useConjureModelSettingsDraft(arg0, arg1) {
  closure_0 = arg1;
  [tmp2, tmp3] = noop.useState(null);
  noop = tmp3;
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
};