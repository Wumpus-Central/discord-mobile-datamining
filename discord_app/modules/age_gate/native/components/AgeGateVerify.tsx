// discord_app/modules/age_gate/native/components/AgeGateVerify.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AgeGateUtils from "../../AgeGateUtils.tsx";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import native from "../../../../design/assets/native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, body: null, buttonWrapper: null };
createStyles = {
  padding: nativeDefault.space.PX_16,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_16,
};
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
  const items = [React4(native.ShieldSpotIllustration, {}), , ,];
  obj = {
    style: tmp.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: verifyTitle,
  };
  items[1] = React4(Text_Text.Text, obj);
  obj1 = {
    style: tmp.body,
    variant: "text-md/medium",
    color: "interactive-text-default",
    children: verifyGateDescription,
  };
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
      grow: true,
    };
    obj2.children = tmp7(components_Button_Button.Button, obj3);
    tmp7Result = tmp7(View, obj2);
  }
  items[3] = tmp7Result;
  obj.children = items;
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj);
}
