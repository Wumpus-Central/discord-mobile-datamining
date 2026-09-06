// === Module 11460: ExternalStreamingStore ===

// Module 11460 (ExternalStreamingStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import _modDef1332 from "module_1332" /* 1332 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 5406 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;
import StreamerModeStore from "StreamerModeStore" /* 4405 */;

require = fn;
function makeTwitchRequest(arg0, query, arg2) {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: "https://api.twitch.tv/helix" + arg0, query, headers: null, rejectWithError: false };
  headers = { "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s", Authorization: "Bearer " + arg2 };
  request.headers = headers;
  return HTTP.get(request);
}
let closure_16 = async function _getTwitchGame() {
  closure_3 = tmp2;
  closure_2 = tmp3;
  closure_130_0 = closure_0;
  if (null != value[closure_0]) {
    return tmp26;
  }
  await makeTwitchRequest("/games", { id: tmp23 }, tmp24);
  const data = value.body.data;
  const first = data[0];
  if (first != null) {
    const name = first.name;
  }
  closure_130_2 = name;
  closure_131_14[closure_130_0] = closure_130_2;
  return closure_130_2;
};
function streamerModeUpdate() {
  if (StreamerModeStore.enabled) {
    obj.start();
  } else {
    obj.stop();
  }
}
const PlatformTypes = fn(1074).PlatformTypes;
const MINUTE = DurationsDefault.Millis.MINUTE;
let closure_8 = 5 * DurationsDefault.Millis.MINUTE;
const re9 = /live_user_(.*)-\{width\}/;
let stream = null;
let c11 = 0;
let c12 = null;
const set = new Set();
let closure_14 = {};
class StreamingPoller {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj._started = false;
    return obj;
  }
}
const prototype = StreamingPoller.prototype;
prototype["start"] = function start() {
  const self = this;
  if (!this._started) {
    self._started = true;
    if (ConnectedAccountsStore.isFetching()) {
      const response = ConnectedAccountsActionCreatorsDefault.fetch();
    } else {
      self._check();
    }
  }
};
prototype["stop"] = function stop() {
  this._started = false;
  c12 = null;
  c11 = 0;
  if (null != this._nextCheck) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp._nextCheck);
  }
  DispatcherDefault.dispatch({ type: "STREAMING_UPDATE", stream: null });
};
prototype["_checkTwitch"] = function _checkTwitch(type) {
  closure_0 = type;
  let tmp = result;
  if (result === undefined) {
    tmp = null;
  }
  closure_1 = tmp;
  let self = this;
  return (async () => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = undefined;
            let thumbnail_url;
            let game_id;
            let title;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            closure_131_6 = undefined;
            closure_131_7 = undefined;
            closure_131_8 = undefined;
            closure_131_9 = undefined;
            if (accessToken.revoked) {
              c8 = 3;
              return { value: null, done: true };
            } else {
              accessToken = closure_1;
              if (closure_1 == null) {
                accessToken = accessToken.accessToken;
              }
              closure_1 = accessToken;
              if (null == accessToken) {
                c8 = 3;
                return { value: null, done: true };
              } else {
                constants = 1;
                const obj1 = { user_id: accessToken.id, first: 1 };
                c7 = 2;
                c8 = 1;
                const obj2 = { value: makeTwitchRequest("/streams", obj1, closure_1), done: false };
                return obj2;
              }
            }
          }
        } else if (1 === tmp7) {
          constants = 0;
          let catchPromise = null;
          if (401 === tmp68.status) {
            catchPromise = null;
            if (null == closure_132_1) {
              let obj8 = _undefined(name[6]);
              const refreshAccessTokenResult = obj8.refreshAccessToken(closure_132_0.type, closure_132_0.id);
              catchPromise = obj8.refreshAccessToken(closure_132_0.type, closure_132_0.id).then((result) => name._checkTwitch(accessToken, result)).catch(() => null);
              const nextPromise = obj8.refreshAccessToken(closure_132_0.type, closure_132_0.id).then((result) => name._checkTwitch(accessToken, result));
            }
          }
          c8 = 3;
          const obj3 = { value: catchPromise, done: true };
          return obj3;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            constants = 0;
            c8 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_131_0 = value.body.data[0];
            if (null != closure_131_0) {
              if ("live" === closure_131_0.type) {
                thumbnail_url = closure_131_0.thumbnail_url;
                game_id = closure_131_0.game_id;
                title = closure_131_0.title;
                let tmp42;
                if (null != thumbnail_url) {
                  obj4 = accessToken(name[8]);
                  const assetFromImageURL = obj4.getAssetFromImageURL(constants.TWITCH, thumbnail_url);
                  _undefined = assetFromImageURL;
                  if (assetFromImageURL == null) {
                    _undefined = undefined;
                  }
                  tmp42 = _undefined;
                }
                const obj5 = { large_image: tmp42 };
                closure_131_4 = obj5;
                c7 = 3;
                c8 = 1;
                const obj6 = {
                  value: (function getTwitchGame() {
                                self = this;
                                const apply = closure_1_16.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              })(game_id, closure_132_1),
                  done: false
                };
                return obj6;
              }
            }
            const _Error = Error;
            const error = new Error("no stream");
            throw error;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          constants = 0;
          c8 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_131_5 = value;
          closure_131_6 = _undefined(name[9]).get(constants.TWITCH);
          const tmp83 = (function parseUsernameFromThumbnail(thumbnail_url) {
            const match = regex.exec(thumbnail_url);
            let tmp2;
            if (match != null) {
              tmp2 = match[1];
            }
            return tmp2;
          })(thumbnail_url);
          name = tmp83;
          if (tmp83 == null) {
            name = closure_132_0.name;
          }
          closure_131_7 = name;
          let substr;
          if (null != title) {
            if ("" !== title) {
              substr = title.slice(0, 128);
            }
          }
          closure_131_8 = substr;
          let substr1;
          if (null != closure_131_5) {
            if ("" !== closure_131_5) {
              substr1 = closure_131_5.slice(0, 128);
            }
          }
          closure_131_9 = substr1;
          const getPlatformUserUrl = closure_131_6.getPlatformUserUrl;
          let platformUserUrl;
          if (getPlatformUserUrl != null) {
            obj = { id: closure_132_0.id, name: closure_131_7 };
            platformUserUrl = getPlatformUserUrl(obj);
          }
          obj8 = { url: platformUserUrl, name: closure_131_6.name, assets: closure_131_4, details: closure_131_8, state: closure_131_9 };
          constants = 0;
          c8 = 3;
          const obj9 = { value: obj8, done: true };
          return obj9;
        }
      } catch (tmp68) {
        if (tmp4 === constants) {
          c8 = tmp2;
          throw tmp68;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
prototype["_checkYouTube"] = function _checkYouTube(type) {
  closure_0 = type;
  let tmp = result;
  if (result === undefined) {
    tmp = null;
  }
  c1 = tmp;
  const self = this;
  return (async () => {
    if (constants === 2) {
      constants = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        constants = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            constants = 3;
            obj = { value, done: true };
            return obj;
          } else {
            _null = tmp7;
            let items;
            closure_129_1 = undefined;
            let id;
            let snippet;
            let title;
            let thumbnails;
            closure_129_6 = undefined;
            closure_129_7 = undefined;
            closure_129_8 = undefined;
            let obj3 = null;
            if (!large_image.revoked) {
              if (!set.has(large_image.id)) {
                c4 = 1;
                const HTTP = large_image(tmp3[5]).HTTP;
                let get = HTTP.get;
                const request = { url: "https://www.googleapis.com/youtube/v3/liveBroadcasts", query: { part: "id,snippet", broadcastStatus: "active", broadcastType: "all" }, headers: null, oldFormErrors: true, rejectWithError: false };
                if (null != c1) {
                  let accessToken = c1;
                } else {
                  accessToken = large_image.accessToken;
                }
                const obj1 = { Authorization: null };
                const _HermesInternal2 = HermesInternal;
                obj1.Authorization = "Bearer " + accessToken;
                request.headers = obj1;
                get = get(request);
                c5 = 2;
                constants = 1;
              }
            }
            constants = 3;
            return { value: null, done: true };
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_9 = closure_3;
          if (401 !== closure_129_9.status) {
            if (403 === closure_129_9.status) {
              set.add(closure_130_0.id);
            }
            constants = 3;
          }
          const obj6 = _null(tmp3[6]);
          const refreshAccessTokenResult = _null(tmp3[6]).refreshAccessToken(closure_130_0.type, closure_130_0.id);
          _null(tmp3[6]).refreshAccessToken(closure_130_0.type, closure_130_0.id).then((result) => closure_1_2._checkYouTube(large_image, result)).catch(() => null);
          const nextPromise = _null(tmp3[6]).refreshAccessToken(closure_130_0.type, closure_130_0.id).then((result) => closure_1_2._checkYouTube(large_image, result));
        } else if (arg0 === 1) {
          constants = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          constants = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          items = value.body.items;
          if (items.length < 1) {
            const _Error = Error;
            const error = new Error("no stream");
            throw error;
          } else {
            closure_129_1 = items[0];
            id = closure_129_1.id;
            snippet = closure_129_1.snippet;
            title = snippet.title;
            thumbnails = snippet.thumbnails;
            const assetFromImageURL = large_image(tmp3[8]).getAssetFromImageURL(constants.YOUTUBE, thumbnails.high.url);
            large_image = assetFromImageURL;
            if (assetFromImageURL == null) {
              large_image = undefined;
            }
            obj = { large_image };
            closure_129_6 = obj;
            let substr;
            if (null != title) {
              if ("" !== title) {
                substr = title.slice(0, 128);
              }
            }
            closure_129_7 = substr;
            obj3 = { url: null, name: null, details: null, assets: null };
            closure_129_8 = id;
            const _HermesInternal = HermesInternal;
            obj3.url = "https://youtube.com/watch?v=" + closure_129_8;
            obj2 = _null(tmp3[9]);
            obj3.name = obj2.get(constants.YOUTUBE).name;
            obj3.details = closure_129_7;
            obj3.assets = closure_129_6;
            c4 = 0;
            constants = 3;
            const obj4 = { value: obj3, done: true };
            return obj4;
          }
        }
      } catch (tmp50) {
        closure_3 = tmp50;
        if (tmp4 === c4) {
          constants = tmp2;
          throw tmp50;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
prototype["_check"] = function _check() {
  const self = this;
  if (this._started) {
    const accounts = ConnectedAccountsStore.getAccounts();
    if (null != accounts) {
      if (null != self._nextCheck) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._nextCheck);
      }
      const items = [PlatformTypes.TWITCH];
      const _Date = Date;
      const timestamp = Date.now();
      if (closure_11 <= timestamp) {
        items.push(PlatformTypes.YOUTUBE);
        closure_11 = timestamp + closure_8;
      }
      const found = accounts.filter((type) => items.includes(type.type));
      Promise.allSettled(found.map((type) => {
        if (type.type === PlatformTypes.TWITCH) {
          let _checkTwitchResult = self._checkTwitch(type);
        } else {
          _checkTwitchResult = self._checkYouTube(type);
        }
        return _checkTwitchResult;
      })).then((arr) => {
        let obj = self;
        if (self._started) {
          const iter = arr.find((status) => {
            let tmp = "fulfilled" === status.status;
            if (tmp) {
              tmp = null != status.value;
            }
            return tmp;
          });
          value = undefined;
          if (iter != null) {
            value = iter.value;
          }
          let tmp4 = null == value;
          if (tmp4) {
            tmp4 = null != c12;
          }
          if (tmp4) {
            value = c12;
          }
          obj = { type: "STREAMING_UPDATE", stream: value };
          DispatcherDefault.dispatch(obj);
        }
        obj._scheduleCheck();
      });
      const allSettledResult = Promise.allSettled(found.map((type) => {
        if (type.type === PlatformTypes.TWITCH) {
          let _checkTwitchResult = self._checkTwitch(type);
        } else {
          _checkTwitchResult = self._checkYouTube(type);
        }
        return _checkTwitchResult;
      }));
    }
  }
};
prototype["_scheduleCheck"] = function _scheduleCheck() {
  const self = this;
  if (this._started) {
    const _setTimeout = setTimeout;
    tmp._nextCheck = setTimeout(() => self._check(), MINUTE);
  }
};
let headers = Object.create(StreamingPoller.prototype);
headers._started = false;
const Store = initializeDefault.Store;
class ExternalStreamingStore extends Store {
}
const prototype2 = ExternalStreamingStore.prototype;
prototype2["initialize"] = function initialize() {
  if (StreamerModeStore.enabled) {
    obj.start();
  }
  this.waitFor(ConnectedAccountsStore, StreamerModeStore);
  const items = [StreamerModeStore];
  this.syncWith(items, streamerModeUpdate);
};
prototype2["getStream"] = function getStream() {
  return stream;
};
ExternalStreamingStore.displayName = "ExternalStreamingStore";
headers = {
  STREAMING_UPDATE: function streamUpdate(stream) {
    if (_modDef1332(stream.stream, stream)) {
      return false;
    } else {
      stream = stream.stream;
      if (stream == null) {
        stream = null;
      }
    }
  },
  USER_CONNECTIONS_UPDATE() {
    return obj._check();
  }
};
const externalStreamingStore = new ExternalStreamingStore(DispatcherDefault, headers);
const size = fn(2);
const result = size.fileFinishedImporting("stores/ExternalStreamingStore.tsx");

export default externalStreamingStore;