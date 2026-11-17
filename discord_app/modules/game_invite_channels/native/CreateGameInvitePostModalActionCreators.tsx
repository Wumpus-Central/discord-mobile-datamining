// === Module 14348: CreateGameInvitePostModalActionCreators ===

// Module 14348 (CreateGameInvitePostModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

let c3 = "create-game-invite-post";
const result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModalActionCreators.tsx");

export function openCreateGameInvitePostModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14349, dependencyMap.paths), merged, c3);
}
export function closeCreateGameInvitePostModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}