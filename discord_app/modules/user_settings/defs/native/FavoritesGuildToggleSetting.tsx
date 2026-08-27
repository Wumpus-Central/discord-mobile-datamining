// === Module 14868: toggle ===

// Module 14868 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 3147 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import getNextPositionFromChannels from "getNextPositionFromChannels" /* 10225 */;
import useFavoritesAccess from "useFavoritesAccess" /* 10226 */;
import computeIsFavoritesGuildVisibleDefault from "computeIsFavoritesGuildVisible" /* 14869 */;
import createToggle from "createToggle" /* 10988 */;

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
const obj = {
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
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;