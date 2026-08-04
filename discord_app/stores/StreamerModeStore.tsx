// discord_app/stores/StreamerModeStore.tsx
import fetchFingerprint from "fetchFingerprint";
import { AnalyticEvents } from "ME";
import { PersistedStore } from "initialize";

const require = arg1;
let obj = { enabled: false, autoToggle: true, hideInstantInvites: true, hidePersonalInformation: true, disableSounds: true, disableNotifications: true, disabledOverlayWidgets: [], enableContentProtection: false };
let closure_6 = {};
obj = {};
let merged = Object.assign(obj);
class StreamerModeStore extends PersistedStore {
}
const prototype = StreamerModeStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let merged = Object.assign(closure_6, arg0);
  const items = [fetchFingerprint];
  this.syncWith(items, () => {
    id = id.getId();
    if (null != id) {
      let tmp6 = table[id];
      if (null == tmp6) {
        let obj = {};
        const merged = Object.assign(closure_5);
        table[id] = obj;
        tmp6 = obj;
      }
      obj = tmp6;
    } else {
      obj = {};
      const merged1 = Object.assign(closure_5);
    }
  });
};
prototype["getState"] = function getState() {
  return closure_6;
};
prototype["getSettings"] = function getSettings() {
  return obj;
};
Object.defineProperty(prototype, "enabled", {
  get: function enabled() {
    return obj.enabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "autoToggle", {
  get: function autoToggle() {
    return obj.autoToggle;
  },
  set: undefined
});
Object.defineProperty(prototype, "hideInstantInvites", {
  get: function hideInstantInvites() {
    let hideInstantInvites = this.enabled;
    if (hideInstantInvites) {
      hideInstantInvites = obj.hideInstantInvites;
    }
    return hideInstantInvites;
  },
  set: undefined
});
Object.defineProperty(prototype, "hidePersonalInformation", {
  get: function hidePersonalInformation() {
    let hidePersonalInformation = this.enabled;
    if (hidePersonalInformation) {
      hidePersonalInformation = obj.hidePersonalInformation;
    }
    return hidePersonalInformation;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableSounds", {
  get: function disableSounds() {
    let disableSounds = this.enabled;
    if (disableSounds) {
      disableSounds = obj.disableSounds;
    }
    return disableSounds;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableNotifications", {
  get: function disableNotifications() {
    let disableNotifications = this.enabled;
    if (disableNotifications) {
      disableNotifications = obj.disableNotifications;
    }
    return disableNotifications;
  },
  set: undefined
});
Object.defineProperty(prototype, "enableContentProtection", {
  get: function enableContentProtection() {
    let enableContentProtection = this.enabled;
    if (enableContentProtection) {
      enableContentProtection = obj.enableContentProtection;
    }
    return enableContentProtection;
  },
  set: undefined
});
prototype["isOverlayWidgetDisabled"] = function isOverlayWidgetDisabled(arg0) {
  const obj = require(4034) /* apexExperiment */;
  let enabled = obj.getOverlayStreamerModeConfig("StreamerModeStore").enabled;
  if (enabled) {
    const self = this;
    enabled = this.enabled;
    if (enabled) {
      const disabledOverlayWidgets = obj.disabledOverlayWidgets;
      let hasItem;
      if (disabledOverlayWidgets != null) {
        hasItem = disabledOverlayWidgets.includes(arg0);
      }
      enabled = true === hasItem;
    }
  }
  return enabled;
};
StreamerModeStore.displayName = "StreamerModeStore";
StreamerModeStore.persistKey = "StreamerModeStore";
let items = [
  (arg0) => {
    id = id.getId();
    if (null != arg0) {
      if (null != id) {
        let obj = {};
        obj = {};
        const merged = Object.assign(arg0);
        obj[id] = obj;
      }
      return obj;
    }
    obj = {};
  }
];
StreamerModeStore.migrations = items;
obj = {
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      let closure_6 = {};
    }
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleMultiAccountRemove(userId) {
    if (userId.userId in closure_6) {
      userId = userId.userId;
      delete tmp2[tmp];
    }
  },
  STREAMER_MODE_UPDATE: function handleStreamerModeUpdate(value) {
    let disabledOverlayWidgets2;
    let obj = {};
    const merged = Object.assign(obj);
    obj = { [value.key]: value.value };
    const merged1 = Object.assign(obj, obj);
    if ("enabled" === value.key) {
      if (typeof value.value === "T") {
        obj = { enabled: null, automatic: false };
        obj[0] = value.value;
        importDefault(698).track(AnalyticEvents.STREAMER_MODE_TOGGLE, obj);
        const obj5 = importDefault(698);
      }
      return true;
    }
    const obj1 = { enabled: obj.enabled, automatic: obj.autoToggle, disable_notifications: obj.disableNotifications, disable_sounds: obj.disableSounds, hide_instant_invites: obj.hideInstantInvites, hide_personal_info: obj.hidePersonalInformation, enable_content_protection: obj.enableContentProtection, disabled_overlay_widgets: null, old_enabled: null, old_automatic: null, old_disable_notifications: null, old_disable_sounds: null, old_hide_instant_invites: null, old_hide_personal_info: null, old_enable_content_protection: null, old_disabled_overlay_widgets: null };
    const disabledOverlayWidgets = obj.disabledOverlayWidgets;
    let str;
    if (disabledOverlayWidgets != null) {
      str = disabledOverlayWidgets.join(",");
    }
    if (str == null) {
      str = "";
    }
    obj1[7] = str;
    ({ enabled: obj4[8], autoToggle: obj4[9], disableNotifications: obj4[10], disableSounds: obj4[11], hideInstantInvites: obj4[12], hidePersonalInformation: obj4[13], enableContentProtection: obj4[14], disabledOverlayWidgets: disabledOverlayWidgets2 } = obj);
    let str3;
    if (disabledOverlayWidgets2 != null) {
      str3 = disabledOverlayWidgets2.join(",");
    }
    if (str3 == null) {
      str3 = "";
    }
    obj1[15] = str3;
    importDefault(698).track(AnalyticEvents.UPDATE_STREAMER_MODE_SETTINGS, obj1);
  },
  RUNNING_STREAMER_TOOLS_CHANGE: function handleRunningStreamerToolsChange(count) {
    if (obj.autoToggle) {
      obj.enabled = count.count > 0;
      obj = importDefault(698);
      obj = { enabled: null, automatic: true };
      obj[0] = count.count > 0;
      obj.track(AnalyticEvents.STREAMER_MODE_TOGGLE, obj);
      return true;
    } else {
      return false;
    }
  }
};
const streamerModeStore = new StreamerModeStore(require("dispatcher"), obj);
const result = require("expandEventProperties").fileFinishedImporting("stores/StreamerModeStore.tsx");

export default streamerModeStore;