// === Module 12074: AppLauncherOnboardingActionCreators ===

// Module 12074 (AppLauncherOnboardingActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx");

export function setLastSeenTimeMs() {
  DispatcherDefault.dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS" });
}
export function setTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
  DispatcherDefault.dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA", triggeredOnboardingContentMetadata });
}