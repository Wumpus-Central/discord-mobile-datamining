// discord_app/modules/game_console/GameConsoleStore.tsx
import handleUpdate from "handleUpdate";
import updateVoiceState from "updateVoiceState";
import { DeviceSettingsStore } from "initialize";
import set from "initialize";

let c2 = null;
let c3 = null;
let set = new Set();
let closure_5 = {};
let closure_6 = {};
const set1 = new Set();
let closure_8 = Object.freeze({});
class GameConsoleStore extends DeviceSettingsStore {
}
const prototype = GameConsoleStore.prototype;
prototype["initialize"] = function initialize(lastSelectedDeviceByPlatform) {
  if (null != lastSelectedDeviceByPlatform) {
    let closure_6 = lastSelectedDeviceByPlatform.lastSelectedDeviceByPlatform;
  }
  this.waitFor(handleUpdate, updateVoiceState);
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { lastSelectedDeviceByPlatform: closure_6 };
};
prototype["getDevicesForPlatform"] = function getDevicesForPlatform(handleUpdate) {
  let tmp = dependencyMap[handleUpdate];
  if (tmp == null) {
    tmp = closure_8;
  }
  return tmp;
};
prototype["getLastSelectedDeviceByPlatform"] = function getLastSelectedDeviceByPlatform(handleUpdate) {
  return table[handleUpdate];
};
prototype["getDevice"] = function getDevice(arg0, arg1) {
  let tmp2;
  if (dependencyMap[arg0] != null) {
    tmp2 = tmp[arg1];
  }
  return tmp2;
};
prototype["getFetchingDevices"] = function getFetchingDevices(handleUpdate) {
  return set1.has(handleUpdate);
};
prototype["getPendingDeviceCommands"] = function getPendingDeviceCommands() {
  return set;
};
prototype["getRemoteSessionId"] = function getRemoteSessionId() {
  return c2;
};
prototype["getAwaitingRemoteSessionInfo"] = function getAwaitingRemoteSessionInfo() {
  return c3;
};
GameConsoleStore.displayName = "GameConsoleStore";
GameConsoleStore.persistKey = "GameConsoleStore";
const gameConsoleStore = new GameConsoleStore(require("dispatcher"), {
  REMOTE_SESSION_CONNECT: function handleRemoteSessionConnect(sessionId) {
    sessionId = sessionId.sessionId;
    let c3 = null;
  },
  REMOTE_SESSION_DISCONNECT: function handleRemoteSessionDisconnect() {
    let c2 = null;
    let c3 = null;
  },
  WAIT_FOR_REMOTE_SESSION: function handleWaitForRemoteSession(sessionType) {
    let commandId;
    let deviceId;
    const obj = { type: sessionType.sessionType, nonce: sessionType.nonce, channelId: sessionType.channelId, startedAt: Date.now(), deviceId, commandId };
    ({ deviceId, commandId } = sessionType);
  },
  GAME_CONSOLE_FETCH_DEVICES_START: function handleFetchDevicesStart(platform) {
    set1.add(platform.platform);
  },
  GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function handleFetchDevicesSuccess(arg0) {
    let devices;
    let platform;
    ({ platform, devices } = arg0);
    set1.delete(platform);
    let obj = {};
    closure_5[platform] = obj;
    obj = {};
    for (const item10014 of devices) {
      obj[item10014.id] = item10014;
      let tmp3 = obj;
      if (obj[platform] === item10014.id) {
        let tmp4 = item10014;
        obj[platform] = tmp2.id;
      }
      continue;
    }
  },
  GAME_CONSOLE_FETCH_DEVICES_FAIL: function handleFetchDevicesFail(platform) {
    set1.delete(platform.platform);
  },
  GAME_CONSOLE_SELECT_DEVICE: function handleSelectDevice(platform) {
    closure_6[platform.platform] = platform.deviceId;
  }
});
const result = set.fileFinishedImporting("modules/game_console/GameConsoleStore.tsx");

export default gameConsoleStore;