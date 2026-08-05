// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx
import "noop";
import { jsx } from "jsxProd";
import { DismissibleContent } from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { ActivitiesBanner } from "ActivitiesBanner.tsx";
import { AppsBaner } from "AppsBanner.tsx";
import { BotsBanner } from "BotsBanner.tsx";

const require = arg1;
const result = require("DismissibleContent").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx");

export default function AppLauncherOnboardingBanner(arg0) {
  let context;
  let visibleContent;
  ({ context, visibleContent } = arg0);
  if (DismissibleContent /* DismissibleContent */.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
    let obj = { context: null };
    obj[0] = context;
    return jsx(ActivitiesBanner, { context: null });
  } else if (tmp(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(AppsBaner, {});
  } else if (tmp(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context: null };
    obj[0] = context;
    return jsx(BotsBanner, { context: null });
  } else {
    return null;
  }
};