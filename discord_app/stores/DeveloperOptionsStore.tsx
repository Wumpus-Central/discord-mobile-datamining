// discord_app/stores/DeveloperOptionsStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage3 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import TokenManagerAll from "../../discord_common/js/shared/lib/TokenManager.tsx";
import SentryUtilsDefault from "../utils/SentryUtils.native.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Backoff from "../../discord_common/js/packages/backoff/Backoff.tsx";
import size from "../../_runtime/metro/00002__.js";

const UserFlags = Constants.UserFlags;
function refreshSourceMapCookie() {
  let closure_1;
  let obj2;
  let obj3;
  const HTTP = HTTPUtils.HTTP;
  obj = { url, headers: obj2, oldFormErrors: true, rejectWithError: true };
  const put = HTTP.put;
  obj2 = { Authorization: obj3.getToken() };
  obj3 = TokenManagerAll;
  const putResult = put(obj);
  putResult.then(
    (status) => {
      if (401 !== status.status) {
        if (403 !== status.status) {
          if (200 !== status.status) {
            const _setTimeout2 = setTimeout;
            let timeout = setTimeout(closure_1_3, importDefaultResult1.fail());
          } else {
            importDefaultResult1.succeed();
            const _setTimeout = setTimeout;
            timeout = setTimeout(
              closure_1_3,
              status.body.sourceMapCookieTTLSeconds * c1(refreshSourceMapCookie[2]).Millis.SECOND * 0.75,
            );
          }
        }
      }
      timeout = null;
      obj = url(refreshSourceMapCookie[5]);
      const result = obj.setDeveloperOptionSettings({ sourceMapsEnabled: false });
    },
    () => {
      const timeout = setTimeout(refreshSourceMapCookie, importDefaultResult1.fail());
    },
  );
}
const React = "" + location.protocol + "//" + location.host + "/__development/source_maps";
let c1 = null;
let result = 5 * DurationsDefault.Millis.SECOND;
const importDefaultResult1 = new Backoff(result, DurationsDefault.Millis.MINUTE, true);
let closure_5 = {
  set(arg0) {
    let obj2;
    let obj3;
    let timeout;
    if ((arg0 !== null) != timeout) {
      if (arg0) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(refreshSourceMapCookie, 0);
      } else {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
        const HTTP = HTTPUtils.HTTP;
        obj = { url, headers: obj2, oldFormErrors: true, rejectWithError: true };
        const del = HTTP.del;
        obj2 = { Authorization: obj3.getToken() };
        obj3 = TokenManagerAll;
        del(obj);
      }
    }
  },
};
const DeveloperOptionsStore_str = "DeveloperOptionsStore";
let obj = {
  trace: false,
  canary: false,
  logGatewayEvents: false,
  logOverlayEvents: false,
  logAnalyticsEvents: false,
  logInteractionTTIAnalytics: false,
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
let obj2 = {};
let merged = Object.assign(obj);
obj = obj2;
const DeveloperOptionsRoutingKey = "DeveloperOptionsRoutingKey";
let tags = [];
const Store = get_initializedDefault.Store;
class DeveloperOptionsStore extends Store {
  initialize() {
    const Storage = Storage3.Storage;
    const value = Storage.get(DeveloperOptionsStore_str);
    if (null != value) {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(value);
    }
    const Storage2 = Storage3.Storage;
    const value2 = Storage2.get(DeveloperOptionsRoutingKey);
    if (null != value2) {
      tags = value2;
    }
  }
  getDebugOptionsHeaderValue() {
    const keys = Object.keys(obj);
    const mapped = keys.map((item) => obj[item]);
    const keys1 = Object.keys(obj);
    const found = keys1.filter((item) => obj[item]);
    return found.join(",");
  }
  getRoutingKeyHeaderValue() {
    let joined = null;
    if (0 !== tags.length) {
      joined = tags.join(",");
    }
    return joined;
  }
}
const prototype = DeveloperOptionsStore.prototype;
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
Object.defineProperty(prototype, "isLoggingInteractionTTIAnalytics", {
  get: function isLoggingInteractionTTIAnalytics() {
    return obj.logInteractionTTIAnalytics;
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
Object.defineProperty(prototype, "routingKeyTags", {
  get: function routingKeyTags() {
    return tags;
  },
  set: undefined,
});
DeveloperOptionsStore.displayName = "DeveloperOptionsStore";
let obj3 = {
  LOGOUT: function handleLogout(arg0) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(obj);
    const result = closure_5.set(obj.sourceMapsEnabled);
    const Storage = Storage3.Storage;
    const result1 = Storage.set(DeveloperOptionsStore_str, obj);
    tags = [];
    const Storage2 = Storage3.Storage;
    const result2 = Storage2.set(DeveloperOptionsRoutingKey, tags);
  },
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    let num = user.user.flags;
    if (num == null) {
      num = 0;
    }
    const str = (num & UserFlags.STAFF) === UserFlags.STAFF || null != user.user.personal_connection_id;
    if ((num & UserFlags.STAFF) === UserFlags.STAFF) {
      const result = closure_5.set(obj.sourceMapsEnabled);
    }
    obj = SentryUtilsDefault;
    const obj2 = { isStaff: str.toString() };
    obj.setTags(obj2);
  },
  DEVELOPER_OPTIONS_UPDATE_SETTINGS: function handleUpdateSettings(settings) {
    settings = settings.settings;
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    const merged2 = Object.assign(settings);
    const result = closure_5.set(obj.sourceMapsEnabled);
    const Storage = Storage3.Storage;
    const result1 = Storage.set(DeveloperOptionsStore_str, obj);
  },
  DEVELOPER_OPTIONS_SET_ROUTING_KEY: function handleSetRoutingKey(tags) {
    tags = tags.tags;
    const Storage = Storage3.Storage;
    const result = Storage.set(DeveloperOptionsRoutingKey, tags);
  },
};
const developerOptionsStore = new DeveloperOptionsStore(DispatcherDefault, obj3);
let result1 = size.fileFinishedImporting("stores/DeveloperOptionsStore.tsx");

export default developerOptionsStore;
