// === Module 13549: CtaButton ===

// Module 13549 (CtaButton)
import util from "util" /* 1115 */;
import _modDef3066 from "module_3066" /* 3066 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4968 */;
import CtaButtonUtils from "CtaButtonUtils" /* 12164 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7533 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButtons = function createCtaButtons(id, channel_id, arg2) {
  const ctaButtonType = CtaButtonUtils.getCtaButtonType(id, channel_id);
  const isAgeVerifiedResult = AgeVerificationUtils.isAgeVerified();
  const result = AgeVerificationUtils.shouldShowTiggerPawtect();
  if (CtaButtonUtils.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    const obj4 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl4 = util.intl;
    obj4.text = intl4.string(util.t["4q1Elf"]);
    ({ reportFpTextColor: obj10.textColor, reportFpBackgroundColor: obj10.backgroundColor } = arg2);
    let prop;
    if (ExplicitMediaStore.canSubmitFpReport(id)) {
      prop = CtaButtonUtils.CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    const obj7 = { ctaButton: null };
    obj4.callback = prop;
    obj7.ctaButton = obj4;
    return obj7;
  } else if (CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const intl2 = util.intl;
    const string = intl2.string;
    const t = util.t;
    if (isAgeVerifiedResult) {
      let stringResult = string(t["9KiIz6"]);
    } else {
      stringResult = string(t["/nicWo"]);
    }
    const obj8 = { text: stringResult, textColor: null, backgroundColor: null, callback: null };
    ({ retryTextColor: obj6.textColor, retryBackgroundColor: obj6.backgroundColor } = arg2);
    let prop1;
    if (result) {
      prop1 = CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    const obj11 = { ctaButton: null, secondaryCtaButton: null };
    obj8.callback = prop1;
    obj11.ctaButton = obj8;
    let tmp8;
    if (tmpResult.isAgeVerificationMessageWithManualReviewCta(channel_id, id)) {
      const obj18 = { text: null, textColor: null, backgroundColor: null, callback: null };
      const intl3 = util.intl;
      obj18.text = intl3.string(_modDef3066.Z61nkt);
      ({ reportFpTextColor: obj9.textColor, reportFpBackgroundColor: obj9.backgroundColor } = arg2);
      let prop2;
      if (result) {
        prop2 = CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW;
      }
      obj18.callback = prop2;
      tmp8 = obj18;
    }
    obj11.secondaryCtaButton = tmp8;
    return obj11;
  } else if (CtaButtonUtils.CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    const obj19 = { ctaButton: null };
    const obj20 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl = util.intl;
    obj20.text = intl.string(util.t.n8a49k);
    ({ retryTextColor: obj5.textColor, retryBackgroundColor: obj5.backgroundColor } = arg2);
    obj20.callback = CtaButtonUtils.CtaButtonType.CONNECT_TO_TEEN;
    obj19.ctaButton = obj20;
    return obj19;
  } else {
    return {};
  }
};