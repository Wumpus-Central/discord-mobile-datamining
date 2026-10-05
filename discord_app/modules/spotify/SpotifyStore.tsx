// === Module 5439: SpotifyStore ===

// Module 5439 (SpotifyStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Timers from "Timers" /* 2046 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 7821 */;
import useIsSpeaking from "useIsSpeaking" /* 9018 */;
import SpotifyActionCreators from "SpotifyActionCreators" /* 11383 */;
import stopSyncingUserActivityDefault from "stopSyncingUserActivity" /* 13438 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import IdleStore from "IdleStore" /* 5567 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import SpeakingStore from "SpeakingStore" /* 5576 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import SpotifyConstants from "SpotifyConstants" /* 8016 */;
import Constants from "Constants" /* 1085 */;
import Platforms from "Platforms" /* 5442 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _null2, _require, body, closure_3;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let map1;
const f90407 = (is_active) => is_active.is_active;
const f90411 = () => closure_1_35.stop();
const f90418 = () => {
  let accessToken;
  let accountId;
  let obj2;
  obj = SpotifyActionCreators;
  const devices = obj.getDevices(obj.accountId, obj.accessToken);
  ({ accountId, accessToken } = obj);
  const SpotifyAPI = SpotifyActionCreators.SpotifyAPI;
  const request = { url: constants.PLAYER, query: obj2, onlyRetryOnAuthorizationErrors: true };
  obj2 = { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE };
  const value = SpotifyAPI.get(accountId, accessToken, request);
  const nextPromise = value.then((body) => {
    let closure_0 = body;
    body = body.body;
    if (null != body) {
      const promise = closure_2_53(accountId, accessToken, body);
      promise.then(() => closure_0);
    } else {
      const obj2 = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
      obj = closure_2_1(closure_2_2[13]);
      obj.dispatch(obj2);
    }
  });
  nextPromise.catch(() => {
    obj = closure_2_1(closure_2_2[13]);
    const obj2 = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
    obj.dispatch(obj2);
  });
};
function upsertAccount(accountId, accessToken) {
  if (accountId in closure_40) {
    closure_40[accountId].accessToken = accessToken;
    const _HermesInternal2 = HermesInternal;
    logger.info("Updated account access token: " + accountId);
  } else {
    const self = this;
    if (typeof SpotifySocket === "function") {
      const obj = Object.create(SpotifySocket.prototype);
      obj._requestedDisconnect = false;
      obj._requestedConnect = false;
      const obj2 = _modDef12;
      obj.handleDeviceStateChange = obj2.throttle(f90418, closure_29);
      obj.accountId = accountId;
      obj.accessToken = accessToken;
      const self2 = this;
      const self3 = this;
      const interval = new obj(2046).Interval();
      obj.pingInterval = interval;
      const self4 = this;
      const self5 = this;
      obj.backoff = new BackoffDefault(undefined, MINUTE);
      const tmp9 = new BackoffDefault(undefined, MINUTE);
      obj.connect();
      closure_40[accountId] = obj;
      const _HermesInternal = HermesInternal;
      logger.info("Added account: " + accountId);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
function removeAccount(arg0) {
  if (arg0 in closure_40) {
    const obj = closure_40[arg0];
    obj.disconnect();
    delete closure_40[arg0];
    const tmp7 = null != tmp5 && null != _null && tmp5.track.id === _null.track.id;
    if (tmp7) {
      _null = null;
    }
    delete closure_42[arg0];
    const _HermesInternal = HermesInternal;
    logger.info("Removed account: " + arg0);
  }
}
function setActiveDevice(arg0, arg1) {
  const tmp = closure_41[arg0];
  for (const item10008 of tmp) {
    item10008.is_active = item10008.id === arg1;
    continue;
  }
}
function activitySync(userId, activity, arg2) {
  let device;
  let party;
  let socket;
  let sync_id;
  let timestamps;
  let tmp2;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp28 = closure_40[tmp4];
      if (!tmp28.connected) {
        continue;
      } else {
        if (null == closure_41[tmp4]) {
          continue;
        } else {
          let arr = tmp5[tmp4];
          let found = arr.find(f90407);
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
          if (authStore2(party.id)) {
            if (null != timestamps) {
              let start;
              if (null != timestamps.start) {
                start = timestamps.start;
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
                const obj3 = { position: +bound, deviceId: device.id, repeat: tmp13 };
                const obj4 = SpotifyActionCreators;
                obj4.play(socket.accountId, socket.accessToken, sync_id, tmp14Result, obj3);
                let c4 = { userId, partyId: party.id, trackId: sync_id, startTime: start };
                let str = "presence change";
                const obj5 = { userId, partyId: party.id, trackId: sync_id, startTime: start };
                if (arg2) {
                  const obj6 = { party_id: party.id, other_user_id: userId };
                  const obj2 = AnalyticsUtilsDefault;
                  obj2.track(constants4.SPOTIFY_LISTEN_ALONG_STARTED, obj6);
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
  let userId;
  let partyId = null;
  const track = AnalyticsUtilsDefault.track;
  const SPOTIFY_LISTEN_ALONG_ENDED = constants4.SPOTIFY_LISTEN_ALONG_ENDED;
  AnalyticsUtilsDefault;
  if (null != _null2) {
    partyId = _null2.partyId;
  }
  const obj = { party_id: partyId, other_user_id: userId };
  userId = null;
  if (null != _null2) {
    userId = _null2.userId;
  }
  track(SPOTIFY_LISTEN_ALONG_ENDED, obj);
  let trackId = null;
  if (null != _null2) {
    trackId = _null2.trackId;
  }
  _null2 = null;
  logger.info("Listen along stopped");
  let tmp12;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp24 = closure_40[tmp14];
      if (!tmp24.connected) {
        continue;
      } else {
        if (null == closure_41[tmp14]) {
          continue;
        } else {
          let arr = tmp15[tmp14];
          let found = arr.find(f90407);
          if (null == found) {
            continue;
          } else {
            let obj2 = { socket: tmp24, device: found };
            tmp12 = obj2;
            break;
          }
          break;
        }
        continue;
      }
      continue;
    }
  }
  if (null != tmp12) {
    const socket = tmp12.socket;
    const tmp19 = null != closure_42[socket.accountId] && closure_42[socket.accountId].track.id === trackId;
    if (tmp19) {
      const obj3 = SpotifyActionCreators;
      obj3.pause(socket.accountId, socket.accessToken);
    }
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
      let tmp12 = null != _null && _null.account.id === item10030.id;
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
        let tmp18 = closure_40[tmp3];
        if (!tmp18.connected) {
          continue;
        } else {
          if (null == closure_41[tmp3]) {
            continue;
          } else {
            let arr = tmp4[tmp3];
            let found = arr.find(f90407);
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
      const obj2 = SpotifyActionCreators;
      obj2.pause(socket.accountId, socket.accessToken);
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(constants4.SPOTIFY_AUTO_PAUSED);
      logger.info("Playback auto paused");
    }
  }
}
function updatePlayerState(accountId, arg1, device) {
  let c3;
  let c4;
  let context;
  let first;
  let first1;
  let found;
  let isPlaying;
  let item;
  let obj;
  let obj4;
  let position;
  let str2;
  let str4;
  let type;
  let type1;
  _require = accountId;
  device = device.device;
  ({ progress_ms: dependencyMap, is_playing: c3, repeat_state: c4, item, context } = device);
  let obj12;
  if (null != item) {
    if (item.type === constants2.TRACK) {
      id = item.id;
      const tmp4 = null != item.linked_from && null != item.linked_from.id;
      if (tmp4) {
        id = item.linked_from.id;
      }
      const obj3 = { id, name: null, duration: null, type: constants2.TRACK, album: obj4, artists: found, isLocal: item.is_local || false };
      ({ name: obj2.name, duration_ms: obj2.duration } = item);
      const album2 = item.album;
      let str3;
      if (album2 != null) {
        str3 = album2.id;
      }
      if (str3 == null) {
        str3 = "";
      }
      const album3 = item.album;
      obj4 = { id: str3, name: str4, image: first, type };
      str4 = undefined;
      if (album3 != null) {
        str4 = album3.name;
      }
      if (str4 == null) {
        str4 = "";
      }
      const album4 = item.album;
      first = undefined;
      if (album4 != null) {
        first = album4.images[0];
      }
      const album5 = item.album;
      type = undefined;
      if (album5 != null) {
        type = album5.type;
      }
      if (type == null) {
        type = constants2.ALBUM;
      }
      const _Array = Array;
      if (Array.isArray(item.artists)) {
        const artists = item.artists;
        found = artists.filter((id) => {
          const obj = accountId(dependencyMap[21]);
          let isNotNullishResult = obj.isNotNullish(id.id);
          if (isNotNullishResult) {
            const tmpResult = accountId(dependencyMap[21]);
            isNotNullishResult = tmpResult.isNotNullish(id.name);
          }
          return isNotNullishResult;
        });
      } else {
        found = [];
      }
      obj12 = obj3;
    }
    const tmp8 = null != device && true !== device.is_active;
    if (tmp8) {
      const obj5 = { is_active: true };
      const merged = Object.assign(device);
      device = obj5;
    }
    if (null != context) {
      let resolved1;
      const items = [, ];
      ({ PLAYLIST: arr3[0], ALBUM: arr3[1] } = constants2);
      if (items.includes(context.type)) {
        let resolved;
        const playerState = spotifyStore.getPlayerState(accountId);
        if (null != playerState) {
          if (null != playerState.context) {
            if (playerState.context.uri === context.uri) {
              resolved = Promise.resolve(playerState.context);
            }
            resolved1 = resolved;
          }
        }
        if (context.type === constants2.ALBUM) {
          resolved = Promise.resolve(context);
        } else {
          const SpotifyAPI = require("SpotifyActionCreators").SpotifyAPI;
          const obj11 = { url: context.href };
          const value = SpotifyAPI.get(accountId, arg1, obj11);
          const nextPromise = value.then((body) => body.body);
          resolved = nextPromise.catch((error) => {
            const tmp = error;
            if (tmp) {
              if (404 === error.status) {
                return null;
              }
            }
            throw error;
          });
        }
      }
      return resolved1.then((result) => {
        let num;
        let tmp = result;
        const _public = null == result || tmp.type !== constants.PLAYLIST || tmp.public;
        if (!_public) {
          tmp = null;
        }
        const obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: obj12, volumePercent: num, isPlaying, repeat: "off" !== _null2, position: dependencyMap, context: tmp, device };
        num = 0;
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        if (null != device) {
          num = device.volume_percent;
        }
        dispatch(obj);
      });
    }
    resolved1 = Promise.resolve(undefined);
  }
  if (null != item) {
    if (item.type === constants2.EPISODE) {
      obj12 = { id: null, name: null, duration: null, type: constants2.EPISODE, album: obj, artists: [], isLocal: false };
      ({ id: obj6.id, name: obj6.name, duration_ms: obj6.duration } = item);
      const show3 = item.show;
      let str;
      if (show3 != null) {
        str = show3.id;
      }
      if (str == null) {
        str = "";
      }
      obj = { id: str, name: str2, image: first1, type: type1 };
      const show = item.show;
      str2 = undefined;
      if (show != null) {
        str2 = show.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      const show2 = item.show;
      first1 = undefined;
      if (show2 != null) {
        first1 = show2.images[0];
      }
      const album = item.album;
      type1 = undefined;
      if (album != null) {
        type1 = album.type;
      }
      if (type1 == null) {
        type1 = constants2.SHOW;
      }
    }
  }
}
({ getSpotifyResourceType: map1, isSpotifyParty: closure_14, SPOTIFY_PARTY_PREFIX: closure_15, SpotifyEndpoints: closure_16, SpotifyResourceTypes: closure_17 } = SpotifyConstants);
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
const __initData = { PLAYER_STATE_CHANGED: "PLAYER_STATE_CHANGED", DEVICE_STATE_CHANGED: "DEVICE_STATE_CHANGED" };
const message = "message";
const ping_str = "ping";
const single = "single";
let tmp4 = new LoggerDefault("Spotify");
const __initData3 = tmp4;
const timeout = new Timers.Timeout();
const timeout1 = new Timers.Timeout();
const timeout2 = new Timers.Timeout();
const timeout3 = new Timers.Timeout();
const timeout4 = new Timers.Timeout();
const BottomSheet = {};
let closure_42 = {};
let c43 = false;
let c44 = null;
let items = [WebSocket.CONNECTING, WebSocket.OPEN];
const set = new Set(items);
class SpotifySocket {
  constructor(accountId, accessToken) {
    let obj = Object.create(new.target.prototype);
    obj._requestedDisconnect = false;
    obj._requestedConnect = false;
    let obj2 = _modDef12;
    obj.handleDeviceStateChange = obj2.throttle(f90418, closure_29);
    obj.accountId = accountId;
    obj.accessToken = accessToken;
    const interval = new obj(2046).Interval();
    obj.pingInterval = interval;
    obj.backoff = new BackoffDefault(undefined, MINUTE);
    new BackoffDefault(undefined, MINUTE);
    obj.connect();
    return obj;
  }
  connect() {
    let accessToken;
    let accountId;
    let obj;
    const self = this;
    const tmp = this.connected || self._requestedConnect;
    if (!tmp) {
      logger.info("WS Connecting");
      self._requestedDisconnect = false;
      self._requestedConnect = true;
      ({ accountId, accessToken } = self);
      const SpotifyAPI = self(11383).SpotifyAPI;
      const request = { url: constants.PLAYER, query: obj, onlyRetryOnAuthorizationErrors: true };
      const _HermesInternal = HermesInternal;
      const get = SpotifyAPI.get;
      obj = { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE };
      const value = get(accountId, accessToken, request);
      const nextPromise = value.then((body) => {
        let closure_0 = body;
        body = body.body;
        if (null != body) {
          const promise = closure_2_53(accountId, accessToken, body);
          promise.then(() => closure_0);
        } else {
          const obj2 = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
          obj = closure_2_1(closure_2_2[13]);
          obj.dispatch(obj2);
        }
      });
      const catchPromise = nextPromise.catch(() => {
        obj = closure_2_1(closure_2_2[13]);
        const obj2 = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj.dispatch(obj2);
      });
      const nextPromise1 = catchPromise.then(() => {
        let handleClose;
        let handleMessage;
        let handleOpen;
        let socket;
        let socket2;
        let socket3;
        let socket4;
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
      nextPromise1.catch((error) => {
        logger.error(error);
        self._requestedConnect = false;
        self.handleClose();
      });
    }
  }
  disconnect() {
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
  }
  ping() {
    if (this.connected) {
      const socket = this.socket;
      if (socket != null) {
        const _JSON = JSON;
        const obj = { type: ping_str };
        socket.send(JSON.stringify(obj));
      }
    }
  }
  handleOpen() {
    const self = this;
    logger.info("WS Connected");
    const backoff = this.backoff;
    backoff.succeed();
    const pingInterval = this.pingInterval;
    pingInterval.start(closure_23, () => self.ping());
    const obj = SpotifyActionCreators;
    const profile = obj.getProfile(this.accountId, this.accessToken);
    const obj2 = SpotifyActionCreators;
    const devices = obj2.getDevices(this.accountId, this.accessToken);
  }
  handleMessage(data) {
    let payloads;
    let uri;
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
            const obj = SpotifyActionCreators;
            const result = obj.subscribePlayerStateNotifications(self.accountId, self.accessToken, self.connectionId);
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
  }
  handleClose() {
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
  }
  handleEvent(arg0) {
    let event;
    let type;
    const self = this;
    ({ type, event } = arg0);
    if (constants5.PLAYER_STATE_CHANGED === type) {
      const tmp4 = null != event && null != event.state;
      if (tmp4) {
        updatePlayerState(self.accountId, self.accessToken, event.state);
      }
    } else if (tmp.DEVICE_STATE_CHANGED === type) {
      const result = self.handleDeviceStateChange();
    }
  }
}
Object.defineProperty(SpotifySocket.prototype, "connected", {
  get: function connected() {
    const hasItem = null != this.socket && set.has(tmp.socket.readyState);
    return hasItem;
  },
  set: undefined
});
const Store = get_initializedDefault.Store;
class SpotifyStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ConnectedAccountsStore, IdleStore, PresenceStore, RunningGameStore, SpeakingStore, VoiceStateStore);
    const items = [PresenceStore];
    this.syncWith(items, () => {
      let party;
      let sync_id;
      let timestamps;
      let tmp;
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
                let found = arr.find(f90407);
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
            const tmp = null != party.party && null != party.party.id && closure_1_14(party.party.id);
            return tmp;
          });
          if (null == findActivityResult) {
            closure_37.start(closure_25, () => {
              const tmp = null != _null2 && _null2.userId === userId;
              if (tmp) {
                stopSyncingUserActivityDefault();
              }
            });
            flag = false;
          } else {
            closure_37.stop();
            ({ sync_id, timestamps, party } = findActivityResult);
            const tmp12 = null != sync_id && closure_4.trackId !== sync_id;
            const tmp13 = null != timestamps && closure_4.startTime !== timestamps.start;
            if (!tmp12) {
              let flag2;
              if (!tmp13) {
                flag2 = null != party && party.id !== closure_4.partyId;
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
    let obj = SpotifyActionCreators;
    const isSpotifyProtocolRegistered = obj.fetchIsSpotifyProtocolRegistered();
  }
  hasConnectedAccount() {
    return Object.keys(closure_40).length > 0;
  }
  getActiveSocketAndDevice() {
    let tmp2;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp9 = closure_40[tmp4];
        if (!tmp9.connected) {
          continue;
        } else {
          if (null == closure_41[tmp4]) {
            continue;
          } else {
            let arr = tmp5[tmp4];
            let found = arr.find(f90407);
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
  }
  getPlayableComputerDevices() {
    const items = [];
    for (const key10005 in closure_40) {
      let tmp6 = closure_40[key10005];
      if (!tmp6.connected) {
        continue;
      } else {
        if (null == closure_41[key10005]) {
          continue;
        } else {
          let arr2 = tmp[key10005];
          let found = arr2.find((is_restricted) => !is_restricted.is_restricted && "Computer" === is_restricted.type);
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
  }
  canPlay(party) {
    party = party.party;
    let tmp2;
    const sync_id = party.sync_id;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp11 = closure_40[tmp4];
        if (!tmp11.connected) {
          continue;
        } else {
          if (null == closure_41[tmp4]) {
            continue;
          } else {
            let arr = tmp5[tmp4];
            let found = arr.find(f90407);
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
    const tmp7 = null != tmp2 && null != sync_id && null != party && null != party.id && authStore2(party.id);
    return tmp7;
  }
  getSyncingWith() {
    return c4;
  }
  wasAutoPaused() {
    return c43;
  }
  getLastPlayedTrackId() {
    return id;
  }
  getTrack() {
    let track = null;
    if (null != _null) {
      track = _null.track;
    }
    return track;
  }
  getPlayerState(accountId) {
    return closure_42[accountId];
  }
  shouldShowActivity() {
    const showActivity = null != _null && _null.account.showActivity && !IdleStore.isIdle();
    return showActivity;
  }
  getActivity() {
    let album;
    let artists;
    let context;
    let duration;
    let isLocal;
    let name;
    let obj5;
    let obj6;
    let startTime;
    let type;
    if (null == _null) {
      let findActivityResult = null;
      if (null != _null2) {
        findActivityResult = PresenceStore.findActivity(_null2.userId, (party) => {
          const tmp = null != party.party && null != party.party.id && closure_1_14(party.party.id);
          return tmp;
        });
      }
      return findActivityResult;
    } else {
      let joined;
      let uri;
      const track = _null.track;
      ({ artists, album, name } = track);
      ({ startTime, context } = _null);
      ({ id, duration, isLocal, type } = track);
      const substr = artists.slice(0, 5);
      if (artists.length > 0) {
        const mapped = substr.map((name) => {
          const str = name.name;
          return str.replace(/;/g, "");
        });
        let str = "; ";
        joined = mapped.join("; ");
      }
      let assetFromImageURL = null;
      if (null != album.image) {
        const obj2 = ApplicationAssetUtils;
        assetFromImageURL = obj2.getAssetFromImageURL(PlatformTypes.SPOTIFY, album.image.url);
      }
      const obj = {};
      const tmp6 = null != album.image && null != assetFromImageURL;
      if (tmp6) {
        obj.large_image = assetFromImageURL;
      }
      if (album.type !== single) {
        obj.large_text = album.name;
      }
      if (null != context) {
        uri = context.uri;
      }
      if (null != _null2) {
        let partyId;
        if (null != _null2.partyId) {
          partyId = _null2.partyId;
        }
        let text = name;
        if (name.length > 128) {
          text = `${name.substring(0, 125)}...`;
        }
        const obj4 = { name: user.name, assets: obj, details: text, state: joined, timestamps: obj5, party: obj6 };
        const obj3 = { context_uri: uri, album_id: album.id, artist_ids: substr.map((id) => id.id), type, button_urls: [] };
        obj5 = { start: startTime, end: startTime + duration };
        obj6 = { id: partyId };
        if (!isLocal) {
          obj4.sync_id = id;
          obj4.flags = constants3.PLAY | constants3.SYNC;
          obj4.metadata = obj3;
        }
        return obj4;
      }
      const _HermesInternal = HermesInternal;
      partyId = "" + closure_15 + AuthenticationStore.getId();
    }
  }
}
const prototype = SpotifyStore.prototype;
SpotifyStore.displayName = "SpotifyStore";
let obj = {
  USER_CONNECTIONS_UPDATE: handleUserConnectionsUpdate,
  CONNECTION_OPEN: handleUserConnectionsUpdate,
  SPOTIFY_ACCOUNT_ACCESS_TOKEN: function handleSpotifyAccountAccessToken(accountId) {
    upsertAccount(accountId.accountId, accountId.accessToken);
    return false;
  },
  SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function handleSpotifyAccountAccessTokenRevoked(accountId) {
    accountId = accountId.accountId;
    if (accountId in closure_40) {
      const obj = closure_40[accountId];
      obj.disconnect();
      delete closure_40[accountId];
      const tmp6 = null != tmp4 && null != _null && tmp4.track.id === _null.track.id;
      if (tmp6) {
        _null = null;
      }
      delete closure_42[accountId];
      const _HermesInternal = HermesInternal;
      logger.info("Removed account: " + accountId);
    }
  },
  SPOTIFY_PROFILE_UPDATE: function handleSpotifyProfileUpdate(arg0) {
    let accountId;
    let isPremium;
    ({ accountId, isPremium } = arg0);
    if (null == closure_40[accountId]) {
      return false;
    } else {
      closure_40[accountId].isPremium = isPremium;
      const _HermesInternal = HermesInternal;
      logger.info("Profile updated for " + accountId + ": isPremium = " + isPremium);
    }
  },
  SPOTIFY_PLAYER_STATE: function handleSpotifyPlayerState(arg0) {
    let accountId;
    let artists;
    let artists1;
    let context;
    let device;
    let isPlaying;
    let num2;
    let position;
    let repeat;
    let tmp10;
    let track;
    ({ accountId, isPlaying, track, position, device } = arg0);
    let account;
    let flag = false;
    ({ repeat, context } = arg0);
    if (null != device) {
      if (null != closure_41[accountId]) {
        let flag2;
        const arr2 = closure_41[accountId];
        const found = arr2.find((id) => id.id === device.id);
        if (null == found) {
          const arr3 = closure_41[accountId];
          arr3.push(device);
          flag2 = true;
        } else {
          flag2 = false;
          if (!account(568)(found, device)) {
            const _Object = Object;
            const merged = Object.assign(found, device);
            flag2 = true;
          }
        }
        setActiveDevice(accountId, device.id);
        flag = flag2;
      } else {
        const items = [device];
        closure_41[accountId] = items;
        flag = true;
      }
    }
    if (isPlaying) {
      tmp10 = track;
      if (_null != null) {
        _null.start(closure_24, autoPause);
        tmp10 = track;
      }
    } else {
      tmp10 = null;
      if (_null != null) {
        _null.stop();
        tmp10 = null;
      }
    }
    account = ConnectedAccountsStore.getAccount(accountId, PlatformTypes.SPOTIFY);
    if (null == account) {
      return flag;
    } else {
      let tmp21 = null;
      if (null != tmp10) {
        const _Date = Date;
        const obj2 = { account, track: tmp10, startTime: num2, context, repeat };
        num2 = 0;
        const timestamp = Date.now();
        if (null != closure_42[accountId]) {
          num2 = tmp61.startTime;
        }
        const diff = timestamp - position;
        const _Math = Math;
        if (Math.abs(diff - num2) > closure_27) {
          num2 = diff;
        }
        tmp21 = obj2;
      }
      if (!(null != device && null != _null2 && 0 === position && !isPlaying)) {
        closure_42[accountId] = tmp21;
      }
      const obj3 = account(12);
      const values = obj3.values(closure_42);
      const tmp24 = closure_3;
      closure_3 = values.find((item) => null != item);
      id = AuthenticationStore.getId();
      if (id === AuthenticationStore.getId()) {
        const result = VoiceStateStore.isCurrentClientInVoiceChannel();
        const obj5 = { userId: id, checkSoundSharing: true, checkSoundboardSounds: false };
        const obj8 = device(9018);
        if (result) {
          if (obj8.getIsSpeaking(obj5)) {
            if (null != closure_3) {
              timeout.start(closure_24, autoPause, false);
              timeout1.stop();
            }
          }
        }
        timeout1.start(100, f90411, false);
      }
      if (null != tmp10) {
        if (!(null != device && null != _null2 && 0 === position && !isPlaying)) {
          timeout3.start(tmp10.duration - position + closure_26, () => {
            id = account.id;
            const obj = DispatcherDefault;
            obj.dispatch({ type: "SPOTIFY_PLAYER_STATE", accountId: id, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null });
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
            id = account.id;
            const obj = DispatcherDefault;
            obj.dispatch({ type: "SPOTIFY_PLAYER_STATE", accountId: id, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null });
          });
        }
        let tmp55 = flag;
        if (tmp24 !== closure_3) {
          if (null != closure_42[accountId]) {
            if (null != closure_42[accountId]) {
              if (null != tmp21) {
                if (closure_42[accountId].track.id === tmp21.track.id) {
                  tmp55 = flag;
                }
              }
            }
            if (null != tmp10) {
              const obj6 = { type: "SPOTIFY_NEW_TRACK", track: tmp10, connectionId: accountId };
              const tmp25Result = account(584);
              tmp25Result.dispatch(obj6);
              const obj7 = { party_platform: PlatformTypes.SPOTIFY, track_id: tmp10.id, has_images: true, details: tmp10.album.name, state: tmp10.name, album_id: tmp10.album.id, author_ids: artists.map((id) => id.id), author_names: artists1.map((name) => name.name) };
              artists = tmp10.artists;
              const track2 = account(1252).track;
              const ACTIVITY_UPDATED = constants4.ACTIVITY_UPDATED;
              account(1252);
              artists1 = tmp10.artists;
              track2(ACTIVITY_UPDATED, obj7);
            }
          } else {
            tmp55 = flag;
          }
        }
        return tmp55;
      }
      timeout3.stop();
    }
  },
  SPOTIFY_PLAYER_PLAY: function handleSpotifyPlayerPlay(id) {
    id = id.id;
  },
  ACTIVITY_PLAY: function handleUserActivityPlay(arg0) {
    let accessToken;
    let accountId;
    let activity;
    let device;
    let metadata;
    let party;
    let socket;
    let sync_id;
    ({ activity, metadata } = arg0);
    let tmp2;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp31 = closure_40[tmp4];
        if (!tmp31.connected) {
          continue;
        } else {
          if (null == closure_41[tmp4]) {
            continue;
          } else {
            let arr = tmp5[tmp4];
            let found = arr.find(f90407);
            if (null == found) {
              continue;
            } else {
              let obj = { socket: tmp31, device: found };
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
      let tmp9 = !(null == sync_id || null == party || null == party.id || !authStore2(party.id));
      const tmp7 = null == sync_id || null == party || null == party.id || !authStore2(party.id);
      if (tmp9) {
        let context_uri;
        if (null != metadata) {
          context_uri = metadata.context_uri;
        }
        if (null != c4) {
          handleUserActivitySyncStop();
        }
        if (null != metadata) {
          ({ accountId, accessToken } = socket);
          let TRACK = metadata.type;
          const play = SpotifyActionCreators.play;
          if (TRACK == null) {
            TRACK = constants2.TRACK;
          }
          const obj2 = { contextUri: context_uri, deviceId: device.id };
          play(accountId, accessToken, sync_id, TRACK, obj2);
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
    let accountId;
    let devices;
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
      const obj2 = { userId, checkSoundSharing: true, checkSoundboardSounds: false };
      const obj = useIsSpeaking;
      if (result) {
        if (obj.getIsSpeaking(obj2)) {
          if (null != c3) {
            timeout.start(closure_24, autoPause, false);
            timeout1.stop();
          }
        }
      }
      timeout1.start(100, f90411, false);
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let currentClientInVoiceChannel;
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, userId) => {
      userId = userId.userId;
      if (userId === id.getId()) {
        const result = currentClientInVoiceChannel.isCurrentClientInVoiceChannel();
        const obj2 = { userId, checkSoundSharing: true, checkSoundboardSounds: false };
        const obj = require("useIsSpeaking");
        if (result) {
          if (obj.getIsSpeaking(obj2)) {
            if (null != _null) {
              timeout.start(closure_1_24, autoPause, false);
              timeout1.stop();
            }
          }
        }
        timeout1.start(100, f90411, false);
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
      const obj = c44;
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
            const self = this;
            const self2 = this;
            const interval = new Timers.Interval();
            c44 = interval;
            interval.start(closure_24, autoPause);
          }
        }
      }
      const obj2 = c44;
      if (c44 != null) {
        obj2.stop();
      }
      c44 = null;
    } else if (null == settings) {
      const obj4 = c44;
      if (c44 != null) {
        obj4.stop();
      }
      c44 = null;
    }
  }
};
const spotifyStore = new SpotifyStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/spotify/SpotifyStore.tsx");

export default spotifyStore;
export { SpotifySocket };