// discord_app/modules/dm_settings_upsell/DmSettingsUpsellManager.tsx
import set from "../../../_runtime/00002_set.js";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../../Constants.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import _modDef17155 from "DmSettingsUpsellActionCreators.native.tsx";

const Endpoints = ME.Endpoints;
initializeDefault;
class DmSettingsUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { DM_SETTINGS_UPSELL_SHOW: applyArgumentsResult.handleDmSettingsUpsellShow };
    return applyArgumentsResult;
  }
}
DmSettingsUpsellManager.prototype["handleDmSettingsUpsellShow"] = function handleDmSettingsUpsellShow(guildId) {
  const result = _modDef17155.openDmSettingsUpsellModal(guildId.guildId);
};
const dmSettingsUpsellManager = new DmSettingsUpsellManager();
let result = set.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellManager.tsx");

export default dmSettingsUpsellManager;
export const acknowledgeDmSettingsUpsell = function acknowledgeDmSettingsUpsell(guildId) {
  const HTTP = sendRequest.HTTP;
  return HTTP.post({ url: Endpoints.DM_SETTINGS_UPSELL_ACK(guildId), rejectWithError: false });
};
