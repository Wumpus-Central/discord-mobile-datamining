// === Module 17193: FavoritesGuildToggleSetting ===

// Module 17193 (FavoritesGuildToggleSetting)
import util from "util" /* 1125 */;
import _modDef3446 from "module_3446" /* 3446 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10788 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17194 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3446.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;