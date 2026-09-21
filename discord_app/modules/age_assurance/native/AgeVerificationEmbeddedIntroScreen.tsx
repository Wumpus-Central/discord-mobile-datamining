// === Module 8858: AgeVerificationEmbeddedIntroScreen ===

// Module 8858 (AgeVerificationEmbeddedIntroScreen)
import nativeDefault from "native" /* 576 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import _modDef3034 from "module_3034" /* 3034 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8682 */;
import AgeVerificationGetStartedModal from "AgeVerificationGetStartedModal" /* 8851 */;
import useAgeVerificationMethodsDefault from "useAgeVerificationMethods" /* 8859 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = { header: { textAlign: "center" }, helpLink: { marginTop: nativeDefault.space.PX_16, textAlign: "center" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx");

export default function AgeVerificationEmbeddedIntroScreen(arg0) {
  ({ entryPoint, navigation } = arg0);
  ({ onClose, modalSessionId, classificationId } = arg0);
  const tmp = closure_7();
  const items = [navigation];
  const isSuspendedUser = navigation(8690).useIsSuspendedUser();
  const callback = noop.useCallback(() => {
    navigation.navigate(AgeVerificationGetStartedModal.AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
  }, items);
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { align: "center", justify: "center", spacing: 24, children: null };
  const obj5 = { align: "center", justify: "center", spacing: 16, children: null };
  const items1 = [closure_5(navigation(5909).ShieldSpotIllustration, { height: 100, width: 177 }), ];
  const obj6 = { align: "center", justify: "center", spacing: 8, children: null };
  const obj7 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  let obj = navigation(8690);
  obj7.children = navigation(4968).getAgeVerificationGetStartedTitle(entryPoint);
  const items2 = [closure_5(navigation(4752).Text, obj7), ];
  const obj9 = { variant: "text-md/medium", color: "text-strong", style: tmp.header, children: null };
  const obj8 = navigation(4968);
  obj9.children = navigation(4968).getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser);
  items2[1] = closure_5(navigation(4752).Text, obj9);
  obj6.children = items2;
  items1[1] = closure_6(navigation(5184).Stack, obj6);
  obj5.children = items1;
  const items3 = [closure_6(navigation(5184).Stack, obj5), closure_5(navigation(8861).AgeVerificationMethodsContainer, { ageVerificationMethods: useAgeVerificationMethodsDefault({ onClose, classificationId, onGoogleWalletSelect: callback }).ageVerificationMethods, modalSessionId })];
  obj4.children = items3;
  const items4 = [closure_6(navigation(5184).Stack, obj4), ];
  const obj11 = { variant: "text-xs/medium", color: "text-muted", style: tmp.helpLink, children: null };
  const intl = navigation(1115).intl;
  obj11.children = intl.format(_modDef3034.lG69e1, {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  });
  items4[1] = closure_5(navigation(4752).Text, obj11);
  obj3.children = items4;
  obj2.children = closure_6(navigation(8694).ModalContent, obj3);
  return closure_5(navigation(8693).ModalScreen, obj2);
};