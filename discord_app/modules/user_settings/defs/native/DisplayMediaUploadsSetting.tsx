// === Module 15007: toggle ===

// Module 15007 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VP11No);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue: explicitContentFromProto.InlineAttachmentMedia.useSetting,
  onValueChange: explicitContentFromProto.InlineAttachmentMedia.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.VP11No);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue: explicitContentFromProto.InlineAttachmentMedia.useSetting,
  onValueChange: explicitContentFromProto.InlineAttachmentMedia.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaUploadsSetting.tsx");

export default toggle;