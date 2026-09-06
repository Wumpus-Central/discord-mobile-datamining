// discord_app/modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef16787 from "../../../../../../_runtime/metro/16787__.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function ReferralProgramCoachmarkImg() {
  const tmp = closure_9();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  obj = { source: _modDef16787, style: tmp.coachmarkImage };
  obj.children = jsx(FastImageDefault, { source: _modDef16787, style: tmp.coachmarkImage });
  return <View source={_modDef16787} style={tmp.coachmarkImage} />;
}
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({
  coachmarkImageContainer: { alignItems: "center", justifyContent: "center" },
  coachmarkImage: { width: 200, height: 112 },
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx",
);

export const useReferralProgramCoachmark = function useReferralProgramCoachmark(disabled) {
  disabled = disabled.disabled;
  _require = undefined;
  let visible;
  let obj = require("DismissibleContentUnsafeUtils");
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(
    require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK,
  );
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram =
    require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram(result);
  require("useSelectedDismissibleContent");
  if (isEligibleSenderForReferralProgram) {
    if (!disabled) {
      let items = [tmp(1943).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp8 = _slicedToArray(tmp6(items), 2);
    _require = tmp9;
    const tmp10 = tmp8[0] === tmp(1943).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    visible = tmp10;
    const items1 = [tmp10, tmp8[1]];
    let tmp13 = null;
    if (tmp10) {
      obj = { props: tmp12 };
      tmp13 = obj;
    }
    return tmp13;
  }
  items = [];
  const obj2 = require("useIsEligibleSenderForReferralProgram");
};
