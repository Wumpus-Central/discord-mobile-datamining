// === Module 12544: useGuildPowerupConfigureCallback ===

// Module 12544 (useGuildPowerupConfigureCallback)
import Powerups from "Powerups" /* 4453 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12517 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ GuildSettingsSections: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default function useGuildPowerupConfigureCallback(arg0, skuId) {
  closure_0 = arg0;
  const items = [arg0, skuId.skuId];
  return noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    skuId = skuId.skuId;
    if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      let tmpResult = tmp(9063);
      tmpResult.open(closure_0, constants.ROLES, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (tmp3(4453).GUILD_POWERUP_TAG_SKU_ID === skuId) {
      if (tmp3Result.canUseMobileServerTagSettings(closure_0)) {
        tmpResult = tmp(9063);
        tmpResult.open(tmp9, constants.TAG, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
      }
      tmp3Result = tmp3(9067);
      tmp9 = closure_0;
    } else {
      const _HermesInternal = HermesInternal;
      tmp(38)(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
    }
    tmp5 = skuId;
  }, items);
};