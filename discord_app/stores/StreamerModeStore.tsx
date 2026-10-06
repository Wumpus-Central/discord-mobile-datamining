// === Module 4729: StreamerModeStore ===

// Module 4729 (StreamerModeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import OverlayV3Experiment from "OverlayV3Experiment" /* 4730 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let obj = { enabled: false, autoToggle: true, hideInstantInvites: true, hidePersonalInformation: true, disableSounds: true, disableNotifications: true, disabledOverlayWidgets: [], enableContentProtection: false };
let closure_6 = {};
let obj2 = {};
let merged = Object.assign(obj);
const PersistedStore = get_initializedDefault.PersistedStore;
class StreamerModeStore extends PersistedStore {
  initialize(arg0) {
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
      } else {
        const merged1 = Object.assign(obj);
      }
    });
  }
  getState() {
    return closure_6;
  }
  getSettings() {
    return obj2;
  }
  isOverlayWidgetDisabled(arg0) {
    obj = OverlayV3Experiment;
    let enabled1 = obj.getOverlayStreamerModeConfig("StreamerModeStore").enabled;
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
  }
}
const prototype = StreamerModeStore.prototype;
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
    const hideInstantInvites = this.enabled && obj2.hideInstantInvites;
    return hideInstantInvites;
  },
  set: undefined
});
Object.defineProperty(prototype, "hidePersonalInformation", {
  get: function hidePersonalInformation() {
    const hidePersonalInformation = this.enabled && obj2.hidePersonalInformation;
    return hidePersonalInformation;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableSounds", {
  get: function disableSounds() {
    const disableSounds = this.enabled && obj2.disableSounds;
    return disableSounds;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableNotifications", {
  get: function disableNotifications() {
    const disableNotifications = this.enabled && obj2.disableNotifications;
    return disableNotifications;
  },
  set: undefined
});
Object.defineProperty(prototype, "enableContentProtection", {
  get: function enableContentProtection() {
    const enableContentProtection = this.enabled && obj2.enableContentProtection;
    return enableContentProtection;
  },
  set: undefined
});
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
const obj3 = {
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      closure_6 = {};
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleMultiAccountRemove(userId) {
    if (userId.userId in closure_6) {
      delete closure_6[userId.userId];
    }
  },
  STREAMER_MODE_UPDATE: function handleStreamerModeUpdate(value) {
    let disabledOverlayWidgets2;
    let str;
    let str3;
    obj = {};
    const merged = Object.assign(obj2);
    obj2 = { [value.key]: value.value };
    const merged1 = Object.assign(obj2, obj2);
    if ("enabled" === value.key) {
      if (typeof value.value === "boolean") {
        value = value.value;
        const obj5 = { enabled: value, automatic: false };
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(AnalyticEvents.STREAMER_MODE_TOGGLE, obj5);
      }
      return true;
    }
    const disabledOverlayWidgets = obj2.disabledOverlayWidgets;
    const obj8 = { enabled: obj2.enabled, automatic: obj2.autoToggle, disable_notifications: obj2.disableNotifications, disable_sounds: obj2.disableSounds, hide_instant_invites: obj2.hideInstantInvites, hide_personal_info: obj2.hidePersonalInformation, enable_content_protection: obj2.enableContentProtection, disabled_overlay_widgets: str, old_enabled: null, old_automatic: null, old_disable_notifications: null, old_disable_sounds: null, old_hide_instant_invites: null, old_hide_personal_info: null, old_enable_content_protection: null, old_disabled_overlay_widgets: str3 };
    str = undefined;
    const track = AnalyticsUtilsDefault.track;
    const UPDATE_STREAMER_MODE_SETTINGS = AnalyticEvents.UPDATE_STREAMER_MODE_SETTINGS;
    AnalyticsUtilsDefault;
    if (disabledOverlayWidgets != null) {
      str = disabledOverlayWidgets.join(",");
    }
    if (str == null) {
      str = "";
    }
    ({ enabled: obj3.old_enabled, autoToggle: obj3.old_automatic, disableNotifications: obj3.old_disable_notifications, disableSounds: obj3.old_disable_sounds, hideInstantInvites: obj3.old_hide_instant_invites, hidePersonalInformation: obj3.old_hide_personal_info, enableContentProtection: obj3.old_enable_content_protection, disabledOverlayWidgets: disabledOverlayWidgets2 } = obj);
    str3 = undefined;
    if (disabledOverlayWidgets2 != null) {
      str3 = disabledOverlayWidgets2.join(",");
    }
    if (str3 == null) {
      str3 = "";
    }
    track(UPDATE_STREAMER_MODE_SETTINGS, obj8);
  },
  RUNNING_STREAMER_TOOLS_CHANGE: function handleRunningStreamerToolsChange(count) {
    if (obj2.autoToggle) {
      obj2.enabled = count.count > 0;
      obj2 = { enabled: count.count > 0, automatic: true };
      obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.STREAMER_MODE_TOGGLE, obj2);
      return true;
    } else {
      return false;
    }
  }
};
const streamerModeStore = new StreamerModeStore(DispatcherDefault, obj3);
const result = size.fileFinishedImporting("stores/StreamerModeStore.tsx");

export default streamerModeStore;