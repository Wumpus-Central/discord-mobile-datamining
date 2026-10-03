// discord_app/modules/age_assurance/GoogleWalletExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-03-age-verification-google-wallet",
  defaultConfig: { enabled: false },
  variations: null,
};
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/age_assurance/GoogleWalletExperiment.tsx");

export const useIsGoogleWalletEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return closure_2.useConfig(tmp2).enabled;
    }
  : (location) => closure_2.useConfig({ location }).enabled;
export const isGoogleWalletEnabled = function isGoogleWalletEnabled(age_verification_methods) {
  return closure_2.getConfig({ location: age_verification_methods }).enabled;
};
