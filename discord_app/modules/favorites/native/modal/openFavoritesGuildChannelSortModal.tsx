// discord_app/modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx
import { asyncRequireImpl } from "../../../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  ModalActionCreators.pushLazy(asyncRequireImpl(15272, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
};
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  ModalActionCreators.popWithKey(FavoritesGuildChannelSortModal);
};