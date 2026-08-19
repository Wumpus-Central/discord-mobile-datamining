// === Module 11713: useGuildPowerupConfigureCallback ===

// Module 11713 (useGuildPowerupConfigureCallback)
import noop from "noop" /* 19 */;
import ME from "ME" /* 676 */;

const require = fn;
({ GuildSettingsSections: c4, AnalyticsSections: c5 } = ME);
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default function useGuildPowerupConfigureCallback(arg0, skuId) {
  closure_0 = arg0;
  closure_1 = skuId;
  const items = [arg0, skuId.skuId];
  return React.useCallback(() => {
    skuId(dependencyMap[2]).hideActionSheet(callback(dependencyMap[3]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    skuId = skuId.skuId;
    if (callback(dependencyMap[4]).GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      let tmpResult = tmp(dependencyMap[5]);
      tmpResult.open(callback, closure_1_4.ROLES, closure_1_5.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (callback(dependencyMap[4]).GUILD_POWERUP_TAG_SKU_ID === skuId) {
      if (tmp3Result.canUseMobileServerTagSettings(callback)) {
        tmpResult = tmp(dependencyMap[5]);
        tmpResult.open(callback, closure_1_4.TAG, closure_1_5.GUILD_POWERUPS_OVERVIEW_CARD);
      }
      tmp3Result = callback(dependencyMap[6]);
    } else {
      const _HermesInternal = HermesInternal;
      tmp(dependencyMap[7])(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
      const tmpResult1 = tmp(dependencyMap[7]);
    }
    const obj = skuId(dependencyMap[2]);
    tmp5 = skuId;
  }, items);
};