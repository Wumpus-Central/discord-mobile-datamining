// === Module 15083: FavoritesGuildToggleSetting ===

// Module 15083 (FavoritesGuildToggleSetting)
import util from "util" /* 1115 */;
import _modDef3360 from "module_3360" /* 3360 */;
import SettingsConstants from "SettingsConstants" /* 7590 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9877 */;
import FavoritesHooks from "FavoritesHooks" /* 9878 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15084 */;
import SettingBuilders from "SettingBuilders" /* 11215 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3360.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  usePredicate() {
    return FavoritesHooks.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;