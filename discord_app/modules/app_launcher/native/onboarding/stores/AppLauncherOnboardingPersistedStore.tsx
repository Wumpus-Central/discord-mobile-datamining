// discord_app/modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx
import get_initializedDefault from "../../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let triggeredOnboardingContentMetadata = {
  canShowBotsBanner: false,
  canShowAppsOrActivitiesBanner: false,
  willShowGlobalSearchOnboarding: false,
  timeMs: 0,
  channelId: "0",
};
const PersistedStore = get_initializedDefault.PersistedStore;
class AppLauncherOnboardingPersistedStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      ({
        lastSeenTimeMs: closure_1.lastSeenTimeMs,
        triggeredOnboardingContentMetadata: closure_1.triggeredOnboardingContentMetadata,
      } = arg0);
    }
  }
  getState() {
    return closure_1;
  }
  getLastSeenTimeMs() {
    return closure_1.lastSeenTimeMs;
  }
  getTriggeredOnboardingContentMetadata() {
    return closure_1.triggeredOnboardingContentMetadata;
  }
}
const prototype = AppLauncherOnboardingPersistedStore.prototype;
AppLauncherOnboardingPersistedStore.displayName = "AppLauncherOnboardingPersistedStore";
AppLauncherOnboardingPersistedStore.persistKey = "AppLauncherOnboardingPersistedStore";
const items = [
  (lastSeenTimeMs) => {
    let channelId;
    let obj2;
    let prop;
    let prop1;
    let timeMs;
    lastSeenTimeMs = undefined;
    if (lastSeenTimeMs != null) {
      lastSeenTimeMs = lastSeenTimeMs.lastSeenTimeMs;
    }
    if (lastSeenTimeMs == null) {
      lastSeenTimeMs = null;
    }
    const obj = { lastSeenTimeMs, triggeredOnboardingContentMetadata: obj2 };
    let canShowBotsBanner;
    if (lastSeenTimeMs != null) {
      triggeredOnboardingContentMetadata = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (triggeredOnboardingContentMetadata != null) {
        canShowBotsBanner = triggeredOnboardingContentMetadata.canShowBotsBanner;
      }
    }
    if (canShowBotsBanner == null) {
      canShowBotsBanner = obj.canShowBotsBanner;
    }
    obj2 = {
      canShowBotsBanner,
      canShowAppsOrActivitiesBanner: prop,
      willShowGlobalSearchOnboarding: prop1,
      timeMs,
      channelId,
    };
    prop = undefined;
    if (lastSeenTimeMs != null) {
      const triggeredOnboardingContentMetadata2 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (triggeredOnboardingContentMetadata2 != null) {
        prop = triggeredOnboardingContentMetadata2.canShowAppsOrActivitiesBanner;
      }
    }
    if (prop == null) {
      prop = obj.canShowAppsOrActivitiesBanner;
    }
    prop1 = undefined;
    if (lastSeenTimeMs != null) {
      const triggeredOnboardingContentMetadata3 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (triggeredOnboardingContentMetadata3 != null) {
        prop1 = triggeredOnboardingContentMetadata3.willShowGlobalSearchOnboarding;
      }
    }
    if (prop1 == null) {
      prop1 = obj.willShowGlobalSearchOnboarding;
    }
    timeMs = undefined;
    if (lastSeenTimeMs != null) {
      const triggeredOnboardingContentMetadata4 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (triggeredOnboardingContentMetadata4 != null) {
        timeMs = triggeredOnboardingContentMetadata4.timeMs;
      }
    }
    if (timeMs == null) {
      timeMs = obj.timeMs;
    }
    channelId = undefined;
    if (lastSeenTimeMs != null) {
      const triggeredOnboardingContentMetadata5 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (triggeredOnboardingContentMetadata5 != null) {
        channelId = triggeredOnboardingContentMetadata5.channelId;
      }
    }
    if (channelId == null) {
      channelId = obj.channelId;
    }
    return obj;
  },
];
AppLauncherOnboardingPersistedStore.migrations = items;
let obj2 = {
  APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS: function handleSetLastSeenTimeMs() {
    closure_1.lastSeenTimeMs = Date.now();
  },
  APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA:
    function handleSetTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
      closure_1.triggeredOnboardingContentMetadata =
        triggeredOnboardingContentMetadata.triggeredOnboardingContentMetadata;
    },
};
const appLauncherOnboardingPersistedStore = new AppLauncherOnboardingPersistedStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx",
);

export default appLauncherOnboardingPersistedStore;
