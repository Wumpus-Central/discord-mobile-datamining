// === Module 5625: ConnectedAccountsActionCreators ===

// Module 5625 (ConnectedAccountsActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4950 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5500 */;

const require = globalThis.__r;

require = fn;
function callback(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: timestampProducer.CONNECTIONS_CALLBACK(arg0), body: null, oldFormErrors: true, rejectWithError: null };
  const obj = {};
  const merged = Object.assign(arg1);
  obj.insecure = flag;
  obj.friend_sync = set.has(arg0);
  request.body = obj;
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  return HTTP.post(request);
}
const Constants = fn(1074);
({ AbortCodes: hasOwnProperty, Endpoints: metroRequire, FRIEND_SYNC_PLATFORM_TYPES: closure_7, AnalyticEvents: closure_8 } = Constants);
let closure_9 = new LoggerDefault("ConnectedAccounts");
const size = fn(2);
let result = size.fileFinishedImporting("actions/ConnectedAccountsActionCreators.tsx");

export default {
  fetch() {
    const HTTP = HTTPUtils.HTTP;
    value = HTTP.get({ url: timestampProducer.CONNECTIONS, oldFormErrors: true, rejectWithError: true });
    return value.then((accounts) => DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: accounts.body }), () => DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: [] }));
  },
  authorize(arg0) {
    closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: importDefault, twoWayLinkType: dependencyMap, userCode: asyncGeneratorStep, twoWayLink: ConnectedAccountsStore, successRedirect: closure_5, handle: closure_6 } = obj);
    return (async () => {
      tmp5(tmp2[6]).track(constants.CONNECTED_ACCOUNT_INITIATED, { platform_type, location: _location });
      const _URLSearchParams = URLSearchParams;
      const result = closure_1_6.CONNECTIONS_AUTHORIZE(platform_type);
      const str11 = new URLSearchParams();
      if (null != asyncGeneratorStep) {
        str11.append("two_way_user_code", tmp54);
      }
      if (null != hasOwnProperty) {
        str11.append("success_redirect", tmp16);
      }
      if (null != dependencyMap) {
        str11.append("two_way_link_type", tmp18);
        str11.append("two_way_link", "true");
      } else if (null != ConnectedAccountsStore) {
        const _String = String;
        str11.append("two_way_link", String(tmp19));
      }
      if (null != timestampProducer) {
        str11.append("handle", tmp23);
      }
      const text = `${tmp49}?`;
      const text1 = `${tmp49}?${str11.toString()}`;
      const HTTP = platform_type(tmp2[4]).HTTP;
      const obj6 = { url: text1, oldFormErrors: true, rejectWithError: null };
      tmp5(tmp2[6]);
      obj6.rejectWithError = platform_type(tmp2[4]).rejectWithMigratedError();
      await HTTP.get(obj6);
      closure_129_0 = value;
      const url = closure_129_0.body.url;
      platform_type = url;
      if (url == null) {
        platform_type = "";
      }
      const state = platform_type(tmp2[7]).getCallbackParamsFromURL(platform_type).state;
      if (null != state) {
        const result1 = c4.addPendingAuthorizedState(state);
      }
      return closure_129_0;
    })();
  },
  callback,
  connect(arg0, arg1, name, location, friend_sync) {
    const request = { url: timestampProducer.CONNECTION(arg0, arg1), body: null, context: null, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const obj2 = { name, friend_sync: null };
    friend_sync = undefined;
    if (friend_sync != null) {
      friend_sync = friend_sync.friend_sync;
    }
    if (friend_sync == null) {
      friend_sync = set.has(arg0);
    }
    obj2.friend_sync = friend_sync;
    request.body = obj2;
    request.context = { location };
    const obj3 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: null };
    const obj = TrackedHTTPUtilsDefault;
    obj3.properties = { name, friend_sync: set.has(arg0) };
    request.trackedActionData = obj3;
    const obj4 = { name, friend_sync: set.has(arg0) };
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return obj.put(request);
  },
  disconnect(arg0, arg1) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: timestampProducer.CONNECTION(arg0, arg1), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  refresh(arg0, arg1) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: timestampProducer.CONNECTION_REFRESH(arg0, arg1), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  setVisibility(type, id, inProgressVisibility) {
    return this.update(type, id, { visibility: 1 === inProgressVisibility });
  },
  setMetadataVisibility(type, id, inProgressMetadataVisibility) {
    return this.update(type, id, { metadata_visibility: 1 === inProgressMetadataVisibility });
  },
  setFriendSync(type, id, enabled) {
    return this.update(type, id, { friend_sync: enabled });
  },
  setShowActivity(type, id, show_activity) {
    return this.update(type, id, { show_activity });
  },
  update(arg0, arg1, body) {
    const request = { url: timestampProducer.CONNECTION(arg0, arg1), body, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    const obj2 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: null };
    const merged = Object.assign(body);
    obj2.properties = {};
    request.trackedActionData = obj2;
    const obj = TrackedHTTPUtilsDefault;
    const obj3 = {};
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return obj.patch(request);
  },
  joinServer(id, arg1) {
    _require = id;
    importDefault = arg1;
    DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: id, joining: true });
    const HTTP = require("HTTPUtils").HTTP;
    let obj3 = { url: closure_6.INTEGRATION_JOIN(id), oldFormErrors: true, rejectWithError: null };
    let obj2 = { type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: id, joining: true };
    obj3.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    HTTP.post(obj3, (ok) => {
      DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId, joining: false });
      if (!ok.ok) {
        const obj3 = { type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR", integrationId, error: null };
        let message;
        if (!ok.hasErr) {
          message = ok.body.message;
        }
        obj3.error = message;
        DispatcherDefault.dispatch(obj3);
        if (closure_1 != null) {
          closure_1();
        }
        const tmpResult = DispatcherDefault;
      }
      const obj2 = { type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId, joining: false };
    });
  },
  refreshAccessToken(type, id) {
    closure_1 = id;
    return (async () => {
      if (constants === 2) {
        constants = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          constants = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              type = tmp7;
              let access_token;
              c3 = 1;
              const HTTP = type(tmp30[4]).HTTP;
              const obj4 = { url: closure_1_6.CONNECTION_ACCESS_TOKEN(type, tmp3), oldFormErrors: true, rejectWithError: type(tmp30[4]).rejectWithMigratedError() };
              c4 = 2;
              constants = 1;
              const obj6 = { value: HTTP.get(obj4), done: false };
              return obj6;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp30;
            if (closure_128_1.body.code === constants.CONNECTION_REVOKED) {
              const obj7 = { type: "USER_CONNECTION_UPDATE", platformType: closure_129_0, id: closure_129_1, revoked: true };
              tmp3(tmp30[5]).dispatch(obj7);
              const obj5 = tmp3(tmp30[5]);
            }
            throw closure_128_1;
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            constants = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            access_token = value.body.access_token;
            const obj9 = { type: "USER_CONNECTION_UPDATE", platformType: closure_129_0, id: closure_129_1, accessToken: access_token };
            tmp3(tmp30[5]).dispatch(obj9);
            c3 = 0;
            constants = 3;
            const obj10 = { value: access_token, done: true };
            return obj10;
          }
        } catch (tmp30) {
          if (tmp4 === c3) {
            constants = tmp2;
            throw tmp30;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  linkDispatchAuthCallback(arg0, arg1) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(arg0), body: null, oldFormErrors: true, rejectWithError: null };
    const merged = Object.assign(arg1);
    request.body = {};
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return HTTP.post(request);
  },
  completeTwoWayLink(arg0, location, _location, arg3, arg4) {
    closure_0 = arg0;
    closure_1 = location;
    closure_2 = _location;
    asyncGeneratorStep = arg3;
    closure_4 = arg4;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let obj7 = null;
              if (null != closure_1) {
                const callbackParamsFromURL = v3(code[7]).getCallbackParamsFromURL(closure_1);
                const error = callbackParamsFromURL.error;
                if (obj7 == error) {
                  const obj5 = { code, state, two_way_link_code: tmp10, token_redirect_uri };
                  c1 = 1;
                  v3 = 1;
                  const obj6 = { value: callback(closure_0, obj5), done: false };
                  return obj6;
                } else {
                  obj7 = { error, errorDescription: tmp11 };
                  logger.error("Two-way link: missing authorize code", obj7);
                }
                const obj3 = v3(code[7]);
              } else {
                logger.error("Two-way link: missing authorize location");
              }
              v3 = 3;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp20) {
          v3 = tmp;
          throw tmp20;
        }
      }
    })();
  },
  sessionHandoff(arg0, state, code, openid_params, iss) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: timestampProducer.CONNECTIONS_SESSION_HANDOFF(arg0), body: { state, code, openid_params, iss }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
  },
  getHandoffStatus(arg0, state) {
    const str = new URLSearchParams();
    str.append("state", state);
    const result = timestampProducer.CONNECTIONS_SESSION_HANDOFF(arg0);
    const combined = "" + result + "?" + str.toString();
    const HTTP = HTTPUtils.HTTP;
    const request = { url: combined, body: { state }, rejectWithError: true };
    return HTTP.get(request);
  }
};