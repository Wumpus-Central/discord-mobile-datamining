// === Module 14768: toggle ===

// Module 14768 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.U47N1p);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue: explicitContentFromProto.InlineEmbedMedia.useSetting,
  onValueChange: explicitContentFromProto.InlineEmbedMedia.updateSetting
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaLinksSetting.tsx");

export default toggle;