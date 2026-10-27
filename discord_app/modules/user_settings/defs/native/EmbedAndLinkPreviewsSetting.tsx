// === Module 16865: EmbedAndLinkPreviewsSetting ===

// Module 16865 (EmbedAndLinkPreviewsSetting)
import util from "util" /* 1125 */;
import UserSettings from "UserSettings" /* 4800 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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