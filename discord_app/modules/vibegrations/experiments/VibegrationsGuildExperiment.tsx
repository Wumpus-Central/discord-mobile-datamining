// === Module 7249: VibegrationsGuildExperiment ===

// Module 7249 (VibegrationsGuildExperiment)
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
function isVibegrationsGuildEnabled(guildId) {
  guildId = guildId.guildId;
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location: tmp };
    enabled = closure_4.getConfig(obj).enabled;
  }
  return enabled;
}
function hasVibegrationsGuild(arg0, location) {
  let obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    obj = { guildId: tmp.id, location };
    if (isVibegrationsGuildEnabled(obj)) {
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
fn(1433);
const ApexExperiment = { name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_4 = ApexExperiment.createApexExperiment(ApexExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/experiments/VibegrationsGuildExperiment.tsx");

export const useIsVibegrationsGuildEnabled = function useIsVibegrationsGuildEnabled(location) {
  let guildId = location.guildId;
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  return closure_4.useConfig({ guildId, location: location.location }).enabled;
};
export { isVibegrationsGuildEnabled };
export { hasVibegrationsGuild };
export const useHasVibegrationsGuild = function useHasVibegrationsGuild(arg0) {
  _require = arg0;
  const items = [GuildStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => hasVibegrationsGuild(Object.values(GuildStore.getGuilds()), closure_0), items1);
};