// === Module 14803: toggle ===

// Module 14803 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import isInAppMessageSoundsEnabled from "isInAppMessageSoundsEnabled" /* 10039 */;
import createToggle from "createToggle" /* 10669 */;

({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = isInAppMessageSoundsEnabled);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jLCRyj);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["wls+Ax"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: isMetaQuest.isMetaQuest
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;