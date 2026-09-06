// discord_app/modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx",
);

export default function completeAppLauncherOnboarding(dismissAction) {
  let obj = { dismissAction };
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER,
    obj,
  );
  obj = { dismissAction };
  const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER,
    obj,
  );
  const result2 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER,
    { dismissAction },
  );
}
