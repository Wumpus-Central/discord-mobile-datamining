// === Module 11749: SpotifyUtils ===

// Module 11749 (SpotifyUtils)
import DurationsDefault from "Durations" /* 1090 */;
import SpotifyActionCreators from "SpotifyActionCreators" /* 11751 */;
import UserActivityActionCreators from "UserActivityActionCreators" /* 11752 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import RunningGameStore from "RunningGameStore" /* 1915 */;
import SpotifyProtocolStore from "SpotifyProtocolStore" /* 11750 */;
import SpotifyStore from "SpotifyStore" /* 5280 */;

require = fn;
function asString(str) {
  if (typeof str === "string") {
    return str;
  } else {
    const _Error = Error;
    const error = new Error("value is not a string");
    throw error;
  }
}
let closure_13 = async function _getSpotifyMetadataFromActivity(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          let obj2 = UserActivityActionCreators;
          c5 = 1;
          c6 = 1;
          const obj1 = { value: obj2.getMetadata(closure_0, closure_1), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj2 = { value, done: true };
        return obj2;
      } else {
        closure_131_0 = value;
        const type = closure_131_0.type;
        let TRACK = type;
        if (type == null) {
          TRACK = closure_132_8.TRACK;
        }
        closure_132_12(TRACK);
        closure_131_1 = closure_132_9(TRACK);
        if (null === closure_131_1) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("invalid type " + closure_131_0.type);
          throw error;
        } else {
          let context_uri;
          if (typeof closure_131_0.context_uri === "string") {
            context_uri = closure_131_0.context_uri;
          }
          obj = { context_uri, album_id: null, artist_ids: null, type: null, button_urls: null };
          const album_id = closure_131_0.album_id;
          closure_132_12(album_id);
          obj.album_id = album_id;
          const _Array = Array;
          if (Array.isArray(closure_131_0.artist_ids)) {
            const artist_ids = closure_131_0.artist_ids;
            let mapped = artist_ids.map(closure_132_12);
          } else {
            mapped = [];
          }
          obj.artist_ids = mapped;
          obj.type = closure_131_1;
          const _Array2 = Array;
          if (Array.isArray(closure_131_0.button_urls)) {
            const button_urls = closure_131_0.button_urls;
            let mapped1 = button_urls.map(closure_132_12);
          } else {
            mapped1 = [];
          }
          obj.button_urls = mapped1;
          c6 = 3;
        }
      }
    } catch (tmp41) {
      c6 = tmp;
      throw tmp41;
    }
  }
};
const SpotifyConstants = fn(8340);
({ SPOTIFY_APP_PROTOCOL: closure_7, SpotifyResourceTypes: closure_8, getSpotifyResourceType: closure_9 } = SpotifyConstants);
const PlatformTypes = fn(1074).PlatformTypes;
let closure_11 = 30 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/spotify/SpotifyUtils.tsx");

export const isSpotifyPlayable = function isSpotifyPlayable(getActiveSocketAndDevice) {
  let isProtocolRegisteredResult = null != getActiveSocketAndDevice.getActiveSocketAndDevice();
  if (!isProtocolRegisteredResult) {
    isProtocolRegisteredResult = SpotifyProtocolStore.isProtocolRegistered();
  }
  return isProtocolRegisteredResult;
};
export const ensureSpotifyPlayable = function ensureSpotifyPlayable() {
  let obj = SpotifyStore;
  const activeSocketAndDevice = SpotifyStore.getActiveSocketAndDevice();
  if (null != activeSocketAndDevice) {
    return Promise.resolve(activeSocketAndDevice);
  } else if (SpotifyProtocolStore.isProtocolRegistered()) {
    let playableComputerDevices = obj.getPlayableComputerDevices();
    if (RunningGameStore.isObservedAppRunning(obj2.get(PlatformTypes.SPOTIFY).name)) {
      if (playableComputerDevices.length > 0) {
        ({ socket, device } = playableComputerDevices[0]);
        playableComputerDevices(11751).setActiveDevice(socket.accountId, device.id);
        obj = { socket, device };
        return Promise.resolve(obj);
      }
    }
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function onSpotifyStoreChange() {
        playableComputerDevices = SpotifyStore.getPlayableComputerDevices();
        function _loop(socket, device) {
          if (null == closure_1_0.find((device) => device.device.id === device.id)) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            closure_2_6.removeChangeListener(closure_3);
            const _setImmediate = setImmediate;
            setImmediate(() => {
              let obj = playableComputerDevices(dependencyMap[8]);
              obj.setActiveDevice(socket.accountId, device.id);
              obj = { socket, device };
              closure_2_0(obj);
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
    let error = new Error("protocol is not registered");
    return Promise.reject(error);
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
    let error = new Error("no active profile");
    return Promise.reject(error);
  } else {
    const socket = activeSocketAndDevice.socket;
    if (socket.isPremium) {
      let resolved = Promise.resolve();
    } else {
      const profile = SpotifyActionCreators.getProfile(socket.accountId, socket.accessToken);
      resolved = profile.then(() => {
        if (!socket.isPremium) {
          const _Error = Error;
          const error = new Error("spotify account is not premium");
          return Promise.reject(error);
        }
      });
    }
    return resolved;
  }
};
export const getSpotifyMetadataFromActivity = function getSpotifyMetadataFromActivity() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};