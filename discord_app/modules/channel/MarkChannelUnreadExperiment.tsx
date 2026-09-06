// discord_app/modules/channel/MarkChannelUnreadExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { name: "2026-08-mark-channel-unread", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/channel/MarkChannelUnreadExperiment.tsx");

export const MarkChannelUnreadExperiment = apexExperiment;
