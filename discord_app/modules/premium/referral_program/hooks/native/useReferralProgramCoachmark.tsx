// === Module 16786: useReferralProgramCoachmark ===

// Module 16786 (useReferralProgramCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import FastImageDefault from "FastImage" /* 5587 */;
import _modDef16787 from "module_16787" /* 16787 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
let closure_9 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 200, height: 112 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx");

export const useReferralProgramCoachmark = function useReferralProgramCoachmark(disabled) {
  disabled = disabled.disabled;
  _require = undefined;
  let visible;
  let obj = require("DismissibleContentUnsafeUtils");
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram(result);
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
};