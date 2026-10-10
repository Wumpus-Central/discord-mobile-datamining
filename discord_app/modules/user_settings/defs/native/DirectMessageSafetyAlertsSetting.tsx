// === Module 15090: DirectMessageSafetyAlertsSetting ===

// Module 15090 (DirectMessageSafetyAlertsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10388 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 10389 */;
import InappropriateConversationsDefaultOn from "InappropriateConversationsDefaultOn" /* 10390 */;
import useUserIsConsideredAdultDefault from "useUserIsConsideredAdult" /* 11462 */;
import updateDmSafetyAlertsSetting from "updateDmSafetyAlertsSetting" /* 15091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasDmSafetyAlertsSetting() {
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
}) : (function useHasDmSafetyAlertsSetting() {
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
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function useHasDmSafetyAlertsSetting() {
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
  }) : (function useHasDmSafetyAlertsSetting() {
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