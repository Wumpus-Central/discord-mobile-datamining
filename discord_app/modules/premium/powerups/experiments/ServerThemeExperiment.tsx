// === Module 4779: ServerThemeExperiment ===

// Module 4779 (ServerThemeExperiment)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ServerThemeApexShadowExperiment2 from "ServerThemeApexShadowExperiment" /* 4791 */;
import createExperiment from "module_4780" /* 4780 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let items;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let obj = { kind: "guild", id: "2026-04_server_theme", label: "Server Theme", defaultConfig: { enabled: false, inExperiment: false, gatesApex: false, rollbackEnabled: false }, treatments: items };
items = [{ id: 0, label: "Control", config: { enabled: false, inExperiment: true, gatesApex: false, rollbackEnabled: false } }, { id: 1, label: "Enable Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false, rollbackEnabled: false } }, { id: 2, label: "Rollback UI for Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false, rollbackEnabled: true } }];
let experiment = createExperiment.createExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
  const obj = react;
  const cResult = obj.c(11);
  if (cResult[0] === guildId) {
    let tmp4;
    let tmp6;
    if (cResult[1] === location) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { autoTrackExposure: false };
      cResult[3] = obj2;
      tmp6 = obj2;
    } else {
      tmp6 = cResult[3];
    }
    const tmp7 = experiment;
    experiment = experiment.useExperiment(tmp4, tmp6);
    let tmp10 = guildId;
    if (guildId == null) {
      tmp10 = EMPTY_STRING_SNOWFLAKE_ID;
    }
    if (cResult[4] === location) {
      let tmp11;
      if (cResult[5] === tmp10) {
        tmp11 = cResult[6];
      }
      const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
      const config = ServerThemeApexShadowExperiment.useConfig(tmp11);
      if (cResult[7] === config) {
        if (cResult[8] === experiment) {
          let tmp14;
          if (cResult[9] === null != guildId) {
            tmp14 = cResult[10];
          }
          return tmp14.enabled;
        }
      }
      let tmp15 = experiment;
      if (!experiment.inExperiment) {
        let defaultConfig;
        if (null == guildId) {
          defaultConfig = tmp7.definition.defaultConfig;
        } else {
          defaultConfig = config;
        }
        tmp15 = defaultConfig;
      }
      cResult[7] = config;
      cResult[8] = experiment;
      cResult[9] = null != guildId;
      cResult[10] = tmp15;
      tmp14 = tmp15;
    }
    const obj3 = { guildId: tmp10, location };
    cResult[4] = location;
    cResult[5] = tmp10;
    cResult[6] = obj3;
    tmp11 = obj3;
  }
  const obj4 = { guildId, location };
  cResult[0] = guildId;
  cResult[1] = location;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : ((guildId, location) => {
  const obj = { guildId, location };
  const tmp = experiment;
  experiment = experiment.useExperiment(obj, { autoTrackExposure: false });
  const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
  let tmp3 = guildId;
  const useConfig = ServerThemeApexShadowExperiment.useConfig;
  if (guildId == null) {
    tmp3 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = { guildId: tmp3, location };
  let defaultConfig = useConfig(obj2);
  if (!experiment.inExperiment) {
    if (null == guildId) {
      defaultConfig = tmp.definition.defaultConfig;
    }
    experiment = defaultConfig;
  }
  return experiment.enabled;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, location) => {
  const obj = react;
  const cResult = obj.c(11);
  if (cResult[0] === guildId) {
    let tmp4;
    let tmp6;
    if (cResult[1] === location) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { autoTrackExposure: false };
      cResult[3] = obj2;
      tmp6 = obj2;
    } else {
      tmp6 = cResult[3];
    }
    const tmp7 = experiment;
    experiment = experiment.useExperiment(tmp4, tmp6);
    let tmp10 = guildId;
    if (guildId == null) {
      tmp10 = EMPTY_STRING_SNOWFLAKE_ID;
    }
    if (cResult[4] === location) {
      let tmp11;
      if (cResult[5] === tmp10) {
        tmp11 = cResult[6];
      }
      const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
      const config = ServerThemeApexShadowExperiment.useConfig(tmp11);
      if (cResult[7] === config) {
        if (cResult[8] === experiment) {
          let tmp14;
          if (cResult[9] === null != guildId) {
            tmp14 = cResult[10];
          }
          return tmp14.rollbackEnabled;
        }
      }
      let tmp15 = experiment;
      if (!experiment.inExperiment) {
        let defaultConfig;
        if (null == guildId) {
          defaultConfig = tmp7.definition.defaultConfig;
        } else {
          defaultConfig = config;
        }
        tmp15 = defaultConfig;
      }
      cResult[7] = config;
      cResult[8] = experiment;
      cResult[9] = null != guildId;
      cResult[10] = tmp15;
      tmp14 = tmp15;
    }
    const obj3 = { guildId: tmp10, location };
    cResult[4] = location;
    cResult[5] = tmp10;
    cResult[6] = obj3;
    tmp11 = obj3;
  }
  const obj4 = { guildId, location };
  cResult[0] = guildId;
  cResult[1] = location;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : ((guildId, location) => {
  const obj = { guildId, location };
  const tmp = experiment;
  experiment = experiment.useExperiment(obj, { autoTrackExposure: false });
  const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
  let tmp3 = guildId;
  const useConfig = ServerThemeApexShadowExperiment.useConfig;
  if (guildId == null) {
    tmp3 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = { guildId: tmp3, location };
  let defaultConfig = useConfig(obj2);
  if (!experiment.inExperiment) {
    if (null == guildId) {
      defaultConfig = tmp.definition.defaultConfig;
    }
    experiment = defaultConfig;
  }
  return experiment.rollbackEnabled;
});
function resolveServerThemeConfig(inExperiment, gatesApex, arg2) {
  let tmp = inExperiment;
  if (!inExperiment.inExperiment) {
    let defaultConfig;
    const tmp2 = arg2;
    if (!tmp2) {
      defaultConfig = experiment.definition.defaultConfig;
    } else {
      defaultConfig = gatesApex;
    }
    tmp = defaultConfig;
  }
  return tmp;
}
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeExperiment.tsx");

export const ServerThemeExperiment = experiment;
export { resolveServerThemeConfig };
export const getServerThemeEnabled = function getServerThemeEnabled(guildId, GuildPowerupsConstants) {
  let defaultConfig;
  const obj = { guildId, location: GuildPowerupsConstants };
  let currentConfig = experiment.getCurrentConfig(obj, { autoTrackExposure: false });
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
    const obj2 = { guildId, location: GuildPowerupsConstants };
    defaultConfig = ServerThemeApexShadowExperiment.getConfig(obj2);
  } else {
    defaultConfig = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment.definition.defaultConfig;
  }
  if (!currentConfig.inExperiment) {
    if (null == guildId) {
      defaultConfig = experiment.definition.defaultConfig;
    }
    currentConfig = defaultConfig;
  }
  return currentConfig.enabled;
};
export const useServerThemeEnabled = tmp3;
export const getServerThemeRollbackEnabled = function getServerThemeRollbackEnabled(guildId, GuildPowerupsManager) {
  let defaultConfig;
  const obj = { guildId, location: GuildPowerupsManager };
  let currentConfig = experiment.getCurrentConfig(obj, { autoTrackExposure: false });
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
    const obj2 = { guildId, location: GuildPowerupsManager };
    defaultConfig = ServerThemeApexShadowExperiment.getConfig(obj2);
  } else {
    defaultConfig = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment.definition.defaultConfig;
  }
  if (!currentConfig.inExperiment) {
    if (null == guildId) {
      defaultConfig = experiment.definition.defaultConfig;
    }
    currentConfig = defaultConfig;
  }
  return currentConfig.rollbackEnabled;
};
export const useServerThemeRollbackEnabled = tmp4;