// === Module 15095: toggle ===

// Module 15095 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4136 */;
import MobileUserSettings from "MobileUserSettings" /* 7852 */;
import createToggle from "createToggle" /* 11031 */;

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