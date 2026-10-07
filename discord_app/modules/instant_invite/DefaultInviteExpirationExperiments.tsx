// === Module 9498: DefaultInviteExpirationExperiments ===

// Module 9498 (DefaultInviteExpirationExperiments)
import c from "c" /* 576 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9496 */;
import GuildStore from "GuildStore" /* 2074 */;

require = fn;
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
const Constants = fn(1085);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const value = InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.value;
const metroRequire = value;
let createExperiment = fn(4780);
let obj2 = { kind: "guild", id: "2025-08_default_invite_expiration_guild", label: "Default Invite Expiration Guild", defaultConfig: { defaultMaxAge: 604800 }, treatments: null };
let items = [{ id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } }, { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } }, { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } }];
obj2.treatments = items;
let experiment = createExperiment.createExperiment(obj2);
createExperiment = fn(4780);
let obj4 = { kind: "guild", id: "2026-05_default_invite_expiration_guild_web", label: "Default Invite Expiration Guild Web", defaultConfig: { defaultMaxAge: 604800 }, treatments: null };
const items1 = [{ id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } }, { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } }, { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } }];
obj4.treatments = items1;
let experiment1 = createExperiment.createExperiment(obj4);
fn(558);
const ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(12);
  guildId = guildId.guildId;
  const _location = guildId.location;
  let tmp4 = guildId;
  if (guildId == null) {
    tmp4 = closure_4;
  }
  if (cResult[0] === _location) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
    }
    experiment = experiment.useExperiment(tmp5);
    if (cResult[3] === _location) {
      if (cResult[4] === tmp4) {
        let tmp8 = cResult[5];
      }
      experiment1 = experiment1.useExperiment(tmp8);
      let defaultMaxAge;
      if (experiment != null) {
        defaultMaxAge = experiment.defaultMaxAge;
      }
      if (defaultMaxAge !== closure_6) {
        experiment1 = experiment;
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[6] = items;
        let tmp14 = items;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] !== guildId) {
        class M {
          constructor() {
            return closure_3.getGuild(guildId);
          }
        }
        cResult[7] = guildId;
        cResult[8] = M;
      } else {
        class M {
          constructor() {
            return closure_3.getGuild(guildId);
          }
        }
      }
      const stateFromStores = tmp(573).useStateFromStores(tmp14, M);
      if (null == guildId) {
        class M {
          constructor() {
            return closure_3.getGuild(guildId);
          }
        }
      } else {
        class M {
          constructor() {
            return closure_3.getGuild(guildId);
          }
        }
        const obj2 = { guild: stateFromStores, experimentConfig: experiment1 };
        const tmp21 = getDefaultInviteExpiration(obj2);
        cResult[9] = experiment1;
        cResult[10] = stateFromStores;
        cResult[11] = tmp21;
      }
      const tmpResult = tmp(573);
    }
    const obj3 = { guildId: tmp4, location: _location };
    cResult[3] = _location;
    cResult[4] = tmp4;
    cResult[5] = obj3;
    tmp8 = obj3;
  }
  const obj4 = { guildId: tmp4, location: _location };
  cResult[0] = _location;
  cResult[1] = tmp4;
  cResult[2] = obj4;
  tmp5 = obj4;
  const obj = guildId(576);
  tmp = guildId;
}) : ((guildId) => {
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
  guildId(573);
  [][0] = GuildStore;
  let tmp7 = null;
  if (null != guildId) {
    const obj = { guild: tmp6, experimentConfig: experiment1 };
    tmp7 = getDefaultInviteExpiration(obj);
  }
  return tmp7;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/DefaultInviteExpirationExperiments.tsx");

export const DEFAULT_MAX_AGE = value;
export const DefaultInviteExpirationGuildExperiment = experiment;
export const DefaultInviteExpirationGuildWebExperiment = experiment1;
export { getDefaultInviteExpiration };
export const useDefaultInviteExpiration = tmp5;
export const useMaxAgeOptions = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ guildId, location: _location } = arg0);
  if (guildId == null) {
    guildId = React4;
  }
  if (cResult[0] === _location) {
    if (cResult[1] === guildId) {
      let tmp3 = cResult[2];
    }
    experiment = experiment.useExperiment(tmp3);
    if (cResult[3] === _location) {
      if (cResult[4] === guildId) {
        let tmp6 = cResult[5];
      }
      experiment1 = experiment1.useExperiment(tmp6);
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
      if (cResult[6] !== defaultMaxAge1) {
        let defaultMaxAge2;
        if (experiment1 != null) {
          defaultMaxAge2 = experiment1.defaultMaxAge;
        }
        const obj2 = { includeExperimentalValues: null };
        const items = [defaultMaxAge2];
        obj2.includeExperimentalValues = items;
        const maxAgeOptions = InstantInviteUtilsDefault.getMaxAgeOptions(obj2);
        let defaultMaxAge3;
        if (experiment1 != null) {
          defaultMaxAge3 = experiment1.defaultMaxAge;
        }
        cResult[6] = defaultMaxAge3;
        cResult[7] = maxAgeOptions;
        let tmp12 = maxAgeOptions;
      } else {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
    const obj3 = { guildId, location: _location };
    cResult[3] = _location;
    cResult[4] = guildId;
    cResult[5] = obj3;
    tmp6 = obj3;
  }
  const obj5 = { guildId, location: _location };
  cResult[0] = _location;
  cResult[1] = guildId;
  cResult[2] = obj5;
  tmp3 = obj5;
}) : ((arg0) => {
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
});