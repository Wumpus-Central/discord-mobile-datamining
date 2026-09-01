// discord_app/modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../../Dispatcher.tsx";

const result = set.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx",
);

export const setLastSeenTimeMs = function setLastSeenTimeMs() {
  dispatcherDefault.dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS" });
};
export const setTriggeredOnboardingContentMetadata = function setTriggeredOnboardingContentMetadata(
  triggeredOnboardingContentMetadata,
) {
  let obj = dispatcherDefault;
  obj = {
    type: "APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA",
    triggeredOnboardingContentMetadata,
  };
  obj.dispatch(obj);
};
