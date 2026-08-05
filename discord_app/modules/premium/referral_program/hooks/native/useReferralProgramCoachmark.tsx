// discord_app/modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function ReferralProgramCoachmarkImg() {
  const tmp = callback2();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  obj = { source: null, style: null };
  obj[0] = require("../../../../../../_runtime/15736_registerAsset.js");
  obj[1] = tmp.coachmarkImage;
  obj[1] = jsx(require("../../../../../components_native/common/FastImage.tsx"), { source: null, style: null });
  return <View source={null} style={null} />;
}
let closure_9 = createCacheKey.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 200, height: 112 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx");

export const useReferralProgramCoachmark = function useReferralProgramCoachmark(disabled) {
  disabled = disabled.disabled;
  let _require;
  let c1;
  let obj = _require("../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx");
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(_require("../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = _require("../useIsEligibleSenderForReferralProgram.tsx").useIsEligibleSenderForReferralProgram(result);
  _require("../../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx");
  if (isEligibleSenderForReferralProgram) {
    if (!disabled) {
      let items = [tmp(1358).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp8 = callback(tmp6(items), 2);
    _require = tmp9;
    const tmp10 = tmp8[0] === tmp(1358).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    c1 = tmp10;
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