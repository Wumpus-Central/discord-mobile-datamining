// === Module 17311: AgeGateVerify ===

// Module 17311 (AgeGateVerify)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import AgeGateUtils from "AgeGateUtils" /* 4771 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import native from "native" /* 5692 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, body: null, buttonWrapper: null };
createStyles = { padding: nativeDefault.space.PX_16, flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.header = { textAlign: "center" };
createStyles.body = { textAlign: "center" };
createStyles.buttonWrapper = { width: "100%" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default function AgeGateVerify(source) {
  source = source.source;
  const tmp = closure_6();
  let obj = AgeGateUtils;
  const ageGateVerifyContent = obj.useAgeGateVerifyContent(source);
  ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  let obj1 = AgeVerificationUtils;
  const maybePerformReactiveCheckForSource = obj1.useMaybePerformReactiveCheckForSource(source);
  obj = { top: true, style: tmp.container, children: null };
  const items = [React4(native.ShieldSpotIllustration, {}), , , ];
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: verifyTitle };
  items[1] = React4(Text_Text.Text, obj);
  obj1 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: verifyGateDescription };
  items[2] = React4(Text_Text.Text, obj1);
  let tmp7Result = null != verifyAgreementButtonText;
  if (tmp7Result) {
    const obj2 = { style: tmp.buttonWrapper, children: null };
    const obj3 = {
      text: verifyAgreementButtonText,
      onPress() {
          const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
          const result = obj.showAgeVerificationGetStartedModal(obj);
        },
      grow: true
    };
    obj2.children = React4(components_Button_Button.Button, obj3);
    tmp7Result = React4(View, obj2);
  }
  items[3] = tmp7Result;
  obj.children = items;
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj);
};