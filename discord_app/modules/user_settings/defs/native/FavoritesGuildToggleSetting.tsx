// === Module 16885: FavoritesGuildToggleSetting ===

// Module 16885 (FavoritesGuildToggleSetting)
import util from "util" /* 1112 */;
import _modDef3856 from "module_3856" /* 3856 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10696 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16886 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3856.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;