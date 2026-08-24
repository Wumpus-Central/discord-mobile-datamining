// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesListImplExperiment.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ApexExperiment from "../../../../experiments/apex/index.tsx";

const obj = { 1: null, 2: { list: "flash", recycleItems: false }, 3: { list: "legend", recycleItems: false } };
obj[3] = { list: "legend", recycleItems: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-messages-list-impl", defaultConfig: { list: "fastest", recycleItems: false }, variations: obj });
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesListImplExperiment.tsx");

export default apexExperiment;