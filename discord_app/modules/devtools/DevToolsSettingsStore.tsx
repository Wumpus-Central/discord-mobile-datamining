import { dispatcher } from "../../Dispatcher.tsx";
// discord_app/modules/devtools/DevToolsSettingsStore.tsx
import init from "init";
import { DeviceSettingsStore } from "initialize";

let closure_3 = { sidebarWidth: 460, lastOpenTabId: null, lastOpenSubTabId: null, displayTools: false, showDevWidget: false, devWidgetPosition: { x: 0, y: 0 }, sortedScreenKeys: [] };
class DevToolsSettingsStore extends DeviceSettingsStore {
}
const prototype = DevToolsSettingsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  obj = tmp;
  let sortedScreenKeys = tmp.sortedScreenKeys;
  if (sortedScreenKeys == null) {
    sortedScreenKeys = [];
  }
  obj = {};
  const merged = Object.assign(obj);
  obj.sortedScreenKeys = sortedScreenKeys;
  dispatcher.actionLogger.persist = init.isDeveloper;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_3;
};
Object.defineProperty(prototype, "sidebarWidth", {
  get: function sidebarWidth() {
    let num = 0;
    if (this.displayTools) {
      num = closure_3.sidebarWidth;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastOpenTabId", {
  get: function lastOpenTabId() {
    let lastOpenTabId = closure_3.lastOpenTabId;
    if (lastOpenTabId == null) {
      lastOpenTabId = null;
    }
    return lastOpenTabId;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastOpenSubTabId", {
  get: function lastOpenSubTabId() {
    let lastOpenSubTabId = closure_3.lastOpenSubTabId;
    if (lastOpenSubTabId == null) {
      lastOpenSubTabId = null;
    }
    return lastOpenSubTabId;
  },
  set: undefined
});
Object.defineProperty(prototype, "displayTools", {
  get: function displayTools() {
    let displayTools = init.isDeveloper;
    if (displayTools) {
      displayTools = closure_3.displayTools;
    }
    return displayTools;
  },
  set: undefined
});
Object.defineProperty(prototype, "showDevWidget", {
  get: function showDevWidget(arg0) {
    let showDevWidget = init.isDeveloper;
    if (showDevWidget) {
      showDevWidget = closure_3.showDevWidget;
    }
    return showDevWidget;
  },
  set: undefined
});
Object.defineProperty(prototype, "devWidgetPosition", {
  get: function devWidgetPosition() {
    return closure_3.devWidgetPosition;
  },
  set: undefined
});
Object.defineProperty(prototype, "sortedScreenKeys", {
  get: function sortedScreenKeys(arg0) {
    return closure_3.sortedScreenKeys;
  },
  set: undefined
});
DevToolsSettingsStore.displayName = "DevToolsSettingsStore";
DevToolsSettingsStore.persistKey = "DevToolsSettingsStore";
const devToolsSettingsStore = new DevToolsSettingsStore(require("dispatcher"), {
  DEV_TOOLS_SETTINGS_UPDATE: function handleDevToolsSettingsUpdate(settings) {
    if (init.isDeveloper) {
      const obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(settings.settings);
    }
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/devtools/DevToolsSettingsStore.tsx");

export default devToolsSettingsStore;
export const DEVTOOLS_SIDEBAR_MIN_WIDTH = 460;