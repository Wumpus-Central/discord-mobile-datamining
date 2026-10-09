// === Module 15534: FavoritesGuildToggleSetting ===

// Module 15534 (FavoritesGuildToggleSetting)
import util from "util" /* 1126 */;
import _modDef3439 from "module_3439" /* 3439 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10278 */;
import FavoritesHooks from "FavoritesHooks" /* 10279 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15535 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3439.OT1NK5);
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