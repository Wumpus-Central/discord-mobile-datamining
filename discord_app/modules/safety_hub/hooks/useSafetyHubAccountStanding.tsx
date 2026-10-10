// === Module 11473: useSafetyHubAccountStanding ===

// Module 11473 (useSafetyHubAccountStanding)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import SafetyHubStore from "SafetyHubStore" /* 7536 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubAccountStanding.tsx");

export const useSafetyHubAccountStanding = ReactCompilerGating.isReactCompilerEnabled() ? (function useSafetyHubAccountStanding() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function u() {
      return accountStanding.getAccountStanding();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useSafetyHubAccountStanding() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => accountStanding.getAccountStanding());
});