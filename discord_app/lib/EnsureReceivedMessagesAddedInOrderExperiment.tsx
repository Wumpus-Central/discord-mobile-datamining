// discord_app/lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import ApexExperiment from "../modules/experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-ensure-received-messages-added-in-order", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;