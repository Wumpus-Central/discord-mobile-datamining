// discord_app/modules/guild_mod_dash_member_safety/BulkRoleActionsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "guild",
  name: "2026-10-guild-bulk-role-actions",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkRoleActionsExperiment.tsx");

export default apexExperiment;
