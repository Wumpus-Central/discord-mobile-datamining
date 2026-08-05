// discord_app/modules/rpc/server/commands/networking.tsx
import { RPC_LOCAL_SCOPE } from "RPC_SCOPE_CONFIG";
import ME from "ME";
import { sendRequest } from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { expandEventProperties } from "../../../../utils/AnalyticsUtils.tsx";

let RPCCommands;
let c3;
let c4;
({ Endpoints: c3, AnalyticEvents: c4, RPCCommands } = ME);
let obj = {
  scope: RPC_LOCAL_SCOPE,
  handler() {
    const HTTP = sendRequest.HTTP;
    let obj = { url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT, retries: 3, rejectWithError: false };
    const value = HTTP.get(obj);
    const items = [value.then((body) => body.body.address), ];
    const HTTP2 = sendRequest.HTTP;
    obj = { url: constants.NETWORKING_TOKEN, retries: 3, oldFormErrors: true, rejectWithError: false };
    items[1] = HTTP2.post(obj).then((body) => body.body.token);
    const postResult = HTTP2.post(obj);
    return Promise.all(items).then((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return { address, token };
    });
  }
};
obj = {
  scope: RPC_LOCAL_SCOPE,
  handler(args) {
    args = args.args;
    args.application_id = args.socket.application.id;
    expandEventProperties.track(constants2.NETWORKING_SYSTEM_METRICS, args);
  }
};
obj = {
  scope: RPC_LOCAL_SCOPE,
  handler(args) {
    args = args.args;
    args.application_id = args.socket.application.id;
    expandEventProperties.track(constants2.NETWORKING_PEER_METRICS, args);
  }
};
const result = require("sendRequest").fileFinishedImporting("modules/rpc/server/commands/networking.tsx");

export default {
  [RPCCommands.GET_NETWORKING_CONFIG]: obj,
  [RPCCommands.NETWORKING_SYSTEM_METRICS]: obj,
  [RPCCommands.NETWORKING_PEER_METRICS]: obj,
  [RPCCommands.NETWORKING_CREATE_TOKEN]: {
    scope: RPC_LOCAL_SCOPE,
    handler() {
      const HTTP = sendRequest.HTTP;
      return HTTP.post({ url: constants.NETWORKING_TOKEN, retries: 1, oldFormErrors: true, rejectWithError: false }).then((body) => body.body);
    }
  }
};