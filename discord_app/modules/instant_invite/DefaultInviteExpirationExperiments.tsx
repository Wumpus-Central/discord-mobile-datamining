// === Module 9279: DefaultInviteExpirationExperiments ===

// Module 9279 (DefaultInviteExpirationExperiments)
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9277 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = fn;
function getDefaultInviteExpiration(arg0) {
  ({ guild, experimentConfig } = arg0);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants.HUB);
  }
  if (hasItem) {
    return InstantInviteUtilsDefault.INVITE_OPTIONS_FOREVER.value;
  } else if (null != experimentConfig) {
    let defaultMaxAge2 = experimentConfig.defaultMaxAge;
    if (defaultMaxAge2 == null) {
      defaultMaxAge2 = value;
    }
    return defaultMaxAge2;
  } else {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (id == null) {
      id = React4;
    }
    const obj = { guildId: id, location: "getDefaultInviteExpiration" };
    const currentConfig = experiment.getCurrentConfig(obj);
    if (currentConfig.defaultMaxAge !== value) {
      let defaultMaxAge = currentConfig.defaultMaxAge;
    } else {
      const obj2 = { guildId: id, location: "getDefaultInviteExpiration" };
      defaultMaxAge = experiment1.getCurrentConfig(obj2).defaultMaxAge;
      if (defaultMaxAge == null) {
        defaultMaxAge = tmp6;
      }
    }
    return defaultMaxAge;
  }
}
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const value = InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.value;
const metroRequire = value;
let createExperiment = fn(4748);
let obj2 = { kind: "guild", id: "2025-08_default_invite_expiration_guild", label: "Default Invite Expiration Guild", defaultConfig: { defaultMaxAge: 604800 }, treatments: null };
let items = [{ id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } }, { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } }, { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } }];
obj2.treatments = items;
let experiment = createExperiment.createExperiment(obj2);
createExperiment = fn(4748);
const obj4 = { kind: "guild", id: "2026-05_default_invite_expiration_guild_web", label: "Default Invite Expiration Guild Web", defaultConfig: { defaultMaxAge: 604800 }, treatments: null };
const items1 = [{ id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } }, { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } }, { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } }];
obj4.treatments = items1;
let experiment1 = createExperiment.createExperiment(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/DefaultInviteExpirationExperiments.tsx");

export const DEFAULT_MAX_AGE = value;
export const DefaultInviteExpirationGuildExperiment = experiment;
export const DefaultInviteExpirationGuildWebExperiment = experiment1;
export { getDefaultInviteExpiration };
export const useDefaultInviteExpiration = function useDefaultInviteExpiration(guildId) {
  guildId = guildId.guildId;
  const _location = guildId.location;
  let tmp = guildId;
  if (guildId == null) {
    tmp = closure_4;
  }
  experiment = experiment.useExperiment({ guildId: tmp, location: _location });
  experiment1 = experiment1.useExperiment({ guildId: tmp, location: _location });
  let defaultMaxAge;
  if (experiment != null) {
    defaultMaxAge = experiment.defaultMaxAge;
  }
  if (defaultMaxAge !== closure_6) {
    experiment1 = experiment;
  }
  guildId(563);
  [][0] = GuildStore;
  let tmp7 = null;
  if (null != guildId) {
    const obj = { guild: tmp6, experimentConfig: experiment1 };
    tmp7 = getDefaultInviteExpiration(obj);
  }
  return tmp7;
};
export const useMaxAgeOptions = function useMaxAgeOptions(arg0) {
  ({ guildId, location: _location } = arg0);
  if (guildId == null) {
    guildId = React4;
  }
  experiment = experiment.useExperiment({ guildId, location: _location });
  experiment1 = experiment1.useExperiment({ guildId, location: _location });
  let defaultMaxAge;
  if (experiment != null) {
    defaultMaxAge = experiment.defaultMaxAge;
  }
  if (defaultMaxAge !== value) {
    experiment1 = experiment;
  }
  let defaultMaxAge1;
  if (experiment1 != null) {
    defaultMaxAge1 = experiment1.defaultMaxAge;
  }
  const obj2 = { includeExperimentalValues: null };
  const items = [defaultMaxAge1];
  obj2.includeExperimentalValues = items;
  return InstantInviteUtilsDefault.getMaxAgeOptions(obj2);
};