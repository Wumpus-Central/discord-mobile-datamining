// === Module 18786: DmSettingsUpsellManager ===

// Module 18786 (DmSettingsUpsellManager)
import Constants from "Constants" /* 1087 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import DmSettingsUpsellActionCreatorsDefault from "DmSettingsUpsellActionCreators" /* 18787 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
class DmSettingsUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { DM_SETTINGS_UPSELL_SHOW: applyArgumentsResult.handleDmSettingsUpsellShow };
    return applyArgumentsResult;
  }
}
DmSettingsUpsellManager.prototype["handleDmSettingsUpsellShow"] = function handleDmSettingsUpsellShow(guildId) {
  const result = DmSettingsUpsellActionCreatorsDefault.openDmSettingsUpsellModal(guildId.guildId);
};
const dmSettingsUpsellManager = new DmSettingsUpsellManager();
let result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellManager.tsx");

export default dmSettingsUpsellManager;
export const acknowledgeDmSettingsUpsell = function acknowledgeDmSettingsUpsell(guildId) {
  const HTTP = HTTPUtils.HTTP;
  return HTTP.post({ url: Endpoints.DM_SETTINGS_UPSELL_ACK(guildId), rejectWithError: false });
};