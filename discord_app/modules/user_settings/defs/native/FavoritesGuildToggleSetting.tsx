// === Module 16954: FavoritesGuildToggleSetting ===

// Module 16954 (FavoritesGuildToggleSetting)
import util from "util" /* 1125 */;
import _modDef3445 from "module_3445" /* 3445 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10883 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16955 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3445.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;