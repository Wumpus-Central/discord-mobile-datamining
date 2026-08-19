// discord_app/modules/rpc/server/commands/networking.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import sendRequest from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import RPC_SCOPE_CONFIG from "../../Constants.tsx";
import ME from "../../../../Constants.tsx";

const RPC_LOCAL_SCOPE = RPC_SCOPE_CONFIG.RPC_LOCAL_SCOPE;
({ Endpoints: c3, AnalyticEvents: c4, RPCCommands } = ME);
let obj = {
  scope: RPC_LOCAL_SCOPE,
  handler(args) {
    args = args.args;
    args.application_id = args.socket.application.id;
    expandEventPropertiesDefault.track(constants2.NETWORKING_PEER_METRICS, args);
  }
};
const result = obj132.fileFinishedImporting("modules/rpc/server/commands/networking.tsx");

export default {
  [RPCCommands.GET_NETWORKING_CONFIG]: obj,
  [RPCCommands.NETWORKING_SYSTEM_METRICS]: obj,
  [RPCCommands.NETWORKING_PEER_METRICS]: obj,
  [RPCCommands.NETWORKING_CREATE_TOKEN]: {
    scope: RPC_LOCAL_SCOPE,
    handler() {
      const HTTP = sendRequest.HTTP;
      return HTTP.post({ url: constants.NETWORKING_TOKEN, retries: 1, oldFormErrors: true, rejectWithError: false }).then((result) => result.body);
    }
  }
};