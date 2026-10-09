// discord_app/modules/tiny_bronco/native/TinyBroncoSettingsNotices.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3149 from "../TinyBronco.messages.js";
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import RegionalFeatureConfigUtils from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import TinyBroncoExperiment from "../TinyBroncoExperiment.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import useUserIsTeen from "../../self_mod/hooks/useUserIsTeen.tsx";
import useAgeGroupPresentation from "../../age_assurance/useAgeGroupPresentation.tsx";
import SafetySettingsUtils from "../../safety_common/SafetySettingsUtils.tsx";
import handleOpenUnconfirmedAgeGroupSupportArticle from "../handleOpenUnconfirmedAgeGroupSupportArticle.tsx";
import useParentalControlSettings from "../../parent_tools/hooks/useParentalControlSettings.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
let closure_6 = fn(5934).TINY_BRONCO_SETTINGS_LOCATION;
const Constants = fn(7018);
({ SafetySettingsNoticeAction: closure_7, SafetySettingsNoticeType: closure_8 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { container: { marginBottom: nativeDefault.space.PX_8 } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TeenNotice(arg0) {
      const cResult = noticeType(576).c(19);
      ({ message, noticeType } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] !== noticeType) {
        const fn = function o() {
          const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.VIEWED);
        };
        const items = [noticeType];
        cResult[0] = noticeType;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[3] !== noticeType) {
        const fn2 = function u() {
          const result = useAgeGroupPresentation.handleOpenAgeGatedContentArticle();
          const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.LEARN_MORE);
        };
        cResult[3] = noticeType;
        cResult[4] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] !== noticeType) {
        const fn3 = function _() {
          const obj = AgeVerificationActionCreatorsDefault;
          const result = obj.showAgeVerificationGetStartedModal({
            entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
          });
          const obj2 = {
            entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
          };
          const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.CONFIRM_AGE);
        };
        cResult[5] = noticeType;
        cResult[6] = fn3;
        let tmp9 = fn3;
      } else {
        tmp9 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = noticeType(1126).intl;
        const stringResult = intl.string(noticeType(1126).t.hvVgAZ);
        cResult[7] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] !== tmp8) {
        let obj2 = { variant: "secondary", size: "sm", text: tmp10, onPress: tmp8 };
        const tmp14 = jsx(noticeType(5376).Button, { variant: "secondary", size: "sm", text: tmp10, onPress: tmp8 });
        cResult[8] = tmp8;
        cResult[9] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] === tmp9) {
        if (cResult[11] === message) {
          let tmp15 = cResult[12];
        }
        if (cResult[13] === tmp12) {
          if (cResult[14] === tmp15) {
            let tmp17 = cResult[15];
          }
          if (cResult[16] === tmp4.container) {
            if (cResult[17] === tmp17) {
              let tmp21 = cResult[18];
            }
            return tmp21;
          }
          const obj3 = { style: tmp4.container, children: tmp17 };
          const tmp24 = <View style={tmp4.container}>{tmp17}</View>;
          cResult[16] = tmp4.container;
          cResult[17] = tmp17;
          cResult[18] = tmp24;
          tmp21 = tmp24;
        }
        const obj4 = {
          messageType: noticeType(1200).HelpMessageTypes.INFO,
          borderRadius: nativeDefault.radii.lg,
          button: tmp12,
          children: tmp15,
        };
        const tmp20 = jsx(noticeType(1200).HelpMessage, {
          messageType: noticeType(1200).HelpMessageTypes.INFO,
          borderRadius: nativeDefault.radii.lg,
          button: tmp12,
          children: tmp15,
        });
        cResult[13] = tmp12;
        cResult[14] = tmp15;
        cResult[15] = tmp20;
        tmp17 = tmp20;
      }
      const intl2 = noticeType(1126).intl;
      const formatResult = intl2.format(message, { handleOnConfirmAgeHook: tmp9 });
      cResult[10] = tmp9;
      cResult[11] = message;
      cResult[12] = formatResult;
      tmp15 = formatResult;
      let obj = noticeType(576);
    }
  : function TeenNotice(noticeType) {
      noticeType = noticeType.noticeType;
      const items = [noticeType];
      const effect = noop.useEffect(() => {
        const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.VIEWED);
      }, items);
      const items1 = [noticeType];
      const items2 = [noticeType];
      const callback = noop.useCallback(() => {
        const result = useAgeGroupPresentation.handleOpenAgeGatedContentArticle();
        const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.LEARN_MORE);
      }, items1);
      let obj = { style: closure_10().container, children: null };
      const callback1 = noop.useCallback(() => {
        const obj = AgeVerificationActionCreatorsDefault;
        const result = obj.showAgeVerificationGetStartedModal({
          entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
        });
        const obj2 = {
          entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
        };
        const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.CONFIRM_AGE);
      }, items2);
      let obj2 = {
        messageType: noticeType(1200).HelpMessageTypes.INFO,
        borderRadius: nativeDefault.radii.lg,
        button: null,
        children: null,
      };
      const obj3 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl = noticeType(1126).intl;
      obj3.text = intl.string(noticeType(1126).t.hvVgAZ);
      obj3.onPress = callback;
      obj2.button = jsx(noticeType(5376).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
      const intl2 = noticeType(1126).intl;
      obj2.children = intl2.format(noticeType.message, { handleOnConfirmAgeHook: callback1 });
      obj.children = jsx(noticeType(1200).HelpMessage, {
        messageType: noticeType(1200).HelpMessageTypes.INFO,
        borderRadius: nativeDefault.radii.lg,
        button: null,
        children: null,
      });
      return <View style={closure_10().container}>{null}</View>;
    };
fn(558);
let obj3 = { marginBottom: nativeDefault.space.PX_8 };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MessageRequestsTeenNotice() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { message: _modDef3149["l+jt8J"], noticeType: constants2.CONTENT_AND_SOCIAL_NOTICE };
        const tmp8 = <closure_11 message={_modDef3149["l+jt8J"]} noticeType={constants2.CONTENT_AND_SOCIAL_NOTICE} />;
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function MessageRequestsTeenNotice() {
      return <closure_11 message={_modDef3149["l+jt8J"]} noticeType={constants2.CONTENT_AND_SOCIAL_NOTICE} />;
    };
let closure_12 = tmp4;
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UnconfirmedNotice(message) {
      const cResult = AGE_CONFIRMATION_NOTICE(576).c(12);
      message = message.message;
      const tmp4 = closure_10();
      AGE_CONFIRMATION_NOTICE = constants2.AGE_CONFIRMATION_NOTICE;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(
            AGE_CONFIRMATION_NOTICE,
            constants.VIEWED,
          );
        };
        const items = [AGE_CONFIRMATION_NOTICE];
        cResult[0] = fn;
        cResult[1] = items;
        tmp5 = fn;
        tmp6 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function y() {
          const result = handleOpenUnconfirmedAgeGroupSupportArticle.handleOpenUnconfirmedAgeGroupSupportArticle();
          const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(
            AGE_CONFIRMATION_NOTICE,
            constants.LEARN_MORE,
          );
        };
        cResult[2] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, closure_7.CONFIRM_AGE);
            return;
          }
        }
        cResult[3] = A;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, closure_7.CONFIRM_AGE);
            return;
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, closure_7.CONFIRM_AGE);
            return;
          }
        }
        let obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl = tmp(1126).intl;
        obj2.text = intl.string(tmp(1126).t.FDSSia);
        obj2.onPress = A;
        const tmp11 = jsx(tmp(5376).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
        cResult[4] = tmp11;
        const tmp10 = tmp11;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, closure_7.CONFIRM_AGE);
            return;
          }
        }
      }
      if (cResult[5] !== message) {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, closure_7.CONFIRM_AGE);
            return;
          }
        }
        const obj4 = { handleOnAgeGatedContentHook: tmp8 };
        const formatResult = obj3.format(message, obj4);
        cResult[5] = message;
        cResult[6] = formatResult;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, closure_7.CONFIRM_AGE);
            return;
          }
        }
      }
      if (cResult[7] !== tmp12) {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, closure_7.CONFIRM_AGE);
            return;
          }
        }
        const obj5 = {
          messageType: tmp(1200).HelpMessageTypes.INFO,
          borderRadius: nativeDefault.radii.lg,
          button: tmp10,
          children: tmp12,
        };
        const tmp16 = jsx(tmp(1200).HelpMessage, {
          messageType: tmp(1200).HelpMessageTypes.INFO,
          borderRadius: nativeDefault.radii.lg,
          button: tmp10,
          children: tmp12,
        });
        cResult[7] = tmp12;
        cResult[8] = tmp16;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, closure_7.CONFIRM_AGE);
            return;
          }
        }
      }
      if (cResult[9] === tmp4.container) {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, closure_7.CONFIRM_AGE);
            return;
          }
        }
        return tmp17;
      }
      tmp17 = <View style={tmp4.container}>{tmp14}</View>;
      cResult[9] = tmp4.container;
      cResult[10] = tmp14;
      cResult[11] = tmp17;
      let obj = AGE_CONFIRMATION_NOTICE(576);
    }
  : function UnconfirmedNotice(message) {
      const AGE_CONFIRMATION_NOTICE = constants2.AGE_CONFIRMATION_NOTICE;
      const items = [AGE_CONFIRMATION_NOTICE];
      const effect = noop.useEffect(() => {
        const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(
          AGE_CONFIRMATION_NOTICE,
          constants.VIEWED,
        );
      }, items);
      const items1 = [AGE_CONFIRMATION_NOTICE];
      const items2 = [AGE_CONFIRMATION_NOTICE];
      const callback = noop.useCallback(() => {
        const result = handleOpenUnconfirmedAgeGroupSupportArticle.handleOpenUnconfirmedAgeGroupSupportArticle();
        const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(
          AGE_CONFIRMATION_NOTICE,
          constants.LEARN_MORE,
        );
      }, items1);
      let obj = { style: closure_10().container, children: null };
      const callback1 = noop.useCallback(() => {
        const obj = AgeVerificationActionCreatorsDefault;
        const result = obj.showAgeVerificationGetStartedModal({
          entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
        });
        const obj2 = {
          entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
        };
        const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(
          AGE_CONFIRMATION_NOTICE,
          constants.CONFIRM_AGE,
        );
      }, items2);
      let obj2 = {
        messageType: AGE_CONFIRMATION_NOTICE(1200).HelpMessageTypes.INFO,
        borderRadius: nativeDefault.radii.lg,
        button: null,
        children: null,
      };
      const obj3 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl = AGE_CONFIRMATION_NOTICE(1126).intl;
      obj3.text = intl.string(AGE_CONFIRMATION_NOTICE(1126).t.FDSSia);
      obj3.onPress = callback1;
      obj2.button = jsx(AGE_CONFIRMATION_NOTICE(5376).Button, {
        variant: "secondary",
        size: "sm",
        text: null,
        onPress: null,
      });
      const intl2 = AGE_CONFIRMATION_NOTICE(1126).intl;
      obj2.children = intl2.format(message.message, { handleOnAgeGatedContentHook: callback });
      obj.children = jsx(AGE_CONFIRMATION_NOTICE(1200).HelpMessage, {
        messageType: AGE_CONFIRMATION_NOTICE(1200).HelpMessageTypes.INFO,
        borderRadius: nativeDefault.radii.lg,
        button: null,
        children: null,
      });
      return <View style={closure_10().container}>{null}</View>;
    };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContentFiltersTeenNotice() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { message: _modDef3149.qbBkFI, noticeType: constants2.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE };
        const tmp8 = (
          <closure_11 message={_modDef3149.qbBkFI} noticeType={constants2.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />
        );
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function ContentFiltersTeenNotice() {
      return <closure_11 message={_modDef3149.qbBkFI} noticeType={constants2.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MessageRequestsUnconfirmedNotice() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { message: _modDef3149.tGsCdS };
        const tmp7 = <closure_13 message={_modDef3149.tGsCdS} />;
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function MessageRequestsUnconfirmedNotice() {
      return <closure_13 message={_modDef3149.tGsCdS} />;
    };
let closure_14 = tmp6;
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMessageRequestsNoticeVariant() {
      const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
      const hasAgeGatedFeatures = RegionalFeatureConfigUtils.useHasAgeGatedFeatures();
      const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
      useUserIsTeen;
      if (!isParentallyControlled) {
        if (!hasAgeGatedFeatures) {
          if (tmp7) {
            let str = "teen";
          }
        } else {
          str = "unconfirmed";
        }
        if (null != str) {
          if (tmpResult.isTinyBroncoEnabled(closure_6)) {
            return str;
          }
          tmpResult = TinyBroncoExperiment;
        }
      }
    }
  : function useMessageRequestsNoticeVariant() {
      const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
      const hasAgeGatedFeatures = RegionalFeatureConfigUtils.useHasAgeGatedFeatures();
      const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
      useUserIsTeen;
      if (!isParentallyControlled) {
        if (!hasAgeGatedFeatures) {
          if (tmp7) {
            let str = "teen";
          }
        } else {
          str = "unconfirmed";
        }
        if (null != str) {
          if (tmpResult.isTinyBroncoEnabled(closure_6)) {
            return str;
          }
          tmpResult = TinyBroncoExperiment;
        }
      }
    };
let closure_15 = tmp8;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContentFiltersUnconfirmedNotice() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { message: _modDef3149.HGJo1F };
        const tmp7 = <closure_13 message={_modDef3149.HGJo1F} />;
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function ContentFiltersUnconfirmedNotice() {
      return <closure_13 message={_modDef3149.HGJo1F} />;
    };
function useIsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_6);
}
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsNotices.tsx");

export const ContentFiltersTeenNotice = tmp3;
export const MessageRequestsTeenNotice = tmp4;
export const ContentFiltersUnconfirmedNotice = tmp5;
export const MessageRequestsUnconfirmedNotice = tmp6;
export { useIsEnabled };
export const shouldShowUnconfirmedNotice = function shouldShowUnconfirmedNotice() {
  let hasAgeGatedFeaturesResult = RegionalFeatureConfigUtils.hasAgeGatedFeatures();
  if (hasAgeGatedFeaturesResult) {
    hasAgeGatedFeaturesResult = !AgeVerificationUtils.isAgeVerified();
    const tmpResult = AgeVerificationUtils;
  }
  if (hasAgeGatedFeaturesResult) {
    hasAgeGatedFeaturesResult = TinyBroncoExperiment.isTinyBroncoEnabled(closure_6);
    const tmpResult2 = TinyBroncoExperiment;
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
    isTinyBroncoEnabledResult = TinyBroncoExperiment.isTinyBroncoEnabled(closure_6);
  }
  return isTinyBroncoEnabledResult;
};
export const useMessageRequestsNoticeVariant = tmp8;
export const MessageRequestsNotice = ReactCompilerGating.isReactCompilerEnabled()
  ? function MessageRequestsNotice() {
      const cResult = c.c(2);
      const tmp2 = closure_15();
      if ("unconfirmed" === tmp2) {
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = <closure_14 />;
          cResult[0] = tmp13;
          let first = tmp13;
        } else {
          first = cResult[0];
        }
        return first;
      } else if ("teen" === tmp2) {
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp8 = <closure_12 />;
          cResult[1] = tmp8;
          let tmp5 = tmp8;
        } else {
          tmp5 = cResult[1];
        }
        return tmp5;
      } else if (undefined === tmp2) {
        return null;
      }
    }
  : function MessageRequestsNotice() {
      const tmp = closure_15();
      if ("unconfirmed" === tmp) {
        return <closure_14 />;
      } else if ("teen" === tmp) {
        return <closure_12 />;
      } else if (undefined === tmp) {
        return null;
      }
    };
