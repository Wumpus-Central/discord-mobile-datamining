// === Module 14690: useParentalConsentWarning ===

// Module 14690 (useParentalConsentWarning)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 14691 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let warning;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ParentalConsentWarningStore];
    const fn = function o() {
      return warning.getWarning();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let warning;
  const items = [ParentalConsentWarningStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => warning.getWarning());
});
const result = size.fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = tmp2;