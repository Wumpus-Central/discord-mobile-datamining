// discord_app/modules/guild_mod_dash_member_safety/web/BulkBanPubSubExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-02-pubsub-bulk-ban-users",
  kind: "user",
  defaultConfig: { usePubSub: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { usePubSub: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/web/BulkBanPubSubExperiment.tsx");

export default apexExperiment;
export const useBulkBanPubSubExperimentConfig = function useBulkBanPubSubExperimentConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
