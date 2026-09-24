// === Module 15675: FavoritesGuildToggleSetting ===

// Module 15675 (FavoritesGuildToggleSetting)
import util from "util" /* 1115 */;
import _modDef3360 from "module_3360" /* 3360 */;
import SettingsConstants from "SettingsConstants" /* 8323 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10571 */;
import FavoritesHooks from "FavoritesHooks" /* 10572 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15676 */;
import SettingBuilders from "SettingBuilders" /* 11811 */;
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