// === Module 15560: InAppMessageSoundsSetting ===

// Module 15560 (InAppMessageSoundsSetting)
import util from "util" /* 1114 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14503 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15550 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 10193 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = InAppMessageSoundsStore);
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.jLCRyj);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["wls+Ax"]);
  },
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled
};
obj = {};
const merged = Object.assign(obj);
obj.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj.usePredicate = function usePredicate() {
  const isDeclarativeSettingsUIAvailable = notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("InAppMessageSoundsSetting");
  return MetaQuestUtils.isMetaQuest() && !isDeclarativeSettingsUIAvailable;
};
const toggle = SettingBuilders.createToggle(obj);
obj = {};
const merged1 = Object.assign(obj);
obj.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj.usePredicate = function usePredicate() {
  const isDeclarativeSettingsUIAvailable = notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("RedesignInAppMessageSoundsSetting");
  return MetaQuestUtils.isMetaQuest() && isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;
export const RedesignInAppMessageSoundsSetting = toggle1;