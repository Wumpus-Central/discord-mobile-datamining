// === Module 16246: providers ===

// Module 16246 (providers)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1120 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 7334 */;
import RPCErrorDefault from "RPCError" /* 9300 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11571 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6559 */;

require = fn;
let closure_10 = async function _refreshProviderAccessToken() {
  closure_3 = tmp5;
  closure_2 = tmp2;
  await ConnectedAccountsActionCreatorsDefault.refreshAccessToken(closure_0, closure_1);
  closure_130_0 = value;
  if (null == closure_130_0) {
    throw new closure_131_1(closure_131_2[7])({ errorCode: closure_131_8.OAUTH2_ERROR }, "Refreshing access token did not return a new access token");
  }
  return { access_token: closure_130_0 };
};
let Constants = fn(6437);
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1084);
({ AnalyticsLocations: hasOwnProperty, ComponentActions: metroRequire, PlatformTypes: closure_7 } = Constants);
Constants = fn(2024);
({ AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID } = Constants);
Constants = fn(1095);
({ RPCCommands, RPCErrors: closure_8 } = Constants);
const items = [AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID];
const set = new Set(items);
let obj = { [RPCCommands.GET_PROVIDER_ACCESS_TOKEN]: obj2 };
obj2 = {
  scope: null,
  validation(string) {
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { provider: null, connection_redirect: null };
    const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
    obj2.provider = string.string().required();
    obj2.connection_redirect = string.string();
    return requiredResult.keys(obj2);
  },
  handler(arg0) {
    ({ signal: require, socket, args } = arg0);
    const provider = args.provider;
    const connection_redirect = args.connection_redirect;
    let result = require("RPCHelpers").validatePostMessageTransport(socket.transport);
    let obj = require("RPCHelpers");
    let obj2 = require("RPCHelpers");
    const validateApplicationResult = require("RPCHelpers").validateApplication(socket.application);
    value = provider(connection_redirect[10]).get(provider);
    c3 = value;
    if (null == value) {
      const obj4 = { errorCode: closure_8.INVALID_PROVIDER };
      const _HermesInternal = HermesInternal;
      const tmp4Result1 = new tmp4(tmp[7])(obj4, "Platform not found for provider \"" + provider + "\"");
      throw tmp4Result1;
    } else if (provider !== constants2.AMAZON_MUSIC) {
      const obj5 = { errorCode: closure_8.UNAUTHORIZED_FOR_APPLICATION };
      const tmp22 = new tmp4(tmp[7])(obj5, "Command not available for this application");
      throw tmp22;
    } else if (set.has(validateApplicationResult)) {
      const account = ConnectedAccountsStore.getAccount(null, provider);
      if (null != account) {
        let promise = (function refreshProviderAccessToken() {
          const self = this;
          const apply = closure_1_10.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(value.type, account.id);
      } else {
        promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          function handleConnectionsUpdate(accounts) {
            if (null != c3) {
              accounts = accounts.accounts;
              if (accounts == null) {
                accounts = [];
              }
              const found = accounts.find((type) => type.type === type.type);
              if (null != found) {
                const obj = { access_token: found.access_token };
                closure_0(obj);
                const removed = _require.removeEventListener("abort", handleSocketDisconnected);
                DispatcherDefault.unsubscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
                const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                ComponentDispatch.unsubscribe(constants.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
              }
            }
          }
          function handleConnectionsCallbackError() {
            const obj = { errorCode: closure_3_8.OAUTH2_ERROR };
            closure_1(new RPCErrorDefault({ errorCode: closure_3_8.OAUTH2_ERROR }, "OAuth2 setup for \"" + provider + "\" failed"));
            const removed = _require.removeEventListener("abort", handleSocketDisconnected);
            const tmp2 = new RPCErrorDefault({ errorCode: closure_3_8.OAUTH2_ERROR }, "OAuth2 setup for \"" + provider + "\" failed");
            DispatcherDefault.unsubscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
          }
          function handleSocketDisconnected() {
            const obj = { errorCode: closure_3_8.OAUTH2_ERROR };
            closure_1(new RPCErrorDefault({ errorCode: closure_3_8.OAUTH2_ERROR }, "OAuth2 setup for \"" + provider + "\" was abandoned"));
            const removed = _require.removeEventListener("abort", handleSocketDisconnected);
            const tmp2 = new RPCErrorDefault({ errorCode: closure_3_8.OAUTH2_ERROR }, "OAuth2 setup for \"" + provider + "\" was abandoned");
            DispatcherDefault.unsubscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
          }
          if (closure_0.aborted) {
            const result = handleSocketDisconnected();
          } else {
            const subscription = provider(connection_redirect[11]).subscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
            let ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
            const subscription1 = ComponentDispatch.subscribe(constants2.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
            const listener = obj.addEventListener("abort", handleSocketDisconnected, { once: true });
            const obj3 = { platformType: handleConnectionsCallbackError.type, location: constants.ACTIVITY_RPC, successRedirect: handleConnectionsUpdate };
            provider(connection_redirect[13])(obj3);
            let obj2 = provider(connection_redirect[11]);
          }
          obj = closure_0;
        });
      }
      return promise;
    } else {
      const obj6 = { errorCode: closure_8.UNAUTHORIZED_FOR_APPLICATION };
      const tmp10 = new tmp4(tmp[7])(obj6, "Command not available for this application");
      throw tmp10;
    }
    let obj3 = provider(connection_redirect[10]);
  }
};
const items1 = [RPC_AUTHENTICATED_SCOPE];
obj2.scope = { [RPC_SCOPE_CONFIG.ANY]: items1 };
let obj3 = {
  scope: null,
  validation(string) {
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { provider: null };
    const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
    obj2.provider = string.string().required();
    return requiredResult.keys(obj2);
  },
  handler: null
};
const items2 = [RPC_AUTHENTICATED_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items2 };
let closure_11 = asyncGeneratorStep(async (arg0) => {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          let socket;
          let provider;
          socket = _require.socket;
          provider = _require.args.provider;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          let account;
          closure_129_5 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Reflect", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const result = closure_130_0(closure_130_2[9]).validatePostMessageTransport(socket.transport);
          const obj14 = closure_130_0(closure_130_2[9]);
          closure_129_2 = closure_130_0(closure_130_2[9]).validateApplication(socket.application);
          const obj15 = closure_130_0(closure_130_2[9]);
          closure_129_3 = closure_130_1(closure_130_2[10]).get(provider);
          if (null == closure_129_3) {
            const obj5 = { errorCode: closure_130_8.INVALID_PROVIDER };
            const _HermesInternal = HermesInternal;
            const tmp592 = new closure_130_1(closure_130_2[7])(obj5, "Platform not found for provider \"" + provider + "\"");
            throw tmp592;
          } else if (provider !== closure_130_7.AMAZON_MUSIC) {
            const obj7 = { errorCode: closure_130_8.UNAUTHORIZED_FOR_APPLICATION };
            const tmp53 = new closure_130_1(closure_130_2[7])(obj7, "Command not available for this application");
            throw tmp53;
          } else if (closure_130_9.has(closure_129_2)) {
            account = closure_130_4.getAccount(null, provider);
            if (null == account) {
              const obj8 = { errorCode: closure_130_8.NO_CONNECTION_FOUND };
              const tmp44 = new closure_130_1(closure_130_2[7])(obj8, "No connection found");
              throw tmp44;
            } else {
              c3 = 2;
              c4 = 1;
              const obj9 = { value: closure_130_1(closure_130_2[6]).refreshAccessToken(closure_129_3.type, account.id), done: false };
              return obj9;
            }
          } else {
            const obj10 = { errorCode: closure_130_8.UNAUTHORIZED_FOR_APPLICATION };
            const tmp24 = new closure_130_1(closure_130_2[7])(obj10, "Command not available for this application");
            throw tmp24;
          }
          const obj16 = closure_130_1(closure_130_2[10]);
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        closure_129_5 = value;
        if (null == closure_129_5) {
          const obj12 = { errorCode: closure_130_8.OAUTH2_ERROR };
          const tmp15 = new closure_130_1(closure_130_2[7])(obj12, "Refreshing access token did not return a new access token");
          throw tmp15;
        } else {
          const obj = { access_token: closure_129_5 };
          c4 = 3;
          const obj13 = { value: obj, done: true };
          return obj13;
        }
      }
    } catch (tmp69) {
      c4 = tmp;
      throw tmp69;
    }
  }
});
obj3.handler = function handler() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj[RPCCommands.MAYBE_GET_PROVIDER_ACCESS_TOKEN] = obj3;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/providers.tsx");

export default obj;