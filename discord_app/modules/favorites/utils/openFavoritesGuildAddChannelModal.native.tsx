// discord_app/modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import showSearchableDestinationListModalDefault from "../../share/native/showSearchableDestinationListModal.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const FavoritesGuildAddChannelModal = "FavoritesGuildAddChannelModal";
const result = size.fileFinishedImporting("modules/favorites/utils/openFavoritesGuildAddChannelModal.native.tsx");

export default function openFavoritesGuildAddChannelModal(arg0) {
  ({ parentId, source } = arg0);
  showSearchableDestinationListModalDefault(
    asyncRequireImpl(10978, dependencyMap.paths),
    { parentId, source },
    FavoritesGuildAddChannelModal,
  );
}
export const FAVORITES_GUILD_ADD_CHANNEL_MODAL_KEY = "FavoritesGuildAddChannelModal";
export const closeFavoritesGuildAddChannelModal = function closeFavoritesGuildAddChannelModal() {
  ModalActionCreatorsDefault.popWithKey(FavoritesGuildAddChannelModal);
};
