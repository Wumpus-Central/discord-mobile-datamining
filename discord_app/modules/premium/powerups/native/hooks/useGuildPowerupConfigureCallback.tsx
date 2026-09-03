// === Module 12344: useGuildPowerupConfigureCallback ===

// Module 12344 (useGuildPowerupConfigureCallback)
import closure_3 from "noop" /* 19 */;
import ME from "ME" /* 673 */;

const require = arg1;
({ GuildSettingsSections: c4, AnalyticsSections: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default function useGuildPowerupConfigureCallback(arg0, skuId) {
  closure_0 = arg0;
  closure_1 = skuId;
  const items = [arg0, skuId.skuId];
  return React.useCallback(() => {
    skuId(closure_1_2[2]).hideActionSheet(callback(closure_1_2[3]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    skuId = skuId.skuId;
    if (callback(closure_1_2[4]).GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      let tmpResult = tmp(tmp2[5]);
      tmpResult.open(callback, closure_1_4.ROLES, closure_1_5.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (tmp3(tmp2[4]).GUILD_POWERUP_TAG_SKU_ID === skuId) {
      if (tmp3Result.canUseMobileServerTagSettings(callback)) {
        tmpResult = tmp(tmp2[5]);
        tmpResult.open(tmp9, closure_1_4.TAG, closure_1_5.GUILD_POWERUPS_OVERVIEW_CARD);
      }
      tmp3Result = tmp3(tmp2[6]);
      tmp9 = callback;
    } else {
      const _HermesInternal = HermesInternal;
      tmp(tmp2[7])(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
    }
    const obj = skuId(closure_1_2[2]);
    tmp5 = skuId;
  }, items);
};