// === Module 13434: useGuildPowerupConfigureCallback ===

// Module 13434 (useGuildPowerupConfigureCallback)
import _modDef38 from "module_38" /* 38 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 7994 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 7998 */;
import Powerups from "Powerups" /* 8001 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 13406 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1071);
({ GuildSettingsSections: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default function useGuildPowerupConfigureCallback(arg0, skuId) {
  closure_0 = arg0;
  items = [arg0, skuId.skuId];
  return noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY);
    skuId = skuId.skuId;
    if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      GuildSettingsActionCreatorsDefault.open(closure_0, constants.ROLES, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
      const tmpResult = GuildSettingsActionCreatorsDefault;
    } else if (Powerups.GUILD_POWERUP_TAG_SKU_ID === skuId) {
      if (tmp3Result.canUseMobileServerTagSettings(closure_0)) {
        GuildSettingsActionCreatorsDefault.open(closure_0, constants.TAG, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
        const tmpResult3 = GuildSettingsActionCreatorsDefault;
      }
      tmp3Result = GuildSettingsServerTagUtils;
    } else {
      const _HermesInternal = HermesInternal;
      _modDef38(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
      const tmpResult4 = _modDef38;
    }
    tmp5 = skuId;
  }, items);
};