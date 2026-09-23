// === Module 14856: networking ===

// Module 14856 (networking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import Constants2 from "Constants" /* 4731 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const RPC_LOCAL_SCOPE = Constants2.RPC_LOCAL_SCOPE;
({ Endpoints: c3, AnalyticEvents: closure_4, RPCCommands } = Constants);
const result = size.fileFinishedImporting("modules/rpc/server/commands/networking.tsx");

export default {
  [RPCCommands.GET_NETWORKING_CONFIG]: {
    scope: RPC_LOCAL_SCOPE,
    handler() {
      const HTTP = HTTPUtils.HTTP;
      value = HTTP.get({ url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT, retries: 3, rejectWithError: false });
      const items = [value.then((body) => body.body.address), ];
      const HTTP2 = HTTPUtils.HTTP;
      items[1] = HTTP2.post({ url: constants.NETWORKING_TOKEN, retries: 3, oldFormErrors: true, rejectWithError: false }).then((body) => body.body.token);
      const obj = { url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT, retries: 3, rejectWithError: false };
      const obj2 = { url: constants.NETWORKING_TOKEN, retries: 3, oldFormErrors: true, rejectWithError: false };
      const postResult = HTTP2.post({ url: constants.NETWORKING_TOKEN, retries: 3, oldFormErrors: true, rejectWithError: false });
      return Promise.all(items).then((result) => {
        [tmp, tmp2] = result;
        return { address, token };
      });
    }
  },
  [RPCCommands.NETWORKING_SYSTEM_METRICS]: {
    scope: RPC_LOCAL_SCOPE,
    handler(args) {
      args = args.args;
      args.application_id = args.socket.application.id;
      AnalyticsUtilsDefault.track(constants2.NETWORKING_SYSTEM_METRICS, args);
    }
  },
  [RPCCommands.NETWORKING_PEER_METRICS]: {
    scope: RPC_LOCAL_SCOPE,
    handler(args) {
      args = args.args;
      args.application_id = args.socket.application.id;
      AnalyticsUtilsDefault.track(constants2.NETWORKING_PEER_METRICS, args);
    }
  },
  [RPCCommands.NETWORKING_CREATE_TOKEN]: {
    scope: RPC_LOCAL_SCOPE,
    handler() {
      const HTTP = HTTPUtils.HTTP;
      return HTTP.post({ url: constants.NETWORKING_TOKEN, retries: 1, oldFormErrors: true, rejectWithError: false }).then((body) => body.body);
    }
  }
};