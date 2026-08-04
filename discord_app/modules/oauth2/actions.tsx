import handleLogout from "handleLogout";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";

let closure_6;
let error;
const require = arg1;
function getLocationContextServer() {
  basicChannel = basicChannel.getBasicChannel(channelId.getChannelId());
  let str;
  if (basicChannel != null) {
    str = basicChannel.guild_id;
  }
  if (str == null) {
    str = "10000";
  }
  const obj = { guild_id: str, channel_id: null, channel_type: null };
  let str2;
  if (basicChannel != null) {
    str2 = basicChannel.id;
  }
  if (str2 == null) {
    str2 = "10000";
  }
  obj[1] = str2;
  let type;
  if (basicChannel != null) {
    type = basicChannel.type;
  }
  if (type == null) {
    type = constants.UNKNOWN;
  }
  obj[2] = type;
  return obj;
}
function _authorize() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
      let c0;
      let c1;
      let c10;
      let c11;
      let c12;
      let c13;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      c1 = tmp2;
      ({ authorize: c0, clientId: c1, scopes: c2, responseType: c3, redirectUri: c4, codeChallenge: c5, codeChallengeMethod: c6, state: c7, permissions: c8, guildId: c9, channelId: c10, integrationType: c11, connectedAccountProvider: c12, nonce: c13 } = callback);
      yield "ct";
      const HTTP = callback(c2[4]).HTTP;
      let obj2 = { url: null, query: null, body: null, oldFormErrors: true, rejectWithError: null };
      obj2[0] = OAUTH2_AUTHORIZE.OAUTH2_AUTHORIZE;
      const obj3 = { client_id: null, response_type: null, redirect_uri: null, code_challenge: null, code_challenge_method: null, scope: null, state: null, nonce: null };
      obj3[0] = c1;
      obj3[1] = c3;
      obj3[2] = c4;
      obj3[3] = c5;
      obj3[4] = c6;
      obj3[5] = c2.join(" ");
      obj3[6] = OAUTH2_AUTHORIZE;
      obj3[7] = c13;
      obj2[1] = obj3;
      const obj4 = { guild_id: null, webhook_channel_id: null, channel_id: null, permissions: null, authorize: null, integration_type: null, connected_account_provider: null, location_context: null };
      obj4[0] = c9;
      if (null != c9) {
        if (null != c10) {
          const tmp8 = c10;
        }
      }
      obj4[1] = tmp8;
      if (null == c9) {
        if (null != c10) {
          const tmp12 = c10;
        }
      }
      obj4[2] = tmp12;
      obj4[3] = callback2;
      obj4[4] = callback;
      obj4[5] = c11;
      obj4[6] = c12;
      obj4[7] = callback2();
      obj2[2] = obj4;
      obj2 = callback(c2[4]);
      obj2[4] = obj2.rejectWithMigratedError();
      yield HTTP.post(obj2);
      return body.body;
    })();
    iter.next();
    return iter;
  });
  const _authorize = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchAuthorization() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
      let c0;
      let c1;
      let c10;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      c1 = tmp2;
      ({ clientId: c0, scopes: c1, responseType: c2, redirectUri: c3, codeChallenge: c4, codeChallengeMethod: c5, state: c6, integrationType: c7, connectedAccountProvider: c8, nonce: c9, signal: c10 } = callback);
      yield "ct";
      const HTTP = callback(530).HTTP;
      const obj2 = { url: null, query: null, signal: null, retries: 3, oldFormErrors: true, rejectWithError: null };
      obj2[0] = OAUTH2_AUTHORIZE.OAUTH2_AUTHORIZE;
      const obj3 = { client_id: null, response_type: null, redirect_uri: null, code_challenge: null, code_challenge_method: null, scope: null, state: null, integration_type: null, connected_account_provider: null, nonce: null };
      obj3[0] = callback;
      obj3[1] = dependencyMap;
      obj3[2] = c3;
      obj3[3] = c4;
      obj3[4] = c5;
      obj3[5] = c1.join(" ");
      obj3[6] = c6;
      obj3[7] = OAUTH2_AUTHORIZE;
      obj3[8] = c8;
      obj3[9] = c9;
      obj2[1] = obj3;
      obj2[2] = c10;
      obj2[5] = callback(530).rejectWithMigratedError();
      yield HTTP.get(obj2);
      return body.body;
    })();
    iter.next();
    return iter;
  });
  const _fetchAuthorization = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _startSamsungAuthorization() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let handleLogout = arg3;
    let ensureGuildLoaded = arg4;
    let c6 = 0;
    let c5 = 0;
    return (function*(arg0, arg1, arg2, arg3, arg4) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, query: null, rejectWithError: null };
              obj1[0] = outer1_7.OAUTH2_AUTHORIZE_SAMSUNG;
              const obj2 = { client_id: null, state: null, response_type: null, redirect_uri: null, prompt: "consent", scope: null };
              obj2[0] = callback;
              obj2[1] = ensureGuildLoaded;
              obj2[2] = dependencyMap;
              obj2[3] = handleLogout;
              obj2[5] = closure_1.join(" ");
              obj1[1] = obj2;
              obj1[2] = callback(530).rejectWithMigratedError();
              c6 = 1;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          c5 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _startSamsungAuthorization = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchChannels() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = outer1_7.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS;
      const obj2 = { guild_id: null };
      obj2[0] = callback;
      obj1[1] = obj2;
      obj1[3] = callback(530).rejectWithMigratedError();
      yield HTTP.get(obj1);
      return body.body;
    })();
  });
  const _fetchChannels = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _verifyUserCode() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = outer1_7.OAUTH2_DEVICE_VERIFY;
      const obj2 = { user_code: null };
      obj2[0] = callback;
      obj1[1] = obj2;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return arg1;
    })();
  });
  const _verifyUserCode = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _finishUserCode() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, arg1) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = outer1_7.OAUTH2_DEVICE_FINISH;
      const obj2 = { user_code: null, result: null };
      obj2[0] = callback;
      obj2[1] = closure_1;
      obj1[1] = obj2;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return arg1;
    })();
  });
  const _finishUserCode = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _finishUserCodeTwoWayLinkError() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, arg1, arg2) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = outer1_7.OAUTH2_DEVICE_FINISH;
      const obj2 = { user_code: null, result: "two_way_link_error", error_code: null, error_source: null };
      obj2[0] = callback;
      obj2[2] = closure_1;
      obj2[3] = dependencyMap;
      obj1[1] = obj2;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return arg1;
    })();
  });
  const _finishUserCodeTwoWayLinkError = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ChannelTypes: closure_6, Endpoints: error } = ME);
const result = require("handleConnectionOpen").fileFinishedImporting("modules/oauth2/actions.tsx");

export { getLocationContextServer };
export const acceptWhitelist = function acceptWhitelist(token) {
  const HTTP = require(530) /* sendRequest */.HTTP;
  obj = { url: obj.OAUTH2_WHITELIST_ACCEPT, query: obj, oldFormErrors: true, rejectWithError: null };
  obj = { token };
  obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};
export const authorize = function authorize() {
  const self = this;
  const apply = _authorize.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAuthorization = function fetchAuthorization(arg0) {
  const self = this;
  const apply = _fetchAuthorization.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const startSamsungAuthorization = function startSamsungAuthorization(closure_0, closure_45, closure_1, arg3, handleConnectionOpen) {
  const self = this;
  const apply = _startSamsungAuthorization.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchChannels = function fetchChannels(closure_0) {
  const self = this;
  const apply = _fetchChannels.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const logoutWithRedirect = function logoutWithRedirect(pathname, login_required_account_manager) {
  const obj = importDefault(5736);
  obj.logout(login_required_account_manager, require(507) /* getAuthenticationPath */.getLoginPath(pathname.pathname + pathname.search, false));
};
export const verifyUserCode = function verifyUserCode(outer1_0) {
  const self = this;
  const apply = _verifyUserCode.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const finishUserCode = function finishUserCode(userCode, denied) {
  const self = this;
  const apply = _finishUserCode.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const finishUserCodeTwoWayLinkError = function finishUserCodeTwoWayLinkError(closure_0, closure_1, closure_2) {
  const self = this;
  const apply = _finishUserCodeTwoWayLinkError.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};