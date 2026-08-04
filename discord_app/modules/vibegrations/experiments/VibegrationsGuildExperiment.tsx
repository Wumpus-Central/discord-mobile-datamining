// discord_app/modules/vibegrations/experiments/VibegrationsGuildExperiment.tsx
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import ApexExperiment from "ApexExperiment";

let closure_1 = ApexExperiment.createApexExperiment({ name: "2026-07-vibegrations-guild", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/vibegrations/experiments/VibegrationsGuildExperiment.tsx");

export const useIsVibegrationsGuildEnabled = function useIsVibegrationsGuildEnabled(location) {
  let guildId = location.guildId;
  if (guildId == null) {
    guildId = EMPTY_STRING_SNOWFLAKE_ID;
  }
  return closure_1.useConfig({ guildId, location: location.location }).enabled;
};
export const isVibegrationsGuildEnabled = function isVibegrationsGuildEnabled(guildId) {
  guildId = guildId.guildId;
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId: null, location: null };
    obj[0] = guildId;
    obj[1] = tmp;
    enabled = closure_1.getConfig(obj).enabled;
  }
  return enabled;
};