// discord_app/modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4676 from "../../../../actions/ModalActionCreators.tsx";

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef4676.pushLazy(asyncRequireImpl(15643, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef4676.popWithKey(FavoritesGuildChannelSortModal);
};