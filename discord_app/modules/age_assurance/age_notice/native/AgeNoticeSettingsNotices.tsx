// === Module 17026: AgeNoticeSettingsNotices ===

// Module 17026 (AgeNoticeSettingsNotices)
import nativeDefault from "native" /* 575 */;
import _modDef3284 from "module_3284" /* 3284 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5817 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6781 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6784 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6793 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8024 */;
import useUserIsTeen from "useUserIsTeen" /* 8439 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 10253 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 16893 */;
import handleOpenUnconfirmedAgeGroupSupportArticle from "handleOpenUnconfirmedAgeGroupSupportArticle" /* 16933 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17027 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function TeenNotice(noticeType) {
  noticeType = noticeType.noticeType;
  items = [noticeType];
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
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
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
  obj.children = jsx(noticeType(8095).InlineNotice, { type: "info", message: null, role: "status", action: null });
  return <View style={closure_10().container}>{null}</View>;
}
class MessageRequestsTeenNotice {
  constructor() {
    obj = { message: closure_1(closure_2[14])["l+jt8J"], noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_NOTICE };
    return jsx(TeenNotice, obj);
  }
}
function UnconfirmedNotice(message) {
  const AGE_CONFIRMATION_NOTICE = constants2.AGE_CONFIRMATION_NOTICE;
  items = [AGE_CONFIRMATION_NOTICE];
  const effect = noop.useEffect(() => {
    const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, items);
  const items1 = [AGE_CONFIRMATION_NOTICE];
  const items2 = [AGE_CONFIRMATION_NOTICE];
  const callback = noop.useCallback(() => {
    const result = handleOpenUnconfirmedAgeGroupSupportArticle.handleOpenUnconfirmedAgeGroupSupportArticle();
    const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, constants.LEARN_MORE);
  }, items1);
  let obj = { style: closure_10().container, children: null };
  const callback1 = noop.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, items2);
  let obj2 = { type: "info", message: null, role: "status", action: null };
  const intl = AGE_CONFIRMATION_NOTICE(1113).intl;
  obj2.message = intl.format(message.message, { handleOnAgeGatedContentHook: callback });
  const obj3 = { text: null, onPress: null };
  const intl2 = AGE_CONFIRMATION_NOTICE(1113).intl;
  obj3.text = intl2.string(AGE_CONFIRMATION_NOTICE(1113).t.FDSSia);
  obj3.onPress = callback1;
  obj2.action = obj3;
  obj.children = jsx(AGE_CONFIRMATION_NOTICE(8095).InlineNotice, { type: "info", message: null, role: "status", action: null });
  return <View style={closure_10().container}>{null}</View>;
}
class MessageRequestsUnconfirmedNotice {
  constructor() {
    obj = { message: closure_1(closure_2[14]).tGsCdS };
    return jsx(UnconfirmedNotice, obj);
  }
}
const View = fn(17).View;
let closure_6 = fn(6792).AGE_NOTICE_SETTINGS_LOCATION;
const Constants = fn(7554);
({ SafetySettingsNoticeAction: metroImportDefault, SafetySettingsNoticeType: closure_8 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj2 = { container: { marginBottom: nativeDefault.space.PX_8 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsNotices.tsx");

export function ContentFiltersTeenNotice() {
  return <TeenNotice message={_modDef3284.qbBkFI} noticeType={constants2.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
}
export { MessageRequestsTeenNotice };
export function ContentFiltersUnconfirmedNotice() {
  return <UnconfirmedNotice message={_modDef3284.HGJo1F} />;
}
export { MessageRequestsUnconfirmedNotice };
export function useIsEnabled() {
  return AgeNoticeExperiment.useIsAgeNoticeEnabled(closure_6);
}
export function shouldShowUnconfirmedNotice() {
  let hasAgeGatedFeaturesResult = RegionalFeatureConfigUtils.hasAgeGatedFeatures();
  if (hasAgeGatedFeaturesResult) {
    hasAgeGatedFeaturesResult = !AgeVerificationUtils.isAgeVerified();
    const tmpResult = AgeVerificationUtils;
  }
  if (hasAgeGatedFeaturesResult) {
    hasAgeGatedFeaturesResult = AgeNoticeExperiment.isAgeNoticeEnabled(closure_6);
    const tmpResult2 = AgeNoticeExperiment;
  }
  return hasAgeGatedFeaturesResult;
}
export function shouldShowTeenNotice() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  let isAgeNoticeEnabledResult = false === nsfwAllowed;
  if (isAgeNoticeEnabledResult) {
    isAgeNoticeEnabledResult = AgeNoticeExperiment.isAgeNoticeEnabled(closure_6);
  }
  return isAgeNoticeEnabledResult;
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
      if (tmpResult.isAgeNoticeEnabled(closure_6)) {
        return str;
      }
      tmpResult = AgeNoticeExperiment;
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
      if (tmpResult.isAgeNoticeEnabled(closure_6)) {
        tmp8 = str;
      }
      tmpResult = AgeNoticeExperiment;
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