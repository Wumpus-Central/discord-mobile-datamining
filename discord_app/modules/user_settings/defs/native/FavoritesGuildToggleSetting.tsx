// === Module 17945: FavoritesGuildToggleSetting ===

// Module 17945 (FavoritesGuildToggleSetting)
import util from "util" /* 1113 */;
import _modDef3679 from "module_3679" /* 3679 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10944 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17946 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3679.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;