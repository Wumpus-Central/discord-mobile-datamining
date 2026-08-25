// === Module 17226: AgeUpdateFooter ===

// Module 17226 (AgeUpdateFooter)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2599 */;
import Text from "Text" /* 4376 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ text: { textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: callback().text, children: null };
  const intl = getSystemLocale.intl;
  obj = {
    handleAgeVerifyHook() {
      let obj = callback2(7942);
      obj = { entryPoint: callback(7944).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(messagesProxyDefault.ifObbX, obj);
  return jsx(Text.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(7942);
      obj = { entryPoint: callback(7944).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};