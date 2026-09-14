// discord_app/modules/age_gate/native/components/AgeGateVerify.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AgeGateUtils from "../../AgeGateUtils.tsx";
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
const createStyles = fn(4636);
let obj2 = {
  container: {
    padding: nativeDefault.space.PX_16,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: nativeDefault.space.PX_16,
  },
  header: { textAlign: "center" },
  body: { textAlign: "center" },
  buttonWrapper: { width: "100%" },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default function AgeGateVerify(source) {
  const tmp = closure_6();
  const ageGateVerifyContent = AgeGateUtils.useAgeGateVerifyContent(source.source);
  ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  const obj2 = { top: true, style: tmp.container, children: null };
  const items = [
    React4(native.ShieldSpotIllustration, {}),
    React4(Text_Text.Text, {
      style: tmp.header,
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: verifyTitle,
    }),
    React4(Text_Text.Text, {
      style: tmp.body,
      variant: "text-md/medium",
      color: "interactive-text-default",
      children: verifyGateDescription,
    }),
  ];
  let tmp6Result = null != verifyAgreementButtonText;
  if (tmp6Result) {
    const obj5 = { style: tmp.buttonWrapper, children: null };
    const obj6 = {
      text: verifyAgreementButtonText,
      onPress() {
        const obj = AgeVerificationActionCreatorsDefault;
        const result = obj.showAgeVerificationGetStartedModal({
          entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE,
        });
      },
      grow: true,
    };
    obj5.children = React4(components_Button_Button.Button, obj6);
    tmp6Result = React4(View, obj5);
  }
  items[3] = tmp6Result;
  obj2.children = items;
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj2);
}
