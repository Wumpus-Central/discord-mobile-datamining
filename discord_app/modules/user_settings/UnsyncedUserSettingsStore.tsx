// === Module 1304: CHANNEL_SIDEBAR_WIDTH ===

// Module 1304 (CHANNEL_SIDEBAR_WIDTH)
import set from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import Storage3 from "Storage" /* 595 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import SystemThemeState2 from "SystemThemeState" /* 1305 */;
import ExpressionPickerViewType from "ExpressionPickerViewType" /* 1338 */;
import getSystemThemeDefault from "getSystemTheme" /* 1339 */;
import ME from "ME" /* 676 */;

const SystemThemeState = SystemThemeState2.SystemThemeState;
const ListDensityMode = MAX_FAVORITES.ListDensityMode;
({ DEFAULT_CHAT_SIDEBAR_WIDTH: c5, CHANNEL_SIDEBAR_WIDTH } = ME);
let closure_7 = ME.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
const ExpressionPickerWidths = ExpressionPickerViewType.ExpressionPickerWidths;
let obj = { DATA_SAVER: "data_saver", STANDARD: "standard", BEST: "best" };
let closure_9 = (window.innerWidth - CHANNEL_SIDEBAR_WIDTH) / 2;
const STANDARD = obj.STANDARD;
let c11 = null;
let closure_12 = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class UnsyncedUserSettingsStore extends DeviceSettingsStore {
}
const prototype = UnsyncedUserSettingsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const useSystemTheme = obj.useSystemTheme;
  if (null != useSystemTheme) {
    if (null != getSystemThemeDefault()) {
      let UNSET = useSystemTheme;
    }
    obj.useSystemTheme = UNSET;
    let lowQualityImageMode = obj.dataSavingMode;
    if (lowQualityImageMode == null) {
      lowQualityImageMode = obj.lowQualityImageMode;
    }
    obj.dataSavingMode = lowQualityImageMode;
    let str = obj.hdrDynamicRange;
    if (str == null) {
      str = "no-limit";
    }
    obj.hdrDynamicRange = str;
  }
  UNSET = SystemThemeState.UNSET;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_12;
};
Object.defineProperty(prototype, "displayCompactAvatars", {
  get: function displayCompactAvatars() {
    let flag = closure_12.displayCompactAvatars;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "lowQualityImageMode", {
  get: function lowQualityImageMode() {
    let flag = closure_12.lowQualityImageMode;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoUploadQuality", {
  get: function videoUploadQuality(arg0) {
    let videoUploadQuality = closure_12.videoUploadQuality;
    if (videoUploadQuality == null) {
      videoUploadQuality = STANDARD;
    }
    return videoUploadQuality;
  },
  set: undefined
});
Object.defineProperty(prototype, "dataSavingMode", {
  get: function dataSavingMode() {
    let flag = closure_12.dataSavingMode;
    if (flag == null) {
      flag = closure_12.lowQualityImageMode;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "expressionPickerWidth", {
  get: function expressionPickerWidth() {
    let MIN = closure_12.expressionPickerWidth;
    if (MIN == null) {
      MIN = ExpressionPickerWidths.MIN;
    }
    return MIN;
  },
  set: undefined
});
Object.defineProperty(prototype, "messageRequestSidebarWidth", {
  get: function messageRequestSidebarWidth() {
    let messageRequestSidebarWidth = closure_12.messageRequestSidebarWidth;
    if (messageRequestSidebarWidth == null) {
      messageRequestSidebarWidth = closure_7;
    }
    return messageRequestSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "threadSidebarWidth", {
  get: function threadSidebarWidth() {
    let threadSidebarWidth = closure_12.threadSidebarWidth;
    if (threadSidebarWidth == null) {
      threadSidebarWidth = closure_5;
    }
    return threadSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "postSidebarWidth", {
  get: function postSidebarWidth() {
    let postSidebarWidth = closure_12.postSidebarWidth;
    if (postSidebarWidth == null) {
      postSidebarWidth = closure_9;
    }
    return postSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "callChatSidebarWidth", {
  get: function callChatSidebarWidth() {
    let callChatSidebarWidth = closure_12.callChatSidebarWidth;
    if (callChatSidebarWidth == null) {
      callChatSidebarWidth = closure_5;
    }
    return callChatSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "homeSidebarWidth", {
  get: function homeSidebarWidth() {
    let homeSidebarWidth = closure_12.homeSidebarWidth;
    if (homeSidebarWidth == null) {
      if (null == closure_11) {
        const _Math = Math;
        const _window = window;
        closure_11 = Math.max(0.4 * (window.innerWidth - CHANNEL_SIDEBAR_WIDTH), closure_5);
      }
      homeSidebarWidth = closure_11;
    }
    return homeSidebarWidth;
  },
  set: undefined
});
Object.defineProperty(prototype, "callHeaderHeight", {
  get: function callHeaderHeight() {
    return closure_12.callHeaderHeight;
  },
  set: undefined
});
Object.defineProperty(prototype, "useSystemTheme", {
  get: function useSystemTheme() {
    let UNSET = closure_12.useSystemTheme;
    if (UNSET == null) {
      UNSET = SystemThemeState.UNSET;
    }
    return UNSET;
  },
  set: undefined
});
Object.defineProperty(prototype, "activityPanelHeight", {
  get: function activityPanelHeight() {
    return closure_12.activityPanelHeight;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableVoiceChannelChangeAlert", {
  get: function disableVoiceChannelChangeAlert() {
    let flag = closure_12.disableVoiceChannelChangeAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableHardwareMuteSilenceAlert", {
  get: function disableHardwareMuteSilenceAlert() {
    let flag = closure_12.disableHardwareMuteSilenceAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableEmbeddedActivityPopOutAlert", {
  get: function disableEmbeddedActivityPopOutAlert() {
    let flag = closure_12.disableEmbeddedActivityPopOutAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableActivityHardwareAccelerationPrompt", {
  get: function disableActivityHardwareAccelerationPrompt() {
    let flag = closure_12.disableActivityHardwareAccelerationPrompt;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableInviteWithTextChannelActivityLaunch", {
  get: function disableInviteWithTextChannelActivityLaunch() {
    let flag = closure_12.disableInviteWithTextChannelActivityLaunch;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableHideSelfStreamAndVideoConfirmationAlert", {
  get: function disableHideSelfStreamAndVideoConfirmationAlert() {
    let flag = closure_12.disableHideSelfStreamAndVideoConfirmationAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "pushUpsellUserSettingsDismissed", {
  get: function pushUpsellUserSettingsDismissed() {
    let flag = closure_12.pushUpsellDismissed;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableActivityHostLeftNitroUpsell", {
  get: function disableActivityHostLeftNitroUpsell() {
    let flag = closure_12.disableActivityHostLeftNitroUpsell;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableCallUserConfirmationPrompt", {
  get: function disableCallUserConfirmationPrompt() {
    let flag = closure_12.disableCallUserConfirmationPrompt;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "disableApplicationSubscriptionCancellationSurvey", {
  get: function disableApplicationSubscriptionCancellationSurvey() {
    let flag = closure_12.disableApplicationSubscriptionCancellationSurvey;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "allowVibegrationsPictureInPictureOnNavigateAway", {
  get: function allowVibegrationsPictureInPictureOnNavigateAway() {
    let flag = closure_12.allowVibegrationsPictureInPictureOnNavigateAway;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "darkSidebar", {
  get: function darkSidebar() {
    let flag = closure_12.darkSidebar;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "saveCameraUploadsToDevice", {
  get: function saveCameraUploadsToDevice() {
    let flag = closure_12.saveCameraUploadsToDevice;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined
});
prototype["isVisualRefreshDisabled"] = function isVisualRefreshDisabled(arg0) {
  let disableVisualRefresh = closure_12.disableVisualRefresh;
  if (disableVisualRefresh == null) {
    disableVisualRefresh = arg0;
  }
  return disableVisualRefresh;
};
Object.defineProperty(prototype, "listDensity", {
  get: function listDensity() {
    let COZY = closure_12.listDensity;
    if (COZY == null) {
      COZY = ListDensityMode.COZY;
    }
    return COZY;
  },
  set: undefined
});
Object.defineProperty(prototype, "hdrDynamicRange", {
  get: function hdrDynamicRange() {
    let str = closure_12.hdrDynamicRange;
    if (str == null) {
      str = "no-limit";
    }
    return str;
  },
  set: undefined
});
UnsyncedUserSettingsStore.displayName = "UnsyncedUserSettingsStore";
UnsyncedUserSettingsStore.persistKey = "UnsyncedUserSettingsStore";
const items = [
  () => {
    const Storage = Storage3.Storage;
    const value = Storage.get("UserSettingsStore");
    const Storage2 = Storage3.Storage;
    Storage2.remove("UserSettingsStore");
    return applyDefault.pick(value, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHardwareMuteSilenceAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations");
  },
  (arg0) => {
    delete tmp[tmp2];
  }
];
UnsyncedUserSettingsStore.migrations = items;
obj = {
  UNSYNCED_USER_SETTINGS_UPDATE: function handleUnsyncedUserSettingsUpdate(settings) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings.settings);
  },
  LOGOUT: function handleLogOut() {
    obj = { useSystemTheme: obj.useSystemTheme };
  },
  LOGIN_SUCCESS: function handleLogInSuccess() {
    if (null == closure_12) {
      closure_12 = {};
    }
  },
  REGISTER_SUCCESS: function handleRegisterSuccess() {
    closure_12.useSystemTheme = SystemThemeState.ON;
  }
};
const unsyncedUserSettingsStore = new UnsyncedUserSettingsStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/user_settings/UnsyncedUserSettingsStore.tsx");

export default unsyncedUserSettingsStore;
export const VideoQualitySettings = obj;
export const VideoCompressionQuality = { VERY_LOW: "very_low", LOW: "low", MEDIUM: "medium", HIGH: "high", VERY_HIGH: "very_high" };