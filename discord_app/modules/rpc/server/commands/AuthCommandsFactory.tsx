// discord_app/modules/rpc/server/commands/AuthCommandsFactory.tsx
import Storage3 from "../../../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import DurationsDefault from "../../../../utils/Durations.tsx";
import RPCErrorDefault from "../../RPCError.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import ApplicationRecord from "../../../../records/ApplicationRecord.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants_mod from "../../Constants.tsx";
import Constants_mod2 from "../../../../Constants.tsx";
import LeakyBucket_mod from "../../../../../discord_common/js/packages/leaky-bucket/LeakyBucket.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, map;

let LeakyBucket;
let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
function authorizeWithPrompt() {
  return obj(...arguments);
}
let obj = function _authorizeWithPrompt() {
  obj = _asyncToGenerator(async function (clientId, arg1, redirectUri) {
    let _prompt;
    let c0;
    let c10;
    let c11;
    let c12;
    let c13;
    let c14;
    let c15;
    let c16;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let disableGuildSelect;
    let obj10;
    let obj12;
    let obj19;
    let response_type;
    let closure_1 = arg1;
    if (disableGuildSelect === 2) {
      disableGuildSelect = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (clientId === 1) {
        throw value;
      } else if (clientId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let guildId;
      let channelId;
      try {
        let closure_7;
        let codeChallenge;
        let codeChallengeMethod;
        let state;
        let nonce;
        let pid;
        let signal;
        let closure_17;
        let closure_18;
        let USER_INSTALL;
        let closure_20;
        let disclosures;
        let allAcked;
        let scopes;
        let application;
        let closure_25;
        let closure_26;
        let closure_27;
        let body;
        let parsedPermissions;
        disableGuildSelect = 2;
        const tmp4 = _prompt;
        if (0 === _prompt) {
          if (clientId === 1) {
            disableGuildSelect = 3;
            throw value;
          } else if (clientId === 2) {
            disableGuildSelect = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_8 = tmp;
            closure_7 = tmp4;
            clientId = undefined;
            response_type = undefined;
            redirectUri = undefined;
            codeChallenge = undefined;
            codeChallengeMethod = undefined;
            state = undefined;
            nonce = undefined;
            c7 = undefined;
            c8 = undefined;
            guildId = undefined;
            channelId = undefined;
            _prompt = undefined;
            disableGuildSelect = undefined;
            c13 = undefined;
            pid = undefined;
            signal = undefined;
            c16 = undefined;
            closure_17 = undefined;
            closure_18 = undefined;
            ({ client_id: c0, response_type } = closure_0);
            if (response_type === undefined) {
              response_type = "code";
            }
            ({
              redirect_uri: c2,
              code_challenge: c3,
              code_challenge_method: c4,
              state: c5,
              nonce: c6,
              scope: c7,
              permissions: c8,
              guild_id: c9,
              channel_id: c10,
              prompt: c11,
              disable_guild_select: c12,
              integration_type: c13,
              pid: c14,
              signal: c15,
              isSocketRpcPrivateScope: c16,
            } = closure_0);
            closure_17 = closure_1;
            closure_18 = closure_2;
            USER_INSTALL = undefined;
            closure_20 = undefined;
            disclosures = undefined;
            allAcked = undefined;
            scopes = undefined;
            application = undefined;
            closure_25 = undefined;
            closure_26 = undefined;
            closure_27 = undefined;
            body = undefined;
            parsedPermissions = undefined;
            map = undefined;
            _prompt = 1;
            disableGuildSelect = 1;
            return { value: "Set", done: true };
          }
        } else {
          let createFromServer;
          if (1 === tmp4) {
            if (clientId === 1) {
              disableGuildSelect = 3;
              throw value;
            } else if (clientId === 2) {
              disableGuildSelect = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let aborted;
              if (signal != null) {
                aborted = signal.aborted;
              }
              if (aborted) {
                const obj5 = { errorCode: closure_136_14.UNKNOWN_ERROR };
                const self15 = this;
                const self16 = this;
                const tmp189 = new closure_136_1(closure_136_3[10])(obj5, "Request aborted");
                throw tmp189;
              } else if (null == clientId) {
                const obj6 = { errorCode: closure_136_14.OAUTH2_ERROR };
                const self13 = this;
                const self14 = this;
                const tmp182 = new closure_136_1(closure_136_3[10])(obj6, "No Client ID provided");
                throw tmp182;
              } else {
                const tmp216 = c16;
                if (!tmp216) {
                  if (null != redirectUri) {
                    const obj7 = { errorCode: closure_136_14.OAUTH2_ERROR };
                    const self9 = this;
                    const self10 = this;
                    const tmp131 = new closure_136_1(closure_136_3[10])(
                      obj7,
                      "Redirect URI cannot be used in the RPC OAuth2 Authorization flow",
                    );
                    throw tmp131;
                  }
                }
                scopes = [];
                if (typeof c7 === "string") {
                  const parts = c7.split(" ");
                  scopes = parts.filter((item) => item.length > 0);
                } else {
                  const _Array = Array;
                  if (Array.isArray(c7)) {
                    scopes = c7;
                  }
                }
                if (null == closure_136_8.getCurrentUser()) {
                  const obj8 = { errorCode: closure_136_14.OAUTH2_ERROR };
                  const self11 = this;
                  const self12 = this;
                  const tmp175 = new closure_136_1(closure_136_3[10])(obj8, "Client is not logged in");
                  throw tmp175;
                } else {
                  if (null != c13) {
                    const _Number = Number;
                    USER_INSTALL = Number(c13);
                  } else {
                    function isUserInstallable(integrationTypesConfig) {
                      obj = _undefined(_undefined2[11]);
                      let result = obj.isEmbeddedApplication(integrationTypesConfig);
                      if (result) {
                        let tmp5;
                        if (integrationTypesConfig != null) {
                          integrationTypesConfig = integrationTypesConfig.integrationTypesConfig;
                          if (integrationTypesConfig != null) {
                            tmp5 =
                              integrationTypesConfig[
                                _undefined(undefined, _undefined2[12]).ApplicationIntegrationType.USER_INSTALL
                              ];
                          }
                        }
                        result = null != tmp5;
                      }
                      return result;
                    }
                    application = closure_136_6.getApplication(clientId);
                    if (!isUserInstallable(application)) {
                      nonce = isUserInstallable;
                      let closure_5 = closure_136_7;
                      createFromServer = closure_136_7.createFromServer;
                      _prompt = 3;
                      disableGuildSelect = 1;
                      const obj9 = { value: obj19.fetchApplication(clientId, signal), done: false };
                      obj19 = closure_136_0(closure_136_3[13]);
                      return obj9;
                    }
                  }
                  guildId = 1;
                  const obj11 = {
                    clientId,
                    scopes,
                    responseType: response_type,
                    redirectUri,
                    codeChallenge,
                    codeChallengeMethod,
                    state,
                    integrationType: USER_INSTALL,
                    signal,
                  };
                  const items = [,];
                  const obj21 = closure_136_0(closure_136_3[14]);
                  items[0] = obj21.fetchAuthorization(obj11);
                  const obj23 = closure_136_0(closure_136_3[15]);
                  items[1] = obj23.getDisclosures(clientId);
                  _prompt = 4;
                  disableGuildSelect = 1;
                  const obj13 = { value: all(items), done: false };
                  return obj13;
                }
              }
            }
          } else if (2 === tmp4) {
            guildId = 0;
            body = channelId.body;
            const obj14 = { errorCode: closure_136_14.OAUTH2_ERROR };
            let str3;
            const tmp117 = closure_136_1(closure_136_3[10]);
            if (body != null) {
              str3 = body.message;
            }
            if (!str3) {
              str3 = "Unknown Error";
            }
            const _HermesInternal2 = HermesInternal;
            const self7 = this;
            const self8 = this;
            const tmp1172 = new tmp117(obj14, "OAuth2 Authorization Error: " + str3);
            throw tmp1172;
          } else if (3 === tmp4) {
            if (clientId === 1) {
              disableGuildSelect = 3;
              throw value;
            } else if (clientId === 2) {
              disableGuildSelect = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              const tmp107 = createFromServer(value);
              application = tmp107;
              if (!nonce(tmp107)) {
                USER_INSTALL = closure_136_0(closure_136_3[12]).ApplicationIntegrationType.GUILD_INSTALL;
              }
            }
          } else {
            if (4 === tmp4) {
              if (clientId === 1) {
                disableGuildSelect = 3;
                throw value;
              } else if (clientId === 2) {
                guildId = 0;
                disableGuildSelect = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                closure_25 = value;
                closure_26 = closure_136_4(closure_25, 2);
                closure_20 = closure_26[0];
                closure_27 = closure_26[1];
                disclosures = closure_27.disclosures;
                allAcked = closure_27.allAcked;
                guildId = 0;
                if (_prompt === closure_136_0(closure_136_3[16]).OAuth2Prompts.NONE) {
                  if (null != closure_20) {
                    if (closure_20.authorized) {
                      const tmp31 = allAcked;
                      if (tmp31) {
                        guildId = 2;
                        const obj17 = {
                          authorize: true,
                          clientId,
                          scopes,
                          responseType: response_type,
                          redirectUri,
                          codeChallenge,
                          codeChallengeMethod,
                          state,
                          nonce,
                          integrationType: USER_INSTALL,
                        };
                        _prompt = 6;
                        disableGuildSelect = 1;
                        const obj18 = { value: obj12.authorize(obj17), done: false };
                        obj12 = closure_136_0(closure_136_3[14]);
                        return obj18;
                      }
                    }
                  }
                }
                if (closure_18 != null) {
                  tmp33(closure_20.application, channelId, pid);
                }
                parsedPermissions = closure_136_2(closure_136_3[17]).NONE;
                guildId = 3;
                codeChallenge = c8;
                const deserialize = closure_136_2(closure_136_3[18]).deserialize;
                const tmp47 = closure_136_2(closure_136_3[18]);
                if (c8 == null) {
                  codeChallenge = 0;
                }
                parsedPermissions = deserialize(codeChallenge);
                guildId = 0;
              }
            } else if (5 === tmp4) {
              guildId = 0;
              body = channelId.body;
              const obj20 = { errorCode: closure_136_14.OAUTH2_ERROR };
              let str2;
              const tmp21 = closure_136_1(closure_136_3[10]);
              if (body != null) {
                str2 = body.message;
              }
              if (!str2) {
                str2 = "Unknown Error";
              }
              const _HermesInternal = HermesInternal;
              const self3 = this;
              const self4 = this;
              const tmp2111 = new tmp21(obj20, "OAuth2 Authorize Error: " + str2);
              throw tmp2111;
            } else if (6 === tmp4) {
              if (clientId === 1) {
                disableGuildSelect = 3;
                throw value;
              } else if (clientId === 2) {
                guildId = 0;
                disableGuildSelect = 3;
                const obj22 = { value, done: true };
                return obj22;
              } else {
                guildId = 0;
                disableGuildSelect = 3;
                const obj24 = { value: value.location, done: true };
                return obj24;
              }
            } else {
              if (7 === tmp4) {
                guildId = 0;
              } else if (clientId === 1) {
                disableGuildSelect = 3;
                throw value;
              } else if (clientId === 2) {
                disableGuildSelect = 3;
                const obj25 = { value, done: true };
                return obj25;
              } else {
                let tmp5 = closure_7;
                let aborted1;
                if (signal != null) {
                  aborted1 = signal.aborted;
                }
                if (aborted1) {
                  obj = { errorCode: closure_136_14.UNKNOWN_ERROR };
                  const self = this;
                  const self2 = this;
                  const tmp12 = new closure_136_1(closure_136_3[10])(obj, "Request aborted");
                  throw tmp12;
                }
              }
              const obj26 = {
                clientId,
                authorizations: map,
                scopes,
                parsedPermissions,
                responseType: response_type,
                redirectUri,
                codeChallenge,
                codeChallengeMethod,
                state,
                guildId,
                channelId,
                prompt: _prompt,
                disableGuildSelect,
                disclosures,
                integrationType: USER_INSTALL,
                pid,
                signal,
              };
              disableGuildSelect = 3;
              const obj27 = { value: closure_17(obj26), done: true };
              return obj27;
            }
            map = undefined;
            let hasItem = null != closure_20.integration_type;
            if (hasItem) {
              const _Object = Object;
              const values = Object.values(closure_136_0(closure_136_3[12]).ApplicationIntegrationType);
              hasItem = values.includes(closure_20.integration_type);
            }
            if (hasItem) {
              const _Map = Map;
              const self5 = this;
              const self6 = this;
              map = new Map();
              let result = map.set(closure_20.integration_type, closure_20);
            }
            if (null != closure_136_16[closure_20.application.id]) {
              _prompt = 8;
              disableGuildSelect = 1;
              const obj28 = { value: obj10.process(), done: false };
              obj10 = closure_136_16[closure_20.application.id];
              return obj28;
            }
          }
          USER_INSTALL = closure_136_0(closure_136_3[12]).ApplicationIntegrationType.USER_INSTALL;
        }
      } catch (tmp193) {
        channelId = tmp193;
        if (0 === guildId) {
          disableGuildSelect = 3;
          throw tmp193;
        } else if (1 === guildId) {
          _prompt = 2;
        } else if (2 === guildId) {
          _prompt = 5;
        } else {
          _prompt = 7;
        }
      }
    }
  });
  return obj(...arguments);
};
function authenticate(authorization, access_token) {
  let obj4;
  _require = authorization;
  importDefault = access_token;
  if (authorization.authorization.accessToken) {
    let obj2 = { errorCode: constants2.INVALID_COMMAND };
    let self3 = this;
    let self4 = this;
    const tmp15 = new RPCErrorDefault(obj2, "Already authenticated");
    throw tmp15;
  } else if (authorization.authorization.authing) {
    let obj3 = { errorCode: constants2.INVALID_COMMAND };
    let self = this;
    let self2 = this;
    const tmp9 = new RPCErrorDefault(obj3, "Already authenticating");
    throw tmp9;
  } else {
    authorization.authorization.authing = true;
    let tmp = _require;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: OAUTH2_CURRENT_AUTH.OAUTH2_CURRENT_AUTH, headers: obj4, oldFormErrors: true, rejectWithError: false };
    obj4 = { Authorization: "Bearer " + access_token };
    const _HermesInternal = HermesInternal;
    const get = HTTP.get;
    const value = get(obj);
    const nextPromise = value.then(
      function (body) {
        let expires;
        let scopes;
        let user;
        authorization.authorization.authing = false;
        body = body.body;
        ({ user, scopes, expires } = body);
        if (authorization.application.id !== body.application.id) {
          const self3 = this;
          const self4 = this;
          const obj2 = { errorCode: constants.INVALID_CLIENTID };
          const tmp13 = new RPCErrorDefault(obj2, "Application does not match the connection's");
          throw tmp13;
        } else {
          const currentUser = UserStore.getCurrentUser();
          if (null != currentUser) {
            if (user) {
              if (currentUser.id === user.id) {
                const items = [];
                items[
                  HermesBuiltin.arraySpread(
                    items,
                    scopes,
                    HermesBuiltin.arraySpread(items, authorization.authorization.scopes, 0),
                  )
                ] = authStore;
                authorization.authorization.scopes = items;
                authorization.authorization.accessToken = access_token;
                const _Date = Date;
                const self5 = this;
                const self6 = this;
                authorization = tmp2.authorization;
                authorization.expires = new Date(expires);
                const obj5 = { type: "RPC_APP_AUTHENTICATED", socketId: null, application: null };
                ({ id: obj4.socketId, application: obj4.application } = authorization);
                const date = new Date(expires);
                const obj3 = DispatcherDefault;
                obj3.dispatch(obj5);
                const obj8 = { access_token };
                const merged = Object.assign(body.body);
                return obj8;
              }
            }
          }
          const self = this;
          const self2 = this;
          obj = { errorCode: constants.INVALID_TOKEN };
          const tmp7 = new RPCErrorDefault(obj, "Token does not match current user");
          throw tmp7;
        }
      },
      () => {
        obj = { errorCode: constants.INVALID_TOKEN };
        const tmp = RPCErrorDefault;
        const tmp2 = new tmp(obj, "Invalid access token: " + access_token);
        throw tmp2;
      },
    );
    return nextPromise.catch((error) => {
      authorization.authorization.authing = false;
      throw error;
    });
  }
}
let Constants = Constants_mod2;
({ TransportTypes: c9, RPC_AUTHENTICATED_SCOPE: c10, RPC_PRIVATE_SCOPE: unpackModuleId } = Constants);
Constants = Constants_mod2;
({ Endpoints: closure_12, RPCCommands: map1, RPCErrors: closure_14 } = Constants);
const CachedTokens = "CachedTokens";
obj = { "1273616940451102832": new LeakyBucket(2, DurationsDefault.Millis.MINUTE) };
LeakyBucket = LeakyBucket_mod;
new LeakyBucket(2, DurationsDefault.Millis.MINUTE);
let result = size.fileFinishedImporting("modules/rpc/server/commands/AuthCommandsFactory.tsx");

export default function createAuthCommandHandlers(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  obj = {};
  const AUTHENTICATE = constants.AUTHENTICATE;
  let obj2 = require("CONTEXT_MENU_ICON_NAMES");
  let obj3 = {
    handler(socket) {
      const f152961 = function (result) {
        let access_token;
        let expires_in;
        let scope;
        if (null == result) {
          const self3 = this;
          const self4 = this;
          obj = { errorCode: constants2.UNKNOWN_ERROR };
          const tmp18 = new closure_1(dependencyMap[10])(obj, "Unknown error occurred");
          throw tmp18;
        } else {
          const parts = result.split(/#|\?/);
          const obj5 = closure_1(dependencyMap[23]);
          const parsed = obj5.parse(parts[parts.length - 1]);
          if (null != parsed.error) {
            let str = parsed.error_description;
            const error = parsed.error;
            const obj2 = { errorCode: constants2.OAUTH2_ERROR };
            const tmp8 = closure_1(dependencyMap[10]);
            if (str == null) {
              str = "unknown error";
            }
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const tmp82 = new tmp8(obj2, "OAuth2 Error: " + error + ": " + str);
            throw tmp82;
          } else {
            ({ access_token, scope, expires_in } = parsed);
            const Storage2 = closure_0(dependencyMap[9]).Storage;
            let obj3 = Storage2.get(CachedTokens);
            if (obj3 == null) {
              obj3 = {};
            }
            const _Date = Date;
            obj3[id] = { accessToken: access_token, scope, expires: Date.now() + expires_in };
            const obj4 = { accessToken: access_token, scope, expires: Date.now() + expires_in };
            const Storage = closure_0(dependencyMap[9]).Storage;
            result = Storage.set(CachedTokens, obj3);
            return authenticate(socket, parsed.access_token);
          }
        }
      };
      socket = socket.socket;
      const signal = socket.signal;
      const access_token = socket.args.access_token;
      let id;
      let IDENTIFY;
      let _authorize;
      if (null == access_token) {
        if (socket.transport === constants.IPC) {
          id = socket.application.id;
          if (null == id) {
            let obj2 = { errorCode: constants2.INVALID_COMMAND };
            let self3 = this;
            let self4 = this;
            const tmp23 = new closure_1(dependencyMap[10])(obj2, "No application.");
            throw tmp23;
          } else {
            let catchPromise;
            IDENTIFY = closure_0(dependencyMap[22]).OAuth2Scopes.IDENTIFY;
            _authorize = function _authorize() {};
            let Storage2 = closure_0(dependencyMap[9]).Storage;
            const value = Storage2.get(CachedTokens);
            let accessToken;
            if (null != value) {
              if (null != value[id]) {
                if (value[id].scope === IDENTIFY) {
                  let _Date = Date;
                  if (value[id].expires > Date.now()) {
                    accessToken = tmp10.accessToken;
                  }
                }
                delete tmp29[id];
                let Storage = closure_0(dependencyMap[9]).Storage;
                let result = Storage.set(CachedTokens, value);
              }
            }
            if (null != accessToken) {
              const promise2 = authenticate(socket, accessToken);
              catchPromise = promise2.catch(() => {
                let Storage = Storage3.Storage;
                let obj2 = Storage.get(CachedTokens);
                if (obj2 == null) {
                  obj2 = {};
                }
                delete obj[id];
                let Storage2 = Storage3.Storage;
                let result = Storage2.set(CachedTokens, obj2);
                if (typeof _authorize === "function") {
                  let obj3 = {
                    client_id: id,
                    scope: IDENTIFY,
                    response_type: "token",
                    signal,
                    isSocketRpcPrivateScope: false,
                  };
                  const promise = authorizeWithPrompt(obj3, closure_0, closure_1);
                  return promise.then(f152961);
                } else {
                  let str = "Trying to call a non-function";
                  throw new TypeError("Trying to call a non-function");
                }
              });
            } else {
              let obj3 = {
                client_id: id,
                scope: IDENTIFY,
                response_type: "token",
                signal,
                isSocketRpcPrivateScope: false,
              };
              let promise = authorizeWithPrompt(obj3, socket, signal);
              catchPromise = promise.then(f152961);
            }
            return catchPromise;
          }
        }
      }
      if (null == access_token) {
        obj = { errorCode: constants2.INVALID_TOKEN };
        let self = this;
        let str = "No access token provided";
        let self2 = this;
        const tmp7 = new closure_1(dependencyMap[10])(obj, "No access token provided");
        let tmp8 = tmp7;
        throw tmp7;
      } else {
        return authenticate(socket, access_token);
      }
    },
  };
  obj[AUTHENTICATE] = obj2.createRPCCommand(constants.AUTHENTICATE, obj3);
  obj[constants.AUTHORIZE] = {
    handler(socket) {
      socket = socket.socket;
      const args = socket.args;
      let hasItem;
      const client_id = args.client_id;
      if (client_id) {
        if (null != socket.authorization.accessToken) {
          let obj2 = { errorCode: constants.INVALID_COMMAND };
          const self9 = this;
          const self10 = this;
          const tmp38 = new RPCErrorDefault(obj2, "Already authenticated");
          throw tmp38;
        } else if (socket.authorization.authing) {
          const obj3 = { errorCode: constants.INVALID_COMMAND };
          let self7 = this;
          let str5 = "Already authing";
          let self8 = this;
          const tmp32 = new RPCErrorDefault(obj3, "Already authing");
          throw tmp32;
        } else {
          socket.authorization.authing = true;
          if ("token" === args.response_type) {
            socket.authorization.authing = false;
            let obj4 = { errorCode: constants.INVALID_COMMAND };
            let self5 = this;
            let self6 = this;
            const tmp26 = new RPCErrorDefault(obj4, 'Authorization response_type "token" is not supported');
            throw tmp26;
          } else {
            const scopes = socket.authorization.scopes;
            hasItem = scopes.includes(unpackModuleId);
            if (!hasItem) {
              if (socket.application.id !== client_id) {
                socket.authorization.authing = false;
                let obj5 = { errorCode: constants.INVALID_CLIENTID };
                let self3 = this;
                let self4 = this;
                const tmp13 = new RPCErrorDefault(obj5, "Application does not match the connection's");
                throw tmp13;
              }
            }
            const tmp15 = args.scopes || args.scope;
            delete args["scopes"];
            const obj6 = { scope: tmp15, signal: tmp, isSocketRpcPrivateScope: hasItem };
            const merged = Object.assign(args);
            const promise = authorizeWithPrompt(obj6, closure_0, closure_1);
            const nextPromise = promise.then(function (location) {
              socket.authorization.authing = false;
              if (null == location) {
                const self5 = this;
                const self6 = this;
                const obj2 = { errorCode: constants.UNKNOWN_ERROR };
                const tmp19 = new closure_2_1(closure_2_3[10])(obj2, "Unknown error occurred");
                throw tmp19;
              } else {
                const _URL = URL;
                const self7 = this;
                const self8 = this;
                const uRL = new URL(location);
                const searchParams3 = uRL.searchParams;
                const value = searchParams3.get("code");
                if (hasItem) {
                  return { code: value, location };
                } else {
                  const searchParams = uRL.searchParams;
                  const value2 = searchParams.get("error");
                  if (null != value2) {
                    if ("" !== value2) {
                      const searchParams2 = uRL.searchParams;
                      let str5 = searchParams2.get("error_description");
                      if (str5 == null) {
                        str5 = "unknown error";
                      }
                      const _HermesInternal = HermesInternal;
                      const self3 = this;
                      const self4 = this;
                      const obj4 = { errorCode: constants.OAUTH2_ERROR };
                      const tmp10 = closure_2_1(closure_2_3[10]);
                      const tmp102 = new tmp10(obj4, "OAuth2 Error: " + value2 + ": " + str5);
                      throw tmp102;
                    }
                  }
                  if (null == value) {
                    const self = this;
                    const self2 = this;
                    const obj5 = { errorCode: constants.OAUTH2_ERROR };
                    const tmp6 = new closure_2_1(closure_2_3[10])(obj5, "OAuth2 Error: Unable to find auth code");
                    throw tmp6;
                  } else {
                    return { code: value };
                  }
                }
              }
            });
            return nextPromise.catch((error) => {
              socket.authorization.authing = false;
              throw error;
            });
          }
        }
      } else {
        obj = { errorCode: constants.INVALID_CLIENTID };
        let self = this;
        let self2 = this;
        let tmp6 = new RPCErrorDefault(obj, "No client id provided");
        throw tmp6;
      }
    },
  };
  return obj;
}
export const AUTHORIZE_PROMPT_THROTTLERS = obj;
