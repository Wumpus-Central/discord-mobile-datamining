// discord_app/modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4763 from "../../../../actions/ModalActionCreators.tsx";

const FavoritesGuildChannelSortModal = "FavoritesGuildChannelSortModal";
const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildChannelSortModal.tsx");

export default function openFavoritesGuildChannelSortModal() {
  _modDef4763.pushLazy(asyncRequireImpl(16142, dependencyMap.paths), undefined, FavoritesGuildChannelSortModal);
}
export const closeFavoritesGuildChannelSortModal = function closeFavoritesGuildChannelSortModal() {
  _modDef4763.popWithKey(FavoritesGuildChannelSortModal);
};
