// discord_app/actions/native/GuildActionCreators.tsx
import { Endpoints } from "ME";

function batchChannelUpdate(outer1_0) {
  if (arg1.length > 0) {
    function onEnd() {
      return callback(table[1]).dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
    }
    let obj = require("../../Dispatcher.tsx");
    obj.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
    obj = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = Endpoints.GUILD_CHANNELS(outer1_0);
    obj[1] = arg1;
    HTTP.patch(obj).then(onEnd, onEnd);
    const patchResult = HTTP.patch(obj);
  }
}
function batchRoleUpdate(outer1_0) {
  if (arg1.length > 0) {
    function onEnd() {
      return callback(table[1]).dispatch({ type: "GUILD_SETTINGS_SUBMIT_SUCCESS" });
    }
    let obj = require("../../Dispatcher.tsx");
    obj.dispatch({ type: "GUILD_SETTINGS_SUBMIT" });
    const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
    obj = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = Endpoints.GUILD_ROLES(outer1_0);
    obj[1] = arg1;
    HTTP.patch(obj).then(onEnd, onEnd);
    const patchResult = HTTP.patch(obj);
  }
}
const result = require("sendRequest").fileFinishedImporting("actions/native/GuildActionCreators.tsx");

export default { batchChannelUpdate, batchRoleUpdate };
export { batchChannelUpdate };
export { batchRoleUpdate };