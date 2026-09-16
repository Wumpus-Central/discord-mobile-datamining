// === Module 7527: BlockedPaymentsCountryExperiment ===

// Module 7527 (BlockedPaymentsCountryExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-block-purchases", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx");

export const useBlockedPaymentsConfig = function useBlockedPaymentsConfig() {
  let enabled = closure_2.useConfig({ location: "c519a9_1" }).enabled;
  if (!enabled) {
    enabled = "RU" === tmp;
  }
  return enabled;
};
export const useIsPaymentsBlocked = function useIsPaymentsBlocked() {
  return closure_2.useConfig({ location: "dc120b_3" }).enabled;
};
export const getIsPaymentsBlocked = function getIsPaymentsBlocked() {
  return closure_2.getConfig({ location: "1ee357_1" }).enabled;
};