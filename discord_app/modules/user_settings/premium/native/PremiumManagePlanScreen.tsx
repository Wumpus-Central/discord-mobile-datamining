// === Module 15071: PremiumManagePlanScreen ===

// Module 15071 (PremiumManagePlanScreen)
import c from "c" /* 576 */;
import PremiumManagePlanDefault from "PremiumManagePlan" /* 13621 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumManagePlanScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumPlanSelectSettingScreen() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(PremiumManagePlanDefault, {});
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function PremiumPlanSelectSettingScreen() {
  return jsx(PremiumManagePlanDefault, {});
});