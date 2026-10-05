// discord_app/modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx",
);

export default function completeAppLauncherOnboarding(dismissAction) {
  const obj = DismissibleContentUnsafeUtils;
  const obj2 = { dismissAction };
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER,
    obj2,
  );
  const obj3 = DismissibleContentUnsafeUtils;
  const obj4 = { dismissAction };
  const result1 = obj3.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER,
    obj4,
  );
  const obj5 = DismissibleContentUnsafeUtils;
  const obj6 = { dismissAction };
  const result2 = obj5.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER,
    obj6,
  );
}
