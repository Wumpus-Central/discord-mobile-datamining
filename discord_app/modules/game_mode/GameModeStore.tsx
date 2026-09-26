// === Module 4826: GameModeStore ===

// Module 4826 (GameModeStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import RunningGameStore from "RunningGameStore" /* 2000 */;

const require = fn;
const DefaultGameModeSettings = fn(4827).DefaultGameModeSettings;
let obj = {};
let merged = Object.assign(DefaultGameModeSettings);
let c5 = false;
let focused = false;
let hovered = false;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class GameModeStore extends DeviceSettingsStore {
}
const prototype = GameModeStore.prototype;
prototype["initialize"] = function initialize(enabled) {
  enabled = undefined;
  if (enabled != null) {
    enabled = enabled.enabled;
  }
  if (enabled == null) {
    enabled = DefaultGameModeSettings.enabled;
  }
  let prop;
  if (enabled != null) {
    prop = enabled.promptSuppressedGameIds;
  }
  if (prop == null) {
    prop = DefaultGameModeSettings.promptSuppressedGameIds;
  }
  { enabled, promptSuppressedGameIds: null }.promptSuppressedGameIds = prop;
  const items = [RunningGameStore];
  this.syncWith(items, () => {
    visibleRunningGames = visibleRunningGames.getVisibleRunningGames();
    someResult = visibleRunningGames.some((isLauncher) => true !== isLauncher.isLauncher);
    let flag = someResult !== someResult;
    if (flag) {
      flag = true;
    }
    return flag;
  });
  obj = { enabled, promptSuppressedGameIds: null };
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
Object.defineProperty(prototype, "enabled", {
  get: function enabled() {
    return obj.enabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasRunningGame", {
  get: function hasRunningGame() {
    return c5;
  },
  set: undefined
});
Object.defineProperty(prototype, "isThrottling", {
  get: function isThrottling() {
    const enabled = obj.enabled;
    let tmp = !enabled;
    if (enabled) {
      tmp = !c5;
    }
    let tmp3 = !tmp;
    if (!tmp) {
      obj = require("GameModeExperiment");
      let enabled1 = obj.getGameModeExperimentConfig({ location: "GameModeStore" }).enabled;
      if (enabled1) {
        let tmp8 = !focused;
        if (!focused) {
          tmp8 = !hovered;
        }
        enabled1 = tmp8;
      }
      tmp3 = enabled1;
    }
    return tmp3;
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
prototype["isPromptSuppressedForGame"] = function isPromptSuppressedForGame(arg0) {
  const promptSuppressedGameIds = obj.promptSuppressedGameIds;
  return promptSuppressedGameIds.includes(arg0);
};
GameModeStore.displayName = "GameModeStore";
GameModeStore.persistKey = "GameModeStore";
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
  GAME_MODE_SUPPRESS_PROMPT: function handleSuppressPrompt(gameId) {
    const promptSuppressedGameIds = obj.promptSuppressedGameIds;
    const hasItem = promptSuppressedGameIds.includes(gameId.gameId);
    let flag = !hasItem;
    if (!hasItem) {
      obj = {};
      const merged = Object.assign(obj);
      const items = [];
      items[HermesBuiltin.arraySpread(obj.promptSuppressedGameIds, 0)] = gameId.gameId;
      obj.promptSuppressedGameIds = items;
      flag = true;
    }
    return flag;
  },
  GAME_MODE_RESET_PROMPT_SUPPRESSION: function handleResetPromptSuppression() {
    let flag = 0 !== obj.promptSuppressedGameIds.length;
    if (flag) {
      obj = {};
      const merged = Object.assign(obj);
      obj.promptSuppressedGameIds = [];
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_mode/GameModeStore.tsx");

export default gameModeStore;