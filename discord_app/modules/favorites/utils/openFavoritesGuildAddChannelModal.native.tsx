// discord_app/modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { showSearchableDestinationListModal } from "../../share/native/showSearchableDestinationListModal.tsx";
const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  showSearchableDestinationListModal(asyncRequireImpl(12136, dependencyMap.paths), { parentId, source }, FavoritesGuildAddChannelModal);
};
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  ModalActionCreators.popWithKey(FavoritesGuildAddChannelModal);
};