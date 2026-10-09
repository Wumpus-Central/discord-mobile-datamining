// === Module 14701: AuthCommandsFactory ===

// Module 14701 (AuthCommandsFactory)
import Storage3 from "Storage" /* 510 */;
import DurationsDefault from "Durations" /* 1102 */;
import RPCErrorDefault from "RPCError" /* 10896 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
import UserStore from "UserStore" /* 1390 */;
import LeakyBucket from "LeakyBucket" /* 10907 */;

const require = globalThis.__r;

require = fn;
function authorizeWithPrompt() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _authorizeWithPrompt(arg0) {
  if (c12 === 2) {
    c12 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
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
      c12 = 2;
      if (0 === c11) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_8 = tmp4;
          closure_7 = tmp10;
          closure_135_0 = undefined;
          closure_135_1 = undefined;
          closure_135_2 = undefined;
          closure_135_3 = undefined;
          closure_135_4 = undefined;
          closure_135_5 = undefined;
          closure_135_6 = undefined;
          closure_135_7 = undefined;
          closure_135_8 = undefined;
          closure_135_9 = undefined;
          closure_135_10 = undefined;
          closure_135_11 = undefined;
          closure_135_12 = undefined;
          closure_135_13 = undefined;
          closure_135_14 = undefined;
          closure_135_15 = undefined;
          closure_135_16 = undefined;
          closure_135_17 = undefined;
          closure_135_18 = undefined;
          ({ client_id: closure_135_0, response_type } = closure_0);
          if (response_type === undefined) {
            response_type = "code";
          }
          closure_135_1 = response_type;
          ({ redirect_uri: closure_135_2, code_challenge: closure_135_3, code_challenge_method: closure_135_4, state: closure_135_5, nonce: closure_135_6, scope: closure_135_7, permissions: closure_135_8, guild_id: closure_135_9, channel_id: closure_135_10, prompt: closure_135_11, disable_guild_select: closure_135_12, integration_type: closure_135_13, pid: closure_135_14, signal: closure_135_15, isSocketRpcPrivateScope: closure_135_16 } = closure_0);
          closure_135_17 = closure_1;
          closure_135_18 = closure_2;
          closure_135_19 = undefined;
          closure_135_20 = undefined;
          let disclosures;
          let allAcked;
          closure_135_23 = undefined;
          let application;
          closure_135_25 = undefined;
          closure_135_26 = undefined;
          closure_135_27 = undefined;
          let body;
          let body2;
          let NONE;
          closure_135_31 = undefined;
          c11 = 1;
          c12 = 1;
          return { value: "Set", done: true };
        }
      } else {
        if (1 === tmp10) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let aborted;
            if (closure_135_15 != null) {
              aborted = closure_135_15.aborted;
            }
            if (aborted) {
              const obj5 = { errorCode: closure_136_14.UNKNOWN_ERROR };
              const tmp211 = new closure_136_1(closure_136_3[10])(obj5, "Request aborted");
              throw tmp211;
            } else if (null == closure_135_0) {
              const obj6 = { errorCode: closure_136_14.OAUTH2_ERROR };
              const tmp202 = new closure_136_1(closure_136_3[10])(obj6, "No Client ID provided");
              throw tmp202;
            } else {
              if (!closure_135_16) {
                if (null != closure_135_2) {
                  const obj7 = { errorCode: closure_136_14.OAUTH2_ERROR };
                  const tmp146 = new closure_136_1(closure_136_3[10])(obj7, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
                  throw tmp146;
                }
              }
              closure_135_23 = [];
              if (typeof closure_135_7 === "string") {
                const parts = closure_135_7.split(" ");
                closure_135_23 = parts.filter((item) => item.length > 0);
              } else {
                const _Array = Array;
                if (Array.isArray(closure_135_7)) {
                  closure_135_23 = closure_135_7;
                }
              }
              if (null == closure_136_8.getCurrentUser()) {
                const obj8 = { errorCode: closure_136_14.OAUTH2_ERROR };
                const tmp193 = new closure_136_1(closure_136_3[10])(obj8, "Client is not logged in");
                throw tmp193;
              } else {
                if (null != closure_135_13) {
                  const _Number = Number;
                  closure_135_19 = Number(closure_135_13);
                } else {
                  closure_135_32 = function isUserInstallable(integrationTypesConfig) {
                    let result = closure_1_0(dependencyMap[11]).isEmbeddedApplication(integrationTypesConfig);
                    if (result) {
                      let tmp5;
                      if (integrationTypesConfig != null) {
                        integrationTypesConfig = integrationTypesConfig.integrationTypesConfig;
                        if (integrationTypesConfig != null) {
                          tmp5 = integrationTypesConfig[closure_1_0(undefined, dependencyMap[12]).ApplicationIntegrationType.USER_INSTALL];
                        }
                      }
                      result = null != tmp5;
                    }
                    return result;
                  };
                  application = closure_136_6.getApplication(closure_135_0);
                  if (!closure_135_32(application)) {
                    ApplicationStore = closure_135_32;
                    closure_5 = closure_136_7;
                    const createFromServer = closure_136_7.createFromServer;
                    c11 = 3;
                    c12 = 1;
                    const obj9 = { value: closure_136_0(closure_136_3[13]).fetchApplication(closure_135_0, closure_135_15), done: false };
                    return obj9;
                  }
                }
                c9 = 1;
                const obj11 = { clientId: closure_135_0, scopes: closure_135_23, responseType: closure_135_1, redirectUri: closure_135_2, codeChallenge: closure_135_3, codeChallengeMethod: closure_135_4, state: closure_135_5, integrationType: closure_135_19, signal: closure_135_15 };
                const items = [closure_136_0(closure_136_3[14]).fetchAuthorization(obj11), ];
                const obj21 = closure_136_0(closure_136_3[14]);
                items[1] = closure_136_0(closure_136_3[15]).getDisclosures(closure_135_0);
                Promise.all(items);
                c11 = 4;
                c12 = 1;
                const obj23 = closure_136_0(closure_136_3[15]);
              }
            }
          }
        } else if (2 === tmp10) {
          c9 = 0;
          body = tmp215.body;
          const obj13 = { errorCode: closure_136_14.OAUTH2_ERROR };
          let str3;
          if (body != null) {
            str3 = body.message;
          }
          if (!str3) {
            str3 = "Unknown Error";
          }
          const _HermesInternal2 = HermesInternal;
          const tmp1282 = new closure_136_1(closure_136_3[10])(obj13, "OAuth2 Authorization Error: " + str3);
          throw tmp1282;
        } else if (3 === tmp10) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            const tmp118 = createFromServer(value);
            application = tmp118;
            if (!ApplicationStore(tmp118)) {
              let USER_INSTALL = closure_136_0(closure_136_3[12]).ApplicationIntegrationType.GUILD_INSTALL;
            }
            closure_135_19 = USER_INSTALL;
          }
        } else {
          if (4 === tmp10) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 0;
              c12 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_135_25 = value;
              closure_135_26 = closure_136_4(closure_135_25, 2);
              closure_135_20 = closure_135_26[0];
              closure_135_27 = closure_135_26[1];
              disclosures = closure_135_27.disclosures;
              allAcked = closure_135_27.allAcked;
              c9 = 0;
              if (closure_135_11 === closure_136_0(closure_136_3[16]).OAuth2Prompts.NONE) {
                if (null != closure_135_20) {
                  if (closure_135_20.authorized) {
                    if (allAcked) {
                      c9 = 2;
                      const obj16 = { authorize: true, clientId: closure_135_0, scopes: closure_135_23, responseType: closure_135_1, redirectUri: closure_135_2, codeChallenge: closure_135_3, codeChallengeMethod: closure_135_4, state: closure_135_5, nonce: closure_135_6, integrationType: closure_135_19 };
                      c11 = 6;
                      c12 = 1;
                      const obj17 = { value: closure_136_0(closure_136_3[14]).authorize(obj16), done: false };
                      return obj17;
                    }
                  }
                }
              }
              if (closure_135_18 != null) {
                tmp43(closure_135_20.application, closure_135_10, closure_135_14);
              }
              NONE = closure_136_2(closure_136_3[17]).NONE;
              c9 = 3;
              const deserializer = closure_136_2(closure_136_3[18]);
              c3 = closure_135_8;
              if (closure_135_8 == null) {
                c3 = 0;
              }
              NONE = deserializer.deserialize(c3);
              c9 = 0;
            }
          } else if (5 === tmp10) {
            c9 = 0;
            body2 = tmp215.body;
            const obj18 = { errorCode: closure_136_14.OAUTH2_ERROR };
            let str2;
            if (body2 != null) {
              str2 = body2.message;
            }
            if (!str2) {
              str2 = "Unknown Error";
            }
            const _HermesInternal = HermesInternal;
            const tmp292 = new closure_136_1(closure_136_3[10])(obj18, "OAuth2 Authorize Error: " + str2);
            throw tmp292;
          } else if (6 === tmp10) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 0;
              c12 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else {
              c9 = 0;
              c12 = 3;
              const obj22 = { value: value.location, done: true };
              return obj22;
            }
          } else {
            if (7 === tmp10) {
              c9 = 0;
            } else if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj24 = { value, done: true };
              return obj24;
            } else {
              let aborted1;
              if (closure_135_15 != null) {
                aborted1 = closure_135_15.aborted;
              }
              if (aborted1) {
                const obj = { errorCode: closure_136_14.UNKNOWN_ERROR };
                const tmp20 = new closure_136_1(closure_136_3[10])(obj, "Request aborted");
                throw tmp20;
              }
            }
            const obj25 = { clientId: closure_135_0, authorizations: closure_135_31, scopes: closure_135_23, parsedPermissions: NONE, responseType: closure_135_1, redirectUri: closure_135_2, codeChallenge: closure_135_3, codeChallengeMethod: closure_135_4, state: closure_135_5, guildId: closure_135_9, channelId: closure_135_10, prompt: closure_135_11, disableGuildSelect: closure_135_12, disclosures, integrationType: closure_135_19, pid: closure_135_14, signal: closure_135_15 };
            c12 = 3;
            const obj26 = { value: closure_135_17(obj25), done: true };
            return obj26;
          }
          closure_135_31 = undefined;
          let hasItem = null != closure_135_20.integration_type;
          if (hasItem) {
            const _Object = Object;
            const values = Object.values(closure_136_0(closure_136_3[12]).ApplicationIntegrationType);
            hasItem = values.includes(closure_135_20.integration_type);
          }
          if (hasItem) {
            const _Map = Map;
            const map = new Map();
            closure_135_31 = map;
            let result = map.set(closure_135_20.integration_type, closure_135_20);
          }
          if (null != closure_136_16[closure_135_20.application.id]) {
            c11 = 8;
            c12 = 1;
            const obj27 = { value: closure_136_16[closure_135_20.application.id].process(), done: false };
            return obj27;
          }
        }
        USER_INSTALL = closure_136_0(closure_136_3[12]).ApplicationIntegrationType.USER_INSTALL;
      }
    } catch (tmp215) {
      if (tmp5 === c9) {
        c12 = tmp3;
        throw tmp215;
      } else if (tmp2 === tmp217) {
        c11 = tmp;
      } else if (tmp === tmp217) {
        c11 = tmp7;
      } else {
        c11 = tmp6;
      }
    }
  }
};
function authenticate() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _authenticate(arg0, arg1) {
  let authorization = arg0;
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
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
            closure_3 = tmp4;
            closure_2 = tmp6;
            closure_130_0 = authorization;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            let body;
            let application;
            let user;
            let scopes2;
            let expires;
            let currentUser;
            if (null != authorization.authorization.accessToken) {
              const obj4 = { errorCode: constants.INVALID_COMMAND };
              const tmp71 = new RPCErrorDefault(obj4, "Already authenticated");
              throw tmp71;
            } else if (authorization.authorization.authing) {
              const obj5 = { errorCode: constants.INVALID_COMMAND };
              const tmp63 = new RPCErrorDefault(obj5, "Already authenticating");
              throw tmp63;
            } else {
              authorization.authorization.authing = true;
              c5 = 2;
              const HTTP = require("HTTPUtils").HTTP;
              const obj6 = { url: OAUTH2_CURRENT_AUTH.OAUTH2_CURRENT_AUTH, headers: null, oldFormErrors: true, rejectWithError: false };
              const obj7 = { Authorization: null };
              const _HermesInternal2 = HermesInternal;
              obj7.Authorization = "Bearer " + tmp128;
              obj6.headers = obj7;
              c6 = 3;
              c7 = 1;
              const obj8 = { value: HTTP.get(obj6), done: false };
              return obj8;
            }
          }
        } else if (1 === tmp9) {
          c5 = 0;
          closure_130_0.authorization.authing = false;
          throw closure_4;
        } else if (2 === tmp9) {
          c5 = 1;
          closure_130_9 = closure_4;
          if (closure_130_9 instanceof closure_131_1(closure_131_3[10])) {
            throw closure_130_9;
          } else {
            const obj9 = { errorCode: closure_131_14.INVALID_TOKEN };
            const _HermesInternal = HermesInternal;
            const tmp412 = new closure_131_1(closure_131_3[10])(obj9, "Invalid access token: " + closure_130_1);
            throw tmp412;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_130_0.authorization.authing = false;
          c7 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_2 = value;
          closure_130_0.authorization.authing = false;
          body = closure_130_2.body;
          application = body.application;
          user = body.user;
          scopes2 = body.scopes;
          expires = body.expires;
          if (closure_130_0.application.id !== application.id) {
            const obj11 = { errorCode: closure_131_14.INVALID_CLIENTID };
            const tmp26 = new closure_131_1(closure_131_3[10])(obj11, "Application does not match the connection's");
            throw tmp26;
          } else {
            currentUser = closure_131_8.getCurrentUser();
            if (null != currentUser) {
              if (null != user) {
                if (currentUser.id === user.id) {
                  const item = scopes2.forEach((item) => {
                    const scopes = authorization.authorization.scopes;
                    return scopes.add(item);
                  });
                  let scopes = closure_130_0.authorization.scopes;
                  scopes.add(closure_131_10);
                  closure_130_0.authorization.accessToken = closure_130_1;
                  const _Date = Date;
                  const date = new Date(expires);
                  closure_130_0.authorization.expires = date;
                  const obj12 = { type: "RPC_APP_AUTHENTICATED", socketId: closure_130_0.id, application: closure_130_0.application };
                  closure_131_1(closure_131_3[20]).dispatch(obj12);
                  const obj14 = { application, user, access_token: closure_130_1, expires, scopes: scopes2 };
                  c5 = 0;
                  closure_130_0.authorization.authing = false;
                  c7 = 3;
                  const obj = { value: obj14, done: true };
                  return obj;
                }
              }
            }
            const obj15 = { errorCode: closure_131_14.INVALID_TOKEN };
            const tmp17 = new closure_131_1(closure_131_3[10])(obj15, "Token does not match current user");
            throw tmp17;
          }
        }
      } catch (tmp73) {
        closure_4 = tmp73;
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp73;
        } else if (tmp2 === tmp75) {
          c6 = tmp2;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let Constants = fn(5636);
({ TransportTypes: closure_9, RPC_AUTHENTICATED_SCOPE: c10, RPC_PRIVATE_SCOPE: closure_11 } = Constants);
Constants = fn(1085);
({ Endpoints: closure_12, RPCCommands: map1, RPCErrors: closure_14 } = Constants);
const CachedTokens = "CachedTokens";
const AUTHORIZE_PROMPT_THROTTLERS = { "1273616940451102832": null };
AUTHORIZE_PROMPT_THROTTLERS["1273616940451102832"] = new LeakyBucket(2, DurationsDefault.Millis.MINUTE);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/AuthCommandsFactory.tsx");

export default function createAuthCommandHandlers(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let obj = {};
  obj[constants.AUTHENTICATE] = require("CONTEXT_MENU_ICON_NAMES").createRPCCommand(constants.AUTHENTICATE, {
    handler(socket) {
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
            const tmp29 = new closure_1(10896)(obj2, "No application.");
            throw tmp29;
          } else {
            IDENTIFY = closure_0(8441).OAuth2Scopes.IDENTIFY;
            _authorize = function _authorize() {

            };
            let Storage2 = closure_0(510).Storage;
            value = Storage2.get(CachedTokens);
            let accessToken;
            if (null != value) {
              if (null != value[id]) {
                if (value[id].scope === IDENTIFY) {
                  let _Date = Date;
                  if (tmp14.expires > Date.now()) {
                    accessToken = tmp14.accessToken;
                  }
                }
                delete tmp[tmp2];
                let Storage = closure_0(510).Storage;
                let result = Storage.set(CachedTokens, value);
              }
            }
            if (null != accessToken) {
              let catchPromise = authenticate(socket, accessToken).catch(() => {
                let Storage = Storage3.Storage;
                let obj = Storage.get(CachedTokens);
                if (obj == null) {
                  obj = {};
                }
                delete tmp2[tmp];
                let Storage2 = Storage3.Storage;
                let result = Storage2.set(CachedTokens, obj);
                if (typeof _authorize === "function") {
                  let obj2 = { client_id: id, scope: IDENTIFY, response_type: "token", signal, isSocketRpcPrivateScope: false };
                  return authorizeWithPrompt(obj2, closure_0, closure_1).then((result) => {
                    if (null == result) {
                      const obj = { errorCode: constants2.UNKNOWN_ERROR };
                      const tmp22 = new closure_1(10896)(obj, "Unknown error occurred");
                      throw tmp22;
                    } else {
                      const parts = result.split(/#|\?/);
                      const parsed = closure_1(1491).parse(parts[parts.length - 1]);
                      if (null != parsed.error) {
                        const obj2 = { errorCode: constants2.OAUTH2_ERROR };
                        let str = parsed.error_description;
                        if (str == null) {
                          str = "unknown error";
                        }
                        const _HermesInternal = HermesInternal;
                        const tmp82 = new closure_1(10896)(obj2, "OAuth2 Error: " + parsed.error + ": " + str);
                        throw tmp82;
                      } else {
                        ({ access_token, scope, expires_in } = parsed);
                        const Storage2 = closure_0(510).Storage;
                        let obj3 = Storage2.get(CachedTokens);
                        if (obj3 == null) {
                          obj3 = {};
                        }
                        const obj4 = { accessToken: access_token, scope, expires: null };
                        const _Date = Date;
                        obj4.expires = Date.now() + expires_in;
                        obj3[id] = obj4;
                        const Storage = closure_0(510).Storage;
                        result = Storage.set(CachedTokens, obj3);
                        return authenticate(socket, parsed.access_token);
                      }
                      const obj5 = closure_1(1491);
                    }
                  });
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
              const promise2 = authenticate(socket, accessToken);
            } else {
              let obj3 = { client_id: id, scope: IDENTIFY, response_type: "token", signal, isSocketRpcPrivateScope: false };
              catchPromise = authorizeWithPrompt(obj3, socket, signal).then((result) => {
                if (null == result) {
                  const obj = { errorCode: constants2.UNKNOWN_ERROR };
                  const tmp22 = new closure_1(10896)(obj, "Unknown error occurred");
                  throw tmp22;
                } else {
                  const parts = result.split(/#|\?/);
                  const parsed = closure_1(1491).parse(parts[parts.length - 1]);
                  if (null != parsed.error) {
                    const obj2 = { errorCode: constants2.OAUTH2_ERROR };
                    let str = parsed.error_description;
                    if (str == null) {
                      str = "unknown error";
                    }
                    const _HermesInternal = HermesInternal;
                    const tmp82 = new closure_1(10896)(obj2, "OAuth2 Error: " + parsed.error + ": " + str);
                    throw tmp82;
                  } else {
                    ({ access_token, scope, expires_in } = parsed);
                    const Storage2 = closure_0(510).Storage;
                    let obj3 = Storage2.get(CachedTokens);
                    if (obj3 == null) {
                      obj3 = {};
                    }
                    const obj4 = { accessToken: access_token, scope, expires: null };
                    const _Date = Date;
                    obj4.expires = Date.now() + expires_in;
                    obj3[id] = obj4;
                    const Storage = closure_0(510).Storage;
                    result = Storage.set(CachedTokens, obj3);
                    return authenticate(socket, parsed.access_token);
                  }
                  const obj5 = closure_1(1491);
                }
              });
              const promise = authorizeWithPrompt(obj3, socket, signal);
            }
            return catchPromise;
          }
        }
      }
      if (null == access_token) {
        let obj = { errorCode: constants2.INVALID_TOKEN };
        const tmp11 = new closure_1(10896)(obj, "No access token provided");
        throw tmp11;
      } else {
        return authenticate(socket, access_token);
      }
    }
  });
  obj[constants.AUTHORIZE] = {
    handler(socket) {
      socket = socket.socket;
      const args = socket.args;
      let hasItem;
      const client_id = args.client_id;
      if (client_id) {
        if (null != socket.authorization.accessToken) {
          let obj2 = { errorCode: constants2.INVALID_COMMAND };
          const tmp50 = new RPCErrorDefault(obj2, "Already authenticated");
          throw tmp50;
        } else if (socket.authorization.authing) {
          let obj3 = { errorCode: constants2.INVALID_COMMAND };
          const tmp42 = new RPCErrorDefault(obj3, "Already authing");
          throw tmp42;
        } else {
          socket.authorization.authing = true;
          if ("token" === args.response_type) {
            socket.authorization.authing = false;
            let obj4 = { errorCode: constants2.INVALID_COMMAND };
            const tmp34 = new RPCErrorDefault(obj4, "Authorization response_type \"token\" is not supported");
            throw tmp34;
          } else {
            const scopes = socket.authorization.scopes;
            hasItem = scopes.has(closure_2_11);
            if (!hasItem) {
              if (socket.application.id !== client_id) {
                socket.authorization.authing = false;
                let obj5 = { errorCode: constants2.INVALID_CLIENTID };
                const tmp19 = new RPCErrorDefault(obj5, "Application does not match the connection's");
                throw tmp19;
              }
            }
            delete tmp2[tmp];
            const obj6 = {};
            const merged = Object.assign(args);
            obj6.scope = args.scopes || args.scope;
            obj6.signal = tmp3;
            obj6.isSocketRpcPrivateScope = hasItem;
            const promise = authorizeWithPrompt(obj6, closure_0, hasItem);
            const tmp21 = args.scopes || args.scope;
            return authorizeWithPrompt(obj6, closure_0, hasItem).then((location) => {
              socket.authorization.authing = false;
              if (null == location) {
                const obj2 = { errorCode: constants2.UNKNOWN_ERROR };
                const tmp25 = new hasItem(10896)(obj2, "Unknown error occurred");
                throw tmp25;
              } else {
                const _URL = URL;
                const uRL = new URL(location);
                const searchParams3 = uRL.searchParams;
                value = searchParams3.get("code");
                if (hasItem) {
                  const obj3 = { code: value, location };
                  return obj3;
                } else {
                  const searchParams = uRL.searchParams;
                  value2 = searchParams.get("error");
                  if (null != value2) {
                    if ("" !== value2) {
                      const searchParams2 = uRL.searchParams;
                      let str5 = searchParams2.get("error_description");
                      if (str5 == null) {
                        str5 = "unknown error";
                      }
                      const obj4 = { errorCode: constants2.OAUTH2_ERROR };
                      const _HermesInternal = HermesInternal;
                      const tmp122 = new hasItem(10896)(obj4, "OAuth2 Error: " + value2 + ": " + str5);
                      throw tmp122;
                    }
                  }
                  if (null == value) {
                    const obj5 = { errorCode: constants2.OAUTH2_ERROR };
                    const tmp8 = new hasItem(10896)(obj5, "OAuth2 Error: Unable to find auth code");
                    throw tmp8;
                  } else {
                    const obj = { code: value };
                    return obj;
                  }
                }
              }
            }).catch((error) => {
              socket.authorization.authing = false;
              throw error;
            });
          }
        }
      } else {
        let obj = { errorCode: constants2.INVALID_CLIENTID };
        const tmp10 = new RPCErrorDefault(obj, "No client id provided");
        throw tmp10;
      }
    }
  };
  return obj;
};
export { AUTHORIZE_PROMPT_THROTTLERS };