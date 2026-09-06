// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ActivitiesBannerDefault from "ActivitiesBanner.tsx";
import AppsBannerDefault from "AppsBanner.tsx";
import BotsBannerDefault from "BotsBanner.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx",
);

export default function AppLauncherOnboardingBanner(arg0) {
  ({ context, visibleContent } = arg0);
  if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
    let obj = { context };
    return jsx(ActivitiesBannerDefault, { context });
  } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(AppsBannerDefault, {});
  } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context };
    return jsx(BotsBannerDefault, { context });
  } else {
    return null;
  }
}
