// discord_app/modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3225 from "../../../favorites/intl/FavoritesGuild.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import FavoritesActionCreators from "../../../favorites/FavoritesActionCreators.tsx";
import FavoritesHooks from "../../../favorites/FavoritesHooks.tsx";
import useIsFavoritesGuildVisibleDefault from "../../../favorites/hooks/useIsFavoritesGuildVisible.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3225.OT1NK5);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  usePredicate() {
    return FavoritesHooks.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return useIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: FavoritesActionCreators.setFavoritesGuildVisibilityFromSettings,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
