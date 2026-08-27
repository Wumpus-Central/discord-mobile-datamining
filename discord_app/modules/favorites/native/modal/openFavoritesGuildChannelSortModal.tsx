// === Module 15642: openFavoritesGuildChannelSortModal ===

// Module 15642 (openFavoritesGuildChannelSortModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef4676.pushLazy(asyncRequireImpl(15643, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef4676.popWithKey(FavoritesGuildChannelSortModal);
};