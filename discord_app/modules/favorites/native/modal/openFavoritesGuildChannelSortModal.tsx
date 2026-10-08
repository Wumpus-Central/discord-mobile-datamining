// === Module 16366: openFavoritesGuildChannelSortModal ===

// Module 16366 (openFavoritesGuildChannelSortModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16367, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  ModalActionCreatorsDefault.popWithKey(FavoritesGuildChannelSortModal);
};