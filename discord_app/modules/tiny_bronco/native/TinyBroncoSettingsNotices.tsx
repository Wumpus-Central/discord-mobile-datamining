// === Module 14624: TinyBroncoSettingsNotices ===

// Module 14624 (TinyBroncoSettingsNotices)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3077 from "module_3077" /* 3077 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5102 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5580 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import useUserIsTeen from "useUserIsTeen" /* 8294 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 9421 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9424 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 9428 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14498 */;
import handleOpenUnconfirmedAgeGroupSupportArticle from "handleOpenUnconfirmedAgeGroupSupportArticle" /* 14537 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14625 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 8075 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
let closure_6 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
({ SafetySettingsNoticeAction: metroImportDefault, SafetySettingsNoticeType: metroImportAll } = Constants);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let message;
  let noticeType;
  let obj2;
  let tmp10;
  let tmp20;
  let tmp5;
  let tmp6;
  let tmp8;
  let obj = noticeType(576);
  const cResult = obj.c(19);
  ({ message, noticeType } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== noticeType) {
    const fn = function s() {
      const obj = SafetySettingsUtils;
      const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.VIEWED);
    };
    const items = [noticeType];
    cResult[0] = noticeType;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[3] !== noticeType) {
    const fn2 = function u() {
      const obj = useAgeGroupPresentation;
      const result = obj.handleOpenAgeGatedContentArticle();
      const obj2 = SafetySettingsUtils;
      const result1 = obj2.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.LEARN_MORE);
    };
    cResult[3] = noticeType;
    cResult[4] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== noticeType) {
    class A {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
      }
    }
    cResult[5] = noticeType;
    cResult[6] = A;
  } else {
    class A {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  const container = tmp4.container;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
      }
    }
    const stringResult = obj2.string(noticeType(1126).t.hvVgAZ);
    cResult[7] = stringResult;
    tmp10 = stringResult;
  } else {
    class A {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  if (cResult[8] !== tmp8) {
    class A {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
      }
    }
    cResult[8] = tmp8;
    cResult[9] = jsx(noticeType(5594).Button, { variant: "secondary", size: "sm", text: tmp10, onPress: tmp8 });
    const tmp13 = jsx(noticeType(5594).Button, { variant: "secondary", size: "sm", text: tmp10, onPress: tmp8 });
  } else {
    class A {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  if (cResult[10] === A) {
    class A {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
      }
    }
    if (cResult[13] === tmp12) {
      class A {
        constructor() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
          const obj3 = SafetySettingsUtils;
          const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
        }
      }
      if (cResult[16] === tmp4.container) {
        class A {
          constructor() {
            const obj = AgeVerificationActionCreatorsDefault;
            const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            const result = obj.showAgeVerificationGetStartedModal(obj2);
            const obj3 = SafetySettingsUtils;
            const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
          }
        }
        return tmp20;
      }
      const tmp23 = <View style={container}>{tmp16}</View>;
      cResult[16] = tmp4.container;
      cResult[17] = tmp16;
      cResult[18] = tmp23;
      tmp20 = tmp23;
    }
    const HelpMessage = noticeType(1188).HelpMessage;
    const tmp19 = <HelpMessage messageType={noticeType(1188).HelpMessageTypes.INFO} borderRadius={nativeDefault.radii.lg} button={tmp12}>{tmp14}</HelpMessage>;
    cResult[13] = tmp12;
    cResult[14] = tmp14;
    cResult[15] = tmp19;
  }
  const intl = noticeType(1126).intl;
  cResult[10] = A;
  cResult[11] = message;
  cResult[12] = intl.format(message, { handleOnConfirmAgeHook: A });
  const formatResult = intl.format(message, { handleOnConfirmAgeHook: A });
}) : ((noticeType) => {
  let intl;
  let intl2;
  noticeType = noticeType.noticeType;
  const message = noticeType.message;
  const items = [noticeType];
  const tmp = closure_10();
  const effect = react.useEffect(() => {
    const obj = SafetySettingsUtils;
    const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.VIEWED);
  }, items);
  const items1 = [noticeType];
  const items2 = [noticeType];
  const callback = react.useCallback(() => {
    const obj = useAgeGroupPresentation;
    const result = obj.handleOpenAgeGatedContentArticle();
    const obj2 = SafetySettingsUtils;
    const result1 = obj2.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.LEARN_MORE);
  }, items1);
  const callback1 = react.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
    const obj3 = SafetySettingsUtils;
    const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
  }, items2);
  let obj2 = { messageType: noticeType(1188).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: null, children: intl2.format(message, { handleOnConfirmAgeHook: callback1 }) };
  const HelpMessage = noticeType(1188).HelpMessage;
  let obj3 = { variant: "secondary", size: "sm", text: intl.string(noticeType(1126).t.hvVgAZ), onPress: callback };
  const Button = noticeType(5594).Button;
  intl = noticeType(1126).intl;
  intl2 = noticeType(1126).intl;
  return <View style={tmp.container}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = <closure_11 message={_modDef3077.qbBkFI} noticeType={metroImportAll.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => <closure_11 message={_modDef3077.qbBkFI} noticeType={metroImportAll.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = <closure_11 message={_modDef3077["l+jt8J"]} noticeType={metroImportAll.CONTENT_AND_SOCIAL_NOTICE} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => <closure_11 message={_modDef3077["l+jt8J"]} noticeType={metroImportAll.CONTENT_AND_SOCIAL_NOTICE} />);
let closure_12 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let AGE_CONFIRMATION_NOTICE;
  let obj3;
  let tmp10;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp8;
  let obj = AGE_CONFIRMATION_NOTICE(576);
  const cResult = obj.c(12);
  message = message.message;
  const tmp4 = closure_10();
  AGE_CONFIRMATION_NOTICE = constants2.AGE_CONFIRMATION_NOTICE;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = SafetySettingsUtils;
      const result = obj.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.VIEWED);
    };
    const items = [AGE_CONFIRMATION_NOTICE];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      const obj = handleOpenUnconfirmedAgeGroupSupportArticle;
      const result = obj.handleOpenUnconfirmedAgeGroupSupportArticle();
      const obj2 = SafetySettingsUtils;
      const result1 = obj2.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.LEARN_MORE);
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
    cResult[3] = T;
  } else {
    class T {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  const container = tmp4.container;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
    const Button = tmp(5594).Button;
    const intl = tmp(1126).intl;
    const tmp11 = <Button variant="secondary" size="sm" text={intl.string(AGE_CONFIRMATION_NOTICE(1126).t.FDSSia)} onPress={T} />;
    cResult[4] = tmp11;
    tmp10 = tmp11;
  } else {
    class T {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  if (cResult[5] !== message) {
    class T {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
    const obj4 = { handleOnAgeGatedContentHook: tmp8 };
    cResult[5] = message;
    cResult[6] = obj3.format(message, obj4);
    const formatResult = obj3.format(message, obj4);
  } else {
    class T {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  if (cResult[7] !== tmp12) {
    class T {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
    const HelpMessage = tmp(1188).HelpMessage;
    const tmp16 = <HelpMessage messageType={AGE_CONFIRMATION_NOTICE(1188).HelpMessageTypes.INFO} borderRadius={nativeDefault.radii.lg} button={tmp10}>{tmp12}</HelpMessage>;
    cResult[7] = tmp12;
    cResult[8] = tmp16;
  } else {
    class T {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  if (cResult[9] === tmp4.container) {
    class T {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
    return tmp17;
  }
  tmp17 = <View style={container}>{tmp14}</View>;
  cResult[9] = tmp4.container;
  cResult[10] = tmp14;
  cResult[11] = tmp17;
}) : ((message) => {
  let intl;
  let intl2;
  message = message.message;
  const AGE_CONFIRMATION_NOTICE = constants2.AGE_CONFIRMATION_NOTICE;
  const items = [AGE_CONFIRMATION_NOTICE];
  const tmp = closure_10();
  const effect = react.useEffect(() => {
    const obj = SafetySettingsUtils;
    const result = obj.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.VIEWED);
  }, items);
  const items1 = [AGE_CONFIRMATION_NOTICE];
  const items2 = [AGE_CONFIRMATION_NOTICE];
  const callback = react.useCallback(() => {
    const obj = handleOpenUnconfirmedAgeGroupSupportArticle;
    const result = obj.handleOpenUnconfirmedAgeGroupSupportArticle();
    const obj2 = SafetySettingsUtils;
    const result1 = obj2.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.LEARN_MORE);
  }, items1);
  const callback1 = react.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
    const obj3 = SafetySettingsUtils;
    const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
  }, items2);
  let obj2 = { messageType: AGE_CONFIRMATION_NOTICE(1188).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: null, children: intl2.format(message, { handleOnAgeGatedContentHook: callback }) };
  const HelpMessage = AGE_CONFIRMATION_NOTICE(1188).HelpMessage;
  let obj3 = { variant: "secondary", size: "sm", text: intl.string(AGE_CONFIRMATION_NOTICE(1126).t.FDSSia), onPress: callback1 };
  const Button = AGE_CONFIRMATION_NOTICE(5594).Button;
  intl = AGE_CONFIRMATION_NOTICE(1126).intl;
  intl2 = AGE_CONFIRMATION_NOTICE(1126).intl;
  return <View style={tmp.container}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = <closure_13 message={_modDef3077.HGJo1F} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => <closure_13 message={_modDef3077.HGJo1F} />);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = <closure_13 message={_modDef3077.tGsCdS} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => <closure_13 message={_modDef3077.tGsCdS} />);
let closure_14 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = useParentalControlSettings;
  const isParentallyControlled = obj.useIsParentallyControlled();
  const obj2 = RegionalFeatureConfigUtils;
  const hasAgeGatedFeatures = obj2.useHasAgeGatedFeatures();
  const obj3 = AgeVerificationUtils;
  const isAgeVerified = obj3.useIsAgeVerified();
  useUserIsTeen;
  if (!isParentallyControlled) {
    let str;
    if (!hasAgeGatedFeatures) {
      if (tmp7) {
        str = "teen";
      }
    } else {
      str = "unconfirmed";
    }
    if (null != str) {
      const tmpResult = TinyBroncoExperiment;
      if (tmpResult.isTinyBroncoEnabled(closure_6)) {
        return str;
      }
    }
  }
}) : (() => {
  const obj = useParentalControlSettings;
  const isParentallyControlled = obj.useIsParentallyControlled();
  const obj2 = RegionalFeatureConfigUtils;
  const hasAgeGatedFeatures = obj2.useHasAgeGatedFeatures();
  const obj3 = AgeVerificationUtils;
  const isAgeVerified = obj3.useIsAgeVerified();
  useUserIsTeen;
  if (!isParentallyControlled) {
    let str;
    if (!hasAgeGatedFeatures) {
      if (tmp7) {
        str = "teen";
      }
    } else {
      str = "unconfirmed";
    }
    if (null != str) {
      const tmpResult = TinyBroncoExperiment;
      if (tmpResult.isTinyBroncoEnabled(closure_6)) {
        return str;
      }
    }
  }
});
let closure_15 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let fn = () => {
  const obj = TinyBroncoExperiment;
  return obj.useIsTinyBroncoEnabled(closure_6);
};
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_15();
  if ("unconfirmed" === tmp2) {
    let first;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = <closure_14 />;
      cResult[0] = tmp13;
      first = tmp13;
    } else {
      first = cResult[0];
    }
    return first;
  } else if ("teen" === tmp2) {
    let tmp5;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp8 = <closure_12 />;
      cResult[1] = tmp8;
      tmp5 = tmp8;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5;
  } else if (undefined === tmp2) {
    return null;
  }
}) : (() => {
  const tmp = closure_15();
  if ("unconfirmed" === tmp) {
    return <closure_14 />;
  } else if ("teen" === tmp) {
    return <closure_12 />;
  } else if (undefined === tmp) {
    return null;
  }
});
let result1 = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsNotices.tsx");

export const ContentFiltersTeenNotice = tmp3;
export const MessageRequestsTeenNotice = tmp4;
export const ContentFiltersUnconfirmedNotice = tmp5;
export const MessageRequestsUnconfirmedNotice = tmp6;
export const useIsEnabled = fn;
export const shouldShowUnconfirmedNotice = function shouldShowUnconfirmedNotice() {
  const obj = RegionalFeatureConfigUtils;
  let hasAgeGatedFeaturesResult = obj.hasAgeGatedFeatures();
  if (hasAgeGatedFeaturesResult) {
    const tmpResult = AgeVerificationUtils;
    hasAgeGatedFeaturesResult = !tmpResult.isAgeVerified();
  }
  if (hasAgeGatedFeaturesResult) {
    const tmpResult2 = TinyBroncoExperiment;
    hasAgeGatedFeaturesResult = tmpResult2.isTinyBroncoEnabled(closure_6);
  }
  return hasAgeGatedFeaturesResult;
};
export const shouldShowTeenNotice = function shouldShowTeenNotice() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  let isTinyBroncoEnabledResult = false === nsfwAllowed;
  if (isTinyBroncoEnabledResult) {
    const obj = TinyBroncoExperiment;
    isTinyBroncoEnabledResult = obj.isTinyBroncoEnabled(closure_6);
  }
  return isTinyBroncoEnabledResult;
};
export const useMessageRequestsNoticeVariant = tmp8;
export const MessageRequestsNotice = tmp9;