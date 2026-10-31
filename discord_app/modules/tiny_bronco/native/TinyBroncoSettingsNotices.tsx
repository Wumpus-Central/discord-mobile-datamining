// discord_app/modules/tiny_bronco/native/TinyBroncoSettingsNotices.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3128 from "../TinyBronco.messages.js";
import RegionalFeatureConfigUtils from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
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
function TeenNotice(noticeType) {
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
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.CONFIRM_AGE);
  }, items2);
  let obj2 = { type: "info", message: null, role: "status", action: null };
  const intl = noticeType(1113).intl;
  obj2.message = intl.format(noticeType.message, { handleOnConfirmAgeHook: callback1 });
  const obj3 = { text: null, onPress: null };
  const intl2 = noticeType(1113).intl;
  obj3.text = intl2.string(noticeType(1113).t.hvVgAZ);
  obj3.onPress = callback;
  obj2.action = obj3;
  obj.children = jsx(noticeType(8025).InlineNotice, { type: "info", message: null, role: "status", action: null });
  return <View style={closure_10().container}>{null}</View>;
}
class MessageRequestsTeenNotice {
  constructor() {
    obj = {
      message: closure_1(closure_2[14])["l+jt8J"],
      noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_NOTICE,
    };
    return jsx(TeenNotice, obj);
  }
}
function UnconfirmedNotice(message) {
  const AGE_CONFIRMATION_NOTICE = constants2.AGE_CONFIRMATION_NOTICE;
  const items = [AGE_CONFIRMATION_NOTICE];
  const effect = noop.useEffect(() => {
    const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, constants.VIEWED);
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
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(
      AGE_CONFIRMATION_NOTICE,
      constants.CONFIRM_AGE,
    );
  }, items2);
  let obj2 = { type: "info", message: null, role: "status", action: null };
  const intl = AGE_CONFIRMATION_NOTICE(1113).intl;
  obj2.message = intl.format(message.message, { handleOnAgeGatedContentHook: callback });
  const obj3 = { text: null, onPress: null };
  const intl2 = AGE_CONFIRMATION_NOTICE(1113).intl;
  obj3.text = intl2.string(AGE_CONFIRMATION_NOTICE(1113).t.FDSSia);
  obj3.onPress = callback1;
  obj2.action = obj3;
  obj.children = jsx(AGE_CONFIRMATION_NOTICE(8025).InlineNotice, {
    type: "info",
    message: null,
    role: "status",
    action: null,
  });
  return <View style={closure_10().container}>{null}</View>;
}
class MessageRequestsUnconfirmedNotice {
  constructor() {
    obj = { message: closure_1(closure_2[14]).tGsCdS };
    return jsx(UnconfirmedNotice, obj);
  }
}
const View = fn(17).View;
let closure_6 = fn(6737).TINY_BRONCO_SETTINGS_LOCATION;
const Constants = fn(7490);
({ SafetySettingsNoticeAction: closure_7, SafetySettingsNoticeType: closure_8 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { container: { marginBottom: nativeDefault.space.PX_8 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsNotices.tsx");

export function ContentFiltersTeenNotice() {
  return <TeenNotice message={_modDef3128.qbBkFI} noticeType={constants2.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
}
export { MessageRequestsTeenNotice };
export function ContentFiltersUnconfirmedNotice() {
  return <UnconfirmedNotice message={_modDef3128.HGJo1F} />;
}
export { MessageRequestsUnconfirmedNotice };
export function useIsEnabled() {
  return TinyBroncoExperiment.useIsTinyBroncoEnabled(closure_6);
}
export function shouldShowUnconfirmedNotice() {
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
}
export function shouldShowTeenNotice() {
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
}
export function useMessageRequestsNoticeVariant() {
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
export function MessageRequestsNotice() {
  const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
  const hasAgeGatedFeatures = RegionalFeatureConfigUtils.useHasAgeGatedFeatures();
  const isAgeVerified = AgeVerificationUtils.useIsAgeVerified();
  useUserIsTeen;
  let tmp8;
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
        tmp8 = str;
      }
      tmpResult = TinyBroncoExperiment;
    }
  }
  if ("unconfirmed" === tmp8) {
    return <MessageRequestsUnconfirmedNotice />;
  } else if ("teen" === tmp8) {
    return <MessageRequestsTeenNotice />;
  } else if (undefined === tmp8) {
    return null;
  }
}
