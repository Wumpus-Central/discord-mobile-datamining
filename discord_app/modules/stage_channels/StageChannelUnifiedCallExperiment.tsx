// === Module 11327: StageChannelUnifiedCallExperiment ===

// Module 11327 (StageChannelUnifiedCallExperiment)
import Constants from "Constants" /* 1072 */;
import ApexExperiment_mod from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let ApexExperiment = ApexExperiment_mod;
let obj = { kind: "guild", name: "2026-10-stage-unified-call", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_1 = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
const obj3 = { kind: "user", name: "2026-10-stage-unified-call-user", defaultConfig: { enabled: false }, variations: null };
const obj4 = { 1: null };
obj4[1] = { enabled: true };
obj3.variations = obj4;
let closure_2 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelUnifiedCallExperiment.tsx");

export function useIsStageUnifiedCall(stateFromStores1, VoicePanelFloatingCTA) {
  let flag;
  if (stateFromStores1 != null) {
    flag = stateFromStores1.isGuildStageVoice();
  }
  if (flag == null) {
    flag = false;
  }
  let guild_id;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  if (guild_id == null) {
    guild_id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  let enabled = closure_1.useConfig({ guildId: guild_id, location: VoicePanelFloatingCTA }).enabled;
  if (flag) {
    if (!enabled) {
      enabled = closure_2.useConfig(obj2).enabled;
    }
    flag = enabled;
  }
  return flag;
}
export function isStageUnifiedCall(channel, VoicePanelController) {
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp2 = null == guild_id || !channel.isGuildStageVoice();
  let tmp3 = !tmp2;
  if (!tmp2) {
    const obj = { guildId: channel.guild_id, location: VoicePanelController };
    let enabled = closure_1.getConfig(obj).enabled;
    if (!enabled) {
      const obj2 = { location: VoicePanelController };
      enabled = closure_2.getConfig(obj2).enabled;
    }
    tmp3 = enabled;
  }
  return tmp3;
}