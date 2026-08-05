// discord_app/stores/ExternalStreamingStore.tsx
import sendRequest from "sendRequest";
import closure_4 from "set";
import initialize from "initialize";
import { PlatformTypes } from "ME";
import { Store } from "initialize";
import set from "initialize";
import { isUndefinedOrNull } from "../../_runtime/00659_isUndefinedOrNull.js";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { callback } from "../actions/ConnectedAccountsActionCreators.tsx";
import { dispatcher } from "../Dispatcher.tsx";

const require = arg1;
function makeTwitchRequest(arg0, query) {
  const HTTP = sendRequest.HTTP;
  let obj = { url: "https://api.twitch.tv/helix" + arg0, query, headers: null, rejectWithError: false };
  obj = { "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s", Authorization: "Bearer " + arg2 };
  obj[2] = obj;
  return HTTP.get(obj);
}
function _getTwitchGame() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, body) {
      let sendRequest = tmp2;
      let name = tmp3;
      if (null != outer1_14[closure_0]) {
        return tmp27;
      }
      const obj2 = { id: null };
      obj2[0] = tmp24;
      yield outer1_15("/games", obj2, tmp25);
      const data = body.body.data;
      const first = data[0];
      if (first != null) {
        name = first.name;
      }
      closure_14[closure_0] = name;
      return name;
    })();
  });
  const _getTwitchGame = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function streamerModeUpdate() {
  if (initialize.enabled) {
    obj.start();
  } else {
    obj.stop();
  }
}
const MINUTE = require("set").Millis.MINUTE;
let closure_8 = 5 * require("set").Millis.MINUTE;
const re9 = /live_user_(.*)-\{width\}/;
let c10 = null;
let c11 = 0;
let c12 = null;
let set = new Set();
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
    if (closure_4.isFetching()) {
      const response = callback.fetch();
      const obj = callback;
    } else {
      self._check();
    }
  }
};
prototype["stop"] = function stop() {
  this._started = false;
  let c12 = null;
  let c11 = 0;
  if (null != this._nextCheck) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp._nextCheck);
  }
  dispatcher.dispatch({ type: "STREAMING_UPDATE", stream: null });
};
prototype["_checkTwitch"] = function _checkTwitch(accessToken, arg1) {
  let closure_0 = accessToken;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  const importDefault = tmp;
  let self = this;
  return callback(function*() {
    if (c8 === 2) {
      c8 = 3;
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c4 = tmp3;
            let c3 = tmp7;
            let accessToken;
            let c1;
            let name;
            c3 = undefined;
            c4 = undefined;
            let status;
            let constants;
            c7 = undefined;
            c8 = undefined;
            let c9;
            if (outer1_0.revoked) {
              c8 = 3;
              return { value: null, done: true };
            } else {
              accessToken = outer1_1;
              if (outer1_1 == null) {
                accessToken = outer1_0.accessToken;
              }
              outer1_1 = accessToken;
              if (null == accessToken) {
                c8 = 3;
                return { value: null, done: true };
              } else {
                constants = 1;
                const obj1 = { user_id: null, first: 1 };
                obj1[0] = outer1_0.id;
                c7 = 2;
                c8 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = outer1_15("/streams", obj1, outer1_1);
                return obj2;
              }
            }
          }
        } else if (1 === tmp7) {
          constants = 0;
          let catchPromise = null;
          if (401 === status.status) {
            catchPromise = null;
            if (null == thumbnail_url) {
              let obj8 = outer1_1(outer1_2[6]);
              const refreshAccessTokenResult = obj8.refreshAccessToken(accessToken.type, accessToken.id);
              catchPromise = obj8.refreshAccessToken(accessToken.type, accessToken.id).then((arg0) => name._checkTwitch(accessToken, arg0)).catch(() => null);
              const nextPromise = obj8.refreshAccessToken(accessToken.type, accessToken.id).then((arg0) => name._checkTwitch(accessToken, arg0));
            }
          }
          c8 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = catchPromise;
          return obj3;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            c8 = 3;
            let obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            let closure_0 = arg1.body.data[0];
            if (null != closure_0) {
              if ("live" === closure_0.type) {
                thumbnail_url = closure_0.thumbnail_url;
                let self = closure_0.game_id;
                const outer2_3 = closure_0.title;
                let tmp42;
                if (null != thumbnail_url) {
                  obj4 = outer1_0(outer1_2[8]);
                  const assetFromImageURL = obj4.getAssetFromImageURL(constants.TWITCH, thumbnail_url);
                  c1 = assetFromImageURL;
                  if (assetFromImageURL == null) {
                    c1 = undefined;
                  }
                  tmp42 = c1;
                }
                const obj5 = { large_image: null };
                obj5[0] = tmp42;
                const outer2_4 = obj5;
                c7 = 3;
                c8 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = (function getTwitchGame(self, outer1_1) {
                  self = this;
                  const apply = closure_16.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(self, outer1_1);
                return obj6;
              }
            }
            const _Error = Error;
            const error = new Error("no stream");
            throw error;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          constants = 0;
          c8 = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        } else {
          status = arg1;
          constants = outer1_1(outer1_2[9]).get(constants.TWITCH);
          const tmp84 = (function parseUsernameFromThumbnail(c1) {
            const match = _undefined.exec(c1);
            let tmp2;
            if (match != null) {
              tmp2 = match[1];
            }
            return tmp2;
          })(c1);
          name = tmp84;
          if (tmp84 == null) {
            name = closure_0.name;
          }
          const outer2_7 = name;
          let substr;
          if (null != outer2_3) {
            if ("" !== outer2_3) {
              substr = outer2_3.slice(0, 128);
            }
          }
          const outer2_8 = substr;
          let substr1;
          if (null != outer2_5) {
            if ("" !== outer2_5) {
              substr1 = outer2_5.slice(0, 128);
            }
          }
          const outer2_9 = substr1;
          const getPlatformUserUrl = outer2_6.getPlatformUserUrl;
          let platformUserUrl;
          if (getPlatformUserUrl != null) {
            obj = { id: null, name: null };
            obj[0] = accessToken.id;
            obj[1] = c7;
            platformUserUrl = getPlatformUserUrl(obj);
          }
          obj8 = { url: null, name: null, assets: null, details: null, state: null };
          obj8[0] = platformUserUrl;
          obj8[1] = outer2_6.name;
          obj8[2] = outer2_4;
          obj8[3] = outer2_8;
          obj8[4] = outer2_9;
          constants = 0;
          c8 = 3;
          const obj9 = { value: null, done: true };
          obj9[0] = obj8;
          return obj9;
        }
      } catch (tmp68) {
        status = tmp68;
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
prototype["_checkYouTube"] = function _checkYouTube(c0, arg1) {
  let closure_0 = c0;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  const importDefault = tmp;
  const self = this;
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
        if (0 === thumbnails) {
          if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let id = tmp3;
            let closure_1 = tmp7;
            let length;
            closure_1 = undefined;
            id = undefined;
            let snippet;
            let arr;
            thumbnails = undefined;
            constants = undefined;
            let substr;
            let closure_8;
            let outer1_12 = null;
            if (!outer1_0.revoked) {
              if (!outer1_13.has(outer1_0.id)) {
                arr = 1;
                const HTTP = outer1_0(outer1_2[5]).HTTP;
                let get = HTTP.get;
                const obj1 = { url: "https://www.googleapis.com/youtube/v3/liveBroadcasts", query: null, headers: null, oldFormErrors: true, rejectWithError: false };
                obj1[1] = { part: "id,snippet", broadcastStatus: "active", broadcastType: "all" };
                if (null != outer1_1) {
                  let accessToken = outer1_1;
                } else {
                  accessToken = outer1_0.accessToken;
                }
                let obj2 = { Authorization: null };
                const _HermesInternal2 = HermesInternal;
                obj2[0] = "Bearer " + accessToken;
                obj1[2] = obj2;
                get = get(obj1);
                thumbnails = 2;
                constants = 1;
              }
            }
            constants = 3;
            return { value: null, done: true };
          }
        } else if (1 === tmp7) {
          arr = 0;
          const outer1_9 = snippet;
          if (401 !== outer1_9.status) {
            if (403 === outer1_9.status) {
              outer1_13.add(outer1_0.id);
            }
            constants = 3;
          }
          let obj5 = outer1_1(outer1_2[6]);
          const refreshAccessTokenResult = obj5.refreshAccessToken(outer1_0.type, outer1_0.id);
          obj5.refreshAccessToken(outer1_0.type, outer1_0.id).then((arg0) => id._checkYouTube(c0, arg0)).catch(() => null);
          const nextPromise = obj5.refreshAccessToken(outer1_0.type, outer1_0.id).then((arg0) => id._checkYouTube(c0, arg0));
        } else if (arg0 === 1) {
          constants = 3;
          throw arg1;
        } else if (arg0 === 2) {
          arr = 0;
          constants = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          length = arg1.body.items;
          if (length.length < 1) {
            const _Error = Error;
            const error = new Error("no stream");
            throw error;
          } else {
            closure_1 = length[0];
            id = closure_1.id;
            snippet = closure_1.snippet;
            arr = snippet.title;
            thumbnails = snippet.thumbnails;
            const assetFromImageURL = outer1_0(outer1_2[8]).getAssetFromImageURL(constants.YOUTUBE, thumbnails.high.url);
            length = assetFromImageURL;
            if (assetFromImageURL == null) {
              length = undefined;
            }
            obj = { large_image: null };
            obj[0] = length;
            constants = obj;
            substr = undefined;
            if (null != arr) {
              if ("" !== arr) {
                substr = arr.slice(0, 128);
              }
            }
            const obj4 = { url: null, name: null, details: null, assets: null };
            closure_8 = id;
            const _HermesInternal = HermesInternal;
            obj4[0] = "https://youtube.com/watch?v=" + closure_8;
            obj2 = outer1_1(outer1_2[9]);
            obj4[1] = obj2.get(constants.YOUTUBE).name;
            obj4[2] = substr;
            obj4[3] = constants;
            outer1_12 = obj4;
            arr = 0;
            constants = 3;
            obj5 = { value: null, done: true };
            obj5[0] = obj4;
            return obj5;
          }
        }
      } catch (tmp50) {
        snippet = tmp50;
        if (tmp4 === arr) {
          constants = tmp2;
          throw tmp50;
        } else {
          thumbnails = tmp;
        }
      }
    }
  })();
};
prototype["_check"] = function _check() {
  let self = this;
  self = this;
  if (this._started) {
    const accounts = closure_4.getAccounts();
    if (null != accounts) {
      if (null != self._nextCheck) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._nextCheck);
      }
      const items = [PlatformTypes.TWITCH];
      const _Date = Date;
      const timestamp = Date.now();
      if (closure_11 <= timestamp) {
        items.push(tmp5.YOUTUBE);
        closure_11 = timestamp + closure_8;
      }
      const found = accounts.filter((type) => items.includes(type.type));
      Promise.allSettled(found.map((type) => {
        if (type.type === outer1_6.TWITCH) {
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
          let value;
          if (iter != null) {
            value = iter.value;
          }
          let tmp4 = null == value;
          if (tmp4) {
            tmp4 = null != outer1_12;
          }
          if (tmp4) {
            value = outer1_12;
          }
          obj = { type: "STREAMING_UPDATE", stream: null };
          obj[1] = value;
          self(outer1_2[7]).dispatch(obj);
          const obj2 = self(outer1_2[7]);
        }
        obj._scheduleCheck();
      });
      const allSettledResult = Promise.allSettled(found.map((type) => {
        if (type.type === outer1_6.TWITCH) {
          let _checkTwitchResult = self._checkTwitch(type);
        } else {
          _checkTwitchResult = self._checkYouTube(type);
        }
        return _checkTwitchResult;
      }));
      tmp5 = PlatformTypes;
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
let obj = Object.create(StreamingPoller.prototype);
obj._started = false;
class ExternalStreamingStore extends Store {
}
const prototype2 = ExternalStreamingStore.prototype;
prototype2["initialize"] = function initialize() {
  if (initialize.enabled) {
    obj.start();
  }
  this.waitFor(closure_4, initialize);
  const items = [initialize];
  this.syncWith(items, streamerModeUpdate);
};
prototype2["getStream"] = function getStream() {
  return c10;
};
ExternalStreamingStore.displayName = "ExternalStreamingStore";
obj = {
  STREAMING_UPDATE: function streamUpdate(stream) {
    if (isUndefinedOrNull(stream.stream, stream)) {
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
const externalStreamingStore = new ExternalStreamingStore(require("dispatcher"), obj);
const result = set.fileFinishedImporting("stores/ExternalStreamingStore.tsx");

export default externalStreamingStore;