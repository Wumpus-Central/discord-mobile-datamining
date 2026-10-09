// discord_app/modules/design/useTypeConsolidationTextTransform.tsx
import c from "../../../_runtime/00576_c.js";
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const style = { textTransform: "none" };
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
function useTypeConsolidationTextTransform(AcceptGuildTemplate) {
  let tmp;
  if (obj.useManaTypeConsolidationExperiment(AcceptGuildTemplate)) {
    tmp = closure_2;
  }
  return tmp;
}
const result1 = size.fileFinishedImporting("modules/design/useTypeConsolidationTextTransform.tsx");

export { useTypeConsolidationTextTransform };
export const useTypeConsolidationEyebrow = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTypeConsolidationEyebrow(arg0, variant) {
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
        obj4 = { variant, style: "r" };
      }
      cResult[0] = variant;
      cResult[1] = manaTypeConsolidationExperiment;
      cResult[2] = obj4;
    }
  : function useTypeConsolidationEyebrow(arg0, variant) {
      if (obj.useManaTypeConsolidationExperiment(arg0)) {
        const obj2 = { variant: "experimental/body-sm/medium", style };
        let obj3 = obj2;
      } else {
        obj3 = { variant, style: "r" };
      }
      return obj3;
    };
