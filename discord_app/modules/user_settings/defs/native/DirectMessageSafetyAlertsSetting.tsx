// === Module 14638: DirectMessageSafetyAlertsSetting ===

// Module 14638 (DirectMessageSafetyAlertsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 9792 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 9793 */;
import InappropriateConversationsDefaultOn from "InappropriateConversationsDefaultOn" /* 9794 */;
import useUserIsConsideredAdultDefault from "useUserIsConsideredAdult" /* 11489 */;
import updateDmSafetyAlertsSetting from "updateDmSafetyAlertsSetting" /* 14639 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  let flag = useUserIsConsideredAdultDefault();
  if (flag == null) {
    flag = true;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "user_settings_mobile_redesign" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "user_settings_mobile_redesign" };
    cResult[1] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = SelfModInappropriateConversationExperiment;
  let tmp8 = !flag;
  const isEligibleForInappropriateConversationDefaultOn = InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn(tmp6);
  if (!flag) {
    tmp8 = isEligibleForInappropriateConversationWarning;
  }
  if (tmp8) {
    tmp8 = !isEligibleForInappropriateConversationDefaultOn;
  }
  return tmp8;
}) : (() => {
  let flag = useUserIsConsideredAdultDefault();
  if (flag == null) {
    flag = true;
  }
  const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
  let tmp4 = !flag;
  const isEligibleForInappropriateConversationDefaultOn = InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
  if (!flag) {
    tmp4 = isEligibleForInappropriateConversationWarning;
  }
  if (tmp4) {
    tmp4 = !isEligibleForInappropriateConversationDefaultOn;
  }
  return tmp4;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.qFsx5q);
  },
  parent() {
    return MobileUserSettings.CONTENT_AND_SOCIAL;
  },
  useValue: useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault,
  onValueChange: updateDmSafetyAlertsSetting.updateDmSafetyAlertsSetting,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    let flag = useUserIsConsideredAdultDefault();
    if (flag == null) {
      flag = true;
    }
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { location: "user_settings_mobile_redesign" };
      cResult[0] = obj2;
      let first = obj2;
    } else {
      first = cResult[0];
    }
    const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning(first);
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { location: "user_settings_mobile_redesign" };
      cResult[1] = obj3;
      let tmp6 = obj3;
    } else {
      tmp6 = cResult[1];
    }
    const tmpResult = SelfModInappropriateConversationExperiment;
    let tmp8 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn(tmp6);
    if (!flag) {
      tmp8 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp8) {
      tmp8 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp8;
  }) : (() => {
    let flag = useUserIsConsideredAdultDefault();
    if (flag == null) {
      flag = true;
    }
    const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    let tmp4 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (!flag) {
      tmp4 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp4) {
      tmp4 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp4;
  })
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;