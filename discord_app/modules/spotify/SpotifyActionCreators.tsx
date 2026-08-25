// === Module 11310: apiRequest ===

// Module 11310 (apiRequest)
import set from "set" /* 500 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import setDefault from "set" /* 9429 */;
import closure_3 from "isProtocolRegistered" /* 11309 */;
import SPOTIFY_APP_PROTOCOL from "SPOTIFY_APP_PROTOCOL" /* 9050 */;
import ME from "ME" /* 676 */;

require = arg1;
function apiRequest(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  obj = arg3;
  let num = arg4;
  if (arg4 === undefined) {
    num = 1;
  }
  obj = {};
  const merged = Object.assign(arg3);
  obj = { authorization: "Bearer " + arg2 };
  obj.headers = obj;
  const promise = arg0(obj);
  return arg0(obj).then((status) => {
    let rejectResult = status;
    if (202 === status.status) {
      rejectResult = Promise.reject(status);
    }
    return rejectResult;
  }).catch((status) => {
    let tmp = true !== obj.onlyRetryOnAuthorizationErrors;
    if (tmp) {
      tmp = 202 === status.status;
    }
    if (401 === status.status) {
      if (closure_3 > 0) {
        if (202 === status.status) {
          obj = callback(obj[3]);
          let timeoutPromiseResult = obj.timeoutPromise(5000);
        } else {
          timeoutPromiseResult = Promise.resolve();
        }
        let nextPromise = timeoutPromiseResult.then(() => {
          closure_0 = closure_1;
          const HTTP = closure_1_0(closure_1_2[4]).HTTP;
          const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
          obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
          return value.catch((body) => {
            body = body.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_1_6.CONNECTION_REVOKED) {
              let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: null };
              obj[1] = callback;
              closure_1_1(closure_1_2[5]).dispatch(obj);
              let obj2 = closure_1_1(closure_1_2[5]);
            } else if (429 === body.status) {
              let result = body.headers["retry-after"] * closure_1_1(closure_1_2[6]).Millis.SECOND;
              let _isNaN = isNaN;
              let num2 = 5000;
              if (!isNaN(result)) {
                num2 = 5000;
                if (0 !== result) {
                  num2 = result;
                }
              }
              obj = callback(closure_1_2[3]);
              return obj.timeoutPromise(num2).then(() => {
                let HTTP = closure_1_0(closure_1_2[4]).HTTP;
                let value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false });
                let obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false };
                return value.catch(() => { ... }).then(() => { ... });
              });
            }
            return Promise.reject(body);
          }).then((accessToken) => {
            let obj = closure_1_1(closure_1_2[5]);
            obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: accessToken.body.access_token };
            obj.dispatch(obj);
            return accessToken;
          });
        });
        timeoutPromiseResult.then(() => {
          closure_0 = closure_1;
          const HTTP = closure_1_0(closure_1_2[4]).HTTP;
          const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
          obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
          return value.catch((body) => {
            body = body.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_1_6.CONNECTION_REVOKED) {
              let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: null };
              obj[1] = callback;
              closure_1_1(closure_1_2[5]).dispatch(obj);
              let obj2 = closure_1_1(closure_1_2[5]);
            } else if (429 === body.status) {
              let result = body.headers["retry-after"] * closure_1_1(closure_1_2[6]).Millis.SECOND;
              let _isNaN = isNaN;
              let num2 = 5000;
              if (!isNaN(result)) {
                num2 = 5000;
                if (0 !== result) {
                  num2 = result;
                }
              }
              obj = callback(closure_1_2[3]);
              return obj.timeoutPromise(num2).then(() => {
                let HTTP = closure_1_0(closure_1_2[4]).HTTP;
                let value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false });
                let obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false };
                return value.catch(() => { ... }).then(() => { ... });
              });
            }
            return Promise.reject(body);
          }).then((accessToken) => {
            let obj = closure_1_1(closure_1_2[5]);
            obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: accessToken.body.access_token };
            obj.dispatch(obj);
            return accessToken;
          });
        }).then((body) => {
          closure_3 = closure_3 - 1;
          obj = {};
          let merged = Object.assign(obj);
          obj = { authorization: "Bearer " + body.body.access_token };
          obj.headers = obj;
          let promise = callback(obj);
          return callback(obj).then((status) => {
            let rejectResult = status;
            if (202 === status.status) {
              rejectResult = Promise.reject(status);
            }
            return rejectResult;
          }).catch((status) => {
            let tmp = true !== obj.onlyRetryOnAuthorizationErrors;
            if (tmp) {
              tmp = 202 === status.status;
            }
            if (401 === status.status) {
              if (closure_3 > 0) {
                if (202 === status.status) {
                  obj = callback(obj[3]);
                  let timeoutPromiseResult = obj.timeoutPromise(5000);
                } else {
                  timeoutPromiseResult = Promise.resolve();
                }
                let nextPromise = timeoutPromiseResult.then(() => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                });
                timeoutPromiseResult.then(() => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((body) => {
                  closure_3 = closure_3 - 1;
                  obj = {};
                  let merged = Object.assign(obj);
                  obj = { authorization: "Bearer " + body.body.access_token };
                  obj.headers = obj;
                  let promise = callback(obj);
                  return callback(obj).then(() => { ... }).catch(() => { ... });
                }).then((arg0) => {
                  closure_0 = arg0;
                  return new Promise(() => { ... });
                });
                let nextPromise1 = timeoutPromiseResult.then(() => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((body) => {
                  closure_3 = closure_3 - 1;
                  obj = {};
                  let merged = Object.assign(obj);
                  obj = { authorization: "Bearer " + body.body.access_token };
                  obj.headers = obj;
                  let promise = callback(obj);
                  return callback(obj).then(() => { ... }).catch(() => { ... });
                });
              }
            }
            return Promise.reject(status);
          });
        }).then((arg0) => {
          closure_0 = arg0;
          return new Promise((arg0) => {
            closure_0 = arg0;
            return setImmediate(() => callback(callback));
          });
        });
        let nextPromise1 = timeoutPromiseResult.then(() => {
          closure_0 = closure_1;
          const HTTP = closure_1_0(closure_1_2[4]).HTTP;
          const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
          obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
          return value.catch((body) => {
            body = body.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_1_6.CONNECTION_REVOKED) {
              let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: null };
              obj[1] = callback;
              closure_1_1(closure_1_2[5]).dispatch(obj);
              let obj2 = closure_1_1(closure_1_2[5]);
            } else if (429 === body.status) {
              let result = body.headers["retry-after"] * closure_1_1(closure_1_2[6]).Millis.SECOND;
              let _isNaN = isNaN;
              let num2 = 5000;
              if (!isNaN(result)) {
                num2 = 5000;
                if (0 !== result) {
                  num2 = result;
                }
              }
              obj = callback(closure_1_2[3]);
              return obj.timeoutPromise(num2).then(() => {
                let HTTP = closure_1_0(closure_1_2[4]).HTTP;
                let value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false });
                let obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false };
                return value.catch(() => { ... }).then(() => { ... });
              });
            }
            return Promise.reject(body);
          }).then((accessToken) => {
            let obj = closure_1_1(closure_1_2[5]);
            obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: accessToken.body.access_token };
            obj.dispatch(obj);
            return accessToken;
          });
        }).then((body) => {
          closure_3 = closure_3 - 1;
          obj = {};
          let merged = Object.assign(obj);
          obj = { authorization: "Bearer " + body.body.access_token };
          obj.headers = obj;
          let promise = callback(obj);
          return callback(obj).then((status) => {
            let rejectResult = status;
            if (202 === status.status) {
              rejectResult = Promise.reject(status);
            }
            return rejectResult;
          }).catch((status) => {
            let tmp = true !== obj.onlyRetryOnAuthorizationErrors;
            if (tmp) {
              tmp = 202 === status.status;
            }
            if (401 === status.status) {
              if (closure_3 > 0) {
                if (202 === status.status) {
                  obj = callback(obj[3]);
                  let timeoutPromiseResult = obj.timeoutPromise(5000);
                } else {
                  timeoutPromiseResult = Promise.resolve();
                }
                let nextPromise = timeoutPromiseResult.then(() => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                });
                timeoutPromiseResult.then(() => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((body) => {
                  closure_3 = closure_3 - 1;
                  obj = {};
                  let merged = Object.assign(obj);
                  obj = { authorization: "Bearer " + body.body.access_token };
                  obj.headers = obj;
                  let promise = callback(obj);
                  return callback(obj).then(() => { ... }).catch(() => { ... });
                }).then((arg0) => {
                  closure_0 = arg0;
                  return new Promise(() => { ... });
                });
                let nextPromise1 = timeoutPromiseResult.then(() => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((body) => {
                  closure_3 = closure_3 - 1;
                  obj = {};
                  let merged = Object.assign(obj);
                  obj = { authorization: "Bearer " + body.body.access_token };
                  obj.headers = obj;
                  let promise = callback(obj);
                  return callback(obj).then(() => { ... }).catch(() => { ... });
                });
              }
            }
            return Promise.reject(status);
          });
        });
      }
    }
    return Promise.reject(status);
  });
}
({ SPOTIFY_APP_PROTOCOL: c4, SpotifyEndpoints: c5 } = SPOTIFY_APP_PROTOCOL);
({ AbortCodes: closure_6, Endpoints: error, PlatformTypes: closure_8 } = ME);
let obj = { get: apiRequest.bind(null, require("sendRequest").HTTP.get), put: apiRequest.bind(null, require("sendRequest").HTTP.put) };
const result = require("set").fileFinishedImporting("modules/spotify/SpotifyActionCreators.tsx");

export const SpotifyAPI = obj;
export const getAccessToken = function getAccessToken(id) {
  const _require = id;
  const HTTP = _require(530).HTTP;
  const value = HTTP.get({ url: closure_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, id), oldFormErrors: true, rejectWithError: false });
  obj = { url: closure_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, id), oldFormErrors: true, rejectWithError: false };
  return value.catch((body) => {
    body = body.body;
    let code;
    if (body != null) {
      code = body.code;
    }
    if (code === closure_1_6.CONNECTION_REVOKED) {
      let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: null };
      obj[1] = callback;
      closure_1_1(closure_1_2[5]).dispatch(obj);
      let obj2 = closure_1_1(closure_1_2[5]);
    } else if (429 === body.status) {
      let result = body.headers["retry-after"] * closure_1_1(closure_1_2[6]).Millis.SECOND;
      let _isNaN = isNaN;
      let num2 = 5000;
      if (!isNaN(result)) {
        num2 = 5000;
        if (0 !== result) {
          num2 = result;
        }
      }
      obj = callback(closure_1_2[3]);
      return obj.timeoutPromise(num2).then(() => {
        let HTTP = closure_1_0(closure_1_2[4]).HTTP;
        let value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false });
        let obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false };
        return value.catch((body) => {
          body = body.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          if (code === closure_1_6.CONNECTION_REVOKED) {
            let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: null };
            obj[1] = callback;
            closure_1_1(closure_1_2[5]).dispatch(obj);
            let obj2 = closure_1_1(closure_1_2[5]);
          } else if (429 === body.status) {
            let result = body.headers["retry-after"] * closure_1_1(closure_1_2[6]).Millis.SECOND;
            let _isNaN = isNaN;
            let num2 = 5000;
            if (!isNaN(result)) {
              num2 = 5000;
              if (0 !== result) {
                num2 = result;
              }
            }
            obj = callback(closure_1_2[3]);
            return obj.timeoutPromise(num2).then(() => {
              let HTTP = closure_1_0(closure_1_2[4]).HTTP;
              let value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false });
              let obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false };
              return value.catch(() => { ... }).then(() => { ... });
            });
          }
          return Promise.reject(body);
        }).then((accessToken) => {
          let obj = closure_1_1(closure_1_2[5]);
          obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: accessToken.body.access_token };
          obj.dispatch(obj);
          return accessToken;
        });
      });
    }
    return Promise.reject(body);
  }).then((accessToken) => {
    let obj = closure_1_1(closure_1_2[5]);
    obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: accessToken.body.access_token };
    obj.dispatch(obj);
    return accessToken;
  });
};
export const subscribePlayerStateNotifications = function subscribePlayerStateNotifications(accountId, accessToken, connectionId) {
  closure_0 = accountId;
  closure_1 = accessToken;
  closure_2 = connectionId;
  let num = arg3;
  if (arg3 === undefined) {
    num = 2;
  }
  obj = { url: closure_5.NOTIFICATIONS_PLAYER, query: obj };
  obj = { connection_id: connectionId };
  return obj.put(accountId, accessToken, obj).catch((arg0) => {
    if (closure_3 <= 0) {
      let rejectResult = Promise.reject(arg0);
    } else {
      let obj = callback(table[3]);
      rejectResult = callback(table[3]).timeoutPromise(5000).then(() => {
        closure_3 = closure_3 - 1;
        obj = { url: closure_1_5.NOTIFICATIONS_PLAYER, query: obj };
        obj = { connection_id: closure_2 };
        return closure_1_9.put(closure_0, closure_1, obj).catch((arg0) => {
          if (closure_3 <= 0) {
            let rejectResult = Promise.reject(arg0);
          } else {
            let obj = callback(table[3]);
            rejectResult = callback(table[3]).timeoutPromise(5000).then(() => {
              closure_3 = closure_3 - 1;
              obj = { url: closure_1_5.NOTIFICATIONS_PLAYER, query: obj };
              obj = { connection_id: closure_2 };
              return closure_1_9.put(closure_0, closure_1, obj).catch(() => { ... });
            });
            let timeoutPromiseResult = callback(table[3]).timeoutPromise(5000);
          }
          return rejectResult;
        });
      });
      let timeoutPromiseResult = callback(table[3]).timeoutPromise(5000);
    }
    return rejectResult;
  });
};
export const getProfile = function getProfile(arg0, arg1) {
  closure_0 = arg0;
  obj = { url: closure_5.PROFILE };
  const value = obj.get(arg0, arg1, obj);
  return value.then((body) => {
    obj = closure_1_1(closure_1_2[5]);
    obj = { type: "SPOTIFY_PROFILE_UPDATE", accountId: closure_0, isPremium: "premium" === body.body.product };
    obj.dispatch(obj);
    return body;
  });
};
export const getDevices = function getDevices(accountId, accessToken) {
  closure_0 = accountId;
  obj = { url: closure_5.PLAYER_DEVICES };
  const value = obj.get(accountId, accessToken, obj);
  return value.then((body) => {
    if (body.body) {
      obj = closure_1_1(closure_1_2[5]);
      obj = { type: "SPOTIFY_SET_DEVICES", accountId: null, devices: null };
      obj[1] = closure_0;
      obj[2] = body.body.devices;
      obj.dispatch(obj);
    }
    return body;
  });
};
export const play = function play(arg0, arg1, album_id, TRACK) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = album_id;
  obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let deviceId;
  let position;
  c5 = undefined;
  const PLAYER_OPENResult = c5.PLAYER_OPEN(TRACK, album_id, false);
  deviceId = obj.deviceId;
  position = obj.position;
  ({ contextUri, repeat: c5 } = obj);
  obj = { url: c5.PLAYER_PLAY, query: { device_id: deviceId }, body: null };
  let tmp3;
  if (null != contextUri) {
    tmp3 = contextUri;
  }
  obj = { context_uri: tmp3, uris: null, offset: null, position_ms: null };
  let tmp4;
  if (null == contextUri) {
    const items = [PLAYER_OPENResult];
    tmp4 = items;
  }
  obj[1] = tmp4;
  let tmp5;
  if (null != contextUri) {
    obj1 = { uri: null };
    obj1[0] = PLAYER_OPENResult;
    tmp5 = obj1;
  }
  obj[2] = tmp5;
  let num = 0;
  if (null != position) {
    num = position;
  }
  obj[3] = num;
  obj[2] = obj;
  let putResult = obj.put(arg0, arg1, obj);
  return obj.put(arg0, arg1, obj).then((arg0) => {
    let putResult = arg0;
    if (null != _undefined) {
      obj = { url: null, query: null };
      obj[0] = _undefined.PLAYER_REPEAT;
      obj = { device_id: null, state: null };
      obj[0] = deviceId;
      let str = "off";
      if (tmp2) {
        str = "context";
      }
      obj[1] = str;
      obj[1] = obj;
      putResult = closure_1_9.put(closure_0, closure_1, obj);
      const tmp4 = closure_0;
      const tmp5 = closure_1;
    }
    return putResult;
  }).then((arg0) => {
    obj = callback(album_id[5]);
    obj = { type: "SPOTIFY_PLAYER_PLAY", id: album_id, position: null };
    let num = 0;
    if (null != position) {
      num = position;
    }
    obj[2] = num;
    obj.dispatch(obj);
    return arg0;
  });
};
export const pause = function pause(arg0, arg1) {
  obj = { url: closure_5.PLAYER_PAUSE };
  return obj.put(arg0, arg1, obj).then((arg0) => {
    callback(table[5]).dispatch({ type: "SPOTIFY_PLAYER_PAUSE" });
    return arg0;
  });
};
export const fetchIsSpotifyProtocolRegistered = function fetchIsSpotifyProtocolRegistered() {
  if (!protocolRegistered.isProtocolRegistered()) {
    if (obj.isDesktop()) {
      const obj2 = setDefault;
      setDefault.isProtocolRegistered(closure_4).then((isRegistered) => {
        obj = callback(table[5]);
        obj = { type: "SPOTIFY_SET_PROTOCOL_REGISTERED", isRegistered };
        obj.dispatch(obj);
      });
      const isProtocolRegisteredResult = setDefault.isProtocolRegistered(closure_4);
    }
    obj = set;
  }
};
export const setActiveDevice = function setActiveDevice(accountId, deviceId) {
  obj = dispatcherDefault;
  obj = { type: "SPOTIFY_SET_ACTIVE_DEVICE", accountId, deviceId };
  obj.dispatch(obj);
};