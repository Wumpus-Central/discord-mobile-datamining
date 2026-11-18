// === Module 13314: ServerThemeExperiment ===

// Module 13314 (ServerThemeExperiment)
import Constants from "Constants" /* 1072 */;
import ServerThemeApexShadowExperiment2 from "ServerThemeApexShadowExperiment" /* 13315 */;
import createExperiment from "module_5761" /* 5761 */;
import size from "module_2" /* 2 */;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const obj = { kind: "guild", id: "2026-04_server_theme", label: "Server Theme", defaultConfig: { enabled: false, inExperiment: false, gatesApex: false, rollbackEnabled: false }, treatments: null };
const items = [{ id: 0, label: "Control", config: { enabled: false, inExperiment: true, gatesApex: false, rollbackEnabled: false } }, { id: 1, label: "Enable Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false, rollbackEnabled: false } }, { id: 2, label: "Rollback UI for Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false, rollbackEnabled: true } }];
obj.treatments = items;
let experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeExperiment.tsx");

export const ServerThemeExperiment = experiment;
export function resolveServerThemeConfig(inExperiment, gatesApex, arg2) {
  let tmp = inExperiment;
  if (!inExperiment.inExperiment) {
    if (!arg2) {
      let defaultConfig = experiment.definition.defaultConfig;
    } else {
      defaultConfig = gatesApex;
    }
    tmp = defaultConfig;
  }
  return tmp;
}
export function getServerThemeEnabled(guildId, location) {
  let currentConfig = experiment.getCurrentConfig({ guildId, location }, { autoTrackExposure: false });
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
    const obj2 = { guildId, location };
    let defaultConfig = ServerThemeApexShadowExperiment.getConfig(obj2);
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
}
export function useServerThemeEnabled(guildId, location) {
  experiment = experiment.useExperiment({ guildId, location }, { autoTrackExposure: false });
  const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
  let tmp3 = guildId;
  if (guildId == null) {
    tmp3 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  let defaultConfig = ServerThemeApexShadowExperiment.useConfig({ guildId: tmp3, location });
  if (!experiment.inExperiment) {
    if (null == guildId) {
      defaultConfig = experiment.definition.defaultConfig;
    }
    experiment = defaultConfig;
  }
  return experiment.enabled;
}
export function getServerThemeRollbackEnabled(guildId, location) {
  let currentConfig = experiment.getCurrentConfig({ guildId, location }, { autoTrackExposure: false });
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
    const obj2 = { guildId, location };
    let defaultConfig = ServerThemeApexShadowExperiment.getConfig(obj2);
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
}
export function useServerThemeRollbackEnabled(guildId, useMarketablePowerupPerks) {
  experiment = experiment.useExperiment({ guildId, location: useMarketablePowerupPerks }, { autoTrackExposure: false });
  const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
  let tmp3 = guildId;
  if (guildId == null) {
    tmp3 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  let defaultConfig = ServerThemeApexShadowExperiment.useConfig({ guildId: tmp3, location: useMarketablePowerupPerks });
  if (!experiment.inExperiment) {
    if (null == guildId) {
      defaultConfig = experiment.definition.defaultConfig;
    }
    experiment = defaultConfig;
  }
  return experiment.rollbackEnabled;
}