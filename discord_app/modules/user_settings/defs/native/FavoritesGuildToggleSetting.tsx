// discord_app/modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../favorites/intl/FavoritesGuild.messages.js";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import getNextPositionFromChannels from "../../../favorites/FavoritesActionCreators.tsx";
import useFavoritesAccess from "../../../favorites/FavoritesHooks.tsx";
import computeIsFavoritesGuildVisibleDefault from "../../../favorites/hooks/useIsFavoritesGuildVisible.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.OT1NK5);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  usePredicate() {
    return useFavoritesAccess.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return computeIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: getNextPositionFromChannels.setFavoritesGuildVisibilityFromSettings
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;