// discord_app/modules/favorites/hooks/useFavoritesGuildHideOnLeave.tsx
import noop from "noop";
import handleConnectionOpen from "handleConnectionOpen";
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
let result = require("initializeFromUserSettings").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideOnLeave.tsx");

export default function useFavoritesGuildHideOnLeave() {
  const effect = React.useEffect(() => () => {
    if (!obj.isFavoritesGuildId(guildId.getGuildId())) {
      let tmpResult = tmp(tmp2[4]);
      const favoritesAccess = tmpResult.getFavoritesAccess();
      if (tmp4) {
        let hasStoredFavoritesResult = initializeFromUserSettings.hasStoredFavorites();
        if (!hasStoredFavoritesResult) {
          hasStoredFavoritesResult = null != tmp5.favoriteGuildVisibleSetting;
        }
        if (!hasStoredFavoritesResult) {
          tmpResult = tmp(tmp2[5]);
          const result = tmpResult.setFavoritesGuildVisibility(false, "auto_hide_empty_guild");
        }
        tmp5 = initializeFromUserSettings;
      }
      tmp4 = favoritesAccess.hasAccess && favoritesAccess.isFreemium;
    }
  }, []);
};