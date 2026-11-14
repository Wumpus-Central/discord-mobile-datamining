// === Module 7283: BulkRoleActionsExperiment ===

// Module 7283 (BulkRoleActionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "guild", name: "2026-10-guild-bulk-role-actions", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkRoleActionsExperiment.tsx");

export default apexExperiment;