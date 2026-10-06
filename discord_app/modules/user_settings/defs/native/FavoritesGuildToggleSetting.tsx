// discord_app/modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx
import intl2 from "../../../../intl/index.native.tsx";
import _modDef3395 from "../../../favorites/intl/FavoritesGuild.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import FavoritesActionCreators from "../../../favorites/FavoritesActionCreators.tsx";
import FavoritesHooks from "../../../favorites/FavoritesHooks.tsx";
import useIsFavoritesGuildVisibleDefault from "../../../favorites/hooks/useIsFavoritesGuildVisible.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings,
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
