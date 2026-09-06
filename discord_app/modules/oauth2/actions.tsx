// discord_app/modules/oauth2/actions.tsx
import utils_PathUtils from "../../../discord_common/js/shared/utils/PathUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AuthenticationActionCreatorsDefault from "../../actions/AuthenticationActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

require = fn;
function getLocationContextServer() {
  const basicChannel = ChannelStore.getBasicChannel(SelectedChannelStore.getChannelId());
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
  obj.channel_id = str2;
  let type;
  if (basicChannel != null) {
    type = basicChannel.type;
  }
  if (type == null) {
    type = constants.UNKNOWN;
  }
  obj.channel_type = type;
  return obj;
}
let closure_9 = async function _authorize(arg0) {
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
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          closure_129_11 = undefined;
          closure_129_12 = undefined;
          closure_129_13 = undefined;
          ({
            authorize: closure_129_0,
            clientId: closure_129_1,
            scopes: closure_129_2,
            responseType: closure_129_3,
            redirectUri: closure_129_4,
            codeChallenge: closure_129_5,
            codeChallengeMethod: closure_129_6,
            state: closure_129_7,
            permissions: closure_129_8,
            guildId: closure_129_9,
            channelId: closure_129_10,
            integrationType: closure_129_11,
            connectedAccountProvider: closure_129_12,
            nonce: closure_129_13,
          } = closure_0);
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
          const HTTP = closure_130_0(closure_130_2[4]).HTTP;
          const request = {
            url: closure_130_7.OAUTH2_AUTHORIZE,
            query: null,
            body: null,
            oldFormErrors: true,
            rejectWithError: null,
          };
          let obj2 = {
            client_id: closure_129_1,
            response_type: closure_129_3,
            redirect_uri: closure_129_4,
            code_challenge: closure_129_5,
            code_challenge_method: closure_129_6,
            scope: closure_129_2.join(" "),
            state: closure_129_7,
            nonce: closure_129_13,
          };
          request.query = obj2;
          const obj3 = {
            guild_id: closure_129_9,
            webhook_channel_id: null,
            channel_id: null,
            permissions: null,
            authorize: null,
            integration_type: null,
            connected_account_provider: null,
            location_context: null,
          };
          let tmp8;
          if (null != closure_129_9) {
            if (null != closure_129_10) {
              tmp8 = closure_129_10;
            }
          }
          obj3.webhook_channel_id = tmp8;
          let tmp12;
          if (null == closure_129_9) {
            if (null != closure_129_10) {
              tmp12 = closure_129_10;
            }
          }
          obj3.channel_id = tmp12;
          obj3.permissions = closure_129_8;
          obj3.authorize = closure_129_0;
          obj3.integration_type = closure_129_11;
          obj3.connected_account_provider = closure_129_12;
          obj3.location_context = closure_130_8();
          request.body = obj3;
          obj2 = closure_130_0(closure_130_2[4]);
          request.rejectWithError = obj2.rejectWithMigratedError();
          c3 = 2;
          c4 = 1;
          const obj4 = { value: HTTP.post(request), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c4 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp25) {
      c4 = tmp;
      throw tmp25;
    }
  }
};
let closure_10 = async function _fetchAuthorization(arg0) {
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
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          ({
            clientId: closure_129_0,
            scopes: closure_129_1,
            responseType: closure_129_2,
            redirectUri: closure_129_3,
            codeChallenge: closure_129_4,
            codeChallengeMethod: closure_129_5,
            state: closure_129_6,
            integrationType: closure_129_7,
            connectedAccountProvider: closure_129_8,
            nonce: closure_129_9,
            signal: closure_129_10,
          } = closure_0);
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
          const HTTP = closure_130_0(closure_130_2[4]).HTTP;
          const request = {
            url: closure_130_7.OAUTH2_AUTHORIZE,
            query: null,
            signal: null,
            retries: 3,
            oldFormErrors: true,
            rejectWithError: null,
          };
          const obj2 = {
            client_id: closure_129_0,
            response_type: closure_129_2,
            redirect_uri: closure_129_3,
            code_challenge: closure_129_4,
            code_challenge_method: closure_129_5,
            scope: closure_129_1.join(" "),
            state: closure_129_6,
            integration_type: closure_129_7,
            connected_account_provider: closure_129_8,
            nonce: closure_129_9,
          };
          request.query = obj2;
          request.signal = closure_129_10;
          request.rejectWithError = closure_130_0(closure_130_2[4]).rejectWithMigratedError();
          c3 = 2;
          c4 = 1;
          const obj3 = { value: HTTP.get(request), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c4 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp6) {
      c4 = tmp;
      throw tmp6;
    }
  }
};
let closure_11 = async function _startSamsungAuthorization() {
  closure_1 = arg1;
  c6 = 0;
  c5 = 0;
  return (async (arg0, value, arg2, arg3, arg4) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c5 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_7.OAUTH2_AUTHORIZE_SAMSUNG, query: null, rejectWithError: null };
            const obj1 = {
              client_id,
              state,
              response_type,
              redirect_uri,
              prompt: "consent",
              scope: closure_1.join(" "),
            };
            request.query = obj1;
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c6 = 1;
            c5 = 1;
            const obj2 = { value: HTTP.get(request), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
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
};
let closure_12 = async function _fetchChannels() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: closure_2_7.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
      query: { guild_id },
      oldFormErrors: true,
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    await HTTP.get(request);
    return value.body;
  })();
};
let closure_13 = async function _verifyUserCode() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: OAUTH2_DEVICE_VERIFY.OAUTH2_DEVICE_VERIFY,
      body: { user_code },
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    await HTTP.post(request);
    return value;
  })();
};
let closure_14 = async function _finishUserCode() {
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: OAUTH2_DEVICE_FINISH.OAUTH2_DEVICE_FINISH,
      body: { user_code, result },
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    await HTTP.post(request);
    return value;
  })();
};
let closure_15 = async function _finishUserCodeTwoWayLinkError() {
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: OAUTH2_DEVICE_FINISH.OAUTH2_DEVICE_FINISH,
      body: { user_code, result: "two_way_link_error", error_code, error_source },
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    await HTTP.post(request);
    return value;
  })();
};
const Constants = fn(1074);
({ ChannelTypes: metroRequire, Endpoints: closure_7 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/oauth2/actions.tsx");

export { getLocationContextServer };
export const acceptWhitelist = function acceptWhitelist(token) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: React5.OAUTH2_WHITELIST_ACCEPT,
    query: { token },
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.post(request);
};
export const authorize = function authorize() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAuthorization = function fetchAuthorization() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const startSamsungAuthorization = function startSamsungAuthorization() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchChannels = function fetchChannels() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const logoutWithRedirect = function logoutWithRedirect(pathname, TTI_test) {
  const obj = AuthenticationActionCreatorsDefault;
  obj.logout(TTI_test, utils_PathUtils.getLoginPath(pathname.pathname + pathname.search, false));
};
export const verifyUserCode = function verifyUserCode() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const finishUserCode = function finishUserCode() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const finishUserCodeTwoWayLinkError = function finishUserCodeTwoWayLinkError() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
