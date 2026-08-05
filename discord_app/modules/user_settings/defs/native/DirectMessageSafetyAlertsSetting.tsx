// discord_app/modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.qFsx5q);
  },
  parent() {
    return MobileSetting.CONTENT_AND_SOCIAL;
  },
  useValue: require("useSafetyAlertsSettingOrDefault").useSafetyAlertsSettingOrDefault,
  onValueChange: require("updateDmSafetyAlertsSetting").updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    let flag = require("../../../parent_tools/hooks/useUserIsConsideredAdult.tsx")();
    if (flag == null) {
      flag = true;
    }
    const isEligibleForInappropriateConversationWarning = require("../../../self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx") /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    const obj = require("../../../self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx") /* InappropriateConversationExperiment */;
    let tmp4 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = require("../../../self_mod/inappropriate_conversation/InappropriateConversationsDefaultOn.tsx") /* InappropriateConversationsDefaultOn */.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (!flag) {
      tmp4 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp4) {
      tmp4 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp4;
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.qFsx5q);
  },
  parent() {
    return MobileSetting.CONTENT_AND_SOCIAL;
  },
  useValue: require("useSafetyAlertsSettingOrDefault").useSafetyAlertsSettingOrDefault,
  onValueChange: require("updateDmSafetyAlertsSetting").updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    let flag = require("../../../parent_tools/hooks/useUserIsConsideredAdult.tsx")();
    if (flag == null) {
      flag = true;
    }
    const isEligibleForInappropriateConversationWarning = require("../../../self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx") /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    const obj = require("../../../self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx") /* InappropriateConversationExperiment */;
    let tmp4 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = require("../../../self_mod/inappropriate_conversation/InappropriateConversationsDefaultOn.tsx") /* InappropriateConversationsDefaultOn */.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (!flag) {
      tmp4 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp4) {
      tmp4 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp4;
  }
};
const result = require("InappropriateConversationExperiment").fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;