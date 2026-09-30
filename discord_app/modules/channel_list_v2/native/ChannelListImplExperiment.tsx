// discord_app/modules/channel_list_v2/native/ChannelListImplExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { kind: "user", name: "2026-09-channel-list-impl", defaultConfig: { list: "fast" }, variations: null };
const obj2 = { 1: null };
obj2[1] = { list: "legend" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListImplExperiment.tsx");

export default apexExperiment;
