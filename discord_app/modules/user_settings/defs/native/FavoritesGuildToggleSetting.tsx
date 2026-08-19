// === Module 14670: toggle ===

// Module 14670 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 3079 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import getNextPositionFromChannels from "getNextPositionFromChannels" /* 9978 */;
import useFavoritesAccess from "useFavoritesAccess" /* 9979 */;
import computeIsFavoritesGuildVisibleDefault from "computeIsFavoritesGuildVisible" /* 14671 */;
import createToggle from "createToggle" /* 10669 */;

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