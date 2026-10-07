// discord_app/lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx
import ApexExperiment from "../modules/experiments/apex/index.tsx";
import size from "../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-04-ensure-received-messages-added-in-order",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;
