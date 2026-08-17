// discord_app/modules/age_assurance/native/AgeVerificationIntroScreen.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { getAgeVerificationGetStartedSteps as closure_6 } from "set" /* 5427 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import { SafetyHubLinks } from "SafetyHubView" /* 5438 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
noopAll;
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
createCacheKey = { getStartedContainer: null, getStartedHeaderContainer: null, ageGroupLearnMoreContainer: null, getStartedHeaderText: null, getStartedRequestTextContainer: null, getStartedFooterContainer: null, getStartedRequestText: null, getStartedFooterButtonsContainer: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", gap: ThemesDefault.space.PX_8 };
let obj1 = { alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[2] = { alignItems: "center", marginTop: -ThemesDefault.space.PX_8 };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { alignItems: "center" };
let obj2 = { alignItems: "center", marginTop: -ThemesDefault.space.PX_8 };
createCacheKey[5] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_48 };
let obj3 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_48 };
createCacheKey[6] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_16 };
let obj4 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[7] = { gap: ThemesDefault.space.PX_8 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj5 = { gap: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default function GetStartedScreen(onComplete) {
  const modalSessionId = onComplete.modalSessionId;
  const entryPoint = onComplete.entryPoint;
  importDefault = undefined;
  const tmp = callback5();
  let obj = modalSessionId(4992);
  const initiateAgeVerification = obj.useInitiateAgeVerification({ onComplete: onComplete.onClose, entryPoint });
  ({ initiateAgeVerification: c1, loading } = initiateAgeVerification);
  obj1 = modalSessionId(6691);
  const isManualAgeVerificationHidden = obj1.useIsManualAgeVerificationHidden("age_verification_get_started_modal");
  obj = { children: null };
  obj = { style: tmp.getStartedContainer, children: null };
  obj1 = { style: tmp.getStartedHeaderContainer, children: null };
  const items = [callback3(modalSessionId(5447).ShieldSpotIllustration, {}), , ];
  let obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.getStartedHeaderText, children: null };
  let obj6 = modalSessionId(4992);
  obj2[3] = obj6.getAgeVerificationGetStartedTitle(entryPoint);
  items[1] = callback3(modalSessionId(4734).Text, obj2);
  const obj3 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText, children: null };
  let obj8 = modalSessionId(4992);
  obj3[3] = obj8.getAgeVerificationGetStartedSubtitle(entryPoint);
  items[2] = callback3(modalSessionId(4734).Text, obj3);
  obj1[1] = items;
  const items1 = [callback4(closure_5, obj1), , ];
  const obj4 = {
    hasIcons: true,
    children: callback2(modalSessionId).map((children) => {
      const description = children.description;
      let obj = { index: arg1 + 1, tip: callback(modalSessionId(4734).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.title }), description: null };
      let tmpResult = null;
      if (null != description) {
        obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
        obj[2] = description;
        tmpResult = tmp(modalSessionId(4734).Text, obj);
      }
      obj[2] = tmpResult;
      return callback(_undefined(6692), obj, arg1);
    })
  };
  items1[1] = callback3(modalSessionId(6286).TableRowGroup, obj4);
  const obj5 = { style: tmp.ageGroupLearnMoreContainer, children: null };
  obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = modalSessionId(1236).intl;
  obj6[2] = intl.format(modalSessionId(1236).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = _undefined(closure_1_2[17]);
      obj.openUrl(_undefined(closure_1_2[18]).getArticleURL(closure_1_7.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = _undefined(closure_1_2[18]);
      const result = modalSessionId(closure_1_2[19]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(closure_1_2[19]).AgeVerificationModalVersion.PRIMARY, modalSessionId(closure_1_2[19]).AgeVerificationModalCta.LEARN_MORE);
    }
  });
  obj5[1] = callback3(modalSessionId(4734).Text, obj6);
  items1[2] = callback3(closure_5, obj5);
  obj[1] = items1;
  obj[0] = callback4(closure_5, obj);
  const items2 = [callback3(closure_4, obj), ];
  obj8 = { style: items3, children: null };
  items3 = [tmp.getStartedFooterContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  let tmp9Result = !isManualAgeVerificationHidden;
  if (!isManualAgeVerificationHidden) {
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.getStartedRequestTextContainer;
    const obj10 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
    obj10[2] = tmp.getStartedRequestText;
    const intl2 = tmp4(1236).intl;
    const obj11 = { handleOnRequestHook: null };
    obj11[0] = function handleOnRequestHook() {
      _undefined(closure_1_2[17]).openUrl(closure_1_8.APPEALS_LINK);
      const obj = _undefined(closure_1_2[17]);
      const result = modalSessionId(closure_1_2[19]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(closure_1_2[19]).AgeVerificationModalVersion.PRIMARY, modalSessionId(closure_1_2[19]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
    };
    obj10[3] = intl2.format(tmp4(1236).t.pJAxgQ, obj11);
    obj9[1] = tmp9(tmp4(4734).Text, obj10);
    tmp9Result = tmp9(tmp10, obj9);
  }
  const obj12 = { children: null };
  const items4 = [tmp9Result, ];
  const obj13 = { style: tmp.getStartedFooterButtonsContainer, children: null };
  const obj14 = { variant: "primary", size: "lg", text: null, onPress: null, icon: null, loading: null, iconPosition: "end" };
  const intl3 = tmp4(1236).intl;
  obj14[2] = intl3.string(modalSessionId(1236).t.SJMnkX);
  obj14[3] = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (0 === v02) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj1 = v0(closure_1_2[19]);
            const result = obj1.trackAgeVerificationModalClicked(v0, v0(closure_1_2[19]).AgeVerificationModalVersion.PRIMARY, v0(closure_1_2[19]).AgeVerificationModalCta.GET_STARTED);
            v02 = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = v02();
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp10) {
        v0 = tmp;
        throw tmp10;
      }
    }
  });
  const arr3 = callback2(modalSessionId);
  const obj7 = {
    handleOnHelpUrlHook() {
      const obj = _undefined(closure_1_2[17]);
      obj.openUrl(_undefined(closure_1_2[18]).getArticleURL(closure_1_7.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = _undefined(closure_1_2[18]);
      const result = modalSessionId(closure_1_2[19]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(closure_1_2[19]).AgeVerificationModalVersion.PRIMARY, modalSessionId(closure_1_2[19]).AgeVerificationModalCta.LEARN_MORE);
    }
  };
  const tmp2 = importDefault;
  const tmp8 = closure_11;
  obj14[4] = callback3(modalSessionId(6693).LinkExternalSmallIcon, { color: ThemesDefault.colors.WHITE });
  obj14[5] = loading;
  obj13[1] = callback3(modalSessionId(4745).Button, obj14);
  items4[1] = callback3(closure_5, obj13);
  obj8[1] = items4;
  items2[1] = callback4(closure_5, obj8);
  obj12[0] = items2;
  return callback4(tmp8, obj12);
};