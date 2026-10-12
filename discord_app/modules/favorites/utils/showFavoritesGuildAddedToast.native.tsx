// === Module 10325: showFavoritesGuildAddedToast ===

// Module 10325 (showFavoritesGuildAddedToast)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import StarIcon from "StarIcon" /* 9553 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["4tSWQg"]);
  obj2.icon = StarIcon.StarIcon;
  ToastActionCreatorsDefault.open("FAVORITE_ADDED", obj2);
};