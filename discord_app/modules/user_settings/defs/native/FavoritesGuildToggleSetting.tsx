// === Module 17578: FavoritesGuildToggleSetting ===

// Module 17578 (FavoritesGuildToggleSetting)
import util from "util" /* 1113 */;
import _modDef3606 from "module_3606" /* 3606 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10967 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 17579 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3606.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;