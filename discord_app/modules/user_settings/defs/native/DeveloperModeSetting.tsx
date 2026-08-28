// === Module 15062: toggle ===

// Module 15062 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4135 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import createToggle from "createToggle" /* 11006 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ObIb1Q);
  },
  parent: MobileUserSettings.MobileUserSettings.ADVANCED,
  useValue: explicitContentFromProto.DeveloperMode.useSetting,
  onValueChange: explicitContentFromProto.DeveloperMode.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ObIb1Q);
  },
  parent: MobileUserSettings.MobileUserSettings.ADVANCED,
  useValue: explicitContentFromProto.DeveloperMode.useSetting,
  onValueChange: explicitContentFromProto.DeveloperMode.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DeveloperModeSetting.tsx");

export default toggle;