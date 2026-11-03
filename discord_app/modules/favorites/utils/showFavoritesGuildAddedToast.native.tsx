// === Module 10973: showFavoritesGuildAddedToast ===

// Module 10973 (showFavoritesGuildAddedToast)
import util from "util" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5832 */;
import StarIcon from "StarIcon" /* 10193 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["4tSWQg"]);
  obj2.icon = StarIcon.StarIcon;
  ToastActionCreatorsDefault.open("FAVORITE_ADDED", obj2);
};