// discord_app/modules/guild_tag/experiments/ServerTagUpsellOnProfileExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-10-server-tag-upsell-on-profile",
  kind: "user",
  defaultConfig: { enabled: false, ignoreSubscriptionPlatform: false },
  variations: null,
};
let obj2 = { 1: null, 2: { enabled: true, ignoreSubscriptionPlatform: false } };
obj2[2] = { enabled: true, ignoreSubscriptionPlatform: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_tag/experiments/ServerTagUpsellOnProfileExperiment.tsx");

export default apexExperiment;
export const useServerTagUpsellOnProfileConfig = ReactCompilerGating.isReactCompilerEnabled()
  ? function useServerTagUpsellOnProfileConfig(location) {
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
    }
  : function useServerTagUpsellOnProfileConfig(location) {
      return apexExperiment.useConfig({ location: location.location });
    };
