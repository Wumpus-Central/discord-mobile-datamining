// discord_app/modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx
import { MobileSetting } from "MobileSetting";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useUserIsConsideredAdult } from "../../../parent_tools/hooks/useUserIsConsideredAdult.tsx";
import { InappropriateConversationsDefaultOn } from "../../../self_mod/inappropriate_conversation/InappropriateConversationsDefaultOn.tsx";
import { InappropriateConversationExperiment } from "../../../self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.qFsx5q);
  },
  parent() {
    return MobileSetting.CONTENT_AND_SOCIAL;
  },
  useValue: require("useSafetyAlertsSettingOrDefault").useSafetyAlertsSettingOrDefault,
  onValueChange: require("updateDmSafetyAlertsSetting").updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    let flag = useUserIsConsideredAdult();
    if (flag == null) {
      flag = true;
    }
    const isEligibleForInappropriateConversationWarning = InappropriateConversationExperiment /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    const obj = InappropriateConversationExperiment /* InappropriateConversationExperiment */;
    let tmp4 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = InappropriateConversationsDefaultOn /* InappropriateConversationsDefaultOn */.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
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
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.qFsx5q);
  },
  parent() {
    return MobileSetting.CONTENT_AND_SOCIAL;
  },
  useValue: require("useSafetyAlertsSettingOrDefault").useSafetyAlertsSettingOrDefault,
  onValueChange: require("updateDmSafetyAlertsSetting").updateDmSafetyAlertsSetting,
  usePredicate: function useHasDmSafetyAlertsSetting() {
    let flag = useUserIsConsideredAdult();
    if (flag == null) {
      flag = true;
    }
    const isEligibleForInappropriateConversationWarning = InappropriateConversationExperiment /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    const obj = InappropriateConversationExperiment /* InappropriateConversationExperiment */;
    let tmp4 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = InappropriateConversationsDefaultOn /* InappropriateConversationsDefaultOn */.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
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