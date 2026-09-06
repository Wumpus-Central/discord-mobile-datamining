// discord_app/lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx
import ApexExperiment from "../modules/experiments/apex/index.tsx";
import size from "../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-04-ensure-received-messages-added-in-order",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;
