// === Module 17405: IOSAppTransactionIdExperiment ===

// Module 17405 (IOSAppTransactionIdExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-01-ios-apptransactionid-tracking", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_identifiers/native/IOSAppTransactionIdExperiment.tsx");

export const isIOSAppTransactionIdTrackingEnabled = function isIOSAppTransactionIdTrackingEnabled(IOSUserIdentifiersManager) {
  return config.getConfig({ location: IOSUserIdentifiersManager }).enabled;
};