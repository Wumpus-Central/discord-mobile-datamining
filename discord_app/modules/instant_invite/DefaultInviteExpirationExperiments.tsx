// === Module 9833: getDefaultInviteExpiration ===

// Module 9833 (getDefaultInviteExpiration)
import isGuildMemberDefault from "isGuildMember" /* 9831 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;
import createExperiment from "createExperiment" /* 4356 */;

const require = arg1;
function getDefaultInviteExpiration(arg0) {
  ({ guild, experimentConfig } = arg0);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(constants.HUB);
  }
  if (hasItem) {
    return isGuildMemberDefault.INVITE_OPTIONS_FOREVER.value;
  } else if (null != experimentConfig) {
    let defaultMaxAge2 = experimentConfig.defaultMaxAge;
    if (defaultMaxAge2 == null) {
      defaultMaxAge2 = closure_6;
    }
    return defaultMaxAge2;
  } else {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (id == null) {
      id = closure_4;
    }
    let obj = { guildId: null, location: "getDefaultInviteExpiration" };
    obj[0] = id;
    const currentConfig = experiment.getCurrentConfig(obj);
    if (currentConfig.defaultMaxAge !== closure_6) {
      let defaultMaxAge = currentConfig.defaultMaxAge;
    } else {
      obj = { guildId: null, location: "getDefaultInviteExpiration" };
      obj[0] = id;
      defaultMaxAge = experiment1.getCurrentConfig(obj).defaultMaxAge;
      if (defaultMaxAge == null) {
        defaultMaxAge = tmp6;
      }
    }
    return defaultMaxAge;
  }
}
({ EMPTY_STRING_SNOWFLAKE_ID: c4, GuildFeatures: c5 } = ME);
const value = isGuildMemberDefault.INVITE_OPTIONS_7_DAYS.value;
const items = [{ id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } }, { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } }, { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } }];
let experiment = createExperiment.createExperiment({ kind: "guild", id: "2025-08_default_invite_expiration_guild", label: "Default Invite Expiration Guild", defaultConfig: { defaultMaxAge: 604800 }, treatments: items });
const items1 = [{ id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } }, { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } }, { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } }];
let experiment1 = createExperiment.createExperiment({ kind: "guild", id: "2026-05_default_invite_expiration_guild_web", label: "Default Invite Expiration Guild Web", defaultConfig: { defaultMaxAge: 604800 }, treatments: items1 });
const result = require("set").fileFinishedImporting("modules/instant_invite/DefaultInviteExpirationExperiments.tsx");

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
  guildId(647);
  [][0] = closure_3;
  let tmp7 = null;
  if (null != guildId) {
    const obj = { guild: null, experimentConfig: null };
    obj[0] = tmp6;
    obj[1] = experiment1;
    tmp7 = getDefaultInviteExpiration(obj);
  }
  return tmp7;
};
export const useMaxAgeOptions = function useMaxAgeOptions(arg0) {
  ({ guildId, location: _location } = arg0);
  if (guildId == null) {
    guildId = closure_4;
  }
  experiment = experiment.useExperiment({ guildId, location: _location });
  experiment1 = experiment1.useExperiment({ guildId, location: _location });
  let defaultMaxAge;
  if (experiment != null) {
    defaultMaxAge = experiment.defaultMaxAge;
  }
  if (defaultMaxAge !== closure_6) {
    experiment1 = experiment;
  }
  let defaultMaxAge1;
  if (experiment1 != null) {
    defaultMaxAge1 = experiment1.defaultMaxAge;
  }
  const includeExperimentalValues = [defaultMaxAge1];
  return isGuildMemberDefault.getMaxAgeOptions({ includeExperimentalValues });
};