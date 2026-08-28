// === Module 17395: AgeUpdateFooter ===

// Module 17395 (AgeUpdateFooter)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2632 */;
import Text from "Text" /* 4442 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ text: { textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: callback().text, children: null };
  const intl = getSystemLocale.intl;
  obj = {
    handleAgeVerifyHook() {
      let obj = callback2(8628);
      obj = { entryPoint: callback(8630).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(messagesProxyDefault.ifObbX, obj);
  return jsx(Text.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(8628);
      obj = { entryPoint: callback(8630).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};