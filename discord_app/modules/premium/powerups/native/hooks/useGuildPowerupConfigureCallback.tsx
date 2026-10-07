// === Module 12218: useGuildPowerupConfigureCallback ===

// Module 12218 (useGuildPowerupConfigureCallback)
import _modDef38 from "module_38" /* 38 */;
import Powerups from "Powerups" /* 4777 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 9285 */;
import openGuildPowerupsBottomSheet from "openGuildPowerupsBottomSheet" /* 12189 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1085);
({ GuildSettingsSections: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, skuId) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === arg0) {
    if (cResult[1] === skuId.skuId) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function s() {
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
  };
  cResult[0] = arg0;
  cResult[1] = skuId.skuId;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, skuId) => {
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
});