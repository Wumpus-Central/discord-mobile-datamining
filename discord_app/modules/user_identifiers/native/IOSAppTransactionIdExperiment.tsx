// discord_app/modules/user_identifiers/native/IOSAppTransactionIdExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-01-ios-apptransactionid-tracking",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_identifiers/native/IOSAppTransactionIdExperiment.tsx");

export const isIOSAppTransactionIdTrackingEnabled = function isIOSAppTransactionIdTrackingEnabled(
  IOSUserIdentifiersManager,
) {
  return config.getConfig({ location: IOSUserIdentifiersManager }).enabled;
};
