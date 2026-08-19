// discord_app/modules/rpc/server/commands/application.tsx
import sendRequest from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import isTestModeForApplication from "../../../game_store/TestModeUtils.tsx";
import getApplicationFlags from "../../../applications/utils/ApplicationFlagUtils.tsx";
import getShelfItemTrackingProperties from "../../../activities/EmbeddedActivitiesManager.tsx";
import prototypeDefault from "../../RPCError.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import recurseReplaceContentTree from "../../RPCHelpers.tsx";
import getCurrentEmbeddedActivityChannelDefault from "../../helpers/getCurrentEmbeddedActivityChannel.tsx";
import addApplication from "../../../applications/ApplicationStore.tsx";
import ME from "../../../../Constants.tsx";

require = fn;
({ ApplicationFlags: c4, Endpoints: c5, RPCCommands, RPCErrors: closure_6 } = ME);
let obj = {
  scope: require("RPC_SCOPE_CONFIG").RPC_LOCAL_SCOPE,
  handler(socket) {
    const id = socket.socket.application.id;
    if (null == id) {
      let obj = { errorCode: null };
      obj[0] = constants2.INVALID_COMMAND;
      const tmp7 = new prototypeDefault(obj, "No application.");
      throw tmp7;
    } else {
      const HTTP = sendRequest.HTTP;
      obj = { url: null, body: null, retries: 3, oldFormErrors: true, rejectWithError: false };
      obj[0] = closure_5.APPLICATION_TICKET(id);
      obj = { test_mode: null };
      obj[0] = isTestModeForApplication.isTestModeForApplication(id);
      obj[1] = obj;
      return HTTP.post(obj).then((result) => result.body);
    }
  }
};
let result = require("obj132").fileFinishedImporting("modules/rpc/server/commands/application.tsx");

export default { [RPCCommands.SEND_ANALYTICS_EVENT]: obj, [RPCCommands.GET_APPLICATION_TICKET]: obj };