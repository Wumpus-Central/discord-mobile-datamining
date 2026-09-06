// discord_app/actions/native/GuildActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

function batchChannelUpdate(guildId, body) {
  if (body.length > 0) {
    function onEnd() {
      return DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
    }
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_CHANNELS(guildId), body, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(request).then(onEnd, onEnd);
    const patchResult = HTTP.patch(request);
  }
}
function batchRoleUpdate(id, body) {
  if (body.length > 0) {
    function onEnd() {
      return DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
    }
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_ROLES(id), body, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(request).then(onEnd, onEnd);
    const patchResult = HTTP.patch(request);
  }
}
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/native/GuildActionCreators.tsx");

export default { batchChannelUpdate, batchRoleUpdate };
export { batchChannelUpdate };
export { batchRoleUpdate };
