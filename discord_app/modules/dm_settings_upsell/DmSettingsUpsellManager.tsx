import { Endpoints } from "ME";
import "initialize";

class DmSettingsUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { DM_SETTINGS_UPSELL_SHOW: applyArgumentsResult.handleDmSettingsUpsellShow };
    return applyArgumentsResult;
  }
}
DmSettingsUpsellManager.prototype["handleDmSettingsUpsellShow"] = function handleDmSettingsUpsellShow(guildId) {
  const result = importDefault(16246).openDmSettingsUpsellModal(guildId.guildId);
};
const dmSettingsUpsellManager = new DmSettingsUpsellManager();
let result = require("module_16246").fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellManager.tsx");

export default dmSettingsUpsellManager;
export const acknowledgeDmSettingsUpsell = function acknowledgeDmSettingsUpsell(guildId) {
  const HTTP = require(530) /* sendRequest */.HTTP;
  return HTTP.post({ url: Endpoints.DM_SETTINGS_UPSELL_ACK(guildId), rejectWithError: false });
};