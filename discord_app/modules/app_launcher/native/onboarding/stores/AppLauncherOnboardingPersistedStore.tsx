// discord_app/modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx
import initializeDefault from "../../../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../../../Dispatcher.tsx";

let obj = {
  canShowBotsBanner: false,
  canShowAppsOrActivitiesBanner: false,
  willShowGlobalSearchOnboarding: false,
  timeMs: 0,
  channelId: "0",
};
let closure_1 = { lastSeenTimeMs: null, triggeredOnboardingContentMetadata: obj };
const PersistedStore = initializeDefault.PersistedStore;
class AppLauncherOnboardingPersistedStore extends PersistedStore {}
const prototype = AppLauncherOnboardingPersistedStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    ({
      lastSeenTimeMs: closure_1.lastSeenTimeMs,
      triggeredOnboardingContentMetadata: closure_1.triggeredOnboardingContentMetadata,
    } = arg0);
  }
};
prototype["getState"] = function getState() {
  return closure_1;
};
prototype["getLastSeenTimeMs"] = function getLastSeenTimeMs() {
  return closure_1.lastSeenTimeMs;
};
prototype["getTriggeredOnboardingContentMetadata"] = function getTriggeredOnboardingContentMetadata() {
  return closure_1.triggeredOnboardingContentMetadata;
};
AppLauncherOnboardingPersistedStore.displayName = "AppLauncherOnboardingPersistedStore";
AppLauncherOnboardingPersistedStore.persistKey = "AppLauncherOnboardingPersistedStore";
const items = [
  (lastSeenTimeMs) => {
    lastSeenTimeMs = undefined;
    if (lastSeenTimeMs != null) {
      lastSeenTimeMs = lastSeenTimeMs.lastSeenTimeMs;
    }
    if (lastSeenTimeMs == null) {
      lastSeenTimeMs = null;
    }
    obj = { lastSeenTimeMs, triggeredOnboardingContentMetadata: null };
    let canShowBotsBanner;
    if (lastSeenTimeMs != null) {
      const triggeredOnboardingContentMetadata = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (triggeredOnboardingContentMetadata != null) {
        canShowBotsBanner = triggeredOnboardingContentMetadata.canShowBotsBanner;
      }
    }
    if (canShowBotsBanner == null) {
      canShowBotsBanner = obj.canShowBotsBanner;
    }
    obj = {
      canShowBotsBanner,
      canShowAppsOrActivitiesBanner: null,
      willShowGlobalSearchOnboarding: null,
      timeMs: null,
      channelId: null,
    };
    let prop;
    if (lastSeenTimeMs != null) {
      const triggeredOnboardingContentMetadata2 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (triggeredOnboardingContentMetadata2 != null) {
        prop = triggeredOnboardingContentMetadata2.canShowAppsOrActivitiesBanner;
      }
    }
    if (prop == null) {
      prop = obj.canShowAppsOrActivitiesBanner;
    }
    obj[1] = prop;
    let prop1;
    if (lastSeenTimeMs != null) {
      const triggeredOnboardingContentMetadata3 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (triggeredOnboardingContentMetadata3 != null) {
        prop1 = triggeredOnboardingContentMetadata3.willShowGlobalSearchOnboarding;
      }
    }
    if (prop1 == null) {
      prop1 = obj.willShowGlobalSearchOnboarding;
    }
    obj[2] = prop1;
    let timeMs;
    if (lastSeenTimeMs != null) {
      const triggeredOnboardingContentMetadata4 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (triggeredOnboardingContentMetadata4 != null) {
        timeMs = triggeredOnboardingContentMetadata4.timeMs;
      }
    }
    if (timeMs == null) {
      timeMs = obj.timeMs;
    }
    obj[3] = timeMs;
    let channelId;
    if (lastSeenTimeMs != null) {
      const triggeredOnboardingContentMetadata5 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (triggeredOnboardingContentMetadata5 != null) {
        channelId = triggeredOnboardingContentMetadata5.channelId;
      }
    }
    if (channelId == null) {
      channelId = obj.channelId;
    }
    obj[4] = channelId;
    obj[1] = obj;
    return obj;
  },
];
AppLauncherOnboardingPersistedStore.migrations = items;
obj = {
  APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS: function handleSetLastSeenTimeMs() {
    closure_1.lastSeenTimeMs = Date.now();
  },
  APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA:
    function handleSetTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
      closure_1.triggeredOnboardingContentMetadata =
        triggeredOnboardingContentMetadata.triggeredOnboardingContentMetadata;
    },
};
const appLauncherOnboardingPersistedStore = new AppLauncherOnboardingPersistedStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting(
  "modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx",
);

export default appLauncherOnboardingPersistedStore;
