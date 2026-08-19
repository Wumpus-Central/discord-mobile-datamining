// discord_app/modules/messages/native/renderer/row_data/CtaButton.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import useAgeVerificationRunner from "../../../../age_assurance/AgeVerificationUtils.tsx";
import CtaButtonType from "../../../CtaButtonUtils.tsx";
import getFpMessageInfo from "../../../../explicit_media_redaction/ExplicitMediaStore.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButton = function createCtaButton(id, channel_id, arg2) {
  let obj = CtaButtonType;
  const ctaButtonType = obj.getCtaButtonType(id, channel_id);
  obj1 = useAgeVerificationRunner;
  const isAgeVerifiedResult = obj1.isAgeVerified();
  const result = useAgeVerificationRunner.shouldShowTiggerPawtect();
  if (CtaButtonType.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    obj = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl3 = getSystemLocale.intl;
    obj[0] = intl3.string(getSystemLocale.t["4q1Elf"]);
    ({ reportFpTextColor: obj6[1], reportFpBackgroundColor: obj6[2] } = arg2);
    let prop;
    if (closure_2.canSubmitFpReport(id)) {
      prop = CtaButtonType.CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    obj[3] = prop;
    return obj;
  } else if (CtaButtonType.CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const intl2 = getSystemLocale.intl;
    const string = intl2.string;
    const t = getSystemLocale.t;
    if (isAgeVerifiedResult) {
      let stringResult = string(t["9KiIz6"]);
    } else {
      stringResult = string(t["/nicWo"]);
    }
    obj = { text: null, textColor: null, backgroundColor: null, callback: null };
    obj[0] = stringResult;
    ({ retryTextColor: obj5[1], retryBackgroundColor: obj5[2] } = arg2);
    let prop1;
    if (result) {
      prop1 = CtaButtonType.CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    obj[3] = prop1;
    return obj;
  } else if (CtaButtonType.CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    obj1 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl = getSystemLocale.intl;
    obj1[0] = intl.string(getSystemLocale.t.n8a49k);
    ({ retryTextColor: obj4[1], retryBackgroundColor: obj4[2] } = arg2);
    obj1[3] = CtaButtonType.CtaButtonType.CONNECT_TO_TEEN;
    return obj1;
  }
};