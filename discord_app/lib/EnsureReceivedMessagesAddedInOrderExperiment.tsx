// discord_app/lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx
import ApexExperiment from "../modules/experiments/apex/index.tsx";
import size from "../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  name: "2026-04-ensure-received-messages-added-in-order",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;
