// discord_app/modules/spotify/SpotifyUtils.tsx
import ME from "ME";
import initialize from "initialize";
import isProtocolRegistered from "isProtocolRegistered";
import upsertAccount from "upsertAccount";
import WEB_OPEN from "WEB_OPEN";
import { PlatformTypes } from "ME";

let c9;
let error;
let metroImportAll;
const require = arg1;
function asString(str) {
  if (typeof str === "string") {
    return str;
  } else {
    const _Error = Error;
    const error = new Error("value is not a string");
    throw error;
  }
}
function _getSpotifyMetadataFromActivity() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
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
          return { value: "T", done: null };
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
              let initialize = tmp5;
              let ME = tmp2;
              let lib;
              let closure_1;
              let obj2 = lib(outer1_2[9]);
              c5 = 1;
              c6 = 1;
              const obj1 = { value: null, done: false };
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
              const error = new Error("invalid type " + lib.type);
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
  const _getSpotifyMetadataFromActivity = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ SPOTIFY_APP_PROTOCOL: error, SpotifyResourceTypes: metroImportAll, getSpotifyResourceType: c9 } = WEB_OPEN);
let closure_11 = 30 * require("set").Millis.SECOND;
const result = require("isProtocolRegistered").fileFinishedImporting("modules/spotify/SpotifyUtils.tsx");

export const isSpotifyPlayable = function isSpotifyPlayable(getActiveSocketAndDevice) {
  let isProtocolRegisteredResult = null != getActiveSocketAndDevice.getActiveSocketAndDevice();
  if (!isProtocolRegisteredResult) {
    isProtocolRegisteredResult = isProtocolRegistered.isProtocolRegistered();
  }
  return isProtocolRegisteredResult;
};
export const ensureSpotifyPlayable = function ensureSpotifyPlayable() {
  let device;
  let socket;
  let obj = store;
  const activeSocketAndDevice = store.getActiveSocketAndDevice();
  if (null != activeSocketAndDevice) {
    return Promise.resolve(activeSocketAndDevice);
  } else if (isProtocolRegistered.isProtocolRegistered()) {
    let playableComputerDevices = obj.getPlayableComputerDevices();
    if (observedAppRunning.isObservedAppRunning(obj2.get(PlatformTypes.SPOTIFY).name)) {
      if (playableComputerDevices.length > 0) {
        ({ socket, device } = playableComputerDevices[0]);
        playableComputerDevices(11083).setActiveDevice(socket.accountId, device.id);
        obj = { socket: null, device: null };
        obj[0] = socket;
        obj[1] = device;
        return Promise.resolve(obj);
      }
    }
    const promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function onSpotifyStoreChange() {
        const playableComputerDevices = outer2_6.getPlayableComputerDevices();
        function _loop(socket, device) {
          let closure_0 = socket;
          let closure_1 = device;
          if (null == outer1_0.find((device) => device.device.id === device.id)) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            outer2_6.removeChangeListener(ME);
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
        outer2_6.removeChangeListener(onSpotifyStoreChange);
        const error = new Error("timeout launching spotify");
        callback(error);
      }, outer1_11);
      outer1_6.addChangeListener(onSpotifyStoreChange);
      window.open("" + outer1_7 + ":");
    });
    return promise;
  } else {
    const _Error = Error;
    let error = new Error("protocol is not registered");
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
    let error = new Error("no active profile");
    return Promise.reject(error);
  } else {
    const socket = activeSocketAndDevice.socket;
    if (socket.isPremium) {
      let resolved = Promise.resolve();
    } else {
      const profile = socket(11083).getProfile(socket.accountId, socket.accessToken);
      resolved = profile.then(() => {
        if (!socket.isPremium) {
          const _Error = Error;
          const error = new Error("spotify account is not premium");
          return Promise.reject(error);
        }
      });
      const obj = socket(11083);
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