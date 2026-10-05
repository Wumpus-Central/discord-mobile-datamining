// discord_app/modules/user_settings/UnsyncedUserSettingsStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettingsConstants from "UserSettingsConstants.tsx";
import ThemeConstants from "ThemeConstants.tsx";
import ExpressionPickerConstants from "../expression_picker/ExpressionPickerConstants.tsx";
import getSystemThemeDefault from "../themes/getSystemTheme.native.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let CHANNEL_SIDEBAR_WIDTH;
let hasOwnProperty;
const SystemThemeState = ThemeConstants.SystemThemeState;
const ListDensityMode = UserSettingsConstants.ListDensityMode;
({ DEFAULT_CHAT_SIDEBAR_WIDTH: hasOwnProperty, CHANNEL_SIDEBAR_WIDTH } = Constants);
const DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH = Constants.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
const ExpressionPickerWidths = ExpressionPickerConstants.ExpressionPickerWidths;
let obj = { DATA_SAVER: "data_saver", STANDARD: "standard", BEST: "best" };
let closure_9 = (window.innerWidth - CHANNEL_SIDEBAR_WIDTH) / 2;
const STANDARD = obj.STANDARD;
let closure_11 = null;
let closure_12 = {};
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class UnsyncedUserSettingsStore extends DeviceSettingsStore {
  initialize(arg0) {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    closure_12 = obj;
    const useSystemTheme = obj.useSystemTheme;
    if (null != useSystemTheme) {
      let UNSET;
      if (null != getSystemThemeDefault()) {
        UNSET = useSystemTheme;
        if (typeof useSystemTheme === "boolean") {
          UNSET = useSystemTheme ? SystemThemeState.ON : SystemThemeState.OFF;
        }
      }
      obj.useSystemTheme = UNSET;
      let lowQualityImageMode = closure_12.dataSavingMode;
      const tmp3 = closure_12;
      if (lowQualityImageMode == null) {
        lowQualityImageMode = closure_12.lowQualityImageMode;
      }
      tmp3.dataSavingMode = lowQualityImageMode;
      let str = closure_12.hdrDynamicRange;
      const tmp5 = closure_12;
      if (str == null) {
        str = "no-limit";
      }
      tmp5.hdrDynamicRange = str;
    }
    UNSET = SystemThemeState.UNSET;
  }
  getUserAgnosticState() {
    return closure_12;
  }
  isVisualRefreshDisabled(arg0) {
    let disableVisualRefresh = closure_12.disableVisualRefresh;
    if (disableVisualRefresh == null) {
      disableVisualRefresh = arg0;
    }
    return disableVisualRefresh;
  }
}
const prototype = UnsyncedUserSettingsStore.prototype;
Object.defineProperty(prototype, "lowQualityImageMode", {
  get: function lowQualityImageMode() {
    let flag = closure_12.lowQualityImageMode;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "videoUploadQuality", {
  get: function videoUploadQuality() {
    let videoUploadQuality = closure_12.videoUploadQuality;
    if (videoUploadQuality == null) {
      videoUploadQuality = STANDARD;
    }
    return videoUploadQuality;
  },
  set: undefined,
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
  set: undefined,
});
Object.defineProperty(prototype, "expressionPickerWidth", {
  get: function expressionPickerWidth() {
    let MIN = closure_12.expressionPickerWidth;
    if (MIN == null) {
      MIN = ExpressionPickerWidths.MIN;
    }
    return MIN;
  },
  set: undefined,
});
Object.defineProperty(prototype, "messageRequestSidebarWidth", {
  get: function messageRequestSidebarWidth() {
    let messageRequestSidebarWidth = closure_12.messageRequestSidebarWidth;
    if (messageRequestSidebarWidth == null) {
      messageRequestSidebarWidth = DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
    }
    return messageRequestSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "threadSidebarWidth", {
  get: function threadSidebarWidth() {
    let threadSidebarWidth = closure_12.threadSidebarWidth;
    if (threadSidebarWidth == null) {
      threadSidebarWidth = hasOwnProperty;
    }
    return threadSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "postSidebarWidth", {
  get: function postSidebarWidth() {
    let postSidebarWidth = closure_12.postSidebarWidth;
    if (postSidebarWidth == null) {
      postSidebarWidth = closure_9;
    }
    return postSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "callChatSidebarWidth", {
  get: function callChatSidebarWidth() {
    let callChatSidebarWidth = closure_12.callChatSidebarWidth;
    if (callChatSidebarWidth == null) {
      callChatSidebarWidth = hasOwnProperty;
    }
    return callChatSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "homeSidebarWidth", {
  get: function homeSidebarWidth() {
    let homeSidebarWidth = closure_12.homeSidebarWidth;
    if (homeSidebarWidth == null) {
      if (null == closure_11) {
        const _Math = Math;
        const _window = window;
        closure_11 = Math.max(0.4 * (window.innerWidth - CHANNEL_SIDEBAR_WIDTH), hasOwnProperty);
      }
      homeSidebarWidth = closure_11;
    }
    return homeSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "callHeaderHeight", {
  get: function callHeaderHeight() {
    return closure_12.callHeaderHeight;
  },
  set: undefined,
});
Object.defineProperty(prototype, "useSystemTheme", {
  get: function useSystemTheme() {
    let UNSET = closure_12.useSystemTheme;
    if (UNSET == null) {
      UNSET = SystemThemeState.UNSET;
    }
    return UNSET;
  },
  set: undefined,
});
Object.defineProperty(prototype, "activityPanelHeight", {
  get: function activityPanelHeight() {
    return closure_12.activityPanelHeight;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableVoiceChannelChangeAlert", {
  get: function disableVoiceChannelChangeAlert() {
    let flag = closure_12.disableVoiceChannelChangeAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableEmbeddedActivityPopOutAlert", {
  get: function disableEmbeddedActivityPopOutAlert() {
    let flag = closure_12.disableEmbeddedActivityPopOutAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableActivityHardwareAccelerationPrompt", {
  get: function disableActivityHardwareAccelerationPrompt() {
    let flag = closure_12.disableActivityHardwareAccelerationPrompt;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableInviteWithTextChannelActivityLaunch", {
  get: function disableInviteWithTextChannelActivityLaunch() {
    let flag = closure_12.disableInviteWithTextChannelActivityLaunch;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableHideSelfStreamAndVideoConfirmationAlert", {
  get: function disableHideSelfStreamAndVideoConfirmationAlert() {
    let flag = closure_12.disableHideSelfStreamAndVideoConfirmationAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "pushUpsellUserSettingsDismissed", {
  get: function pushUpsellUserSettingsDismissed() {
    let flag = closure_12.pushUpsellDismissed;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableActivityHostLeftNitroUpsell", {
  get: function disableActivityHostLeftNitroUpsell() {
    let flag = closure_12.disableActivityHostLeftNitroUpsell;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableCallUserConfirmationPrompt", {
  get: function disableCallUserConfirmationPrompt() {
    let flag = closure_12.disableCallUserConfirmationPrompt;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableApplicationSubscriptionCancellationSurvey", {
  get: function disableApplicationSubscriptionCancellationSurvey() {
    let flag = closure_12.disableApplicationSubscriptionCancellationSurvey;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "allowVibegrationsPictureInPictureOnNavigateAway", {
  get: function allowVibegrationsPictureInPictureOnNavigateAway() {
    let flag = closure_12.allowVibegrationsPictureInPictureOnNavigateAway;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "darkSidebar", {
  get: function darkSidebar() {
    let flag = closure_12.darkSidebar;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "saveCameraUploadsToDevice", {
  get: function saveCameraUploadsToDevice() {
    let flag = closure_12.saveCameraUploadsToDevice;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "listDensity", {
  get: function listDensity() {
    let COZY = closure_12.listDensity;
    if (COZY == null) {
      COZY = ListDensityMode.COZY;
    }
    return COZY;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hdrDynamicRange", {
  get: function hdrDynamicRange() {
    let str = closure_12.hdrDynamicRange;
    if (str == null) {
      str = "no-limit";
    }
    return str;
  },
  set: undefined,
});
Object.defineProperty(prototype, "pauseSelfStreamPreviewWhenUnfocused", {
  get: function pauseSelfStreamPreviewWhenUnfocused() {
    let flag = closure_12.pauseSelfStreamPreviewWhenUnfocused;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "videoBackground", {
  get: function videoBackground() {
    let videoBackground = closure_12.videoBackground;
    if (videoBackground == null) {
      videoBackground = null;
    }
    return videoBackground;
  },
  set: undefined,
});
UnsyncedUserSettingsStore.displayName = "UnsyncedUserSettingsStore";
UnsyncedUserSettingsStore.persistKey = "UnsyncedUserSettingsStore";
const items = [
  () => {
    const Storage = Storage3.Storage;
    const value = Storage.get("UserSettingsStore");
    const Storage2 = Storage3.Storage;
    Storage2.remove("UserSettingsStore");
    const obj = _modDef12;
    return obj.pick(
      value,
      "dataSavingMode",
      "videoUploadQuality",
      "lowQualityImageMode",
      "useSystemTheme",
      "expressionPickerWidth",
      "disableVoiceChannelChangeAlert",
      "disableHideSelfStreamAndVideoConfirmationAlert",
      "pushUpsellDismissed",
      "disableEmbeddedActivityPopOutAlert",
      "disableActivityHardwareAccelerationPrompt",
      "disableInviteWithTextChannelActivityLaunch",
      "disableActivityHostLeftNitroUpsell",
      "disableCallUserConfirmationPrompt",
      "disableApplicationSubscriptionCancellationSurvey",
      "enableAndroidChatListAnimations",
    );
  },
  (arg0) => {
    delete arg0["disableVisualRefresh"];
  },
];
UnsyncedUserSettingsStore.migrations = items;
const obj2 = {
  UNSYNCED_USER_SETTINGS_UPDATE: function handleUnsyncedUserSettingsUpdate(settings) {
    const obj = {};
    const merged = Object.assign(closure_12);
    const merged1 = Object.assign(settings.settings);
    closure_12 = obj;
  },
  LOGOUT: function handleLogOut() {
    const obj = { useSystemTheme: closure_12.useSystemTheme };
    closure_12 = obj;
  },
  LOGIN_SUCCESS: function handleLogInSuccess() {
    if (null == closure_12) {
      closure_12 = {};
    }
  },
  REGISTER_SUCCESS: function handleRegisterSuccess() {
    closure_12.useSystemTheme = SystemThemeState.ON;
  },
};
const unsyncedUserSettingsStore = new UnsyncedUserSettingsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/user_settings/UnsyncedUserSettingsStore.tsx");

export default unsyncedUserSettingsStore;
export const VideoQualitySettings = obj;
export const VideoCompressionQuality = {
  VERY_LOW: "very_low",
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  VERY_HIGH: "very_high",
};
