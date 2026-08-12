// discord_app/modules/favorites/hooks/useFavoritesGuildHideWhenEmpty.tsx
import noop from "noop";
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
const shouldHideEmptyFavoritesNextLaunch = "shouldHideEmptyFavoritesNextLaunch";
let result = require("useFavoritesAccess").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideWhenEmpty.tsx");

export default function useFavoritesGuildHideWhenEmpty() {
  const effect = React.useEffect(() => {
    const favoritesAccess = callback(table[2]).getFavoritesAccess();
    if (tmp4) {
      const Storage = tmp(tmp2[3]).Storage;
      let hasStoredFavoritesResult = true !== Storage.get(closure_4);
      if (!hasStoredFavoritesResult) {
        hasStoredFavoritesResult = initializeFromUserSettings.hasStoredFavorites();
      }
      if (!hasStoredFavoritesResult) {
        const result = tmp(tmp2[4]).setFavoritesGuildVisibility(false, "auto");
        const tmpResult = tmp(tmp2[4]);
      }
      const Storage2 = tmp(tmp2[3]).Storage;
      const result1 = Storage2.set(closure_4, true);
      const tmp5 = closure_4;
    }
  }, []);
};