// discord_app/modules/parental_consent/native/AgeUpdateFooter.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../../safety_flows/SafetyFlows.messages.js";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ text: { textAlign: "center" } });
const result = require("createCacheKey").fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: callback().text, children: null };
  const intl = getSystemLocale.intl;
  obj = {
    handleAgeVerifyHook() {
      let obj = callback2(7838);
      obj = { entryPoint: callback(7840).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj[3] = intl.format(messagesProxy.ifObbX, obj);
  return jsx(Text.Text, {
    handleAgeVerifyHook() {
      let obj = callback2(7838);
      obj = { entryPoint: callback(7840).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  });
};