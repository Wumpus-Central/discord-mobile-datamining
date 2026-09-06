// === Module 14490: providers ===

// Module 14490 (providers)
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9557 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;

const require = fn;
let Constants = fn(4465);
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = fn(1074);
({ AnalyticsLocations: metroRequire, ComponentActions: closure_7, PlatformTypes: closure_8 } = Constants);
Constants = fn(1920);
({ AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID } = Constants);
Constants = fn(1085);
({ RPCCommands, RPCErrors: closure_9 } = Constants);
const items = [AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID];
const set = new Set(items);
obj = { [RPCCommands.GET_PROVIDER_ACCESS_TOKEN]: obj };
obj = {
  scope: null,
  validation(string) {
    createRpcJoiSchemaObjectDefault(string);
    const obj = { provider: null, connection_redirect: null };
    const requiredResult = obj.required();
    obj.provider = string.string().required();
    obj.connection_redirect = string.string();
    return requiredResult.keys(obj);
  },
  handler(arg0) {
    ({ socket, args } = arg0);
    const provider = args.provider;
    _require = provider;
    const connection_redirect = args.connection_redirect;
    let obj = require("RPCHelpers");
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = require("RPCHelpers");
    const validateApplicationResult = obj1.validateApplication(socket.application);
    value = connection_redirect(5283).get(provider);
    dependencyMap = value;
    if (null == value) {
      obj = { errorCode: constants2.INVALID_PROVIDER };
      const _HermesInternal = HermesInternal;
      let tmp4Result = tmp4(9554);
      tmp4Result = new tmp4Result(obj, "Platform not found for provider \"" + provider + "\"");
      throw tmp4Result;
    } else if (provider !== constants.AMAZON_MUSIC) {
      obj = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const tmp22 = new tmp4(9554)(obj, "Command not available for this application");
      throw tmp22;
    } else if (set.has(validateApplicationResult)) {
      _require = asyncGeneratorStep(async (arg0, successRedirect) => {
        closure_0 = arg0;
        c6 = 0;
        c7 = 0;
        c5 = 0;
        return (async (arg0, value) => {
          if (c7 === 2) {
            c7 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
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
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_3 = tmp3;
                  dependencyMap = tmp7;
                  closure_130_0 = closure_0;
                  closure_130_1 = successRedirect;
                  closure_130_2 = undefined;
                  account = account.getAccount(null, closure_0);
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
                          connection_redirect(573).unsubscribe("USER_CONNECTIONS_UPDATE", closure_1_3);
                          const ComponentDispatch = closure_0(1109).ComponentDispatch;
                          ComponentDispatch.unsubscribe(constants2.CONNECTIONS_CALLBACK_ERROR, closure_1_4);
                          const obj2 = connection_redirect(573);
                        }
                      }
                    }
                    closure_130_3 = handleConnectionsUpdate;
                    function handleConnectionsCallbackError() {
                      let tmp = connection_redirect(9554);
                      tmp = new tmp({ errorCode: closure_3_9.OAUTH2_ERROR }, "OAuth2 setup for \"" + closure_0 + "\" failed");
                      successRedirect(tmp);
                      connection_redirect(573).unsubscribe("USER_CONNECTIONS_UPDATE", closure_1_3);
                      const ComponentDispatch = closure_0(1109).ComponentDispatch;
                      ComponentDispatch.unsubscribe(constants2.CONNECTIONS_CALLBACK_ERROR, closure_1_4);
                    }
                    closure_130_4 = handleConnectionsCallbackError;
                    const subscription = connection_redirect(dependencyMap[10]).subscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
                    let ComponentDispatch = closure_0(dependencyMap[11]).ComponentDispatch;
                    const subscription1 = ComponentDispatch.subscribe(constants2.CONNECTIONS_CALLBACK_ERROR, handleConnectionsCallbackError);
                    const obj1 = { platformType: dependencyMap.type, location: constants.ACTIVITY_RPC, successRedirect };
                    connection_redirect(dependencyMap[12])(obj1);
                    const obj6 = connection_redirect(dependencyMap[10]);
                  } else {
                    c5 = 1;
                    let obj3 = connection_redirect(dependencyMap[13]);
                    c6 = 2;
                    c7 = 1;
                    let obj2 = { value: obj3.refreshAccessToken(dependencyMap.type, account.id), done: false };
                    return obj2;
                  }
                }
              } else {
                if (1 === tmp7) {
                  c5 = 0;
                  closure_130_1(closure_4);
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_130_2 = value;
                  if (null != closure_130_2) {
                    obj = { access_token: closure_130_2 };
                    closure_130_0(obj);
                    c5 = 0;
                  }
                }
                const obj4 = { errorCode: closure_2_9.OAUTH2_ERROR };
                const tmp21 = new connection_redirect(dependencyMap[9])(obj4, "Refreshing access token did not return a new access token");
                throw tmp21;
              }
              c7 = 3;
            } catch (tmp44) {
              closure_4 = tmp44;
              if (tmp4 === c5) {
                c7 = tmp2;
                throw tmp44;
              } else {
                c6 = tmp;
              }
            }
          }
        })();
      });
      const promise = new Promise(function() {
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
      obj1 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const tmp10 = new tmp4(9554)(obj1, "Command not available for this application");
      throw tmp10;
    }
    let obj3 = connection_redirect(5283);
  }
};
const items1 = [RPC_AUTHENTICATED_SCOPE];
obj.scope = { [RPC_SCOPE_CONFIG.ANY]: items1 };
obj = {
  scope: null,
  validation(string) {
    createRpcJoiSchemaObjectDefault(string);
    const obj = { provider: null };
    const requiredResult = obj.required();
    obj.provider = string.string().required();
    return requiredResult.keys(obj);
  },
  handler: null
};
const items2 = [RPC_AUTHENTICATED_SCOPE];
obj.scope = { [RPC_SCOPE_CONFIG.ANY]: items2 };
let closure_3 = asyncGeneratorStep(async (arg0, value) => {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
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
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const result = closure_130_0(closure_130_2[7]).validatePostMessageTransport(socket.transport);
          const obj14 = closure_130_0(closure_130_2[7]);
          closure_129_2 = closure_130_0(closure_130_2[7]).validateApplication(socket.application);
          const obj15 = closure_130_0(closure_130_2[7]);
          closure_129_3 = closure_130_1(closure_130_2[8]).get(provider);
          if (null == closure_129_3) {
            const obj2 = { errorCode: closure_130_9.INVALID_PROVIDER };
            const _HermesInternal = HermesInternal;
            let tmp59 = closure_130_1(closure_130_2[9]);
            tmp59 = new tmp59(obj2, "Platform not found for provider \"" + provider + "\"");
            throw tmp59;
          } else if (provider !== closure_130_8.AMAZON_MUSIC) {
            const obj3 = { errorCode: closure_130_9.UNAUTHORIZED_FOR_APPLICATION };
            const tmp53 = new closure_130_1(closure_130_2[9])(obj3, "Command not available for this application");
            throw tmp53;
          } else if (closure_130_10.has(closure_129_2)) {
            account = closure_130_5.getAccount(null, provider);
            if (null == account) {
              const obj4 = { errorCode: closure_130_9.NO_CONNECTION_FOUND };
              const tmp44 = new closure_130_1(closure_130_2[9])(obj4, "No connection found");
              throw tmp44;
            } else {
              let obj5 = closure_130_1(closure_130_2[13]);
              c3 = 2;
              c4 = 1;
              obj5 = { value: null, done: false };
              obj5.value = obj5.refreshAccessToken(closure_129_3.type, account.id);
              return obj5;
            }
          } else {
            const obj6 = { errorCode: closure_130_9.UNAUTHORIZED_FOR_APPLICATION };
            const tmp24 = new closure_130_1(closure_130_2[9])(obj6, "Command not available for this application");
            throw tmp24;
          }
          const obj16 = closure_130_1(closure_130_2[8]);
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_5 = value;
        if (null == closure_129_5) {
          const obj8 = { errorCode: closure_130_9.OAUTH2_ERROR };
          const tmp15 = new closure_130_1(closure_130_2[9])(obj8, "Refreshing access token did not return a new access token");
          throw tmp15;
        } else {
          obj = { access_token: closure_129_5 };
          c4 = 3;
          const obj9 = { value: obj, done: true };
          return obj9;
        }
      }
    } catch (tmp69) {
      c4 = tmp;
      throw tmp69;
    }
  }
});
obj.handler = function() {
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/providers.tsx");

export default obj;