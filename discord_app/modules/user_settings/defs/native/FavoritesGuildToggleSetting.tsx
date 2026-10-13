// === Module 15934: FavoritesGuildToggleSetting ===

// Module 15934 (FavoritesGuildToggleSetting)
import util from "util" /* 1126 */;
import _modDef3442 from "module_3442" /* 3442 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10312 */;
import FavoritesHooks from "FavoritesHooks" /* 10313 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15935 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3442.OT1NK5);
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