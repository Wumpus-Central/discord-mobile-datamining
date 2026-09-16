// === Module 15436: FavoritesGuildToggleSetting ===

// Module 15436 (FavoritesGuildToggleSetting)
import util from "util" /* 1115 */;
import _modDef3237 from "module_3237" /* 3237 */;
import SettingsConstants from "SettingsConstants" /* 8091 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10362 */;
import FavoritesHooks from "FavoritesHooks" /* 10363 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15437 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3237.OT1NK5);
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