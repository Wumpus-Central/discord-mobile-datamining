// discord_app/modules/channel_list_v2/native/ChannelListImplExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-10-channel-list-impl-v2",
  defaultConfig: { list: "fast", drawDistance: "viewport" },
  variations: null,
};
const obj2 = {
  1: null,
  2: { list: "legend", drawDistance: "viewport" },
  3: { list: "legend", drawDistance: "default" },
  4: { list: "legend", drawDistance: "small" },
};
obj2[4] = { list: "fast", drawDistance: "default" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListImplExperiment.tsx");

export default apexExperiment;
