// === Module 14810: PremiumManagePlanScreen ===

// Module 14810 (PremiumManagePlanScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PremiumManagePlanDefault from "PremiumManagePlan" /* 13321 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(PremiumManagePlanDefault, {});
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(PremiumManagePlanDefault, {}));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumManagePlanScreen.tsx");

export default tmp3;