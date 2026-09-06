// discord_app/modules/instant_invite/DefaultInviteExpirationExperiments.tsx
import InstantInviteUtilsDefault from "../../utils/InstantInviteUtils.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

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
    let obj = { guildId: id, location: "getDefaultInviteExpiration" };
    const currentConfig = createExperiment.getCurrentConfig(obj);
    if (currentConfig.defaultMaxAge !== value) {
      let defaultMaxAge = currentConfig.defaultMaxAge;
    } else {
      obj = { guildId: id, location: "getDefaultInviteExpiration" };
      defaultMaxAge = createExperiment.getCurrentConfig(obj).defaultMaxAge;
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
fn(4474);
let createExperiment = {
  kind: "guild",
  id: "2025-08_default_invite_expiration_guild",
  label: "Default Invite Expiration Guild",
  defaultConfig: { defaultMaxAge: 604800 },
  treatments: null,
};
let items = [
  { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } },
  { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } },
  { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } },
];
createExperiment.treatments = items;
createExperiment.createExperiment(createExperiment);
fn(4474);
createExperiment = {
  kind: "guild",
  id: "2026-05_default_invite_expiration_guild_web",
  label: "Default Invite Expiration Guild Web",
  defaultConfig: { defaultMaxAge: 604800 },
  treatments: null,
};
const items1 = [
  { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } },
  { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } },
  { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } },
];
createExperiment.treatments = items1;
createExperiment = createExperiment.createExperiment(createExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/DefaultInviteExpirationExperiments.tsx");

export const DEFAULT_MAX_AGE = value;
export const DefaultInviteExpirationGuildExperiment = createExperiment;
export const DefaultInviteExpirationGuildWebExperiment = createExperiment;
export { getDefaultInviteExpiration };
export const useDefaultInviteExpiration = function useDefaultInviteExpiration(guildId) {
  guildId = guildId.guildId;
  const _location = guildId.location;
  let tmp = guildId;
  if (guildId == null) {
    tmp = closure_4;
  }
  const experiment = createExperiment.useExperiment({ guildId: tmp, location: _location });
  let experiment1 = createExperiment.useExperiment({ guildId: tmp, location: _location });
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
  const experiment = createExperiment.useExperiment({ guildId, location: _location });
  let experiment1 = createExperiment.useExperiment({ guildId, location: _location });
  let defaultMaxAge;
  if (experiment != null) {
    defaultMaxAge = experiment.defaultMaxAge;
  }
  if (defaultMaxAge !== value) {
    experiment1 = experiment;
  }
  let obj = InstantInviteUtilsDefault;
  let defaultMaxAge1;
  if (experiment1 != null) {
    defaultMaxAge1 = experiment1.defaultMaxAge;
  }
  obj = { includeExperimentalValues: null };
  const items = [defaultMaxAge1];
  obj.includeExperimentalValues = items;
  return obj.getMaxAgeOptions(obj);
};
