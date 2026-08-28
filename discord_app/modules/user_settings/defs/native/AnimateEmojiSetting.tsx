// === Module 14950: toggle ===

// Module 14950 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4135 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import createToggle from "createToggle" /* 11006 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.iIaOlc);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCESSIBILITY,
  useValue: explicitContentFromProto.AnimateEmoji.useSetting,
  onValueChange: explicitContentFromProto.AnimateEmoji.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.iIaOlc);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCESSIBILITY,
  useValue: explicitContentFromProto.AnimateEmoji.useSetting,
  onValueChange: explicitContentFromProto.AnimateEmoji.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AnimateEmojiSetting.tsx");

export default toggle;