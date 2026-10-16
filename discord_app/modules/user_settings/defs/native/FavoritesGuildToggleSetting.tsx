// === Module 16300: FavoritesGuildToggleSetting ===

// Module 16300 (FavoritesGuildToggleSetting)
import util from "util" /* 1128 */;
import _modDef3447 from "module_3447" /* 3447 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10560 */;
import FavoritesHooks from "FavoritesHooks" /* 10561 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16301 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3447.OT1NK5);
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