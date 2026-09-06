// discord_app/modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef2946 from "../AgeAssurance.messages.js";
import AgeVerificationActionCreatorsDefault from "../AgeVerificationActionCreators.native.tsx";
import AgeVerificationGetStartedModal from "AgeVerificationGetStartedModal.tsx";
import useAgeVerificationMethodsDefault from "../hooks/useAgeVerificationMethods.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { header: { textAlign: "center" }, helpLink: null };
createStyles = { marginTop: nativeDefault.space.PX_16, textAlign: "center" };
createStyles.helpLink = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx");

export default function AgeVerificationEmbeddedIntroScreen(arg0) {
  ({ entryPoint, navigation } = arg0);
  ({ onClose, modalSessionId, classificationId } = arg0);
  const tmp = closure_7();
  let obj = navigation(8418);
  const items = [navigation];
  const isSuspendedUser = obj.useIsSuspendedUser();
  const callback = noop.useCallback(() => {
    navigation.navigate(AgeVerificationGetStartedModal.AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
  }, items);
  obj = { children: null };
  obj = { children: null };
  const obj1 = { align: "center", justify: "center", spacing: 24, children: null };
  const obj2 = { align: "center", justify: "center", spacing: 16, children: null };
  const items1 = [closure_5(navigation(5692).ShieldSpotIllustration, { height: 100, width: 177 })];
  const obj3 = { align: "center", justify: "center", spacing: 8, children: null };
  const obj4 = {
    accessibilityRole: "header",
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  let obj7 = navigation(4773);
  obj4.children = obj7.getAgeVerificationGetStartedTitle(entryPoint);
  const items2 = [closure_5(navigation(4556).Text, obj4)];
  const obj5 = {
    variant: "text-md/medium",
    color: "text-strong",
    style: tmp.header,
    children: navigation(4773).getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser),
  };
  items2[1] = closure_5(navigation(4556).Text, obj5);
  obj3.children = items2;
  items1[1] = closure_6(navigation(4973).Stack, obj3);
  obj2.children = items1;
  const items3 = [
    closure_6(navigation(4973).Stack, obj2),
    closure_5(navigation(8586).AgeVerificationMethodsContainer, {
      ageVerificationMethods: useAgeVerificationMethodsDefault({
        onClose,
        classificationId,
        onGoogleWalletSelect: callback,
      }).ageVerificationMethods,
      modalSessionId,
    }),
  ];
  obj1.children = items3;
  const items4 = [closure_6(navigation(4973).Stack, obj1)];
  const obj6 = { variant: "text-xs/medium", color: "text-muted", style: tmp.helpLink, children: null };
  const intl = navigation(1114).intl;
  obj7 = {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    },
  };
  obj6.children = intl.format(_modDef2946.lG69e1, obj7);
  items4[1] = closure_5(navigation(4556).Text, obj6);
  obj.children = items4;
  obj.children = closure_6(navigation(8422).ModalContent, obj);
  return closure_5(navigation(8421).ModalScreen, obj);
}
