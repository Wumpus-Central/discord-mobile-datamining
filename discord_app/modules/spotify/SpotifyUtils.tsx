// === Module 10914: asString ===

// Module 10914 (asString)
import setDefault from "set" /* 687 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "initialize" /* 4504 */;
import closure_5 from "isProtocolRegistered" /* 7244 */;
import closure_6 from "upsertAccount" /* 7241 */;
import SPOTIFY_APP_PROTOCOL from "SPOTIFY_APP_PROTOCOL" /* 7242 */;
import { PlatformTypes } from "ME" /* 676 */;

const require = arg1;
function asString(str) {
  if (typeof str === "string") {
    return str;
  } else {
    const _Error = Error;
    error = new Error("value is not a string");
    throw error;
  }
}
function _getSpotifyMetadataFromActivity() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              closure_3 = tmp2;
              let lib;
              closure_1 = undefined;
              let obj2 = lib(closure_1_2[9]);
              c5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.getMetadata(lib, closure_1);
              return obj1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            lib = arg1;
            const type = lib.type;
            let TRACK = type;
            if (type == null) {
              TRACK = constants.TRACK;
            }
            callback(TRACK);
            closure_1 = closure_9(TRACK);
            if (null === closure_1) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              error = new Error("invalid type " + lib.type);
              throw error;
            } else {
              let context_uri;
              if (typeof lib.context_uri === "string") {
                context_uri = lib.context_uri;
              }
              obj = { context_uri: null, album_id: null, artist_ids: null, type: null, button_urls: null };
              obj[0] = context_uri;
              const album_id = lib.album_id;
              callback(album_id);
              obj[1] = album_id;
              const _Array = Array;
              if (Array.isArray(lib.artist_ids)) {
                const artist_ids = lib.artist_ids;
                let mapped = artist_ids.map(callback);
              } else {
                mapped = [];
              }
              obj[2] = mapped;
              obj[3] = closure_1;
              const _Array2 = Array;
              if (Array.isArray(lib.button_urls)) {
                const button_urls = lib.button_urls;
                let mapped1 = button_urls.map(callback);
              } else {
                mapped1 = [];
              }
              obj[4] = mapped1;
              c6 = 3;
            }
            const tmp49 = closure_9;
            const tmp50 = callback;
          }
        } catch (tmp41) {
          c6 = tmp;
          throw tmp41;
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ SPOTIFY_APP_PROTOCOL: error, SpotifyResourceTypes: closure_8, getSpotifyResourceType: c9 } = SPOTIFY_APP_PROTOCOL);
let closure_11 = 30 * setDefault.Millis.SECOND;
const result = require("set").fileFinishedImporting("modules/spotify/SpotifyUtils.tsx");

export const isSpotifyPlayable = function isSpotifyPlayable(getActiveSocketAndDevice) {
  let isProtocolRegisteredResult = null != getActiveSocketAndDevice.getActiveSocketAndDevice();
  if (!isProtocolRegisteredResult) {
    isProtocolRegisteredResult = closure_5.isProtocolRegistered();
  }
  return isProtocolRegisteredResult;
};
export const ensureSpotifyPlayable = function ensureSpotifyPlayable() {
  let obj = store;
  const activeSocketAndDevice = store.getActiveSocketAndDevice();
  if (null != activeSocketAndDevice) {
    return Promise.resolve(activeSocketAndDevice);
  } else if (closure_5.isProtocolRegistered()) {
    let playableComputerDevices = obj.getPlayableComputerDevices();
    if (observedAppRunning.isObservedAppRunning(obj2.get(PlatformTypes.SPOTIFY).name)) {
      if (playableComputerDevices.length > 0) {
        ({ socket, device } = playableComputerDevices[0]);
        playableComputerDevices(7243).setActiveDevice(socket.accountId, device.id);
        obj = { socket: null, device: null };
        obj[0] = socket;
        obj[1] = device;
        return Promise.resolve(obj);
      }
    }
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      function onSpotifyStoreChange() {
        playableComputerDevices = closure_2_6.getPlayableComputerDevices();
        function _loop(socket, device) {
          closure_0 = socket;
          closure_1 = device;
          if (null == closure_1_0.find((device) => device.device.id === device.id)) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            closure_2_6.removeChangeListener(closure_3);
            const _setImmediate = setImmediate;
            setImmediate(() => {
              let obj = socket(table[8]);
              obj.setActiveDevice(socket.accountId, device.id);
              obj = { socket, device };
              socket(obj);
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
        closure_2_6.removeChangeListener(onSpotifyStoreChange);
        error = new Error("timeout launching spotify");
        callback(error);
      }, closure_1_11);
      closure_1_6.addChangeListener(onSpotifyStoreChange);
      window.open("" + closure_1_7 + ":");
    });
    return promise;
  } else {
    const _Error = Error;
    error = new Error("protocol is not registered");
    return Promise.reject(error);
  }
};
export const isSpotifyPremium = function isSpotifyPremium() {
  const activeSocketAndDevice = store.getActiveSocketAndDevice();
  let isPremium = null;
  if (null != activeSocketAndDevice) {
    isPremium = activeSocketAndDevice.socket.isPremium;
  }
  return isPremium;
};
export const ensureSpotifyPremium = function ensureSpotifyPremium() {
  const activeSocketAndDevice = store.getActiveSocketAndDevice();
  if (null == activeSocketAndDevice) {
    let _Error = Error;
    error = new Error("no active profile");
    return Promise.reject(error);
  } else {
    const socket = activeSocketAndDevice.socket;
    if (socket.isPremium) {
      let resolved = Promise.resolve();
    } else {
      const profile = socket(7243).getProfile(socket.accountId, socket.accessToken);
      resolved = profile.then(() => {
        if (!socket.isPremium) {
          const _Error = Error;
          error = new Error("spotify account is not premium");
          return Promise.reject(error);
        }
      });
      const obj = socket(7243);
    }
    return resolved;
  }
};
export const getSpotifyMetadataFromActivity = function getSpotifyMetadataFromActivity(closure_0, closure_1) {
  const self = this;
  const apply = _getSpotifyMetadataFromActivity.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};