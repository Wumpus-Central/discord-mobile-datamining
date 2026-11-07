// === Module 14617: CreateGameInvitePostModalActionCreators ===

// Module 14617 (CreateGameInvitePostModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export function openCreateGameInvitePostModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14618, dependencyMap.paths), merged, c3);
}
export function closeCreateGameInvitePostModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}