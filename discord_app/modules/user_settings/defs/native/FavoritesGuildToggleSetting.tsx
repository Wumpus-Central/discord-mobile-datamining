// === Module 15590: FavoritesGuildToggleSetting ===

// Module 15590 (FavoritesGuildToggleSetting)
import util from "util" /* 1115 */;
import _modDef3324 from "module_3324" /* 3324 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10480 */;
import FavoritesHooks from "FavoritesHooks" /* 10481 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15591 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3324.OT1NK5);
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