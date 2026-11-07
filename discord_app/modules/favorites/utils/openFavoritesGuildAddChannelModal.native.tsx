// === Module 14637: openFavoritesGuildAddChannelModal ===

// Module 14637 (openFavoritesGuildAddChannelModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 13612 */;
import size from "module_2" /* 2 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(14638, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export function closeFavoritesGuildAddChannelModal() {
  ModalActionCreatorsDefault.popWithKey(FavoritesGuildAddChannelModal);
}