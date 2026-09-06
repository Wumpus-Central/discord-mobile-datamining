// === Module 17616: batchChannelUpdate ===

// Module 17616 (batchChannelUpdate)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import ME from "ME" /* 1074 */;
import sendRequest from "sendRequest" /* 1272 */;

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