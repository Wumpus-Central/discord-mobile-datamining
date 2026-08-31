// discord_app/modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx
import preloadDefault from "../../../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../../../_runtime/16334_registerAsset.js";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { UserSettingsSections } from "../../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import { UNSAFE_isDismissibleContentDismissed } from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import { useSelectedDismissibleContent } from "../../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";

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
  let obj = UNSAFE_isDismissibleContentDismissed;
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(require("../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = require("../useIsEligibleSenderForReferralProgram.tsx").useIsEligibleSenderForReferralProgram(result);
  useSelectedDismissibleContent;
  if (isEligibleSenderForReferralProgram) {
    if (!disabled) {
      let items = [tmp(1373).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp8 = callback(tmp6(items), 2);
    _require = tmp9;
    const tmp10 = tmp8[0] === tmp(1373).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
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