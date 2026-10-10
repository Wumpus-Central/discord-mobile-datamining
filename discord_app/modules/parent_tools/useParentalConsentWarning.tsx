// === Module 15122: useParentalConsentWarning ===

// Module 15122 (useParentalConsentWarning)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 15123 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = ReactCompilerGating.isReactCompilerEnabled() ? (function useParentalConsentWarning() {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useParentalConsentWarning() {
  const items = [ParentalConsentWarningStore];
  return initialize.useStateFromStores(items, () => warning.getWarning());
});