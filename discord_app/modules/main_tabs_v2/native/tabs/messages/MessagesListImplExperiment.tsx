// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesListImplExperiment.tsx
import ApexExperiment_mod from "../../../../experiments/apex/index.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const obj = { list: "fastest", recycleItems: false };
let ApexExperiment = ApexExperiment_mod;
const obj2 = { kind: "user", name: "2026-06-messages-list-impl", defaultConfig: obj, variations: null };
const obj3 = { 1: null, 2: { list: "flash", recycleItems: false }, 3: { list: "legend", recycleItems: false } };
obj3[3] = { list: "legend", recycleItems: true };
obj2.variations = obj3;
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
let ApexExperiment = ApexExperiment_mod;
const obj4 = { kind: "user", name: "2026-10-android-messages-list-impl", defaultConfig: obj, variations: null };
const obj5 = { 1: null };
obj5[1] = { list: "legend", recycleItems: true };
obj4.variations = obj5;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj4);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesListImplExperiment.tsx");

export default apexExperiment;
export const AndroidMessagesListImplExperiment = apexExperiment1;
