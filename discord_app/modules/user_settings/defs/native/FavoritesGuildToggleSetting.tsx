// === Module 17830: FavoritesGuildToggleSetting ===

// Module 17830 (FavoritesGuildToggleSetting)
import util from "util" /* 1113 */;
import _modDef3629 from "module_3629" /* 3629 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10881 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17831 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3629.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;