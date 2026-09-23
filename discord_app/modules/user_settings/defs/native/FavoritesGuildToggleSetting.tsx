// === Module 15661: FavoritesGuildToggleSetting ===

// Module 15661 (FavoritesGuildToggleSetting)
import util from "util" /* 1115 */;
import _modDef3358 from "module_3358" /* 3358 */;
import SettingsConstants from "SettingsConstants" /* 8319 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10566 */;
import FavoritesHooks from "FavoritesHooks" /* 10567 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15662 */;
import SettingBuilders from "SettingBuilders" /* 11805 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3358.OT1NK5);
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