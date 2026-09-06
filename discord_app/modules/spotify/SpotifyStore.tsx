// === Module 5280: SpotifyStore ===

// Module 5280 (SpotifyStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Timers from "Timers" /* 4447 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8139 */;
import useIsSpeaking from "useIsSpeaking" /* 9478 */;
import SpotifyActionCreators from "SpotifyActionCreators" /* 11751 */;
import stopSyncingUserActivityDefault from "stopSyncingUserActivity" /* 13627 */;
import RunningGameStore from "RunningGameStore" /* 1915 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;
import IdleStore from "IdleStore" /* 5410 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import SpeakingStore from "SpeakingStore" /* 5419 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import Platforms from "Platforms" /* 5283 */;

require = fn;
function upsertAccount(accountId, accessToken) {
  if (accountId in dependencyMap) {
    dependencyMap[accountId].accessToken = accessToken;
    const _HermesInternal2 = HermesInternal;
    logger.info("Updated account access token: " + accountId);
  } else if (typeof SpotifySocket === "function") {
    const obj = Object.create(SpotifySocket.prototype);
    obj._requestedDisconnect = false;
    obj._requestedConnect = false;
    obj.handleDeviceStateChange = _modDef12.throttle(() => {
      query = SpotifyActionCreators;
      const devices = query.getDevices(query.accountId, query.accessToken);
      ({ accountId, accessToken } = query);
      const SpotifyAPI = SpotifyActionCreators.SpotifyAPI;
      const request = { url: constants.PLAYER, query: null, onlyRetryOnAuthorizationErrors: true };
      query = { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE };
      request.query = query;
      value = SpotifyAPI.get(accountId, accessToken, request);
      value.then((body) => {
        closure_0 = body;
        body = body.body;
        if (null != body) {
          updatePlayerState(accountId, accessToken, body).then(() => closure_0);
          const promise = updatePlayerState(accountId, accessToken, body);
        } else {
          const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
          obj.dispatch(obj);
        }
      }).catch(() => {
        const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj.dispatch(obj);
      });
    }, closure_29);
    obj.accountId = accountId;
    obj.accessToken = accessToken;
    const interval = new obj(4447).Interval();
    obj.pingInterval = interval;
    const tmp14 = new BackoffDefault(undefined, MINUTE);
    obj.backoff = tmp14;
    obj.connect();
    dependencyMap[accountId] = obj;
    const _HermesInternal = HermesInternal;
    logger.info("Added account: " + accountId);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function removeAccount(arg0) {
  if (arg0 in dependencyMap) {
    dependencyMap[arg0].disconnect();
    delete tmp[tmp2];
    let tmp7 = null != tmp5;
    if (tmp7) {
      tmp7 = null != _null;
    }
    if (tmp7) {
      tmp7 = tmp5.track.id === _null.track.id;
    }
    if (tmp7) {
      _null = null;
    }
    delete tmp[tmp2];
    const _HermesInternal = HermesInternal;
    logger.info("Removed account: " + arg0);
  }
}
function setActiveDevice(arg0, arg1) {
  for (const item10008 of tmp) {
    item10008.is_active = item10008.id === arg1;
    continue;
  }
}
function activitySync(userId, activity, arg2) {
  let tmp2;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp28 = dependencyMap[tmp4];
      if (!tmp28.connected) {
        continue;
      } else {
        if (null == dependencyMap2[tmp4]) {
          continue;
        } else {
          let arr = tmp5[tmp4];
          let found = arr.find((is_active) => is_active.is_active);
          if (null == found) {
            continue;
          } else {
            let obj = { socket: tmp28, device: found };
            tmp2 = obj;
            break;
          }
          break;
        }
        continue;
      }
      continue;
    }
  }
  if (null == tmp2) {
    return false;
  } else {
    ({ socket, device } = tmp2);
    ({ sync_id, party, timestamps } = activity);
    if (null != sync_id) {
      if (null != party) {
        if (null != party.id) {
          if (closure_1_14(party.id)) {
            if (null != timestamps) {
              if (null != timestamps.start) {
                let start = timestamps.start;
              }
              const _Math = Math;
              const _Date2 = Date;
              let tmp12 = null != tmp11;
              const bound = Math.max(0, Date.now() - start);
              if (tmp12) {
                tmp12 = false === tmp11.repeat;
              }
              let tmp13 = false;
              if (tmp12) {
                tmp13 = null;
              }
              const metadata = activity.metadata;
              let type;
              if (metadata != null) {
                type = metadata.type;
              }
              if (type == null) {
                type = constants2.TRACK;
              }
              const tmp14Result = map1(type);
              if (null != tmp14Result) {
                const obj4 = SpotifyActionCreators;
                obj = { position: +bound, deviceId: device.id, repeat: tmp13 };
                obj4.play(socket.accountId, socket.accessToken, sync_id, tmp14Result, obj);
                obj = { userId, partyId: party.id, trackId: sync_id, startTime: start };
                c4 = obj;
                let str = "presence change";
                if (arg2) {
                  const obj1 = { party_id: party.id, other_user_id: userId };
                  obj1.track(constants4.SPOTIFY_LISTEN_ALONG_STARTED, obj1);
                  str = "started";
                }
                const _HermesInternal = HermesInternal;
                logger.info("Listen along " + str + ": " + socket.accountId + " to " + userId + " playing " + sync_id + " on " + device.name);
              }
            }
            const _Date = Date;
            start = Date.now();
          }
        }
      }
    }
    return false;
  }
}
function handleUserActivitySyncStop() {
  let obj = AnalyticsUtilsDefault;
  let partyId = null;
  if (null != _null2) {
    partyId = _null2.partyId;
  }
  obj = { party_id: partyId, other_user_id: null };
  let userId = null;
  if (null != _null2) {
    userId = _null2.userId;
  }
  obj.other_user_id = userId;
  obj.track(constants4.SPOTIFY_LISTEN_ALONG_ENDED, obj);
  let trackId = null;
  if (null != _null2) {
    trackId = _null2.trackId;
  }
  _null2 = null;
  logger.info("Listen along stopped");
  let tmp11;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp23 = dependencyMap[tmp13];
      if (!tmp23.connected) {
        continue;
      } else {
        if (null == dependencyMap2[tmp13]) {
          continue;
        } else {
          let arr = tmp14[tmp13];
          let found = arr.find((is_active) => is_active.is_active);
          if (null == found) {
            continue;
          } else {
            obj = { socket: tmp23, device: found };
            tmp11 = obj;
            break;
          }
          break;
        }
        continue;
      }
      continue;
    }
  }
  if (null != tmp11) {
    const socket = tmp11.socket;
    if (tmp18) {
      SpotifyActionCreators.pause(socket.accountId, socket.accessToken);
    }
    tmp18 = null != dependencyMap3[socket.accountId] && dependencyMap3[socket.accountId].track.id === trackId;
  }
}
function handleUserConnectionsUpdate() {
  const keys = Object.keys(closure_40);
  const accounts = ConnectedAccountsStore.getAccounts();
  const found = accounts.filter((type) => type.type === constants.SPOTIFY);
  if (null == found) {
    return false;
  } else {
    const mapped = found.map((id) => id.id);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (!mapped.includes(nextResult)) {
        let tmp7 = removeAccount(tmp4);
      }
      continue;
    }
    let flag = false;
    for (const item10030 of found) {
      let tmp12 = null != _null;
      if (tmp12) {
        tmp12 = _null.account.id === item10030.id;
      }
      if (tmp12) {
        _null.account = item10030;
        flag = true;
      }
      if (!keys.includes(item10030.id)) {
        if (null == item10030.accessToken) {
          let obj2 = SpotifyActionCreators;
          let accessToken = obj2.getAccessToken(item10030.id);
        } else {
          let tmp21 = upsertAccount(item10030.id, item10030.accessToken);
        }
      }
      continue;
    }
    return flag;
  }
}
function autoPause() {
  if (null != c3) {
    let tmp2;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp18 = dependencyMap[tmp3];
        if (!tmp18.connected) {
          continue;
        } else {
          if (null == dependencyMap2[tmp3]) {
            continue;
          } else {
            let arr = tmp4[tmp3];
            let found = arr.find((is_active) => is_active.is_active);
            if (null == found) {
              continue;
            } else {
              let obj = { socket: tmp18, device: found };
              tmp2 = obj;
              break;
            }
            break;
          }
          continue;
        }
        continue;
      }
    }
    if (null != tmp2) {
      const socket = tmp2.socket;
      c43 = true;
      SpotifyActionCreators.pause(socket.accountId, socket.accessToken);
      AnalyticsUtilsDefault.track(constants4.SPOTIFY_AUTO_PAUSED);
      logger.info("Playback auto paused");
    }
  }
}
function updatePlayerState(accountId, arg1, device) {
  _require = accountId;
  device = device.device;
  let obj1 = device;
  ({ progress_ms: dependencyMap, is_playing: c3, repeat_state: c4, item, context } = device);
  let obj3;
  if (null != item) {
    if (item.type === constants2.TRACK) {
      id = item.id;
      if (tmp4) {
        id = item.linked_from.id;
      }
      let obj = { id, name: null, duration: null, type: null, album: null, artists: null, isLocal: null };
      ({ name: obj2.name, duration_ms: obj2.duration } = item);
      obj.type = constants2.TRACK;
      const album2 = item.album;
      let str3;
      if (album2 != null) {
        str3 = album2.id;
      }
      if (str3 == null) {
        str3 = "";
      }
      obj = { id: str3, name: null, image: null, type: null };
      const album3 = item.album;
      let str4;
      if (album3 != null) {
        str4 = album3.name;
      }
      if (str4 == null) {
        str4 = "";
      }
      obj.name = str4;
      const album4 = item.album;
      let first;
      if (album4 != null) {
        first = album4.images[0];
      }
      obj.image = first;
      const album5 = item.album;
      let type;
      if (album5 != null) {
        type = album5.type;
      }
      if (type == null) {
        type = constants2.ALBUM;
      }
      obj.type = type;
      obj.album = obj;
      const _Array = Array;
      if (Array.isArray(item.artists)) {
        const artists = item.artists;
        let found = artists.filter((id) => {
          let isNotNullishResult = accountId(position[21]).isNotNullish(id.id);
          if (isNotNullishResult) {
            isNotNullishResult = accountId(position[21]).isNotNullish(id.name);
            const tmpResult = accountId(position[21]);
          }
          return isNotNullishResult;
        });
      } else {
        found = [];
      }
      obj.artists = found;
      obj.isLocal = item.is_local || false;
      obj3 = obj;
      tmp4 = null != item.linked_from && null != item.linked_from.id;
    }
    let tmp8 = null != device;
    if (tmp8) {
      tmp8 = true !== device.is_active;
    }
    if (tmp8) {
      obj1 = {};
      const merged = Object.assign(device);
      obj1.is_active = true;
    }
    if (null != context) {
      const items = [, ];
      ({ PLAYLIST: arr3[0], ALBUM: arr3[1] } = constants2);
      if (items.includes(context.type)) {
        let context2 = spotifyStore.getPlayerState(accountId);
        if (null != context2) {
          context2 = context2.context;
          let resolved = Promise.resolve(context2);
        }
        if (context.type === constants2.ALBUM) {
          resolved = Promise.resolve(context);
        } else {
          const SpotifyAPI = require("SpotifyActionCreators").SpotifyAPI;
          const obj2 = { url: context.href };
          value = SpotifyAPI.get(accountId, arg1, obj2);
          resolved = value.then((body) => body.body).catch((error) => {
            if (error) {
              if (404 === error.status) {
                return null;
              }
            }
            throw error;
          });
          const nextPromise = value.then((body) => body.body);
        }
      }
    }
    const resolved1 = Promise.resolve(undefined);
    return resolved1.then((result) => {
      let tmp = result;
      let _public = null == result;
      if (!_public) {
        _public = tmp.type !== constants2.PLAYLIST;
      }
      if (!_public) {
        _public = tmp.public;
      }
      if (!_public) {
        tmp = null;
      }
      const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: obj3, volumePercent: null, isPlaying: null, repeat: null, position: null, context: null, device: null };
      let num = 0;
      if (null != obj1) {
        num = obj1.volume_percent;
      }
      obj.volumePercent = num;
      obj.isPlaying = isPlaying;
      obj.repeat = "off" !== _null2;
      obj.position = position;
      obj.context = tmp;
      obj.device = obj1;
      obj.dispatch(obj);
    });
  }
  if (null != item) {
    if (item.type === constants2.EPISODE) {
      obj3 = { id: null, name: null, duration: null, type: null, album: null, artists: null, isLocal: false };
      ({ id: obj6.id, name: obj6.name, duration_ms: obj6.duration } = item);
      obj3.type = constants2.EPISODE;
      const show3 = item.show;
      let str;
      if (show3 != null) {
        str = show3.id;
      }
      if (str == null) {
        str = "";
      }
      obj = { id: str, name: null, image: null, type: null };
      const show = item.show;
      let str2;
      if (show != null) {
        str2 = show.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj.name = str2;
      const show2 = item.show;
      let first1;
      if (show2 != null) {
        first1 = show2.images[0];
      }
      obj.image = first1;
      const album = item.album;
      let type1;
      if (album != null) {
        type1 = album.type;
      }
      if (type1 == null) {
        type1 = constants2.SHOW;
      }
      obj.type = type1;
      obj3.album = obj;
      obj3.artists = [];
    }
  }
}
const SpotifyConstants = fn(8340);
({ getSpotifyResourceType: map1, isSpotifyParty: closure_14, SPOTIFY_PARTY_PREFIX: closure_15, SpotifyEndpoints: closure_16, SpotifyResourceTypes: closure_17 } = SpotifyConstants);
const Constants = fn(1074);
const PlatformTypes = Constants.PlatformTypes;
({ ActivityFlags: closure_19, AnalyticEvents: closure_20 } = Constants);
const user = Platforms.get(PlatformTypes.SPOTIFY);
let c22 = "hm://pusher/v1/connections/";
let closure_23 = 30 * DurationsDefault.Millis.SECOND;
let closure_24 = 30 * DurationsDefault.Millis.SECOND;
let closure_25 = 5 * DurationsDefault.Millis.MINUTE;
let closure_26 = 5 * DurationsDefault.Millis.SECOND;
let closure_27 = 1.5 * DurationsDefault.Millis.SECOND;
const MINUTE = DurationsDefault.Millis.MINUTE;
let closure_29 = 3 * DurationsDefault.Millis.SECOND;
const constants5 = { PLAYER_STATE_CHANGED: "PLAYER_STATE_CHANGED", DEVICE_STATE_CHANGED: "DEVICE_STATE_CHANGED" };
const message = "message";
const ping = "ping";
const single = "single";
const logger = new LoggerDefault("Spotify");
const timeout = new fn(4447).Timeout();
const timeout1 = new fn(4447).Timeout();
const timeout2 = new fn(4447).Timeout();
const timeout3 = new fn(4447).Timeout();
const timeout4 = new fn(4447).Timeout();
const dependencyMap = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
let c43 = false;
let c44 = null;
let items = [WebSocket.CONNECTING, WebSocket.OPEN];
const set = new Set(items);
class SpotifySocket {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj._requestedDisconnect = false;
    obj._requestedConnect = false;
    obj2 = closure_1(closure_2[16]);
    obj.handleDeviceStateChange = obj2.throttle(() => {
      query = SpotifyActionCreators;
      const devices = query.getDevices(query.accountId, query.accessToken);
      ({ accountId, accessToken } = query);
      const SpotifyAPI = SpotifyActionCreators.SpotifyAPI;
      const request = { url: constants.PLAYER, query: null, onlyRetryOnAuthorizationErrors: true };
      query = { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE };
      request.query = query;
      value = SpotifyAPI.get(accountId, accessToken, request);
      value.then((body) => {
        closure_0 = body;
        body = body.body;
        if (null != body) {
          updatePlayerState(accountId, accessToken, body).then(() => closure_0);
          const promise = updatePlayerState(accountId, accessToken, body);
        } else {
          const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
          obj.dispatch(obj);
        }
      }).catch(() => {
        const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj.dispatch(obj);
      });
    }, closure_29);
    obj.accountId = global;
    obj.accessToken = fn;
    interval = new closure_0(closure_2[12]).Interval();
    obj.pingInterval = interval;
    tmp2 = new closure_1(closure_2[14])(undefined, closure_28);
    obj.backoff = tmp2;
    connectResult = obj.connect();
    return obj;
  }
}
const prototype = SpotifySocket.prototype;
Object.defineProperty(prototype, "connected", {
  get: function connected() {
    let hasItem = null != this.socket;
    if (hasItem) {
      hasItem = set.has(tmp.socket.readyState);
    }
    return hasItem;
  },
  set: undefined
});
prototype["connect"] = function connect() {
  const self = this;
  if (!tmp) {
    logger.info("WS Connecting");
    self._requestedDisconnect = false;
    self._requestedConnect = true;
    ({ accountId, accessToken } = self);
    closure_129_0 = accountId;
    closure_129_1 = accessToken;
    const SpotifyAPI = self(11751).SpotifyAPI;
    const request = { url: constants.PLAYER, query: null, onlyRetryOnAuthorizationErrors: true };
    const obj = { additional_types: null };
    const _HermesInternal = HermesInternal;
    obj.additional_types = "" + constants2.TRACK + "," + constants2.EPISODE;
    request.query = obj;
    value = SpotifyAPI.get(accountId, accessToken, request);
    const nextPromise = value.then((body) => {
      closure_0 = body;
      body = body.body;
      if (null != body) {
        updatePlayerState(accountId, accessToken, body).then(() => closure_0);
        const promise = updatePlayerState(accountId, accessToken, body);
      } else {
        const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj.dispatch(obj);
      }
    });
    const catchPromise = value.then((body) => {
      closure_0 = body;
      body = body.body;
      if (null != body) {
        updatePlayerState(accountId, accessToken, body).then(() => closure_0);
        const promise = updatePlayerState(accountId, accessToken, body);
      } else {
        const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj.dispatch(obj);
      }
    }).catch(() => {
      const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
      obj.dispatch(obj);
    });
    value.then((body) => {
      closure_0 = body;
      body = body.body;
      if (null != body) {
        updatePlayerState(accountId, accessToken, body).then(() => closure_0);
        const promise = updatePlayerState(accountId, accessToken, body);
      } else {
        const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj.dispatch(obj);
      }
    }).catch(() => {
      const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
      obj.dispatch(obj);
    }).then(() => {
      self._requestedConnect = false;
      const webSocket = new WebSocket("wss://dealer.spotify.com/?access_token=" + self.accessToken);
      self.socket = webSocket;
      ({ handleOpen, socket } = self);
      socket.onopen = handleOpen.bind(self);
      ({ handleMessage, socket: socket2 } = self);
      socket2.onmessage = handleMessage.bind(self);
      ({ handleClose, socket: socket3, socket: socket4 } = self);
      const bindResult = handleClose.bind(self);
      socket4.onerror = bindResult;
      socket3.onclose = bindResult;
    }).catch((error) => {
      logger.error(error);
      self._requestedConnect = false;
      self.handleClose();
    });
    const nextPromise1 = value.then((body) => {
      closure_0 = body;
      body = body.body;
      if (null != body) {
        updatePlayerState(accountId, accessToken, body).then(() => closure_0);
        const promise = updatePlayerState(accountId, accessToken, body);
      } else {
        const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj.dispatch(obj);
      }
    }).catch(() => {
      const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
      obj.dispatch(obj);
    }).then(() => {
      self._requestedConnect = false;
      const webSocket = new WebSocket("wss://dealer.spotify.com/?access_token=" + self.accessToken);
      self.socket = webSocket;
      ({ handleOpen, socket } = self);
      socket.onopen = handleOpen.bind(self);
      ({ handleMessage, socket: socket2 } = self);
      socket2.onmessage = handleMessage.bind(self);
      ({ handleClose, socket: socket3, socket: socket4 } = self);
      const bindResult = handleClose.bind(self);
      socket4.onerror = bindResult;
      socket3.onclose = bindResult;
    });
  }
  tmp = this.connected || self._requestedConnect;
};
prototype["disconnect"] = function disconnect() {
  this._requestedDisconnect = true;
  const backoff = this.backoff;
  backoff.cancel();
  try {
    const socket = this.socket;
    if (socket != null) {
      socket.close();
    }
  } catch (err) {
  }
};
prototype["ping"] = function ping() {
  if (this.connected) {
    const socket = this.socket;
    if (socket != null) {
      const _JSON = JSON;
      const obj = { type: ping };
      socket.send(JSON.stringify(obj));
    }
  }
};
prototype["handleOpen"] = function handleOpen() {
  const self = this;
  logger.info("WS Connected");
  const backoff = this.backoff;
  backoff.succeed();
  const pingInterval = this.pingInterval;
  pingInterval.start(closure_23, () => self.ping());
  const profile = SpotifyActionCreators.getProfile(this.accountId, this.accessToken);
  const devices = SpotifyActionCreators.getDevices(this.accountId, this.accessToken);
};
prototype["handleMessage"] = function handleMessage(data) {
  data = data.data;
  if (typeof data === "string") {
    const _JSON = JSON;
    const parsed = JSON.parse(data);
    ({ uri, payloads } = parsed);
    if (parsed.type === message) {
      const self = this;
      if (typeof uri === "string") {
        if (uri.startsWith(c22)) {
          const _decodeURIComponent = decodeURIComponent;
          self.connectionId = decodeURIComponent(uri.split(c22)[1]);
          const result = SpotifyActionCreators.subscribePlayerStateNotifications(self.accountId, self.accessToken, self.connectionId);
        }
      }
      const _Array = Array;
      if (Array.isArray(payloads)) {
        const iter = payloads[Symbol.iterator]();
        while (iter !== undefined) {
          let events = iter.next().events;
          if (null != events) {
            for (const item10019 of events) {
              let handleEventResult = self.handleEvent(item10019);
              continue;
            }
          }
          continue;
        }
      }
    }
  }
};
prototype["handleClose"] = function handleClose() {
  const self = this;
  const pingInterval = this.pingInterval;
  pingInterval.stop();
  if (!this._requestedDisconnect) {
    try {
      const backoff = this.backoff;
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      logger.info("WS Disconnected. Next retry in " + Math.round(backoff.fail(() => {
        if (!self._requestedDisconnect) {
          self.connect();
        }
      })) + "ms");
    } catch (err) {
    }
  }
};
prototype["handleEvent"] = function handleEvent(arg0) {
  const self = this;
  ({ type, event } = arg0);
  if (constants5.PLAYER_STATE_CHANGED === type) {
    if (tmp4) {
      updatePlayerState(self.accountId, self.accessToken, event.state);
    }
    tmp4 = null != event && null != event.state;
  } else if (tmp.DEVICE_STATE_CHANGED === type) {
    const result = self.handleDeviceStateChange();
  }
};
const Store = initializeDefault.Store;
class SpotifyStore extends Store {
}
const prototype2 = SpotifyStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ConnectedAccountsStore, IdleStore, PresenceStore, RunningGameStore, SpeakingStore, VoiceStateStore);
  const items = [PresenceStore];
  this.syncWith(items, () => {
    let flag = false;
    if (null != closure_4) {
      let tmp3;
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp] !== undefined) {
          let tmp23 = closure_40[tmp5];
          if (!tmp23.connected) {
            continue;
          } else {
            if (null == closure_41[tmp5]) {
              continue;
            } else {
              let arr = tmp6[tmp5];
              let found = arr.find((is_active) => is_active.is_active);
              if (null == found) {
                continue;
              } else {
                let obj = { socket: tmp23, device: found };
                tmp3 = obj;
                break;
              }
              break;
            }
            continue;
          }
          continue;
        }
      }
      flag = false;
      if (null != tmp3) {
        const userId = closure_4.userId;
        const findActivityResult = closure_10.findActivity(userId, (party) => {
          let tmp = null != party.party && null != party.party.id;
          if (tmp) {
            tmp = closure_1_14(party.party.id);
          }
          return tmp;
        });
        if (null == findActivityResult) {
          closure_37.start(closure_25, () => {
            let tmp = null != _null2;
            if (tmp) {
              tmp = _null2.userId === userId;
            }
            if (tmp) {
              stopSyncingUserActivityDefault();
            }
          });
          flag = false;
        } else {
          closure_37.stop();
          ({ sync_id, timestamps, party } = findActivityResult);
          let tmp12 = null != sync_id;
          if (tmp12) {
            tmp12 = closure_4.trackId !== sync_id;
          }
          let tmp13 = null != timestamps;
          if (tmp13) {
            tmp13 = closure_4.startTime !== timestamps.start;
          }
          if (!tmp12) {
            if (!tmp13) {
              let flag2 = null != party;
              if (flag2) {
                flag2 = party.id !== closure_4.partyId;
              }
              if (flag2) {
                closure_4.partyId = party.id;
                flag2 = true;
              }
            }
            flag = flag2;
          }
          flag2 = closure_50(userId, findActivityResult, false);
        }
      }
    }
    return flag;
  });
  const isSpotifyProtocolRegistered = SpotifyActionCreators.fetchIsSpotifyProtocolRegistered();
};
prototype2["hasConnectedAccount"] = function hasConnectedAccount() {
  return Object.keys(closure_40).length > 0;
};
prototype2["getActiveSocketAndDevice"] = function getActiveSocketAndDevice() {
  let tmp2;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp9 = dependencyMap[tmp4];
      if (!tmp9.connected) {
        continue;
      } else {
        if (null == dependencyMap2[tmp4]) {
          continue;
        } else {
          let arr = tmp5[tmp4];
          let found = arr.find((is_active) => is_active.is_active);
          if (null == found) {
            continue;
          } else {
            let obj = { socket: tmp9, device: found };
            tmp2 = obj;
            break;
          }
          break;
        }
        continue;
      }
      continue;
    }
  }
  return tmp2;
};
prototype2["getPlayableComputerDevices"] = function getPlayableComputerDevices() {
  const items = [];
  for (const key10005 in closure_40) {
    let tmp6 = dependencyMap[key10005];
    if (!tmp6.connected) {
      continue;
    } else {
      if (null == dependencyMap2[key10005]) {
        continue;
      } else {
        let arr2 = tmp[key10005];
        let found = arr2.find((is_restricted) => {
          is_restricted = is_restricted.is_restricted;
          let tmp = !is_restricted;
          if (!is_restricted) {
            tmp = "Computer" === is_restricted.type;
          }
          return tmp;
        });
        if (null == found) {
          continue;
        } else {
          let obj = { socket: tmp6, device: found };
          let arr = items.push(obj);
          continue;
        }
        continue;
      }
      continue;
    }
    continue;
  }
  return items;
};
prototype2["canPlay"] = function canPlay(party) {
  party = party.party;
  let tmp2;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp11 = dependencyMap[tmp4];
      if (!tmp11.connected) {
        continue;
      } else {
        if (null == dependencyMap2[tmp4]) {
          continue;
        } else {
          let arr = tmp5[tmp4];
          let found = arr.find((is_active) => is_active.is_active);
          if (null == found) {
            continue;
          } else {
            let obj = { socket: tmp11, device: found };
            tmp2 = obj;
            break;
          }
          break;
        }
        continue;
      }
      continue;
    }
  }
  let tmp7 = null != tmp2 && null != party.sync_id && null != party && null != party.id;
  if (tmp7) {
    tmp7 = closure_1_14(party.id);
  }
  return tmp7;
};
prototype2["getSyncingWith"] = function getSyncingWith() {
  return c4;
};
prototype2["wasAutoPaused"] = function wasAutoPaused() {
  return c43;
};
prototype2["getLastPlayedTrackId"] = function getLastPlayedTrackId() {
  return id;
};
prototype2["getTrack"] = function getTrack() {
  let track = null;
  if (null != _null) {
    track = _null.track;
  }
  return track;
};
prototype2["getPlayerState"] = function getPlayerState(accountId) {
  return dependencyMap3[accountId];
};
prototype2["shouldShowActivity"] = function shouldShowActivity() {
  let showActivity = null != _null;
  if (showActivity) {
    showActivity = _null.account.showActivity;
  }
  if (showActivity) {
    showActivity = !IdleStore.isIdle();
  }
  return showActivity;
};
prototype2["getActivity"] = function getActivity() {
  if (null == _null) {
    let findActivityResult = null;
    if (null != _null2) {
      findActivityResult = PresenceStore.findActivity(_null2.userId, (party) => {
        let tmp = null != party.party && null != party.party.id;
        if (tmp) {
          tmp = closure_1_14(party.party.id);
        }
        return tmp;
      });
    }
    return findActivityResult;
  } else {
    const track = _null.track;
    ({ artists, album, name } = track);
    ({ startTime, context } = _null);
    ({ id, duration, isLocal, type } = track);
    const substr = artists.slice(0, 5);
    if (artists.length > 0) {
      const mapped = substr.map((name) => name.name.replace(/;/g, ""));
      const joined = mapped.join("; ");
    }
    let assetFromImageURL = null;
    if (null != album.image) {
      let obj1 = ApplicationAssetUtils;
      assetFromImageURL = obj1.getAssetFromImageURL(PlatformTypes.SPOTIFY, album.image.url);
    }
    let obj = {};
    if (tmp6) {
      obj.large_image = assetFromImageURL;
    }
    if (album.type !== single) {
      obj.large_text = album.name;
    }
    if (null != context) {
      const uri = context.uri;
    }
    if (null != _null2) {
      if (null != _null2.partyId) {
        let partyId = _null2.partyId;
      }
      let text = name;
      if (name.length > 128) {
        text = `${name.substring(0, 125)}...`;
      }
      obj = { context_uri: uri, album_id: album.id, artist_ids: substr.map((id) => id.id), type, button_urls: [] };
      obj1 = { name: user.name, assets: obj, details: text, state: joined, timestamps: null, party: null };
      const obj2 = { start: startTime, end: startTime + duration };
      obj1.timestamps = obj2;
      const obj3 = { id: partyId };
      obj1.party = obj3;
      if (!isLocal) {
        obj1.sync_id = id;
        obj1.flags = constants3.PLAY | constants3.SYNC;
        obj1.metadata = obj;
      }
      return obj1;
    }
    const _HermesInternal = HermesInternal;
    partyId = "" + __initData + AuthenticationStore.getId();
    tmp6 = null != album.image && null != assetFromImageURL;
  }
};
SpotifyStore.displayName = "SpotifyStore";
const spotifyStore = new SpotifyStore(DispatcherDefault, {
  USER_CONNECTIONS_UPDATE: handleUserConnectionsUpdate,
  CONNECTION_OPEN: handleUserConnectionsUpdate,
  SPOTIFY_ACCOUNT_ACCESS_TOKEN: function handleSpotifyAccountAccessToken(accountId) {
    upsertAccount(accountId.accountId, accountId.accessToken);
    return false;
  },
  SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function handleSpotifyAccountAccessTokenRevoked(accountId) {
    accountId = accountId.accountId;
    if (accountId in dependencyMap) {
      dependencyMap[accountId].disconnect();
      delete tmp[tmp2];
      let tmp7 = null != tmp5;
      if (tmp7) {
        tmp7 = null != _null;
      }
      if (tmp7) {
        tmp7 = tmp5.track.id === _null.track.id;
      }
      if (tmp7) {
        _null = null;
      }
      delete tmp[tmp2];
      const _HermesInternal = HermesInternal;
      logger.info("Removed account: " + accountId);
    }
  },
  SPOTIFY_PROFILE_UPDATE: function handleSpotifyProfileUpdate(arg0) {
    ({ accountId, isPremium } = arg0);
    if (null == dependencyMap[accountId]) {
      return false;
    } else {
      tmp.isPremium = isPremium;
      const _HermesInternal = HermesInternal;
      logger.info("Profile updated for " + accountId + ": isPremium = " + isPremium);
    }
  },
  SPOTIFY_PLAYER_STATE: function handleSpotifyPlayerState(arg0) {
    ({ accountId, isPlaying, track, position, device } = arg0);
    let account;
    let flag = false;
    ({ repeat, context } = arg0);
    if (null != device) {
      id = dependencyMap2;
      if (null != dependencyMap2[accountId]) {
        const found = id[accountId].find((id) => id.id === device.id);
        if (null == found) {
          id[accountId].push(device);
          let flag2 = true;
        } else {
          flag2 = false;
          if (!account(558)(found, device)) {
            const _Object = Object;
            const merged = Object.assign(found, device);
            flag2 = true;
          }
        }
        id = device.id;
        setActiveDevice(accountId, id);
      } else {
        const items = [device];
        id[accountId] = items;
        flag = true;
      }
    }
    let obj = c44;
    if (isPlaying) {
      let tmp10 = track;
      if (obj != null) {
        obj.start(closure_24, autoPause);
        tmp10 = track;
      }
    } else {
      tmp10 = null;
      if (obj != null) {
        obj.stop();
        tmp10 = null;
      }
    }
    account = ConnectedAccountsStore.getAccount(accountId, PlatformTypes.SPOTIFY);
    if (null == account) {
      return flag;
    } else {
      let tmp21 = null;
      if (null != tmp10) {
        obj = { account, track: tmp10, startTime: null, context: null, repeat: null };
        const _Date = Date;
        let num2 = 0;
        const timestamp = Date.now();
        if (null != tmp60) {
          num2 = tmp60.startTime;
        }
        const diff = timestamp - position;
        const _Math = Math;
        if (Math.abs(diff - num2) > closure_27) {
          num2 = diff;
        }
        obj.startTime = num2;
        obj.context = context;
        obj.repeat = repeat;
        tmp21 = obj;
      }
      let tmp22 = null != device;
      if (tmp22) {
        tmp22 = null != _null2;
      }
      if (tmp22) {
        tmp22 = 0 === position;
      }
      if (tmp22) {
        tmp22 = !isPlaying;
      }
      if (!tmp22) {
        dependencyMap3[accountId] = tmp21;
      }
      let obj2 = account(12);
      const values = obj2.values(dependencyMap3);
      closure_3 = values.find((item) => null != item);
      id = AuthenticationStore.getId();
      if (id === AuthenticationStore.getId()) {
        const result = VoiceStateStore.isCurrentClientInVoiceChannel();
        obj = { userId: id, checkSoundSharing: true, checkSoundboardSounds: false };
        if (result) {
          if (obj9.getIsSpeaking(obj)) {
            if (null != closure_3) {
              timeout.start(closure_24, autoPause, false);
              timeout1.stop();
            }
          }
        }
        timeout1.start(100, () => closure_1_35.stop(), false);
        obj9 = device(9478);
      }
      if (null != tmp10) {
        if (!tmp22) {
          timeout3.start(tmp10.duration - position + closure_26, () => {
            DispatcherDefault.dispatch({ type: "SPOTIFY_PLAYER_STATE", accountId: account.id, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null });
          });
        }
        if (null == _null2) {
          if (timeout4.isStarted()) {
            logger.info("Listen along stop cancelled as playback of track resumed");
            timeout4.stop();
          }
        } else {
          const _HermesInternal = HermesInternal;
          logger.info("Listen along active but playback stopped or track changed. Stopping listen along in " + closure_26 + "ms");
          timeout4.start(closure_26, () => {
            logger.info("Stopping listening along");
            stopSyncingUserActivityDefault();
            DispatcherDefault.dispatch({ type: "SPOTIFY_PLAYER_STATE", accountId: account.id, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null });
          });
        }
        let tmp55 = flag;
        if (tmp24 !== closure_3) {
          if (null != tmp60) {
            if (null != tmp60) {
              if (null != tmp21) {
                if (tmp60.track.id === tmp21.track.id) {
                  tmp55 = flag;
                }
              }
            }
            if (null != tmp10) {
              let tmp25Result = tmp25(573);
              const obj1 = { type: "SPOTIFY_NEW_TRACK", track: tmp10, connectionId: accountId };
              tmp25Result.dispatch(obj1);
              tmp25Result = tmp25(1242);
              obj2 = { party_platform: PlatformTypes.SPOTIFY, track_id: tmp10.id, has_images: true, details: tmp10.album.name, state: tmp10.name, album_id: tmp10.album.id, author_ids: null, author_names: null };
              const artists = tmp10.artists;
              obj2.author_ids = artists.map((id) => id.id);
              const artists1 = tmp10.artists;
              obj2.author_names = artists1.map((name) => name.name);
              tmp25Result.track(constants4.ACTIVITY_UPDATED, obj2);
            }
          } else {
            tmp55 = flag;
          }
        }
        return tmp55;
      }
      timeout3.stop();
      tmp24 = closure_3;
    }
  },
  SPOTIFY_PLAYER_PLAY: function handleSpotifyPlayerPlay(id) {
    id = id.id;
  },
  ACTIVITY_PLAY: function handleUserActivityPlay(arg0) {
    ({ activity, metadata } = arg0);
    let tmp2;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp30 = dependencyMap[tmp4];
        if (!tmp30.connected) {
          continue;
        } else {
          if (null == dependencyMap2[tmp4]) {
            continue;
          } else {
            let arr = tmp5[tmp4];
            let found = arr.find((is_active) => is_active.is_active);
            if (null == found) {
              continue;
            } else {
              let obj = { socket: tmp30, device: found };
              tmp2 = obj;
              break;
            }
            break;
          }
          continue;
        }
        continue;
      }
    }
    if (null == tmp2) {
      return false;
    } else {
      ({ socket, device } = tmp2);
      ({ sync_id, party } = activity);
      let tmp7 = null == sync_id || null == party || null == party.id;
      if (!tmp7) {
        tmp7 = !closure_1_14(party.id);
      }
      let tmp9 = !tmp7;
      if (!tmp7) {
        if (null != metadata) {
          const context_uri = metadata.context_uri;
        }
        if (null != c4) {
          handleUserActivitySyncStop();
        }
        if (null != metadata) {
          const obj2 = SpotifyActionCreators;
          ({ accountId, accessToken } = socket);
          let TRACK = metadata.type;
          if (TRACK == null) {
            TRACK = constants2.TRACK;
          }
          obj = { contextUri: context_uri, deviceId: device.id };
          obj2.play(accountId, accessToken, sync_id, TRACK, obj);
          const _HermesInternal = HermesInternal;
          logger.info("Play started: " + socket.accountId + " playing " + sync_id + " on " + device.name);
        }
        tmp9 = tmp13;
      }
      return tmp9;
    }
  },
  ACTIVITY_SYNC: function handleUserActivitySync(userId) {
    return activitySync(userId.userId, userId.activity, true);
  },
  ACTIVITY_SYNC_STOP: handleUserActivitySyncStop,
  SPOTIFY_SET_DEVICES: function handleSpotifySetDevices(arg0) {
    ({ accountId, devices } = arg0);
    closure_41[accountId] = devices;
    logger.info("Devices updated for " + accountId + ":", devices);
  },
  SPOTIFY_SET_ACTIVE_DEVICE: function handleSetActiveDevice(accountId) {
    setActiveDevice(accountId.accountId, accountId.deviceId);
  },
  SPEAKING: function handleSpeaking(userId) {
    userId = userId.userId;
    if (userId === AuthenticationStore.getId()) {
      const result = VoiceStateStore.isCurrentClientInVoiceChannel();
      const obj = { userId, checkSoundSharing: true, checkSoundboardSounds: false };
      if (result) {
        if (obj.getIsSpeaking(obj)) {
          if (null != c3) {
            timeout.start(closure_24, autoPause, false);
            timeout1.stop();
          }
        }
      }
      timeout1.start(100, () => closure_1_35.stop(), false);
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, userId) => {
      userId = userId.userId;
      if (userId === id.getId()) {
        const result = currentClientInVoiceChannel.isCurrentClientInVoiceChannel();
        require("useIsSpeaking");
        const obj = { userId, checkSoundSharing: true, checkSoundboardSounds: false };
        if (result) {
          if (obj.getIsSpeaking(obj)) {
            if (null != _null) {
              timeout.start(closure_1_24, autoPause, false);
              timeout1.stop();
            }
          }
        }
        timeout1.start(100, () => closure_1_35.stop(), false);
      }
      return acc;
    }, false);
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(settings) {
    settings = settings.settings;
    let desktopSettings;
    if (settings != null) {
      desktopSettings = settings.desktopSettings;
    }
    if (null != desktopSettings) {
      if (c44 != null) {
        obj.stop();
      }
      let desktopSettings1;
      if (settings != null) {
        desktopSettings1 = settings.desktopSettings;
      }
      const sourceId = desktopSettings1.sourceId;
      if (null != sourceId) {
        if (RunningGameStore.getObservedAppNameForWindow(sourceId) === user.name) {
          if (tmp5) {
            const interval = new Timers.Interval();
            c44 = interval;
            interval.start(closure_24, autoPause);
          }
        }
      }
      if (c44 != null) {
        obj2.stop();
      }
      c44 = null;
      obj = c44;
      obj2 = c44;
    } else if (null == settings) {
      if (c44 != null) {
        obj4.stop();
      }
      c44 = null;
      obj4 = c44;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/spotify/SpotifyStore.tsx");

export default spotifyStore;
export { SpotifySocket };