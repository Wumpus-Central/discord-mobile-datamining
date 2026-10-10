// === Module 16555: openFavoritesGuildChannelSortModal ===

// Module 16555 (openFavoritesGuildChannelSortModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16556, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  ModalActionCreatorsDefault.popWithKey(FavoritesGuildChannelSortModal);
};