// === Module 11473: openFavoritesGuildAddChannelModal ===

// Module 11473 (openFavoritesGuildAddChannelModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 8899 */;
import size from "module_2" /* 2 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(11474, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export function closeFavoritesGuildAddChannelModal() {
  ModalActionCreatorsDefault.popWithKey(FavoritesGuildAddChannelModal);
}