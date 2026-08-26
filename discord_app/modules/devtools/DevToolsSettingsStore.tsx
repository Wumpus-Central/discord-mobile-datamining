// === Module 7389: initialize ===

// Module 7389 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "init" /* 7390 */;

let closure_3 = { sidebarWidth: 460, lastOpenTabId: null, lastOpenSubTabId: null, displayTools: false, showDevWidget: false, devWidgetPosition: { x: 0, y: 0 }, sortedScreenKeys: [] };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
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
  dispatcherDefault.actionLogger.persist = closure_2.isDeveloper;
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
    let displayTools = closure_2.isDeveloper;
    if (displayTools) {
      displayTools = closure_3.displayTools;
    }
    return displayTools;
  },
  set: undefined
});
Object.defineProperty(prototype, "showDevWidget", {
  get: function showDevWidget(arg0) {
    let showDevWidget = closure_2.isDeveloper;
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
const devToolsSettingsStore = new DevToolsSettingsStore(dispatcherDefault, {
  DEV_TOOLS_SETTINGS_UPDATE: function handleDevToolsSettingsUpdate(settings) {
    if (closure_2.isDeveloper) {
      const obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(settings.settings);
    }
  }
});
const result = require("set").fileFinishedImporting("modules/devtools/DevToolsSettingsStore.tsx");

export default devToolsSettingsStore;
export const DEVTOOLS_SIDEBAR_MIN_WIDTH = 460;