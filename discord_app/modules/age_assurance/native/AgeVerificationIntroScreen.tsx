// === Module 8231: AgeVerificationIntroScreen ===

// Module 8231 (AgeVerificationIntroScreen)
import nativeDefault from "native" /* 576 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8054 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8056 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(8055).getAgeVerificationGetStartedSteps;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4866);
let obj2 = { getStartedContainer: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 }, getStartedHeaderContainer: null, ageGroupLearnMoreContainer: null, getStartedHeaderText: null, getStartedFooterContainer: null, getStartedFooterButtonsContainer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
obj2.getStartedHeaderContainer = { alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.ageGroupLearnMoreContainer = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.getStartedHeaderText = { textAlign: "center" };
let obj5 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.getStartedFooterContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
obj2.getStartedFooterButtonsContainer = { gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default function GetStartedScreen(onComplete) {
  const modalSessionId = onComplete.modalSessionId;
  const entryPoint = onComplete.entryPoint;
  const tmp = closure_11();
  let initiateAgeVerification = modalSessionId(5078).useInitiateAgeVerification({ onComplete: onComplete.onClose, entryPoint });
  initiateAgeVerification = initiateAgeVerification.initiateAgeVerification;
  let obj2 = { children: null };
  let obj3 = { children: null };
  let obj4 = { style: tmp.getStartedContainer, children: null };
  let obj5 = { style: tmp.getStartedHeaderContainer, children: null };
  const items = [closure_8(modalSessionId(8067).ShieldSpotIllustration, {}), , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.getStartedHeaderText, children: null };
  let obj = modalSessionId(5078);
  obj6.children = modalSessionId(5078).getAgeVerificationGetStartedTitle(entryPoint);
  items[1] = closure_8(modalSessionId(4862).Text, obj6);
  const obj8 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText, children: null };
  const obj7 = modalSessionId(5078);
  obj8.children = modalSessionId(5078).getAgeVerificationGetStartedSubtitle(entryPoint);
  items[2] = closure_8(modalSessionId(4862).Text, obj8);
  obj5.children = items;
  const items1 = [closure_9(closure_5, obj5), , ];
  const obj10 = { hasIcons: true, children: null };
  const obj9 = modalSessionId(5078);
  obj10.children = closure_6(modalSessionId).map((children, index) => {
    const description = children.description;
    const obj = { index: index + 1, tip: closure_1_8(modalSessionId(4862).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.title }), description: null };
    let tmpResult = null;
    if (null != description) {
      const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
      tmpResult = closure_1_8(modalSessionId(4862).Text, obj2);
    }
    obj.description = tmpResult;
    return closure_1_8(initiateAgeVerification(8232), obj, index);
  });
  items1[1] = closure_8(modalSessionId(6195).TableRowGroup, obj10);
  const obj11 = { style: tmp.ageGroupLearnMoreContainer, children: null };
  const obj12 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = modalSessionId(1115).intl;
  obj12.children = intl.format(modalSessionId(1115).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  });
  obj11.children = closure_8(modalSessionId(4862).Text, obj12);
  items1[2] = closure_8(closure_5, obj11);
  obj4.children = items1;
  obj3.children = closure_9(closure_5, obj4);
  const items2 = [closure_8(closure_4, obj3), ];
  const obj14 = { style: null, children: null };
  const items3 = [tmp.getStartedFooterContainer, { paddingBottom: initiateAgeVerification(1613)().bottom }];
  obj14.style = items3;
  const obj15 = { style: tmp.getStartedFooterButtonsContainer, children: null };
  const obj16 = { variant: "primary", size: "lg", text: null, onPress: null, icon: null, loading: null, iconPosition: "end" };
  const intl2 = modalSessionId(1115).intl;
  obj16.text = intl2.string(modalSessionId(1115).t.SJMnkX);
  obj16.onPress = asyncGeneratorStep(async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const result = v3(8056).trackAgeVerificationModalClicked(modalSessionId, v3(8056).AgeVerificationModalVersion.PRIMARY, v3(8056).AgeVerificationModalCta.GET_STARTED);
            c1 = 1;
            v3 = 1;
            const obj5 = { value: initiateAgeVerification(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        v3 = tmp;
        throw tmp10;
      }
    }
  });
  const arr3 = closure_6(modalSessionId);
  const obj13 = {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  };
  obj16.icon = closure_8(modalSessionId(8233).LinkExternalSmallIcon, { color: initiateAgeVerification(576).colors.WHITE });
  obj16.loading = initiateAgeVerification.loading;
  obj15.children = closure_8(modalSessionId(5477).Button, obj16);
  obj14.children = closure_8(closure_5, obj15);
  items2[1] = closure_8(closure_5, obj14);
  obj2.children = items2;
  return closure_9(closure_10, obj2);
};