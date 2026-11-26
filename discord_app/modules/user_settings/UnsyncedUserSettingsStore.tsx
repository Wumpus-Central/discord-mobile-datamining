// discord_app/modules/user_settings/UnsyncedUserSettingsStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import getSystemThemeDefault from "../themes/getSystemTheme.native.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";

require = fn;
let closure_3 = ["allowConjurePictureInPictureOnNavigateAway", "allowVibegrationsPictureInPictureOnNavigateAway"];
const SystemThemeState = fn(1194).SystemThemeState;
const ListDensityMode = fn(1081).ListDensityMode;
const Constants = fn(1071);
({ DEFAULT_CHAT_SIDEBAR_WIDTH: metroImportDefault, CHANNEL_SIDEBAR_WIDTH } = Constants);
let closure_9 = Constants.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
const ExpressionPickerWidths = fn(1227).ExpressionPickerWidths;
const EmojiSortOrder = fn(1228).EmojiSortOrder;
let closure_12 = fn(1229).STAGE_AUDIENCE_SIDEBAR_DEFAULT_WIDTH;
let obj = { DATA_SAVER: "data_saver", STANDARD: "standard", BEST: "best" };
let closure_13 = (window.innerWidth - CHANNEL_SIDEBAR_WIDTH) / 2;
const STANDARD = obj.STANDARD;
let closure_15 = null;
let closure_16 = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class UnsyncedUserSettingsStore extends DeviceSettingsStore {}
const prototype = UnsyncedUserSettingsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  closure_16 = obj;
  const useSystemTheme = obj.useSystemTheme;
  if (null != useSystemTheme) {
    if (null != getSystemThemeDefault()) {
      let UNSET = useSystemTheme;
    }
    obj.useSystemTheme = UNSET;
    let lowQualityImageMode = closure_16.dataSavingMode;
    if (lowQualityImageMode == null) {
      lowQualityImageMode = closure_16.lowQualityImageMode;
    }
    closure_16.dataSavingMode = lowQualityImageMode;
    let str = closure_16.hdrDynamicRange;
    if (str == null) {
      str = "no-limit";
    }
    closure_16.hdrDynamicRange = str;
  }
  UNSET = SystemThemeState.UNSET;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_16;
};
Object.defineProperty(prototype, "lowQualityImageMode", {
  get: function lowQualityImageMode() {
    let flag = closure_16.lowQualityImageMode;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "videoUploadQuality", {
  get: function videoUploadQuality() {
    let videoUploadQuality = closure_16.videoUploadQuality;
    if (videoUploadQuality == null) {
      videoUploadQuality = STANDARD;
    }
    return videoUploadQuality;
  },
  set: undefined,
});
Object.defineProperty(prototype, "dataSavingMode", {
  get: function dataSavingMode() {
    let flag = closure_16.dataSavingMode;
    if (flag == null) {
      flag = closure_16.lowQualityImageMode;
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
    let MIN = closure_16.expressionPickerWidth;
    if (MIN == null) {
      MIN = ExpressionPickerWidths.MIN;
    }
    return MIN;
  },
  set: undefined,
});
Object.defineProperty(prototype, "expressionPickerHeight", {
  get: function expressionPickerHeight() {
    return closure_16.expressionPickerHeight;
  },
  set: undefined,
});
Object.defineProperty(prototype, "emojiPickerSortOrder", {
  get: function emojiPickerSortOrder() {
    let DEFAULT = closure_16.emojiPickerSortOrder;
    if (null == DEFAULT) {
      DEFAULT = EmojiSortOrder.DEFAULT;
    } else {
      const _Object = Object;
      const values = Object.values(EmojiSortOrder);
    }
    return DEFAULT;
  },
  set: undefined,
});
Object.defineProperty(prototype, "messageRequestSidebarWidth", {
  get: function messageRequestSidebarWidth() {
    let messageRequestSidebarWidth = closure_16.messageRequestSidebarWidth;
    if (messageRequestSidebarWidth == null) {
      messageRequestSidebarWidth = closure_9;
    }
    return messageRequestSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "threadSidebarWidth", {
  get: function threadSidebarWidth() {
    let threadSidebarWidth = closure_16.threadSidebarWidth;
    if (threadSidebarWidth == null) {
      threadSidebarWidth = metroImportDefault;
    }
    return threadSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "postSidebarWidth", {
  get: function postSidebarWidth() {
    let postSidebarWidth = closure_16.postSidebarWidth;
    if (postSidebarWidth == null) {
      postSidebarWidth = closure_13;
    }
    return postSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "callChatSidebarWidth", {
  get: function callChatSidebarWidth() {
    let callChatSidebarWidth = closure_16.callChatSidebarWidth;
    if (callChatSidebarWidth == null) {
      callChatSidebarWidth = metroImportDefault;
    }
    return callChatSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "stageAudienceSidebarWidth", {
  get: function stageAudienceSidebarWidth() {
    let stageAudienceSidebarWidth = closure_16.stageAudienceSidebarWidth;
    if (stageAudienceSidebarWidth == null) {
      stageAudienceSidebarWidth = closure_12;
    }
    return stageAudienceSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "homeSidebarWidth", {
  get: function homeSidebarWidth() {
    let homeSidebarWidth = closure_16.homeSidebarWidth;
    if (homeSidebarWidth == null) {
      if (null == closure_15) {
        const _Math = Math;
        const _window = window;
        closure_15 = Math.max(0.4 * (window.innerWidth - CHANNEL_SIDEBAR_WIDTH), metroImportDefault);
      }
      homeSidebarWidth = closure_15;
    }
    return homeSidebarWidth;
  },
  set: undefined,
});
Object.defineProperty(prototype, "callHeaderHeight", {
  get: function callHeaderHeight() {
    return closure_16.callHeaderHeight;
  },
  set: undefined,
});
Object.defineProperty(prototype, "useSystemTheme", {
  get: function useSystemTheme() {
    let UNSET = closure_16.useSystemTheme;
    if (UNSET == null) {
      UNSET = SystemThemeState.UNSET;
    }
    return UNSET;
  },
  set: undefined,
});
Object.defineProperty(prototype, "activityPanelHeight", {
  get: function activityPanelHeight() {
    return closure_16.activityPanelHeight;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableVoiceChannelChangeAlert", {
  get: function disableVoiceChannelChangeAlert() {
    let flag = closure_16.disableVoiceChannelChangeAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableEmbeddedActivityPopOutAlert", {
  get: function disableEmbeddedActivityPopOutAlert() {
    let flag = closure_16.disableEmbeddedActivityPopOutAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableActivityHardwareAccelerationPrompt", {
  get: function disableActivityHardwareAccelerationPrompt() {
    let flag = closure_16.disableActivityHardwareAccelerationPrompt;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableInviteWithTextChannelActivityLaunch", {
  get: function disableInviteWithTextChannelActivityLaunch() {
    let flag = closure_16.disableInviteWithTextChannelActivityLaunch;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableHideSelfStreamAndVideoConfirmationAlert", {
  get: function disableHideSelfStreamAndVideoConfirmationAlert() {
    let flag = closure_16.disableHideSelfStreamAndVideoConfirmationAlert;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "pushUpsellUserSettingsDismissed", {
  get: function pushUpsellUserSettingsDismissed() {
    let flag = closure_16.pushUpsellDismissed;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableActivityHostLeftNitroUpsell", {
  get: function disableActivityHostLeftNitroUpsell() {
    let flag = closure_16.disableActivityHostLeftNitroUpsell;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableCallUserConfirmationPrompt", {
  get: function disableCallUserConfirmationPrompt() {
    let flag = closure_16.disableCallUserConfirmationPrompt;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "disableApplicationSubscriptionCancellationSurvey", {
  get: function disableApplicationSubscriptionCancellationSurvey() {
    let flag = closure_16.disableApplicationSubscriptionCancellationSurvey;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "allowConjureRunInBackground", {
  get: function allowConjureRunInBackground() {
    let flag = closure_16.allowConjureRunInBackground;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "darkSidebar", {
  get: function darkSidebar() {
    let flag = closure_16.darkSidebar;
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "saveCameraUploadsToDevice", {
  get: function saveCameraUploadsToDevice() {
    let flag = closure_16.saveCameraUploadsToDevice;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined,
});
prototype["isVisualRefreshDisabled"] = function isVisualRefreshDisabled(arg0) {
  let disableVisualRefresh = closure_16.disableVisualRefresh;
  if (disableVisualRefresh == null) {
    disableVisualRefresh = arg0;
  }
  return disableVisualRefresh;
};
Object.defineProperty(prototype, "listDensity", {
  get: function listDensity() {
    let COZY = closure_16.listDensity;
    if (COZY == null) {
      COZY = ListDensityMode.COZY;
    }
    return COZY;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hdrDynamicRange", {
  get: function hdrDynamicRange() {
    let str = closure_16.hdrDynamicRange;
    if (str == null) {
      str = "no-limit";
    }
    return str;
  },
  set: undefined,
});
Object.defineProperty(prototype, "pauseSelfStreamPreviewWhenUnfocused", {
  get: function pauseSelfStreamPreviewWhenUnfocused() {
    let flag = closure_16.pauseSelfStreamPreviewWhenUnfocused;
    if (flag == null) {
      flag = true;
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "videoBackground", {
  get: function videoBackground() {
    let videoBackground = closure_16.videoBackground;
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
    value = Storage.get("UserSettingsStore");
    const Storage2 = Storage3.Storage;
    Storage2.remove("UserSettingsStore");
    return applyDefault.pick(
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
    delete tmp[tmp2];
  },
  (allowConjurePictureInPictureOnNavigateAway) => {
    if (null == allowConjurePictureInPictureOnNavigateAway) {
      return allowConjurePictureInPictureOnNavigateAway;
    } else {
      let allowVibegrationsPictureInPictureOnNavigateAway =
        allowConjurePictureInPictureOnNavigateAway.allowConjurePictureInPictureOnNavigateAway;
      const tmp3 = _objectWithoutProperties(allowConjurePictureInPictureOnNavigateAway, closure_3);
      if (allowVibegrationsPictureInPictureOnNavigateAway == null) {
        allowVibegrationsPictureInPictureOnNavigateAway =
          allowConjurePictureInPictureOnNavigateAway.allowVibegrationsPictureInPictureOnNavigateAway;
      }
      if (tmp4) {
        tmp3.allowConjureRunInBackground = allowVibegrationsPictureInPictureOnNavigateAway;
      }
      return tmp3;
    }
  },
];
UnsyncedUserSettingsStore.migrations = items;
const unsyncedUserSettingsStore = new UnsyncedUserSettingsStore(DispatcherDefault, {
  UNSYNCED_USER_SETTINGS_UPDATE: function handleUnsyncedUserSettingsUpdate(settings) {
    const merged = Object.assign(closure_16);
    const merged1 = Object.assign(settings.settings);
    closure_16 = {};
  },
  LOGOUT: function handleLogOut() {
    closure_16 = { useSystemTheme: closure_16.useSystemTheme };
  },
  LOGIN_SUCCESS: function handleLogInSuccess() {
    if (null == closure_16) {
      closure_16 = {};
    }
  },
  REGISTER_SUCCESS: function handleRegisterSuccess() {
    closure_16.useSystemTheme = SystemThemeState.ON;
  },
});
const size = fn(2);
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
