// === Module 14348: networking ===

// Module 14348 (networking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Constants2 from "Constants" /* 5323 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let c3;
let closure_4;
const RPC_LOCAL_SCOPE = Constants2.RPC_LOCAL_SCOPE;
({ Endpoints: c3, AnalyticEvents: closure_4, RPCCommands } = Constants);
let obj = {
  scope: RPC_LOCAL_SCOPE,
  handler() {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT, retries: 3, rejectWithError: false };
    const value = HTTP.get(obj);
    const items = [value.then((body) => body.body.address), ];
    const HTTP2 = HTTPUtils.HTTP;
    const obj2 = { url: constants.NETWORKING_TOKEN, retries: 3, oldFormErrors: true, rejectWithError: false };
    const postResult = HTTP2.post(obj2);
    items[1] = postResult.then((body) => body.body.token);
    const allResult = all(items);
    return allResult.then((result) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = result;
      return { address, token };
    });
  }
};
let obj2 = {
  scope: RPC_LOCAL_SCOPE,
  handler(args) {
    args = args.args;
    args.application_id = args.socket.application.id;
    const obj = AnalyticsUtilsDefault;
    obj.track(constants2.NETWORKING_SYSTEM_METRICS, args);
  }
};
const obj3 = {
  scope: RPC_LOCAL_SCOPE,
  handler(args) {
    args = args.args;
    args.application_id = args.socket.application.id;
    const obj = AnalyticsUtilsDefault;
    obj.track(constants2.NETWORKING_PEER_METRICS, args);
  }
};
const obj4 = {
  scope: RPC_LOCAL_SCOPE,
  handler() {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: constants.NETWORKING_TOKEN, retries: 1, oldFormErrors: true, rejectWithError: false };
    const postResult = HTTP.post(obj);
    return postResult.then((body) => body.body);
  }
};
const result = size.fileFinishedImporting("modules/rpc/server/commands/networking.tsx");

export default { [RPCCommands.GET_NETWORKING_CONFIG]: obj, [RPCCommands.NETWORKING_SYSTEM_METRICS]: obj2, [RPCCommands.NETWORKING_PEER_METRICS]: obj3, [RPCCommands.NETWORKING_CREATE_TOKEN]: obj4 };