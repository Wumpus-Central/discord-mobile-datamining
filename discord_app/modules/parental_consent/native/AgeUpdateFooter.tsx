// === Module 17101: AgeUpdateFooter ===

// Module 17101 (AgeUpdateFooter)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2597 */;
import Text from "Text" /* 4734 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ text: { textAlign: "center" } });
const result = require("obj132").fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  { variant: "text-md/medium", color: "text-muted", style: callback().text, children: null };
  const intl = getSystemLocale.intl;
  let obj = {
    handleAgeVerifyHook() {
      callback2(5428);
      const obj = { entryPoint: callback(5254).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(messagesProxyDefault.ifObbX, obj);
  return jsx(Text.Text, {
    handleAgeVerifyHook() {
      callback2(5428);
      const obj = { entryPoint: callback(5254).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};