// === Module 16991: useReferralProgramCoachmark ===

// Module 16991 (useReferralProgramCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import FastImageDefault from "FastImage" /* 5981 */;
import openUserSettings from "openUserSettings" /* 6895 */;
import AssetRegistryDefault from "AssetRegistry" /* 16992 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, disabled;

const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center" }, coachmarkImage: { width: 200, height: 112 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp3 = closure_9();
  if (cResult[0] !== tmp3.coachmarkImage) {
    FastImageDefault;
    const tmp8 = <tmp7 source={AssetRegistryDefault} style={tmp3.coachmarkImage} />;
    cResult[0] = tmp3.coachmarkImage;
    cResult[1] = tmp8;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3.coachmarkImageContainer) {
    let tmp9;
    if (cResult[3] === tmp4) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = <View style={tmp3.coachmarkImageContainer}>{tmp4}</View>;
  cResult[2] = tmp3.coachmarkImageContainer;
  cResult[3] = tmp4;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (() => {
  const tmp = closure_9();
  ({ source: AssetRegistryDefault, style: tmp.coachmarkImage });
  FastImageDefault;
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((disabled) => {
  let closure_0;
  let items;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(18);
  disabled = disabled.disabled;
  let obj2 = require("DismissibleContentUnsafeUtils");
  let result = obj2.useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  const useIsEligibleSenderForReferralProgram = require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram;
  require("useIsEligibleSenderForReferralProgram");
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram(result);
  if (cResult[0] === disabled) {
    let tmp14;
    let tmp13;
    let tmp18;
    if (cResult[1] === isEligibleSenderForReferralProgram) {
      tmp7 = cResult[2];
    }
    const tmpResult = require("useSelectedDismissibleContent");
    const tmp9 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp7), 2);
    _require = tmp11;
    const first = tmp9[0];
    const _Symbol = Symbol;
    const REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK = tmp(2036).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(require("intl").t.USo4s7);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(require("intl").t.zmcRl4);
      cResult[3] = stringResult;
      cResult[4] = stringResult1;
      tmp14 = stringResult1;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[3];
      tmp14 = cResult[4];
    }
    if (cResult[5] !== tmp9[1]) {
      class S {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      cResult[5] = tmp9[1];
      cResult[6] = S;
    } else {
      class S {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      const stringResult2 = obj4.string(require("intl").t.RzWDqY);
      cResult[7] = stringResult2;
      tmp18 = stringResult2;
    } else {
      class S {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[8] !== tmp9[1]) {
      class S {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      cResult[8] = tmp9[1];
      cResult[9] = tmp21;
    } else {
      class S {
        constructor() {
          tmp = closure_0(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor() {
          return closure_1_8(closure_1_10, {});
        }
      }
      cResult[10] = D;
    } else {
      class D {
        constructor() {
          return closure_1_8(closure_1_10, {});
        }
      }
    }
    if (cResult[11] === first === REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK) {
      class D {
        constructor() {
          return closure_1_8(closure_1_10, {});
        }
      }
    }
    cResult[11] = first === REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    cResult[12] = S;
    cResult[13] = tmp21;
    cResult[14] = { title: tmp13, description: tmp14, position: "top", offsetY: nativeDefault.space.PX_12, visible: first === REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK, onDismiss: S, buttonVariant: "experimental_premium-primary", buttonLabel: tmp18, onButtonPress: tmp21, renderImgComponent: D };
    const obj3 = { title: tmp13, description: tmp14, position: "top", offsetY: nativeDefault.space.PX_12, visible: first === REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK, onDismiss: S, buttonVariant: "experimental_premium-primary", buttonLabel: tmp18, onButtonPress: tmp21, renderImgComponent: D };
  }
  if (isEligibleSenderForReferralProgram) {
    class D {
      constructor() {
        return closure_1_8(closure_1_10, {});
      }
    }
    cResult[0] = disabled;
    cResult[1] = isEligibleSenderForReferralProgram;
    cResult[2] = items;
    tmp7 = items;
  }
  items = [];
}) : ((disabled) => {
  let closure_0;
  let constants2;
  disabled = disabled.disabled;
  _require = undefined;
  let visible;
  let obj = require("DismissibleContentUnsafeUtils");
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK);
  const useIsEligibleSenderForReferralProgram = require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram;
  require("useIsEligibleSenderForReferralProgram");
  if (!result) {
    result = disabled;
  }
  const isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram(result);
  require("useSelectedDismissibleContent");
  if (isEligibleSenderForReferralProgram) {
    let items;
    if (!disabled) {
      items = [tmp(2036).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
    }
    const tmp9 = _slicedToArray(tmp7(items), 2);
    _require = tmp10;
    const tmp11 = tmp9[0] === require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
    visible = tmp11;
    const items1 = [tmp11, tmp9[1]];
    let tmp14 = null;
    if (tmp11) {
      let obj2 = { props: tmp13 };
      tmp14 = obj2;
    }
    return tmp14;
  }
  items = [];
});
let result = size.fileFinishedImporting("modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx");

export const useReferralProgramCoachmark = tmp2;