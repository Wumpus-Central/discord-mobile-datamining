// === Module 17638: FavoritesGuildToggleSetting ===

// Module 17638 (FavoritesGuildToggleSetting)
import util from "util" /* 1113 */;
import _modDef3608 from "module_3608" /* 3608 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10950 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17639 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3608.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;