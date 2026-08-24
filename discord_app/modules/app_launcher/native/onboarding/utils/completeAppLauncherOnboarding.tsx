// discord_app/modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx
import set from "../../../../../../_runtime/00002_set.js";
import DismissibleContent from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import UNSAFE_isDismissibleContentDismissed from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";

let result = set.fileFinishedImporting("modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx");

export default function completeAppLauncherOnboarding(dismissAction) {
  let obj = UNSAFE_isDismissibleContentDismissed;
  obj = { dismissAction };
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  obj = { dismissAction };
  const result1 = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER, obj);
  const obj3 = UNSAFE_isDismissibleContentDismissed;
  const result2 = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER, { dismissAction });
};