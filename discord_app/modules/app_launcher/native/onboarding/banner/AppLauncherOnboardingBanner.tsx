// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ActivitiesBannerDefault from "ActivitiesBanner.tsx";
import AppsBannerDefault from "AppsBanner.tsx";
import BotsBannerDefault from "BotsBanner.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let context;
      let visibleContent;
      const obj = react2;
      const cResult = obj.c(5);
      ({ context, visibleContent } = arg0);
      if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
        let tmp14;
        if (cResult[0] !== context) {
          const tmp17 = jsx(ActivitiesBannerDefault, { context });
          cResult[0] = context;
          cResult[1] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[1];
        }
        return tmp14;
      } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
        let tmp10;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = jsx(AppsBannerDefault, {});
          cResult[2] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[2];
        }
        return tmp10;
      } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
        let tmp5;
        if (cResult[3] !== context) {
          const tmp8 = jsx(BotsBannerDefault, { context });
          cResult[3] = context;
          cResult[4] = tmp8;
          tmp5 = tmp8;
        } else {
          tmp5 = cResult[4];
        }
        return tmp5;
      } else {
        return null;
      }
    }
  : (arg0) => {
      let context;
      let visibleContent;
      ({ context, visibleContent } = arg0);
      if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
        return jsx(ActivitiesBannerDefault, { context });
      } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
        return jsx(AppsBannerDefault, {});
      } else if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
        return jsx(BotsBannerDefault, { context });
      } else {
        return null;
      }
    };
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx",
);

export default tmp3;
