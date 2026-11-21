// === Module 18898: useReferralProgramCoachmark ===

// Module 18898 (useReferralProgramCoachmark)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import FastImageDefault from "FastImage" /* 5600 */;
import _modDef18899 from "module_18899" /* 18899 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function ReferralProgramCoachmarkImg() {
  const tmp = closure_9();
  const obj = { style: tmp.coachmarkImageContainer, children: null };
  const obj2 = { source: _modDef18899, style: tmp.coachmarkImage };
  obj.children = jsx(FastImageDefault, { source: _modDef18899, style: tmp.coachmarkImage });
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
}
const View = fn(17).View;
const UserSettingsSections = fn(1071).UserSettingsSections;
const ContentDismissActionType = fn(4759).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4913);
let closure_9 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 200, height: 112 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx");

export function useReferralProgramCoachmark(disabled) {
  disabled = disabled.disabled;
  _require = undefined;
  let visible;
  let result = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  let obj = require("DismissibleContentUnsafeUtils");
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram(result);
  require("useSelectedDismissibleContent");
  if (isEligibleSenderForReferralProgram) {
    if (!disabled) {
      items = [tmp(4746).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp8 = _slicedToArray(tmp6(items), 2);
    _require = tmp9;
    const tmp10 = tmp8[0] === tmp(4746).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    visible = tmp10;
    const items1 = [tmp10, tmp8[1]];
    let tmp13 = null;
    if (tmp10) {
      const obj3 = { props: tmp12 };
      tmp13 = obj3;
    }
    return tmp13;
  }
  items = [];
  const obj2 = require("useIsEligibleSenderForReferralProgram");
}