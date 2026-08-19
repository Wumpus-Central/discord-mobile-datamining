// === Module 15402: openFavoritesGuildChannelSortModal ===

// Module 15402 (openFavoritesGuildChannelSortModal)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = obj132.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef5260.pushLazy(asyncRequireImpl(15403, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef5260.popWithKey(FavoritesGuildChannelSortModal);
};