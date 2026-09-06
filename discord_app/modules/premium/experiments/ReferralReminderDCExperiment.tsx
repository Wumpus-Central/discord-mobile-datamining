// discord_app/modules/premium/experiments/ReferralReminderDCExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { name: "2026-02-referral-reminder-dc", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/ReferralReminderDCExperiment.tsx");

export const ReferralReminderDCExperiment = apexExperiment;
export const useIsReferralReminderDCExperimentEnabled = function useIsReferralReminderDCExperimentEnabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};
