// === Module 6469: useTypeConsolidationTextTransform ===

// Module 6469 (useTypeConsolidationTextTransform)
import c from "c" /* 576 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6470 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const style = { textTransform: "none" };
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
const fn = (AcceptGuildTemplate) => {
  let tmp;
  if (obj.useManaTypeConsolidationExperiment(AcceptGuildTemplate)) {
    tmp = closure_2;
  }
  return tmp;
};
const result1 = size.fileFinishedImporting("modules/design/useTypeConsolidationTextTransform.tsx");

export const useTypeConsolidationTextTransform = fn;
export const useTypeConsolidationEyebrow = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, variant) => {
  const cResult = c.c(3);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment(arg0);
  if (cResult[0] === variant) {
    if (cResult[1] === manaTypeConsolidationExperiment) {
      return cResult[2];
    }
  }
  if (manaTypeConsolidationExperiment) {
    const obj3 = { variant: "experimental/body-sm/medium", style };
    let obj4 = obj3;
  } else {
    obj4 = { variant, style: "a" };
  }
  cResult[0] = variant;
  cResult[1] = manaTypeConsolidationExperiment;
  cResult[2] = obj4;
}) : ((arg0, variant) => {
  if (obj.useManaTypeConsolidationExperiment(arg0)) {
    const obj2 = { variant: "experimental/body-sm/medium", style };
    let obj3 = obj2;
  } else {
    obj3 = { variant, style: "a" };
  }
  return obj3;
});