// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesListImplExperiment.tsx
import ApexExperiment from "../../../../experiments/apex/index.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-06-messages-list-impl",
  defaultConfig: { list: "fastest", recycleItems: false },
  variations: null,
};
const obj2 = { 1: null, 2: { list: "flash", recycleItems: false }, 3: { list: "legend", recycleItems: false } };
obj2[3] = { list: "legend", recycleItems: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesListImplExperiment.tsx");

export default apexExperiment;
