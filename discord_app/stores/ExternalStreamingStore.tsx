// discord_app/stores/ExternalStreamingStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef1342 from "../../_runtime/metro/01342__.js";
import ConnectedAccountsActionCreatorsDefault from "../actions/ConnectedAccountsActionCreators.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import ConnectedAccountsStore from "ConnectedAccountsStore.tsx";
import StreamerModeStore from "StreamerModeStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let _null, c7, c8, closure_11, constants;

function makeTwitchRequest(arg0, query, arg2) {
  let headers;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: "https://api.twitch.tv/helix" + arg0, query, headers, rejectWithError: false };
  const get = HTTP.get;
  headers = { "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s", Authorization: "Bearer " + arg2 };
  return get(request);
}
let obj = function _getTwitchGame() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c4;
    let c5;
    let closure_1;
    let closure_2;
    let closure_3;
    let name;
    let closure_0 = arg0;
    if (null != closure_2_14[closure_0]) {
      return closure_2_14[closure_0];
    }
    const obj5 = { id: tmp21 };
    await makeTwitchRequest("/games", obj5, tmp22);
    const data = value.body.data;
    const first = data[0];
    if (first != null) {
      name = first.name;
    }
    closure_131_14[closure_0] = name;
    return name;
  });
  return obj(...arguments);
};
function streamerModeUpdate() {
  if (StreamerModeStore.enabled) {
    obj2.start();
  } else {
    obj2.stop();
  }
}
const PlatformTypes = Constants.PlatformTypes;
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
  start() {
    const self = this;
    if (!this._started) {
      self._started = true;
      if (ConnectedAccountsStore.isFetching()) {
        obj = ConnectedAccountsActionCreatorsDefault;
        const response = obj.fetch();
      } else {
        self._check();
      }
    }
  }
  stop() {
    this._started = false;
    c12 = null;
    c11 = 0;
    if (null != this._nextCheck) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp._nextCheck);
    }
    obj = DispatcherDefault;
    obj.dispatch({ type: "STREAMING_UPDATE", stream: null });
  }
  _checkTwitch(type) {
    let closure_0 = type;
    let tmp = result;
    if (result === undefined) {
      tmp = null;
    }
    let closure_1 = tmp;
    let self = this;
    return (async function () {
      let _undefined;
      function getTwitchGame() {
        return closure_1_16(...arguments);
      }
      function parseUsernameFromThumbnail(thumbnail_url) {
        const match = regex.exec(thumbnail_url);
        let tmp2;
        if (match != null) {
          tmp2 = match[1];
        }
        return tmp2;
      }
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c6;
        let closure_5;
        try {
          let accessToken;
          let thumbnail_url;
          let game_id;
          let title;
          let obj10;
          let closure_6;
          let name;
          let substr;
          let substr1;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_4 = tmp;
              let closure_3 = tmp4;
              accessToken = undefined;
              thumbnail_url = undefined;
              game_id = undefined;
              title = undefined;
              obj10 = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              name = undefined;
              substr = undefined;
              substr1 = undefined;
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
                  c6 = 1;
                  const obj4 = { user_id: accessToken.id, first: 1 };
                  c7 = 2;
                  c8 = 1;
                  const obj6 = { value: makeTwitchRequest("/streams", obj4, closure_1), done: false };
                  return obj6;
                }
              }
            }
          } else if (1 === c7) {
            c6 = 0;
            let catchPromise = null;
            if (401 === closure_5.status) {
              catchPromise = null;
              if (null == closure_132_1) {
                const obj9 = _undefined(name[6]);
                const refreshAccessTokenResult = obj9.refreshAccessToken(closure_132_0.type, closure_132_0.id);
                const nextPromise = refreshAccessTokenResult.then((result) => name._checkTwitch(accessToken, result));
                catchPromise = nextPromise.catch(() => null);
              }
            }
            c8 = 3;
            const obj7 = { value: catchPromise, done: true };
            return obj7;
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              accessToken = value.body.data[0];
              if (null != accessToken) {
                if ("live" === accessToken.type) {
                  thumbnail_url = accessToken.thumbnail_url;
                  game_id = accessToken.game_id;
                  title = accessToken.title;
                  let tmp39;
                  if (null != thumbnail_url) {
                    const obj5 = accessToken(name[8]);
                    const assetFromImageURL = obj5.getAssetFromImageURL(c6.TWITCH, thumbnail_url);
                    _undefined = assetFromImageURL;
                    if (assetFromImageURL == null) {
                      _undefined = undefined;
                    }
                    tmp39 = _undefined;
                  }
                  obj10 = { large_image: tmp39 };
                  c7 = 3;
                  c8 = 1;
                  const obj11 = { value: getTwitchGame(game_id, closure_132_1), done: false };
                  return obj11;
                }
              }
              const _Error = Error;
              self = this;
              const self2 = this;
              const error = new Error("no stream");
              throw error;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_5 = value;
            const obj15 = _undefined(name[9]);
            closure_6 = obj15.get(c6.TWITCH);
            const tmp77 = parseUsernameFromThumbnail(thumbnail_url);
            name = tmp77;
            if (tmp77 == null) {
              name = closure_132_0.name;
            }
            substr = undefined;
            if (null != title) {
              if ("" !== title) {
                substr = title.slice(0, 128);
              }
            }
            substr1 = undefined;
            if (null != closure_5) {
              if ("" !== closure_5) {
                substr1 = closure_5.slice(0, 128);
              }
            }
            const getPlatformUserUrl = closure_6.getPlatformUserUrl;
            let platformUserUrl;
            if (getPlatformUserUrl != null) {
              obj = { id: closure_132_0.id, name };
              platformUserUrl = getPlatformUserUrl(obj);
            }
            const obj13 = {
              url: platformUserUrl,
              name: closure_6.name,
              assets: obj10,
              details: substr,
              state: substr1,
            };
            c6 = 0;
            c8 = 3;
            const obj14 = { value: obj13, done: true };
            return obj14;
          }
        } catch (tmp63) {
          closure_5 = tmp63;
          if (0 === c6) {
            c8 = 3;
            throw tmp63;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  }
  _checkYouTube(type) {
    let closure_0 = type;
    let tmp = result;
    if (result === undefined) {
      tmp = null;
    }
    let c1 = tmp;
    let self = this;
    return (async function () {
      let closure_1;
      let large_image;
      let obj3;
      let obj5;
      if (constants === 2) {
        constants = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let closure_2;
          let items;
          let id;
          let snippet;
          let title;
          let thumbnails;
          let assets;
          let substr;
          let obj10;
          constants = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              items = undefined;
              _null = undefined;
              id = undefined;
              snippet = undefined;
              title = undefined;
              thumbnails = undefined;
              assets = undefined;
              substr = undefined;
              closure_8 = undefined;
              obj10 = null;
              if (!large_image.revoked) {
                if (!set.has(large_image.id)) {
                  let accessToken;
                  c4 = 1;
                  const HTTP = large_image(closure_2[5]).HTTP;
                  const request = {
                    url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                    query: { part: "id,snippet", broadcastStatus: "active", broadcastType: "all" },
                    headers: obj5,
                    oldFormErrors: true,
                    rejectWithError: false,
                  };
                  const get = HTTP.get;
                  if (null != c1) {
                    accessToken = c1;
                  } else {
                    accessToken = large_image.accessToken;
                  }
                  obj5 = { Authorization: "Bearer " + accessToken };
                  const _HermesInternal2 = HermesInternal;
                  c5 = 2;
                  constants = 1;
                  const obj7 = { value: get(request), done: false };
                  return obj7;
                }
              }
              constants = 3;
              return { value: null, done: true };
            }
          } else if (1 === c5) {
            let catchPromise;
            c4 = 0;
            let closure_9 = closure_3;
            if (401 === closure_9.status) {
              if (null == closure_130_1) {
                const obj6 = _null(closure_2[6]);
                const refreshAccessTokenResult = obj6.refreshAccessToken(closure_130_0.type, closure_130_0.id);
                const nextPromise = refreshAccessTokenResult.then((result) =>
                  closure_1_2._checkYouTube(large_image, result),
                );
                catchPromise = nextPromise.catch(() => null);
              }
              constants = 3;
              const obj8 = { value: catchPromise, done: true };
              return obj8;
            }
            catchPromise = null;
            if (403 === closure_9.status) {
              set.add(closure_130_0.id);
              catchPromise = null;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            constants = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            items = value.body.items;
            if (items.length < 1) {
              const _Error = Error;
              self = this;
              const self2 = this;
              const error = new Error("no stream");
              throw error;
            } else {
              _null = items[0];
              id = _null.id;
              snippet = _null.snippet;
              title = snippet.title;
              thumbnails = snippet.thumbnails;
              const obj13 = large_image(closure_2[8]);
              const assetFromImageURL = obj13.getAssetFromImageURL(constants.YOUTUBE, thumbnails.high.url);
              large_image = assetFromImageURL;
              if (assetFromImageURL == null) {
                large_image = undefined;
              }
              assets = { large_image };
              substr = undefined;
              if (null != title) {
                if ("" !== title) {
                  substr = title.slice(0, 128);
                }
              }
              obj10 = {
                url: "https://youtube.com/watch?v=" + closure_8,
                name: obj3.get(constants.YOUTUBE).name,
                details: substr,
                assets,
              };
              closure_8 = id;
              const _HermesInternal = HermesInternal;
              obj3 = _null(closure_2[9]);
              c4 = 0;
              constants = 3;
              const obj11 = { value: obj10, done: true };
              return obj11;
            }
          }
        } catch (tmp44) {
          closure_3 = tmp44;
          if (0 === c4) {
            constants = 3;
            throw tmp44;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  }
  _check() {
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
          const arr = items.push(PlatformTypes.YOUTUBE);
          closure_11 = timestamp + closure_8;
        }
        const found = accounts.filter((type) => items.includes(type.type));
        const allSettledResult = Promise.allSettled(
          found.map((type) => {
            let _checkTwitchResult;
            if (type.type === PlatformTypes.TWITCH) {
              _checkTwitchResult = self._checkTwitch(type);
            } else {
              _checkTwitchResult = self._checkYouTube(type);
            }
            return _checkTwitchResult;
          }),
        );
        allSettledResult.then((arr) => {
          if (self._started) {
            const iter = arr.find((status) => "fulfilled" === status.status && null != status.value);
            let value;
            if (iter != null) {
              value = iter.value;
            }
            const tmp4 = null == value && null != c12;
            if (tmp4) {
              value = c12;
            }
            const obj3 = { type: "STREAMING_UPDATE", stream: value };
            obj2 = DispatcherDefault;
            obj2.dispatch(obj3);
          }
          self._scheduleCheck();
        });
      }
    }
  }
  _scheduleCheck() {
    const self = this;
    if (this._started) {
      const _setTimeout = setTimeout;
      tmp._nextCheck = setTimeout(() => self._check(), MINUTE);
    }
  }
}
const prototype = StreamingPoller.prototype;
let obj2 = Object.create(StreamingPoller.prototype);
obj2._started = false;
const Store = get_initializedDefault.Store;
class ExternalStreamingStore extends Store {
  initialize() {
    if (StreamerModeStore.enabled) {
      obj2.start();
    }
    this.waitFor(ConnectedAccountsStore, StreamerModeStore);
    const items = [StreamerModeStore];
    this.syncWith(items, streamerModeUpdate);
  }
  getStream() {
    return stream;
  }
}
const prototype2 = ExternalStreamingStore.prototype;
ExternalStreamingStore.displayName = "ExternalStreamingStore";
obj = {
  STREAMING_UPDATE: function streamUpdate(stream) {
    if (_modDef1342(stream.stream, stream)) {
      return false;
    } else {
      stream = stream.stream;
      if (stream == null) {
        stream = null;
      }
    }
  },
  USER_CONNECTIONS_UPDATE() {
    return obj2._check();
  },
};
const externalStreamingStore = new ExternalStreamingStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/ExternalStreamingStore.tsx");

export default externalStreamingStore;
