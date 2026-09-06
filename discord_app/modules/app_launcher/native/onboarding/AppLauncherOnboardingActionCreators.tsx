// === Module 12099: AppLauncherOnboardingActionCreators ===

// Module 12099 (AppLauncherOnboardingActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx");

export const setLastSeenTimeMs = function setLastSeenTimeMs() {
  DispatcherDefault.dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS" });
};
export const setTriggeredOnboardingContentMetadata = function setTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
  const obj = { type: "APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA", triggeredOnboardingContentMetadata };
  obj.dispatch(obj);
};