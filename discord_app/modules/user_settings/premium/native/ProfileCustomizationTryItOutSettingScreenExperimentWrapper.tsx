// === Module 16106: ProfileCustomizationTryItOutSettingScreenExperimentWrapper ===

// Module 16106 (ProfileCustomizationTryItOutSettingScreenExperimentWrapper)
import c from "c" /* 576 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 14782 */;
import ProfileCustomizationTryItOutV2SettingScreenDefault from "ProfileCustomizationTryItOutV2SettingScreen" /* 16107 */;
import ProfileCustomizationTryItOutSettingScreenDefault from "ProfileCustomizationTryItOutSettingScreen" /* 16110 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreenExperimentWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationTryItOutSettingScreenExperimentWrapper() {
  let tmp = dependencyMap;
  const cResult = c.c(2);
  if (obj2.useIsTryItOutMobileRefreshEnabled("ProfileCustomizationTryItOutSettingScreenExperimentWrapper")) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      tmp = jsx(ProfileCustomizationTryItOutV2SettingScreenDefault, {});
      cResult[0] = tmp;
      let first = tmp;
    } else {
      first = cResult[0];
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp7 = jsx(ProfileCustomizationTryItOutSettingScreenDefault, {});
      cResult[1] = tmp7;
      let tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    return tmp4;
  }
  obj2 = UserProfilePremiumTryItOutMobileRefreshExperiment;
}) : (function ProfileCustomizationTryItOutSettingScreenExperimentWrapper() {
  return jsx(importDefault(UserProfilePremiumTryItOutMobileRefreshExperiment.useIsTryItOutMobileRefreshEnabled("ProfileCustomizationTryItOutSettingScreenExperimentWrapper") ? 16107 : 16110), {});
});