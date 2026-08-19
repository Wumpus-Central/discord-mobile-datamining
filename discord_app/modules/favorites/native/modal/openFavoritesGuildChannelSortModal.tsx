// discord_app/modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../../actions/ModalActionCreators.tsx";

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = obj132.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef5260.pushLazy(asyncRequireImpl(15403, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef5260.popWithKey(FavoritesGuildChannelSortModal);
};