// discord_app/modules/instant_invite/DefaultInviteExpirationExperiments.tsx
import react from "../../../_runtime/00576_react.js";
import InstantInviteUtilsDefault from "../../utils/InstantInviteUtils.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import Constants from "../../Constants.tsx";
import createExperiment_mod from "../experiments/index.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let items;
let items1;
function getDefaultInviteExpiration(arg0) {
  let experimentConfig;
  let guild;
  ({ guild, experimentConfig } = arg0);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(hasOwnProperty.HUB);
  }
  if (hasItem) {
    return InstantInviteUtilsDefault.INVITE_OPTIONS_FOREVER.value;
  } else if (null != experimentConfig) {
    let defaultMaxAge2 = experimentConfig.defaultMaxAge;
    if (defaultMaxAge2 == null) {
      defaultMaxAge2 = metroRequire;
    }
    return defaultMaxAge2;
  } else {
    let defaultMaxAge;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (id == null) {
      id = React3;
    }
    const obj = { guildId: id, location: "getDefaultInviteExpiration" };
    const currentConfig = experiment.getCurrentConfig(obj);
    if (currentConfig.defaultMaxAge !== metroRequire) {
      defaultMaxAge = currentConfig.defaultMaxAge;
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
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const value = InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.value;
const metroRequire = value;
let createExperiment = createExperiment_mod;
let obj = {
  kind: "guild",
  id: "2025-08_default_invite_expiration_guild",
  label: "Default Invite Expiration Guild",
  defaultConfig: { defaultMaxAge: 604800 },
  treatments: items,
};
items = [
  { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } },
  { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } },
  { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } },
];
let experiment = createExperiment.createExperiment(obj);
createExperiment = createExperiment_mod;
let obj2 = {
  kind: "guild",
  id: "2026-05_default_invite_expiration_guild_web",
  label: "Default Invite Expiration Guild Web",
  defaultConfig: { defaultMaxAge: 604800 },
  treatments: items1,
};
items1 = [
  { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } },
  { id: 2, label: "30 days", config: { defaultMaxAge: 2592000 } },
  { id: 3, label: "60 days", config: { defaultMaxAge: 5184000 } },
];
let experiment1 = createExperiment.createExperiment(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const obj = guildId(576);
      const cResult = obj.c(12);
      const tmp = guildId;
      guildId = guildId.guildId;
      const _location = guildId.location;
      let tmp4 = guildId;
      if (guildId == null) {
        tmp4 = closure_4;
      }
      if (cResult[0] === _location) {
        let tmp5;
        if (cResult[1] === tmp4) {
          tmp5 = cResult[2];
        }
        experiment = experiment.useExperiment(tmp5);
        if (cResult[3] === _location) {
          let tmp8;
          let tmp14;
          if (cResult[4] === tmp4) {
            tmp8 = cResult[5];
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
            tmp14 = items;
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
          const tmpResult = tmp(573);
          const stateFromStores = tmpResult.useStateFromStores(tmp14, M);
          if (null != guildId) {
            class M {
              constructor() {
                return closure_3.getGuild(guildId);
              }
            }
            const obj2 = { guild: stateFromStores, experimentConfig: experiment1 };
            cResult[9] = experiment1;
            cResult[10] = stateFromStores;
            cResult[11] = getDefaultInviteExpiration(obj2);
            const tmp21 = getDefaultInviteExpiration(obj2);
          }
          return null;
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
    }
  : (guildId) => {
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
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _location;
      let guildId;
      let items;
      const obj = react;
      const cResult = obj.c(8);
      ({ guildId, location: _location } = arg0);
      if (guildId == null) {
        guildId = React3;
      }
      if (cResult[0] === _location) {
        let tmp3;
        if (cResult[1] === guildId) {
          tmp3 = cResult[2];
        }
        experiment = experiment.useExperiment(tmp3);
        if (cResult[3] === _location) {
          let tmp6;
          let tmp13;
          if (cResult[4] === guildId) {
            tmp6 = cResult[5];
          }
          experiment1 = experiment1.useExperiment(tmp6);
          let defaultMaxAge;
          if (experiment != null) {
            defaultMaxAge = experiment.defaultMaxAge;
          }
          if (defaultMaxAge !== metroRequire) {
            experiment1 = experiment;
          }
          let defaultMaxAge1;
          const tmp11 = cResult[6];
          if (experiment1 != null) {
            defaultMaxAge1 = experiment1.defaultMaxAge;
          }
          if (tmp11 !== defaultMaxAge1) {
            let defaultMaxAge2;
            const getMaxAgeOptions = InstantInviteUtilsDefault.getMaxAgeOptions;
            InstantInviteUtilsDefault;
            if (experiment1 != null) {
              defaultMaxAge2 = experiment1.defaultMaxAge;
            }
            const obj2 = { includeExperimentalValues: items };
            items = [defaultMaxAge2];
            const maxAgeOptions = getMaxAgeOptions(obj2);
            let defaultMaxAge3;
            if (experiment1 != null) {
              defaultMaxAge3 = experiment1.defaultMaxAge;
            }
            cResult[6] = defaultMaxAge3;
            cResult[7] = maxAgeOptions;
            tmp13 = maxAgeOptions;
          } else {
            tmp13 = cResult[7];
          }
          return tmp13;
        }
        const obj3 = { guildId, location: _location };
        cResult[3] = _location;
        cResult[4] = guildId;
        cResult[5] = obj3;
        tmp6 = obj3;
      }
      const obj4 = { guildId, location: _location };
      cResult[0] = _location;
      cResult[1] = guildId;
      cResult[2] = obj4;
      tmp3 = obj4;
    }
  : (arg0) => {
      let _location;
      let guildId;
      let items;
      ({ guildId, location: _location } = arg0);
      if (guildId == null) {
        guildId = React3;
      }
      experiment = experiment.useExperiment({ guildId, location: _location });
      experiment1 = experiment1.useExperiment({ guildId, location: _location });
      let defaultMaxAge;
      if (experiment != null) {
        defaultMaxAge = experiment.defaultMaxAge;
      }
      if (defaultMaxAge !== metroRequire) {
        experiment1 = experiment;
      }
      let defaultMaxAge1;
      const getMaxAgeOptions = InstantInviteUtilsDefault.getMaxAgeOptions;
      InstantInviteUtilsDefault;
      if (experiment1 != null) {
        defaultMaxAge1 = experiment1.defaultMaxAge;
      }
      const obj = { includeExperimentalValues: items };
      items = [defaultMaxAge1];
      return getMaxAgeOptions(obj);
    };
const result = size.fileFinishedImporting("modules/instant_invite/DefaultInviteExpirationExperiments.tsx");

export const DEFAULT_MAX_AGE = value;
export const DefaultInviteExpirationGuildExperiment = experiment;
export const DefaultInviteExpirationGuildWebExperiment = experiment1;
export { getDefaultInviteExpiration };
export const useDefaultInviteExpiration = tmp5;
export const useMaxAgeOptions = tmp6;
