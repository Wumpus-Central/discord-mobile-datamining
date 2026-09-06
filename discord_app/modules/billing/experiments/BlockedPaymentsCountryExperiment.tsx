// === Module 7417: BlockedPaymentsCountryExperiment ===

// Module 7417 (BlockedPaymentsCountryExperiment)
import useGeoForUserDefault from "useGeoForUser" /* 7418 */;
import createExperiment from "module_4474" /* 4474 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", id: "2022-03_block_russian_purchases", label: "Block purchases based on country", defaultConfig: { paymentsBlocked: false }, treatments: null };
const items = [{ id: 1, label: "Payments Blocked", config: { paymentsBlocked: true } }];
obj.treatments = items;
let closure_2 = createExperiment.createExperiment(obj);
obj = { name: "2026-03-block-purchases", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj1 = { 1: null };
obj1[1] = { enabled: true };
obj.variations = obj1;
let closure_3 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx");

export const useBlockedPaymentsConfig = function useBlockedPaymentsConfig() {
  let enabled = closure_2.useExperiment({ location: "c519a9_1" }, { autoTrackExposure: false }).paymentsBlocked;
  if (!enabled) {
    enabled = closure_3.useConfig({ location: "c519a9_1" }).enabled;
  }
  if (!enabled) {
    enabled = "RU" === useGeoForUserDefault().defaultBillingCountryCode;
  }
  return enabled;
};
export const useIsPaymentsBlocked = function useIsPaymentsBlocked() {
  let enabled = closure_2.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: false }).paymentsBlocked;
  if (!enabled) {
    enabled = closure_3.useConfig({ location: "dc120b_3" }).enabled;
  }
  return enabled;
};
export const getIsPaymentsBlocked = function getIsPaymentsBlocked() {
  let enabled = closure_2.getCurrentConfig({ location: "1ee357_1" }, { autoTrackExposure: false }).paymentsBlocked;
  if (!enabled) {
    enabled = closure_3.getConfig({ location: "1ee357_1" }).enabled;
  }
  return enabled;
};