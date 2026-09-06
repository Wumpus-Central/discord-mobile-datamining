// discord_app/modules/parental_consent/native/AgeUpdateFooter.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2690 from "../../safety_flows/SafetyFlows.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { variant: "text-md/medium", color: "text-muted", style: closure_4().text, children: null };
  const intl = util.intl;
  obj = {
    handleAgeVerifyHook() {
      const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    },
  };
  obj.children = intl.format(_modDef2690.ifObbX, obj);
  return jsx(Text_Text.Text, {
    handleAgeVerifyHook() {
      const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    },
  });
}
