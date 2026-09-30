// === Module 10642: openFavoritesGuildAddChannelModal ===

// Module 10642 (openFavoritesGuildAddChannelModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 10643 */;
import size from "module_2" /* 2 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(10644, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  ModalActionCreatorsDefault.popWithKey(FavoritesGuildAddChannelModal);
};