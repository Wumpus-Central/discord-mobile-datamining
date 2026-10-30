// === Module 9650: MapleSyrupExperiments ===

// Module 9650 (MapleSyrupExperiments)
import ApexExperiment_mod from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
const obj = { kind: "user", name: "2026-10-maple-syrup-1", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
const obj3 = { kind: "user", name: "2026-10-maple-syrup-2", defaultConfig: { treatment: null }, variations: null };
const obj4 = { 1: null, 2: { treatment: "A" } };
obj4[2] = { treatment: "B" };
obj3.variations = obj4;
let closure_1 = ApexExperiment.createApexExperiment(obj3);
let ApexExperiment = ApexExperiment_mod;
const obj5 = { kind: "user", name: "2026-10-maple-syrup-3", defaultConfig: { enabled: false }, variations: null };
const obj6 = { 1: null };
obj6[1] = { enabled: true };
obj5.variations = obj6;
let closure_2 = ApexExperiment.createApexExperiment(obj5);
const result = size.fileFinishedImporting("modules/premium/experiments/MapleSyrupExperiments.tsx");

export function useMapleSyrup1Enabled(SettingsOverviewScreen) {
  return closure_0.useConfig({ location: SettingsOverviewScreen }).enabled;
}
export function useMapleSyrup2Treatment(useTitle) {
  return closure_1.useConfig({ location: useTitle }).treatment;
}
export function useMapleSyrup3Enabled(SettingsOverviewScreen) {
  return closure_2.useConfig({ location: SettingsOverviewScreen }).enabled;
}