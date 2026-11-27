// === Module 16943: FavoritesGuildToggleSetting ===

// Module 16943 (FavoritesGuildToggleSetting)
import util from "util" /* 1112 */;
import _modDef3857 from "module_3857" /* 3857 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10742 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16944 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3857.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;