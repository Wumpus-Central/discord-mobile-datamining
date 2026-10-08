// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx
import c from "../../../../../../_runtime/00576_c.js";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ActivitiesBannerDefault from "ActivitiesBanner.tsx";
import AppsBannerDefault from "AppsBanner.tsx";
import BotsBannerDefault from "BotsBanner.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppLauncherOnboardingBanner(arg0) {
      const cResult = c.c(5);
      ({ context, visibleContent } = arg0);
      if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
        if (cResult[0] !== context) {
          const obj2 = { context };
          const tmp17 = jsx(ActivitiesBannerDefault, { context });
          cResult[0] = context;
          cResult[1] = tmp17;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[1];
        }
        return tmp14;
      } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = jsx(AppsBannerDefault, {});
          cResult[2] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[2];
        }
        return tmp10;
      } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
        if (cResult[3] !== context) {
          const obj3 = { context };
          const tmp8 = jsx(BotsBannerDefault, { context });
          cResult[3] = context;
          cResult[4] = tmp8;
          let tmp5 = tmp8;
        } else {
          tmp5 = cResult[4];
        }
        return tmp5;
      } else {
        return null;
      }
    }
  : function AppLauncherOnboardingBanner(arg0) {
      ({ context, visibleContent } = arg0);
      if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
        const obj2 = { context };
        return jsx(ActivitiesBannerDefault, { context });
      } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
        return jsx(AppsBannerDefault, {});
      } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
        const obj = { context };
        return jsx(BotsBannerDefault, { context });
      } else {
        return null;
      }
    };
