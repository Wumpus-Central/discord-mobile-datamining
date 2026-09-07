// === Module 15327: FavoritesGuildToggleSetting ===

// Module 15327 (FavoritesGuildToggleSetting)
import util from "util" /* 1114 */;
import _modDef3225 from "module_3225" /* 3225 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10228 */;
import FavoritesHooks from "FavoritesHooks" /* 10229 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15328 */;
import SettingBuilders from "SettingBuilders" /* 11473 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3225.OT1NK5);
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