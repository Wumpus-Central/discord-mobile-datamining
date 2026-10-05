// === Module 6469: useTypeConsolidationTextTransform ===

// Module 6469 (useTypeConsolidationTextTransform)
import react from "react" /* 576 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6470 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const style = { textTransform: "none" };
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, variant) => {
  let obj4;
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment(arg0);
  if (cResult[0] === variant) {
    let tmp3;
    if (cResult[1] === manaTypeConsolidationExperiment) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  if (manaTypeConsolidationExperiment) {
    obj4 = { variant: "experimental/body-sm/medium", style };
    const obj3 = { variant: "experimental/body-sm/medium", style };
  } else {
    obj4 = { variant, style: "r" };
  }
  cResult[0] = variant;
  cResult[1] = manaTypeConsolidationExperiment;
  cResult[2] = obj4;
  tmp3 = obj4;
}) : ((arg0, variant) => {
  let obj3;
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment(arg0)) {
    obj3 = { variant: "experimental/body-sm/medium", style };
    const obj2 = { variant: "experimental/body-sm/medium", style };
  } else {
    obj3 = { variant, style: "r" };
  }
  return obj3;
});
const fn = (AcceptGuildTemplate) => {
  let tmp;
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment(AcceptGuildTemplate)) {
    tmp = style;
  }
  return tmp;
};
const result1 = size.fileFinishedImporting("modules/design/useTypeConsolidationTextTransform.tsx");

export const useTypeConsolidationTextTransform = fn;
export const useTypeConsolidationEyebrow = tmp3;