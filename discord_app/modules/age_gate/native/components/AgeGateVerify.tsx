// discord_app/modules/age_gate/native/components/AgeGateVerify.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AgeGateUtils from "../../AgeGateUtils.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let source;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  container: obj2,
  header: { textAlign: "center" },
  body: { textAlign: "center" },
  buttonWrapper: { width: "100%" },
};
obj2 = {
  padding: nativeDefault.space.PX_16,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_16,
};
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (source) => {
      let first;
      let items;
      let obj5;
      let verifyAgreementButtonText;
      let verifyGateDescription;
      let verifyTitle;
      let obj = react2;
      const cResult = obj.c(15);
      source = source.source;
      const tmp4 = closure_6();
      let obj2 = AgeGateUtils;
      const ageGateVerifyContent = obj2.useAgeGateVerifyContent(source);
      ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp4.header) {
        let tmp7;
        if (cResult[2] === verifyTitle) {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp4.body) {
          let tmp9;
          if (cResult[5] === verifyGateDescription) {
            tmp9 = cResult[6];
          }
          if (cResult[7] === tmp4.buttonWrapper) {
            let tmp12;
            if (cResult[8] === verifyAgreementButtonText) {
              tmp12 = cResult[9];
            }
            if (cResult[10] === tmp4.container) {
              if (cResult[11] === tmp7) {
                if (cResult[12] === tmp9) {
                  let tmp17;
                  if (cResult[13] === tmp12) {
                    tmp17 = cResult[14];
                  }
                  return tmp17;
                }
              }
            }
            const obj3 = { top: true, style: tmp4.container, children: items };
            items = [tmp7, tmp9, tmp12];
            const tmp19 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj3);
            cResult[10] = tmp4.container;
            cResult[11] = tmp7;
            cResult[12] = tmp9;
            cResult[13] = tmp12;
            cResult[14] = tmp19;
            tmp17 = tmp19;
          }
          let tmp14 = null != verifyAgreementButtonText;
          if (tmp14) {
            const obj4 = { style: tmp4.buttonWrapper, children: React3(components_Button_Button.Button, obj5) };
            obj5 = { text: verifyAgreementButtonText, onPress: first, grow: true };
            tmp14 = React3(View, obj4);
          }
          cResult[7] = tmp4.buttonWrapper;
          cResult[8] = verifyAgreementButtonText;
          cResult[9] = tmp14;
          tmp12 = tmp14;
        }
        const obj6 = {
          style: tmp4.body,
          variant: "text-md/medium",
          color: "interactive-text-default",
          children: verifyGateDescription,
        };
        const tmp11 = React3(Text_Text.Text, obj6);
        cResult[4] = tmp4.body;
        cResult[5] = verifyGateDescription;
        cResult[6] = tmp11;
        tmp9 = tmp11;
      }
      const obj7 = {
        style: tmp4.header,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: verifyTitle,
      };
      const tmp8 = React3(Text_Text.Text, obj7);
      cResult[1] = tmp4.header;
      cResult[2] = verifyTitle;
      cResult[3] = tmp8;
      tmp7 = tmp8;
    }
  : (source) => {
      let items;
      let obj6;
      let verifyAgreementButtonText;
      let verifyGateDescription;
      let verifyTitle;
      source = source.source;
      const tmp = closure_6();
      let obj = AgeGateUtils;
      const ageGateVerifyContent = obj.useAgeGateVerifyContent(source);
      ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
      let obj2 = { top: true, style: tmp.container, children: items };
      const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
      items = [, ,];
      const obj3 = {
        style: tmp.header,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: verifyTitle,
      };
      items[0] = React3(Text_Text.Text, obj3);
      const obj4 = {
        style: tmp.body,
        variant: "text-md/medium",
        color: "interactive-text-default",
        children: verifyGateDescription,
      };
      items[1] = React3(Text_Text.Text, obj4);
      let tmp6Result = null != verifyAgreementButtonText;
      if (tmp6Result) {
        const obj5 = { style: tmp.buttonWrapper, children: React3(components_Button_Button.Button, obj6) };
        obj6 = {
          text: verifyAgreementButtonText,
          onPress() {
            const obj = AgeVerificationActionCreatorsDefault;
            const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
            const result = obj.showAgeVerificationGetStartedModal(obj2);
          },
          grow: true,
        };
        tmp6Result = React3(View, obj5);
      }
      items[2] = tmp6Result;
      return hasOwnProperty(SafeAreaPaddingView, obj2);
    };
let result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default tmp4;
