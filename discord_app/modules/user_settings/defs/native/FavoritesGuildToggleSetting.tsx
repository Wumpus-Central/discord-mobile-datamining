// === Module 16936: FavoritesGuildToggleSetting ===

// Module 16936 (FavoritesGuildToggleSetting)
import util from "util" /* 1112 */;
import _modDef3857 from "module_3857" /* 3857 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10741 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16937 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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