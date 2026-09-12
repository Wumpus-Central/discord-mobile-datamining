// === Module 10362: showFavoritesGuildAddedToast ===

// Module 10362 (showFavoritesGuildAddedToast)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import StarIcon from "StarIcon" /* 10363 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  const obj = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["4tSWQg"]);
  obj.IconComponent = StarIcon.StarIcon;
  obj.open(obj);
};