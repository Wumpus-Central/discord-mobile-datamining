// discord_app/modules/guild_tag/experiments/ServerTagUpsellOnGuildProfileExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-10-server-tag-upsell-on-guild-profile",
  kind: "user",
  defaultConfig: { enabled: false, ignoreSubscriptionPlatform: false },
  variations: null,
};
const obj2 = { 1: null, 2: { enabled: true, ignoreSubscriptionPlatform: false } };
obj2[2] = { enabled: true, ignoreSubscriptionPlatform: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_tag/experiments/ServerTagUpsellOnGuildProfileExperiment.tsx");

export default apexExperiment;
