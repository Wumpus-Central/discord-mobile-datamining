// discord_app/modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef16939 from "../../../../../../_runtime/metro/16939__.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function ReferralProgramCoachmarkImg() {
  const tmp = closure_9();
  const obj = { style: tmp.coachmarkImageContainer, children: null };
  const obj2 = { source: _modDef16939, style: tmp.coachmarkImage };
  obj.children = jsx(FastImageDefault, { source: _modDef16939, style: tmp.coachmarkImage });
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
}
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
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
  let result = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(
    require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK,
  );
  let obj = require("DismissibleContentUnsafeUtils");
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram =
    require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram(result);
  require("useSelectedDismissibleContent");
  if (isEligibleSenderForReferralProgram) {
    if (!disabled) {
      let items = [tmp(1944).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp8 = _slicedToArray(tmp6(items), 2);
    _require = tmp9;
    const tmp10 = tmp8[0] === tmp(1944).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
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
};
