// === Module 11843: AppLauncherOnboardingBanner ===

// Module 11843 (AppLauncherOnboardingBanner)
import noopAll from "noop" /* 19 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import ActivitiesBannerDefault from "ActivitiesBanner" /* 11844 */;
import AppsBanerDefault from "AppsBaner" /* 11858 */;
import BotsBannerDefault from "BotsBanner" /* 11860 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx");

export default function AppLauncherOnboardingBanner(arg0) {
  ({ context, visibleContent } = arg0);
  if (DismissibleContent.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
    let obj = { context: null };
    obj[0] = context;
    return jsx(ActivitiesBannerDefault, { context: null });
  } else if (tmp(1372).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(AppsBanerDefault, {});
  } else if (tmp(1372).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    obj = { context: null };
    obj[0] = context;
    return jsx(BotsBannerDefault, { context: null });
  } else {
    return null;
  }
};