// === Module 12845: createCtaButtons ===

// Module 12845 (createCtaButtons)
import messagesProxyDefault from "messagesProxy" /* 2920 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4699 */;
import CtaButtonType from "CtaButtonType" /* 11422 */;
import closure_3 from "getFpMessageInfo" /* 6104 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButtons = function createCtaButtons(id, channel_id, arg2) {
  let obj = CtaButtonType;
  const ctaButtonType = obj.getCtaButtonType(id, channel_id);
  obj1 = useAgeVerificationRunner;
  let obj2 = useAgeVerificationRunner;
  const result = obj2.shouldShowTiggerPawtect();
  if (CtaButtonType.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    obj = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl4 = tmp(1236).intl;
    obj[0] = intl4.string(tmp(1236).t["4q1Elf"]);
    ({ reportFpTextColor: obj10[1], reportFpBackgroundColor: obj10[2] } = arg2);
    let prop;
    if (closure_3.canSubmitFpReport(id)) {
      prop = tmp(11422).CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    obj = { ctaButton: null };
    obj[3] = prop;
    obj[0] = obj;
    return obj;
  } else if (tmp(11422).CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const intl2 = tmp(1236).intl;
    const string = intl2.string;
    const t = tmp(1236).t;
    if (isAgeVerifiedResult) {
      let stringResult = string(t["9KiIz6"]);
    } else {
      stringResult = string(t["/nicWo"]);
    }
    obj1 = { text: null, textColor: null, backgroundColor: null, callback: null };
    obj1[0] = stringResult;
    ({ retryTextColor: obj6[1], retryBackgroundColor: obj6[2] } = arg2);
    let prop1;
    if (result) {
      prop1 = tmp(11422).CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    obj2 = { ctaButton: null, secondaryCtaButton: null };
    obj1[3] = prop1;
    obj2[0] = obj1;
    let tmp8;
    if (tmpResult.isAgeVerificationMessageWithManualReviewCta(channel_id, id)) {
      const obj3 = { text: null, textColor: null, backgroundColor: null, callback: null };
      const intl3 = tmp(1236).intl;
      obj3[0] = intl3.string(messagesProxyDefault.Z61nkt);
      ({ reportFpTextColor: obj9[1], reportFpBackgroundColor: obj9[2] } = arg2);
      let prop2;
      if (result) {
        prop2 = tmp(11422).CtaButtonType.AGE_VERIFICATION_MANUAL_REVIEW;
      }
      obj3[3] = prop2;
      tmp8 = obj3;
    }
    obj2[1] = tmp8;
    return obj2;
  } else if (tmp(11422).CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    const obj4 = { ctaButton: null };
    const obj5 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl = tmp(1236).intl;
    obj5[0] = intl.string(tmp(1236).t.n8a49k);
    ({ retryTextColor: obj5[1], retryBackgroundColor: obj5[2] } = arg2);
    obj5[3] = tmp(11422).CtaButtonType.CONNECT_TO_TEEN;
    obj4[0] = obj5;
    return obj4;
  } else {
    return {};
  }
  isAgeVerifiedResult = obj1.isAgeVerified();
};