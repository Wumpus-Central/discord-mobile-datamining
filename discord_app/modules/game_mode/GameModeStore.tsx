// discord_app/modules/game_mode/GameModeStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import RunningGameStore from "../game_detection/RunningGameStore.native.tsx";

const require = fn;
function syncRunningGame() {
  const visibleRunningGames = RunningGameStore.getVisibleRunningGames();
  const someResult = visibleRunningGames.some((isLauncher) => true !== isLauncher.isLauncher);
  let flag = someResult !== c6;
  if (flag) {
    c6 = someResult;
    flag = true;
    if (someResult) {
      obj = {};
      const merged = Object.assign(obj);
      obj.hasDetectedGame = true;
      const gameModeExperimentConfig = require("GameModeExperiment").getGameModeExperimentConfig({
        location: "GameModeRunningGame",
      });
      flag = true;
      const obj3 = require("GameModeExperiment");
    }
  }
  return flag;
}
function syncExperimentAssignment() {
  if (c6) {
    const gameModeExperimentConfig = require("GameModeExperiment").getGameModeExperimentConfig({
      location: "GameModeExperimentAssignment",
    });
    obj = require("GameModeExperiment");
  }
  return false;
}
const DefaultGameModeSettings = fn(5081).DefaultGameModeSettings;
let obj = {};
let merged = Object.assign(DefaultGameModeSettings);
let c6 = false;
let focused = false;
let hovered = false;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class GameModeStore extends DeviceSettingsStore {}
const prototype = GameModeStore.prototype;
prototype["initialize"] = function initialize(enabled) {
  enabled = undefined;
  if (enabled != null) {
    enabled = enabled.enabled;
  }
  obj = { enabled, hasDetectedGame: null };
  let hasDetectedGame;
  if (enabled != null) {
    hasDetectedGame = enabled.hasDetectedGame;
  }
  if (hasDetectedGame == null) {
    hasDetectedGame = DefaultGameModeSettings.hasDetectedGame;
  }
  obj.hasDetectedGame = hasDetectedGame;
  const items = [RunningGameStore];
  this.syncWith(items, syncRunningGame);
  const items1 = [ApexExperimentStore];
  this.syncWith(items1, syncExperimentAssignment);
  const visibleRunningGames = RunningGameStore.getVisibleRunningGames();
  const someResult = visibleRunningGames.some((isLauncher) => true !== isLauncher.isLauncher);
  let flag = someResult !== c6;
  if (flag) {
    c6 = someResult;
    flag = true;
    if (someResult) {
      const obj2 = {};
      const merged = Object.assign(obj);
      obj2.hasDetectedGame = true;
      obj = obj2;
      const gameModeExperimentConfig = require("GameModeExperiment").getGameModeExperimentConfig({
        location: "GameModeRunningGame",
      });
      flag = true;
      const obj4 = require("GameModeExperiment");
    }
  }
  return flag;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
Object.defineProperty(prototype, "enabled", {
  get: function enabled() {
    let isActive = obj.enabled;
    if (isActive == null) {
      const self = this;
      isActive = this.isActive;
    }
    return isActive;
  },
  set: undefined,
});
prototype["getStoredEnabledChoice"] = function getStoredEnabledChoice() {
  return obj.enabled;
};
prototype["isEnabledFor"] = function isEnabledFor(arg0) {
  let enabled = obj.enabled;
  if (enabled == null) {
    enabled = arg0;
  }
  return enabled;
};
Object.defineProperty(prototype, "hasRunningGame", {
  get: function hasRunningGame() {
    return c6;
  },
  set: undefined,
});
Object.defineProperty(prototype, "runningGameId", {
  get: function runningGameId() {
    const visibleRunningGames = RunningGameStore.getVisibleRunningGames();
    let id;
    const found = visibleRunningGames.find((isLauncher) => true !== isLauncher.isLauncher);
    if (found != null) {
      id = found.id;
    }
    if (id == null) {
      id = null;
    }
    return id;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasDetectedGame", {
  get: function hasDetectedGame() {
    return obj.hasDetectedGame;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isActive", {
  get: function isActive() {
    let tmp = false === obj.enabled;
    if (!tmp) {
      tmp = !c6;
    }
    if (!tmp) {
      tmp = !require("PlatformUtils").isPlatformEmbedded;
    }
    let enabled = !tmp;
    if (!tmp) {
      obj = require("GameModeExperiment");
      enabled = obj.getGameModeExperimentConfig({ location: "GameModeStore" }).enabled;
    }
    return enabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isThrottling", {
  get: function isThrottling() {
    let isActive = this.isActive;
    if (isActive) {
      isActive = !focused;
    }
    if (isActive) {
      isActive = !hovered;
    }
    return isActive;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isDiscordFocused", {
  get: function isDiscordFocused() {
    return focused;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isDiscordHovered", {
  get: function isDiscordHovered() {
    return hovered;
  },
  set: undefined,
});
GameModeStore.displayName = "GameModeStore";
GameModeStore.persistKey = "GameModeStore";
let items = [
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    delete tmp[tmp2];
    delete tmp[tmp2];
    if (false === obj.enabled) {
      delete tmp[tmp2];
    }
    return obj;
  },
];
GameModeStore.migrations = items;
const gameModeStore = new GameModeStore(DispatcherDefault, {
  GAME_MODE_SET_ENABLED: function handleSetEnabled(enabled) {
    let flag = obj.enabled !== enabled.enabled;
    if (flag) {
      obj = {};
      const merged = Object.assign(obj);
      obj.enabled = enabled.enabled;
      flag = true;
    }
    return flag;
  },
  GAME_MODE_DISCORD_FOCUS_CHANGE: function handleDiscordFocusChange(focused) {
    let flag = focused !== focused.focused;
    if (flag) {
      focused = focused.focused;
      flag = true;
    }
    return flag;
  },
  GAME_MODE_DISCORD_HOVER_CHANGE: function handleDiscordHoverChange(hovered) {
    let flag = hovered !== hovered.hovered;
    if (flag) {
      hovered = hovered.hovered;
      flag = true;
    }
    return flag;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_mode/GameModeStore.tsx");

export default gameModeStore;
