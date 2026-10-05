// === Module 15144: FavoritesGuildToggleSetting ===

// Module 15144 (FavoritesGuildToggleSetting)
import util from "util" /* 1126 */;
import _modDef3367 from "module_3367" /* 3367 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10035 */;
import FavoritesHooks from "FavoritesHooks" /* 10036 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15145 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3367.OT1NK5);
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