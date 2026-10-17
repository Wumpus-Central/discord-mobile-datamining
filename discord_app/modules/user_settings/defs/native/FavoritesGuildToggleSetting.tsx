// === Module 16380: FavoritesGuildToggleSetting ===

// Module 16380 (FavoritesGuildToggleSetting)
import util from "util" /* 1128 */;
import _modDef3465 from "module_3465" /* 3465 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10624 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16381 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3465.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;