// discord_app/modules/messages/native/renderer/row_data/CtaButton.tsx
import useAgeVerificationRunner from "../../../../age_assurance/AgeVerificationUtils.tsx";
import CtaButtonType from "../../../CtaButtonUtils.tsx";
import closure_2 from "../../../../explicit_media_redaction/ExplicitMediaStore.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/CtaButton.tsx");

export const createCtaButton = function createCtaButton(id, channel_id, arg2) {
  let obj = CtaButtonType;
  const ctaButtonType = obj.getCtaButtonType(id, channel_id);
  obj1 = useAgeVerificationRunner;
  const isAgeVerifiedResult = obj1.isAgeVerified();
  const result = useAgeVerificationRunner.shouldShowTiggerPawtect();
  if (CtaButtonType.CtaButtonType.MARK_AS_FALSE_POSITIVE === ctaButtonType) {
    obj = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl3 = tmp(1236).intl;
    obj[0] = intl3.string(tmp(1236).t["4q1Elf"]);
    ({ reportFpTextColor: obj6[1], reportFpBackgroundColor: obj6[2] } = arg2);
    let prop;
    if (closure_2.canSubmitFpReport(id)) {
      prop = tmp(11135).CtaButtonType.MARK_AS_FALSE_POSITIVE;
    }
    obj[3] = prop;
    return obj;
  } else if (tmp(11135).CtaButtonType.AGE_VERIFICATION_RETRY === ctaButtonType) {
    const intl2 = tmp(1236).intl;
    const string = intl2.string;
    const t = tmp(1236).t;
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
      prop1 = tmp(11135).CtaButtonType.AGE_VERIFICATION_RETRY;
    }
    obj[3] = prop1;
    return obj;
  } else if (tmp(11135).CtaButtonType.CONNECT_TO_TEEN === ctaButtonType) {
    obj1 = { text: null, textColor: null, backgroundColor: null, callback: null };
    const intl = tmp(1236).intl;
    obj1[0] = intl.string(tmp(1236).t.n8a49k);
    ({ retryTextColor: obj4[1], retryBackgroundColor: obj4[2] } = arg2);
    obj1[3] = tmp(11135).CtaButtonType.CONNECT_TO_TEEN;
    return obj1;
  }
  const obj3 = useAgeVerificationRunner;
};