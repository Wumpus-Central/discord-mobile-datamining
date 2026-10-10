// === Module 14880: ServerTagUpsellOnProfileExperiment ===

// Module 14880 (ServerTagUpsellOnProfileExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-server-tag-upsell-on-profile", kind: "user", defaultConfig: { enabled: false, ignoreSubscriptionPlatform: false }, variations: null };
let obj2 = { 1: null, 2: { enabled: true, ignoreSubscriptionPlatform: false } };
obj2[2] = { enabled: true, ignoreSubscriptionPlatform: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_tag/experiments/ServerTagUpsellOnProfileExperiment.tsx");

export default apexExperiment;
export const useServerTagUpsellOnProfileConfig = ReactCompilerGating.isReactCompilerEnabled() ? (function useServerTagUpsellOnProfileConfig(location) {
  const cResult = c.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2);
}) : (function useServerTagUpsellOnProfileConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
});