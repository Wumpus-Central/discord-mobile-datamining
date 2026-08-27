// === Module 15041: toggle ===

// Module 15041 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import isInAppMessageSoundsEnabled from "isInAppMessageSoundsEnabled" /* 10107 */;
import createToggle from "createToggle" /* 10988 */;

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
const obj = {
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
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;