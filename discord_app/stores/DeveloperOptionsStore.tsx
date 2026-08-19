// === Module 706: refreshSourceMapCookie ===

// Module 706 (refreshSourceMapCookie)
import obj132 from "obj132" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import ME from "ME" /* 676 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import importDefaultResult from "fails" /* 584 */;

const UserFlags = ME.UserFlags;
function refreshSourceMapCookie() {
  const HTTP = callback(refreshSourceMapCookie[3]).HTTP;
  obj = { Authorization: _undefined(refreshSourceMapCookie[4]).getToken() };
  obj[1] = obj;
  const obj3 = _undefined(refreshSourceMapCookie[4]);
  HTTP.put(obj).then((result) => {
    if (401 !== result.status) {
      if (403 !== result.status) {
        if (200 !== result.status) {
          const _setTimeout2 = setTimeout;
          let timeout = setTimeout(closure_3, closure_2.fail());
        } else {
          closure_2.succeed();
          const _setTimeout = setTimeout;
          timeout = setTimeout(closure_3, result.body.sourceMapCookieTTLSeconds * closure_1_1(refreshSourceMapCookie[2]).Millis.SECOND * 0.75);
        }
      }
    }
    timeout = null;
    result = closure_1_0(refreshSourceMapCookie[5]).setDeveloperOptionSettings({ sourceMapsEnabled: false });
    obj = closure_1_0(refreshSourceMapCookie[5]);
  }, () => {
    const timeout = setTimeout(closure_3, closure_2.fail());
  });
}
let closure_0 = "" + location.protocol + "//" + location.host + "/__development/source_maps";
let c1 = null;
let result = 5 * obj132Default.Millis.SECOND;
importDefaultResult = new importDefaultResult(result, obj132Default.Millis.MINUTE, true);
let c2 = importDefaultResult;
let closure_5 = {
  set(arg0) {
    if (arg0 !== null != timeout) {
      if (arg0) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(refreshSourceMapCookie, 0);
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
        const HTTP = callback(refreshSourceMapCookie[3]).HTTP;
        obj = { url: null, headers: null, oldFormErrors: true, rejectWithError: true };
        obj[0] = callback;
        obj = { Authorization: null };
        obj[0] = _undefined(refreshSourceMapCookie[4]).getToken();
        obj[1] = obj;
        HTTP.del(obj);
        const obj3 = _undefined(refreshSourceMapCookie[4]);
      }
    }
  }
};
const DeveloperOptionsStore = "DeveloperOptionsStore";
let obj = {};
let merged = Object.assign(obj);
const DeveloperOptionsRoutingKey = "DeveloperOptionsRoutingKey";
let closure_10 = [];
const Store = initializeDefault.Store;
class DeveloperOptionsStore extends Store {
}
const prototype = DeveloperOptionsStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = callback(refreshSourceMapCookie[6]).Storage;
  let value = Storage.get(DeveloperOptionsStore);
  if (null != value) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(value);
  }
  const Storage2 = callback(refreshSourceMapCookie[6]).Storage;
  value = Storage2.get(DeveloperOptionsRoutingKey);
  if (null != value) {
    closure_10 = value;
  }
};
Object.defineProperty(prototype, "isTracingRequests", {
  get: function isTracingRequests() {
    return obj.trace;
  },
  set: undefined
});
Object.defineProperty(prototype, "isForcedCanary", {
  get: function isForcedCanary() {
    return obj.canary;
  },
  set: undefined
});
Object.defineProperty(prototype, "isLoggingGatewayEvents", {
  get: function isLoggingGatewayEvents() {
    return obj.logGatewayEvents;
  },
  set: undefined
});
Object.defineProperty(prototype, "isLoggingOverlayEvents", {
  get: function isLoggingOverlayEvents() {
    return obj.logOverlayEvents;
  },
  set: undefined
});
Object.defineProperty(prototype, "isLoggingAnalyticsEvents", {
  get: function isLoggingAnalyticsEvents() {
    return obj.logAnalyticsEvents;
  },
  set: undefined
});
Object.defineProperty(prototype, "isAxeEnabled", {
  get: function isAxeEnabled() {
    return obj.axeEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "cssDebuggingEnabled", {
  get: function cssDebuggingEnabled() {
    return obj.cssDebuggingEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "layoutDebuggingEnabled", {
  get: function layoutDebuggingEnabled() {
    return obj.layoutDebuggingEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "sourceMapsEnabled", {
  get: function sourceMapsEnabled() {
    return obj.sourceMapsEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "isBugReporterEnabled", {
  get: function isBugReporterEnabled(hasBugReporterAccess) {
    return obj.bugReporterEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "isIdleStatusIndicatorEnabled", {
  get: function isIdleStatusIndicatorEnabled() {
    return obj.idleStatusIndicatorEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "onlyShowPreviewAppCollections", {
  get: function onlyShowPreviewAppCollections() {
    return obj.onlyShowPreviewAppCollections;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableAppCollectionsCache", {
  get: function disableAppCollectionsCache() {
    return obj.disableAppCollectionsCache;
  },
  set: undefined
});
Object.defineProperty(prototype, "isStreamInfoOverlayEnabled", {
  get: function isStreamInfoOverlayEnabled() {
    return obj.isStreamInfoOverlayEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "preventPopoutClose", {
  get: function preventPopoutClose() {
    return obj.preventPopoutClose;
  },
  set: undefined
});
Object.defineProperty(prototype, "logKeyboardMismatches", {
  get: function logKeyboardMismatches() {
    return obj.logKeyboardMismatches;
  },
  set: undefined
});
Object.defineProperty(prototype, "alertStartupMetrics", {
  get: function alertStartupMetrics() {
    return obj.alertStartupMetrics;
  },
  set: undefined
});
Object.defineProperty(prototype, "isLoggingQuestEvents", {
  get: function isLoggingQuestEvents() {
    return obj.logQuestEvents;
  },
  set: undefined
});
prototype["getDebugOptionsHeaderValue"] = function getDebugOptionsHeaderValue() {
  const keys = Object.keys(obj);
  const mapped = keys.map((item, index) => dependencyMap[item]);
  const keys1 = Object.keys(obj);
  const found = keys1.filter((item, index) => dependencyMap[item]);
  return found.join(",");
};
Object.defineProperty(prototype, "routingKeyTags", {
  get: function routingKeyTags() {
    return closure_10;
  },
  set: undefined
});
prototype["getRoutingKeyHeaderValue"] = function getRoutingKeyHeaderValue() {
  let joined = null;
  if (0 !== closure_10.length) {
    joined = closure_10.join(",");
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
    const result = store.set(obj.sourceMapsEnabled);
    const Storage = callback(refreshSourceMapCookie[6]).Storage;
    const result1 = Storage.set(DeveloperOptionsStore, obj);
    closure_10 = [];
    const Storage2 = callback(refreshSourceMapCookie[6]).Storage;
    const result2 = Storage2.set(DeveloperOptionsRoutingKey, closure_10);
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
      const result = store.set(obj.sourceMapsEnabled);
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
    const result = store.set(obj.sourceMapsEnabled);
    const Storage = callback(refreshSourceMapCookie[6]).Storage;
    const result1 = Storage.set(DeveloperOptionsStore, obj);
  },
  DEVELOPER_OPTIONS_SET_ROUTING_KEY: function handleSetRoutingKey(tags) {
    tags = tags.tags;
    const Storage = callback(refreshSourceMapCookie[6]).Storage;
    const result = Storage.set(DeveloperOptionsRoutingKey, tags);
  }
};
const developerOptionsStore = new DeveloperOptionsStore(dispatcherDefault, obj);
let result1 = obj132.fileFinishedImporting("stores/DeveloperOptionsStore.tsx");

export default developerOptionsStore;