// discord_app/modules/favorites/hooks/useIsFavoritesGuildEnabled.tsx
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildEnabled.tsx");

export const computeIsFavoritesGuildEnabled = function computeIsFavoritesGuildEnabled(isFreemium, favoriteGuildExplicitlyHidden) {
  if (isFreemium) {
    let favoriteGuildEnabled = !favoriteGuildExplicitlyHidden.favoriteGuildExplicitlyHidden;
  } else {
    favoriteGuildEnabled = favoriteGuildExplicitlyHidden.favoriteGuildEnabled;
  }
  return favoriteGuildEnabled;
};
export const getIsFavoritesGuildEnabled = function getIsFavoritesGuildEnabled() {
  if (obj.getFavoritesAccess().isFreemium) {
    let favoriteGuildEnabled = !tmp.favoriteGuildExplicitlyHidden;
  } else {
    favoriteGuildEnabled = tmp.favoriteGuildEnabled;
  }
  return favoriteGuildEnabled;
};
export const useIsFavoritesGuildEnabled = function useIsFavoritesGuildEnabled() {
  isFreemium = isFreemium(9600).useFavoritesAccess("useIsFavoritesGuildEnabled").isFreemium;
  const obj = isFreemium(9600);
  const items = [initializeFromUserSettings];
  return isFreemium(589).useStateFromStores(items, () => {
    if (isFreemium) {
      let favoriteGuildEnabled = !tmp.favoriteGuildExplicitlyHidden;
    } else {
      favoriteGuildEnabled = tmp.favoriteGuildEnabled;
    }
    return favoriteGuildEnabled;
  });
};