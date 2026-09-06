// discord_app/stores/DeveloperOptionsStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import Backoff from "../../discord_common/js/packages/backoff/Backoff.tsx";
import size from "../../_runtime/metro/00002__.js";

const UserFlags = Constants.UserFlags;
function refreshSourceMapCookie() {
  const HTTP = url(1272).HTTP;
  obj = { url, headers: null, oldFormErrors: true, rejectWithError: true };
  obj = { Authorization: Backoff(1099).getToken() };
  obj.headers = obj;
  const obj3 = Backoff(1099);
  HTTP.put(obj).then(
    (status) => {
      if (401 !== status.status) {
        if (403 !== status.status) {
          if (200 !== status.status) {
            const _setTimeout2 = setTimeout;
            let timeout = setTimeout(dependencyMap, Backoff.fail());
          } else {
            Backoff.succeed();
            const _setTimeout = setTimeout;
            timeout = setTimeout(
              dependencyMap,
              status.body.sourceMapCookieTTLSeconds * c1(refreshSourceMapCookie[2]).Millis.SECOND * 0.75,
            );
          }
        }
      }
      timeout = null;
      const result = closure_0(refreshSourceMapCookie[5]).setDeveloperOptionSettings({ sourceMapsEnabled: false });
    },
    () => {
      const timeout = setTimeout(dependencyMap, Backoff.fail());
    },
  );
}
const url = "" + location.protocol + "//" + location.host + "/__development/source_maps";
let c1 = null;
let result = 5 * DurationsDefault.Millis.SECOND;
Backoff = new Backoff(result, DurationsDefault.Millis.MINUTE, true);
let closure_5 = {
  set(arg0) {
    if ((arg0 !== null) != timeout) {
      if (arg0) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(refreshSourceMapCookie, 0);
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
        const HTTP = url(1272).HTTP;
        obj = { url, headers: null, oldFormErrors: true, rejectWithError: true };
        obj = { Authorization: Backoff(1099).getToken() };
        obj.headers = obj;
        HTTP.del(obj);
        const obj3 = Backoff(1099);
      }
    }
  },
};
const DeveloperOptionsStore = "DeveloperOptionsStore";
let obj = {
  trace: false,
  canary: false,
  logGatewayEvents: false,
  logOverlayEvents: false,
  logAnalyticsEvents: false,
  sourceMapsEnabled: false,
  axeEnabled: false,
  cssDebuggingEnabled: false,
  layoutDebuggingEnabled: false,
  bugReporterEnabled: true,
  idleStatusIndicatorEnabled: false,
  onlyShowPreviewAppCollections: false,
  disableAppCollectionsCache: false,
  isStreamInfoOverlayEnabled: false,
  preventPopoutClose: false,
  logKeyboardMismatches: false,
  alertStartupMetrics: false,
  logQuestEvents: false,
};
obj = {};
let merged = Object.assign(obj);
const DeveloperOptionsRoutingKey = "DeveloperOptionsRoutingKey";
let tags = [];
const Store = initializeDefault.Store;
class DeveloperOptionsStore extends Store {}
const prototype = DeveloperOptionsStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = url(refreshSourceMapCookie[6]).Storage;
  value = Storage.get(DeveloperOptionsStore);
  if (null != value) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(value);
  }
  const Storage2 = url(refreshSourceMapCookie[6]).Storage;
  value = Storage2.get(DeveloperOptionsRoutingKey);
  if (null != value) {
    tags = value;
  }
};
Object.defineProperty(prototype, "isTracingRequests", {
  get: function isTracingRequests() {
    return obj.trace;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isForcedCanary", {
  get: function isForcedCanary() {
    return obj.canary;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isLoggingGatewayEvents", {
  get: function isLoggingGatewayEvents() {
    return obj.logGatewayEvents;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isLoggingOverlayEvents", {
  get: function isLoggingOverlayEvents() {
    return obj.logOverlayEvents;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isLoggingAnalyticsEvents", {
  get: function isLoggingAnalyticsEvents() {
    return obj.logAnalyticsEvents;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isAxeEnabled", {
  get: function isAxeEnabled() {
    return obj.axeEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "cssDebuggingEnabled", {
  get: function cssDebuggingEnabled() {
    return obj.cssDebuggingEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "layoutDebuggingEnabled", {
  get: function layoutDebuggingEnabled() {
    return obj.layoutDebuggingEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "sourceMapsEnabled", {
  get: function sourceMapsEnabled() {
    return obj.sourceMapsEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isBugReporterEnabled", {
  get: function isBugReporterEnabled() {
    return obj.bugReporterEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isIdleStatusIndicatorEnabled", {
  get: function isIdleStatusIndicatorEnabled() {
    return obj.idleStatusIndicatorEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "onlyShowPreviewAppCollections", {
  get: function onlyShowPreviewAppCollections() {
    return obj.onlyShowPreviewAppCollections;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableAppCollectionsCache", {
  get: function disableAppCollectionsCache() {
    return obj.disableAppCollectionsCache;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isStreamInfoOverlayEnabled", {
  get: function isStreamInfoOverlayEnabled() {
    return obj.isStreamInfoOverlayEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "preventPopoutClose", {
  get: function preventPopoutClose() {
    return obj.preventPopoutClose;
  },
  set: undefined,
});
Object.defineProperty(prototype, "logKeyboardMismatches", {
  get: function logKeyboardMismatches() {
    return obj.logKeyboardMismatches;
  },
  set: undefined,
});
Object.defineProperty(prototype, "alertStartupMetrics", {
  get: function alertStartupMetrics() {
    return obj.alertStartupMetrics;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isLoggingQuestEvents", {
  get: function isLoggingQuestEvents() {
    return obj.logQuestEvents;
  },
  set: undefined,
});
prototype["getDebugOptionsHeaderValue"] = function getDebugOptionsHeaderValue() {
  const keys = Object.keys(obj);
  const mapped = keys.map((item) => dependencyMap[item]);
  const keys1 = Object.keys(obj);
  const found = keys1.filter((item) => dependencyMap[item]);
  return found.join(",");
};
Object.defineProperty(prototype, "routingKeyTags", {
  get: function routingKeyTags() {
    return tags;
  },
  set: undefined,
});
prototype["getRoutingKeyHeaderValue"] = function getRoutingKeyHeaderValue() {
  let joined = null;
  if (0 !== tags.length) {
    joined = tags.join(",");
  }
  return joined;
};
DeveloperOptionsStore.displayName = "DeveloperOptionsStore";
obj = {
  LOGOUT: function handleLogout(arg0) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(obj);
    const result = closure_5.set(obj.sourceMapsEnabled);
    const Storage = url(refreshSourceMapCookie[6]).Storage;
    const result1 = Storage.set(DeveloperOptionsStore, obj);
    tags = [];
    const Storage2 = url(refreshSourceMapCookie[6]).Storage;
    const result2 = Storage2.set(DeveloperOptionsRoutingKey, tags);
  },
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    let num = user.user.flags;
    if (num == null) {
      num = 0;
    }
    let str = tmp;
    if ((num & UserFlags.STAFF) !== UserFlags.STAFF) {
      str = null != user.user.personal_connection_id;
    }
    if ((num & UserFlags.STAFF) === UserFlags.STAFF) {
      const result = closure_5.set(obj.sourceMapsEnabled);
    }
    _null(refreshSourceMapCookie[7]);
    obj = { isStaff: str.toString() };
    obj.setTags(obj);
  },
  DEVELOPER_OPTIONS_UPDATE_SETTINGS: function handleUpdateSettings(settings) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(settings.settings);
    const result = closure_5.set(obj.sourceMapsEnabled);
    const Storage = url(refreshSourceMapCookie[6]).Storage;
    const result1 = Storage.set(DeveloperOptionsStore, obj);
  },
  DEVELOPER_OPTIONS_SET_ROUTING_KEY: function handleSetRoutingKey(tags) {
    tags = tags.tags;
    const Storage = url(refreshSourceMapCookie[6]).Storage;
    const result = Storage.set(DeveloperOptionsRoutingKey, tags);
  },
};
const developerOptionsStore = new DeveloperOptionsStore(DispatcherDefault, obj);
let result1 = size.fileFinishedImporting("stores/DeveloperOptionsStore.tsx");

export default developerOptionsStore;
