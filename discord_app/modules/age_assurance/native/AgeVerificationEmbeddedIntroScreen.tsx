// discord_app/modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../AgeAssurance.messages.js";
import useAgeVerificationMethodsDefault from "../hooks/useAgeVerificationMethods.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { HelpdeskArticles } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: { textAlign: "center" }, helpLink: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_16, textAlign: "center" };
createCacheKey[1] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx");

export default function AgeVerificationEmbeddedIntroScreen(arg0) {
  ({ entryPoint, navigation } = arg0);
  ({ onClose, modalSessionId, classificationId } = arg0);
  const tmp = callback3();
  let obj = navigation(8689);
  const items = [navigation];
  const isSuspendedUser = obj.useIsSuspendedUser();
  const callback = React.useCallback(() => {
    navigation.navigate(navigation(closure_1_2[6]).AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
  }, items);
  obj = { children: null };
  obj = { children: null };
  obj1 = { align: "center", justify: "center", spacing: 24, children: null };
  const obj2 = { align: "center", justify: "center", spacing: 16, children: null };
  const items1 = [callback(navigation(6256).ShieldSpotIllustration, { height: 100, width: 177 }), ];
  const obj3 = { align: "center", justify: "center", spacing: 8, children: null };
  const obj4 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  let obj7 = navigation(4733);
  obj4[3] = obj7.getAgeVerificationGetStartedTitle(entryPoint);
  const items2 = [callback(navigation(4474).Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", style: tmp.header, children: navigation(4733).getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser) };
  items2[1] = callback(navigation(4474).Text, obj5);
  obj3[3] = items2;
  items1[1] = callback2(navigation(4926).Stack, obj3);
  obj2[3] = items1;
  const items3 = [callback2(navigation(4926).Stack, obj2), callback(navigation(8734).AgeVerificationMethodsContainer, { ageVerificationMethods: useAgeVerificationMethodsDefault({ onClose, classificationId, onGoogleWalletSelect: callback }).ageVerificationMethods, modalSessionId })];
  obj1[3] = items3;
  const items4 = [callback2(navigation(4926).Stack, obj1), ];
  const obj6 = { variant: "text-xs/medium", color: "text-muted", style: tmp.helpLink, children: null };
  const intl = navigation(1236).intl;
  obj7 = {
    handleOnHelpUrlHook() {
      const obj = callback(8682);
      obj.openUrl(callback(1995).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  };
  obj6[3] = intl.format(messagesProxyDefault.lG69e1, obj7);
  items4[1] = callback(navigation(4474).Text, obj6);
  obj[0] = items4;
  obj[0] = callback2(navigation(8693).ModalContent, obj);
  return callback(navigation(8692).ModalScreen, obj);
};