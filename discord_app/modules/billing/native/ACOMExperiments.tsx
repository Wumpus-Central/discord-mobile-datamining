// === Module 8899: ACOMExperiments ===

// Module 8899 (ACOMExperiments)
import ApexExperiment_mod from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj10;
let obj12;
let obj2;
let obj4;
let obj6;
let obj8;
let ApexExperiment = ApexExperiment_mod;
const obj = { name: "2026-03-nitro-acom-subscription", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-03-acom-modify-dark-launch", kind: "user", defaultConfig: { enabled: false }, variations: obj4 };
obj4 = { 1: null };
obj4[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj5 = { name: "2026-06-otp-acom-order", kind: "user", defaultConfig: { enabled: false }, variations: obj6 };
obj6 = { 1: null };
obj6[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
ApexExperiment = ApexExperiment_mod;
const obj7 = { name: "2026-06-gift-acom-order", kind: "user", defaultConfig: { enabled: false }, variations: obj8 };
obj8 = { 1: null };
obj8[1] = { enabled: true };
const apexExperiment3 = ApexExperiment.createApexExperiment(obj7);
ApexExperiment = ApexExperiment_mod;
const obj9 = { name: "2026-07-nitro-acom-trials", kind: "user", defaultConfig: { enabled: false }, variations: obj10 };
obj10 = { 1: null };
obj10[1] = { enabled: true };
const apexExperiment4 = ApexExperiment.createApexExperiment(obj9);
ApexExperiment = ApexExperiment_mod;
const obj11 = { name: "2026-07-nitro-acom-discounts", kind: "user", defaultConfig: { enabled: false }, variations: obj12 };
obj12 = { 1: null };
obj12[1] = { enabled: true };
const apexExperiment5 = ApexExperiment.createApexExperiment(obj11);
const result = size.fileFinishedImporting("modules/billing/native/ACOMExperiments.tsx");

export const NitroACOMSubscriptionExperiment = apexExperiment;
export const ACOMModifyDarkLaunchExperiment = apexExperiment1;
export const OTPACOMOrderExperiment = apexExperiment2;
export const GiftACOMOrderExperiment = apexExperiment3;
export const NitroACOMTrialsExperiment = apexExperiment4;
export const NitroACOMDiscountsExperiment = apexExperiment5;