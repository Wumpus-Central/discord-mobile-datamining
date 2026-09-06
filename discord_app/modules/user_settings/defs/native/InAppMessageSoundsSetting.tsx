// === Module 15495: InAppMessageSoundsSetting ===

// Module 15495 (InAppMessageSoundsSetting)
import util from "util" /* 1114 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 10104 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = InAppMessageSoundsStore);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.jLCRyj);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["wls+Ax"]);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: MetaQuestUtils.isMetaQuest
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;