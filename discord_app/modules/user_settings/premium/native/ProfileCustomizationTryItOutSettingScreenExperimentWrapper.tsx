// discord_app/modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreenExperimentWrapper.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import UserProfilePremiumTryItOutMobileRefreshExperiment from "../../../user_profile/experiments/UserProfilePremiumTryItOutMobileRefreshExperiment.tsx";
import ProfileCustomizationTryItOutV2SettingScreenDefault from "ProfileCustomizationTryItOutV2SettingScreen.tsx";
import ProfileCustomizationTryItOutSettingScreenDefault from "ProfileCustomizationTryItOutSettingScreen.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = UserProfilePremiumTryItOutMobileRefreshExperiment;
      if (obj2.useIsTryItOutMobileRefreshEnabled("ProfileCustomizationTryItOutSettingScreenExperimentWrapper")) {
        let first;
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp12 = jsx(ProfileCustomizationTryItOutV2SettingScreenDefault, {});
          cResult[0] = tmp12;
          first = tmp12;
        } else {
          first = cResult[0];
        }
        tmp4 = first;
      } else {
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp7 = jsx(ProfileCustomizationTryItOutSettingScreenDefault, {});
          cResult[1] = tmp7;
          tmp4 = tmp7;
        } else {
          tmp4 = cResult[1];
        }
      }
      return tmp4;
    }
  : () => {
      const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
      return jsx(
        importDefault(
          obj.useIsTryItOutMobileRefreshEnabled("ProfileCustomizationTryItOutSettingScreenExperimentWrapper")
            ? 15697
            : 15700,
        ),
        {},
      );
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreenExperimentWrapper.tsx",
);

export default tmp3;
