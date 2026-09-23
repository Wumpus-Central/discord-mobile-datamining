// discord_app/modules/messages/native/renderer/row_data/CtaButton.tsx
import util from "../../../../../intl/index.native.tsx";
import _modDef3100 from "../../../../age_assurance/ManualReview.messages.js";
import AgeVerificationUtils from "../../../../age_assurance/AgeVerificationUtils.tsx";
import CtaButtonUtils from "../../../CtaButtonUtils.tsx";
import ExplicitMediaStore from "../../../../explicit_media_redaction/ExplicitMediaStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButtons = function createCtaButtons(id, channel_id, arg2) {
  const ctaButtonType = CtaButtonUtils.getCtaButtonType(id, channel_id);
  const result = AgeVerificationUtils.shouldShowTiggerPawtect();
  if (CtaButtonUtils.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    const obj3 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl4 = util.intl;
    obj3.text = intl4.string(util.t["4q1Elf"]);
    ({ reportFpTextColor: obj9.textColor, reportFpBackgroundColor: obj9.backgroundColor } = arg2);
    let prop;
    if (ExplicitMediaStore.canSubmitFpReport(id)) {
      prop = CtaButtonUtils.CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    const obj6 = { ctaButton: null };
    obj3.callback = prop;
    obj6.ctaButton = obj3;
    return obj6;
  } else if (CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const obj7 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl2 = util.intl;
    obj7.text = intl2.string(util.t["/nicWo"]);
    ({ retryTextColor: obj5.textColor, retryBackgroundColor: obj5.backgroundColor } = arg2);
    let prop1;
    if (result) {
      prop1 = CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    const obj10 = { ctaButton: null, secondaryCtaButton: null };
    obj7.callback = prop1;
    obj10.ctaButton = obj7;
    let tmp6;
    if (tmpResult.isAgeVerificationMessageWithManualReviewCta(channel_id, id)) {
      const obj17 = { text: null, textColor: null, backgroundColor: null, callback: null };
      const intl3 = util.intl;
      obj17.text = intl3.string(_modDef3100.Z61nkt);
      ({ reportFpTextColor: obj8.textColor, reportFpBackgroundColor: obj8.backgroundColor } = arg2);
      let prop2;
      if (result) {
        prop2 = CtaButtonUtils.CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW;
      }
      obj17.callback = prop2;
      tmp6 = obj17;
    }
    obj10.secondaryCtaButton = tmp6;
    return obj10;
  } else if (CtaButtonUtils.CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    const obj18 = { ctaButton: null };
    const obj19 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl = util.intl;
    obj19.text = intl.string(util.t.n8a49k);
    ({ retryTextColor: obj4.textColor, retryBackgroundColor: obj4.backgroundColor } = arg2);
    obj19.callback = CtaButtonUtils.CtaButtonType.CONNECT_TO_TEEN;
    obj18.ctaButton = obj19;
    return obj18;
  } else {
    return {};
  }
};
