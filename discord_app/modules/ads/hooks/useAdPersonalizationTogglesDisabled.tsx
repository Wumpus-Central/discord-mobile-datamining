// === Module 16176: useAdPersonalizationTogglesDisabled ===

// Module 16176 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import AdPersonalizationStore from "AdPersonalizationStore" /* 13902 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useAdPersonalizationTogglesDisabled() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AdPersonalizationStore];
    const fn = function l() {
      return togglesDisabled.isTogglesDisabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useAdPersonalizationTogglesDisabled() {
  const items = [AdPersonalizationStore];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
});