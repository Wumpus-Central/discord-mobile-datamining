// === Module 11751: SpotifyActionCreators ===

// Module 11751 (SpotifyActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import GameUtilsDefault from "GameUtils" /* 8684 */;
import SpotifyProtocolStore from "SpotifyProtocolStore" /* 11750 */;

require = fn;
function apiRequest(fn, arg1, arg2, headers) {
  closure_0 = fn;
  closure_1 = arg1;
  headers = {};
  const merged = Object.assign(headers);
  headers = { authorization: "Bearer " + arg2 };
  headers.headers = headers;
  const promise = fn(headers);
  return fn(headers).then((status) => {
    let rejectResult = status;
    if (202 === status.status) {
      rejectResult = Promise.reject(status);
    }
    return rejectResult;
  }).catch((error) => {
    let tmp = true !== obj.onlyRetryOnAuthorizationErrors;
    if (tmp) {
      tmp = 202 === error.status;
    }
    if (401 === error.status) {
      if (closure_3 > 0) {
        if (202 === error.status) {
          obj = closure_2_0(closure_2_2[3]);
          let timeoutPromiseResult = obj.timeoutPromise(5000);
        } else {
          timeoutPromiseResult = Promise.resolve();
        }
        let nextPromise = timeoutPromiseResult.then(() => {
          closure_0 = closure_1_1;
          const HTTP = closure_0(obj[4]).HTTP;
          obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, closure_1_1), oldFormErrors: true, rejectWithError: false };
          const value = HTTP.get(obj);
          return value.catch((error) => {
            let body = error.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_2_6.CONNECTION_REVOKED) {
              let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId };
              closure_2_1(closure_2_2[5]).dispatch(obj);
              let obj2 = closure_2_1(closure_2_2[5]);
            } else if (429 === error.status) {
              let result = error.headers["retry-after"] * closure_2_1(closure_2_2[6]).Millis.SECOND;
              let _isNaN = isNaN;
              let num2 = 5000;
              if (!isNaN(result)) {
                num2 = 5000;
                if (0 !== result) {
                  num2 = result;
                }
              }
              obj = closure_2_0(closure_2_2[3]);
              return obj.timeoutPromise(num2).then(() => {
                let HTTP = closure_2_0(closure_2_2[4]).HTTP;
                let value = HTTP.get({ url: closure_2_7.CONNECTION_ACCESS_TOKEN(closure_2_8.SPOTIFY, accountId), oldFormErrors: true, rejectWithError: false });
                let obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(closure_2_8.SPOTIFY, accountId), oldFormErrors: true, rejectWithError: false };
                return value.catch(() => { ... }).then(() => { ... });
              });
            }
            return Promise.reject(error);
          }).then((accessToken) => {
            closure_2_1(closure_2_2[5]);
            const obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId, accessToken: accessToken.body.access_token };
            obj.dispatch(obj);
            return accessToken;
          });
        });
        timeoutPromiseResult.then(() => {
          closure_0 = closure_1_1;
          const HTTP = closure_0(obj[4]).HTTP;
          obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, closure_1_1), oldFormErrors: true, rejectWithError: false };
          const value = HTTP.get(obj);
          return value.catch((error) => {
            let body = error.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_2_6.CONNECTION_REVOKED) {
              let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId };
              closure_2_1(closure_2_2[5]).dispatch(obj);
              let obj2 = closure_2_1(closure_2_2[5]);
            } else if (429 === error.status) {
              let result = error.headers["retry-after"] * closure_2_1(closure_2_2[6]).Millis.SECOND;
              let _isNaN = isNaN;
              let num2 = 5000;
              if (!isNaN(result)) {
                num2 = 5000;
                if (0 !== result) {
                  num2 = result;
                }
              }
              obj = closure_2_0(closure_2_2[3]);
              return obj.timeoutPromise(num2).then(() => {
                let HTTP = closure_2_0(closure_2_2[4]).HTTP;
                let value = HTTP.get({ url: closure_2_7.CONNECTION_ACCESS_TOKEN(closure_2_8.SPOTIFY, accountId), oldFormErrors: true, rejectWithError: false });
                let obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(closure_2_8.SPOTIFY, accountId), oldFormErrors: true, rejectWithError: false };
                return value.catch(() => { ... }).then(() => { ... });
              });
            }
            return Promise.reject(error);
          }).then((accessToken) => {
            closure_2_1(closure_2_2[5]);
            const obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId, accessToken: accessToken.body.access_token };
            obj.dispatch(obj);
            return accessToken;
          });
        }).then((body) => {
          closure_0 = closure_1_0;
          closure_1 = closure_1_1;
          closure_3 = closure_1_3 - 1;
          headers = {};
          let merged = Object.assign(closure_1_2);
          headers = { authorization: "Bearer " + body.body.access_token };
          headers.headers = headers;
          let promise = closure_1_0(headers);
          return closure_1_0(headers).then((status) => {
            let rejectResult = status;
            if (202 === status.status) {
              rejectResult = Promise.reject(status);
            }
            return rejectResult;
          }).catch((error) => {
            let tmp = true !== obj.onlyRetryOnAuthorizationErrors;
            if (tmp) {
              tmp = 202 === error.status;
            }
            if (401 === error.status) {
              if (closure_3 > 0) {
                if (202 === error.status) {
                  obj = closure_2_0(closure_2_2[3]);
                  let timeoutPromiseResult = obj.timeoutPromise(5000);
                } else {
                  timeoutPromiseResult = Promise.resolve();
                }
                let nextPromise = timeoutPromiseResult.then(() => {
                  closure_0 = closure_1_1;
                  const HTTP = closure_0(obj[4]).HTTP;
                  obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, closure_1_1), oldFormErrors: true, rejectWithError: false };
                  const value = HTTP.get(obj);
                  return value.catch(() => { ... }).then(() => { ... });
                });
                timeoutPromiseResult.then(() => {
                  closure_0 = closure_1_1;
                  const HTTP = closure_0(obj[4]).HTTP;
                  obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, closure_1_1), oldFormErrors: true, rejectWithError: false };
                  const value = HTTP.get(obj);
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((body) => {
                  closure_0 = closure_1_0;
                  closure_1 = closure_1_1;
                  closure_3 = closure_1_3 - 1;
                  headers = {};
                  let merged = Object.assign(closure_1_2);
                  headers = { authorization: "Bearer " + body.body.access_token };
                  headers.headers = headers;
                  let promise = closure_1_0(headers);
                  return closure_1_0(headers).then(() => { ... }).catch(() => { ... });
                }).then((result) => {
                  closure_0 = result;
                  return new Promise(() => { ... });
                });
                let nextPromise1 = timeoutPromiseResult.then(() => {
                  closure_0 = closure_1_1;
                  const HTTP = closure_0(obj[4]).HTTP;
                  obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, closure_1_1), oldFormErrors: true, rejectWithError: false };
                  const value = HTTP.get(obj);
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((body) => {
                  closure_0 = closure_1_0;
                  closure_1 = closure_1_1;
                  closure_3 = closure_1_3 - 1;
                  headers = {};
                  let merged = Object.assign(closure_1_2);
                  headers = { authorization: "Bearer " + body.body.access_token };
                  headers.headers = headers;
                  let promise = closure_1_0(headers);
                  return closure_1_0(headers).then(() => { ... }).catch(() => { ... });
                });
              }
            }
            return Promise.reject(error);
          });
        }).then((result) => {
          closure_0 = result;
          return new Promise((arg0) => {
            closure_0 = arg0;
            return setImmediate(() => closure_0(closure_0));
          });
        });
        let nextPromise1 = timeoutPromiseResult.then(() => {
          closure_0 = closure_1_1;
          const HTTP = closure_0(obj[4]).HTTP;
          obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, closure_1_1), oldFormErrors: true, rejectWithError: false };
          const value = HTTP.get(obj);
          return value.catch((error) => {
            let body = error.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_2_6.CONNECTION_REVOKED) {
              let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId };
              closure_2_1(closure_2_2[5]).dispatch(obj);
              let obj2 = closure_2_1(closure_2_2[5]);
            } else if (429 === error.status) {
              let result = error.headers["retry-after"] * closure_2_1(closure_2_2[6]).Millis.SECOND;
              let _isNaN = isNaN;
              let num2 = 5000;
              if (!isNaN(result)) {
                num2 = 5000;
                if (0 !== result) {
                  num2 = result;
                }
              }
              obj = closure_2_0(closure_2_2[3]);
              return obj.timeoutPromise(num2).then(() => {
                let HTTP = closure_2_0(closure_2_2[4]).HTTP;
                let value = HTTP.get({ url: closure_2_7.CONNECTION_ACCESS_TOKEN(closure_2_8.SPOTIFY, accountId), oldFormErrors: true, rejectWithError: false });
                let obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(closure_2_8.SPOTIFY, accountId), oldFormErrors: true, rejectWithError: false };
                return value.catch(() => { ... }).then(() => { ... });
              });
            }
            return Promise.reject(error);
          }).then((accessToken) => {
            closure_2_1(closure_2_2[5]);
            const obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId, accessToken: accessToken.body.access_token };
            obj.dispatch(obj);
            return accessToken;
          });
        }).then((body) => {
          closure_0 = closure_1_0;
          closure_1 = closure_1_1;
          closure_3 = closure_1_3 - 1;
          headers = {};
          let merged = Object.assign(closure_1_2);
          headers = { authorization: "Bearer " + body.body.access_token };
          headers.headers = headers;
          let promise = closure_1_0(headers);
          return closure_1_0(headers).then((status) => {
            let rejectResult = status;
            if (202 === status.status) {
              rejectResult = Promise.reject(status);
            }
            return rejectResult;
          }).catch((error) => {
            let tmp = true !== obj.onlyRetryOnAuthorizationErrors;
            if (tmp) {
              tmp = 202 === error.status;
            }
            if (401 === error.status) {
              if (closure_3 > 0) {
                if (202 === error.status) {
                  obj = closure_2_0(closure_2_2[3]);
                  let timeoutPromiseResult = obj.timeoutPromise(5000);
                } else {
                  timeoutPromiseResult = Promise.resolve();
                }
                let nextPromise = timeoutPromiseResult.then(() => {
                  closure_0 = closure_1_1;
                  const HTTP = closure_0(obj[4]).HTTP;
                  obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, closure_1_1), oldFormErrors: true, rejectWithError: false };
                  const value = HTTP.get(obj);
                  return value.catch(() => { ... }).then(() => { ... });
                });
                timeoutPromiseResult.then(() => {
                  closure_0 = closure_1_1;
                  const HTTP = closure_0(obj[4]).HTTP;
                  obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, closure_1_1), oldFormErrors: true, rejectWithError: false };
                  const value = HTTP.get(obj);
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((body) => {
                  closure_0 = closure_1_0;
                  closure_1 = closure_1_1;
                  closure_3 = closure_1_3 - 1;
                  headers = {};
                  let merged = Object.assign(closure_1_2);
                  headers = { authorization: "Bearer " + body.body.access_token };
                  headers.headers = headers;
                  let promise = closure_1_0(headers);
                  return closure_1_0(headers).then(() => { ... }).catch(() => { ... });
                }).then((result) => {
                  closure_0 = result;
                  return new Promise(() => { ... });
                });
                let nextPromise1 = timeoutPromiseResult.then(() => {
                  closure_0 = closure_1_1;
                  const HTTP = closure_0(obj[4]).HTTP;
                  obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, closure_1_1), oldFormErrors: true, rejectWithError: false };
                  const value = HTTP.get(obj);
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((body) => {
                  closure_0 = closure_1_0;
                  closure_1 = closure_1_1;
                  closure_3 = closure_1_3 - 1;
                  headers = {};
                  let merged = Object.assign(closure_1_2);
                  headers = { authorization: "Bearer " + body.body.access_token };
                  headers.headers = headers;
                  let promise = closure_1_0(headers);
                  return closure_1_0(headers).then(() => { ... }).catch(() => { ... });
                });
              }
            }
            return Promise.reject(error);
          });
        });
      }
    }
    return Promise.reject(error);
  });
}
const SpotifyConstants = fn(8340);
({ SPOTIFY_APP_PROTOCOL: closure_4, SpotifyEndpoints: hasOwnProperty } = SpotifyConstants);
const Constants = fn(1074);
({ AbortCodes: metroRequire, Endpoints: closure_7, PlatformTypes: closure_8 } = Constants);
const SpotifyAPI = { get: apiRequest.bind(null, fn(1272).HTTP.get), put: apiRequest.bind(null, fn(1272).HTTP.put) };
const size = fn(2);
const result = size.fileFinishedImporting("modules/spotify/SpotifyActionCreators.tsx");

export { SpotifyAPI };
export const getAccessToken = function getAccessToken(id) {
  _require = id;
  const HTTP = require("HTTPUtils").HTTP;
  value = HTTP.get({ url: closure_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, id), oldFormErrors: true, rejectWithError: false });
  obj = { url: closure_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, id), oldFormErrors: true, rejectWithError: false };
  return value.catch((error) => {
    let body = error.body;
    let code;
    if (body != null) {
      code = body.code;
    }
    if (code === closure_2_6.CONNECTION_REVOKED) {
      let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId };
      closure_2_1(closure_2_2[5]).dispatch(obj);
      let obj2 = closure_2_1(closure_2_2[5]);
    } else if (429 === error.status) {
      let result = error.headers["retry-after"] * closure_2_1(closure_2_2[6]).Millis.SECOND;
      let _isNaN = isNaN;
      let num2 = 5000;
      if (!isNaN(result)) {
        num2 = 5000;
        if (0 !== result) {
          num2 = result;
        }
      }
      obj = closure_2_0(closure_2_2[3]);
      return obj.timeoutPromise(num2).then(() => {
        let HTTP = closure_2_0(closure_2_2[4]).HTTP;
        let value = HTTP.get({ url: closure_2_7.CONNECTION_ACCESS_TOKEN(closure_2_8.SPOTIFY, accountId), oldFormErrors: true, rejectWithError: false });
        let obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(closure_2_8.SPOTIFY, accountId), oldFormErrors: true, rejectWithError: false };
        return value.catch((error) => {
          let body = error.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          if (code === closure_2_6.CONNECTION_REVOKED) {
            let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId };
            closure_2_1(closure_2_2[5]).dispatch(obj);
            let obj2 = closure_2_1(closure_2_2[5]);
          } else if (429 === error.status) {
            let result = error.headers["retry-after"] * closure_2_1(closure_2_2[6]).Millis.SECOND;
            let _isNaN = isNaN;
            let num2 = 5000;
            if (!isNaN(result)) {
              num2 = 5000;
              if (0 !== result) {
                num2 = result;
              }
            }
            obj = closure_2_0(closure_2_2[3]);
            return obj.timeoutPromise(num2).then(() => {
              let HTTP = closure_2_0(closure_2_2[4]).HTTP;
              let value = HTTP.get({ url: closure_2_7.CONNECTION_ACCESS_TOKEN(closure_2_8.SPOTIFY, accountId), oldFormErrors: true, rejectWithError: false });
              let obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(closure_2_8.SPOTIFY, accountId), oldFormErrors: true, rejectWithError: false };
              return value.catch(() => { ... }).then(() => { ... });
            });
          }
          return Promise.reject(error);
        }).then((accessToken) => {
          closure_2_1(closure_2_2[5]);
          const obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId, accessToken: accessToken.body.access_token };
          obj.dispatch(obj);
          return accessToken;
        });
      });
    }
    return Promise.reject(error);
  }).then((accessToken) => {
    closure_2_1(closure_2_2[5]);
    const obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId, accessToken: accessToken.body.access_token };
    obj.dispatch(obj);
    return accessToken;
  });
};
export const subscribePlayerStateNotifications = function subscribePlayerStateNotifications(accountId, accessToken, connectionId) {
  closure_0 = accountId;
  closure_1 = accessToken;
  closure_2 = connectionId;
  const request = { url: closure_5.NOTIFICATIONS_PLAYER, query: { connection_id: connectionId } };
  return obj.put(accountId, accessToken, request).catch((error) => {
    if (closure_3 <= 0) {
      let rejectResult = Promise.reject(error);
    } else {
      let obj = closure_2_0(closure_2_2[3]);
      rejectResult = closure_2_0(closure_2_2[3]).timeoutPromise(5000).then(() => {
        closure_0 = closure_1_0;
        closure_1 = closure_1_1;
        closure_2 = connection_id;
        closure_3 = closure_1_3 - 1;
        let request = { url: closure_2_5.NOTIFICATIONS_PLAYER, query: { connection_id } };
        return closure_2_9.put(closure_1_0, closure_1_1, request).catch((error) => {
          if (closure_3 <= 0) {
            let rejectResult = Promise.reject(error);
          } else {
            let obj = closure_2_0(closure_2_2[3]);
            rejectResult = closure_2_0(closure_2_2[3]).timeoutPromise(5000).then(() => {
              closure_0 = closure_1_0;
              closure_1 = closure_1_1;
              closure_2 = connection_id;
              closure_3 = closure_1_3 - 1;
              let request = { url: closure_2_5.NOTIFICATIONS_PLAYER, query: { connection_id } };
              return closure_2_9.put(closure_1_0, closure_1_1, request).catch(() => { ... });
            });
            let timeoutPromiseResult = closure_2_0(closure_2_2[3]).timeoutPromise(5000);
          }
          return rejectResult;
        });
      });
      let timeoutPromiseResult = closure_2_0(closure_2_2[3]).timeoutPromise(5000);
    }
    return rejectResult;
  });
};
export const getProfile = function getProfile(accountId, arg1) {
  obj = { url: closure_5.PROFILE };
  value = obj.get(accountId, arg1, obj);
  return value.then((body) => {
    obj = { type: "SPOTIFY_PROFILE_UPDATE", accountId, isPremium: "premium" === body.body.product };
    obj.dispatch(obj);
    return body;
  });
};
export const getDevices = function getDevices(accountId, accessToken) {
  obj = { url: closure_5.PLAYER_DEVICES };
  value = obj.get(accountId, accessToken, obj);
  return value.then((body) => {
    if (body.body) {
      obj = { type: "SPOTIFY_SET_DEVICES", accountId, devices: body.body.devices };
      obj.dispatch(obj);
    }
    return body;
  });
};
export const play = function play(arg0, arg1, sync_id, TRACK) {
  closure_0 = arg0;
  closure_1 = arg1;
  const id = sync_id;
  let body = arg4;
  if (arg4 === undefined) {
    body = {};
  }
  c5 = undefined;
  const PLAYER_OPENResult = c5.PLAYER_OPEN(TRACK, sync_id, false);
  const deviceId = body.deviceId;
  const position = body.position;
  ({ contextUri, repeat: c5 } = body);
  let request = { url: c5.PLAYER_PLAY, query: { device_id: deviceId }, body: null };
  let tmp3;
  if (null != contextUri) {
    tmp3 = contextUri;
  }
  body = { context_uri: tmp3, uris: null, offset: null, position_ms: null };
  let tmp4;
  if (null == contextUri) {
    const items = [PLAYER_OPENResult];
    tmp4 = items;
  }
  body.uris = tmp4;
  let tmp5;
  if (null != contextUri) {
    body = { uri: PLAYER_OPENResult };
    tmp5 = body;
  }
  body.offset = tmp5;
  let num = 0;
  if (null != position) {
    num = position;
  }
  body.position_ms = num;
  request.body = body;
  let putResult = body.put(arg0, arg1, request);
  return body.put(arg0, arg1, request).then((result) => {
    let putResult = result;
    if (null != c5) {
      const request = { url: hasOwnProperty.PLAYER_REPEAT, query: null };
      const query = { device_id: deviceId, state: null };
      let str = "off";
      if (tmp2) {
        str = "context";
      }
      query.state = str;
      request.query = query;
      putResult = query.put(closure_0, closure_1, request);
    }
    return putResult;
  }).then((result) => {
    obj = { type: "SPOTIFY_PLAYER_PLAY", id, position: null };
    let num = 0;
    if (null != position) {
      num = position;
    }
    obj.position = num;
    obj.dispatch(obj);
    return result;
  });
};
export const pause = function pause(arg0, arg1) {
  obj = { url: hasOwnProperty.PLAYER_PAUSE };
  return obj.put(arg0, arg1, obj).then((result) => {
    DispatcherDefault.dispatch({ type: "SPOTIFY_PLAYER_PAUSE" });
    return result;
  });
};
export const fetchIsSpotifyProtocolRegistered = function fetchIsSpotifyProtocolRegistered() {
  if (!SpotifyProtocolStore.isProtocolRegistered()) {
    if (obj.isDesktop()) {
      GameUtilsDefault.isProtocolRegistered(React4).then((isRegistered) => {
        obj = { type: "SPOTIFY_SET_PROTOCOL_REGISTERED", isRegistered };
        obj.dispatch(obj);
      });
      const isProtocolRegisteredResult = GameUtilsDefault.isProtocolRegistered(React4);
    }
    obj = PlatformUtils;
  }
};
export const setActiveDevice = function setActiveDevice(accountId, deviceId) {
  obj = { type: "SPOTIFY_SET_ACTIVE_DEVICE", accountId, deviceId };
  obj.dispatch(obj);
};