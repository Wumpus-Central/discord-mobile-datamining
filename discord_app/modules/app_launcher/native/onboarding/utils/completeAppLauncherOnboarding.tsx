// discord_app/modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx
let result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/utils/completeAppLauncherOnboarding.tsx");

export default function completeAppLauncherOnboarding(dismissAction) {
  let obj = require("../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */;
  obj = { dismissAction };
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(require("../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  obj = { dismissAction };
  const result1 = require("../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require("../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER, obj);
  const obj3 = require("../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */;
  const result2 = require("../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require("../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER, { dismissAction });
};