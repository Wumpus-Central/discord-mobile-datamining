// === Module 11276: setLastSeenTimeMs ===

// Module 11276 (setLastSeenTimeMs)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingActionCreators.tsx");

export const setLastSeenTimeMs = function setLastSeenTimeMs() {
  dispatcherDefault.dispatch({ type: "APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS" });
};
export const setTriggeredOnboardingContentMetadata = function setTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
  const obj = { type: "APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA", triggeredOnboardingContentMetadata };
  obj.dispatch(obj);
};