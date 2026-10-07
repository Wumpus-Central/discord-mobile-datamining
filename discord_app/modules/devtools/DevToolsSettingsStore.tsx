// discord_app/modules/devtools/DevToolsSettingsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DeveloperExperimentStore from "../../stores/DeveloperExperimentStore.tsx";

let obj = {
  sidebarWidth: 460,
  lastOpenTabId: null,
  lastOpenSubTabId: null,
  displayTools: false,
  showDevWidget: false,
  devWidgetPosition: { x: 0, y: 0 },
  sortedScreenKeys: [],
};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class DevToolsSettingsStore extends DeviceSettingsStore {}
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
  DispatcherDefault.actionLogger.persist = DeveloperExperimentStore.isDeveloper;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
Object.defineProperty(prototype, "sidebarWidth", {
  get: function sidebarWidth() {
    let num = 0;
    if (this.displayTools) {
      num = obj.sidebarWidth;
    }
    return num;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastOpenTabId", {
  get: function lastOpenTabId() {
    let lastOpenTabId = obj.lastOpenTabId;
    if (lastOpenTabId == null) {
      lastOpenTabId = null;
    }
    return lastOpenTabId;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastOpenSubTabId", {
  get: function lastOpenSubTabId() {
    let lastOpenSubTabId = obj.lastOpenSubTabId;
    if (lastOpenSubTabId == null) {
      lastOpenSubTabId = null;
    }
    return lastOpenSubTabId;
  },
  set: undefined,
});
Object.defineProperty(prototype, "displayTools", {
  get: function displayTools() {
    let displayTools = DeveloperExperimentStore.isDeveloper;
    if (displayTools) {
      displayTools = obj.displayTools;
    }
    return displayTools;
  },
  set: undefined,
});
Object.defineProperty(prototype, "showDevWidget", {
  get: function showDevWidget() {
    let showDevWidget = DeveloperExperimentStore.isDeveloper;
    if (showDevWidget) {
      showDevWidget = obj.showDevWidget;
    }
    return showDevWidget;
  },
  set: undefined,
});
Object.defineProperty(prototype, "devWidgetPosition", {
  get: function devWidgetPosition() {
    return obj.devWidgetPosition;
  },
  set: undefined,
});
Object.defineProperty(prototype, "sortedScreenKeys", {
  get: function sortedScreenKeys() {
    return obj.sortedScreenKeys;
  },
  set: undefined,
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
  },
};
const devToolsSettingsStore = new DevToolsSettingsStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/DevToolsSettingsStore.tsx");

export default devToolsSettingsStore;
export const DEVTOOLS_SIDEBAR_MIN_WIDTH = 460;
