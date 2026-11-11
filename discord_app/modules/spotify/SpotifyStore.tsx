// discord_app/modules/spotify/SpotifyStore.tsx
import LoggerDefault from "../debug/Logger.tsx";
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import useIsSpeaking from "../../hooks/useIsSpeaking.tsx";
import SpotifyActionCreators from "SpotifyActionCreators.tsx";
import stopSyncingUserActivityDefault from "../activities/utils/stopSyncingUserActivity.tsx";
import ApplicationAssetUtils from "../../utils/ApplicationAssetUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import RunningGameStore from "../game_detection/RunningGameStore.native.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ConnectedAccountsStore from "../../stores/ConnectedAccountsStore.tsx";
import IdleStore from "../../stores/IdleStore.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import SpeakingStore from "../../stores/SpeakingStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import Platforms from "../../lib/Platforms.tsx";

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
    obj.handleDeviceStateChange = applyDefault.throttle(() => {
      obj = SpotifyActionCreators;
      const devices = obj.getDevices(obj.accountId, obj.accessToken);
      ({ accountId, accessToken } = obj);
      const SpotifyAPI = SpotifyActionCreators.SpotifyAPI;
      const request = {
        url: constants.PLAYER,
        query: { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE },
        onlyRetryOnAuthorizationErrors: true,
      };
      value = SpotifyAPI.get(accountId, accessToken, request);
      let obj2 = { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE };
      value
        .then((body) => {
          closure_0 = body;
          body = body.body;
          if (null != body) {
            updatePlayerState(accountId, accessToken, body).then(() => closure_0);
            const promise = updatePlayerState(accountId, accessToken, body);
          } else {
            const obj2 = {
              type: "SPOTIFY_PLAYER_STATE",
              accountId,
              track: null,
              volumePercent: 0,
              isPlaying: false,
              repeat: false,
              position: 0,
              context: null,
            };
            DispatcherDefault.dispatch(obj2);
          }
        })
        .catch(() => {
          DispatcherDefault.dispatch({
            type: "SPOTIFY_PLAYER_STATE",
            accountId,
            track: null,
            volumePercent: 0,
            isPlaying: false,
            repeat: false,
            position: 0,
            context: null,
          });
        });
    }, closure_30);
    obj.accountId = accountId;
    obj.accessToken = accessToken;
    const interval = new obj(5087).Interval();
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
  closure_0 = userId;
  importDefault = activity;
  let tmp2;
  const keys = Object.keys();
  if (keys !== undefined) {
    while (keys[tmp] !== undefined) {
      let tmp27 = dependencyMap[tmp4];
      if (!tmp27.connected) {
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
            let obj = { socket: tmp27, device: found };
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
    const socket = tmp2.socket;
    const device = tmp2.device;
    const sync_id = activity.sync_id;
    ({ party, timestamps } = activity);
    if (null != sync_id) {
      if (null != party) {
        if (null != party.id) {
          if (closure_15(party.id)) {
            if (null != timestamps) {
              if (null != timestamps.start) {
                let start = timestamps.start;
              }
              asyncGeneratorStep = false;
              if (tmp10) {
                asyncGeneratorStep = null;
              }
              const metadata = activity.metadata;
              let type;
              if (metadata != null) {
                type = metadata.type;
              }
              if (type == null) {
                type = constants2.TRACK;
              }
              const tmp11Result = closure_14(type);
              closure_7 = tmp11Result;
              if (null != tmp11Result) {
                let obj3 = { userId, partyId: party.id, trackId: sync_id, startTime: start };
                closure_0 = asyncGeneratorStep(async () => {
                  if (c7 === 2) {
                    c7 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp9 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    try {
                      c7 = 2;
                      if (0 === repeat) {
                        if (arg0 === 1) {
                          c7 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c7 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          closure_2 = tmp7;
                          closure_130_1 = undefined;
                          closure_130_2 = undefined;
                          closure_130_3 = undefined;
                          closure_130_4 = undefined;
                          closure_130_0 = null;
                          timeout = new closure_0(socket[13]).Timeout();
                          closure_130_1 = timeout;
                          c5 = 2;
                          items = [closure_0(socket[18]).getMetadata(closure_1, closure_0)];
                          const promise = new Promise((arg0) => {
                            closure_0 = arg0;
                            return closure_1_1.start(250, () => closure_0(null));
                          });
                          items[1] = promise;
                          repeat = 3;
                          c7 = 1;
                          const obj5 = { value: Promise.race(items), done: false };
                          return obj5;
                        }
                      } else if (1 === tmp10) {
                        c5 = 0;
                        closure_130_1.stop();
                        throw closure_4;
                      } else {
                        if (2 === tmp10) {
                          c5 = 1;
                          c5 = 0;
                          closure_130_1.stop();
                          if (obj3 === closure_1_8) {
                            let type;
                            if (closure_130_0 != null) {
                              type = closure_130_0.type;
                            }
                            closure_0 = type;
                            if (type == null) {
                              closure_0 = c7;
                            }
                            closure_130_2 = gesture(closure_0);
                            let album_id;
                            if (closure_130_0 != null) {
                              album_id = closure_130_0.album_id;
                            }
                            closure_130_3 = album_id;
                            let combined;
                            if (closure_130_2 === constants.TRACK) {
                              if (typeof closure_130_3 === "string") {
                                if (closure_130_3.trim().length > 0) {
                                  const _HermesInternal = HermesInternal;
                                  combined = "spotify:album:" + closure_130_3;
                                }
                              }
                            }
                            closure_130_4 = combined;
                            closure_1_8.albumContextUri = closure_130_4;
                            c5 = 3;
                            obj3 = closure_0(socket[16]);
                            ({ accountId, accessToken } = closure_2);
                            closure_1 = closure_130_2;
                            if (closure_130_2 == null) {
                              closure_1 = c7;
                            }
                            const obj6 = { contextUri: closure_130_4, position: null, deviceId: null, repeat: null };
                            const _Math = Math;
                            const _Date = Date;
                            obj6.position = Math.max(0, Date.now() - c5);
                            obj6.deviceId = tmp4.id;
                            obj6.repeat = repeat;
                            repeat = 5;
                            c7 = 1;
                            const obj7 = {
                              value: obj3.play(accountId, accessToken, closure_4, closure_1, obj6),
                              done: false,
                            };
                            return obj7;
                          }
                        } else if (3 === tmp10) {
                          if (arg0 === 1) {
                            c7 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 0;
                            closure_130_1.stop();
                            c7 = 3;
                            const obj8 = { value, done: true };
                            return obj8;
                          } else {
                            closure_130_0 = value;
                            c5 = 1;
                          }
                        } else {
                          if (4 === tmp10) {
                            c5 = 0;
                            closure_130_5 = closure_4;
                            logger.warn("Listen along play command failed", closure_130_5);
                          } else if (arg0 === 1) {
                            c7 = 3;
                            throw value;
                          } else if (arg0 !== 2) {
                            c5 = 0;
                          }
                          c5 = 0;
                          c7 = 3;
                          const obj = { value, done: true };
                          return obj;
                        }
                        c7 = 3;
                      }
                    } catch (tmp75) {
                      closure_4 = tmp75;
                      if (tmp5 === c5) {
                        c7 = tmp3;
                        throw tmp75;
                      } else if (tmp2 === tmp77) {
                        repeat = tmp2;
                      } else if (tmp === tmp77) {
                        repeat = tmp;
                      } else {
                        repeat = tmp6;
                      }
                    }
                  }
                });
                (function startPlayback() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })();
                let str = "presence change";
                if (arg2) {
                  let obj4 = { party_id: party.id, other_user_id: userId };
                  require("AnalyticsUtils").track(constants4.SPOTIFY_LISTEN_ALONG_STARTED, obj4);
                  str = "started";
                  let obj2 = require("AnalyticsUtils");
                }
                let _HermesInternal = HermesInternal;
                logger.info(
                  "Listen along " +
                    str +
                    ": " +
                    socket.accountId +
                    " to " +
                    userId +
                    " playing " +
                    sync_id +
                    " on " +
                    device.name,
                );
              }
              tmp10 = null != dependencyMap3[socket.accountId] && false === dependencyMap3[socket.accountId].repeat;
            }
            let _Date = Date;
            start = Date.now();
          }
        }
      }
    }
    return false;
  }
}
function handleUserActivitySyncStop() {
  let partyId = null;
  if (null != _null2) {
    partyId = _null2.partyId;
  }
  const obj2 = { party_id: partyId, other_user_id: null };
  let userId = null;
  if (null != _null2) {
    userId = _null2.userId;
  }
  obj2.other_user_id = userId;
  AnalyticsUtilsDefault.track(constants4.SPOTIFY_LISTEN_ALONG_ENDED, obj2);
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
            let obj3 = { socket: tmp23, device: found };
            tmp11 = obj3;
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
  const keys = Object.keys(closure_41);
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
let closure_53 = async function _pauseAfterAlbumAdvance(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          if (null != dependencyMap4[closure_0]) {
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: require("SpotifyActionCreators").pause(tmp15, tmp17.accessToken), done: false };
            return obj5;
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          closure_129_0 = closure_3;
          closure_130_35.warn("Unable to pause Spotify after album advance", closure_129_0);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c6 = 3;
    } catch (tmp20) {
      closure_3 = tmp20;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp20;
      } else {
        c5 = tmp;
      }
    }
  }
};
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
      c44 = true;
      SpotifyActionCreators.pause(socket.accountId, socket.accessToken);
      AnalyticsUtilsDefault.track(constants4.SPOTIFY_AUTO_PAUSED);
      logger.info("Playback auto paused");
    }
  }
}
function updatePlayerState(accountId, arg1, device) {
  _require = accountId;
  device = device.device;
  let obj5 = device;
  ({ progress_ms: dependencyMap, is_playing: c3, repeat_state: c4, item, context } = device);
  let obj12;
  if (null != item) {
    if (item.type === constants2.TRACK) {
      id = item.id;
      if (tmp4) {
        id = item.linked_from.id;
      }
      const obj3 = { id, name: null, duration: null, type: null, album: null, artists: null, isLocal: null };
      ({ name: obj2.name, duration_ms: obj2.duration } = item);
      obj3.type = constants2.TRACK;
      const album2 = item.album;
      let str3;
      if (album2 != null) {
        str3 = album2.id;
      }
      if (str3 == null) {
        str3 = "";
      }
      const obj4 = { id: str3, name: null, image: null, type: null };
      const album3 = item.album;
      let str4;
      if (album3 != null) {
        str4 = album3.name;
      }
      if (str4 == null) {
        str4 = "";
      }
      obj4.name = str4;
      const album4 = item.album;
      let first;
      if (album4 != null) {
        first = album4.images[0];
      }
      obj4.image = first;
      const album5 = item.album;
      let type;
      if (album5 != null) {
        type = album5.type;
      }
      if (type == null) {
        type = constants2.ALBUM;
      }
      obj4.type = type;
      obj3.album = obj4;
      const _Array = Array;
      if (Array.isArray(item.artists)) {
        const artists = item.artists;
        let found = artists.filter((id) => {
          let isNotNullishResult = accountId(position[23]).isNotNullish(id.id);
          if (isNotNullishResult) {
            isNotNullishResult = accountId(position[23]).isNotNullish(id.name);
            const tmpResult = accountId(position[23]);
          }
          return isNotNullishResult;
        });
      } else {
        found = [];
      }
      obj3.artists = found;
      obj3.isLocal = item.is_local || false;
      obj12 = obj3;
      tmp4 = null != item.linked_from && null != item.linked_from.id;
    }
    let tmp8 = null != device;
    if (tmp8) {
      tmp8 = true !== device.is_active;
    }
    if (tmp8) {
      obj5 = {};
      const merged = Object.assign(device);
      obj5.is_active = true;
    }
    if (null != context) {
      items = [,];
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
          const obj11 = { url: context.href };
          value = SpotifyAPI.get(accountId, arg1, obj11);
          resolved = value
            .then((body) => body.body)
            .catch((error) => {
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
      const obj2 = {
        type: "SPOTIFY_PLAYER_STATE",
        accountId,
        track: obj12,
        volumePercent: null,
        isPlaying: null,
        repeat: null,
        position: null,
        context: null,
        device: null,
      };
      let num = 0;
      if (null != obj5) {
        num = obj5.volume_percent;
      }
      obj2.volumePercent = num;
      obj2.isPlaying = isPlaying;
      obj2.repeat = "off" !== _null2;
      obj2.position = position;
      obj2.context = tmp;
      obj2.device = obj5;
      DispatcherDefault.dispatch(obj2);
    });
  }
  if (null != item) {
    if (item.type === constants2.EPISODE) {
      obj12 = { id: null, name: null, duration: null, type: null, album: null, artists: null, isLocal: false };
      ({ id: obj6.id, name: obj6.name, duration_ms: obj6.duration } = item);
      obj12.type = constants2.EPISODE;
      const show3 = item.show;
      let str;
      if (show3 != null) {
        str = show3.id;
      }
      if (str == null) {
        str = "";
      }
      let obj = { id: str, name: null, image: null, type: null };
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
      obj12.album = obj;
      obj12.artists = [];
    }
  }
}
const SpotifyConstants = fn(7227);
({
  getSpotifyResourceType: closure_14,
  isSpotifyParty: closure_15,
  SPOTIFY_PARTY_PREFIX: closure_16,
  SpotifyEndpoints: closure_17,
  SpotifyResourceTypes: closure_18,
} = SpotifyConstants);
const Constants = fn(1072);
const PlatformTypes = Constants.PlatformTypes;
({ ActivityFlags: closure_20, AnalyticEvents: closure_21 } = Constants);
const user = Platforms.get(PlatformTypes.SPOTIFY);
let c23 = "hm://pusher/v1/connections/";
let closure_24 = 30 * DurationsDefault.Millis.SECOND;
let closure_25 = 30 * DurationsDefault.Millis.SECOND;
let closure_26 = 5 * DurationsDefault.Millis.MINUTE;
let closure_27 = 5 * DurationsDefault.Millis.SECOND;
let closure_28 = 1.5 * DurationsDefault.Millis.SECOND;
const MINUTE = DurationsDefault.Millis.MINUTE;
let closure_30 = 3 * DurationsDefault.Millis.SECOND;
const constants5 = { PLAYER_STATE_CHANGED: "PLAYER_STATE_CHANGED", DEVICE_STATE_CHANGED: "DEVICE_STATE_CHANGED" };
const message = "message";
const ping = "ping";
const single = "single";
const logger = new LoggerDefault("Spotify");
let timeout = new fn(5087).Timeout();
const timeout1 = new fn(5087).Timeout();
const timeout2 = new fn(5087).Timeout();
const timeout3 = new fn(5087).Timeout();
const timeout4 = new fn(5087).Timeout();
const dependencyMap = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
let c44 = false;
let c45 = null;
let items = [WebSocket.CONNECTING, WebSocket.OPEN];
const set = new Set(items);
class SpotifySocket {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj._requestedDisconnect = false;
    obj._requestedConnect = false;
    obj2 = closure_1(closure_2[17]);
    obj.handleDeviceStateChange = obj2.throttle(() => {
      obj = SpotifyActionCreators;
      const devices = obj.getDevices(obj.accountId, obj.accessToken);
      ({ accountId, accessToken } = obj);
      const SpotifyAPI = SpotifyActionCreators.SpotifyAPI;
      const request = {
        url: constants.PLAYER,
        query: { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE },
        onlyRetryOnAuthorizationErrors: true,
      };
      value = SpotifyAPI.get(accountId, accessToken, request);
      let obj2 = { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE };
      value
        .then((body) => {
          closure_0 = body;
          body = body.body;
          if (null != body) {
            updatePlayerState(accountId, accessToken, body).then(() => closure_0);
            const promise = updatePlayerState(accountId, accessToken, body);
          } else {
            const obj2 = {
              type: "SPOTIFY_PLAYER_STATE",
              accountId,
              track: null,
              volumePercent: 0,
              isPlaying: false,
              repeat: false,
              position: 0,
              context: null,
            };
            DispatcherDefault.dispatch(obj2);
          }
        })
        .catch(() => {
          DispatcherDefault.dispatch({
            type: "SPOTIFY_PLAYER_STATE",
            accountId,
            track: null,
            volumePercent: 0,
            isPlaying: false,
            repeat: false,
            position: 0,
            context: null,
          });
        });
    }, closure_30);
    obj.accountId = global;
    obj.accessToken = fn;
    interval = new closure_0(closure_2[13]).Interval();
    obj.pingInterval = interval;
    tmp2 = new closure_1(closure_2[15])(undefined, closure_29);
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
  set: undefined,
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
    const SpotifyAPI = self(7228).SpotifyAPI;
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
        const obj2 = {
          type: "SPOTIFY_PLAYER_STATE",
          accountId,
          track: null,
          volumePercent: 0,
          isPlaying: false,
          repeat: false,
          position: 0,
          context: null,
        };
        DispatcherDefault.dispatch(obj2);
      }
    });
    const catchPromise = value
      .then((body) => {
        closure_0 = body;
        body = body.body;
        if (null != body) {
          updatePlayerState(accountId, accessToken, body).then(() => closure_0);
          const promise = updatePlayerState(accountId, accessToken, body);
        } else {
          const obj2 = {
            type: "SPOTIFY_PLAYER_STATE",
            accountId,
            track: null,
            volumePercent: 0,
            isPlaying: false,
            repeat: false,
            position: 0,
            context: null,
          };
          DispatcherDefault.dispatch(obj2);
        }
      })
      .catch(() => {
        DispatcherDefault.dispatch({
          type: "SPOTIFY_PLAYER_STATE",
          accountId,
          track: null,
          volumePercent: 0,
          isPlaying: false,
          repeat: false,
          position: 0,
          context: null,
        });
      });
    value
      .then((body) => {
        closure_0 = body;
        body = body.body;
        if (null != body) {
          updatePlayerState(accountId, accessToken, body).then(() => closure_0);
          const promise = updatePlayerState(accountId, accessToken, body);
        } else {
          const obj2 = {
            type: "SPOTIFY_PLAYER_STATE",
            accountId,
            track: null,
            volumePercent: 0,
            isPlaying: false,
            repeat: false,
            position: 0,
            context: null,
          };
          DispatcherDefault.dispatch(obj2);
        }
      })
      .catch(() => {
        DispatcherDefault.dispatch({
          type: "SPOTIFY_PLAYER_STATE",
          accountId,
          track: null,
          volumePercent: 0,
          isPlaying: false,
          repeat: false,
          position: 0,
          context: null,
        });
      })
      .then(() => {
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
      })
      .catch((error) => {
        logger.error(error);
        self._requestedConnect = false;
        self.handleClose();
      });
    const nextPromise1 = value
      .then((body) => {
        closure_0 = body;
        body = body.body;
        if (null != body) {
          updatePlayerState(accountId, accessToken, body).then(() => closure_0);
          const promise = updatePlayerState(accountId, accessToken, body);
        } else {
          const obj2 = {
            type: "SPOTIFY_PLAYER_STATE",
            accountId,
            track: null,
            volumePercent: 0,
            isPlaying: false,
            repeat: false,
            position: 0,
            context: null,
          };
          DispatcherDefault.dispatch(obj2);
        }
      })
      .catch(() => {
        DispatcherDefault.dispatch({
          type: "SPOTIFY_PLAYER_STATE",
          accountId,
          track: null,
          volumePercent: 0,
          isPlaying: false,
          repeat: false,
          position: 0,
          context: null,
        });
      })
      .then(() => {
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
  } catch (err) {}
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
  pingInterval.start(closure_24, () => self.ping());
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
        if (uri.startsWith(c23)) {
          const _decodeURIComponent = decodeURIComponent;
          self.connectionId = decodeURIComponent(uri.split(c23)[1]);
          const result = SpotifyActionCreators.subscribePlayerStateNotifications(
            self.accountId,
            self.accessToken,
            self.connectionId,
          );
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
      logger.info(
        "WS Disconnected. Next retry in " +
          Math.round(
            backoff.fail(() => {
              if (!self._requestedDisconnect) {
                self.connect();
              }
            }),
          ) +
          "ms",
      );
    } catch (err) {}
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
class SpotifyStore extends Store {}
const prototype2 = SpotifyStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(
    AuthenticationStore,
    ConnectedAccountsStore,
    IdleStore,
    PresenceStore,
    RunningGameStore,
    SpeakingStore,
    VoiceStateStore,
  );
  items = [PresenceStore];
  this.syncWith(items, () => {
    let flag = false;
    if (null != closure_4) {
      let tmp3;
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[tmp] !== undefined) {
          let tmp23 = closure_41[tmp5];
          if (!tmp23.connected) {
            continue;
          } else {
            if (null == closure_42[tmp5]) {
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
        const findActivityResult = closure_11.findActivity(userId, (party) => {
          let tmp = null != party.party && null != party.party.id;
          if (tmp) {
            tmp = closure_1_15(party.party.id);
          }
          return tmp;
        });
        if (null == findActivityResult) {
          closure_38.start(closure_26, () => {
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
          closure_38.stop();
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
          flag2 = closure_51(userId, findActivityResult, false);
        }
      }
    }
    return flag;
  });
  const isSpotifyProtocolRegistered = SpotifyActionCreators.fetchIsSpotifyProtocolRegistered();
};
prototype2["hasConnectedAccount"] = function hasConnectedAccount() {
  return Object.keys(closure_41).length > 0;
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
  items = [];
  for (const key10005 in closure_41) {
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
    tmp7 = colors(party.id);
  }
  return tmp7;
};
prototype2["getSyncingWith"] = function getSyncingWith() {
  return c4;
};
prototype2["wasAutoPaused"] = function wasAutoPaused() {
  return c44;
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
          tmp = closure_1_15(party.party.id);
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
      assetFromImageURL = ApplicationAssetUtils.getAssetFromImageURL(PlatformTypes.SPOTIFY, album.image.url);
    }
    const obj = {};
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
      const obj3 = {
        context_uri: uri,
        album_id: album.id,
        artist_ids: substr.map((id) => id.id),
        type,
        button_urls: [],
      };
      const obj4 = { name: user.name, assets: obj, details: text, state: joined, timestamps: null, party: null };
      const obj5 = { start: startTime, end: startTime + duration };
      obj4.timestamps = obj5;
      const obj6 = { id: partyId };
      obj4.party = obj6;
      if (!isLocal) {
        obj4.sync_id = id;
        obj4.flags = constants3.PLAY | constants3.SYNC;
        obj4.metadata = obj3;
      }
      return obj4;
    }
    const _HermesInternal = HermesInternal;
    partyId = "" + closure_1_16 + AuthenticationStore.getId();
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
  SPOTIFY_PLAYER_STATE: function handleSpotifyPlayerState(context) {
    ({ accountId, isPlaying, track, position, device } = context);
    context = context.context;
    let account;
    let flag = false;
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
        items = [device];
        id[accountId] = items;
        flag = true;
      }
    }
    if (isPlaying) {
      let tmp10 = track;
      if (_null != null) {
        _null.start(closure_25, autoPause);
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
        const obj2 = {
          account,
          track: tmp10,
          startTime: null,
          position: null,
          positionUpdatedAt: null,
          context: null,
          repeat: null,
        };
        const _Date = Date;
        let num2 = 0;
        const timestamp = Date.now();
        if (null != tmp85) {
          num2 = tmp85.startTime;
        }
        const diff = timestamp - position;
        const _Math = Math;
        if (Math.abs(diff - num2) > closure_28) {
          num2 = diff;
        }
        obj2.startTime = num2;
        obj2.position = position;
        const _Date2 = Date;
        obj2.positionUpdatedAt = Date.now();
        obj2.context = context;
        obj2.repeat = context.repeat;
        tmp21 = obj2;
      }
      let waitingForHost;
      if (_null2 != null) {
        waitingForHost = _null2.waitingForHost;
      }
      let tmp23 = true === waitingForHost;
      if (tmp23) {
        let uri;
        if (context != null) {
          uri = context.uri;
        }
        tmp23 = uri !== _null2.albumContextUri;
      }
      if (tmp23) {
        _null2.waitingForHost = undefined;
      }
      let num4 = 0;
      if (null != dependencyMap3[accountId]) {
        const _Math2 = Math;
        const _Date3 = Date;
        num4 = tmp85.position + Math.max(0, Date.now() - tmp85.positionUpdatedAt);
      }
      let tmp28 = null != device;
      if (tmp28) {
        tmp28 = null != _null2;
      }
      if (tmp28) {
        tmp28 = !_null2.waitingForHost;
      }
      if (tmp28) {
        tmp28 = null != _null2.albumContextUri;
      }
      if (tmp28) {
        let uri1;
        if (context != null) {
          uri1 = context.uri;
        }
        tmp28 = uri1 === _null2.albumContextUri;
      }
      if (tmp28) {
        tmp28 = isPlaying;
      }
      if (tmp28) {
        tmp28 = null != tmp10;
      }
      if (tmp28) {
        tmp28 = tmp10.id !== _null2.trackId;
      }
      if (tmp28) {
        tmp28 = null != tmp85;
      }
      if (tmp28) {
        tmp28 = tmp85.track.id === _null2.trackId;
      }
      if (tmp28) {
        tmp28 = tmp85.track.duration > 0;
      }
      if (tmp28) {
        const _Math3 = Math;
        tmp28 = Math.abs(tmp85.track.duration - num4) <= closure_27;
      }
      let tmp38 = tmp28;
      if (tmp28) {
        tmp38 = null != _null2;
      }
      if (tmp38) {
        _null2.waitingForHost = true;
        (function pauseAfterAlbumAdvance() {
          const self = this;
          const apply = closure_1_53.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(accountId);
      }
      let waitingForHost1;
      if (_null2 != null) {
        waitingForHost1 = _null2.waitingForHost;
      }
      let tmp43 = true === waitingForHost1;
      if (tmp43) {
        let uri2;
        if (context != null) {
          uri2 = context.uri;
        }
        tmp43 = uri2 === _null2.albumContextUri;
      }
      if (!tmp43) {
        let tmp46 = null != device;
        if (tmp46) {
          tmp46 = null != _null2;
        }
        if (tmp46) {
          tmp46 = (0 === position && !isPlaying) || tmp28;
          const tmp48 = (0 === position && !isPlaying) || tmp28;
        }
        tmp43 = tmp46;
      }
      if (!tmp43) {
        dependencyMap3[accountId] = tmp21;
      }
      const values = account(12).values(dependencyMap3);
      closure_3 = values.find((item) => null != item);
      const id1 = AuthenticationStore.getId();
      if (id1 === AuthenticationStore.getId()) {
        const result = VoiceStateStore.isCurrentClientInVoiceChannel();
        const obj5 = { userId: id1, checkSoundSharing: true };
        if (result) {
          if (obj9.getIsSpeaking(obj5)) {
            if (null != closure_3) {
              timeout.start(closure_25, autoPause, false);
              timeout1.stop();
            }
          }
        }
        timeout1.start(100, () => closure_1_36.stop(), false);
        obj9 = device(6963);
      }
      if (null != tmp10) {
        if (!tmp43) {
          timeout3.start(tmp10.duration - position + closure_27, () => {
            DispatcherDefault.dispatch({
              type: "SPOTIFY_PLAYER_STATE",
              accountId: account.id,
              track: null,
              volumePercent: 0,
              isPlaying: false,
              repeat: false,
              position: 0,
              context: null,
            });
          });
        }
        if (null != _null2) {
          if (!tmp43) {
            const _HermesInternal = HermesInternal;
            logger.info(
              "Listen along active but playback stopped or track changed. Stopping listen along in " +
                closure_27 +
                "ms",
            );
            timeout4.start(closure_27, () => {
              logger.info("Stopping listening along");
              stopSyncingUserActivityDefault();
              DispatcherDefault.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: account.id,
                track: null,
                volumePercent: 0,
                isPlaying: false,
                repeat: false,
                position: 0,
                context: null,
              });
            });
          }
          let tmp80 = flag;
          if (tmp49 !== closure_3) {
            if (null != tmp85) {
              if (null != tmp85) {
                if (null != tmp21) {
                  if (tmp85.track.id === tmp21.track.id) {
                    tmp80 = flag;
                  }
                }
              }
              if (null != tmp10) {
                const obj6 = { type: "SPOTIFY_NEW_TRACK", track: tmp10, connectionId: accountId };
                tmp50(572).dispatch(obj6);
                const tmp50Result = tmp50(572);
                const obj7 = {
                  party_platform: PlatformTypes.SPOTIFY,
                  track_id: tmp10.id,
                  has_images: true,
                  details: tmp10.album.name,
                  state: tmp10.name,
                  album_id: tmp10.album.id,
                  author_ids: null,
                  author_names: null,
                };
                const artists = tmp10.artists;
                obj7.author_ids = artists.map((id) => id.id);
                const artists1 = tmp10.artists;
                obj7.author_names = artists1.map((name) => name.name);
                tmp50(1252).track(constants4.ACTIVITY_UPDATED, obj7);
                const tmp50Result2 = tmp50(1252);
              }
            } else {
              tmp80 = flag;
            }
          }
          return tmp80;
        }
        if (timeout4.isStarted()) {
          logger.info("Listen along stop cancelled as playback of track resumed");
          timeout4.stop();
        }
      }
      timeout3.stop();
      const obj3 = account(12);
      tmp49 = closure_3;
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
        tmp7 = !colors(party.id);
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
          const obj3 = { contextUri: context_uri, deviceId: device.id };
          obj2.play(accountId, accessToken, sync_id, TRACK, obj3);
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
    closure_42[accountId] = devices;
    logger.info("Devices updated for " + accountId + ":", devices);
  },
  SPOTIFY_SET_ACTIVE_DEVICE: function handleSetActiveDevice(accountId) {
    setActiveDevice(accountId.accountId, accountId.deviceId);
  },
  SPEAKING: function handleSpeaking(userId) {
    userId = userId.userId;
    if (userId === AuthenticationStore.getId()) {
      const result = VoiceStateStore.isCurrentClientInVoiceChannel();
      const obj2 = { userId, checkSoundSharing: true };
      if (result) {
        if (obj.getIsSpeaking(obj2)) {
          if (null != c3) {
            timeout.start(closure_25, autoPause, false);
            timeout1.stop();
          }
        }
      }
      timeout1.start(100, () => closure_1_36.stop(), false);
      obj = useIsSpeaking;
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, userId) => {
      userId = userId.userId;
      if (userId === id.getId()) {
        const result = currentClientInVoiceChannel.isCurrentClientInVoiceChannel();
        const obj2 = { userId, checkSoundSharing: true };
        if (result) {
          if (obj.getIsSpeaking(obj2)) {
            if (null != _null) {
              timeout.start(closure_1_25, autoPause, false);
              timeout1.stop();
            }
          }
        }
        timeout1.start(100, () => closure_1_36.stop(), false);
        obj = require("useIsSpeaking");
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
      if (c45 != null) {
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
            c45 = interval;
            interval.start(closure_25, autoPause);
          }
        }
      }
      if (c45 != null) {
        obj2.stop();
      }
      c45 = null;
      obj = c45;
      obj2 = c45;
    } else if (null == settings) {
      if (c45 != null) {
        obj4.stop();
      }
      c45 = null;
      obj4 = c45;
    }
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/spotify/SpotifyStore.tsx");

export default spotifyStore;
export { SpotifySocket };
