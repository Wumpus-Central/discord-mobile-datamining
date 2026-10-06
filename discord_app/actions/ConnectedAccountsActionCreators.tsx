// === Module 6684: ConnectedAccountsActionCreators ===

// Module 6684 (ConnectedAccountsActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5089 */;
import fetchConnectedAccounts from "fetchConnectedAccounts" /* 5572 */;
import postConnectionCallback from "postConnectionCallback" /* 5573 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5447 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, constants, dependencyMap, importDefault;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let _asyncToGenerator = _asyncToGenerator_mod;
({ AbortCodes: hasOwnProperty, Endpoints: metroRequire, FRIEND_SYNC_PLATFORM_TYPES: metroImportDefault, AnalyticEvents: metroImportAll } = Constants);
const tmp3 = new LoggerDefault("ConnectedAccounts");
let closure_9 = tmp3;
let obj = {
  fetch: fetchConnectedAccounts.fetchConnectedAccounts,
  authorize(arg0) {
    let _location;
    let closure_5;
    let closure_6;
    let closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: importDefault, twoWayLinkType: dependencyMap, userCode: _asyncToGenerator, twoWayLink: ConnectedAccountsStore, successRedirect: closure_5, handle: closure_6 } = obj);
    return (async function() {
      let _var;
      let c3;
      let closure_1;
      let closure_2;
      let obj4;
      dependencyMap = tmp;
      const obj5 = { platform_type: _var, location: importDefault };
      const obj8 = tmp4(dependencyMap[6]);
      obj8.track(constants.CONNECTED_ACCOUNT_INITIATED, obj5);
      const _URLSearchParams = URLSearchParams;
      const self = this;
      const self2 = this;
      const result = closure_1_6.CONNECTIONS_AUTHORIZE(_var);
      const str11 = new URLSearchParams();
      if (null != _asyncToGenerator) {
        str11.append("two_way_user_code", tmp51);
      }
      if (null != closure_5) {
        str11.append("success_redirect", tmp15);
      }
      if (null != dependencyMap) {
        str11.append("two_way_link_type", tmp17);
        str11.append("two_way_link", "true");
      } else if (null != ConnectedAccountsStore) {
        const _String = String;
        str11.append("two_way_link", String(tmp18));
      }
      if (null != closure_6) {
        str11.append("handle", tmp22);
      }
      const text = `${tmp48}?`;
      const text1 = `${tmp48}?${str11.toString()}`;
      const HTTP = _var(dependencyMap[4]).HTTP;
      const obj6 = { url: text1, oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError() };
      const get = HTTP.get;
      obj4 = _var(dependencyMap[4]);
      await get(obj6);
      _var = value;
      const url = _var.body.url;
      const tmp38 = _var(dependencyMap[7]);
      _var = url;
      const getCallbackParamsFromURL = tmp38.getCallbackParamsFromURL;
      if (url == null) {
        _var = "";
      }
      const state = getCallbackParamsFromURL(_var).state;
      if (null != state) {
        const result1 = c4.addPendingAuthorizedState(state);
      }
      return _var;
    })();
  },
  callback: postConnectionCallback.postConnectionCallback,
  connect(arg0, arg1, name, location, friend_sync) {
    let obj;
    let obj2;
    let obj5;
    const tmp2 = TrackedHTTPUtilsDefault;
    const request = { url: metroRequire.CONNECTION(arg0, arg1), body: obj, context: { location }, oldFormErrors: true, trackedActionData: obj2, rejectWithError: obj5.rejectWithMigratedError() };
    const put = tmp2.put;
    obj = { name, friend_sync };
    friend_sync = undefined;
    if (friend_sync != null) {
      friend_sync = friend_sync.friend_sync;
    }
    if (friend_sync == null) {
      friend_sync = metroImportDefault.has(arg0);
    }
    obj2 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: { name, friend_sync: metroImportDefault.has(arg0) } };
    ({ name, friend_sync: metroImportDefault.has(arg0) });
    obj5 = HTTPUtils;
    return put(request);
  },
  disconnect(arg0, arg1) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    const del = HTTP.del;
    const obj = { url: metroRequire.CONNECTION(arg0, arg1), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    obj2 = HTTPUtils;
    return del(obj);
  },
  refresh(arg0, arg1) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    const post = HTTP.post;
    const obj = { url: metroRequire.CONNECTION_REFRESH(arg0, arg1), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    obj2 = HTTPUtils;
    return post(obj);
  },
  setVisibility(type, id, inProgressVisibility) {
    const obj = { visibility: 1 === inProgressVisibility };
    return this.update(type, id, obj);
  },
  setMetadataVisibility(type, id, inProgressMetadataVisibility) {
    const obj = { metadata_visibility: 1 === inProgressMetadataVisibility };
    return this.update(type, id, obj);
  },
  setFriendSync(type, id, enabled) {
    const obj = { friend_sync: enabled };
    return this.update(type, id, obj);
  },
  setShowActivity(type, id, show_activity) {
    const platformType = type;
    const showActivity = show_activity;
    let obj = { show_activity };
    const updateResult = this.update(type, id, obj);
    return updateResult.then((result) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "USER_CONNECTION_UPDATE", platformType, id, showActivity };
      obj.dispatch(obj2);
      return result;
    });
  },
  update(arg0, arg1, body) {
    let obj;
    let obj2;
    let obj4;
    const tmp = TrackedHTTPUtilsDefault;
    const request = { url: metroRequire.CONNECTION(arg0, arg1), body, oldFormErrors: true, trackedActionData: obj, rejectWithError: obj4.rejectWithMigratedError() };
    const patch = tmp.patch;
    obj = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: obj2 };
    obj2 = {};
    const merged = Object.assign(body);
    obj4 = HTTPUtils;
    return patch(request);
  },
  joinServer(id, arg1) {
    let closure_1;
    let integrationId;
    let obj4;
    _require = id;
    importDefault = arg1;
    let obj = DispatcherDefault;
    let obj2 = { type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: id, joining: true };
    obj.dispatch(obj2);
    const HTTP = require("HTTPUtils").HTTP;
    let obj3 = { url: closure_6.INTEGRATION_JOIN(id), oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError() };
    const post = HTTP.post;
    obj4 = require("HTTPUtils");
    post(obj3, (ok) => {
      let message;
      const obj = DispatcherDefault;
      const obj2 = { type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId, joining: false };
      obj.dispatch(obj2);
      if (!ok.ok) {
        const obj3 = { type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR", integrationId, error: message };
        message = undefined;
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        if (!ok.hasErr) {
          message = ok.body.message;
        }
        dispatch(obj3);
        if (closure_1 != null) {
          closure_1();
        }
      }
    });
  },
  refreshAccessToken(type, id) {
    let closure_1 = id;
    return (async () => {
      let closure_0;
      let closure_1;
      let obj11;
      if (constants === 2) {
        constants = 3;
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
        let c3;
        try {
          let access_token;
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
              type = tmp4;
              access_token = undefined;
              c3 = 1;
              const HTTP = type(closure_2[4]).HTTP;
              const obj4 = { url: closure_1_6.CONNECTION_ACCESS_TOKEN(type, tmp), oldFormErrors: true, rejectWithError: obj11.rejectWithMigratedError() };
              const get = HTTP.get;
              obj11 = type(closure_2[4]);
              c4 = 2;
              constants = 1;
              const obj6 = { value: get(obj4), done: false };
              return obj6;
            }
          } else if (1 === c4) {
            c3 = 0;
            if (closure_2.body.code === constants.CONNECTION_REVOKED) {
              const obj7 = { type: "USER_CONNECTION_UPDATE", platformType: closure_129_0, id: closure_129_1, revoked: true };
              const obj5 = closure_2(closure_2[11]);
              obj5.dispatch(obj7);
            }
            throw closure_2;
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
            const obj = tmp(closure_2[11]);
            obj.dispatch(obj9);
            c3 = 0;
            constants = 3;
            const obj10 = { value: access_token, done: true };
            return obj10;
          }
        } catch (tmp27) {
          closure_2 = tmp27;
          if (0 === c3) {
            constants = 3;
            throw tmp27;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  linkDispatchAuthCallback(arg0, arg1) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroRequire.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(arg0), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = {};
    const merged = Object.assign(arg1);
    obj3 = HTTPUtils;
    return post(request);
  },
  completeTwoWayLink(body, _location, _location2, body2, arg4) {
    let closure_0 = body;
    let closure_1 = _location;
    let closure_2 = _location2;
    _asyncToGenerator = body;
    let closure_4 = arg4;
    return (async () => {
      let tmp6Result;
      let v3;
      if (null != _location) {
        const obj3 = v3(code[7]);
        const callbackParamsFromURL = obj3.getCallbackParamsFromURL(tmp21);
        const error = callbackParamsFromURL.error;
        const tmp6 = v3;
        if (null == error) {
          const obj5 = { code, state, two_way_link_code: tmp9, token_redirect_uri };
          let c1 = 1;
          v3 = 1;
          const obj6 = { value: tmp6Result.postConnectionCallback(body, obj5), done: false };
          tmp6Result = tmp6(code[8]);
          return obj6;
        } else {
          const obj7 = { error, errorDescription: tmp10 };
          logger.error("Two-way link: missing authorize code", obj7);
        }
      } else {
        logger.error("Two-way link: missing authorize location");
      }
      await "IconComponent";
      return value;
    })();
  },
  sessionHandoff(arg0, state, code, openid_params, iss) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: metroRequire.CONNECTIONS_SESSION_HANDOFF(arg0), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { state, code, openid_params, iss };
    obj3 = HTTPUtils;
    return post(request);
  },
  getHandoffStatus(arg0, state) {
    const str = new URLSearchParams();
    str.append("state", state);
    const result = metroRequire.CONNECTIONS_SESSION_HANDOFF(arg0);
    const combined = "" + result + "?" + str.toString();
    const HTTP = HTTPUtils.HTTP;
    const request = { url: combined, body: { state }, rejectWithError: true };
    return HTTP.get(request);
  }
};
let result = size.fileFinishedImporting("actions/ConnectedAccountsActionCreators.tsx");

export default obj;