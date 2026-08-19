// discord_app/modules/premium/powerups/experiments/ServerThemeExperiment.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import apexExperiment from "ServerThemeApexShadowExperiment.tsx";
import createExperiment from "../../../experiments/index.tsx";

const EMPTY_STRING_SNOWFLAKE_ID = ME.EMPTY_STRING_SNOWFLAKE_ID;
const items = [{ id: 0, label: "Control", config: { enabled: false, inExperiment: true, gatesApex: false } }, { id: 1, label: "Enable Server Theme", config: { enabled: true, inExperiment: true, gatesApex: false } }];
let experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-04_server_theme", label: "Server Theme", defaultConfig: { enabled: false, inExperiment: false, gatesApex: false }, treatments: items });
const result = obj132.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeExperiment.tsx");

export const ServerThemeExperiment = experiment;
export const getServerThemeEnabled = function getServerThemeEnabled(guildId, GuildPowerupsConstants) {
  let obj = { guildId, location: GuildPowerupsConstants };
  const currentConfig = experiment.getCurrentConfig(obj, { autoTrackExposure: false });
  let enabled = currentConfig.enabled;
  if (null != guildId) {
    const ServerThemeApexShadowExperiment = apexExperiment.ServerThemeApexShadowExperiment;
    obj = { guildId: null, location: null };
    obj[0] = guildId;
    obj[1] = GuildPowerupsConstants;
    let config = ServerThemeApexShadowExperiment.getConfig(obj);
  } else {
    config = { enabled: false, gatesApex: false };
  }
  if (!currentConfig.inExperiment) {
    enabled = config.gatesApex && tmp4;
  }
  return enabled;
};
export const useServerThemeEnabled = function useServerThemeEnabled(guildId, useGuildPowerupNewPerkMarketingVersion) {
  let obj = { guildId, location: useGuildPowerupNewPerkMarketingVersion };
  experiment = experiment.useExperiment(obj, { autoTrackExposure: false });
  let enabled = experiment.enabled;
  const ServerThemeApexShadowExperiment = apexExperiment.ServerThemeApexShadowExperiment;
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
    }
    enabled = tmp6;
  }
  return enabled;
};