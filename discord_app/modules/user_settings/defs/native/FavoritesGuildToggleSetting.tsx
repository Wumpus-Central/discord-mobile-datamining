// === Module 15387: FavoritesGuildToggleSetting ===

// Module 15387 (FavoritesGuildToggleSetting)
import util from "util" /* 1114 */;
import _modDef3236 from "module_3236" /* 3236 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10312 */;
import FavoritesHooks from "FavoritesHooks" /* 10313 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15388 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3236.OT1NK5);
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