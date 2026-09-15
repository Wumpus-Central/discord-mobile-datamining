// === Module 10365: showFavoritesGuildAddedToast ===

// Module 10365 (showFavoritesGuildAddedToast)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import StarIcon from "StarIcon" /* 10366 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  const obj2 = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["4tSWQg"]);
  obj2.IconComponent = StarIcon.StarIcon;
  ToastActionCreatorsDefault.open(obj2);
};