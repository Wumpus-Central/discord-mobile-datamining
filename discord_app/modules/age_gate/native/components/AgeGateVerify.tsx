// === Module 16152: AgeGateVerify ===

// Module 16152 (AgeGateVerify)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, header: null, body: null, buttonWrapper: null };
createCacheKey = { padding: require("Themes").space.PX_16, flex: 1, alignItems: "center", justifyContent: "center", gap: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { width: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("jsxProd").fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default function AgeGateVerify(source) {
  let verifyAgreementButtonText;
  let verifyGateDescription;
  let verifyTitle;
  source = source.source;
  const tmp = createCacheKey();
  let obj = require(4407) /* shouldShowAgeGateForVoiceChannel */;
  const ageGateVerifyContent = obj.useAgeGateVerifyContent(source);
  ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  let obj1 = require(4409) /* useAgeVerificationRunner */;
  const maybePerformReactiveCheckForSource = obj1.useMaybePerformReactiveCheckForSource(source);
  obj = { top: true, style: tmp.container, children: null };
  const items = [callback(require(6790) /* AccountAgeTier10LargeBadge */.ShieldSpotIllustration, {}), , , ];
  obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: verifyTitle };
  items[1] = callback(require(4189) /* Text */.Text, obj);
  obj1 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: verifyGateDescription };
  items[2] = callback(require(4189) /* Text */.Text, obj1);
  let tmp7Result = null != verifyAgreementButtonText;
  if (tmp7Result) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.buttonWrapper;
    const obj3 = { text: null, onPress: null, grow: true };
    obj3[0] = verifyAgreementButtonText;
    obj3[1] = function onPress() {
      let obj = callback2(6750);
      obj = { entryPoint: callback(6752).AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    };
    obj2[1] = tmp7(require(4604) /* Button */.Button, obj3);
    tmp7Result = tmp7(View, obj2);
  }
  items[3] = tmp7Result;
  obj[2] = items;
  return closure_5(require(5181) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};