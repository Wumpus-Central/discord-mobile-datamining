// === Module 13713: CreateGameInvitePostModalActionCreators ===

// Module 13713 (CreateGameInvitePostModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export const openCreateGameInvitePostModal = function openCreateGameInvitePostModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13714, dependencyMap.paths), merged, c3);
};
export const closeCreateGameInvitePostModal = function closeCreateGameInvitePostModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};