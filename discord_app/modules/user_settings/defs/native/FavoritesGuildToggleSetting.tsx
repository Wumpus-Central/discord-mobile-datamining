// === Module 15159: FavoritesGuildToggleSetting ===

// Module 15159 (FavoritesGuildToggleSetting)
import intl2 from "intl" /* 1126 */;
import _modDef3395 from "module_3395" /* 3395 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10048 */;
import FavoritesHooks from "FavoritesHooks" /* 10049 */;
import useIsFavoritesGuildVisibleDefault from "useIsFavoritesGuildVisible" /* 15160 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3395.OT1NK5);
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