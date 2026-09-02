// discord_app/modules/age_gate/native/components/AgeGateVerify.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import shouldShowAgeGateForVoiceChannel from "../../AgeGateUtils.tsx";
import useAgeVerificationRunner from "../../../age_assurance/AgeVerificationUtils.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import AccountAgeTier10LargeBadge from "../../../../design/assets/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, header: null, body: null, buttonWrapper: null };
createCacheKey = {
  padding: ThemesDefault.space.PX_16,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: ThemesDefault.space.PX_16,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { width: "100%" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default function AgeGateVerify(source) {
  source = source.source;
  const tmp = callback2();
  let obj = shouldShowAgeGateForVoiceChannel;
  const ageGateVerifyContent = obj.useAgeGateVerifyContent(source);
  ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  obj1 = useAgeVerificationRunner;
  const maybePerformReactiveCheckForSource = obj1.useMaybePerformReactiveCheckForSource(source);
  obj = { top: true, style: tmp.container, children: null };
  const items = [callback(AccountAgeTier10LargeBadge.ShieldSpotIllustration, {}), , ,];
  obj = {
    style: tmp.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: verifyTitle,
  };
  items[1] = callback(Text.Text, obj);
  obj1 = {
    style: tmp.body,
    variant: "text-md/medium",
    color: "interactive-text-default",
    children: verifyGateDescription,
  };
  items[2] = callback(Text.Text, obj1);
  let tmp7Result = null != verifyAgreementButtonText;
  if (tmp7Result) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.buttonWrapper;
    const obj3 = { text: null, onPress: null, grow: true };
    obj3[0] = verifyAgreementButtonText;
    obj3[1] = function onPress() {
      let obj = callback2(8697);
      obj = { entryPoint: callback(8699).AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    };
    obj2[1] = tmp7(Button.Button, obj3);
    tmp7Result = tmp7(View, obj2);
  }
  items[3] = tmp7Result;
  obj[2] = items;
  return closure_5(SafeAreaPaddingView.SafeAreaPaddingView, obj);
}
