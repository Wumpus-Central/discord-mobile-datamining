// === Module 11959: openFavoritesGuildAddChannelModal ===

// Module 11959 (openFavoritesGuildAddChannelModal)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 9078 */;

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = obj132.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(asyncRequireImpl(11960, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  _modDef5260.popWithKey(FavoritesGuildAddChannelModal);
};