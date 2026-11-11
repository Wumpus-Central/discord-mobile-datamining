// discord_app/modules/age_assurance/age_notice/native/AgeNoticeSettingsNotices.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3305 from "../intl/AgeNotice.messages.js";
import RegionalFeatureConfigUtils from "../../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import AgeVerificationUtils from "../../AgeVerificationUtils.tsx";
import AgeVerificationAnalyticsUtils from "../../AgeVerificationAnalyticsUtils.tsx";
import AgeNoticeExperiment from "../AgeNoticeExperiment.tsx";
import AgeVerificationActionCreatorsDefault from "../../AgeVerificationActionCreators.native.tsx";
import useAgeGroupPresentation from "../../useAgeGroupPresentation.tsx";
import useUserIsTeen from "../../../self_mod/hooks/useUserIsTeen.tsx";
import SafetySettingsUtils from "../../../safety_common/SafetySettingsUtils.tsx";
import handleOpenUnconfirmedAgeGroupSupportArticle from "../handleOpenUnconfirmedAgeGroupSupportArticle.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function TeenNotice(noticeType) {
  noticeType = noticeType.noticeType;
  items = [noticeType];
  const effect = noop.useEffect(() => {
    const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.VIEWED);
  }, items);
  const items1 = [noticeType];
  let obj = { style: closure_10().container, children: null };
  const callback = noop.useCallback(() => {
    const result = useAgeGroupPresentation.handleOpenAgeGatedContentArticle();
    const result1 = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(noticeType, constants.LEARN_MORE);
  }, items1);
  const obj2 = { type: "info", message: null, role: "status" };
  const intl = noticeType(1113).intl;
  obj2.message = intl.format(noticeType.message, { handleOnAgeGatedContentHook: callback });
  obj.children = jsx(noticeType(8094).InlineNotice, { type: "info", message: null, role: "status" });
  return <View style={closure_10().container}>{null}</View>;
}
class MessageRequestsTeenNotice {
  constructor() {
    obj = {
      message: closure_1(closure_2[12])["5KHq55"],
      noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_NOTICE,
    };
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
  obj.children = jsx(AGE_CONFIRMATION_NOTICE(8094).InlineNotice, {
    type: "info",
    message: null,
    role: "status",
    action: null,
  });
  return <View style={closure_10().container}>{null}</View>;
}
class MessageRequestsUnconfirmedNotice {
  constructor() {
    obj = { message: closure_1(closure_2[12]).tGsCdS };
    return jsx(UnconfirmedNotice, obj);
  }
}
const View = fn(17).View;
let closure_6 = fn(6778).AGE_NOTICE_SETTINGS_LOCATION;
const Constants = fn(6847);
({ SafetySettingsNoticeAction: metroImportDefault, SafetySettingsNoticeType: closure_8 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj2 = { container: { marginBottom: nativeDefault.space.PX_8 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsNotices.tsx");

export function ContentFiltersTeenNotice() {
  return <TeenNotice message={_modDef3305.HBnyJM} noticeType={constants2.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
}
export { MessageRequestsTeenNotice };
export function ContentFiltersUnconfirmedNotice() {
  return <UnconfirmedNotice message={_modDef3305.HGJo1F} />;
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
