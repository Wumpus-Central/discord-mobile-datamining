// discord_app/modules/age_assurance/native/AgeVerificationIntroScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../AgeVerificationActionCreators.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  getStartedContainer: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 },
  getStartedHeaderContainer: null,
  ageGroupLearnMoreContainer: null,
  getStartedHeaderText: null,
  getStartedFooterContainer: null,
  getStartedFooterButtonsContainer: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
obj2.getStartedHeaderContainer = { alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.ageGroupLearnMoreContainer = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.getStartedHeaderText = { textAlign: "center" };
let obj5 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.getStartedFooterContainer = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_48,
};
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
obj2.getStartedFooterButtonsContainer = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default function GetStartedScreen(onComplete) {
  const modalSessionId = onComplete.modalSessionId;
  const entryPoint = onComplete.entryPoint;
  const tmp = closure_10();
  let initiateAgeVerification = modalSessionId(8011).useInitiateAgeVerification({
    onComplete: onComplete.onClose,
    entryPoint,
  });
  initiateAgeVerification = initiateAgeVerification.initiateAgeVerification;
  let obj2 = { children: null };
  let obj3 = { children: null };
  let obj4 = { style: tmp.getStartedContainer, children: null };
  let obj5 = { style: tmp.getStartedHeaderContainer, children: null };
  const items = [closure_7(modalSessionId(7966).ShieldSpotIllustration, {}), ,];
  const obj6 = {
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: tmp.getStartedHeaderText,
    children: null,
  };
  let obj = modalSessionId(8011);
  obj6.children = modalSessionId(6720).getAgeVerificationGetStartedTitle(entryPoint);
  items[1] = closure_7(modalSessionId(5619).Text, obj6);
  const obj8 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText, children: null };
  const obj7 = modalSessionId(6720);
  obj8.children = modalSessionId(6720).getAgeVerificationGetStartedSubtitle(entryPoint);
  items[2] = closure_7(modalSessionId(5619).Text, obj8);
  obj5.children = items;
  const items1 = [closure_8(closure_5, obj5), ,];
  const obj10 = { hasIcons: true, children: null };
  const obj9 = modalSessionId(6720);
  const ageVerificationGetStartedSteps = modalSessionId(8151).getAgeVerificationGetStartedSteps(modalSessionId);
  obj10.children = ageVerificationGetStartedSteps.map((children, index) => {
    const description = children.description;
    const obj = {
      index: index + 1,
      tip: closure_1_7(modalSessionId(5619).Text, {
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: children.title,
      }),
      description: null,
    };
    let tmpResult = null;
    if (null != description) {
      const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
      tmpResult = closure_1_7(modalSessionId(5619).Text, obj2);
    }
    obj.description = tmpResult;
    return closure_1_7(initiateAgeVerification(8152), obj, index);
  });
  items1[1] = closure_7(modalSessionId(7054).TableRowGroup, obj10);
  const obj12 = { style: tmp.ageGroupLearnMoreContainer, children: null };
  const obj13 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = modalSessionId(1114).intl;
  obj13.children = intl.format(modalSessionId(1114).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
        modalSessionId,
        AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY,
        AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
      );
    },
  });
  obj12.children = closure_7(modalSessionId(5619).Text, obj13);
  items1[2] = closure_7(closure_5, obj12);
  obj4.children = items1;
  obj3.children = closure_8(closure_5, obj4);
  const items2 = [closure_7(closure_4, obj3)];
  const obj15 = { style: null, children: null };
  const items3 = [tmp.getStartedFooterContainer, { paddingBottom: initiateAgeVerification(1626)().bottom }];
  obj15.style = items3;
  const obj16 = { style: tmp.getStartedFooterButtonsContainer, children: null };
  const obj17 = {
    variant: "primary",
    size: "lg",
    text: null,
    onPress: null,
    icon: null,
    loading: null,
    iconPosition: "end",
  };
  const intl2 = modalSessionId(1114).intl;
  obj17.text = intl2.string(modalSessionId(1114).t.SJMnkX);
  obj17.onPress = asyncGeneratorStep(async () => {
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
            const result = v3(6723).trackAgeVerificationModalClicked(
              modalSessionId,
              v3(6723).AgeVerificationModalVersion.PRIMARY,
              v3(6723).AgeVerificationModalCta.GET_STARTED,
            );
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
  const obj11 = modalSessionId(8151);
  const obj14 = {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
        modalSessionId,
        AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY,
        AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
      );
    },
  };
  obj17.icon = closure_7(modalSessionId(8153).LinkExternalSmallIcon, {
    color: initiateAgeVerification(575).colors.WHITE,
  });
  obj17.loading = initiateAgeVerification.loading;
  obj16.children = closure_7(modalSessionId(5629).Button, obj17);
  obj15.children = closure_7(closure_5, obj16);
  items2[1] = closure_7(closure_5, obj15);
  obj2.children = items2;
  return closure_8(closure_9, obj2);
}
