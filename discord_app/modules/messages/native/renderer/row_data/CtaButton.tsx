// discord_app/modules/messages/native/renderer/row_data/CtaButton.tsx
import util from "../../../../../intl/index.native.tsx";
import _modDef2978 from "../../../../age_assurance/ManualReview.messages.js";
import AgeVerificationUtils from "../../../../age_assurance/AgeVerificationUtils.tsx";
import CtaButtonUtils from "../../../CtaButtonUtils.tsx";
import ExplicitMediaStore from "../../../../explicit_media_redaction/ExplicitMediaStore.tsx";

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
    const intl4 = util.intl;
    obj.text = intl4.string(util.t["4q1Elf"]);
    ({ reportFpTextColor: obj10.textColor, reportFpBackgroundColor: obj10.backgroundColor } = arg2);
    let prop;
    if (ExplicitMediaStore.canSubmitFpReport(id)) {
      prop = CtaButtonUtils.CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    obj = { ctaButton: null, callback: prop };
    obj.ctaButton = obj;
    return obj;
  } else if (CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const intl2 = util.intl;
    const string = intl2.string;
    const t = util.t;
    if (isAgeVerifiedResult) {
      let stringResult = string(t["9KiIz6"]);
    } else {
      stringResult = string(t["/nicWo"]);
    }
    obj1 = { text: stringResult, textColor: null, backgroundColor: null, callback: null };
    ({ retryTextColor: obj6.textColor, retryBackgroundColor: obj6.backgroundColor } = arg2);
    let prop1;
    if (result) {
      prop1 = CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    obj2 = { ctaButton: null, secondaryCtaButton: null };
    obj1.callback = prop1;
    obj2.ctaButton = obj1;
    let tmp8;
    if (tmpResult.isAgeVerificationMessageWithManualReviewCta(channel_id, id)) {
      const obj3 = { text: null, textColor: null, backgroundColor: null, callback: null };
      const intl3 = util.intl;
      obj3.text = intl3.string(_modDef2978.Z61nkt);
      ({ reportFpTextColor: obj9.textColor, reportFpBackgroundColor: obj9.backgroundColor } = arg2);
      let prop2;
      if (result) {
        prop2 = CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW;
      }
      obj3.callback = prop2;
      tmp8 = obj3;
    }
    obj2.secondaryCtaButton = tmp8;
    return obj2;
  } else if (CtaButtonUtils.CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    const obj4 = { ctaButton: null };
    const obj5 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl = util.intl;
    obj5.text = intl.string(util.t.n8a49k);
    ({ retryTextColor: obj5.textColor, retryBackgroundColor: obj5.backgroundColor } = arg2);
    obj5.callback = CtaButtonUtils.CtaButtonType.CONNECT_TO_TEEN;
    obj4.ctaButton = obj5;
    return obj4;
  } else {
    return {};
  }
  isAgeVerifiedResult = obj1.isAgeVerified();
};
