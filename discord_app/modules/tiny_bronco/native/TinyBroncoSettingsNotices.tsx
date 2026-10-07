// discord_app/modules/tiny_bronco/native/TinyBroncoSettingsNotices.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3105 from "../TinyBronco.messages.js";
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import RegionalFeatureConfigUtils from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import useUserIsTeen from "../../self_mod/hooks/useUserIsTeen.tsx";
import TinyBroncoExperiment from "../TinyBroncoExperiment.tsx";
import useAgeGroupPresentation from "../../age_assurance/useAgeGroupPresentation.tsx";
import SafetySettingsUtils from "../../safety_common/SafetySettingsUtils.tsx";
import handleOpenUnconfirmedAgeGroupSupportArticle from "../handleOpenUnconfirmedAgeGroupSupportArticle.tsx";
import useParentalControlSettings from "../../parent_tools/hooks/useParentalControlSettings.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
let closure_6 = fn(9435).TINY_BRONCO_SETTINGS_LOCATION;
const Constants = fn(8108);
({ SafetySettingsNoticeAction: closure_7, SafetySettingsNoticeType: closure_8 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { container: { marginBottom: nativeDefault.space.PX_8 } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = noticeType(576).c(19);
      ({ message, noticeType } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] !== noticeType) {
        const fn = function s() {
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
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, closure_7.CONFIRM_AGE);
            return;
          }
        }
        cResult[5] = noticeType;
        cResult[6] = A;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, closure_7.CONFIRM_AGE);
            return;
          }
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, closure_7.CONFIRM_AGE);
            return;
          }
        }
        const stringResult = obj2.string(noticeType(1126).t.hvVgAZ);
        cResult[7] = stringResult;
        const tmp10 = stringResult;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, closure_7.CONFIRM_AGE);
            return;
          }
        }
      }
      if (cResult[8] !== tmp8) {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, closure_7.CONFIRM_AGE);
            return;
          }
        }
        const obj3 = { variant: "secondary", size: "sm", text: tmp10, onPress: tmp8 };
        const tmp13 = jsx(noticeType(5601).Button, { variant: "secondary", size: "sm", text: tmp10, onPress: tmp8 });
        cResult[8] = tmp8;
        cResult[9] = tmp13;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, closure_7.CONFIRM_AGE);
            return;
          }
        }
      }
      if (cResult[10] === A) {
        class A {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, closure_7.CONFIRM_AGE);
            return;
          }
        }
        if (cResult[13] === tmp12) {
          class A {
            constructor() {
              obj = closure_1(closure_2[12]);
              obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
              result = obj.showAgeVerificationGetStartedModal(obj1);
              obj3 = closure_0(closure_2[10]);
              result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, closure_7.CONFIRM_AGE);
              return;
            }
          }
          if (cResult[16] === tmp4.container) {
            class A {
              constructor() {
                obj = closure_1(closure_2[12]);
                obj1 = {
                  entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
                };
                result = obj.showAgeVerificationGetStartedModal(obj1);
                obj3 = closure_0(closure_2[10]);
                result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, closure_7.CONFIRM_AGE);
                return;
              }
            }
            return tmp20;
          }
          const obj4 = { style: tmp4.container, children: tmp16 };
          const tmp23 = <View style={tmp4.container}>{tmp16}</View>;
          cResult[16] = tmp4.container;
          cResult[17] = tmp16;
          cResult[18] = tmp23;
          tmp20 = tmp23;
        }
        const obj5 = {
          messageType: noticeType(1188).HelpMessageTypes.INFO,
          borderRadius: nativeDefault.radii.lg,
          button: tmp12,
          children: tmp14,
        };
        const tmp19 = jsx(noticeType(1188).HelpMessage, {
          messageType: noticeType(1188).HelpMessageTypes.INFO,
          borderRadius: nativeDefault.radii.lg,
          button: tmp12,
          children: tmp14,
        });
        cResult[13] = tmp12;
        cResult[14] = tmp14;
        cResult[15] = tmp19;
      }
      const intl = noticeType(1126).intl;
      const formatResult = intl.format(message, { handleOnConfirmAgeHook: A });
      cResult[10] = A;
      cResult[11] = message;
      cResult[12] = formatResult;
      let obj = noticeType(576);
    }
  : (noticeType) => {
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
        messageType: noticeType(1188).HelpMessageTypes.INFO,
        borderRadius: nativeDefault.radii.lg,
        button: null,
        children: null,
      };
      const obj3 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl = noticeType(1126).intl;
      obj3.text = intl.string(noticeType(1126).t.hvVgAZ);
      obj3.onPress = callback;
      obj2.button = jsx(noticeType(5601).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
      const intl2 = noticeType(1126).intl;
      obj2.children = intl2.format(noticeType.message, { handleOnConfirmAgeHook: callback1 });
      obj.children = jsx(noticeType(1188).HelpMessage, {
        messageType: noticeType(1188).HelpMessageTypes.INFO,
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
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { message: _modDef3105["l+jt8J"], noticeType: constants2.CONTENT_AND_SOCIAL_NOTICE };
        const tmp8 = <closure_11 message={_modDef3105["l+jt8J"]} noticeType={constants2.CONTENT_AND_SOCIAL_NOTICE} />;
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => <closure_11 message={_modDef3105["l+jt8J"]} noticeType={constants2.CONTENT_AND_SOCIAL_NOTICE} />;
let closure_12 = tmp4;
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const cResult = AGE_CONFIRMATION_NOTICE(576).c(12);
      message = message.message;
      const tmp4 = closure_10();
      AGE_CONFIRMATION_NOTICE = constants2.AGE_CONFIRMATION_NOTICE;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
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
        class T {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { entryPoint: closure_0(closure_2[13]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            result = obj.showAgeVerificationGetStartedModal(obj1);
            obj3 = closure_0(closure_2[10]);
            result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, closure_7.CONFIRM_AGE);
            return;
          }
        }
        cResult[3] = T;
      } else {
        class T {
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
        class T {
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
        obj2.onPress = T;
        const tmp11 = jsx(tmp(5601).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
        cResult[4] = tmp11;
        const tmp10 = tmp11;
      } else {
        class T {
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
        class T {
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
        class T {
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
        class T {
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
          messageType: tmp(1188).HelpMessageTypes.INFO,
          borderRadius: nativeDefault.radii.lg,
          button: tmp10,
          children: tmp12,
        };
        const tmp16 = jsx(tmp(1188).HelpMessage, {
          messageType: tmp(1188).HelpMessageTypes.INFO,
          borderRadius: nativeDefault.radii.lg,
          button: tmp10,
          children: tmp12,
        });
        cResult[7] = tmp12;
        cResult[8] = tmp16;
      } else {
        class T {
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
        class T {
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
  : (message) => {
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
        messageType: AGE_CONFIRMATION_NOTICE(1188).HelpMessageTypes.INFO,
        borderRadius: nativeDefault.radii.lg,
        button: null,
        children: null,
      };
      const obj3 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl = AGE_CONFIRMATION_NOTICE(1126).intl;
      obj3.text = intl.string(AGE_CONFIRMATION_NOTICE(1126).t.FDSSia);
      obj3.onPress = callback1;
      obj2.button = jsx(AGE_CONFIRMATION_NOTICE(5601).Button, {
        variant: "secondary",
        size: "sm",
        text: null,
        onPress: null,
      });
      const intl2 = AGE_CONFIRMATION_NOTICE(1126).intl;
      obj2.children = intl2.format(message.message, { handleOnAgeGatedContentHook: callback });
      obj.children = jsx(AGE_CONFIRMATION_NOTICE(1188).HelpMessage, {
        messageType: AGE_CONFIRMATION_NOTICE(1188).HelpMessageTypes.INFO,
        borderRadius: nativeDefault.radii.lg,
        button: null,
        children: null,
      });
      return <View style={closure_10().container}>{null}</View>;
    };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { message: _modDef3105.qbBkFI, noticeType: constants2.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE };
        const tmp8 = (
          <closure_11 message={_modDef3105.qbBkFI} noticeType={constants2.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />
        );
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => <closure_11 message={_modDef3105.qbBkFI} noticeType={constants2.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { message: _modDef3105.tGsCdS };
        const tmp7 = <closure_13 message={_modDef3105.tGsCdS} />;
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => <closure_13 message={_modDef3105.tGsCdS} />;
let closure_14 = tmp6;
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
  : () => {
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
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { message: _modDef3105.HGJo1F };
        const tmp7 = <closure_13 message={_modDef3105.HGJo1F} />;
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => <closure_13 message={_modDef3105.HGJo1F} />;
fn = () => TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_6);
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsNotices.tsx");

export const ContentFiltersTeenNotice = tmp3;
export const MessageRequestsTeenNotice = tmp4;
export const ContentFiltersUnconfirmedNotice = tmp5;
export const MessageRequestsUnconfirmedNotice = tmp6;
export const useIsEnabled = fn;
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
  ? () => {
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
  : () => {
      const tmp = closure_15();
      if ("unconfirmed" === tmp) {
        return <closure_14 />;
      } else if ("teen" === tmp) {
        return <closure_12 />;
      } else if (undefined === tmp) {
        return null;
      }
    };
