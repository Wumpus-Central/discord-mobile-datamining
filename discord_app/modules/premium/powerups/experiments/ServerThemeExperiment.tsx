// === Module 4489: ServerThemeExperiment ===

// Module 4489 (ServerThemeExperiment)
import Constants from "Constants" /* 1074 */;
import ServerThemeApexShadowExperiment2 from "ServerThemeApexShadowExperiment" /* 4490 */;
import createExperiment from "module_4474" /* 4474 */;
import size from "module_2" /* 2 */;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let obj = { kind: "guild", id: "2026-04_server_theme", label: "Server Theme", defaultConfig: { enabled: false, inExperiment: false, gatesApex: false }, treatments: null };
const items = [{ id: 0, label: "Control", config: { enabled: false, inExperiment: true, gatesApex: false } }, { id: 1, label: "Enable Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false } }];
obj.treatments = items;
let experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeExperiment.tsx");

export const ServerThemeExperiment = experiment;
export const getServerThemeEnabled = function getServerThemeEnabled(guildId, GuildPowerupsConstants) {
  let obj = { guildId, location: GuildPowerupsConstants };
  const currentConfig = experiment.getCurrentConfig(obj, { autoTrackExposure: false });
  let enabled = currentConfig.enabled;
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
    obj = { guildId, location: GuildPowerupsConstants };
    let config = ServerThemeApexShadowExperiment.getConfig(obj);
  } else {
    config = { enabled: false, gatesApex: false };
  }
  if (!currentConfig.inExperiment) {
    enabled = config.gatesApex && tmp4;
    const tmp5 = config.gatesApex && tmp4;
  }
  return enabled;
};
export const useServerThemeEnabled = function useServerThemeEnabled(guildId, useGuildPowerupNewPerkMarketingVersion) {
  let obj = { guildId, location: useGuildPowerupNewPerkMarketingVersion };
  experiment = experiment.useExperiment(obj, { autoTrackExposure: false });
  let enabled = experiment.enabled;
  const ServerThemeApexShadowExperiment = ServerThemeApexShadowExperiment2.ServerThemeApexShadowExperiment;
  let tmp2 = guildId;
  if (guildId == null) {
    tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  obj = { guildId: tmp2, location: useGuildPowerupNewPerkMarketingVersion };
  const config = ServerThemeApexShadowExperiment.useConfig(obj);
  if (!experiment.inExperiment) {
    let tmp6 = null != guildId;
    if (tmp6) {
      tmp6 = tmp5 && tmp4;
      const tmp7 = tmp5 && tmp4;
    }
    enabled = tmp6;
  }
  return enabled;
};