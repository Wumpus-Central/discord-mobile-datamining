// === Module 11394: SpotifyUtils ===

// Module 11394 (SpotifyUtils)
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import PlatformsDefault from "Platforms" /* 5449 */;
import SpotifyActionCreators from "SpotifyActionCreators" /* 11396 */;
import UserActivityActionCreators from "UserActivityActionCreators" /* 11397 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import SpotifyProtocolStore from "SpotifyProtocolStore" /* 11395 */;
import SpotifyStore from "SpotifyStore" /* 5446 */;
import SpotifyConstants from "SpotifyConstants" /* 8026 */;
import size from "module_2" /* 2 */;

let TRACK, closure_3, closure_4;

let c9;
let metroImportAll;
let metroImportDefault;
function asString(str) {
  if (typeof str === "string") {
    return str;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("value is not a string");
    throw error;
  }
}
let value = function _getSpotifyMetadataFromActivity() {
  const obj = _asyncToGenerator(async (arg0, type) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    return (async function(arg0, value) {
      let album_id;
      let mapped;
      let mapped1;
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = tmp;
              closure_0 = undefined;
              type = undefined;
              c5 = 1;
              c6 = 1;
              const obj5 = { value: obj4.getMetadata(closure_0, type), done: false };
              obj4 = UserActivityActionCreators;
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_0 = value;
            type = closure_0.type;
            TRACK = type;
            if (type == null) {
              TRACK = closure_132_8.TRACK;
            }
            closure_132_12(TRACK);
            type = closure_132_9(TRACK);
            if (null === type) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("invalid type " + closure_0.type);
              throw error;
            } else {
              let context_uri;
              if (typeof closure_0.context_uri === "string") {
                context_uri = closure_0.context_uri;
              }
              value = { context_uri, album_id, artist_ids: mapped, type, button_urls: mapped1 };
              album_id = closure_0.album_id;
              closure_132_12(album_id);
              const _Array = Array;
              if (Array.isArray(closure_0.artist_ids)) {
                const artist_ids = closure_0.artist_ids;
                mapped = artist_ids.map(closure_132_12);
              } else {
                mapped = [];
              }
              const _Array2 = Array;
              if (Array.isArray(closure_0.button_urls)) {
                const button_urls = closure_0.button_urls;
                mapped1 = button_urls.map(closure_132_12);
              } else {
                mapped1 = [];
              }
              c6 = 3;
              return { value, done: true };
            }
          }
        } catch (tmp38) {
          c6 = 3;
          throw tmp38;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ SPOTIFY_APP_PROTOCOL: metroImportDefault, SpotifyResourceTypes: metroImportAll, getSpotifyResourceType: c9 } = SpotifyConstants);
const PlatformTypes = Constants.PlatformTypes;
let closure_11 = 30 * DurationsDefault.Millis.SECOND;
const result = size.fileFinishedImporting("modules/spotify/SpotifyUtils.tsx");

export const isSpotifyPlayable = function isSpotifyPlayable(getActiveSocketAndDevice) {
  const isProtocolRegisteredResult = null != getActiveSocketAndDevice.getActiveSocketAndDevice() || SpotifyProtocolStore.isProtocolRegistered();
  return isProtocolRegisteredResult;
};
export const ensureSpotifyPlayable = function ensureSpotifyPlayable() {
  let device;
  let socket;
  const activeSocketAndDevice = SpotifyStore.getActiveSocketAndDevice();
  if (null != activeSocketAndDevice) {
    return Promise.resolve(activeSocketAndDevice);
  } else if (SpotifyProtocolStore.isProtocolRegistered()) {
    let playableComputerDevices = SpotifyStore.getPlayableComputerDevices();
    const isObservedAppRunning = RunningGameStore.isObservedAppRunning;
    let obj2 = PlatformsDefault;
    if (isObservedAppRunning(obj2.get(PlatformTypes.SPOTIFY).name)) {
      if (playableComputerDevices.length > 0) {
        ({ socket, device } = playableComputerDevices[0]);
        const obj3 = playableComputerDevices(11396);
        obj3.setActiveDevice(socket.accountId, device.id);
        const obj4 = { socket, device };
        return Promise.resolve(obj4);
      }
    }
    const self3 = this;
    const self4 = this;
    const promise = new Promise((arg0, arg1) => {
      let closure_2;
      let closure_0 = arg0;
      let closure_1 = arg1;
      function onSpotifyStoreChange() {
        playableComputerDevices = SpotifyStore.getPlayableComputerDevices();
        function _loop(socket, device) {
          if (null == closure_1_0.find((device) => device.device.id === device.id)) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            closure_2_6.removeChangeListener(closure_3);
            const _setImmediate = setImmediate;
            setImmediate(() => {
              const obj = playableComputerDevices(dependencyMap[8]);
              obj.setActiveDevice(socket.accountId, device.id);
              const obj2 = { socket, device };
              closure_2_0(obj2);
            });
          }
        }
        const iter = playableComputerDevices[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let _loopResult = _loop(nextResult.socket, nextResult.device);
          continue;
        }
      }
      const timeout = setTimeout(() => {
        SpotifyStore.removeChangeListener(onSpotifyStoreChange);
        const error = new Error("timeout launching spotify");
        closure_1(error);
      }, closure_1_11);
      SpotifyStore.addChangeListener(onSpotifyStoreChange);
      window.open("" + closure_1_7 + ":");
    });
    return promise;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    let error = new Error("protocol is not registered");
    return reject(error);
  }
};
export const isSpotifyPremium = function isSpotifyPremium() {
  const activeSocketAndDevice = SpotifyStore.getActiveSocketAndDevice();
  let isPremium = null;
  if (null != activeSocketAndDevice) {
    isPremium = activeSocketAndDevice.socket.isPremium;
  }
  return isPremium;
};
export const ensureSpotifyPremium = function ensureSpotifyPremium() {
  const activeSocketAndDevice = SpotifyStore.getActiveSocketAndDevice();
  if (null == activeSocketAndDevice) {
    let _Error = Error;
    let self = this;
    let self2 = this;
    let error = new Error("no active profile");
    return reject(error);
  } else {
    let resolved;
    const socket = activeSocketAndDevice.socket;
    if (socket.isPremium) {
      resolved = Promise.resolve();
    } else {
      const obj = SpotifyActionCreators;
      const profile = obj.getProfile(socket.accountId, socket.accessToken);
      resolved = profile.then(function() {
        if (!socket.isPremium) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("spotify account is not premium");
          return reject(error);
        }
      });
    }
    return resolved;
  }
};
export const getSpotifyMetadataFromActivity = function getSpotifyMetadataFromActivity() {
  return obj(...arguments);
};