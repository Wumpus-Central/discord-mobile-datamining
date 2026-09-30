// === Module 15973: openFavoritesGuildChannelSortModal ===

// Module 15973 (openFavoritesGuildChannelSortModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15974, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  ModalActionCreatorsDefault.popWithKey(FavoritesGuildChannelSortModal);
};