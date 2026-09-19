// === Module 4601: StreamerModeStore ===

// Module 4601 (StreamerModeStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import OverlayV3Experiment from "OverlayV3Experiment" /* 4602 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
let obj = { enabled: false, autoToggle: true, hideInstantInvites: true, hidePersonalInformation: true, disableSounds: true, disableNotifications: true, disabledOverlayWidgets: [], enableContentProtection: false };
let closure_6 = {};
let obj2 = {};
let merged = Object.assign(obj);
const PersistedStore = initializeDefault.PersistedStore;
class StreamerModeStore extends PersistedStore {
}
const prototype = StreamerModeStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let merged = Object.assign(closure_6, arg0);
  const items = [AuthenticationStore];
  this.syncWith(items, () => {
    id = id.getId();
    if (null != id) {
      let tmp6 = closure_1_6[id];
      if (null == tmp6) {
        obj2 = {};
        const merged = Object.assign(obj);
        closure_1_6[id] = obj2;
        tmp6 = obj2;
      }
      obj = tmp6;
    } else {
      obj = {};
      const merged1 = Object.assign(obj);
    }
  });
};
prototype["getState"] = function getState() {
  return closure_6;
};
prototype["getSettings"] = function getSettings() {
  return obj2;
};
Object.defineProperty(prototype, "enabled", {
  get: function enabled() {
    return obj2.enabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "autoToggle", {
  get: function autoToggle() {
    return obj2.autoToggle;
  },
  set: undefined
});
Object.defineProperty(prototype, "hideInstantInvites", {
  get: function hideInstantInvites() {
    let hideInstantInvites = this.enabled;
    if (hideInstantInvites) {
      hideInstantInvites = obj2.hideInstantInvites;
    }
    return hideInstantInvites;
  },
  set: undefined
});
Object.defineProperty(prototype, "hidePersonalInformation", {
  get: function hidePersonalInformation() {
    let hidePersonalInformation = this.enabled;
    if (hidePersonalInformation) {
      hidePersonalInformation = obj2.hidePersonalInformation;
    }
    return hidePersonalInformation;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableSounds", {
  get: function disableSounds() {
    let disableSounds = this.enabled;
    if (disableSounds) {
      disableSounds = obj2.disableSounds;
    }
    return disableSounds;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableNotifications", {
  get: function disableNotifications() {
    let disableNotifications = this.enabled;
    if (disableNotifications) {
      disableNotifications = obj2.disableNotifications;
    }
    return disableNotifications;
  },
  set: undefined
});
Object.defineProperty(prototype, "enableContentProtection", {
  get: function enableContentProtection() {
    let enableContentProtection = this.enabled;
    if (enableContentProtection) {
      enableContentProtection = obj2.enableContentProtection;
    }
    return enableContentProtection;
  },
  set: undefined
});
prototype["isOverlayWidgetDisabled"] = function isOverlayWidgetDisabled(arg0) {
  let enabled1 = OverlayV3Experiment.getOverlayStreamerModeConfig("StreamerModeStore").enabled;
  if (enabled1) {
    const self = this;
    let enabled = this.enabled;
    if (enabled) {
      const disabledOverlayWidgets = obj2.disabledOverlayWidgets;
      let hasItem;
      if (disabledOverlayWidgets != null) {
        hasItem = disabledOverlayWidgets.includes(arg0);
      }
      enabled = true === hasItem;
    }
    enabled1 = enabled;
  }
  return enabled1;
};
StreamerModeStore.displayName = "StreamerModeStore";
StreamerModeStore.persistKey = "StreamerModeStore";
let items = [
  (arg0) => {
    const id = AuthenticationStore.getId();
    if (null != arg0) {
      if (null != id) {
        obj = {};
        obj2 = {};
        const merged = Object.assign(arg0);
        obj[id] = obj2;
      }
      return obj;
    }
    obj = {};
  }
];
StreamerModeStore.migrations = items;
const streamerModeStore = new StreamerModeStore(DispatcherDefault, {
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      closure_6 = {};
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleMultiAccountRemove(userId) {
    if (userId.userId in closure_6) {
      userId = userId.userId;
      delete tmp2[tmp];
    }
  },
  STREAMER_MODE_UPDATE: function handleStreamerModeUpdate(value) {
    const merged = Object.assign(obj2);
    obj2 = { [value.key]: value.value };
    const merged1 = Object.assign(obj2, obj2);
    if ("enabled" === value.key) {
      if (typeof value.value === "boolean") {
        const obj6 = { enabled: value.value, automatic: false };
        AnalyticsUtilsDefault.track(AnalyticEvents.STREAMER_MODE_TOGGLE, obj6);
      }
      return true;
    }
    const obj9 = { enabled: obj2.enabled, automatic: obj2.autoToggle, disable_notifications: obj2.disableNotifications, disable_sounds: obj2.disableSounds, hide_instant_invites: obj2.hideInstantInvites, hide_personal_info: obj2.hidePersonalInformation, enable_content_protection: obj2.enableContentProtection, disabled_overlay_widgets: null, old_enabled: null, old_automatic: null, old_disable_notifications: null, old_disable_sounds: null, old_hide_instant_invites: null, old_hide_personal_info: null, old_enable_content_protection: null, old_disabled_overlay_widgets: null };
    const disabledOverlayWidgets = obj2.disabledOverlayWidgets;
    let str;
    if (disabledOverlayWidgets != null) {
      str = disabledOverlayWidgets.join(",");
    }
    if (str == null) {
      str = "";
    }
    obj9.disabled_overlay_widgets = str;
    ({ enabled: obj4.old_enabled, autoToggle: obj4.old_automatic, disableNotifications: obj4.old_disable_notifications, disableSounds: obj4.old_disable_sounds, hideInstantInvites: obj4.old_hide_instant_invites, hidePersonalInformation: obj4.old_hide_personal_info, enableContentProtection: obj4.old_enable_content_protection, disabledOverlayWidgets: disabledOverlayWidgets2 } = {});
    let str3;
    if (disabledOverlayWidgets2 != null) {
      str3 = disabledOverlayWidgets2.join(",");
    }
    if (str3 == null) {
      str3 = "";
    }
    obj9.old_disabled_overlay_widgets = str3;
    AnalyticsUtilsDefault.track(AnalyticEvents.UPDATE_STREAMER_MODE_SETTINGS, obj9);
    obj = {};
  },
  RUNNING_STREAMER_TOOLS_CHANGE: function handleRunningStreamerToolsChange(count) {
    if (obj2.autoToggle) {
      obj2.enabled = count.count > 0;
      obj2 = { enabled: count.count > 0, automatic: true };
      AnalyticsUtilsDefault.track(AnalyticEvents.STREAMER_MODE_TOGGLE, obj2);
      return true;
    } else {
      return false;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/StreamerModeStore.tsx");

export default streamerModeStore;