// === Module 17193: openFavoritesGuildChannelSortModal ===

// Module 17193 (openFavoritesGuildChannelSortModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17194, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  ModalActionCreatorsDefault.popWithKey(FavoritesGuildChannelSortModal);
};