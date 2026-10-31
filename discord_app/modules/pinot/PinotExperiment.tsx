// === Module 9055: PinotExperiment ===

// Module 9055 (PinotExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;

const require = globalThis.__r;

const require = fn;
let ApexExperiment = fn(1447);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-pinot-admin", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1447);
const apexExperiment1 = ApexExperiment.createApexExperiment({ name: "2026-10-pinot-member", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1447);
const apexExperiment2 = ApexExperiment.createApexExperiment({ name: "2026-10-pinot-member-notice", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1447);
const apexExperiment3 = ApexExperiment.createApexExperiment({ name: "2026-10-pinot-channel-discoverable", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/PinotExperiment.tsx");

export const PinotAdminExperiment = apexExperiment;
export const PinotMemberExperiment = apexExperiment1;
export const PinotMemberNoticeExperiment = apexExperiment2;
export const PinotChannelDiscoverableExperiment = apexExperiment3;
export function useIsPinotAdminEnabled(guild_id, create_guild_channel) {
  let str = guild_id;
  if (guild_id == null) {
    str = "";
  }
  return null != guild_id && apexExperiment.useConfig({ guildId: str, location: create_guild_channel }).enabled;
}
export function isPinotAdminEnabled(guildId, location) {
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
export function useIsPinotMemberNoticeEnabled(guild_id, location) {
  let str = guild_id;
  if (guild_id == null) {
    str = "";
  }
  return null != guild_id && apexExperiment2.useConfig({ guildId: str, location }).enabled;
}
export function useIsPinotChannelDiscoverableEnabled(guildId, create_guild_channel) {
  let str = guildId;
  if (guildId == null) {
    str = "";
  }
  return null != guildId && apexExperiment3.useConfig({ guildId: str, location: create_guild_channel }).enabled;
}
export function useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy) {
  return apexExperiment1.useConfig({ location: mobile_user_settings_data_and_privacy }).enabled;
}
export function isPinotMemberEnabled(location, arg1) {
  return apexExperiment1.getConfig({ location }, arg1).enabled;
}
export function useIsPinotMemberEnabledWithoutExposure(mobile_member_coachmark) {
  _require = mobile_member_coachmark;
  const items = [ApexExperimentStore];
  const items1 = [mobile_member_coachmark];
  return require("initialize").useStateFromStores(items, () => apexExperiment1.getConfig({ location: _location }, { autoTrackExposure: false }).enabled, items1);
}