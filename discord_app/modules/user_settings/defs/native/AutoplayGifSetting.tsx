// === Module 14963: toggle ===

// Module 14963 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9ptHSs"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCESSIBILITY,
  useValue: explicitContentFromProto.GifAutoPlay.useSetting,
  onValueChange: explicitContentFromProto.GifAutoPlay.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9ptHSs"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCESSIBILITY,
  useValue: explicitContentFromProto.GifAutoPlay.useSetting,
  onValueChange: explicitContentFromProto.GifAutoPlay.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AutoplayGifSetting.tsx");

export default toggle;