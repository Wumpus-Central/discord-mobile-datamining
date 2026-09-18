// === Module 15535: FavoritesGuildToggleSetting ===

// Module 15535 (FavoritesGuildToggleSetting)
import util from "util" /* 1115 */;
import _modDef3322 from "module_3322" /* 3322 */;
import SettingsConstants from "SettingsConstants" /* 8194 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10464 */;
import FavoritesHooks from "FavoritesHooks" /* 10465 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15536 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3322.OT1NK5);
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