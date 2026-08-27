// discord_app/modules/vibegrations/experiments/VibegrationsGuildExperiment.tsx
import closure_2 from "../../../stores/GuildStore.tsx";
import { EMPTY_STRING_SNOWFLAKE_ID } from "../../../Constants.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";

const require = arg1;
function isVibegrationsGuildEnabled(guildId) {
  guildId = guildId.guildId;
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId: null, location: null };
    obj[0] = guildId;
    obj[1] = tmp;
    enabled = closure_4.getConfig(obj).enabled;
  }
  return enabled;
}
function hasVibegrationsGuild(arg0, arg1) {
  let obj = arg0[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp2 = isVibegrationsGuildEnabled;
    obj = { guildId: null, location: null };
    obj[0] = tmp.id;
    obj[1] = arg1;
    if (isVibegrationsGuildEnabled(obj)) {
      let tmp3 = obj;
      obj.return();
      let flag = true;
      return true;
    }
  }
  return false;
}
let closure_4 = ApexExperiment.createApexExperiment({ name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/vibegrations/experiments/VibegrationsGuildExperiment.tsx");

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
  const _require = arg0;
  const items = [closure_2, require("../../experiments/apex/index.tsx").ApexExperimentStore];
  const items1 = [arg0];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_6(Object.values(closure_1_2.getGuilds()), closure_0), items1);
};