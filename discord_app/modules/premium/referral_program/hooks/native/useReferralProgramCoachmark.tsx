// === Module 16281: ReferralProgramCoachmarkImg ===

// Module 16281 (ReferralProgramCoachmarkImg)
import preloadDefault from "preload" /* 5445 */;
import registerAssetDefault from "registerAsset" /* 16282 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
function ReferralProgramCoachmarkImg() {
  const tmp = callback2();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  obj = { source: registerAssetDefault, style: tmp.coachmarkImage };
  obj[1] = jsx(preloadDefault, { source: registerAssetDefault, style: tmp.coachmarkImage });
  return <View source={registerAssetDefault} style={tmp.coachmarkImage} />;
}
let closure_9 = createCacheKey.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 200, height: 112 } });
let result = require("set").fileFinishedImporting("modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx");

export const useReferralProgramCoachmark = function useReferralProgramCoachmark(disabled) {
  disabled = disabled.disabled;
  let _require;
  closure_1 = undefined;
  let obj = _require(4266);
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(_require(1377).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = _require(7897).useIsEligibleSenderForReferralProgram(result);
  _require(6203);
  if (isEligibleSenderForReferralProgram) {
    if (!disabled) {
      let items = [tmp(1377).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp8 = callback(tmp6(items), 2);
    _require = tmp9;
    const tmp10 = tmp8[0] === tmp(1377).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    closure_1 = tmp10;
    const items1 = [tmp10, tmp8[1]];
    let tmp13 = null;
    if (tmp10) {
      obj = { props: null };
      obj[0] = tmp12;
      tmp13 = obj;
    }
    return tmp13;
  }
  items = [];
};