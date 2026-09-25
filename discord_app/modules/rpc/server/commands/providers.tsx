// discord_app/modules/rpc/server/commands/providers.tsx
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ConnectedAccountsStore from "../../../../stores/ConnectedAccountsStore.tsx";

const require = fn;
let Constants = fn(4735);
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1074);
({ AnalyticsLocations: metroRequire, ComponentActions: closure_7, PlatformTypes: closure_8 } = Constants);
Constants = fn(2004);
({ AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID } = Constants);
Constants = fn(1085);
({ RPCCommands, RPCErrors: closure_9 } = Constants);
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
    ({ signal: closure_0, socket, args } = arg0);
    const provider = args.provider;
    const connection_redirect = args.connection_redirect;
    let result = require("RPCHelpers").validatePostMessageTransport(socket.transport);
    let obj = require("RPCHelpers");
    let obj2 = require("RPCHelpers");
    const validateApplicationResult = require("RPCHelpers").validateApplication(socket.application);
    value = provider(connection_redirect[8]).get(provider);
    c3 = value;
    if (null == value) {
      const obj4 = { errorCode: constants2.INVALID_PROVIDER };
      const _HermesInternal = HermesInternal;
      const tmp4Result1 = new tmp4(tmp[9])(obj4, 'Platform not found for provider "' + provider + '"');
      throw tmp4Result1;
    } else if (provider !== constants.AMAZON_MUSIC) {
      let obj5 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const tmp22 = new tmp4(tmp[9])(obj5, "Command not available for this application");
      throw tmp22;
    } else if (set.has(validateApplicationResult)) {
      _require = asyncGeneratorStep(async (arg0, arg1) => {
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const successRedirect = tmp5;
                closure_130_0 = closure_0;
                closure_130_1 = closure_1;
                closure_130_2 = undefined;
                account = account.getAccount(null, closure_1);
                if (null == account) {
                  function handleConnectionsUpdate(accounts) {
                    if (null != type) {
                      accounts = accounts.accounts;
                      if (accounts == null) {
                        accounts = [];
                      }
                      const found = accounts.find((type) => type.type === type.type);
                      if (null != found) {
                        const obj = { access_token: found.access_token };
                        closure_1_0(obj);
                        const removed = closure_0.removeEventListener("abort", closure_1_5);
                        provider(connection_redirect[10]).unsubscribe("USER_CONNECTIONS_UPDATE", closure_1_3);
                        const ComponentDispatch = closure_0(connection_redirect[11]).ComponentDispatch;
                        ComponentDispatch.unsubscribe(constants2.CONNECTIONS_CALLBACK_ERROR, closure_1_4);
                        const obj2 = provider(connection_redirect[10]);
                      }
                    }
                  }
                  closure_130_3 = handleConnectionsUpdate;
                  function handleConnectionsCallbackError() {
                    const obj = { errorCode: OAUTH2_ERROR.OAUTH2_ERROR };
                    const tmp = provider(connection_redirect[9]);
                    closure_1_1(
                      new provider(connection_redirect[9])(
                        { errorCode: OAUTH2_ERROR.OAUTH2_ERROR },
                        'OAuth2 setup for "' + closure_1 + '" failed',
                      ),
                    );
                    const removed = closure_0.removeEventListener("abort", closure_1_5);
                    const tmp2 = new provider(connection_redirect[9])(
                      { errorCode: OAUTH2_ERROR.OAUTH2_ERROR },
                      'OAuth2 setup for "' + closure_1 + '" failed',
                    );
                    provider(connection_redirect[10]).unsubscribe("USER_CONNECTIONS_UPDATE", closure_1_3);
                    const ComponentDispatch = closure_0(connection_redirect[11]).ComponentDispatch;
                    ComponentDispatch.unsubscribe(constants2.CONNECTIONS_CALLBACK_ERROR, closure_1_4);
                  }
                  closure_130_4 = handleConnectionsCallbackError;
                  function handleSocketDisconnected() {
                    const obj = { errorCode: OAUTH2_ERROR.OAUTH2_ERROR };
                    const tmp = provider(connection_redirect[9]);
                    closure_1_1(
                      new provider(connection_redirect[9])(
                        { errorCode: OAUTH2_ERROR.OAUTH2_ERROR },
                        'OAuth2 setup for "' + closure_1 + '" was abandoned',
                      ),
                    );
                    const removed = closure_0.removeEventListener("abort", closure_1_5);
                    const tmp2 = new provider(connection_redirect[9])(
                      { errorCode: OAUTH2_ERROR.OAUTH2_ERROR },
                      'OAuth2 setup for "' + closure_1 + '" was abandoned',
                    );
                    provider(connection_redirect[10]).unsubscribe("USER_CONNECTIONS_UPDATE", closure_1_3);
                    const ComponentDispatch = closure_0(connection_redirect[11]).ComponentDispatch;
                    ComponentDispatch.unsubscribe(constants2.CONNECTIONS_CALLBACK_ERROR, closure_1_4);
                  }
                  closure_130_5 = handleSocketDisconnected;
                  if (closure_0.aborted) {
                    const result = handleSocketDisconnected();
                    c7 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    const subscription = provider(connection_redirect[10]).subscribe(
                      "USER_CONNECTIONS_UPDATE",
                      handleConnectionsUpdate,
                    );
                    let ComponentDispatch = closure_0(connection_redirect[11]).ComponentDispatch;
                    const subscription1 = ComponentDispatch.subscribe(
                      constants2.CONNECTIONS_CALLBACK_ERROR,
                      handleConnectionsCallbackError,
                    );
                    const listener = closure_0.addEventListener("abort", handleSocketDisconnected, { once: true });
                    const obj5 = { platformType: tmp3.type, location: constants.ACTIVITY_RPC, successRedirect };
                    provider(connection_redirect[12])(obj5);
                    const obj7 = provider(connection_redirect[10]);
                  }
                } else {
                  c5 = 1;
                  c6 = 2;
                  c7 = 1;
                  const obj8 = {
                    value: provider(connection_redirect[13]).refreshAccessToken(tmp3.type, account.id),
                    done: false,
                  };
                  return obj8;
                }
              }
            } else {
              if (1 === tmp8) {
                c5 = 0;
                closure_130_1(closure_4);
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                closure_130_2 = value;
                if (null != closure_130_2) {
                  let obj = { access_token: closure_130_2 };
                  closure_130_0(obj);
                  c5 = 0;
                }
              }
              const obj10 = { errorCode: OAUTH2_ERROR.OAUTH2_ERROR };
              const tmp20 = new provider(connection_redirect[9])(
                obj10,
                "Refreshing access token did not return a new access token",
              );
              throw tmp20;
            }
            c7 = 3;
          } catch (tmp45) {
            closure_4 = tmp45;
            if (tmp4 === c5) {
              c7 = tmp2;
              throw tmp45;
            } else {
              c6 = tmp;
            }
          }
        }
      });
      const promise = new Promise(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      });
      return promise;
    } else {
      const obj6 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const tmp10 = new tmp4(tmp[9])(obj6, "Command not available for this application");
      throw tmp10;
    }
    let obj3 = provider(connection_redirect[8]);
  },
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
  handler: null,
};
const items2 = [RPC_AUTHENTICATED_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items2 };
let closure_3 = asyncGeneratorStep(async (arg0) => {
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
      return { value: "HermesInternal", done: null };
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
          return { value: "flex", done: true };
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
          const result = closure_130_0(closure_130_2[7]).validatePostMessageTransport(socket.transport);
          const obj14 = closure_130_0(closure_130_2[7]);
          closure_129_2 = closure_130_0(closure_130_2[7]).validateApplication(socket.application);
          const obj15 = closure_130_0(closure_130_2[7]);
          closure_129_3 = closure_130_1(closure_130_2[8]).get(provider);
          if (null == closure_129_3) {
            const obj5 = { errorCode: closure_130_9.INVALID_PROVIDER };
            const _HermesInternal = HermesInternal;
            const tmp592 = new closure_130_1(closure_130_2[9])(
              obj5,
              'Platform not found for provider "' + provider + '"',
            );
            throw tmp592;
          } else if (provider !== closure_130_8.AMAZON_MUSIC) {
            const obj7 = { errorCode: closure_130_9.UNAUTHORIZED_FOR_APPLICATION };
            const tmp53 = new closure_130_1(closure_130_2[9])(obj7, "Command not available for this application");
            throw tmp53;
          } else if (closure_130_10.has(closure_129_2)) {
            account = closure_130_5.getAccount(null, provider);
            if (null == account) {
              const obj8 = { errorCode: closure_130_9.NO_CONNECTION_FOUND };
              const tmp44 = new closure_130_1(closure_130_2[9])(obj8, "No connection found");
              throw tmp44;
            } else {
              c3 = 2;
              c4 = 1;
              const obj9 = {
                value: closure_130_1(closure_130_2[13]).refreshAccessToken(closure_129_3.type, account.id),
                done: false,
              };
              return obj9;
            }
          } else {
            const obj10 = { errorCode: closure_130_9.UNAUTHORIZED_FOR_APPLICATION };
            const tmp24 = new closure_130_1(closure_130_2[9])(obj10, "Command not available for this application");
            throw tmp24;
          }
          const obj16 = closure_130_1(closure_130_2[8]);
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
          const obj12 = { errorCode: closure_130_9.OAUTH2_ERROR };
          const tmp15 = new closure_130_1(closure_130_2[9])(
            obj12,
            "Refreshing access token did not return a new access token",
          );
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
obj3.handler = function () {
  const self = this;
  const apply = closure_3.apply;
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
