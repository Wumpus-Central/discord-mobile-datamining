// === Module 8166: apexExperiment ===

// Module 8166 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-nitro-acom-subscription", kind: "user", defaultConfig: { enabled: false }, variations: obj });
obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment({ name: "2026-03-acom-modify-dark-launch", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const obj1 = { 1: null };
obj1[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment({ name: "2026-06-otp-acom-order", kind: "user", defaultConfig: { enabled: false }, variations: obj1 });
const obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment3 = ApexExperiment.createApexExperiment({ name: "2026-06-gift-acom-order", kind: "user", defaultConfig: { enabled: false }, variations: obj2 });
const obj3 = { 1: null };
obj3[1] = { enabled: true };
const apexExperiment4 = ApexExperiment.createApexExperiment({ name: "2026-07-nitro-acom-trials", kind: "user", defaultConfig: { enabled: false }, variations: obj3 });
const obj4 = { 1: null };
obj4[1] = { enabled: true };
const apexExperiment5 = ApexExperiment.createApexExperiment({ name: "2026-07-nitro-acom-discounts", kind: "user", defaultConfig: { enabled: false }, variations: obj4 });
const result = set.fileFinishedImporting("modules/billing/native/ACOMExperiments.tsx");

export const NitroACOMSubscriptionExperiment = apexExperiment;
export const ACOMModifyDarkLaunchExperiment = apexExperiment1;
export const OTPACOMOrderExperiment = apexExperiment2;
export const GiftACOMOrderExperiment = apexExperiment3;
export const NitroACOMTrialsExperiment = apexExperiment4;
export const NitroACOMDiscountsExperiment = apexExperiment5;