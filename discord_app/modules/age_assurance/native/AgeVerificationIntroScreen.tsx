// === Module 8577: AgeVerificationIntroScreen ===

// Module 8577 (AgeVerificationIntroScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(8412).getAgeVerificationGetStartedSteps;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const SafetyHubLinks = fn(8419).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
fn(4560);
let createStyles = { getStartedContainer: null, getStartedHeaderContainer: null, ageGroupLearnMoreContainer: null, getStartedHeaderText: null, getStartedRequestTextContainer: null, getStartedFooterContainer: null, getStartedRequestText: null, getStartedFooterButtonsContainer: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
createStyles.getStartedContainer = createStyles;
createStyles.getStartedHeaderContainer = { alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj1 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.ageGroupLearnMoreContainer = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
createStyles.getStartedHeaderText = { textAlign: "center" };
createStyles.getStartedRequestTextContainer = { alignItems: "center" };
let obj2 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
createStyles.getStartedFooterContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
createStyles.getStartedRequestText = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles.getStartedFooterButtonsContainer = { gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default function GetStartedScreen(onComplete) {
  const modalSessionId = onComplete.modalSessionId;
  const entryPoint = onComplete.entryPoint;
  importDefault = undefined;
  const tmp = closure_12();
  let obj = modalSessionId(4773);
  const initiateAgeVerification = obj.useInitiateAgeVerification({ onComplete: onComplete.onClose, entryPoint });
  ({ initiateAgeVerification: c1, loading } = initiateAgeVerification);
  let obj1 = modalSessionId(8578);
  const isManualAgeVerificationHidden = obj1.useIsManualAgeVerificationHidden("age_verification_get_started_modal");
  obj = { children: null };
  obj = { style: tmp.getStartedContainer, children: null };
  obj1 = { style: tmp.getStartedHeaderContainer, children: null };
  const items = [closure_9(modalSessionId(5692).ShieldSpotIllustration, {}), , ];
  let obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.getStartedHeaderText, children: null };
  let obj6 = modalSessionId(4773);
  obj2.children = obj6.getAgeVerificationGetStartedTitle(entryPoint);
  items[1] = closure_9(modalSessionId(4556).Text, obj2);
  const obj3 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText, children: null };
  let obj8 = modalSessionId(4773);
  obj3.children = obj8.getAgeVerificationGetStartedSubtitle(entryPoint);
  items[2] = closure_9(modalSessionId(4556).Text, obj3);
  obj1.children = items;
  const items1 = [closure_10(closure_5, obj1), , ];
  const obj4 = {
    hasIcons: true,
    children: closure_6(modalSessionId).map((children, index) => {
      const description = children.description;
      let obj = { index: index + 1, tip: closure_1_9(modalSessionId(4556).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.title }), description: null };
      let tmpResult = null;
      if (null != description) {
        obj = { variant: "text-xs/medium", color: "text-subtle", children: description };
        tmpResult = tmp(modalSessionId(4556).Text, obj);
      }
      obj.description = tmpResult;
      return closure_1_9(_undefined(8579), obj, index);
    })
  };
  items1[1] = closure_9(modalSessionId(5687).TableRowGroup, obj4);
  const obj5 = { style: tmp.ageGroupLearnMoreContainer, children: null };
  obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = modalSessionId(1114).intl;
  obj6.children = intl.format(modalSessionId(1114).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  });
  obj5.children = closure_9(modalSessionId(4556).Text, obj6);
  items1[2] = closure_9(closure_5, obj5);
  obj.children = items1;
  obj.children = closure_10(closure_5, obj);
  const items2 = [closure_9(closure_4, obj), ];
  obj8 = { style: null, children: null };
  const items3 = [tmp.getStartedFooterContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj8.style = items3;
  let tmp9Result = !isManualAgeVerificationHidden;
  if (!isManualAgeVerificationHidden) {
    const obj9 = { style: tmp.getStartedRequestTextContainer, children: null };
    const obj10 = { variant: "text-xs/medium", color: "text-muted", style: tmp.getStartedRequestText, children: null };
    const intl2 = tmp4(1114).intl;
    const obj11 = {
      handleOnRequestHook() {
          AgeVerificationActionCreatorsDefault.openUrl(SafetyHubLinks.APPEALS_LINK);
          const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
        }
    };
    obj10.children = intl2.format(tmp4(1114).t.pJAxgQ, obj11);
    obj9.children = tmp9(tmp4(4556).Text, obj10);
    tmp9Result = tmp9(tmp10, obj9);
  }
  const obj12 = { children: null };
  const items4 = [tmp9Result, ];
  const obj13 = { style: tmp.getStartedFooterButtonsContainer, children: null };
  const obj14 = { variant: "primary", size: "lg", text: null, onPress: null, icon: null, loading: null, iconPosition: "end" };
  const intl3 = tmp4(1114).intl;
  obj14.text = intl3.string(modalSessionId(1114).t.SJMnkX);
  obj14.onPress = asyncGeneratorStep(async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = v3(8413);
            const result = obj1.trackAgeVerificationModalClicked(modalSessionId, v3(8413).AgeVerificationModalVersion.PRIMARY, v3(8413).AgeVerificationModalCta.GET_STARTED);
            v1 = 1;
            v3 = 1;
            obj1 = { value: v1(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
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
  const obj7 = {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  };
  const tmp8 = closure_11;
  obj14.icon = closure_9(modalSessionId(8580).LinkExternalSmallIcon, { color: nativeDefault.colors.WHITE });
  obj14.loading = loading;
  obj13.children = closure_9(modalSessionId(4975).Button, obj14);
  items4[1] = closure_9(closure_5, obj13);
  obj8.children = items4;
  items2[1] = closure_10(closure_5, obj8);
  obj12.children = items2;
  return closure_10(tmp8, obj12);
};