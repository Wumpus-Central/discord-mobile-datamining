// === Module 7417: useBlockedPaymentsConfig ===

// Module 7417 (useBlockedPaymentsConfig)
import set from "set" /* 2 */;
import useGeoForUserDefault from "useGeoForUser" /* 7418 */;
import createExperiment from "createExperiment" /* 4474 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const items = [{ id: 1, label: "Payments Blocked", config: { paymentsBlocked: true } }];
let closure_2 = createExperiment.createExperiment({ kind: "user", id: "2022-03_block_russian_purchases", label: "Block purchases based on country", defaultConfig: { paymentsBlocked: false }, treatments: items });
const obj = { 1: null };
obj[1] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment({ name: "2026-03-block-purchases", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx");

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