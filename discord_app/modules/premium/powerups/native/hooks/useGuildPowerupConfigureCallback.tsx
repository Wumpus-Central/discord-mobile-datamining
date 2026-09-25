// === Module 12022: useGuildPowerupConfigureCallback ===

// Module 12022 (useGuildPowerupConfigureCallback)
import _modDef38 from "module_38" /* 38 */;
import Powerups from "Powerups" /* 4723 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9037 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 9040 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 11995 */;
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