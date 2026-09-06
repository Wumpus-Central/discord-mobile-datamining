// discord_app/modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting(
  "modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx",
);

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12771, dependencyMap.paths), merged, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
