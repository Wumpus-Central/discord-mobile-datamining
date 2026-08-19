// discord_app/modules/rpc/server/commands/providers.tsx
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import importDefaultResult from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import set from "../../../../stores/ConnectedAccountsStore.tsx";
import RPC_SCOPE_CONFIG from "../../Constants.tsx";
import ME from "../../../../Constants.tsx";
import items3 from "../../../activities/Constants.tsx";
import sum from "../../../../../discord_common/js/shared/Constants.tsx";

const require = fn;
let c4 = importDefaultResult;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
({ AnalyticsLocations: closure_6, ComponentActions: error, PlatformTypes: closure_8 } = ME);
({ AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID } = items3);
({ RPCCommands, RPCErrors: c9 } = sum);
const items = [AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID];
const set = new Set(items);
const items1 = [RPC_AUTHENTICATED_SCOPE];
let obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  validation(string) {
    createRpcJoiSchemaObjectDefault(string);
    const obj = { provider: null };
    const requiredResult = obj.required();
    obj[0] = string.string().required();
    return requiredResult.keys(obj);
  },
  handler: null
};
items2 = [RPC_AUTHENTICATED_SCOPE];
let closure_3 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (function*(arg0) {
    if (id === 2) {
      id = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        id = 2;
        if (0 === type) {
          if (arg0 === 1) {
            id = 3;
            throw arg1;
          } else if (arg0 === 2) {
            id = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = tmp5;
            let provider = tmp2;
            let socket;
            provider = undefined;
            socket = socket.socket;
            provider = socket.args.provider;
            dependencyMap = undefined;
            type = undefined;
            id = undefined;
            let account;
            type = 1;
            id = 1;
            return { value: "ct", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            id = 3;
            throw arg1;
          } else if (arg0 === 2) {
            id = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            const result = socket(8757).validatePostMessageTransport(socket.transport);
            const obj14 = socket(8757);
            dependencyMap = socket(8757).validateApplication(socket.application);
            const obj15 = socket(8757);
            type = provider(5097).get(provider);
            if (null == type) {
              const obj2 = { errorCode: null };
              obj2[0] = closure_9.INVALID_PROVIDER;
              const _HermesInternal = HermesInternal;
              let tmp59 = provider(8752);
              tmp59 = new tmp59(obj2, "Platform not found for provider \"" + provider + "\"");
              throw tmp59;
            } else if (provider !== constants.AMAZON_MUSIC) {
              const obj3 = { errorCode: null };
              obj3[0] = closure_9.UNAUTHORIZED_FOR_APPLICATION;
              const tmp53 = new provider(8752)(obj3, "Command not available for this application");
              throw tmp53;
            } else if (set.has(dependencyMap)) {
              id = account.getAccount(null, provider);
              if (null == id) {
                const obj4 = { errorCode: null };
                obj4[0] = closure_9.NO_CONNECTION_FOUND;
                const tmp44 = new provider(8752)(obj4, "No connection found");
                throw tmp44;
              } else {
                let obj5 = provider(5223);
                type = 2;
                id = 1;
                obj5 = { value: null, done: false };
                obj5[0] = obj5.refreshAccessToken(type.type, id.id);
                return obj5;
              }
            } else {
              const obj6 = { errorCode: null };
              obj6[0] = closure_9.UNAUTHORIZED_FOR_APPLICATION;
              const tmp24 = new provider(8752)(obj6, "Command not available for this application");
              throw tmp24;
            }
            const obj16 = provider(5097);
          }
        } else if (arg0 === 1) {
          id = 3;
          throw arg1;
        } else if (arg0 === 2) {
          id = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        } else {
          account = arg1;
          if (null == account) {
            const obj8 = { errorCode: null };
            obj8[0] = closure_9.OAUTH2_ERROR;
            const tmp15 = new provider(8752)(obj8, "Refreshing access token did not return a new access token");
            throw tmp15;
          } else {
            obj = { access_token: null };
            obj[0] = account;
            id = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = obj;
            return obj9;
          }
        }
      } catch (tmp69) {
        id = tmp;
        throw tmp69;
      }
    }
  })();
  iter.next();
  return iter;
});
obj[2] = function() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj[RPCCommands.MAYBE_GET_PROVIDER_ACCESS_TOKEN] = obj;
let result = require("obj132").fileFinishedImporting("modules/rpc/server/commands/providers.tsx");

export default obj;