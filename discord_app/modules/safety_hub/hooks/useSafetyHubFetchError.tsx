// === Module 14825: useSafetyHubFetchError ===

// Module 14825 (useSafetyHubFetchError)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import SafetyHubStore from "SafetyHubStore" /* 5920 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubFetchError.tsx");

export const useSafetyHubFetchError = ReactCompilerGating.isReactCompilerEnabled() ? (function useSafetyHubFetchError() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function u() {
      return fetchError.getFetchError();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useSafetyHubFetchError() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => fetchError.getFetchError());
});