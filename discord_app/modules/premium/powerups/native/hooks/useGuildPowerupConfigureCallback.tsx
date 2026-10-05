// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import Powerups from "../../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../guild_settings/GuildSettingsActionCreators.tsx";
import GuildSettingsServerTagUtils from "../../../../guild_settings/GuildSettingsServerTagUtils.tsx";
import openGuildPowerupsBottomSheet from "../utils/openGuildPowerupsBottomSheet.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Constants from "../../../../../Constants.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
({ GuildSettingsSections: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, skuId) => {
      let closure_0;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === arg0) {
        let tmp2;
        if (cResult[1] === skuId.skuId) {
          tmp2 = cResult[2];
        }
        return tmp2;
      }
      const fn = function s() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY);
        skuId = skuId.skuId;
        const tmp5 = skuId;
        if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
          const tmpResult = GuildSettingsActionCreatorsDefault;
          tmpResult.open(closure_0, constants.ROLES, hasOwnProperty.GUILD_POWERUPS_OVERVIEW_CARD);
        } else if (Powerups.GUILD_POWERUP_TAG_SKU_ID === skuId) {
          const tmp3Result = GuildSettingsServerTagUtils;
          if (tmp3Result.canUseMobileServerTagSettings(closure_0)) {
            const tmpResult3 = GuildSettingsActionCreatorsDefault;
            tmpResult3.open(closure_0, constants.TAG, hasOwnProperty.GUILD_POWERUPS_OVERVIEW_CARD);
          }
        } else {
          const _HermesInternal = HermesInternal;
          const tmpResult4 = _modDef38;
          tmpResult4(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
        }
      };
      cResult[0] = arg0;
      cResult[1] = skuId.skuId;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : (arg0, skuId) => {
      let closure_0 = arg0;
      const items = [arg0, skuId.skuId];
      return react.useCallback(() => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(openGuildPowerupsBottomSheet.GUILD_POWERUPS_BOTTOM_SHEET_KEY);
        skuId = skuId.skuId;
        const tmp5 = skuId;
        if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
          const tmpResult = GuildSettingsActionCreatorsDefault;
          tmpResult.open(closure_0, constants.ROLES, hasOwnProperty.GUILD_POWERUPS_OVERVIEW_CARD);
        } else if (Powerups.GUILD_POWERUP_TAG_SKU_ID === skuId) {
          const tmp3Result = GuildSettingsServerTagUtils;
          if (tmp3Result.canUseMobileServerTagSettings(closure_0)) {
            const tmpResult3 = GuildSettingsActionCreatorsDefault;
            tmpResult3.open(closure_0, constants.TAG, hasOwnProperty.GUILD_POWERUPS_OVERVIEW_CARD);
          }
        } else {
          const _HermesInternal = HermesInternal;
          const tmpResult4 = _modDef38;
          tmpResult4(false, "Unsupported powerup SKU ID: " + tmp5.skuId);
        }
      }, items);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupConfigureCallback.tsx");

export default tmp3;
