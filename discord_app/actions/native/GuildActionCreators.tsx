// discord_app/actions/native/GuildActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import dispatcherDefault from "../../Dispatcher.tsx";
import ME from "../../Constants.tsx";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

function batchChannelUpdate(closure_1_0) {
  if (arg1.length > 0) {
    function onEnd() {
      return callback(table[1]).dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
    }
    let obj = dispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const HTTP = sendRequest.HTTP;
    obj = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = Endpoints.GUILD_CHANNELS(closure_1_0);
    obj[1] = arg1;
    HTTP.patch(obj).then(onEnd, onEnd);
    const patchResult = HTTP.patch(obj);
  }
}
function batchRoleUpdate(closure_1_0) {
  if (arg1.length > 0) {
    function onEnd() {
      return callback(table[1]).dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
    }
    let obj = dispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const HTTP = sendRequest.HTTP;
    obj = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = Endpoints.GUILD_ROLES(closure_1_0);
    obj[1] = arg1;
    HTTP.patch(obj).then(onEnd, onEnd);
    const patchResult = HTTP.patch(obj);
  }
}
const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("actions/native/GuildActionCreators.tsx");

export default { batchChannelUpdate, batchRoleUpdate };
export { batchChannelUpdate };
export { batchRoleUpdate };
