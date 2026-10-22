// === Module 9766: ACOMExperiments ===

// Module 9766 (ACOMExperiments)
import ApexExperiment_mod from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
const obj = { name: "2026-03-nitro-acom-subscription", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-03-acom-modify-dark-launch", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj4 = { 1: null };
obj4[1] = { enabled: true };
obj3.variations = obj4;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
let ApexExperiment = ApexExperiment_mod;
const obj5 = { name: "2026-06-otp-acom-order", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj6 = { 1: null };
obj6[1] = { enabled: true };
obj5.variations = obj6;
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
let ApexExperiment = ApexExperiment_mod;
const obj7 = { name: "2026-06-gift-acom-order", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj8 = { 1: null };
obj8[1] = { enabled: true };
obj7.variations = obj8;
const apexExperiment3 = ApexExperiment.createApexExperiment(obj7);
let ApexExperiment = ApexExperiment_mod;
const obj9 = { name: "2026-10-ios-iap-transaction-apply", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj10 = { 1: null };
obj10[1] = { enabled: true };
obj9.variations = obj10;
const apexExperiment4 = ApexExperiment.createApexExperiment(obj9);
let ApexExperiment = ApexExperiment_mod;
const obj11 = { name: "2026-07-nitro-acom-trials", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj12 = { 1: null };
obj12[1] = { enabled: true };
obj11.variations = obj12;
const apexExperiment5 = ApexExperiment.createApexExperiment(obj11);
let ApexExperiment = ApexExperiment_mod;
const obj13 = { name: "2026-07-nitro-acom-discounts", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj14 = { 1: null };
obj14[1] = { enabled: true };
obj13.variations = obj14;
const apexExperiment6 = ApexExperiment.createApexExperiment(obj13);
const result = size.fileFinishedImporting("modules/billing/native/ACOMExperiments.tsx");

export const NitroACOMSubscriptionExperiment = apexExperiment;
export const ACOMModifyDarkLaunchExperiment = apexExperiment1;
export const OTPACOMOrderExperiment = apexExperiment2;
export const GiftACOMOrderExperiment = apexExperiment3;
export const IAPTransactionApplyExperiment = apexExperiment4;
export const NitroACOMTrialsExperiment = apexExperiment5;
export const NitroACOMDiscountsExperiment = apexExperiment6;