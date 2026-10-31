// discord_app/modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx
import asyncRequireImpl from "../../../../../_runtime/01994_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(18191, dependencyMap.paths),
    undefined,
    FavoritesGuildChannelSortModal,
  );
}
export function closeFavoritesGuildChannelSortModal() {
  ModalActionCreatorsDefault.popWithKey(FavoritesGuildChannelSortModal);
}
