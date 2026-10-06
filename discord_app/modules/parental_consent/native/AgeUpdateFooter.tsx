// discord_app/modules/parental_consent/native/AgeUpdateFooter.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import _modDef2815 from "../../safety_flows/SafetyFlows.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ text: { textAlign: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_4();
      const text = tmp4.text;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        let obj2 = {
          handleAgeVerifyHook() {
            const obj = AgeVerificationActionCreatorsDefault;
            const obj2 = {
              entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT,
            };
            return obj.showAgeVerificationGetStartedModal(obj2);
          },
        };
        const formatResult = intl.format(_modDef2815.ifObbX, obj2);
        cResult[0] = formatResult;
        first = formatResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.text) {
        const tmp10 = jsx(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          style: text,
          children: first,
        });
        cResult[1] = tmp4.text;
        cResult[2] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () => {
      closure_4();
      const Text = Text_Text.Text;
      const intl = intl2.intl;
      let obj2 = {
        handleAgeVerifyHook() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = {
            entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT,
          };
          return obj.showAgeVerificationGetStartedModal(obj2);
        },
      };
      return (
        <Text variant="text-md/medium" color="text-muted" style={closure_4().text}>
          {intl.format(_modDef2815.ifObbX, obj2)}
        </Text>
      );
    };
const result = size.fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default tmp3;
