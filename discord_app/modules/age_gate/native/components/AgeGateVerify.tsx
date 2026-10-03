// === Module 17426: AgeGateVerify ===

// Module 17426 (AgeGateVerify)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import AgeGateUtils from "AgeGateUtils" /* 5100 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { padding: nativeDefault.space.PX_16, flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 }, header: { textAlign: "center" }, body: { textAlign: "center" }, buttonWrapper: { width: "100%" } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16, flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
  const cResult = c.c(15);
  const tmp4 = closure_6();
  const ageGateVerifyContent = AgeGateUtils.useAgeGateVerifyContent(source.source);
  ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4.header) {
    if (cResult[2] === verifyTitle) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] === tmp4.body) {
      if (cResult[5] === verifyGateDescription) {
        let tmp9 = cResult[6];
      }
      if (cResult[7] === tmp4.buttonWrapper) {
        if (cResult[8] === verifyAgreementButtonText) {
          let tmp12 = cResult[9];
        }
        if (cResult[10] === tmp4.container) {
          if (cResult[11] === tmp7) {
            if (cResult[12] === tmp9) {
              if (cResult[13] === tmp12) {
                let tmp17 = cResult[14];
              }
              return tmp17;
            }
          }
        }
        const obj3 = { top: true, style: tmp4.container, children: null };
        const items = [tmp7, tmp9, tmp12];
        obj3.children = items;
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
        const obj4 = { style: tmp4.buttonWrapper, children: null };
        const obj5 = { text: verifyAgreementButtonText, onPress: first, grow: true };
        obj4.children = React4(components_Button_Button.Button, obj5);
        tmp14 = React4(View, obj4);
      }
      cResult[7] = tmp4.buttonWrapper;
      cResult[8] = verifyAgreementButtonText;
      cResult[9] = tmp14;
      tmp12 = tmp14;
    }
    const obj6 = { style: tmp4.body, variant: "text-md/medium", color: "interactive-text-default", children: verifyGateDescription };
    const tmp11 = React4(Text_Text.Text, obj6);
    cResult[4] = tmp4.body;
    cResult[5] = verifyGateDescription;
    cResult[6] = tmp11;
    tmp9 = tmp11;
  }
  const tmp8 = React4(Text_Text.Text, { style: tmp4.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: verifyTitle });
  cResult[1] = tmp4.header;
  cResult[2] = verifyTitle;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const obj7 = { style: tmp4.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: verifyTitle };
}) : ((source) => {
  const tmp = closure_6();
  const ageGateVerifyContent = AgeGateUtils.useAgeGateVerifyContent(source.source);
  ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  const obj2 = { top: true, style: tmp.container, children: null };
  const items = [React4(Text_Text.Text, { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: verifyTitle }), React4(Text_Text.Text, { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: verifyGateDescription }), ];
  let tmp6Result = null != verifyAgreementButtonText;
  if (tmp6Result) {
    const obj5 = { style: tmp.buttonWrapper, children: null };
    const obj6 = {
      text: verifyAgreementButtonText,
      onPress() {
          const obj = AgeVerificationActionCreatorsDefault;
          const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE });
        },
      grow: true
    };
    obj5.children = React4(components_Button_Button.Button, obj6);
    tmp6Result = React4(View, obj5);
  }
  items[2] = tmp6Result;
  obj2.children = items;
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj2);
});