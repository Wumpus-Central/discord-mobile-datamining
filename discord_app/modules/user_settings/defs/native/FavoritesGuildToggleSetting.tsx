// === Module 15164: toggle ===

// Module 15164 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 3178 */;
import MobileUserSettings from "MobileUserSettings" /* 7896 */;
import getNextPositionFromChannels from "getNextPositionFromChannels" /* 10332 */;
import useFavoritesAccess from "useFavoritesAccess" /* 10333 */;
import computeIsFavoritesGuildVisibleDefault from "computeIsFavoritesGuildVisible" /* 15165 */;
import createToggle from "createToggle" /* 11292 */;

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