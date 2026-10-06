// discord_app/modules/rpc/server/commands/providers.tsx
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import ConnectedAccountsStore from "../../../../stores/ConnectedAccountsStore.tsx";
import Constants_mod from "../../Constants.tsx";
import Constants_mod2 from "../../../../Constants.tsx";
import Constants_mod3 from "../../../activities/Constants.tsx";
import Constants_mod4 from "../../../../../discord_common/js/shared/Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, account, c4, c6, c7, closure_4;

let AM_HARMONY_PRD_APPLICATION_ID;
let AM_HARMONY_STG_APPLICATION_ID;
let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_SCOPE_CONFIG;
let c9;
let items1;
let items2;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ AnalyticsLocations: metroRequire, ComponentActions: metroImportDefault, PlatformTypes: metroImportAll } = Constants);
Constants = Constants_mod2;
({ AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID } = Constants);
Constants = Constants_mod2;
({ RPCCommands, RPCErrors: c9 } = Constants);
const items = [AM_HARMONY_PRD_APPLICATION_ID, AM_HARMONY_STG_APPLICATION_ID];
const set = new Set(items);
let obj = { [RPCCommands.GET_PROVIDER_ACCESS_TOKEN]: obj2 };
obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  validation(string) {
    let stringResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { provider: stringResult.required(), connection_redirect: string.string() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    return keys(obj2);
  },
  handler(arg0) {
    let args;
    let require;
    let socket;
    ({ signal: require, socket, args } = arg0);
    const provider = args.provider;
    const connection_redirect = args.connection_redirect;
    let tmp = connection_redirect;
    let obj = require("RPCHelpers");
    let result = obj.validatePostMessageTransport(socket.transport);
    let obj2 = require("RPCHelpers");
    const tmp4 = provider;
    const validateApplicationResult = obj2.validateApplication(socket.application);
    let obj3 = provider(connection_redirect[8]);
    const value = obj3.get(provider);
    let c3 = value;
    if (null == value) {
      let obj4 = { errorCode: constants2.INVALID_PROVIDER };
      const _HermesInternal = HermesInternal;
      const self7 = this;
      const self8 = this;
      const tmp4Result = tmp4(tmp[9]);
      const tmp4Result1 = new tmp4Result(obj4, 'Platform not found for provider "' + provider + '"');
      throw tmp4Result1;
    } else if (provider !== constants.AMAZON_MUSIC) {
      let obj5 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const self5 = this;
      let str2 = "Command not available for this application";
      const self6 = this;
      let tmp15 = obj5;
      const tmp16 = new tmp4(tmp[9])(obj5, "Command not available for this application");
      throw tmp16;
    } else if (set.has(validateApplicationResult)) {
      let closure_0 = _asyncToGenerator(async function (arg0, arg1) {
        let obj4;
        let tmp;
        closure_0 = arg0;
        let closure_1 = arg1;
        if (c7 === 2) {
          c7 = 3;
          const str2 = "Generator functions may not be called on executing generators";
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c5;
          try {
            let access_token;
            let self;
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
                access_token = undefined;
                account = account.getAccount(null, closure_1);
                if (null == account) {
                  function handleConnectionsUpdate(accounts) {
                    let type;
                    if (null != closure_2_3) {
                      accounts = accounts.accounts;
                      if (accounts == null) {
                        accounts = [];
                      }
                      const found = accounts.find((type) => type.type === type.type);
                      if (null != found) {
                        const obj = { access_token: found.access_token };
                        closure_1_0(obj);
                        const removed = closure_2_0.removeEventListener("abort", closure_1_5);
                        const obj2 = closure_1(self[10]);
                        obj2.unsubscribe("USER_CONNECTIONS_UPDATE", closure_1_3);
                        const ComponentDispatch = closure_0(self[11]).ComponentDispatch;
                        ComponentDispatch.unsubscribe(constants.CONNECTIONS_CALLBACK_ERROR, closure_1_4);
                      }
                    }
                  }
                  function handleConnectionsCallbackError() {
                    const obj = { errorCode: OAUTH2_ERROR.OAUTH2_ERROR };
                    const tmp = closure_1(self[9]);
                    const tmp2 = new tmp(obj, 'OAuth2 setup for "' + closure_2_1 + '" failed');
                    closure_1_1(tmp2);
                    const removed = closure_2_0.removeEventListener("abort", closure_1_5);
                    const obj2 = closure_1(self[10]);
                    obj2.unsubscribe("USER_CONNECTIONS_UPDATE", closure_1_3);
                    const ComponentDispatch = closure_0(self[11]).ComponentDispatch;
                    ComponentDispatch.unsubscribe(constants.CONNECTIONS_CALLBACK_ERROR, closure_1_4);
                  }
                  function handleSocketDisconnected() {
                    const obj = { errorCode: OAUTH2_ERROR.OAUTH2_ERROR };
                    const tmp = closure_1(self[9]);
                    const tmp2 = new tmp(obj, 'OAuth2 setup for "' + closure_2_1 + '" was abandoned');
                    closure_1_1(tmp2);
                    const removed = closure_2_0.removeEventListener("abort", closure_1_5);
                    const obj2 = closure_1(self[10]);
                    obj2.unsubscribe("USER_CONNECTIONS_UPDATE", closure_1_3);
                    const ComponentDispatch = closure_0(self[11]).ComponentDispatch;
                    ComponentDispatch.unsubscribe(constants.CONNECTIONS_CALLBACK_ERROR, closure_1_4);
                  }
                  self = closure_0.aborted;
                  if (self) {
                    const result = handleSocketDisconnected();
                    c7 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    const obj7 = provider(connection_redirect[10]);
                    const subscription = obj7.subscribe("USER_CONNECTIONS_UPDATE", handleConnectionsUpdate);
                    let ComponentDispatch = closure_0(connection_redirect[11]).ComponentDispatch;
                    const subscription1 = ComponentDispatch.subscribe(
                      constants2.CONNECTIONS_CALLBACK_ERROR,
                      handleConnectionsCallbackError,
                    );
                    const listener = closure_0.addEventListener("abort", handleSocketDisconnected, { once: true });
                    const obj5 = { platformType: tmp.type, location: constants.ACTIVITY_RPC, successRedirect: self };
                    self = provider(connection_redirect[12])(obj5);
                  }
                } else {
                  c5 = 1;
                  c6 = 2;
                  c7 = 1;
                  const obj8 = { value: obj4.refreshAccessToken(tmp.type, account.id), done: false };
                  obj4 = provider(connection_redirect[13]);
                  return obj8;
                }
              }
            } else if (1 === tmp4) {
              self = closure_4;
              c5 = 0;
              closure_1(closure_4);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              access_token = value;
              if (null == access_token) {
                const obj10 = { errorCode: OAUTH2_ERROR.OAUTH2_ERROR };
                self = this;
                const self2 = this;
                const str = "Refreshing access token did not return a new access token";
                const tmp15 = new provider(connection_redirect[9])(
                  obj10,
                  "Refreshing access token did not return a new access token",
                );
                throw tmp15;
              } else {
                self = closure_0;
                let obj = { access_token };
                closure_0(obj);
                c5 = 0;
              }
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp38) {
            closure_4 = tmp38;
            if (0 === c5) {
              c7 = 3;
              throw tmp38;
            } else {
              c6 = 1;
            }
          }
        }
      });
      const self3 = this;
      const self4 = this;
      const promise = new Promise(function () {
        return closure_0(...arguments);
      });
      return promise;
    } else {
      const obj6 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      let self = this;
      let str = "Command not available for this application";
      let self2 = this;
      const tmp8 = new tmp4(tmp[9])(obj6, "Command not available for this application");
      throw tmp8;
    }
  },
};
items1 = [RPC_AUTHENTICATED_SCOPE];
let obj3 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  validation(string) {
    let stringResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { provider: stringResult.required() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    return keys(obj2);
  },
  handler: function () {
    return closure_3(...arguments);
  },
};
items2 = [RPC_AUTHENTICATED_SCOPE];
const MAYBE_GET_PROVIDER_ACCESS_TOKEN = RPCCommands.MAYBE_GET_PROVIDER_ACCESS_TOKEN;
let closure_3 = _asyncToGenerator(async function (arg0) {
  let closure_0;
  let obj6;
  _require = arg0;
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      let socket;
      let provider;
      let closure_2;
      let type;
      let id;
      let access_token;
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
          let closure_1 = tmp;
          socket = _require.socket;
          provider = _require.args.provider;
          closure_2 = undefined;
          type = undefined;
          id = undefined;
          access_token = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj14 = closure_130_0(closure_130_2[7]);
          const result = obj14.validatePostMessageTransport(socket.transport);
          const obj15 = closure_130_0(closure_130_2[7]);
          closure_2 = obj15.validateApplication(socket.application);
          const obj16 = closure_130_1(closure_130_2[8]);
          type = obj16.get(provider);
          if (null == type) {
            const obj5 = { errorCode: closure_130_9.INVALID_PROVIDER };
            const _HermesInternal = HermesInternal;
            const self9 = this;
            const self10 = this;
            const tmp50 = closure_130_1(closure_130_2[9]);
            const tmp502 = new tmp50(obj5, 'Platform not found for provider "' + provider + '"');
            throw tmp502;
          } else if (provider !== closure_130_8.AMAZON_MUSIC) {
            const obj7 = { errorCode: closure_130_9.UNAUTHORIZED_FOR_APPLICATION };
            const self7 = this;
            const self8 = this;
            const tmp44 = new closure_130_1(closure_130_2[9])(obj7, "Command not available for this application");
            throw tmp44;
          } else if (closure_130_10.has(closure_2)) {
            id = closure_130_5.getAccount(null, provider);
            if (null == id) {
              const obj8 = { errorCode: closure_130_9.NO_CONNECTION_FOUND };
              const self5 = this;
              const self6 = this;
              const tmp37 = new closure_130_1(closure_130_2[9])(obj8, "No connection found");
              throw tmp37;
            } else {
              c3 = 2;
              c4 = 1;
              const obj9 = { value: obj6.refreshAccessToken(type.type, id.id), done: false };
              obj6 = closure_130_1(closure_130_2[13]);
              return obj9;
            }
          } else {
            const obj10 = { errorCode: closure_130_9.UNAUTHORIZED_FOR_APPLICATION };
            const self3 = this;
            const self4 = this;
            const tmp19 = new closure_130_1(closure_130_2[9])(obj10, "Command not available for this application");
            throw tmp19;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        access_token = value;
        if (null == access_token) {
          const obj12 = { errorCode: closure_130_9.OAUTH2_ERROR };
          const self = this;
          const self2 = this;
          const tmp12 = new closure_130_1(closure_130_2[9])(
            obj12,
            "Refreshing access token did not return a new access token",
          );
          throw tmp12;
        } else {
          const obj = { access_token };
          c4 = 3;
          const obj13 = { value: obj, done: true };
          return obj13;
        }
      }
    } catch (tmp58) {
      c4 = 3;
      throw tmp58;
    }
  }
});
obj[MAYBE_GET_PROVIDER_ACCESS_TOKEN] = obj3;
let result = size.fileFinishedImporting("modules/rpc/server/commands/providers.tsx");

export default obj;
