// === Module 15144: FavoritesGuildToggleSetting ===

// Module 15144 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1126 */;
import _modDef3367 from "module_3367" /* 3367 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10035 */;
import FavoritesHooks from "FavoritesHooks" /* 10036 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15145 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3367.OT1NK5);
  },
  parent: MobileUserSettings.APPEARANCE,
  usePredicate() {
    const obj = FavoritesHooks;
    return obj.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;