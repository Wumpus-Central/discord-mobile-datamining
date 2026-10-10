// === Module 7708: AgeVerificationEmbeddedIntroScreen ===

// Module 7708 (AgeVerificationEmbeddedIntroScreen)
import nativeDefault from "native" /* 587 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2128 */;
import _modDef3120 from "module_3120" /* 3120 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import AgeVerificationGetStartedModal from "AgeVerificationGetStartedModal" /* 7701 */;
import useAgeVerificationMethodsDefault from "useAgeVerificationMethods" /* 7709 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { header: { textAlign: "center" }, helpLink: { marginTop: nativeDefault.space.PX_16, textAlign: "center" } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_16, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AgeVerificationEmbeddedIntroScreen(arg0) {
  const cResult = navigation(576).c(32);
  ({ onClose, modalSessionId, classificationId, entryPoint, navigation } = arg0);
  const tmp4 = closure_7();
  let obj = navigation(576);
  const isSuspendedUser = navigation(7511).useIsSuspendedUser();
  if (cResult[0] !== navigation) {
    const fn = function l() {
      navigation.navigate(AgeVerificationGetStartedModal.AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === classificationId) {
    if (cResult[3] === onClose) {
      if (cResult[4] === tmp6) {
        let tmp7 = cResult[5];
      }
      const ageVerificationMethods = useAgeVerificationMethodsDefault(tmp7).ageVerificationMethods;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = closure_5(navigation(7516).ShieldSpotIllustration, { height: 100, width: 177 });
        cResult[6] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== entryPoint) {
        const ageVerificationGetStartedTitle = navigation(5909).getAgeVerificationGetStartedTitle(entryPoint);
        cResult[7] = entryPoint;
        cResult[8] = ageVerificationGetStartedTitle;
        let tmp13 = ageVerificationGetStartedTitle;
        const tmpResult = navigation(5909);
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] !== tmp13) {
        const obj3 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp13 };
        const tmp17 = closure_5(navigation(5088).Text, obj3);
        cResult[9] = tmp13;
        cResult[10] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[10];
      }
      if (cResult[11] === entryPoint) {
        if (cResult[12] === isSuspendedUser) {
          let tmp19 = cResult[13];
        }
        if (cResult[14] === tmp4.header) {
          if (cResult[15] === tmp19) {
            let tmp21 = cResult[16];
          }
          if (cResult[17] === tmp15) {
            if (cResult[18] === tmp21) {
              let tmp24 = cResult[19];
            }
            if (cResult[20] === ageVerificationMethods) {
              if (cResult[21] === modalSessionId) {
                let tmp27 = cResult[22];
              }
              if (cResult[23] === tmp27) {
                if (cResult[24] === tmp24) {
                  let tmp30 = cResult[25];
                }
                const _Symbol2 = Symbol;
                if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = navigation(1126).intl;
                  const obj4 = {
                    handleOnHelpUrlHook() {
                                      const obj = AgeVerificationActionCreatorsDefault;
                                      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
                                    }
                  };
                  const formatResult = intl.format(_modDef3120.lG69e1, obj4);
                  cResult[26] = formatResult;
                  let tmp33 = formatResult;
                } else {
                  tmp33 = cResult[26];
                }
                if (cResult[27] !== tmp4.helpLink) {
                  const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.helpLink, children: tmp33 };
                  const tmp37 = closure_5(navigation(5088).Text, obj5);
                  cResult[27] = tmp4.helpLink;
                  cResult[28] = tmp37;
                  let tmp35 = tmp37;
                } else {
                  tmp35 = cResult[28];
                }
                if (cResult[29] === tmp30) {
                  if (cResult[30] === tmp35) {
                    let tmp38 = cResult[31];
                  }
                  return tmp38;
                }
                const obj6 = { children: null };
                const obj7 = { children: null };
                const items = [tmp30, tmp35];
                obj7.children = items;
                obj6.children = closure_6(navigation(7515).ModalContent, obj7);
                const tmp41 = closure_5(navigation(7514).ModalScreen, obj6);
                cResult[29] = tmp30;
                cResult[30] = tmp35;
                cResult[31] = tmp41;
                tmp38 = tmp41;
              }
              const obj8 = { align: "center", justify: "center", spacing: 24, children: null };
              const items1 = [tmp24, tmp27];
              obj8.children = items1;
              const tmp32 = closure_6(navigation(5377).Stack, obj8);
              cResult[23] = tmp27;
              cResult[24] = tmp24;
              cResult[25] = tmp32;
              tmp30 = tmp32;
            }
            const obj9 = { ageVerificationMethods, modalSessionId };
            const tmp29 = closure_5(navigation(7711).AgeVerificationMethodsContainer, obj9);
            cResult[20] = ageVerificationMethods;
            cResult[21] = modalSessionId;
            cResult[22] = tmp29;
            tmp27 = tmp29;
          }
          const obj10 = { align: "center", justify: "center", spacing: 16, children: null };
          const items2 = [tmp10, ];
          const obj11 = { align: "center", justify: "center", spacing: 8, children: null };
          const items3 = [tmp15, tmp21];
          obj11.children = items3;
          items2[1] = closure_6(navigation(5377).Stack, obj11);
          obj10.children = items2;
          const tmp26 = closure_6(navigation(5377).Stack, obj10);
          cResult[17] = tmp15;
          cResult[18] = tmp21;
          cResult[19] = tmp26;
          tmp24 = tmp26;
        }
        const obj12 = { variant: "text-md/medium", color: "text-strong", style: tmp18, children: tmp19 };
        const tmp23 = closure_5(navigation(5088).Text, obj12);
        cResult[14] = tmp4.header;
        cResult[15] = tmp19;
        cResult[16] = tmp23;
        tmp21 = tmp23;
      }
      const ageVerificationGetStartedSubtitle = navigation(5909).getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser);
      cResult[11] = entryPoint;
      cResult[12] = isSuspendedUser;
      cResult[13] = ageVerificationGetStartedSubtitle;
      tmp19 = ageVerificationGetStartedSubtitle;
      const tmpResult2 = navigation(5909);
    }
  }
  const obj13 = { onClose, classificationId, onGoogleWalletSelect: tmp6 };
  cResult[2] = classificationId;
  cResult[3] = onClose;
  cResult[4] = tmp6;
  cResult[5] = obj13;
  tmp7 = obj13;
  const obj2 = navigation(7511);
}) : (function AgeVerificationEmbeddedIntroScreen(arg0) {
  ({ entryPoint, navigation } = arg0);
  ({ onClose, modalSessionId, classificationId } = arg0);
  const tmp = closure_7();
  const items = [navigation];
  const isSuspendedUser = navigation(7511).useIsSuspendedUser();
  const callback = noop.useCallback(() => {
    navigation.navigate(AgeVerificationGetStartedModal.AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
  }, items);
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { align: "center", justify: "center", spacing: 24, children: null };
  const obj5 = { align: "center", justify: "center", spacing: 16, children: null };
  const items1 = [closure_5(navigation(7516).ShieldSpotIllustration, { height: 100, width: 177 }), ];
  const obj6 = { align: "center", justify: "center", spacing: 8, children: null };
  const obj7 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  let obj = navigation(7511);
  obj7.children = navigation(5909).getAgeVerificationGetStartedTitle(entryPoint);
  const items2 = [closure_5(navigation(5088).Text, obj7), ];
  const obj9 = { variant: "text-md/medium", color: "text-strong", style: tmp.header, children: null };
  const obj8 = navigation(5909);
  obj9.children = navigation(5909).getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser);
  items2[1] = closure_5(navigation(5088).Text, obj9);
  obj6.children = items2;
  items1[1] = closure_6(navigation(5377).Stack, obj6);
  obj5.children = items1;
  const items3 = [closure_6(navigation(5377).Stack, obj5), closure_5(navigation(7711).AgeVerificationMethodsContainer, { ageVerificationMethods: useAgeVerificationMethodsDefault({ onClose, classificationId, onGoogleWalletSelect: callback }).ageVerificationMethods, modalSessionId })];
  obj4.children = items3;
  const items4 = [closure_6(navigation(5377).Stack, obj4), ];
  const obj11 = { variant: "text-xs/medium", color: "text-muted", style: tmp.helpLink, children: null };
  const intl = navigation(1126).intl;
  obj11.children = intl.format(_modDef3120.lG69e1, {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  });
  items4[1] = closure_5(navigation(5088).Text, obj11);
  obj3.children = items4;
  obj2.children = closure_6(navigation(7515).ModalContent, obj3);
  return closure_5(navigation(7514).ModalScreen, obj2);
});