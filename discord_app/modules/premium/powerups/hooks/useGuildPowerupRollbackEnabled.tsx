// === Module 12170: useGuildPowerupRollbackEnabled ===

// Module 12170 (useGuildPowerupRollbackEnabled)
import react from "react" /* 576 */;
import Powerups from "Powerups" /* 4777 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4779 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, skuId, arg2) => {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = ServerThemeExperiment;
  const serverThemeRollbackEnabled = obj2.useServerThemeRollbackEnabled(arg0, arg2);
  if (cResult[0] === serverThemeRollbackEnabled) {
    let tmp5;
    if (cResult[1] === skuId.skuId) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && serverThemeRollbackEnabled;
  cResult[0] = serverThemeRollbackEnabled;
  cResult[1] = skuId.skuId;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0, skuId, arg2) => {
  const obj = ServerThemeExperiment;
  const serverThemeRollbackEnabled = obj.useServerThemeRollbackEnabled(arg0, arg2);
  const tmp2 = skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && serverThemeRollbackEnabled;
  return tmp2;
});
function isGuildPowerupRollbackEnabledForSku(arg0, arg1) {
  const tmp = arg0 === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && arg1;
  return tmp;
}
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default tmp2;
export { isGuildPowerupRollbackEnabledForSku };
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(guildId, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let serverThemeRollbackEnabled = skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID;
  if (serverThemeRollbackEnabled) {
    const tmpResult = ServerThemeExperiment;
    serverThemeRollbackEnabled = tmpResult.getServerThemeRollbackEnabled(guildId, maybeGetPerkPurchaseablePopoutDCF);
  }
  return serverThemeRollbackEnabled;
};