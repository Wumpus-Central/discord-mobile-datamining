// discord_app/modules/spotify/SpotifyStore.tsx
import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import closure_8 from "set";
import checkIdleAFK from "checkIdleAFK";
import sortActivity from "sortActivity";
import anyoneHasFlagInContext from "anyoneHasFlagInContext";
import updateVoiceState from "updateVoiceState";
import WEB_OPEN from "WEB_OPEN";
import ME from "ME";
import importDefaultResult from "getPlatformUserUrl";
import { Store } from "initialize";
import set from "set";
import { apply } from "../../../_runtime/00012_apply.js";
import { fails } from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import { start } from "../../../discord_common/js/packages/timers/Timers.tsx";
import { useIsSpeaking } from "../../hooks/useIsSpeaking.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { updateAssets } from "../../utils/ApplicationAssetUtils.tsx";
import { apiRequest } from "SpotifyActionCreators.tsx";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let map1;
const require = arg1;
function upsertAccount(accountId, accessToken) {
  if (accountId in closure_40) {
    tmp[accountId].accessToken = accessToken;
    const _HermesInternal2 = HermesInternal;
    tmp4.info("Updated account access token: " + accountId);
  } else {
    if (typeof SpotifySocket !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SpotifySocket.prototype);
    obj._requestedDisconnect = false;
    obj._requestedConnect = false;
    obj.handleDeviceStateChange = apply.throttle(() => {
      let accessToken;
      let accountId;
      obj = obj(outer1_2[15]);
      const devices = obj.getDevices(accountId.accountId, accountId.accessToken);
      ({ accountId, accessToken } = accountId);
      const SpotifyAPI = obj(outer1_2[15]).SpotifyAPI;
      obj = { url: outer1_16.PLAYER, query: null, onlyRetryOnAuthorizationErrors: true };
      obj = { additional_types: "" + outer1_17.TRACK + "," + outer1_17.EPISODE };
      obj[1] = obj;
      const value = SpotifyAPI.get(accountId, accessToken, obj);
      value.then((body) => {
        let closure_0 = body;
        body = body.body;
        if (null != body) {
          outer1_53(closure_0, accessToken, body).then(() => closure_0);
          const promise = outer1_53(closure_0, accessToken, body);
        } else {
          let obj = accessToken(outer1_2[13]);
          obj = { type: "SPOTIFY_PLAYER_STATE", accountId: null, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
          obj[1] = closure_0;
          obj.dispatch(obj);
        }
      }).catch(() => {
        let obj = accessToken(outer1_2[13]);
        obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj.dispatch(obj);
      });
    }, closure_29);
    obj.accountId = accountId;
    obj.accessToken = accessToken;
    const interval = new obj(4188).Interval();
    obj.pingInterval = interval;
    const tmp15 = new fails(undefined, MINUTE);
    obj.backoff = tmp15;
    obj.connect();
    tmp[accountId] = obj;
    const _HermesInternal = HermesInternal;
    importDefault.info("Added account: " + accountId);
    const obj2 = apply;
    const tmp2 = SpotifySocket;
  }
}
function removeAccount(arg0) {
  if (arg0 in dependencyMap) {
    dependencyMap[arg0].disconnect();
    delete tmp[tmp2];
    let tmp7 = null != tmp5;
    if (tmp7) {
      tmp7 = null != c3;
    }
    if (tmp7) {
      tmp7 = tmp5.track.id === c3.track.id;
    }
    if (tmp7) {
      c3 = null;
    }
    delete tmp[tmp2];
    const _HermesInternal = HermesInternal;
    dependencyMap3.info("Removed account: " + arg0);
    const obj = dependencyMap[arg0];
  }
}
function setActiveDevice(arg0, arg1) {
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
      let tmp26 = tmp4;
      let tmp27 = dependencyMap;
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
            let obj = { socket: null, device: null };
            obj[0] = tmp28;
            obj[1] = found;
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
          if (callback(party.id)) {
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
              const tmp14Result = closure_13(type);
              if (null != tmp14Result) {
                const obj4 = apiRequest;
                obj = { position: null, deviceId: null, repeat: null };
                obj[0] = +bound;
                obj[1] = device.id;
                obj[2] = tmp13;
                obj4.play(socket.accountId, socket.accessToken, sync_id, tmp14Result, obj);
                obj = { userId: null, partyId: null, trackId: null, startTime: null };
                obj[0] = userId;
                obj[1] = party.id;
                obj[2] = sync_id;
                obj[3] = start;
                let str = "presence change";
                if (arg2) {
                  let obj1 = expandEventProperties;
                  obj1 = { party_id: null, other_user_id: null };
                  obj1[0] = party.id;
                  obj1[1] = userId;
                  obj1.track(constants4.SPOTIFY_LISTEN_ALONG_STARTED, obj1);
                  str = "started";
                }
                const _HermesInternal = HermesInternal;
                tmp4.info("Listen along " + str + ": " + socket.accountId + " to " + userId + " playing " + sync_id + " on " + device.name);
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
  let obj = expandEventProperties;
  let partyId = null;
  if (null != c4) {
    partyId = c4.partyId;
    const tmp4 = c4;
  }
  obj = { party_id: partyId, other_user_id: null };
  let userId = null;
  if (null != c4) {
    userId = c4.userId;
  }
  obj[1] = userId;
  obj.track(constants4.SPOTIFY_LISTEN_ALONG_ENDED, obj);
  let trackId = null;
  if (null != c4) {
    trackId = c4.trackId;
  }
  c4 = null;
  tmp4.info("Listen along stopped");
  let tmp11;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp21 = tmp13;
      let tmp22 = dependencyMap;
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
            obj = { socket: null, device: null };
            obj[0] = tmp23;
            obj[1] = found;
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
      apiRequest.pause(socket.accountId, socket.accessToken);
      const obj4 = apiRequest;
    }
    tmp18 = null != dependencyMap3[socket.accountId] && dependencyMap3[socket.accountId].track.id === trackId;
  }
}
function handleUserConnectionsUpdate() {
  const keys = Object.keys(closure_40);
  const accounts = store2.getAccounts();
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
        let tmp5 = removeAccount;
        let tmp6 = nextResult;
        let tmp7 = removeAccount(tmp4);
      }
      continue;
    }
    let flag = false;
    for (const item10030 of found) {
      let tmp10 = item10030;
      let tmp11 = closure_3;
      let tmp12 = null != closure_3;
      if (tmp12) {
        let tmp13 = closure_3;
        let tmp14 = item10030;
        tmp12 = closure_3.account.id === tmp10.id;
      }
      if (tmp12) {
        let tmp15 = closure_3;
        let tmp16 = item10030;
        closure_3.account = tmp10;
        flag = true;
      }
      let tmp17 = item10030;
      if (!keys.includes(tmp10.id)) {
        let tmp18 = item10030;
        if (null == tmp10.accessToken) {
          let tmp22 = require;
          let tmp23 = dependencyMap;
          let obj2 = apiRequest;
          let tmp24 = item10030;
          let accessToken = obj2.getAccessToken(tmp10.id);
        } else {
          let tmp19 = upsertAccount;
          let tmp20 = item10030;
          let tmp21 = upsertAccount(tmp10.id, tmp10.accessToken);
        }
      }
      continue;
    }
    return flag;
  }
}
function autoPause() {
  if (null != closure_3) {
    let tmp2;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp16 = tmp3;
        let tmp17 = dependencyMap;
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
              let obj = { socket: null, device: null };
              obj[0] = tmp18;
              obj[1] = found;
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
      let c43 = true;
      apiRequest.pause(socket.accountId, socket.accessToken);
      const obj2 = apiRequest;
      expandEventProperties.track(constants4.SPOTIFY_AUTO_PAUSED);
      tmp4.info("Playback auto paused");
      const obj3 = expandEventProperties;
    }
  }
}
function updatePlayerState(arg0, arg1, device) {
  let closure_3;
  let closure_4;
  let context;
  let dependencyMap;
  let item;
  const _require = arg0;
  device = device.device;
  let obj1 = device;
  ({ progress_ms: dependencyMap, is_playing: closure_3, repeat_state: closure_4, item, context } = device);
  let obj3;
  if (null != item) {
    if (item.type === constants2.TRACK) {
      let id = item.id;
      if (tmp4) {
        id = item.linked_from.id;
      }
      let obj = { id: null, name: null, duration: null, type: null, album: null, artists: null, isLocal: null };
      obj[0] = id;
      ({ name: obj2[1], duration_ms: obj2[2] } = item);
      obj[3] = tmp.TRACK;
      const album2 = item.album;
      let str3;
      if (album2 != null) {
        str3 = album2.id;
      }
      if (str3 == null) {
        str3 = "";
      }
      obj = { id: null, name: null, image: null, type: null };
      obj[0] = str3;
      const album3 = item.album;
      let str4;
      if (album3 != null) {
        str4 = album3.name;
      }
      if (str4 == null) {
        str4 = "";
      }
      obj[1] = str4;
      const album4 = item.album;
      let first;
      if (album4 != null) {
        first = album4.images[0];
      }
      obj[2] = first;
      const album5 = item.album;
      let type;
      if (album5 != null) {
        type = album5.type;
      }
      if (type == null) {
        type = tmp.ALBUM;
      }
      obj[3] = type;
      obj[4] = obj;
      const _Array = Array;
      if (Array.isArray(item.artists)) {
        const artists = item.artists;
        let found = artists.filter((id) => {
          let isNotNullishResult = callback(table[21]).isNotNullish(id.id);
          if (isNotNullishResult) {
            isNotNullishResult = callback(table[21]).isNotNullish(id.name);
            const tmpResult = callback(table[21]);
          }
          return isNotNullishResult;
        });
      } else {
        found = [];
      }
      obj[5] = found;
      obj[6] = item.is_local || false;
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
        let context2 = spotifyStore.getPlayerState(arg0);
        if (null != context2) {
          context2 = context2.context;
          let resolved = Promise.resolve(context2);
        }
        if (context.type === tmp12.ALBUM) {
          resolved = Promise.resolve(context);
        } else {
          const SpotifyAPI = _apiRequest.SpotifyAPI;
          const obj2 = { url: null };
          obj2[0] = context.href;
          const value = SpotifyAPI.get(arg0, arg1, obj2);
          resolved = value.then((body) => body.body).catch((status) => {
            if (status) {
              if (404 === status.status) {
                return null;
              }
            }
            throw status;
          });
          const nextPromise = value.then((body) => body.body);
        }
      }
      tmp12 = constants2;
    }
    const resolved1 = Promise.resolve(undefined);
    return resolved1.then((arg0) => {
      let tmp = arg0;
      let _public = null == arg0;
      if (!_public) {
        _public = tmp.type !== outer1_17.PLAYLIST;
      }
      if (!_public) {
        _public = tmp.public;
      }
      if (!_public) {
        tmp = null;
      }
      let obj = obj1(outer1_2[13]);
      obj = { type: "SPOTIFY_PLAYER_STATE", accountId: closure_0, track: obj3, volumePercent: null, isPlaying: null, repeat: null, position: null, context: null, device: null };
      let num = 0;
      if (null != obj1) {
        num = tmp3.volume_percent;
      }
      obj[3] = num;
      obj[4] = closure_3;
      obj[5] = "off" !== closure_4;
      obj[6] = closure_2;
      obj[7] = tmp;
      obj[8] = obj1;
      obj.dispatch(obj);
    });
  }
  if (null != item) {
    if (item.type === constants2.EPISODE) {
      obj3 = { id: null, name: null, duration: null, type: null, album: null, artists: null, isLocal: false };
      ({ id: obj6[0], name: obj6[1], duration_ms: obj6[2] } = item);
      obj3[3] = tmp22.EPISODE;
      const show3 = item.show;
      let str;
      if (show3 != null) {
        str = show3.id;
      }
      if (str == null) {
        str = "";
      }
      obj = { id: null, name: null, image: null, type: null };
      obj[0] = str;
      const show = item.show;
      let str2;
      if (show != null) {
        str2 = show.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj[1] = str2;
      const show2 = item.show;
      let first1;
      if (show2 != null) {
        first1 = show2.images[0];
      }
      obj[2] = first1;
      const album = item.album;
      let type1;
      if (album != null) {
        type1 = album.type;
      }
      if (type1 == null) {
        type1 = tmp22.SHOW;
      }
      obj[3] = type1;
      obj3[4] = obj;
      obj3[5] = [];
    }
  }
}
({ getSpotifyResourceType: map1, isSpotifyParty: closure_14, SPOTIFY_PARTY_PREFIX: closure_15, SpotifyEndpoints: closure_16, SpotifyResourceTypes: closure_17 } = WEB_OPEN);
const PlatformTypes = ME.PlatformTypes;
({ ActivityFlags: closure_19, AnalyticEvents: closure_20 } = ME);
let closure_21 = require("getPlatformUserUrl").get(PlatformTypes.SPOTIFY);
let c22 = "hm://pusher/v1/connections/";
let closure_23 = 30 * require("set").Millis.SECOND;
let closure_24 = 30 * require("set").Millis.SECOND;
let closure_25 = 5 * require("set").Millis.MINUTE;
let closure_26 = 5 * require("set").Millis.SECOND;
let closure_27 = 1.5 * require("set").Millis.SECOND;
const MINUTE = require("set").Millis.MINUTE;
let closure_29 = 3 * require("set").Millis.SECOND;
let closure_30 = { PLAYER_STATE_CHANGED: "PLAYER_STATE_CHANGED", DEVICE_STATE_CHANGED: "DEVICE_STATE_CHANGED" };
const message = "message";
const ping = "ping";
const single = "single";
let closure_34 = new require("checkIdleAFK")("Spotify");
const timeout = new require("start").Timeout();
const timeout1 = new require("start").Timeout();
const timeout2 = new require("start").Timeout();
const timeout3 = new require("start").Timeout();
const timeout4 = new require("start").Timeout();
let closure_40 = {};
let closure_41 = {};
let closure_42 = {};
let c43 = false;
let c44 = null;
let items = [WebSocket.CONNECTING, WebSocket.OPEN];
let set = new Set(items);
class SpotifySocket {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj._requestedDisconnect = false;
    obj._requestedConnect = false;
    obj2 = require("apply");
    obj.handleDeviceStateChange = obj2.throttle(() => {
      let accessToken;
      let accountId;
      obj = obj(outer1_2[15]);
      const devices = obj.getDevices(accountId.accountId, accountId.accessToken);
      ({ accountId, accessToken } = accountId);
      const SpotifyAPI = obj(outer1_2[15]).SpotifyAPI;
      obj = { url: outer1_16.PLAYER, query: null, onlyRetryOnAuthorizationErrors: true };
      obj = { additional_types: "" + outer1_17.TRACK + "," + outer1_17.EPISODE };
      obj[1] = obj;
      const value = SpotifyAPI.get(accountId, accessToken, obj);
      value.then((body) => {
        let closure_0 = body;
        body = body.body;
        if (null != body) {
          outer1_53(closure_0, accessToken, body).then(() => closure_0);
          const promise = outer1_53(closure_0, accessToken, body);
        } else {
          let obj = accessToken(outer1_2[13]);
          obj = { type: "SPOTIFY_PLAYER_STATE", accountId: null, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
          obj[1] = closure_0;
          obj.dispatch(obj);
        }
      }).catch(() => {
        let obj = accessToken(outer1_2[13]);
        obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj.dispatch(obj);
      });
    }, c29);
    obj.accountId = global;
    obj.accessToken = arg1;
    interval = new require("start").Interval();
    obj.pingInterval = interval;
    tmp2 = new require("fails")(undefined, c28);
    obj.backoff = tmp2;
    connectResult = obj.connect();
    return obj;
  }
}
const prototype = SpotifySocket.prototype;
Object.defineProperty(prototype, "connected", {
  get: function connected(arg0) {
    let hasItem = null != this.socket;
    if (hasItem) {
      hasItem = set.has(tmp.socket.readyState);
    }
    return hasItem;
  },
  set: undefined
});
prototype["connect"] = function connect() {
  let accessToken;
  let accountId;
  const self = this;
  accountId = this;
  if (!tmp) {
    tmp4.info("WS Connecting");
    self._requestedDisconnect = false;
    self._requestedConnect = true;
    ({ accountId, accessToken } = self);
    const SpotifyAPI = accountId(11149).SpotifyAPI;
    let obj = { url: null, query: null, onlyRetryOnAuthorizationErrors: true };
    obj[0] = constants.PLAYER;
    obj = { additional_types: null };
    const _HermesInternal = HermesInternal;
    obj[0] = "" + constants2.TRACK + "," + constants2.EPISODE;
    obj[1] = obj;
    const value = SpotifyAPI.get(accountId, accessToken, obj);
    const nextPromise = value.then((body) => {
      let closure_0 = body;
      body = body.body;
      if (null != body) {
        outer1_53(closure_0, accessToken, body).then(() => closure_0);
        const promise = outer1_53(closure_0, accessToken, body);
      } else {
        let obj = accessToken(outer1_2[13]);
        obj = { type: "SPOTIFY_PLAYER_STATE", accountId: null, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj[1] = closure_0;
        obj.dispatch(obj);
      }
    });
    const catchPromise = value.then((body) => {
      let closure_0 = body;
      body = body.body;
      if (null != body) {
        outer1_53(closure_0, accessToken, body).then(() => closure_0);
        const promise = outer1_53(closure_0, accessToken, body);
      } else {
        let obj = accessToken(outer1_2[13]);
        obj = { type: "SPOTIFY_PLAYER_STATE", accountId: null, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj[1] = closure_0;
        obj.dispatch(obj);
      }
    }).catch(() => {
      let obj = accessToken(outer1_2[13]);
      obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
      obj.dispatch(obj);
    });
    value.then((body) => {
      let closure_0 = body;
      body = body.body;
      if (null != body) {
        outer1_53(closure_0, accessToken, body).then(() => closure_0);
        const promise = outer1_53(closure_0, accessToken, body);
      } else {
        let obj = accessToken(outer1_2[13]);
        obj = { type: "SPOTIFY_PLAYER_STATE", accountId: null, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj[1] = closure_0;
        obj.dispatch(obj);
      }
    }).catch(() => {
      let obj = accessToken(outer1_2[13]);
      obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
      obj.dispatch(obj);
    }).then(() => {
      let handleClose;
      let handleMessage;
      let handleOpen;
      let socket;
      let socket2;
      let socket3;
      let socket4;
      accountId._requestedConnect = false;
      const webSocket = new WebSocket("wss://dealer.spotify.com/?access_token=" + accountId.accessToken);
      accountId.socket = webSocket;
      ({ handleOpen, socket } = accountId);
      socket.onopen = handleOpen.bind(accountId);
      ({ handleMessage, socket: socket2 } = accountId);
      socket2.onmessage = handleMessage.bind(accountId);
      ({ handleClose, socket: socket3, socket: socket4 } = accountId);
      const bindResult = handleClose.bind(accountId);
      socket4.onerror = bindResult;
      socket3.onclose = bindResult;
    }).catch((arg0) => {
      outer1_34.error(arg0);
      accountId._requestedConnect = false;
      accountId.handleClose();
    });
    const nextPromise1 = value.then((body) => {
      let closure_0 = body;
      body = body.body;
      if (null != body) {
        outer1_53(closure_0, accessToken, body).then(() => closure_0);
        const promise = outer1_53(closure_0, accessToken, body);
      } else {
        let obj = accessToken(outer1_2[13]);
        obj = { type: "SPOTIFY_PLAYER_STATE", accountId: null, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
        obj[1] = closure_0;
        obj.dispatch(obj);
      }
    }).catch(() => {
      let obj = accessToken(outer1_2[13]);
      obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
      obj.dispatch(obj);
    }).then(() => {
      let handleClose;
      let handleMessage;
      let handleOpen;
      let socket;
      let socket2;
      let socket3;
      let socket4;
      accountId._requestedConnect = false;
      const webSocket = new WebSocket("wss://dealer.spotify.com/?access_token=" + accountId.accessToken);
      accountId.socket = webSocket;
      ({ handleOpen, socket } = accountId);
      socket.onopen = handleOpen.bind(accountId);
      ({ handleMessage, socket: socket2 } = accountId);
      socket2.onmessage = handleMessage.bind(accountId);
      ({ handleClose, socket: socket3, socket: socket4 } = accountId);
      const bindResult = handleClose.bind(accountId);
      socket4.onerror = bindResult;
      socket3.onclose = bindResult;
    });
  }
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
      const obj = { type: null };
      obj[0] = ping;
      socket.send(JSON.stringify(obj));
    }
  }
};
prototype["handleOpen"] = function handleOpen() {
  const self = this;
  tmp4.info("WS Connected");
  const backoff = this.backoff;
  backoff.succeed();
  const pingInterval = this.pingInterval;
  pingInterval.start(closure_23, () => self.ping());
  const profile = self(11149).getProfile(this.accountId, this.accessToken);
  const obj = self(11149);
  const devices = self(11149).getDevices(this.accountId, this.accessToken);
};
prototype["handleMessage"] = function handleMessage(data) {
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
          self.connectionId = decodeURIComponent(uri.split(tmp15)[1]);
          const result = apiRequest.subscribePlayerStateNotifications(self.accountId, self.accessToken, self.connectionId);
          const obj = apiRequest;
        }
        tmp15 = c22;
      }
      const _Array = Array;
      if (Array.isArray(payloads)) {
        const iter = payloads[Symbol.iterator]();
        while (iter !== undefined) {
          let events = iter.next().events;
          if (null != events) {
            let tmp6 = tmp5;
            let tmp7 = events;
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
      tmp4.info("WS Disconnected. Next retry in " + Math.round(backoff.fail(() => {
        if (!self._requestedDisconnect) {
          self.connect();
        }
      })) + "ms");
    } catch (err) {
    }
  }
};
prototype["handleEvent"] = function handleEvent(arg0) {
  let event;
  let type;
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
class SpotifyStore extends Store {
}
const prototype2 = SpotifyStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, closure_8, checkIdleAFK, sortActivity, initialize, anyoneHasFlagInContext, updateVoiceState);
  const items = [sortActivity];
  this.syncWith(items, () => {
    let party;
    let sync_id;
    let timestamps;
    let flag = false;
    if (null != closure_4) {
      let tmp3;
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp] !== undefined) {
          let tmp21 = tmp5;
          let tmp22 = table;
          let tmp23 = table[tmp5];
          if (!tmp23.connected) {
            continue;
          } else {
            if (null == table2[tmp5]) {
              continue;
            } else {
              let arr = tmp6[tmp5];
              let found = arr.find((is_active) => is_active.is_active);
              if (null == found) {
                continue;
              } else {
                let obj = { socket: null, device: null };
                obj[0] = tmp23;
                obj[1] = found;
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
        const findActivityResult = sortActivity.findActivity(userId, (party) => {
          let tmp = null != party.party && null != party.party.id;
          if (tmp) {
            tmp = callback(party.party.id);
          }
          return tmp;
        });
        if (null == findActivityResult) {
          closure_37.start(closure_25, () => {
            let tmp = null != outer1_4;
            if (tmp) {
              tmp = outer1_4.userId === userId;
            }
            if (tmp) {
              outer1_1(outer1_2[19])();
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
          flag2 = callback(userId, findActivityResult, false);
        }
      }
    }
    return flag;
  });
  const isSpotifyProtocolRegistered = apiRequest.fetchIsSpotifyProtocolRegistered();
};
prototype2["hasConnectedAccount"] = function hasConnectedAccount() {
  return Object.keys(closure_40).length > 0;
};
prototype2["getActiveSocketAndDevice"] = function getActiveSocketAndDevice() {
  let tmp2;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp7 = tmp4;
      let tmp8 = dependencyMap;
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
            let obj = { socket: null, device: null };
            obj[0] = tmp9;
            obj[1] = found;
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
    let tmp4 = key10005;
    let tmp5 = dependencyMap;
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
          let obj = { socket: null, device: null };
          obj[0] = tmp6;
          obj[1] = found;
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
      let tmp9 = tmp4;
      let tmp10 = dependencyMap;
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
            let obj = { socket: null, device: null };
            obj[0] = tmp11;
            obj[1] = found;
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
    tmp7 = callback(party.id);
  }
  return tmp7;
};
prototype2["getSyncingWith"] = function getSyncingWith() {
  return closure_4;
};
prototype2["wasAutoPaused"] = function wasAutoPaused() {
  return c43;
};
prototype2["getLastPlayedTrackId"] = function getLastPlayedTrackId() {
  return closure_5;
};
prototype2["getTrack"] = function getTrack() {
  let track = null;
  if (null != closure_3) {
    track = closure_3.track;
  }
  return track;
};
prototype2["getPlayerState"] = function getPlayerState(arg0) {
  return dependencyMap3[arg0];
};
prototype2["shouldShowActivity"] = function shouldShowActivity() {
  let showActivity = null != closure_3;
  if (showActivity) {
    showActivity = closure_3.account.showActivity;
  }
  if (showActivity) {
    showActivity = !idle.isIdle();
  }
  return showActivity;
};
prototype2["getActivity"] = function getActivity() {
  let album;
  let artists;
  let context;
  let duration;
  let id;
  let isLocal;
  let name;
  let startTime;
  let type;
  if (null == closure_3) {
    let findActivityResult = null;
    if (null != closure_4) {
      findActivityResult = sortActivity.findActivity(closure_4.userId, (party) => {
        let tmp = null != party.party && null != party.party.id;
        if (tmp) {
          tmp = callback(party.party.id);
        }
        return tmp;
      });
    }
    return findActivityResult;
  } else {
    const track = closure_3.track;
    ({ artists, album, name } = track);
    ({ startTime, context } = closure_3);
    ({ id, duration, isLocal, type } = track);
    const substr = artists.slice(0, 5);
    if (artists.length > 0) {
      const mapped = substr.map((name) => name.name.replace(/;/g, ""));
      const joined = mapped.join("; ");
    }
    let assetFromImageURL = null;
    if (null != album.image) {
      let obj1 = updateAssets;
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
    if (null != closure_4) {
      if (null != closure_4.partyId) {
        let partyId = closure_4.partyId;
      }
      let text = name;
      if (name.length > 128) {
        text = `${name.substring(0, 125)}...`;
      }
      obj = { context_uri: null, album_id: null, artist_ids: null, type: null, button_urls: null };
      obj[0] = uri;
      obj[1] = album.id;
      obj[2] = substr.map((id) => id.id);
      obj[3] = type;
      obj[4] = [];
      obj1 = { name: null, assets: null, details: null, state: null, timestamps: null, party: null };
      obj1[0] = user.name;
      obj1[1] = obj;
      obj1[2] = text;
      obj1[3] = joined;
      const obj2 = { start: null, end: null };
      obj2[0] = startTime;
      obj2[1] = startTime + duration;
      obj1[4] = obj2;
      const obj3 = { id: null };
      obj3[0] = partyId;
      obj1[5] = obj3;
      if (!isLocal) {
        obj1.sync_id = id;
        obj1.flags = constants3.PLAY | constants3.SYNC;
        obj1.metadata = obj;
      }
      return obj1;
    }
    const _HermesInternal = HermesInternal;
    partyId = "" + closure_15 + store.getId();
    tmp6 = null != album.image && null != assetFromImageURL;
  }
};
SpotifyStore.displayName = "SpotifyStore";
const spotifyStore = new SpotifyStore(require("dispatcher"), {
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
        tmp7 = null != c3;
      }
      if (tmp7) {
        tmp7 = tmp5.track.id === c3.track.id;
      }
      if (tmp7) {
        c3 = null;
      }
      delete tmp[tmp2];
      const _HermesInternal = HermesInternal;
      dependencyMap3.info("Removed account: " + accountId);
      const obj = dependencyMap[accountId];
    }
  },
  SPOTIFY_PROFILE_UPDATE: function handleSpotifyProfileUpdate(arg0) {
    let accountId;
    let isPremium;
    ({ accountId, isPremium } = arg0);
    if (null == dependencyMap[accountId]) {
      return false;
    } else {
      tmp.isPremium = isPremium;
      const _HermesInternal = HermesInternal;
      tmp4.info("Profile updated for " + accountId + ": isPremium = " + isPremium);
    }
  },
  SPOTIFY_PLAYER_STATE: function handleSpotifyPlayerState(arg0) {
    let accountId;
    let context;
    let device;
    let isPlaying;
    let position;
    let repeat;
    let track;
    ({ accountId, isPlaying, track, position, device } = arg0);
    let account;
    let flag = false;
    ({ repeat, context } = arg0);
    if (null != device) {
      let id = dependencyMap2;
      if (null != dependencyMap2[accountId]) {
        const found = id[accountId].find((id) => id.id === device.id);
        if (null == found) {
          id[accountId].push(device);
          let flag2 = true;
          const arr3 = id[accountId];
        } else {
          flag2 = false;
          if (!account(643)(found, device)) {
            const _Object = Object;
            const merged = Object.assign(found, device);
            flag2 = true;
          }
        }
        id = device.id;
        setActiveDevice(accountId, id);
        const arr2 = id[accountId];
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
    account = store2.getAccount(accountId, PlatformTypes.SPOTIFY);
    if (null == account) {
      return flag;
    } else {
      let tmp21 = null;
      if (null != tmp10) {
        obj = { account: null, track: null, startTime: null, context: null, repeat: null };
        obj[0] = account;
        obj[1] = tmp10;
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
        obj[2] = num2;
        obj[3] = context;
        obj[4] = repeat;
        tmp21 = obj;
      }
      let tmp22 = null != device;
      if (tmp22) {
        tmp22 = null != closure_4;
      }
      if (tmp22) {
        tmp22 = 0 === position;
      }
      if (tmp22) {
        tmp22 = !isPlaying;
      }
      if (!tmp22) {
        tmp59[accountId] = tmp21;
      }
      let obj2 = account(12);
      const values = obj2.values(tmp59);
      let closure_3 = values.find((arg0) => null != arg0);
      id = store.getId();
      if (id === store.getId()) {
        const result = updateVoiceState.isCurrentClientInVoiceChannel();
        obj = { userId: null, checkSoundSharing: true, checkSoundboardSounds: false };
        obj[0] = id;
        if (result) {
          if (obj9.getIsSpeaking(obj)) {
            if (null != closure_3) {
              timeout.start(closure_24, autoPause, false);
              timeout1.stop();
            }
          }
        }
        timeout1.start(100, () => closure_35.stop(), false);
        obj9 = device(10642);
      }
      if (null != tmp10) {
        if (!tmp22) {
          timeout3.start(tmp10.duration - position + closure_26, () => {
            account(outer1_2[13]).dispatch({ type: "SPOTIFY_PLAYER_STATE", accountId: account.id, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null });
          });
        }
        if (null == closure_4) {
          if (timeout4.isStarted()) {
            tmp4.info("Listen along stop cancelled as playback of track resumed");
            obj4.stop();
          }
          obj4 = timeout4;
        } else {
          const _HermesInternal = HermesInternal;
          tmp4.info("Listen along active but playback stopped or track changed. Stopping listen along in " + closure_26 + "ms");
          timeout4.start(closure_26, () => {
            outer1_34.info("Stopping listening along");
            account(outer1_2[19])();
            account(outer1_2[13]).dispatch({ type: "SPOTIFY_PLAYER_STATE", accountId: account.id, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null });
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
              let tmp25Result = tmp25(709);
              const obj1 = { type: "SPOTIFY_NEW_TRACK", track: null, connectionId: null };
              obj1[1] = tmp10;
              obj1[2] = accountId;
              tmp25Result.dispatch(obj1);
              tmp25Result = tmp25(698);
              obj2 = { party_platform: null, track_id: null, has_images: true, details: null, state: null, album_id: null, author_ids: null, author_names: null };
              obj2[0] = PlatformTypes.SPOTIFY;
              obj2[1] = tmp10.id;
              obj2[3] = tmp10.album.name;
              obj2[4] = tmp10.name;
              obj2[5] = tmp10.album.id;
              const artists = tmp10.artists;
              obj2[6] = artists.map((id) => id.id);
              const artists1 = tmp10.artists;
              obj2[7] = artists1.map((name) => name.name);
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
        let tmp28 = tmp4;
        let tmp29 = dependencyMap;
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
              let obj = { socket: null, device: null };
              obj[0] = tmp30;
              obj[1] = found;
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
        tmp7 = !callback(party.id);
      }
      let tmp9 = !tmp7;
      if (!tmp7) {
        if (null != metadata) {
          const context_uri = metadata.context_uri;
        }
        if (null != closure_4) {
          handleUserActivitySyncStop();
        }
        if (null != metadata) {
          const obj2 = apiRequest;
          ({ accountId, accessToken } = socket);
          let TRACK = metadata.type;
          if (TRACK == null) {
            TRACK = constants2.TRACK;
          }
          obj = { contextUri: null, deviceId: null };
          obj[0] = context_uri;
          obj[1] = device.id;
          obj2.play(accountId, accessToken, sync_id, TRACK, obj);
          const _HermesInternal = HermesInternal;
          tmp4.info("Play started: " + socket.accountId + " playing " + sync_id + " on " + device.name);
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
    tmp4.info("Devices updated for " + accountId + ":", devices);
  },
  SPOTIFY_SET_ACTIVE_DEVICE: function handleSetActiveDevice(accountId) {
    setActiveDevice(accountId.accountId, accountId.deviceId);
  },
  SPEAKING: function handleSpeaking(userId) {
    userId = userId.userId;
    if (userId === store.getId()) {
      const result = updateVoiceState.isCurrentClientInVoiceChannel();
      let obj = useIsSpeaking;
      obj = { userId: null, checkSoundSharing: true, checkSoundboardSounds: false };
      obj[0] = userId;
      if (result) {
        if (obj.getIsSpeaking(obj)) {
          if (null != closure_3) {
            timeout.start(closure_24, autoPause, false);
            timeout1.stop();
          }
        }
      }
      timeout1.start(100, () => closure_35.stop(), false);
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      userId = userId.userId;
      if (userId === id.getId()) {
        const result = currentClientInVoiceChannel.isCurrentClientInVoiceChannel();
        let obj = callback(table[20]);
        obj = { userId: null, checkSoundSharing: true, checkSoundboardSounds: false };
        obj[0] = userId;
        if (result) {
          if (obj.getIsSpeaking(obj)) {
            if (null != closure_3) {
              closure_35.start(closure_24, closure_52, false);
              closure_36.stop();
            }
          }
        }
        closure_36.start(100, () => closure_35.stop(), false);
      }
      return arg0;
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
        if (observedAppNameForWindow.getObservedAppNameForWindow(sourceId) === user.name) {
          if (tmp5) {
            const interval = new start.Interval();
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
let result = set.fileFinishedImporting("modules/spotify/SpotifyStore.tsx");

export default spotifyStore;
export { SpotifySocket };