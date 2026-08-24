// === Module 16619: AgeGateVerify ===

// Module 16619 (AgeGateVerify)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4739 */;
import Button from "Button" /* 4750 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4997 */;
import shouldShowAgeGateForVoiceChannel from "shouldShowAgeGateForVoiceChannel" /* 5257 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 5452 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 6840 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, header: null, body: null, buttonWrapper: null };
createCacheKey = { padding: ThemesDefault.space.PX_16, flex: 1, alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_16 };
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
  const items = [callback(AccountAgeTier10LargeBadge.ShieldSpotIllustration, {}), , , ];
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: verifyTitle };
  items[1] = callback(Text.Text, obj);
  obj1 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: verifyGateDescription };
  items[2] = callback(Text.Text, obj1);
  let tmp7Result = null != verifyAgreementButtonText;
  if (tmp7Result) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.buttonWrapper;
    const obj3 = { text: null, onPress: null, grow: true };
    obj3[0] = verifyAgreementButtonText;
    obj3[1] = function onPress() {
      let obj = callback2(5433);
      obj = { entryPoint: callback(5259).AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    };
    obj2[1] = tmp7(Button.Button, obj3);
    tmp7Result = tmp7(View, obj2);
  }
  items[3] = tmp7Result;
  obj[2] = items;
  return closure_5(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};