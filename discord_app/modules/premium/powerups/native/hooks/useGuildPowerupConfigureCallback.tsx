// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx
import noop from "noop";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ GuildSettingsSections: c4, AnalyticsSections: c5 } = ME);
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default function useGuildPowerupConfigureCallback(arg0, skuId) {
  let closure_0 = arg0;
  let closure_1 = skuId;
  const items = [arg0, skuId.skuId];
  return React.useCallback(() => {
    skuId(outer1_2[2]).hideActionSheet(callback(outer1_2[3]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    skuId = skuId.skuId;
    if (callback(outer1_2[4]).GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      let tmpResult = tmp(tmp2[5]);
      tmpResult.open(callback, outer1_4.ROLES, outer1_5.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (tmp3(tmp2[4]).GUILD_POWERUP_TAG_SKU_ID === skuId) {
      if (tmp3Result.canUseMobileServerTagSettings(callback)) {
        tmpResult = tmp(tmp2[5]);
        tmpResult.open(tmp9, outer1_4.TAG, outer1_5.GUILD_POWERUPS_OVERVIEW_CARD);
      }
      tmp3Result = tmp3(tmp2[6]);
      tmp9 = callback;
    } else {
      const _HermesInternal = HermesInternal;
      tmp(tmp2[7])(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
    }
    const obj = skuId(outer1_2[2]);
    tmp5 = skuId;
  }, items);
};