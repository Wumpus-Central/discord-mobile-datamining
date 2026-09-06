// discord_app/modules/game_console/GameConsoleStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SessionsStore from "../../stores/SessionsStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

let c2 = null;
const set = new Set();
const dependencyMap = {};
let obj = {};
const set1 = new Set();
let closure_8 = Object.freeze({});
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class GameConsoleStore extends DeviceSettingsStore {}
const prototype = GameConsoleStore.prototype;
prototype["initialize"] = function initialize(lastSelectedDeviceByPlatform) {
  this.waitFor(SessionsStore, VoiceStateStore);
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  obj = { lastSelectedDeviceByPlatform: obj };
  return obj;
};
prototype["getDevicesForPlatform"] = function getDevicesForPlatform(arg0) {
  let tmp = dependencyMap[arg0];
  if (tmp == null) {
    tmp = closure_8;
  }
  return tmp;
};
prototype["getLastSelectedDeviceByPlatform"] = function getLastSelectedDeviceByPlatform(arg0) {
  return obj[arg0];
};
prototype["getDevice"] = function getDevice(arg0, arg1) {
  let tmp2;
  if (dependencyMap[arg0] != null) {
    tmp2 = tmp[arg1];
  }
  return tmp2;
};
prototype["getFetchingDevices"] = function getFetchingDevices(arg0) {
  return set1.has(arg0);
};
prototype["getPendingDeviceCommands"] = function getPendingDeviceCommands() {
  return set;
};
prototype["getRemoteSessionId"] = function getRemoteSessionId() {
  return c2;
};
prototype["getAwaitingRemoteSessionInfo"] = function getAwaitingRemoteSessionInfo() {
  return obj;
};
GameConsoleStore.displayName = "GameConsoleStore";
GameConsoleStore.persistKey = "GameConsoleStore";
obj = {
  REMOTE_SESSION_CONNECT: function handleRemoteSessionConnect(sessionId) {
    sessionId = sessionId.sessionId;
  },
  REMOTE_SESSION_DISCONNECT: function handleRemoteSessionDisconnect() {
    c2 = null;
  },
  WAIT_FOR_REMOTE_SESSION: function handleWaitForRemoteSession(sessionType) {
    obj = {
      type: sessionType.sessionType,
      nonce: sessionType.nonce,
      channelId: sessionType.channelId,
      startedAt: Date.now(),
      deviceId,
      commandId,
    };
    ({ deviceId, commandId } = sessionType);
  },
  GAME_CONSOLE_FETCH_DEVICES_START: function handleFetchDevicesStart(platform) {
    set1.add(platform.platform);
  },
  GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function handleFetchDevicesSuccess(arg0) {
    ({ platform, devices } = arg0);
    set1.delete(platform);
    obj = {};
    closure_5[platform] = obj;
    obj = {};
    for (const item10014 of devices) {
      obj[item10014.id] = item10014;
      if (obj[platform] === item10014.id) {
        obj[platform] = tmp2.id;
      }
      continue;
    }
  },
  GAME_CONSOLE_FETCH_DEVICES_FAIL: function handleFetchDevicesFail(platform) {
    set1.delete(platform.platform);
  },
  GAME_CONSOLE_SELECT_DEVICE: function handleSelectDevice(platform) {
    obj[platform.platform] = platform.deviceId;
  },
};
const gameConsoleStore = new GameConsoleStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/GameConsoleStore.tsx");

export default gameConsoleStore;
