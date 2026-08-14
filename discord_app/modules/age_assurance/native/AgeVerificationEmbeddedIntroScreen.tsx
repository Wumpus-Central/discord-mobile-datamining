// discord_app/modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx
import set from "set";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { messagesProxy } from "../AgeAssurance.messages.js";
import { useAgeVerificationMethods } from "../hooks/useAgeVerificationMethods.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: { textAlign: "center" }, helpLink: null };
createCacheKey = { marginTop: require("Themes").space.PX_16, textAlign: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx");

export default function AgeVerificationEmbeddedIntroScreen(arg0) {
  let classificationId;
  let entryPoint;
  let modalSessionId;
  let navigation;
  let onClose;
  ({ entryPoint, navigation } = arg0);
  ({ onClose, modalSessionId, classificationId } = arg0);
  const tmp = createCacheKey();
  let obj = navigation(7870);
  const items = [navigation];
  const isSuspendedUser = obj.useIsSuspendedUser();
  const callback = React.useCallback(() => {
    navigation.navigate(navigation(outer1_2[6]).AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
  }, items);
  obj = { children: null };
  obj = { children: null };
  const obj1 = { align: "center", justify: "center", spacing: 24, children: null };
  const obj2 = { align: "center", justify: "center", spacing: 16, children: null };
  const items1 = [callback(navigation(6091).ShieldSpotIllustration, { height: 100, width: 177 }), ];
  const obj3 = { align: "center", justify: "center", spacing: 8, children: null };
  const obj4 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  let obj7 = navigation(4582);
  obj4[3] = obj7.getAgeVerificationGetStartedTitle(entryPoint);
  const items2 = [callback(navigation(4338).Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", style: tmp.header, children: null };
  obj5[3] = navigation(4582).getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser);
  items2[1] = callback(navigation(4338).Text, obj5);
  obj3[3] = items2;
  items1[1] = callback2(navigation(4775).Stack, obj3);
  obj2[3] = items1;
  const items3 = [callback2(navigation(4775).Stack, obj2), callback(navigation(8027).AgeVerificationMethodsContainer, { ageVerificationMethods: useAgeVerificationMethods({ onClose, classificationId, onGoogleWalletSelect: callback }).ageVerificationMethods, modalSessionId })];
  obj1[3] = items3;
  const items4 = [callback2(navigation(4775).Stack, obj1), ];
  const obj6 = { variant: "text-xs/medium", color: "text-muted", style: tmp.helpLink, children: null };
  const intl = navigation(1236).intl;
  obj7 = {
    handleOnHelpUrlHook() {
      const obj = callback(7863);
      obj.openUrl(callback(1993).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  };
  obj6[3] = intl.format(messagesProxy.lG69e1, obj7);
  items4[1] = callback(navigation(4338).Text, obj6);
  obj[0] = items4;
  obj[0] = callback2(navigation(7874).ModalContent, obj);
  return callback(navigation(7873).ModalScreen, obj);
};