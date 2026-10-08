// === Module 9049: OneDayFractionalNitroExperiment ===

// Module 9049 (OneDayFractionalNitroExperiment)
import c from "c" /* 576 */;
import PremiumGroupExperimentDefault from "PremiumGroupExperiment" /* 9050 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-one-day-fractional-nitro", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useOneDayFractionalNitroEnabled(location) {
  const cResult = c.c(4);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== location) {
    const obj3 = { location };
    cResult[2] = location;
    cResult[3] = obj3;
    let tmp5 = obj3;
  } else {
    tmp5 = cResult[3];
  }
  const tmp4 = PremiumGroupExperimentDefault(tmp3);
  return apexExperiment.useConfig(tmp5) && !PremiumGroupExperimentDefault(tmp3);
}) : (function useOneDayFractionalNitroEnabled(location) {
  const obj = { location };
  const obj2 = { location };
  const tmp = PremiumGroupExperimentDefault({ location });
  return apexExperiment.useConfig({ location }) && !PremiumGroupExperimentDefault({ location });
});