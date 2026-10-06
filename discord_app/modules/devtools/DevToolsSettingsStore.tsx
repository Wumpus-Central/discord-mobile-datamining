// === Module 7216: DevToolsSettingsStore ===

// Module 7216 (DevToolsSettingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7217 */;
import size from "module_2" /* 2 */;

let obj = { sidebarWidth: 460, lastOpenTabId: null, lastOpenSubTabId: null, displayTools: false, showDevWidget: false, devWidgetPosition: { x: 0, y: 0 }, sortedScreenKeys: [] };
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class DevToolsSettingsStore extends DeviceSettingsStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = obj;
    }
    obj = tmp;
    let sortedScreenKeys = tmp.sortedScreenKeys;
    if (sortedScreenKeys == null) {
      sortedScreenKeys = [];
    }
    obj = { sortedScreenKeys };
    const merged = Object.assign(obj);
    DispatcherDefault.actionLogger.persist = DeveloperExperimentStore.isDeveloper;
  }
  getUserAgnosticState() {
    return obj;
  }
}
const prototype = DevToolsSettingsStore.prototype;
Object.defineProperty(prototype, "sidebarWidth", {
  get: function sidebarWidth() {
    let num = 0;
    if (this.displayTools) {
      num = obj.sidebarWidth;
    }
    return num;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastOpenTabId", {
  get: function lastOpenTabId() {
    let lastOpenTabId = obj.lastOpenTabId;
    if (lastOpenTabId == null) {
      lastOpenTabId = null;
    }
    return lastOpenTabId;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastOpenSubTabId", {
  get: function lastOpenSubTabId() {
    let lastOpenSubTabId = obj.lastOpenSubTabId;
    if (lastOpenSubTabId == null) {
      lastOpenSubTabId = null;
    }
    return lastOpenSubTabId;
  },
  set: undefined
});
Object.defineProperty(prototype, "displayTools", {
  get: function displayTools() {
    const displayTools = DeveloperExperimentStore.isDeveloper && obj.displayTools;
    return displayTools;
  },
  set: undefined
});
Object.defineProperty(prototype, "showDevWidget", {
  get: function showDevWidget() {
    const showDevWidget = DeveloperExperimentStore.isDeveloper && obj.showDevWidget;
    return showDevWidget;
  },
  set: undefined
});
Object.defineProperty(prototype, "devWidgetPosition", {
  get: function devWidgetPosition() {
    return obj.devWidgetPosition;
  },
  set: undefined
});
Object.defineProperty(prototype, "sortedScreenKeys", {
  get: function sortedScreenKeys() {
    return obj.sortedScreenKeys;
  },
  set: undefined
});
DevToolsSettingsStore.displayName = "DevToolsSettingsStore";
DevToolsSettingsStore.persistKey = "DevToolsSettingsStore";
obj = {
  DEV_TOOLS_SETTINGS_UPDATE: function handleDevToolsSettingsUpdate(settings) {
    if (DeveloperExperimentStore.isDeveloper) {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(settings.settings);
    }
  }
};
const devToolsSettingsStore = new DevToolsSettingsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/devtools/DevToolsSettingsStore.tsx");

export default devToolsSettingsStore;
export const DEVTOOLS_SIDEBAR_MIN_WIDTH = 460;