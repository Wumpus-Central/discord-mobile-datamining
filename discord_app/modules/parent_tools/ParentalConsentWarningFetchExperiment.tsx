// discord_app/modules/parent_tools/ParentalConsentWarningFetchExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-07-parental-consent-warning-fetch",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningFetchExperiment.tsx");

export const isParentalConsentWarningFetchEnabled = function isParentalConsentWarningFetchEnabled(
  parental_consent_warning_manager,
) {
  return config.getConfig({ location: parental_consent_warning_manager }).enabled;
};
