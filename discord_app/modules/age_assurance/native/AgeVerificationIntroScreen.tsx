// === Module 8857: AgeVerificationIntroScreen ===

// Module 8857 (AgeVerificationIntroScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8686 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8688 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(8687).getAgeVerificationGetStartedSteps;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const SafetyHubLinks = fn(8695).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { getStartedContainer: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 }, getStartedHeaderContainer: null, ageGroupLearnMoreContainer: null, getStartedHeaderText: null, getStartedRequestTextContainer: null, getStartedFooterContainer: null, getStartedRequestText: null, getStartedFooterButtonsContainer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
obj2.getStartedHeaderContainer = { alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.ageGroupLearnMoreContainer = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.getStartedHeaderText = { textAlign: "center" };
obj2.getStartedRequestTextContainer = { alignItems: "center" };
let obj5 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.getStartedFooterContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
obj2.getStartedRequestText = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.getStartedFooterButtonsContainer = { gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default function GetStartedScreen(onComplete) {
  const modalSessionId = onComplete.modalSessionId;
  const entryPoint = onComplete.entryPoint;
  importDefault = undefined;
  const tmp = closure_12();
  const initiateAgeVerification = modalSessionId(4969).useInitiateAgeVerification({ onComplete: onComplete.onClose, entryPoint });
  ({ initiateAgeVerification: c1, loading } = initiateAgeVerification);
  let obj = modalSessionId(4969);
  const isManualAgeVerificationHidden = modalSessionId(8858).useIsManualAgeVerificationHidden("age_verification_get_started_modal");
  let obj3 = { children: null };
  let obj4 = { style: tmp.getStartedContainer, children: null };
  let obj5 = { style: tmp.getStartedHeaderContainer, children: null };
  const items = [closure_9(modalSessionId(5911).ShieldSpotIllustration, {}), , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.getStartedHeaderText, children: null };
  let obj2 = modalSessionId(8858);
  obj6.children = modalSessionId(4969).getAgeVerificationGetStartedTitle(entryPoint);
  items[1] = closure_9(modalSessionId(4753).Text, obj6);
  const obj8 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText, children: null };
  const obj7 = modalSessionId(4969);
  obj8.children = modalSessionId(4969).getAgeVerificationGetStartedSubtitle(entryPoint);
  items[2] = closure_9(modalSessionId(4753).Text, obj8);
  obj5.children = items;
  const items1 = [closure_10(closure_5, obj5), , ];
  const obj10 = { hasIcons: true, children: null };
  const obj9 = modalSessionId(4969);
  obj10.children = closure_6(modalSessionId).map((children, index) => {
    const description = children.description;
    const obj = { index: index + 1, tip: closure_1_9(modalSessionId(4753).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.title }), description: null };
    let tmpResult = null;
    if (null != description) {
      const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
      tmpResult = closure_1_9(modalSessionId(4753).Text, obj2);
    }
    obj.description = tmpResult;
    return closure_1_9(_undefined(8859), obj, index);
  });
  items1[1] = closure_9(modalSessionId(5906).TableRowGroup, obj10);
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
  obj11.children = closure_9(modalSessionId(4753).Text, obj12);
  items1[2] = closure_9(closure_5, obj11);
  obj4.children = items1;
  obj3.children = closure_10(closure_5, obj4);
  const items2 = [closure_9(closure_4, obj3), ];
  const obj14 = { style: null, children: null };
  const items3 = [tmp.getStartedFooterContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj14.style = items3;
  let tmp9Result = !isManualAgeVerificationHidden;
  if (!isManualAgeVerificationHidden) {
    const obj15 = { style: tmp.getStartedRequestTextContainer, children: null };
    const obj16 = { variant: "text-xs/medium", color: "text-muted", style: tmp.getStartedRequestText, children: null };
    const intl2 = tmp4(1115).intl;
    const obj17 = {
      handleOnRequestHook() {
          AgeVerificationActionCreatorsDefault.openUrl(SafetyHubLinks.APPEALS_LINK);
          const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
        }
    };
    obj16.children = intl2.format(tmp4(1115).t.pJAxgQ, obj17);
    obj15.children = closure_9(tmp4(4753).Text, obj16);
    tmp9Result = closure_9(closure_5, obj15);
  }
  const obj18 = { children: null };
  const items4 = [tmp9Result, ];
  const obj19 = { style: tmp.getStartedFooterButtonsContainer, children: null };
  const obj20 = { variant: "primary", size: "lg", text: null, onPress: null, icon: null, loading: null, iconPosition: "end" };
  const intl3 = tmp4(1115).intl;
  obj20.text = intl3.string(modalSessionId(1115).t.SJMnkX);
  obj20.onPress = asyncGeneratorStep(async () => {
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
        if (0 === v1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const result = v3(8688).trackAgeVerificationModalClicked(modalSessionId, v3(8688).AgeVerificationModalVersion.PRIMARY, v3(8688).AgeVerificationModalCta.GET_STARTED);
            v1 = 1;
            v3 = 1;
            const obj5 = { value: v1(), done: false };
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
  obj20.icon = closure_9(modalSessionId(8860).LinkExternalSmallIcon, { color: nativeDefault.colors.WHITE });
  obj20.loading = loading;
  obj19.children = closure_9(modalSessionId(5187).Button, obj20);
  items4[1] = closure_9(closure_5, obj19);
  obj14.children = items4;
  items2[1] = closure_10(closure_5, obj14);
  obj18.children = items2;
  return closure_10(closure_11, obj18);
};