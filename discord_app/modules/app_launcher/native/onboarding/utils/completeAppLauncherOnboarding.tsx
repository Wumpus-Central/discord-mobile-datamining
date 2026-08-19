// === Module 11219: completeAppLauncherOnboarding ===

// Module 11219 (completeAppLauncherOnboarding)
import obj132 from "obj132" /* 2 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4196 */;

let result = obj132.fileFinishedImporting("modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx");

export default function completeAppLauncherOnboarding(dismissAction) {
  let obj = { dismissAction };
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  obj = { dismissAction };
  const result1 = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER, obj);
  const result2 = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER, { dismissAction });
};