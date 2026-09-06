// === Module 13247: CtaButton ===

// Module 13247 (CtaButton)
import _modDef2978 from "module_2978" /* 2978 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import CtaButtonUtils from "CtaButtonUtils" /* 11911 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7293 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButtons = function createCtaButtons(id, channel_id, arg2) {
  let obj = CtaButtonUtils;
  const ctaButtonType = obj.getCtaButtonType(id, channel_id);
  let obj1 = AgeVerificationUtils;
  let obj2 = AgeVerificationUtils;
  const result = obj2.shouldShowTiggerPawtect();
  if (CtaButtonUtils.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    obj = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl4 = tmp(1114).intl;
    obj.text = intl4.string(tmp(1114).t["4q1Elf"]);
    ({ reportFpTextColor: obj10.textColor, reportFpBackgroundColor: obj10.backgroundColor } = arg2);
    let prop;
    if (ExplicitMediaStore.canSubmitFpReport(id)) {
      prop = tmp(11911).CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    obj = { ctaButton: null, callback: prop };
    obj.ctaButton = obj;
    return obj;
  } else if (tmp(11911).CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const intl2 = tmp(1114).intl;
    const string = intl2.string;
    const t = tmp(1114).t;
    if (isAgeVerifiedResult) {
      let stringResult = string(t["9KiIz6"]);
    } else {
      stringResult = string(t["/nicWo"]);
    }
    obj1 = { text: stringResult, textColor: null, backgroundColor: null, callback: null };
    ({ retryTextColor: obj6.textColor, retryBackgroundColor: obj6.backgroundColor } = arg2);
    let prop1;
    if (result) {
      prop1 = tmp(11911).CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    obj2 = { ctaButton: null, secondaryCtaButton: null };
    obj1.callback = prop1;
    obj2.ctaButton = obj1;
    let tmp8;
    if (tmpResult.isAgeVerificationMessageWithManualReviewCta(channel_id, id)) {
      const obj3 = { text: null, textColor: null, backgroundColor: null, callback: null };
      const intl3 = tmp(1114).intl;
      obj3.text = intl3.string(_modDef2978.Z61nkt);
      ({ reportFpTextColor: obj9.textColor, reportFpBackgroundColor: obj9.backgroundColor } = arg2);
      let prop2;
      if (result) {
        prop2 = tmp(11911).CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW;
      }
      obj3.callback = prop2;
      tmp8 = obj3;
    }
    obj2.secondaryCtaButton = tmp8;
    return obj2;
  } else if (tmp(11911).CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    const obj4 = { ctaButton: null };
    const obj5 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl = tmp(1114).intl;
    obj5.text = intl.string(tmp(1114).t.n8a49k);
    ({ retryTextColor: obj5.textColor, retryBackgroundColor: obj5.backgroundColor } = arg2);
    obj5.callback = tmp(11911).CtaButtonType.CONNECT_TO_TEEN;
    obj4.ctaButton = obj5;
    return obj4;
  } else {
    return {};
  }
  isAgeVerifiedResult = obj1.isAgeVerified();
};