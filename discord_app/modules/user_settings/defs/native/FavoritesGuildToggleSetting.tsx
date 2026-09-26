// === Module 14873: FavoritesGuildToggleSetting ===

// Module 14873 (FavoritesGuildToggleSetting)
import util from "util" /* 1115 */;
import _modDef3361 from "module_3361" /* 3361 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 9684 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 14874 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3361.OT1NK5);
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