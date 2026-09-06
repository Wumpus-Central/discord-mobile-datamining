// discord_app/modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx",
);

export const setLastSeenTimeMs = function setLastSeenTimeMs() {
  DispatcherDefault.dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS" });
};
export const setTriggeredOnboardingContentMetadata = function setTriggeredOnboardingContentMetadata(
  triggeredOnboardingContentMetadata,
) {
  const obj = {
    type: "APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA",
    triggeredOnboardingContentMetadata,
  };
  obj.dispatch(obj);
};
