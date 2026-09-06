// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import Powerups from "../../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../guild_settings/GuildSettingsActionCreators.tsx";
import GuildSettingsServerTagUtils from "../../../../guild_settings/GuildSettingsServerTagUtils.tsx";
import openGuildPowerupsBottomSheet from "../utils/openGuildPowerupsBottomSheet.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

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
      let tmpResult = GuildSettingsActionCreatorsDefault;
      tmpResult.open(closure_0, constants.ROLES, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
    } else if (Powerups.GUILD_POWERUP_TAG_SKU_ID === skuId) {
      if (tmp3Result.canUseMobileServerTagSettings(closure_0)) {
        tmpResult = GuildSettingsActionCreatorsDefault;
        tmpResult.open(closure_0, constants.TAG, constants2.GUILD_POWERUPS_OVERVIEW_CARD);
      }
      tmp3Result = GuildSettingsServerTagUtils;
    } else {
      const _HermesInternal = HermesInternal;
      _modDef38(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
      const tmpResult1 = _modDef38;
    }
    tmp5 = skuId;
  }, items);
}
