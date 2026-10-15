// === Module 16267: FavoritesGuildToggleSetting ===

// Module 16267 (FavoritesGuildToggleSetting)
import util from "util" /* 1126 */;
import _modDef3444 from "module_3444" /* 3444 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10545 */;
import FavoritesHooks from "FavoritesHooks" /* 10546 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 16268 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3444.OT1NK5);
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