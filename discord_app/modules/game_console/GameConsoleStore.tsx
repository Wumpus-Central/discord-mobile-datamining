// === Module 4907: GameConsoleStore ===

// Module 4907 (GameConsoleStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SessionsStore from "SessionsStore" /* 4908 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import size from "module_2" /* 2 */;

let c2 = null;
let obj = null;
const set = new Set();
const hasOwnProperty = {};
let obj2 = {};
const set1 = new Set();
let closure_8 = Object.freeze({});
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class GameConsoleStore extends DeviceSettingsStore {
  initialize(lastSelectedDeviceByPlatform) {
    this.waitFor(SessionsStore, VoiceStateStore);
  }
  getUserAgnosticState() {
    return { lastSelectedDeviceByPlatform: obj2 };
  }
  getDevicesForPlatform(platform) {
    let tmp = closure_5[platform];
    if (tmp == null) {
      tmp = closure_8;
    }
    return tmp;
  }
  getLastSelectedDeviceByPlatform(platform) {
    return obj2[platform];
  }
  getDevice(arg0, arg1) {
    let tmp2;
    if (closure_5[arg0] != null) {
      tmp2 = tmp[arg1];
    }
    return tmp2;
  }
  getFetchingDevices(platform) {
    return set1.has(platform);
  }
  getPendingDeviceCommands() {
    return set;
  }
  getRemoteSessionId() {
    return c2;
  }
  getAwaitingRemoteSessionInfo() {
    return obj;
  }
}
const prototype = GameConsoleStore.prototype;
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
    let commandId;
    let deviceId;
    obj = { type: sessionType.sessionType, nonce: sessionType.nonce, channelId: sessionType.channelId, startedAt: Date.now(), deviceId, commandId };
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
    obj = {};
    closure_5[platform] = obj;
    obj2 = {};
    for (const item10014 of devices) {
      obj[item10014.id] = item10014;
      if (obj2[platform] === item10014.id) {
        obj2[platform] = tmp2.id;
      }
      continue;
    }
  },
  GAME_CONSOLE_FETCH_DEVICES_FAIL: function handleFetchDevicesFail(platform) {
    set1.delete(platform.platform);
  },
  GAME_CONSOLE_SELECT_DEVICE: function handleSelectDevice(platform) {
    obj2[platform.platform] = platform.deviceId;
  }
};
const gameConsoleStore = new GameConsoleStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/game_console/GameConsoleStore.tsx");

export default gameConsoleStore;