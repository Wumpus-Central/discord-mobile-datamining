// discord_app/actions/ConnectedAccountsActionCreators.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import encodeProperties from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import _modDef4679 from "../utils/TrackedHTTPUtils.tsx";
import closure_3 from "../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../stores/ConnectedAccountsStore.tsx";
import ME from "../Constants.tsx";

require = arg1;
function callback(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const HTTP = sendRequest.HTTP;
  let obj = { url: closure_6.CONNECTIONS_CALLBACK(arg0), body: null, oldFormErrors: true, rejectWithError: null };
  obj = {};
  const merged = Object.assign(arg1);
  obj.insecure = flag;
  obj.friend_sync = set.has(arg0);
  obj[1] = obj;
  obj[3] = sendRequest.rejectWithMigratedError();
  return HTTP.post(obj);
}
({ AbortCodes: c5, Endpoints: closure_6, FRIEND_SYNC_PLATFORM_TYPES: error, AnalyticEvents: closure_8 } = ME);
let closure_9 = new timestampDefault("ConnectedAccounts");
let obj = {
  fetch() {
    const HTTP = sendRequest.HTTP;
    const value = HTTP.get({ url: closure_6.CONNECTIONS, oldFormErrors: true, rejectWithError: true });
    return value.then((accounts) => {
      let obj = callback(709);
      obj = { type: "USER_CONNECTIONS_UPDATE", local: true, accounts: accounts.body };
      return obj.dispatch(obj);
    }, () => callback(709).dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: [] }));
  },
  authorize(arg0) {
    closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: importDefault, twoWayLinkType: dependencyMap, userCode: closure_3, twoWayLink: closure_4, successRedirect: closure_5, handle: closure_6 } = obj);
    return callback(function*() {
      closure_2 = tmp2;
      let state = tmp5;
      obj1 = { platform_type: null, location: null };
      obj1[0] = closure_1_0;
      obj1[1] = closure_1_1;
      closure_1_1(closure_1_2[6]).track(closure_1_8.CONNECTED_ACCOUNT_INITIATED, obj1);
      const _URLSearchParams = URLSearchParams;
      const result = closure_1_6.CONNECTIONS_AUTHORIZE(closure_1_0);
      const str11 = new URLSearchParams();
      if (null != c3) {
        str11.append("two_way_user_code", tmp55);
      }
      if (null != closure_1_5) {
        str11.append("success_redirect", tmp16);
      }
      if (null != closure_1_2) {
        str11.append("two_way_link_type", tmp18);
        str11.append("two_way_link", "true");
      } else if (null != c4) {
        const _String = String;
        str11.append("two_way_link", String(tmp19));
      }
      if (null != closure_1_6) {
        str11.append("handle", tmp23);
      }
      const text = `${tmp50}?`;
      const text1 = `${tmp50}?${str11.toString()}`;
      const HTTP = closure_1_0(closure_1_2[4]).HTTP;
      const obj2 = { url: null, oldFormErrors: true, rejectWithError: null };
      obj2[0] = text1;
      const obj3 = closure_1_0(closure_1_2[4]);
      obj2[2] = obj3.rejectWithMigratedError();
      let body = yield HTTP.get(obj2);
      const url = body.body.url;
      body = url;
      if (url == null) {
        body = "";
      }
      state = closure_1_0(closure_1_2[7]).getCallbackParamsFromURL(body).state;
      if (null != state) {
        const result1 = c4.addPendingAuthorizedState(state);
      }
      return body;
    })();
  },
  callback,
  connect(arg0, arg1, name, location, friend_sync) {
    let obj = _modDef4679;
    obj = { url: closure_6.CONNECTION(arg0, arg1), body: null, context: null, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = { name, friend_sync: null };
    friend_sync = undefined;
    if (friend_sync != null) {
      friend_sync = friend_sync.friend_sync;
    }
    if (friend_sync == null) {
      friend_sync = set.has(arg0);
    }
    obj[1] = friend_sync;
    obj[1] = obj;
    obj[2] = { location };
    obj1 = { event: encodeProperties.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: { name, friend_sync: set.has(arg0) } };
    obj[4] = obj1;
    const obj2 = { name, friend_sync: set.has(arg0) };
    obj[5] = sendRequest.rejectWithMigratedError();
    return obj.put(obj);
  },
  disconnect(arg0, arg1) {
    const HTTP = sendRequest.HTTP;
    const obj = { url: closure_6.CONNECTION(arg0, arg1), oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  refresh(arg0, arg1) {
    const HTTP = sendRequest.HTTP;
    const obj = { url: closure_6.CONNECTION_REFRESH(arg0, arg1), oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  setVisibility(type, id, inProgressVisibility) {
    return this.update(type, id, { visibility: 1 === inProgressVisibility });
  },
  setMetadataVisibility(type, id, inProgressMetadataVisibility) {
    return this.update(type, id, { metadata_visibility: 1 === inProgressMetadataVisibility });
  },
  setFriendSync(type, id, closure_0) {
    return this.update(type, id, { friend_sync: closure_0 });
  },
  setShowActivity(type, id, closure_0) {
    return this.update(type, id, { show_activity: closure_0 });
  },
  update(arg0, arg1, body) {
    let obj = _modDef4679;
    obj = { url: closure_6.CONNECTION(arg0, arg1), body, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
    obj = { event: encodeProperties.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: null };
    const merged = Object.assign(body);
    obj[1] = {};
    obj[3] = obj;
    obj[4] = sendRequest.rejectWithMigratedError();
    return obj.patch(obj);
  },
  joinServer(id, arg1) {
    const _require = id;
    importDefault = arg1;
    let obj = dispatcherDefault;
    obj = { type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: id, joining: true };
    obj.dispatch(obj);
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: closure_6.INTEGRATION_JOIN(id), oldFormErrors: true, rejectWithError: require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError() };
    HTTP.post(obj, (ok) => {
      let obj = callback(closure_1_2[5]);
      obj = { type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: closure_0, joining: false };
      obj.dispatch(obj);
      if (!ok.ok) {
        obj = { type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR", integrationId: null, error: null };
        obj[1] = closure_0;
        let message;
        if (!ok.hasErr) {
          message = ok.body.message;
        }
        obj[2] = message;
        callback(closure_1_2[5]).dispatch(obj);
        if (callback != null) {
          callback();
        }
        const tmpResult = callback(closure_1_2[5]);
      }
    });
  },
  refreshAccessToken(type, id) {
    closure_0 = type;
    closure_1 = id;
    return callback(function*() {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          constants = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let lib = tmp3;
              let access_token = tmp7;
              access_token = undefined;
              c3 = 1;
              const HTTP = closure_1_0(closure_1_2[4]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_6.CONNECTION_ACCESS_TOKEN(closure_1_0, lib);
              obj1[2] = closure_1_0(closure_1_2[4]).rejectWithMigratedError();
              c4 = 2;
              constants = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            lib = closure_2;
            if (lib.body.code === constants.CONNECTION_REVOKED) {
              let obj4 = lib(closure_1_2[5]);
              const obj3 = { type: "USER_CONNECTION_UPDATE", platformType: null, id: null, revoked: true };
              obj3[1] = access_token;
              obj3[2] = lib;
              obj4.dispatch(obj3);
            }
            throw lib;
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            constants = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            access_token = arg1.body.access_token;
            obj = lib(closure_1_2[5]);
            const obj5 = { type: "USER_CONNECTION_UPDATE", platformType: null, id: null, accessToken: null };
            obj5[1] = access_token;
            obj5[2] = lib;
            obj5[3] = access_token;
            obj.dispatch(obj5);
            c3 = 0;
            constants = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = access_token;
            return obj6;
          }
        } catch (tmp30) {
          closure_2 = tmp30;
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
    const HTTP = sendRequest.HTTP;
    let obj = { url: closure_6.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(arg0), body: null, oldFormErrors: true, rejectWithError: null };
    obj = {};
    const merged = Object.assign(arg1);
    obj[1] = obj;
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  completeTwoWayLink(closure_1_2, location, closure_0, closure_1_1) {
    closure_0 = closure_1_2;
    closure_1 = location;
    closure_2 = closure_0;
    callback = closure_1_1;
    closure_4 = arg4;
    return callback(function*() {
      if (v0 === 2) {
        v0 = 3;
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
          v0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let obj3 = null;
              if (null != c1) {
                let obj2 = v0(closure_1_2[7]);
                const callbackParamsFromURL = obj2.getCallbackParamsFromURL(tmp13);
                error = callbackParamsFromURL.error;
                if (obj3 == error) {
                  obj1 = { code: null, state: null, two_way_link_code: null, token_redirect_uri: null };
                  obj1[0] = closure_1_2;
                  obj1[1] = closure_1_3;
                  obj1[2] = tmp10;
                  obj1[3] = closure_1_4;
                  c1 = 1;
                  v0 = 1;
                  obj2 = { value: null, done: false };
                  obj2[0] = closure_1_10(v0, obj1);
                  return obj2;
                } else {
                  obj3 = { error: null, errorDescription: null };
                  obj3[0] = error;
                  obj3[1] = tmp11;
                  closure_1_9.error("Two-way link: missing authorize code", obj3);
                }
              } else {
                closure_1_9.error("Two-way link: missing authorize location");
              }
              v0 = 3;
              tmp13 = c1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp20) {
          v0 = tmp;
          throw tmp20;
        }
      }
    })();
  },
  sessionHandoff(arg0, state, code, openid_params, iss) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_6.CONNECTIONS_SESSION_HANDOFF(arg0), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { state, code, openid_params, iss };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  getHandoffStatus(arg0, state) {
    const str = new URLSearchParams();
    str.append("state", state);
    const result = closure_6.CONNECTIONS_SESSION_HANDOFF(arg0);
    const url = "" + result + "?" + str.toString();
    const HTTP = sendRequest.HTTP;
    const body = { state };
    return HTTP.get({ url, body, rejectWithError: true });
  }
};
const tmp3 = new timestampDefault("ConnectedAccounts");
let result = require("set").fileFinishedImporting("actions/ConnectedAccountsActionCreators.tsx");

export default obj;