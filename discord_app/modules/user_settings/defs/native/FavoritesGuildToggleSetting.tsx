// === Module 15441: FavoritesGuildToggleSetting ===

// Module 15441 (FavoritesGuildToggleSetting)
import util from "util" /* 1115 */;
import _modDef3239 from "module_3239" /* 3239 */;
import SettingsConstants from "SettingsConstants" /* 8111 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10370 */;
import FavoritesHooks from "FavoritesHooks" /* 10371 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15442 */;
import SettingBuilders from "SettingBuilders" /* 11622 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3239.OT1NK5);
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