// === Module 11296: PinotExperiment ===

// Module 11296 (PinotExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;

const require = globalThis.__r;

const require = fn;
let ApexExperiment = fn(1448);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-pinot-admin", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1448);
const apexExperiment1 = ApexExperiment.createApexExperiment({ name: "2026-10-pinot-member", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1448);
const apexExperiment2 = ApexExperiment.createApexExperiment({ name: "2026-10-pinot-member-notice", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/PinotExperiment.tsx");

export const PinotAdminExperiment = apexExperiment;
export const PinotMemberExperiment = apexExperiment1;
export const PinotMemberNoticeExperiment = apexExperiment2;
export function useIsPinotAdminEnabled(guild_id, location) {
  let str = guild_id;
  if (guild_id == null) {
    str = "";
  }
  return null != guild_id && apexExperiment.useConfig({ guildId: str, location }).enabled;
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
export function useIsPinotMemberEnabled(mobile_user_settings_data_and_privacy) {
  return apexExperiment1.useConfig({ location: mobile_user_settings_data_and_privacy }).enabled;
}
export function isPinotMemberEnabled(location, arg1) {
  return apexExperiment1.getConfig({ location }, arg1).enabled;
}
export function useIsPinotMemberEnabledWithoutExposure(_location) {
  _require = _location;
  const items = [ApexExperimentStore];
  const items1 = [_location];
  return require("initialize").useStateFromStores(items, () => apexExperiment1.getConfig({ location: _location }, { autoTrackExposure: false }).enabled, items1);
}