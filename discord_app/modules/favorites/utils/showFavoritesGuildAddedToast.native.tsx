// === Module 9986: showFavoritesGuildAddedToast ===

// Module 9986 (showFavoritesGuildAddedToast)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import StarIcon from "StarIcon" /* 9410 */;

const result = obj132.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  const obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["4tSWQg"]);
  obj[2] = StarIcon.StarIcon;
  obj.open(obj);
};