// discord_app/modules/auth/RegistrationEmailOptInCopyExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "installation",
  name: "2026-09-registration-email-opt-in-copy",
  defaultConfig: { trackingCopy: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { trackingCopy: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/auth/RegistrationEmailOptInCopyExperiment.tsx");

export default apexExperiment;
