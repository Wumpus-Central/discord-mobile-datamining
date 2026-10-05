// === Module 4880: GameModeStore ===

// Module 4880 (GameModeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GameModeConstants from "GameModeConstants" /* 4881 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const f89436 = (isLauncher) => true !== isLauncher.isLauncher;
function syncRunningGame() {
  const visibleRunningGames = RunningGameStore.getVisibleRunningGames();
  const someResult = visibleRunningGames.some(f89436);
  let flag = someResult !== c6;
  if (flag) {
    c6 = someResult;
    flag = true;
    if (someResult) {
      obj = { hasDetectedGame: true };
      const merged = Object.assign(obj);
      const obj3 = require("GameModeExperiment");
      const gameModeExperimentConfig = obj3.getGameModeExperimentConfig({ location: "GameModeRunningGame" });
      flag = true;
    }
  }
  return flag;
}
function syncExperimentAssignment() {
  if (c6) {
    obj = require("GameModeExperiment");
    const gameModeExperimentConfig = obj.getGameModeExperimentConfig({ location: "GameModeExperimentAssignment" });
  }
  return false;
}
const DefaultGameModeSettings = GameModeConstants.DefaultGameModeSettings;
let obj = {};
let merged = Object.assign(DefaultGameModeSettings);
let c6 = false;
let focused = false;
let hovered = false;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class GameModeStore extends DeviceSettingsStore {
  initialize(enabled) {
    let hasDetectedGame;
    let prop;
    enabled = undefined;
    if (enabled != null) {
      enabled = enabled.enabled;
    }
    if (enabled == null) {
      enabled = DefaultGameModeSettings.enabled;
    }
    obj = { enabled, promptSuppressedGameIds: prop, hasDetectedGame };
    prop = undefined;
    if (enabled != null) {
      prop = enabled.promptSuppressedGameIds;
    }
    if (prop == null) {
      prop = DefaultGameModeSettings.promptSuppressedGameIds;
    }
    hasDetectedGame = undefined;
    if (enabled != null) {
      hasDetectedGame = enabled.hasDetectedGame;
    }
    if (hasDetectedGame == null) {
      hasDetectedGame = DefaultGameModeSettings.hasDetectedGame;
    }
    const items = [RunningGameStore];
    this.syncWith(items, syncRunningGame);
    const items1 = [ApexExperimentStore];
    this.syncWith(items1, syncExperimentAssignment);
    const visibleRunningGames = RunningGameStore.getVisibleRunningGames();
    const someResult = visibleRunningGames.some(f89436);
    let flag = someResult !== c6;
    if (flag) {
      c6 = someResult;
      flag = true;
      if (someResult) {
        const obj2 = { hasDetectedGame: true };
        const merged = Object.assign(obj);
        obj = obj2;
        const obj4 = require("GameModeExperiment");
        const gameModeExperimentConfig = obj4.getGameModeExperimentConfig({ location: "GameModeRunningGame" });
        flag = true;
      }
    }
    return flag;
  }
  getUserAgnosticState() {
    return obj;
  }
  isPromptSuppressedForGame(arg0) {
    const promptSuppressedGameIds = obj.promptSuppressedGameIds;
    return promptSuppressedGameIds.includes(arg0);
  }
}
const prototype = GameModeStore.prototype;
Object.defineProperty(prototype, "enabled", {
  get: function enabled() {
    return obj.enabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasRunningGame", {
  get: function hasRunningGame() {
    return c6;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasDetectedGame", {
  get: function hasDetectedGame() {
    return obj.hasDetectedGame;
  },
  set: undefined
});
Object.defineProperty(prototype, "isActive", {
  get: function isActive() {
    const enabled = obj.enabled;
    let tmp = !enabled;
    if (enabled) {
      tmp = !c6;
    }
    let enabled2 = !tmp;
    if (enabled2) {
      obj = require("GameModeExperiment");
      enabled2 = obj.getGameModeExperimentConfig({ location: "GameModeStore" }).enabled;
    }
    return enabled2;
  },
  set: undefined
});
Object.defineProperty(prototype, "isThrottling", {
  get: function isThrottling() {
    const isActive = this.isActive && !focused && !hovered;
    return isActive;
  },
  set: undefined
});
Object.defineProperty(prototype, "isDiscordFocused", {
  get: function isDiscordFocused() {
    return focused;
  },
  set: undefined
});
Object.defineProperty(prototype, "isDiscordHovered", {
  get: function isDiscordHovered() {
    return hovered;
  },
  set: undefined
});
Object.defineProperty(prototype, "suppressedPromptGameCount", {
  get: function suppressedPromptGameCount() {
    return obj.promptSuppressedGameIds.length;
  },
  set: undefined
});
GameModeStore.displayName = "GameModeStore";
GameModeStore.persistKey = "GameModeStore";
let obj2 = {
  GAME_MODE_SET_ENABLED: function handleSetEnabled(enabled) {
    let flag = obj.enabled !== enabled.enabled;
    if (flag) {
      obj = { enabled: enabled.enabled };
      const merged = Object.assign(obj);
      flag = true;
    }
    return flag;
  },
  GAME_MODE_SUPPRESS_PROMPT: function handleSuppressPrompt(gameId) {
    let items;
    const promptSuppressedGameIds = obj.promptSuppressedGameIds;
    const hasItem = promptSuppressedGameIds.includes(gameId.gameId);
    let flag = !hasItem;
    if (flag) {
      obj = { promptSuppressedGameIds: items };
      const merged = Object.assign(obj);
      items = [];
      items[HermesBuiltin.arraySpread(items, obj.promptSuppressedGameIds, 0)] = gameId.gameId;
      flag = true;
    }
    return flag;
  },
  GAME_MODE_RESET_PROMPT_SUPPRESSION: function handleResetPromptSuppression() {
    let flag = 0 !== obj.promptSuppressedGameIds.length;
    if (flag) {
      obj = { promptSuppressedGameIds: [] };
      const merged = Object.assign(obj);
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
  }
};
const gameModeStore = new GameModeStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/game_mode/GameModeStore.tsx");

export default gameModeStore;