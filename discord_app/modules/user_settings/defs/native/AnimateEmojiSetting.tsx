// === Module 14964: toggle ===

// Module 14964 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

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