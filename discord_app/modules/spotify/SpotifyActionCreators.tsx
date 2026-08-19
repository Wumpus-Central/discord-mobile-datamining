// === Module 7243: apiRequest ===

// Module 7243 (apiRequest)
import obj132 from "obj132" /* 500 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import obj132Default from "obj132" /* 7245 */;
import isProtocolRegistered from "isProtocolRegistered" /* 7244 */;
import SPOTIFY_APP_PROTOCOL from "SPOTIFY_APP_PROTOCOL" /* 7242 */;
import ME from "ME" /* 676 */;

require = fn;
function apiRequest(fn, arg1, arg2, closure_0) {
  closure_0 = fn;
  closure_1 = arg1;
  obj = closure_0;
  const merged = Object.assign(closure_0);
  obj = { authorization: "Bearer " + arg2 };
  obj.headers = obj;
  const promise = fn(obj);
  return fn(obj).then((result) => {
    let rejectResult = result;
    if (202 === result.status) {
      rejectResult = Promise.reject(result);
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
          obj = callback(obj[3]);
          let timeoutPromiseResult = obj.timeoutPromise(5000);
        } else {
          timeoutPromiseResult = Promise.resolve();
        }
        let nextPromise = timeoutPromiseResult.then((result) => {
          closure_0 = closure_1;
          const HTTP = closure_1_0(closure_1_2[4]).HTTP;
          const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
          obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
          return value.catch((error) => {
            let body = error.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_1_6.CONNECTION_REVOKED) {
              let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: null };
              obj[1] = callback;
              closure_1_1(closure_1_2[5]).dispatch(obj);
              let obj2 = closure_1_1(closure_1_2[5]);
            } else if (429 === error.status) {
              let result = error.headers["retry-after"] * closure_1_1(closure_1_2[6]).Millis.SECOND;
              let _isNaN = isNaN;
              let num2 = 5000;
              if (!isNaN(result)) {
                num2 = 5000;
                if (0 !== result) {
                  num2 = result;
                }
              }
              obj = callback(closure_1_2[3]);
              return obj.timeoutPromise(num2).then((result) => {
                let HTTP = closure_1_0(closure_1_2[4]).HTTP;
                let value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false });
                let obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false };
                return value.catch(() => { ... }).then(() => { ... });
              });
            }
            return Promise.reject(error);
          }).then((result) => {
            closure_1_1(closure_1_2[5]);
            const obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: result.body.access_token };
            obj.dispatch(obj);
            return result;
          });
        });
        timeoutPromiseResult.then((result) => {
          closure_0 = closure_1;
          const HTTP = closure_1_0(closure_1_2[4]).HTTP;
          const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
          obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
          return value.catch((error) => {
            let body = error.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_1_6.CONNECTION_REVOKED) {
              let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: null };
              obj[1] = callback;
              closure_1_1(closure_1_2[5]).dispatch(obj);
              let obj2 = closure_1_1(closure_1_2[5]);
            } else if (429 === error.status) {
              let result = error.headers["retry-after"] * closure_1_1(closure_1_2[6]).Millis.SECOND;
              let _isNaN = isNaN;
              let num2 = 5000;
              if (!isNaN(result)) {
                num2 = 5000;
                if (0 !== result) {
                  num2 = result;
                }
              }
              obj = callback(closure_1_2[3]);
              return obj.timeoutPromise(num2).then((result) => {
                let HTTP = closure_1_0(closure_1_2[4]).HTTP;
                let value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false });
                let obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false };
                return value.catch(() => { ... }).then(() => { ... });
              });
            }
            return Promise.reject(error);
          }).then((result) => {
            closure_1_1(closure_1_2[5]);
            const obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: result.body.access_token };
            obj.dispatch(obj);
            return result;
          });
        }).then((result) => {
          closure_3 = closure_3 - 1;
          obj = {};
          let merged = Object.assign(obj);
          obj = { authorization: "Bearer " + result.body.access_token };
          obj.headers = obj;
          let promise = callback(obj);
          return callback(obj).then((result) => {
            let rejectResult = result;
            if (202 === result.status) {
              rejectResult = Promise.reject(result);
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
                  obj = callback(obj[3]);
                  let timeoutPromiseResult = obj.timeoutPromise(5000);
                } else {
                  timeoutPromiseResult = Promise.resolve();
                }
                let nextPromise = timeoutPromiseResult.then((result) => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                });
                timeoutPromiseResult.then((result) => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((result) => {
                  closure_3 = closure_3 - 1;
                  obj = {};
                  let merged = Object.assign(obj);
                  obj = { authorization: "Bearer " + result.body.access_token };
                  obj.headers = obj;
                  let promise = callback(obj);
                  return callback(obj).then(() => { ... }).catch(() => { ... });
                }).then((result) => {
                  closure_0 = result;
                  return new Promise(() => { ... });
                });
                let nextPromise1 = timeoutPromiseResult.then((result) => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((result) => {
                  closure_3 = closure_3 - 1;
                  obj = {};
                  let merged = Object.assign(obj);
                  obj = { authorization: "Bearer " + result.body.access_token };
                  obj.headers = obj;
                  let promise = callback(obj);
                  return callback(obj).then(() => { ... }).catch(() => { ... });
                });
              }
            }
            return Promise.reject(error);
          });
        }).then((result) => {
          closure_0 = result;
          return new Promise((arg0) => {
            closure_0 = arg0;
            return setImmediate(() => callback(callback));
          });
        });
        let nextPromise1 = timeoutPromiseResult.then((result) => {
          closure_0 = closure_1;
          const HTTP = closure_1_0(closure_1_2[4]).HTTP;
          const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
          obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
          return value.catch((error) => {
            let body = error.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === closure_1_6.CONNECTION_REVOKED) {
              let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: null };
              obj[1] = callback;
              closure_1_1(closure_1_2[5]).dispatch(obj);
              let obj2 = closure_1_1(closure_1_2[5]);
            } else if (429 === error.status) {
              let result = error.headers["retry-after"] * closure_1_1(closure_1_2[6]).Millis.SECOND;
              let _isNaN = isNaN;
              let num2 = 5000;
              if (!isNaN(result)) {
                num2 = 5000;
                if (0 !== result) {
                  num2 = result;
                }
              }
              obj = callback(closure_1_2[3]);
              return obj.timeoutPromise(num2).then((result) => {
                let HTTP = closure_1_0(closure_1_2[4]).HTTP;
                let value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false });
                let obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false };
                return value.catch(() => { ... }).then(() => { ... });
              });
            }
            return Promise.reject(error);
          }).then((result) => {
            closure_1_1(closure_1_2[5]);
            const obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: result.body.access_token };
            obj.dispatch(obj);
            return result;
          });
        }).then((result) => {
          closure_3 = closure_3 - 1;
          obj = {};
          let merged = Object.assign(obj);
          obj = { authorization: "Bearer " + result.body.access_token };
          obj.headers = obj;
          let promise = callback(obj);
          return callback(obj).then((result) => {
            let rejectResult = result;
            if (202 === result.status) {
              rejectResult = Promise.reject(result);
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
                  obj = callback(obj[3]);
                  let timeoutPromiseResult = obj.timeoutPromise(5000);
                } else {
                  timeoutPromiseResult = Promise.resolve();
                }
                let nextPromise = timeoutPromiseResult.then((result) => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                });
                timeoutPromiseResult.then((result) => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((result) => {
                  closure_3 = closure_3 - 1;
                  obj = {};
                  let merged = Object.assign(obj);
                  obj = { authorization: "Bearer " + result.body.access_token };
                  obj.headers = obj;
                  let promise = callback(obj);
                  return callback(obj).then(() => { ... }).catch(() => { ... });
                }).then((result) => {
                  closure_0 = result;
                  return new Promise(() => { ... });
                });
                let nextPromise1 = timeoutPromiseResult.then((result) => {
                  closure_0 = closure_1;
                  const HTTP = closure_1_0(closure_1_2[4]).HTTP;
                  const value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false });
                  obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_1), oldFormErrors: true, rejectWithError: false };
                  return value.catch(() => { ... }).then(() => { ... });
                }).then((result) => {
                  closure_3 = closure_3 - 1;
                  obj = {};
                  let merged = Object.assign(obj);
                  obj = { authorization: "Bearer " + result.body.access_token };
                  obj.headers = obj;
                  let promise = callback(obj);
                  return callback(obj).then(() => { ... }).catch(() => { ... });
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
({ SPOTIFY_APP_PROTOCOL: c4, SpotifyEndpoints: c5 } = SPOTIFY_APP_PROTOCOL);
({ AbortCodes: closure_6, Endpoints: error, PlatformTypes: closure_8 } = ME);
let obj = { get: apiRequest.bind(null, require("sendRequest").HTTP.get), put: apiRequest.bind(null, require("sendRequest").HTTP.put) };
const result = require("obj132").fileFinishedImporting("modules/spotify/SpotifyActionCreators.tsx");

export const SpotifyAPI = obj;
export const getAccessToken = function getAccessToken(id) {
  const _require = id;
  const HTTP = _require(530).HTTP;
  const value = HTTP.get({ url: closure_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, id), oldFormErrors: true, rejectWithError: false });
  obj = { url: closure_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, id), oldFormErrors: true, rejectWithError: false };
  return value.catch((error) => {
    let body = error.body;
    let code;
    if (body != null) {
      code = body.code;
    }
    if (code === closure_1_6.CONNECTION_REVOKED) {
      let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: null };
      obj[1] = callback;
      closure_1_1(closure_1_2[5]).dispatch(obj);
      let obj2 = closure_1_1(closure_1_2[5]);
    } else if (429 === error.status) {
      let result = error.headers["retry-after"] * closure_1_1(closure_1_2[6]).Millis.SECOND;
      let _isNaN = isNaN;
      let num2 = 5000;
      if (!isNaN(result)) {
        num2 = 5000;
        if (0 !== result) {
          num2 = result;
        }
      }
      obj = callback(closure_1_2[3]);
      return obj.timeoutPromise(num2).then((result) => {
        let HTTP = closure_1_0(closure_1_2[4]).HTTP;
        let value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false });
        let obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false };
        return value.catch((error) => {
          let body = error.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          if (code === closure_1_6.CONNECTION_REVOKED) {
            let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: null };
            obj[1] = callback;
            closure_1_1(closure_1_2[5]).dispatch(obj);
            let obj2 = closure_1_1(closure_1_2[5]);
          } else if (429 === error.status) {
            let result = error.headers["retry-after"] * closure_1_1(closure_1_2[6]).Millis.SECOND;
            let _isNaN = isNaN;
            let num2 = 5000;
            if (!isNaN(result)) {
              num2 = 5000;
              if (0 !== result) {
                num2 = result;
              }
            }
            obj = callback(closure_1_2[3]);
            return obj.timeoutPromise(num2).then((result) => {
              let HTTP = closure_1_0(closure_1_2[4]).HTTP;
              let value = HTTP.get({ url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false });
              let obj = { url: closure_1_7.CONNECTION_ACCESS_TOKEN(closure_1_8.SPOTIFY, closure_0), oldFormErrors: true, rejectWithError: false };
              return value.catch(() => { ... }).then(() => { ... });
            });
          }
          return Promise.reject(error);
        }).then((result) => {
          closure_1_1(closure_1_2[5]);
          const obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: result.body.access_token };
          obj.dispatch(obj);
          return result;
        });
      });
    }
    return Promise.reject(error);
  }).then((result) => {
    closure_1_1(closure_1_2[5]);
    const obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: result.body.access_token };
    obj.dispatch(obj);
    return result;
  });
};
export const subscribePlayerStateNotifications = function subscribePlayerStateNotifications(accountId, accessToken, connectionId) {
  closure_0 = accountId;
  closure_1 = accessToken;
  closure_2 = connectionId;
  obj = { connection_id: connectionId };
  return obj.put(accountId, accessToken, obj).catch((error) => {
    if (closure_3 <= 0) {
      let rejectResult = Promise.reject(error);
    } else {
      let obj = callback(table[3]);
      rejectResult = callback(table[3]).timeoutPromise(5000).then((result) => {
        closure_3 = closure_3 - 1;
        let obj = { connection_id: closure_2 };
        return closure_1_9.put(closure_0, closure_1, obj).catch((error) => {
          if (closure_3 <= 0) {
            let rejectResult = Promise.reject(error);
          } else {
            let obj = callback(table[3]);
            rejectResult = callback(table[3]).timeoutPromise(5000).then((result) => {
              closure_3 = closure_3 - 1;
              let obj = { connection_id: closure_2 };
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
  return value.then((result) => {
    obj = { type: "SPOTIFY_PROFILE_UPDATE", accountId: closure_0, isPremium: "premium" === result.body.product };
    obj.dispatch(obj);
    return result;
  });
};
export const getDevices = function getDevices(accountId, accessToken) {
  closure_0 = accountId;
  obj = { url: closure_5.PLAYER_DEVICES };
  const value = obj.get(accountId, accessToken, obj);
  return value.then((result) => {
    if (result.body) {
      obj = { type: "SPOTIFY_SET_DEVICES", accountId: null, devices: null };
      obj[1] = closure_0;
      obj[2] = result.body.devices;
      obj.dispatch(obj);
    }
    return result;
  });
};
export const play = function play(arg0, arg1, sync_id, TRACK) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = sync_id;
  obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  c5 = undefined;
  const PLAYER_OPENResult = c5.PLAYER_OPEN(TRACK, sync_id, false);
  const deviceId = obj.deviceId;
  const position = obj.position;
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
  return obj.put(arg0, arg1, obj).then((result) => {
    let putResult = result;
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
    }
    return putResult;
  }).then((result) => {
    callback(sync_id[5]);
    obj = { type: "SPOTIFY_PLAYER_PLAY", id: sync_id, position: null };
    let num = 0;
    if (null != position) {
      num = position;
    }
    obj[2] = num;
    obj.dispatch(obj);
    return result;
  });
};
export const pause = function pause(arg0, arg1) {
  obj = { url: closure_5.PLAYER_PAUSE };
  return obj.put(arg0, arg1, obj).then((result) => {
    callback(table[5]).dispatch({ type: "SPOTIFY_PLAYER_PAUSE" });
    return result;
  });
};
export const fetchIsSpotifyProtocolRegistered = function fetchIsSpotifyProtocolRegistered() {
  if (!protocolRegistered.isProtocolRegistered()) {
    if (obj.isDesktop()) {
      obj132Default.isProtocolRegistered(closure_4).then((result) => {
        callback(table[5]);
        obj = { type: "SPOTIFY_SET_PROTOCOL_REGISTERED", isRegistered: result };
        obj.dispatch(obj);
      });
      const isProtocolRegisteredResult = obj132Default.isProtocolRegistered(closure_4);
    }
    obj = obj132;
  }
};
export const setActiveDevice = function setActiveDevice(accountId, deviceId) {
  obj = { type: "SPOTIFY_SET_ACTIVE_DEVICE", accountId, deviceId };
  obj.dispatch(obj);
};