// discord_app/modules/conjure/experiments/ConjureUserExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-07-vibegrations-user",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureUserExperiment.tsx");

export function useIsConjureUserEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}
export function isConjureUserEnabled(location, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let autoTrackExposure = obj.autoTrackExposure;
  if (autoTrackExposure === undefined) {
    autoTrackExposure = true;
  }
  return closure_0.getConfig({ location: location.location }, { autoTrackExposure }).enabled;
}
