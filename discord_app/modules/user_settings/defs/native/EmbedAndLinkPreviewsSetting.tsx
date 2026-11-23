// === Module 16874: EmbedAndLinkPreviewsSetting ===

// Module 16874 (EmbedAndLinkPreviewsSetting)
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5bK9vw"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue: UserSettings.RenderEmbeds.useSetting,
  onValueChange: UserSettings.RenderEmbeds.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EmbedAndLinkPreviewsSetting.tsx");

export default toggle;