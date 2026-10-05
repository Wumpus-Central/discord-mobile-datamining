// discord_app/modules/oauth2/actions.tsx
import utils_PathUtils from "../../../discord_common/js/shared/utils/PathUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AuthenticationActionCreatorsDefault from "../../actions/AuthenticationActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
function getLocationContextServer() {
  let str2;
  let type;
  const basicChannel = ChannelStore.getBasicChannel(SelectedChannelStore.getChannelId());
  let str;
  if (basicChannel != null) {
    str = basicChannel.guild_id;
  }
  if (str == null) {
    str = "10000";
  }
  obj = { guild_id: str, channel_id: str2, channel_type: type };
  str2 = undefined;
  if (basicChannel != null) {
    str2 = basicChannel.id;
  }
  if (str2 == null) {
    str2 = "10000";
  }
  type = undefined;
  if (basicChannel != null) {
    type = basicChannel.type;
  }
  if (type == null) {
    type = metroRequire.UNKNOWN;
  }
  return obj;
}
let obj = function _authorize() {
  obj = _asyncToGenerator(async (authorize) => {
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
    let obj3;
    let obj6;
    let obj7;
    let redirect_uri;
    let response_type;
    let tmp11;
    let tmp7;
    if (redirect_uri === 2) {
      redirect_uri = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (authorize === 1) {
        throw value;
      } else if (authorize === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let client_id;
        let code_challenge;
        let code_challenge_method;
        let state;
        let permissions;
        let guild_id;
        let integration_type;
        let connected_account_provider;
        let nonce;
        redirect_uri = 2;
        if (0 === response_type) {
          if (authorize === 1) {
            redirect_uri = 3;
            throw value;
          } else if (authorize === 2) {
            redirect_uri = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            authorize = undefined;
            client_id = undefined;
            c2 = undefined;
            code_challenge = undefined;
            code_challenge_method = undefined;
            state = undefined;
            permissions = undefined;
            guild_id = undefined;
            c10 = undefined;
            integration_type = undefined;
            connected_account_provider = undefined;
            nonce = undefined;
            ({
              authorize: c0,
              clientId: c1,
              scopes: c2,
              responseType: c3,
              redirectUri: c4,
              codeChallenge: c5,
              codeChallengeMethod: c6,
              state: c7,
              permissions: c8,
              guildId: c9,
              channelId: c10,
              integrationType: c11,
              connectedAccountProvider: c12,
              nonce: c13,
            } = closure_0);
            response_type = 1;
            redirect_uri = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === response_type) {
          if (authorize === 1) {
            redirect_uri = 3;
            throw value;
          } else if (authorize === 2) {
            redirect_uri = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const HTTP = closure_130_0(closure_130_2[4]).HTTP;
            const request = {
              url: closure_130_7.OAUTH2_AUTHORIZE,
              query: obj6,
              body: obj7,
              oldFormErrors: true,
              rejectWithError: obj3.rejectWithMigratedError(),
            };
            obj6 = {
              client_id,
              response_type,
              redirect_uri,
              code_challenge,
              code_challenge_method,
              scope: c2.join(" "),
              state,
              nonce,
            };
            const post = HTTP.post;
            obj7 = {
              guild_id,
              webhook_channel_id: tmp7,
              channel_id: tmp11,
              permissions,
              authorize,
              integration_type,
              connected_account_provider,
              location_context: closure_130_8(),
            };
            tmp7 = undefined;
            if (null != guild_id) {
              if (null != c10) {
                tmp7 = c10;
              }
            }
            tmp11 = undefined;
            if (null == guild_id) {
              if (null != c10) {
                tmp11 = c10;
              }
            }
            obj3 = closure_130_0(closure_130_2[4]);
            response_type = 2;
            redirect_uri = 1;
            const obj8 = { value: post(request), done: false };
            return obj8;
          }
        } else if (authorize === 1) {
          redirect_uri = 3;
          throw value;
        } else if (authorize === 2) {
          redirect_uri = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          redirect_uri = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp24) {
        redirect_uri = 3;
        throw tmp24;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchAuthorization() {
  obj = _asyncToGenerator(async (client_id) => {
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
    let code_challenge;
    let obj5;
    let obj9;
    let redirect_uri;
    if (code_challenge === 2) {
      code_challenge = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (client_id === 1) {
        throw value;
      } else if (client_id === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let response_type;
        let code_challenge_method;
        let state;
        let integration_type;
        let connected_account_provider;
        let nonce;
        let signal;
        code_challenge = 2;
        if (0 === redirect_uri) {
          if (client_id === 1) {
            code_challenge = 3;
            throw value;
          } else if (client_id === 2) {
            code_challenge = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            client_id = undefined;
            response_type = undefined;
            code_challenge_method = undefined;
            state = undefined;
            integration_type = undefined;
            connected_account_provider = undefined;
            nonce = undefined;
            signal = undefined;
            ({
              clientId: c0,
              scopes: c1,
              responseType: c2,
              redirectUri: c3,
              codeChallenge: c4,
              codeChallengeMethod: c5,
              state: c6,
              integrationType: c7,
              connectedAccountProvider: c8,
              nonce: c9,
              signal: c10,
            } = closure_0);
            redirect_uri = 1;
            code_challenge = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === redirect_uri) {
          if (client_id === 1) {
            code_challenge = 3;
            throw value;
          } else if (client_id === 2) {
            code_challenge = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const HTTP = closure_130_0(closure_130_2[4]).HTTP;
            const request = {
              url: closure_130_7.OAUTH2_AUTHORIZE,
              query: obj5,
              signal,
              retries: 3,
              oldFormErrors: true,
              rejectWithError: obj9.rejectWithMigratedError(),
            };
            obj5 = {
              client_id,
              response_type,
              redirect_uri,
              code_challenge,
              code_challenge_method,
              scope: tmp.join(" "),
              state,
              integration_type,
              connected_account_provider,
              nonce,
            };
            const get = HTTP.get;
            obj9 = closure_130_0(closure_130_2[4]);
            redirect_uri = 2;
            code_challenge = 1;
            const obj6 = { value: get(request), done: false };
            return obj6;
          }
        } else if (client_id === 1) {
          code_challenge = 3;
          throw value;
        } else if (client_id === 2) {
          code_challenge = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          code_challenge = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp5) {
        code_challenge = 3;
        throw tmp5;
      }
    }
  });
  return obj(...arguments);
};
obj = function _startSamsungAuthorization() {
  obj = _asyncToGenerator(async (client_id, arg1, response_type, redirect_uri, state) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c5 = 0;
    return (async (arg0, value, arg2, arg3, arg4) => {
      let obj4;
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              const HTTP = HTTPUtils.HTTP;
              const request = {
                url: closure_2_7.OAUTH2_AUTHORIZE_SAMSUNG,
                query: obj4,
                rejectWithError: obj7.rejectWithMigratedError(),
              };
              const get = HTTP.get;
              obj4 = { client_id, state, response_type, redirect_uri, prompt: "consent", scope: closure_1.join(" ") };
              c6 = 1;
              c5 = 1;
              obj7 = HTTPUtils;
              const obj5 = { value: get(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          c5 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchChannels() {
  obj = _asyncToGenerator(async (guild_id) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let obj4;
      let obj8;
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: closure_2_7.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: obj4,
        oldFormErrors: true,
        rejectWithError: obj8.rejectWithMigratedError(),
      };
      const get = HTTP.get;
      obj4 = { guild_id };
      obj8 = HTTPUtils;
      await get(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
obj = function _verifyUserCode() {
  let OAUTH2_DEVICE_VERIFY;
  obj = _asyncToGenerator(async (user_code) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let obj4;
      let obj8;
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: OAUTH2_DEVICE_VERIFY.OAUTH2_DEVICE_VERIFY,
        body: obj4,
        rejectWithError: obj8.rejectWithMigratedError(),
      };
      const post = HTTP.post;
      obj4 = { user_code };
      obj8 = HTTPUtils;
      await post(request);
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _finishUserCode() {
  let OAUTH2_DEVICE_FINISH;
  obj = _asyncToGenerator(async (user_code, result) => {
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      let obj8;
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: OAUTH2_DEVICE_FINISH.OAUTH2_DEVICE_FINISH,
        body: obj4,
        rejectWithError: obj8.rejectWithMigratedError(),
      };
      const post = HTTP.post;
      obj4 = { user_code, result };
      obj8 = HTTPUtils;
      await post(request);
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _finishUserCodeTwoWayLinkError() {
  let OAUTH2_DEVICE_FINISH;
  obj = _asyncToGenerator(async (user_code, error_code, error_source) => {
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      let obj4;
      let obj8;
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: OAUTH2_DEVICE_FINISH.OAUTH2_DEVICE_FINISH,
        body: obj4,
        rejectWithError: obj8.rejectWithMigratedError(),
      };
      const post = HTTP.post;
      obj4 = { user_code, result: "two_way_link_error", error_code, error_source };
      obj8 = HTTPUtils;
      await post(request);
      return value;
    })();
  });
  return obj(...arguments);
};
({ ChannelTypes: metroRequire, Endpoints: metroImportDefault } = Constants);
let result = size.fileFinishedImporting("modules/oauth2/actions.tsx");

export { getLocationContextServer };
export const acceptWhitelist = function acceptWhitelist(token) {
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: metroImportDefault.OAUTH2_WHITELIST_ACCEPT,
    query: obj,
    oldFormErrors: true,
    rejectWithError: obj3.rejectWithMigratedError(),
  };
  const post = HTTP.post;
  obj = { token };
  obj3 = HTTPUtils;
  return post(request);
};
export const authorize = function authorize() {
  return obj(...arguments);
};
export const fetchAuthorization = function fetchAuthorization() {
  return obj(...arguments);
};
export const startSamsungAuthorization = function startSamsungAuthorization() {
  return obj(...arguments);
};
export const fetchChannels = function fetchChannels() {
  return obj(...arguments);
};
export const logoutWithRedirect = function logoutWithRedirect(pathname, TTI_test) {
  const logout = AuthenticationActionCreatorsDefault.logout;
  AuthenticationActionCreatorsDefault;
  obj = utils_PathUtils;
  logout(TTI_test, obj.getLoginPath(pathname.pathname + pathname.search, false));
};
export const verifyUserCode = function verifyUserCode() {
  return obj(...arguments);
};
export const finishUserCode = function finishUserCode() {
  return obj(...arguments);
};
export const finishUserCodeTwoWayLinkError = function finishUserCodeTwoWayLinkError() {
  return obj(...arguments);
};
